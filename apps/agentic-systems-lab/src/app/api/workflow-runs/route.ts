import { workflowRequestSchema } from "@/contracts/workflow-review";
import {
  createReviewRun,
  isWorkerReady,
  RunCapacityError,
} from "@/lib/workflow-store";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 16_000;

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > MAX_REQUEST_BYTES) {
    return Response.json(
      { error: "The submitted diff is too large." },
      { status: 413 },
    );
  }
  const raw = await request.text();
  if (raw.length > MAX_REQUEST_BYTES) {
    return Response.json(
      { error: "The submitted diff is too large." },
      { status: 413 },
    );
  }
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json(
      { error: "Send a valid JSON request." },
      { status: 400 },
    );
  }
  const parsed = workflowRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid diff." },
      { status: 400 },
    );
  }
  if (
    process.env["LAB_WORKFLOW_ENABLED"] !== "true" ||
    !process.env["OPENAI_API_KEY"] ||
    process.env["VERCEL"] ||
    !(await isWorkerReady())
  ) {
    return Response.json(
      { error: "The workflow is not configured on this server." },
      { status: 503 },
    );
  }

  try {
    const id = await createReviewRun(
      parsed.data.diff,
      process.env["LAB_WORKFLOW_MODEL"] ?? "openai/gpt-5.6-sol",
    );
    return Response.json(
      { id, url: `/workspace/runs/${id}` },
      { status: 202, headers: { "cache-control": "no-store" } },
    );
  } catch (error) {
    if (error instanceof RunCapacityError)
      return Response.json({ error: error.message }, { status: 429 });
    return Response.json(
      { error: "The run could not be queued. Try again shortly." },
      { status: 503 },
    );
  }
}
