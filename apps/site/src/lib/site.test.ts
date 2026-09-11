import { describe, expect, it } from "vitest";

import type { ArticleMetadata } from "@/content/article-schema";

import { createArticleMetadata } from "./site";

const metadata: ArticleMetadata = {
  slug: "verification-over-understanding",
  title: "Verification Over Understanding",
  summary: "An article metadata fixture.",
  status: "draft",
  tags: ["Verification"],
  evidence: [],
};

describe("createArticleMetadata", () => {
  it("prevents draft content from entering search indexes", () => {
    expect(createArticleMetadata(metadata).robots).toEqual({
      index: false,
      follow: false,
    });
  });

  it("allows explicitly published content to be indexed", () => {
    expect(
      createArticleMetadata({
        ...metadata,
        status: "published",
        publishedAt: "2026-09-10",
      }).robots,
    ).toBeUndefined();
  });
});
