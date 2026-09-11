import { describe, expect, it } from "vitest";

import { reviewRequestSchema, reviewResultSchema } from "./review";

const validDiff = `diff --git a/src/value.ts b/src/value.ts
--- a/src/value.ts
+++ b/src/value.ts
@@ -1 +1 @@
-export const value = 1;
+export const value = 2;`;

describe("review contracts", () => {
  it("accepts a bounded TypeScript unified diff", () => {
    expect(reviewRequestSchema.parse({ diff: validDiff }).diff).toBe(validDiff);
  });

  it("rejects non-TypeScript and non-diff input", () => {
    expect(
      reviewRequestSchema.safeParse({ diff: "x".repeat(80) }).success,
    ).toBe(false);
    expect(
      reviewRequestSchema.safeParse({
        diff: validDiff.replaceAll(".ts", ".py"),
      }).success,
    ).toBe(false);
  });

  it("keeps the model response inside the public review contract", () => {
    expect(() =>
      reviewResultSchema.parse({
        verdict: "approve",
        risk: "low",
        summary: "The bounded change is internally consistent.",
        strengths: ["Focused scope"],
        findings: [],
        humanReviewNotes: "Confirm behavior in the complete repository.",
        unexpected: true,
      }),
    ).toThrow();
  });
});
