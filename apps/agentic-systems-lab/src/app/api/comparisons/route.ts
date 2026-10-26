import { comparisonRequestSchema } from "@/contracts/comparison";
import { getComparisonCase } from "@/data/comparisons";
import { runComparison } from "@/lib/comparison-engine";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 200) {
    return Response.json({ error: "Invalid case request." }, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > 200) {
    return Response.json({ error: "Invalid case request." }, { status: 413 });
  }
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Send valid JSON." }, { status: 400 });
  }
  const parsed = comparisonRequestSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Choose a listed case." }, { status: 400 });
  }
  const item = getComparisonCase(parsed.data.caseId);
  if (!item) {
    return Response.json({ error: "Choose a listed case." }, { status: 404 });
  }
  if (
    process.env["LAB_COMPARISON_ENABLED"] !== "true" ||
    !process.env["OPENAI_API_KEY"] ||
    process.env["VERCEL"]
  ) {
    return Response.json(
      { error: "Live comparison is unavailable in this environment." },
      { status: 503 },
    );
  }
  try {
    const result = await runComparison(
      item,
      process.env["LAB_COMPARISON_MODEL"] ?? "openai/gpt-5.6-sol",
    );
    return Response.json(result, {
      headers: { "cache-control": "no-store" },
    });
  } catch {
    return Response.json(
      { error: "The comparison could not be completed. Try again later." },
      { status: 502 },
    );
  }
}
