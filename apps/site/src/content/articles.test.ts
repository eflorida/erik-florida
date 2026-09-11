import { describe, expect, it } from "vitest";

import {
  getArticle,
  getArticleHref,
  getArticleSlugs,
  getWritingArticleSlugs,
  isArticleSlug,
} from "./articles";

describe("editorial registry routing", () => {
  it("gives the overview one route outside the writing collection", () => {
    expect(getArticleSlugs()).toEqual([
      "verification-over-understanding",
      "agentic-engineering",
    ]);
    expect(getArticleHref("agentic-engineering")).toBe("/agentic-engineering");
    expect(getWritingArticleSlugs()).toEqual([
      "verification-over-understanding",
    ]);
    const routes = getArticleSlugs().map(getArticleHref);
    expect(new Set(routes).size).toBe(routes.length);
  });

  it("preserves the existing writing URL", () => {
    expect(getArticleHref("verification-over-understanding")).toBe(
      "/writing/verification-over-understanding",
    );
  });

  it("rejects unknown slugs without attempting an import", async () => {
    expect(isArticleSlug("toString")).toBe(false);
    expect(isArticleSlug("../agentic-engineering")).toBe(false);
    expect(await getArticle("not-registered")).toBeNull();
  });
});
