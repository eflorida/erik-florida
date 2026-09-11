import { z } from "zod";

const text = z.string().trim().min(1);
const id = text.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);
const narrativeSchema = z
  .object({ title: text, paragraphs: z.array(text).min(1).max(2) })
  .strict();

export const careerRoleSchema = z
  .object({
    id,
    title: text,
    organization: text,
    start: month,
    end: month.nullable(),
    summary: text,
    highlights: z.array(text),
  })
  .strict()
  .refine((role) => role.end === null || role.end >= role.start, {
    message: "A role cannot end before it starts.",
    path: ["end"],
  });

const chapterSchema = z
  .object({
    id,
    organization: text,
    context: text,
    summary: text,
    roles: z.array(careerRoleSchema).min(1),
    technologies: z.array(text).min(1),
  })
  .strict();

const workSchema = z
  .object({
    id,
    category: text,
    title: text,
    summary: text,
    context: text,
    contribution: text,
    outcome: text,
    disciplines: z.array(text).min(1),
  })
  .strict();

export const careerSchema = z
  .object({
    asOf: z.iso.date(),
    name: text,
    headline: text,
    introduction: text,
    experienceIntroduction: text,
    currentRoleId: id,
    chapters: z.array(chapterSchema).min(1),
    earlierRoles: z.array(careerRoleSchema),
    work: z.array(workSchema).min(1),
    journey: z.array(narrativeSchema.extend({ id, kicker: text })).min(1),
    perspective: narrativeSchema,
    patent: z
      .object({
        number: text,
        title: text,
        granted: z.iso.date(),
        attribution: z.literal("Co-inventor"),
        href: z.url({ protocol: /^https$/ }),
        summary: text,
      })
      .strict(),
  })
  .strict()
  .superRefine((career, context) => {
    const homeHeadingIds = [
      "page-title",
      "perspective-title",
      "featured-note-title",
      ...career.journey.map((section) => `${section.id}-title`),
    ];
    if (new Set(homeHeadingIds).size !== homeHeadingIds.length) {
      context.addIssue({
        code: "custom",
        message: "Homepage narrative headings must have unique IDs.",
        path: ["journey"],
      });
    }
    const chapterRoles = career.chapters.flatMap((chapter) => chapter.roles);
    const roles = [...chapterRoles, ...career.earlierRoles];
    const anchorIds = [
      "career",
      "selected-work",
      "patent",
      "earlier-experience",
      "career-title",
      "selected-work-title",
      "patent-title",
      "earlier-title",
      ...career.chapters.flatMap((chapter) => [
        chapter.id,
        `${chapter.id}-title`,
      ]),
      ...roles.map((role) => role.id),
      ...career.work.flatMap((work) => [work.id, `${work.id}-title`]),
    ];
    if (new Set(anchorIds).size !== anchorIds.length) {
      context.addIssue({
        code: "custom",
        message: "Career anchors must be unique.",
      });
    }
    const current = chapterRoles.find(
      (role) => role.id === career.currentRoleId,
    );
    if (!current || current.end !== null) {
      context.addIssue({
        code: "custom",
        message: "The current role must reference an open-ended role.",
        path: ["currentRoleId"],
      });
    }
  });

export type CareerRecord = z.infer<typeof careerSchema>;
export type CareerRole = z.infer<typeof careerRoleSchema>;
export type CareerChapter = CareerRecord["chapters"][number];
export type SelectedWork = CareerRecord["work"][number];
