import { describe, expect, it } from "vitest";

import { parseArticleMetadata } from "./article-schema";

const validDraft = {
  slug: "verification-over-understanding",
  title: "Verification Over Understanding",
  summary: "A valid draft used to prove the article metadata boundary.",
  status: "draft",
  tags: ["Agentic engineering"],
  evidence: [],
} as const;

describe("parseArticleMetadata", () => {
  it("returns schema-inferred metadata for the registered slug", () => {
    expect(
      parseArticleMetadata(validDraft, "verification-over-understanding"),
    ).toEqual(validDraft);
  });

  it("rejects a metadata slug that diverges from the registry", () => {
    expect(() => parseArticleMetadata(validDraft, "another-slug")).toThrow(
      'does not match registry slug "another-slug"',
    );
  });

  it("requires a publication date only after publication", () => {
    expect(() =>
      parseArticleMetadata(
        { ...validDraft, status: "published" },
        validDraft.slug,
      ),
    ).toThrow("Published articles require a publication date.");

    expect(() =>
      parseArticleMetadata(
        { ...validDraft, publishedAt: "2026-09-10" },
        validDraft.slug,
      ),
    ).toThrow("Draft articles cannot declare a publication date.");
  });
});
