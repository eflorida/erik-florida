import { z } from "zod";

export const MAX_DIFF_CHARACTERS = 12_000;

export const reviewRequestSchema = z
  .object({
    diff: z
      .string()
      .trim()
      .min(40, "Paste a TypeScript diff with enough context to review.")
      .max(
        MAX_DIFF_CHARACTERS,
        `Keep the diff under ${MAX_DIFF_CHARACTERS.toLocaleString("en-US")} characters.`,
      ),
  })
  .strict()
  .superRefine(({ diff }, context) => {
    if (!/^(diff --git|--- |\+\+\+ |@@)/m.test(diff)) {
      context.addIssue({
        code: "custom",
        message: "Use unified-diff text with a diff header or hunk marker.",
        path: ["diff"],
      });
    }

    if (!/\.tsx?\b/.test(diff)) {
      context.addIssue({
        code: "custom",
        message: "This run accepts TypeScript or TSX diffs only.",
        path: ["diff"],
      });
    }
  });

const findingSchema = z
  .object({
    severity: z.enum(["high", "medium", "low"]),
    title: z.string().trim().min(1).max(100),
    explanation: z.string().trim().min(1).max(500),
    lineReference: z.string().trim().min(1).max(80).nullable(),
    recommendation: z.string().trim().min(1).max(500),
  })
  .strict();

export const reviewResultSchema = z
  .object({
    verdict: z.enum(["approve", "request-changes"]),
    risk: z.enum(["low", "medium", "high"]),
    summary: z.string().trim().min(1).max(600),
    strengths: z.array(z.string().trim().min(1).max(240)).max(4),
    findings: z.array(findingSchema).max(6),
    humanReviewNotes: z.string().trim().min(1).max(500),
  })
  .strict();

export const reviewSuccessSchema = z
  .object({
    ok: z.literal(true),
    review: reviewResultSchema,
    telemetry: z
      .object({
        responseId: z.string().min(1),
        model: z.string().min(1),
        latencyMs: z.number().int().nonnegative(),
        inputTokens: z.number().int().nonnegative(),
        cachedInputTokens: z.number().int().nonnegative(),
        outputTokens: z.number().int().nonnegative(),
        totalTokens: z.number().int().nonnegative(),
        estimatedCostUsd: z.number().nonnegative().nullable(),
        stored: z.literal(false),
      })
      .strict(),
  })
  .strict();

export const reviewErrorSchema = z
  .object({
    ok: z.literal(false),
    code: z.enum([
      "invalid-request",
      "configuration-required",
      "rate-limited",
      "provider-failure",
    ]),
    message: z.string().min(1),
  })
  .strict();

export const reviewApiResponseSchema = z.discriminatedUnion("ok", [
  reviewSuccessSchema,
  reviewErrorSchema,
]);

export type ReviewApiResponse = z.infer<typeof reviewApiResponseSchema>;
export type ReviewResult = z.infer<typeof reviewResultSchema>;
