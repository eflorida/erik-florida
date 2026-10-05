import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterAll, expect, test } from "vitest";

import { createReviewWorkflow, type Reviewers } from "@/lib/workflow-engine";
import {
  claimReviewRun,
  completeReviewRun,
  createReviewRun,
  getReviewRun,
  recoverInterruptedRuns,
  RunCapacityError,
} from "@/lib/workflow-store";

const directory = mkdtempSync(join(tmpdir(), "lab-workflow-"));
process.env["LAB_DATABASE_URL"] = `file:${join(directory, "runs.db")}`;
afterAll(() => rmSync(directory, { recursive: true, force: true }));

const diff = `diff --git a/src/redirect.ts b/src/redirect.ts
--- a/src/redirect.ts
+++ b/src/redirect.ts
@@ -1 +1 @@
-window.location.assign(target)
+window.location.assign(target.startsWith("/") ? target : "/")`;

test("Mastra delegates both reports, persists real transitions, and completes a resumable run", async () => {
  const id = await createReviewRun(diff, "test-model");
  const queued = await getReviewRun(id);
  expect(queued?.status).toBe("queued");
  const claim = await claimReviewRun();
  expect(claim?.id).toBe(id);

  const called: string[] = [];
  const reviewers: Reviewers = {
    async risk() {
      called.push("risk");
      return {
        level: "medium",
        summary: "Double slash may redirect externally.",
        findings: [
          {
            severity: "medium",
            title: "Protocol-relative target",
            reason: "The prefix check also accepts //.",
            reference: "+1",
            action: "Reject a double slash.",
          },
        ],
        uncertainty: "No surrounding router context was supplied.",
      };
    },
    async tests() {
      called.push("tests");
      return {
        strategy: "Test the redirect boundary.",
        cases: [
          {
            title: "Reject double slash",
            purpose: "Prevent external navigation.",
            priority: "first",
          },
        ],
        limits: "No test has run.",
      };
    },
    async synthesis() {
      called.push("synthesis");
      return {
        recommendation: "request-changes",
        rationale: "The boundary remains open.",
        nextActions: ["Fix the double slash case.", "Run focused tests."],
      };
    },
  };
  const workflow = createReviewWorkflow(id, reviewers);
  const run = await workflow.createRun({ runId: id });
  const result = await run.start({ inputData: { diff } });
  expect(result.status).toBe("success");
  await completeReviewRun(id);

  const stored = await getReviewRun(id);
  expect(stored?.status).toBe("completed");
  expect(stored?.output.risk?.findings[0]?.title).toBe(
    "Protocol-relative target",
  );
  expect(stored?.output.tests?.cases[0]?.title).toBe("Reject double slash");
  expect(stored?.output.brief?.recommendation).toBe("request-changes");
  expect(stored?.events[0]?.step).toBe("queue");
  expect(
    stored?.events.map((event) => `${event.step}:${event.state}`),
  ).toContain("synthesis:completed");
  expect(called).toContain("risk");
  expect(called).toContain("tests");
  expect(called.at(-1)).toBe("synthesis");
});

test("the queue rejects excess work and an interrupted worker leaves an honest failure", async () => {
  const first = await createReviewRun(diff, "test-model");
  await createReviewRun(diff, "test-model");
  await createReviewRun(diff, "test-model");
  await expect(createReviewRun(diff, "test-model")).rejects.toBeInstanceOf(
    RunCapacityError,
  );
  const claimed = await claimReviewRun();
  expect(claimed?.id).toBe(first);
  await recoverInterruptedRuns();
  const stored = await getReviewRun(first);
  expect(stored?.status).toBe("failed");
  expect(stored?.events.at(-1)?.state).toBe("failed");
  expect(stored?.error).toMatch(/worker stopped/);
});
