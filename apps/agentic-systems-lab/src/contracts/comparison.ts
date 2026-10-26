import { z } from "zod";

const sourceNoteSchema = z
  .object({
    id: z.string().regex(/^[A-Z][0-9]$/),
    label: z.string().min(1).max(80),
    text: z.string().min(1).max(500),
  })
  .strict();

export const comparisonCaseSchema = z
  .object({
    id: z.string().regex(/^[a-z-]+$/),
    title: z.string().min(1).max(100),
    question: z.string().min(1).max(180),
    requested: z
      .object({
        name: z.string().min(1).max(100),
        seatHeightMinCm: z.number().int().positive().max(100),
        seatHeightMaxCm: z.number().int().positive().max(100),
        minLoadKg: z.number().int().positive().max(300),
        adjustableLumbar: z.boolean(),
        adjustableArms: z.boolean(),
      })
      .strict(),
    candidate: z
      .object({
        name: z.string().min(1).max(100),
        notes: z.array(sourceNoteSchema).min(1).max(8),
      })
      .strict(),
  })
  .strict()
  .superRefine((item, context) => {
    if (item.requested.seatHeightMinCm > item.requested.seatHeightMaxCm) {
      context.addIssue({
        code: "custom",
        message: "The requested seat-height range is inverted.",
        path: ["requested", "seatHeightMinCm"],
      });
    }
    const ids = item.candidate.notes.map((note) => note.id);
    if (new Set(ids).size !== ids.length) {
      context.addIssue({
        code: "custom",
        message: "Source note IDs must be unique within a case.",
        path: ["candidate", "notes"],
      });
    }
  });

export const comparisonRequestSchema = z
  .object({
    caseId: z.string().regex(/^[a-z-]{1,60}$/),
  })
  .strict();

const numericFactSchema = z
  .object({
    value: z.number().int().min(0).max(300).nullable(),
    evidenceId: z.string().max(8).nullable(),
  })
  .strict();

const booleanFactSchema = z
  .object({
    value: z.boolean().nullable(),
    evidenceId: z.string().max(8).nullable(),
  })
  .strict();

export const comparisonExtractionSchema = z
  .object({
    seatHeightMinCm: numericFactSchema,
    seatHeightMaxCm: numericFactSchema,
    loadKg: numericFactSchema,
    adjustableLumbar: booleanFactSchema,
    adjustableArms: booleanFactSchema,
    uncertainty: z.string().min(1).max(350),
  })
  .strict();

export const comparisonCheckSchema = z
  .object({
    label: z.string(),
    required: z.string(),
    observed: z.string(),
    result: z.enum(["pass", "fail", "unknown"]),
    evidenceId: z.string().nullable(),
  })
  .strict();

export const comparisonResultSchema = z
  .object({
    caseId: z.string(),
    decision: z.enum(["meets-stated-rules", "does-not-meet", "needs-review"]),
    summary: z.string(),
    checks: z.array(comparisonCheckSchema).length(5),
    uncertainty: z.string(),
    model: z.string(),
    inputTokens: z.number().int().nonnegative(),
    outputTokens: z.number().int().nonnegative(),
    latencyMs: z.number().int().nonnegative(),
  })
  .strict();

export type ComparisonCase = z.infer<typeof comparisonCaseSchema>;
export type ComparisonExtraction = z.infer<typeof comparisonExtractionSchema>;
export type ComparisonResult = z.infer<typeof comparisonResultSchema>;
