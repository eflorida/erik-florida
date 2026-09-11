import type { ComponentType } from "react";

import { parseArticleMetadata, type ArticleMetadata } from "./article-schema";

type ArticleModule = {
  default: ComponentType;
  metadata: unknown;
};

const articleImporters = {
  "verification-over-understanding": {
    href: "/writing/verification-over-understanding",
    load: () =>
      import("../../content/writing/verification-over-understanding.mdx"),
  },
  "agentic-engineering": {
    href: "/agentic-engineering",
    load: () => import("../../content/pages/agentic-engineering.mdx"),
  },
} as const satisfies Record<
  string,
  { href: `/${string}`; load: () => Promise<ArticleModule> }
>;

export type ArticleSlug = keyof typeof articleImporters;

export type Article = {
  Content: ComponentType;
  metadata: ArticleMetadata;
};

export function getArticleSlugs(): ArticleSlug[] {
  return Object.keys(articleImporters) as ArticleSlug[];
}

export function getArticleHref(slug: ArticleSlug): string {
  return articleImporters[slug].href;
}

export function getWritingArticleSlugs(): ArticleSlug[] {
  return getArticleSlugs().filter(
    (slug) => getArticleHref(slug) === `/writing/${slug}`,
  );
}

export function isArticleSlug(value: string): value is ArticleSlug {
  return Object.hasOwn(articleImporters, value);
}

export async function getArticle(slug: string): Promise<Article | null> {
  if (!isArticleSlug(slug)) {
    return null;
  }

  const articleModule = await articleImporters[slug].load();

  return {
    Content: articleModule.default,
    metadata: parseArticleMetadata(articleModule.metadata, slug),
  };
}

export async function getWritingArticles(): Promise<Article[]> {
  return Promise.all(getWritingArticleSlugs().map(loadRegisteredArticle));
}

async function loadRegisteredArticle(slug: ArticleSlug): Promise<Article> {
  const article = await getArticle(slug);

  if (!article) {
    throw new Error(`Registered article "${slug}" could not be loaded.`);
  }

  return article;
}
