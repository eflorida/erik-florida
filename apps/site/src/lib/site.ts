import type { Metadata } from "next";

import type { ArticleMetadata } from "@/content/article-schema";

export const site = {
  name: "Erik Florida",
  description:
    "Engineering leadership, agentic software development, and pragmatic technical architecture.",
} as const;

type PageMetadataInput = {
  title?: string;
  description: string;
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  index = true,
}: PageMetadataInput): Metadata {
  const resolvedTitle = title ? `${title} — ${site.name}` : site.name;

  return {
    ...(title ? { title } : {}),
    description,
    openGraph: {
      title: resolvedTitle,
      description,
      siteName: site.name,
      type: "website",
    },
    ...(index
      ? {}
      : {
          robots: {
            index: false,
            follow: false,
          },
        }),
  };
}

export function createArticleMetadata(metadata: ArticleMetadata): Metadata {
  const index = metadata.status === "published";
  const base = createPageMetadata({
    title: metadata.title,
    description: metadata.summary,
    index,
  });

  return {
    ...base,
    openGraph: {
      title: `${metadata.title} — ${site.name}`,
      description: metadata.summary,
      siteName: site.name,
      type: "article",
      ...(metadata.publishedAt
        ? { publishedTime: `${metadata.publishedAt}T00:00:00.000Z` }
        : {}),
    },
  };
}
