import { describe, expect, it } from "vitest";

import source from "../../content/runs/redirect-safety.json";

import { runSchema } from "./run";

describe("run contract", () => {
  it("accepts the reference run", () => {
    const run = runSchema.parse(source);

    expect(run.id).toBe("run-redirect-safety-001");
    expect(run.mode).toBe("reference-scenario");
    expect(run.provenance).toMatchObject({
      classification: "original-reference-scenario",
      executionEvidence: "not-retained",
    });
  });

  it("rejects evidence references that do not resolve", () => {
    const steps = source.steps.map((step, index) =>
      index === 0 ? { ...step, evidenceIds: ["missing-evidence"] } : step,
    );

    expect(() => runSchema.parse({ ...source, steps })).toThrow(
      "Unknown evidence reference",
    );
  });

  it("rejects reordered sequence values", () => {
    const steps = source.steps.map((step, index) =>
      index === 1 ? { ...step, sequence: 8 } : step,
    );

    expect(() => runSchema.parse({ ...source, steps })).toThrow(
      "contiguous sequence numbers",
    );
  });
});
