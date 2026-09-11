import { z } from "zod";

export const evidenceSchema = z
  .object({
    type: z.enum(["methodology", "repository", "diagram", "public-link"]),
    label: z.string().trim().min(1),
    description: z.string().trim().min(1),
    href: z.url().optional(),
  })
  .strict();

export const articleMetadataSchema = z
  .object({
    slug: z
      .string()
      .trim()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().trim().min(1),
    summary: z.string().trim().min(1).max(240),
    status: z.enum(["draft", "published"]),
    publishedAt: z.iso.date().optional(),
    tags: z.array(z.string().trim().min(1)).min(1),
    evidence: z.array(evidenceSchema),
  })
  .strict()
  .superRefine((metadata, context) => {
    if (metadata.status === "published" && !metadata.publishedAt) {
      context.addIssue({
        code: "custom",
        message: "Published articles require a publication date.",
        path: ["publishedAt"],
      });
    }

    if (metadata.status === "draft" && metadata.publishedAt) {
      context.addIssue({
        code: "custom",
        message: "Draft articles cannot declare a publication date.",
        path: ["publishedAt"],
      });
    }
  });

export type ArticleMetadata = z.infer<typeof articleMetadataSchema>;
export type EvidenceRef = z.infer<typeof evidenceSchema>;

export function parseArticleMetadata(
  value: unknown,
  expectedSlug: string,
): ArticleMetadata {
  const metadata = articleMetadataSchema.parse(value);

  if (metadata.slug !== expectedSlug) {
    throw new Error(
      `Article metadata slug "${metadata.slug}" does not match registry slug "${expectedSlug}".`,
    );
  }

  return metadata;
}
