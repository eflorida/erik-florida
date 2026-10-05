import { getReviewRun } from "@/lib/workflow-store";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: RouteContext<"/api/workflow-runs/[id]">,
) {
  const { id } = await context.params;
  if (!/^[a-f0-9-]{36}$/.test(id))
    return Response.json({ error: "Run not found." }, { status: 404 });
  try {
    const run = await getReviewRun(id);
    if (!run)
      return Response.json(
        { error: "Run not found or expired." },
        { status: 404 },
      );
    return Response.json(run, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json(
      { error: "Run temporarily unavailable." },
      { status: 503 },
    );
  }
}
