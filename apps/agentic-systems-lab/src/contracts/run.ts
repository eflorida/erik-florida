import { z } from "zod";

const text = z.string().trim().min(1);
const id = text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

const evidenceSchema = z
  .object({
    id,
    kind: z.enum([
      "contract",
      "inspection",
      "artifact",
      "test",
      "typecheck",
      "lint",
      "evaluation",
    ]),
    label: text,
    summary: text,
    command: text.optional(),
    status: z.literal("verified"),
  })
  .strict();

const artifactSchema = z
  .object({
    kind: z.literal("patch"),
    label: text,
    language: z.literal("typescript"),
    content: text,
  })
  .strict();

const runStepSchema = z
  .object({
    id,
    sequence: z.number().int().positive(),
    phase: z.enum(["intent", "work", "evaluation", "transfer"]),
    label: text,
    status: z.enum(["passed", "awaiting-human"]),
    summary: text,
    detail: text,
    artifact: artifactSchema.optional(),
    evidenceIds: z.array(id).min(1),
  })
  .strict();

export const runSchema = z
  .object({
    schemaVersion: z.literal(1),
    id,
    mode: z.literal("recorded"),
    recordedAt: z.iso.datetime(),
    title: text,
    status: z.literal("accepted-for-human-review"),
    scenario: z
      .object({
        title: text,
        repository: text,
        intent: text,
        input: text,
        acceptanceCriteria: z.array(text).min(1),
      })
      .strict(),
    steps: z.array(runStepSchema).min(1),
    evidence: z.array(evidenceSchema).min(1),
    transfer: z
      .object({
        state: z.literal("awaiting-human"),
        authority: text,
        recommendation: text,
        summary: text,
      })
      .strict(),
  })
  .strict()
  .superRefine((run, context) => {
    const stepIds = run.steps.map((step) => step.id);
    if (new Set(stepIds).size !== stepIds.length) {
      context.addIssue({
        code: "custom",
        message: "Run step IDs must be unique.",
        path: ["steps"],
      });
    }

    const evidenceIds = run.evidence.map((item) => item.id);
    const knownEvidence = new Set(evidenceIds);
    if (knownEvidence.size !== evidenceIds.length) {
      context.addIssue({
        code: "custom",
        message: "Evidence IDs must be unique.",
        path: ["evidence"],
      });
    }

    run.steps.forEach((step, index) => {
      if (step.sequence !== index + 1) {
        context.addIssue({
          code: "custom",
          message: "Run steps must use contiguous sequence numbers.",
          path: ["steps", index, "sequence"],
        });
      }

      for (const evidenceId of step.evidenceIds) {
        if (!knownEvidence.has(evidenceId)) {
          context.addIssue({
            code: "custom",
            message: `Unknown evidence reference: ${evidenceId}`,
            path: ["steps", index, "evidenceIds"],
          });
        }
      }
    });
  });

export type RunRecord = z.infer<typeof runSchema>;
export type RunStep = RunRecord["steps"][number];
export type RunEvidence = RunRecord["evidence"][number];
