import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { POST } from "@/app/api/comparisons/route";
import { runComparison } from "@/lib/comparison-engine";

vi.mock("@/lib/comparison-engine", () => ({ runComparison: vi.fn() }));

const previous = {
  key: process.env["OPENAI_API_KEY"],
  enabled: process.env["LAB_COMPARISON_ENABLED"],
  vercel: process.env["VERCEL"],
};

beforeEach(() => {
  vi.clearAllMocks();
  delete process.env["OPENAI_API_KEY"];
  delete process.env["LAB_COMPARISON_ENABLED"];
  delete process.env["VERCEL"];
});

afterEach(() => {
  for (const [name, value] of Object.entries({
    OPENAI_API_KEY: previous.key,
    LAB_COMPARISON_ENABLED: previous.enabled,
    VERCEL: previous.vercel,
  })) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
});

function request(body: string) {
  return new Request("http://localhost/api/comparisons", {
    method: "POST",
    body,
  });
}

test("the endpoint accepts only known fixed cases and stays disabled by default", async () => {
  expect((await POST(request("not-json"))).status).toBe(400);
  expect(
    (await POST(request(JSON.stringify({ caseId: "unlisted" })))).status,
  ).toBe(404);
  expect(
    (await POST(request(JSON.stringify({ caseId: "supported-substitute" }))))
      .status,
  ).toBe(503);
});

test("the endpoint never enables paid comparison on Vercel", async () => {
  process.env["OPENAI_API_KEY"] = "test-key";
  process.env["LAB_COMPARISON_ENABLED"] = "true";
  process.env["VERCEL"] = "1";
  expect(
    (await POST(request(JSON.stringify({ caseId: "supported-substitute" }))))
      .status,
  ).toBe(503);
  expect(runComparison).not.toHaveBeenCalled();
});

test("an enabled request passes only the selected authored case to the engine", async () => {
  process.env["OPENAI_API_KEY"] = "test-key";
  process.env["LAB_COMPARISON_ENABLED"] = "true";
  vi.mocked(runComparison).mockResolvedValue({
    caseId: "missing-evidence",
    decision: "needs-review",
    summary: "Supplier evidence is needed.",
    checks: Array.from({ length: 5 }, (_, index) => ({
      label: `Check ${index + 1}`,
      required: "Required",
      observed: "Not established",
      result: "unknown" as const,
      evidenceId: null,
    })),
    uncertainty: "Armrest adjustment is unconfirmed.",
    model: "test-model",
    inputTokens: 12,
    outputTokens: 8,
    latencyMs: 25,
  });
  const response = await POST(
    request(JSON.stringify({ caseId: "missing-evidence" })),
  );
  expect(response.status).toBe(200);
  expect(response.headers.get("cache-control")).toBe("no-store");
  expect(vi.mocked(runComparison).mock.calls[0]?.[0].id).toBe(
    "missing-evidence",
  );
});
