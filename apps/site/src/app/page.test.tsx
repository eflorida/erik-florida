import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ArticleMetadata } from "@/content/article-schema";

import { HomeView } from "./page";

const featuredArticle: ArticleMetadata = {
  slug: "verification-over-understanding",
  title: "Verification Over Understanding",
  summary: "A summary supplied by the validated content boundary.",
  status: "draft",
  tags: ["Verification"],
  evidence: [],
};

describe("Home", () => {
  it("states the professional position and links into the content path", () => {
    render(<HomeView featuredArticle={featuredArticle} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Engineering leadership for the agentic era.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Agentic leverage is an organizational design problem.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Read the first note/ }),
    ).toHaveAttribute("href", "/writing/verification-over-understanding");
  });
});
