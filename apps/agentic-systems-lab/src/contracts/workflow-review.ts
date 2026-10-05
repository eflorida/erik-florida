import { z } from "zod";

import { reviewRequestSchema } from "@/contracts/review";

export const workflowRequestSchema = reviewRequestSchema;

export const riskReportSchema = z
  .object({
    level: z.enum(["low", "medium", "high"]),
    summary: z.string().trim().min(1).max(500),
    findings: z
      .array(
        z
          .object({
            severity: z.enum(["low", "medium", "high"]),
            title: z.string().trim().min(1).max(100),
            reason: z.string().trim().min(1).max(400),
            reference: z.string().trim().max(80).nullable(),
            action: z.string().trim().min(1).max(400),
          })
          .strict(),
      )
      .max(5),
    uncertainty: z.string().trim().min(1).max(350),
  })
  .strict();

export const testPlanSchema = z
  .object({
    strategy: z.string().trim().min(1).max(450),
    cases: z
      .array(
        z
          .object({
            title: z.string().trim().min(1).max(100),
            purpose: z.string().trim().min(1).max(300),
            priority: z.enum(["first", "next"]),
          })
          .strict(),
      )
      .min(1)
      .max(5),
    limits: z.string().trim().min(1).max(350),
  })
  .strict();

export const decisionBriefSchema = z
  .object({
    recommendation: z.enum(["consider-approval", "request-changes"]),
    rationale: z.string().trim().min(1).max(500),
    nextActions: z.array(z.string().trim().min(1).max(180)).min(1).max(4),
  })
  .strict();

export const runOutputSchema = z
  .object({
    risk: riskReportSchema.nullable(),
    tests: testPlanSchema.nullable(),
    brief: decisionBriefSchema.nullable(),
  })
  .strict();

export const runEventSchema = z
  .object({
    sequence: z.number().int().positive(),
    at: z.string().datetime(),
    step: z.enum([
      "queue",
      "preflight",
      "risk",
      "tests",
      "synthesis",
      "system",
    ]),
    state: z.enum(["queued", "started", "completed", "failed"]),
    message: z.string().min(1).max(240),
  })
  .strict();

export const workflowRunSchema = z
  .object({
    id: z.string().uuid(),
    status: z.enum(["queued", "running", "completed", "failed"]),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    expiresAt: z.string().datetime(),
    attempt: z.number().int().nonnegative(),
    output: runOutputSchema,
    events: z.array(runEventSchema),
    error: z.string().nullable(),
    model: z.string(),
    inputCharacters: z.number().int().nonnegative(),
    inputTokens: z.number().int().nonnegative(),
    outputTokens: z.number().int().nonnegative(),
    estimatedCostUsd: z.number().nonnegative().nullable(),
  })
  .strict();

export type WorkflowRun = z.infer<typeof workflowRunSchema>;
export type RunOutput = z.infer<typeof runOutputSchema>;
export type RunEvent = z.infer<typeof runEventSchema>;
