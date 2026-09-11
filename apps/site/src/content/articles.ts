import type { ComponentType } from "react";

import { parseArticleMetadata, type ArticleMetadata } from "./article-schema";

type ArticleModule = {
  default: ComponentType;
  metadata: unknown;
};

const articleImporters = {
  "verification-over-understanding": () =>
    import("../../content/writing/verification-over-understanding.mdx"),
} satisfies Record<string, () => Promise<ArticleModule>>;

export type ArticleSlug = keyof typeof articleImporters;

export type Article = {
  Content: ComponentType;
  metadata: ArticleMetadata;
};

export function getArticleSlugs(): ArticleSlug[] {
  return Object.keys(articleImporters) as ArticleSlug[];
}

export function isArticleSlug(value: string): value is ArticleSlug {
  return Object.hasOwn(articleImporters, value);
}

export async function getArticle(slug: string): Promise<Article | null> {
  if (!isArticleSlug(slug)) {
    return null;
  }

  const articleModule = await articleImporters[slug]();

  return {
    Content: articleModule.default,
    metadata: parseArticleMetadata(articleModule.metadata, slug),
  };
}

export async function getArticles(): Promise<Article[]> {
  return Promise.all(getArticleSlugs().map(loadRegisteredArticle));
}

async function loadRegisteredArticle(slug: ArticleSlug): Promise<Article> {
  const article = await getArticle(slug);

  if (!article) {
    throw new Error(`Registered article "${slug}" could not be loaded.`);
  }

  return article;
}
