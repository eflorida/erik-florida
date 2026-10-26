import { expect, test } from "vitest";

import { comparisonCases } from "@/data/comparisons";
import { runComparison, type Extractor } from "@/lib/comparison-engine";

function extractor(values: {
  seatHeightMinCm: number | null;
  seatHeightMaxCm: number | null;
  loadKg: number | null;
  adjustableLumbar: boolean | null;
  adjustableArms: boolean | null;
  evidenceIds: [string, string, string, string, string];
}): Extractor {
  return async () => ({
    extraction: {
      seatHeightMinCm: {
        value: values.seatHeightMinCm,
        evidenceId: values.evidenceIds[0],
      },
      seatHeightMaxCm: {
        value: values.seatHeightMaxCm,
        evidenceId: values.evidenceIds[1],
      },
      loadKg: { value: values.loadKg, evidenceId: values.evidenceIds[2] },
      adjustableLumbar: {
        value: values.adjustableLumbar,
        evidenceId: values.evidenceIds[3],
      },
      adjustableArms: {
        value: values.adjustableArms,
        evidenceId: values.evidenceIds[4],
      },
      uncertainty: "Only the supplied notes were read.",
    },
    usage: { inputTokens: 100, outputTokens: 50, latencyMs: 250 },
  });
}

test("a fully supported candidate meets stated rules without receiving purchasing authority", async () => {
  const result = await runComparison(
    comparisonCases[0]!,
    "test-model",
    extractor({
      seatHeightMinCm: 42,
      seatHeightMaxCm: 56,
      loadKg: 136,
      adjustableLumbar: true,
      adjustableArms: true,
      evidenceIds: ["A1", "A1", "A1", "A2", "A2"],
    }),
  );
  expect(result.decision).toBe("meets-stated-rules");
  expect(result.checks.every((check) => check.result === "pass")).toBe(true);
  expect(result.summary).toMatch(/person still confirms/);
  expect(result.inputTokens).toBe(100);
});

test("hard mismatches override otherwise supported properties", async () => {
  const result = await runComparison(
    comparisonCases[1]!,
    "test-model",
    extractor({
      seatHeightMinCm: 46,
      seatHeightMaxCm: 58,
      loadKg: 110,
      adjustableLumbar: false,
      adjustableArms: true,
      evidenceIds: ["M1", "M1", "M1", "M2", "M2"],
    }),
  );
  expect(result.decision).toBe("does-not-meet");
  expect(result.checks.filter((check) => check.result === "fail")).toHaveLength(
    3,
  );
});

test("missing facts and unrecognized source IDs remain open questions", async () => {
  const result = await runComparison(
    comparisonCases[2]!,
    "test-model",
    extractor({
      seatHeightMinCm: 42,
      seatHeightMaxCm: 56,
      loadKg: 136,
      adjustableLumbar: true,
      adjustableArms: true,
      evidenceIds: ["D1", "D1", "D1", "D2", "X9"],
    }),
  );
  expect(result.decision).toBe("needs-review");
  expect(result.checks.at(-1)).toMatchObject({
    result: "unknown",
    evidenceId: null,
  });
});
