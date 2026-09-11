import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ArticleMetadata } from "@/content/article-schema";

import { AgenticOverview } from "./agentic-overview";
import { OverviewSection } from "./overview-section";

const metadata: ArticleMetadata = {
  slug: "agentic-engineering",
  title: "Engineering beyond code generation.",
  summary: "A validated overview summary.",
  status: "draft",
  tags: ["Agentic engineering"],
  evidence: [],
};

function Content() {
  return (
    <OverviewSection
      id="mission-control"
      kicker="Developing methodology"
      title="From intent to verified work."
    >
      <p>Content supplied by the existing MDX boundary.</p>
    </OverviewSection>
  );
}

describe("AgenticOverview", () => {
  it("renders typed content, draft status, and native section navigation", () => {
    render(<AgenticOverview Content={Content} metadata={metadata} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      metadata.title,
    );
    expect(screen.getByText(metadata.summary)).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Draft for review");
    const navigation = screen.getByRole("navigation", { name: "On this page" });
    expect(within(navigation).getAllByRole("link")).toHaveLength(4);
    expect(
      within(navigation).getByRole("link", { name: "Mission Control" }),
    ).toHaveAttribute("href", "#mission-control");
    const region = screen.getByRole("region", {
      name: "From intent to verified work.",
    });
    expect(region).toHaveAttribute("id", "mission-control");
    expect(
      within(region).getByText(
        "Content supplied by the existing MDX boundary.",
      ),
    ).toBeInTheDocument();
  });

  it("removes the draft notice only for published metadata", () => {
    render(
      <AgenticOverview
        Content={Content}
        metadata={{
          ...metadata,
          status: "published",
          publishedAt: "2026-09-11",
        }}
      />,
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
