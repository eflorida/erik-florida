import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

import { createClient, type Client } from "@libsql/client";

import {
  runOutputSchema,
  workflowRunSchema,
  type RunOutput,
  type WorkflowRun,
} from "@/contracts/workflow-review";

const emptyOutput: RunOutput = { risk: null, tests: null, brief: null };
const retentionMs = 24 * 60 * 60 * 1000;
export class RunCapacityError extends Error {}

let clientPromise: Promise<Client> | undefined;

async function database() {
  if (!clientPromise) {
    clientPromise = (async () => {
      const url =
        process.env["LAB_DATABASE_URL"] ??
        `file:${join(process.cwd(), ".lab-data", "reviews.db")}`;
      if (url.startsWith("file:"))
        mkdirSync(dirname(url.slice(5)), { recursive: true });
      const authToken = process.env["LAB_DATABASE_AUTH_TOKEN"];
      const client = createClient({ url, ...(authToken ? { authToken } : {}) });
      await client.executeMultiple(`
        CREATE TABLE IF NOT EXISTS workflow_runs (
          id TEXT PRIMARY KEY,
          status TEXT NOT NULL,
          diff TEXT NOT NULL,
          model TEXT NOT NULL,
          output_json TEXT NOT NULL,
          error TEXT,
          attempt INTEGER NOT NULL DEFAULT 0,
          input_characters INTEGER NOT NULL,
          input_tokens INTEGER NOT NULL DEFAULT 0,
          output_tokens INTEGER NOT NULL DEFAULT 0,
          estimated_cost_usd REAL,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          expires_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS workflow_events (
          sequence INTEGER PRIMARY KEY AUTOINCREMENT,
          run_id TEXT NOT NULL,
          at TEXT NOT NULL,
          step TEXT NOT NULL,
          state TEXT NOT NULL,
          message TEXT NOT NULL,
          FOREIGN KEY (run_id) REFERENCES workflow_runs(id)
        );
        CREATE INDEX IF NOT EXISTS workflow_events_run ON workflow_events(run_id, sequence);
        CREATE TABLE IF NOT EXISTS workflow_worker (
          id INTEGER PRIMARY KEY CHECK (id = 1),
          seen_at TEXT NOT NULL
        );
      `);
      return client;
    })();
  }
  return clientPromise;
}

export async function recordWorkerHeartbeat() {
  const db = await database();
  await db.execute({
    sql: "INSERT INTO workflow_worker (id, seen_at) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET seen_at = excluded.seen_at",
    args: [new Date().toISOString()],
  });
}

export async function clearWorkerHeartbeat() {
  const db = await database();
  await db.execute("DELETE FROM workflow_worker WHERE id = 1");
}

export async function isWorkerReady() {
  try {
    const db = await database();
    const row = (
      await db.execute("SELECT seen_at FROM workflow_worker WHERE id = 1")
    ).rows[0];
    if (!row) return false;
    const age = Date.now() - Date.parse(String(row["seen_at"]));
    return age >= 0 && age < 5_000;
  } catch {
    return false;
  }
}

export async function createReviewRun(diff: string, model: string) {
  const db = await database();
  const now = new Date();
  const id = crypto.randomUUID();
  const expiresAt = new Date(now.getTime() + retentionMs).toISOString();
  const [admitted] = await db.batch(
    [
      {
        sql: `INSERT INTO workflow_runs
        (id, status, diff, model, output_json, input_characters, created_at, updated_at, expires_at)
        SELECT ?, 'queued', ?, ?, ?, ?, ?, ?, ?
        WHERE (SELECT COUNT(*) FROM workflow_runs WHERE status IN ('queued', 'running')) < 3
          AND (SELECT COUNT(*) FROM workflow_runs WHERE created_at >= ?) < 20`,
        args: [
          id,
          diff,
          model,
          JSON.stringify(emptyOutput),
          diff.length,
          now.toISOString(),
          now.toISOString(),
          expiresAt,
          new Date(now.getTime() - retentionMs).toISOString(),
        ],
      },
      {
        sql: `INSERT INTO workflow_events (run_id, at, step, state, message)
        SELECT ?, ?, 'queue', 'queued', 'Review accepted for background work.'
        WHERE EXISTS (SELECT 1 FROM workflow_runs WHERE id = ?)`,
        args: [id, now.toISOString(), id],
      },
    ],
    "write",
  );
  if (!admitted?.rowsAffected)
    throw new RunCapacityError(
      "The Lab is at its review limit. Try again later.",
    );
  return id;
}

export async function getReviewRun(id: string): Promise<WorkflowRun | null> {
  const db = await database();
  const row = (
    await db.execute({
      sql: "SELECT * FROM workflow_runs WHERE id = ? AND expires_at > ?",
      args: [id, new Date().toISOString()],
    })
  ).rows[0];
  if (!row) return null;
  const eventRows = (
    await db.execute({
      sql: "SELECT * FROM workflow_events WHERE run_id = ? ORDER BY sequence",
      args: [id],
    })
  ).rows;
  return workflowRunSchema.parse({
    id: row["id"],
    status: row["status"],
    createdAt: row["created_at"],
    updatedAt: row["updated_at"],
    expiresAt: row["expires_at"],
    attempt: row["attempt"],
    output: runOutputSchema.parse(JSON.parse(String(row["output_json"]))),
    events: eventRows.map((event) => ({
      sequence: event["sequence"],
      at: event["at"],
      step: event["step"],
      state: event["state"],
      message: event["message"],
    })),
    error: row["error"],
    model: row["model"],
    inputCharacters: row["input_characters"],
    inputTokens: row["input_tokens"],
    outputTokens: row["output_tokens"],
    estimatedCostUsd: row["estimated_cost_usd"],
  });
}

export async function claimReviewRun() {
  const db = await database();
  const now = new Date().toISOString();
  const result = await db.execute({
    sql: `UPDATE workflow_runs SET status = 'running', attempt = attempt + 1, updated_at = ?
      WHERE id = (SELECT id FROM workflow_runs WHERE status = 'queued' AND expires_at > ? ORDER BY created_at LIMIT 1)
      RETURNING id, diff, model`,
    args: [now, now],
  });
  const row = result.rows[0];
  if (!row) return null;
  await recordEvent(
    String(row["id"]),
    "preflight",
    "started",
    "Validating the submitted change before delegation.",
  );
  return {
    id: String(row["id"]),
    diff: String(row["diff"]),
    model: String(row["model"]),
  };
}

export async function recordEvent(
  id: string,
  step: "queue" | "preflight" | "risk" | "tests" | "synthesis" | "system",
  state: "queued" | "started" | "completed" | "failed",
  message: string,
) {
  const db = await database();
  const now = new Date().toISOString();
  await db.batch(
    [
      {
        sql: "INSERT INTO workflow_events (run_id, at, step, state, message) VALUES (?, ?, ?, ?, ?)",
        args: [id, now, step, state, message],
      },
      {
        sql: "UPDATE workflow_runs SET updated_at = ? WHERE id = ?",
        args: [now, id],
      },
    ],
    "write",
  );
}

export async function recordOutput(
  id: string,
  field: keyof RunOutput,
  value: NonNullable<RunOutput[keyof RunOutput]>,
) {
  const db = await database();
  await db.execute({
    sql: "UPDATE workflow_runs SET output_json = json_set(output_json, ?, json(?)), updated_at = ? WHERE id = ?",
    args: [`$.${field}`, JSON.stringify(value), new Date().toISOString(), id],
  });
}

export async function addUsage(
  id: string,
  inputTokens: number,
  outputTokens: number,
  estimatedCostUsd: number | null,
) {
  const db = await database();
  await db.execute({
    sql: `UPDATE workflow_runs SET input_tokens = input_tokens + ?, output_tokens = output_tokens + ?,
      estimated_cost_usd = CASE WHEN ? IS NULL THEN NULL ELSE COALESCE(estimated_cost_usd, 0) + ? END,
      updated_at = ? WHERE id = ?`,
    args: [
      inputTokens,
      outputTokens,
      estimatedCostUsd,
      estimatedCostUsd,
      new Date().toISOString(),
      id,
    ],
  });
}

export async function completeReviewRun(id: string) {
  const db = await database();
  const now = new Date().toISOString();
  await db.batch(
    [
      {
        sql: "UPDATE workflow_runs SET status = 'completed', diff = '', updated_at = ? WHERE id = ?",
        args: [now, id],
      },
      {
        sql: "INSERT INTO workflow_events (run_id, at, step, state, message) VALUES (?, ?, 'system', 'completed', 'Review packet ready for human judgment.')",
        args: [id, now],
      },
    ],
    "write",
  );
}

export async function failReviewRun(id: string, message: string) {
  const db = await database();
  const now = new Date().toISOString();
  await db.batch(
    [
      {
        sql: "UPDATE workflow_runs SET status = 'failed', error = ?, updated_at = ? WHERE id = ?",
        args: [message, now, id],
      },
      {
        sql: "INSERT INTO workflow_events (run_id, at, step, state, message) VALUES (?, ?, 'system', 'failed', ?) ",
        args: [id, now, message],
      },
    ],
    "write",
  );
}

export async function recoverInterruptedRuns() {
  const db = await database();
  const rows = (
    await db.execute("SELECT id FROM workflow_runs WHERE status = 'running'")
  ).rows;
  for (const row of rows)
    await failReviewRun(
      String(row["id"]),
      "The worker stopped before the review finished. Start a new review to retry.",
    );
}

export async function purgeExpiredRuns() {
  const db = await database();
  const now = new Date().toISOString();
  await db.batch(
    [
      {
        sql: "DELETE FROM workflow_events WHERE run_id IN (SELECT id FROM workflow_runs WHERE expires_at <= ?)",
        args: [now],
      },
      { sql: "DELETE FROM workflow_runs WHERE expires_at <= ?", args: [now] },
    ],
    "write",
  );
}
