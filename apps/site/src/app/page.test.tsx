import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ArticleMetadata } from "@/content/article-schema";
import { HomeView } from "@/components/career/home-view";
import { getCareer } from "@/content/career";

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
    render(<HomeView career={getCareer()} featuredArticle={featuredArticle} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Engineering leadership for the agentic era.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /View experience/ }),
    ).toHaveAttribute("href", "/experience");
    expect(
      screen.getByText("Software Engineering Manager"),
    ).toBeInTheDocument();
    const patent = screen.getByRole("link", {
      name: "View patent (USPTO PDF) (opens in a new tab)",
    });
    expect(patent).toHaveAttribute("href", getCareer().patent.href);
    expect(patent).toHaveAttribute("target", "_blank");
    expect(patent).toHaveAttribute("rel", "noopener noreferrer");
    const hero = screen.getByRole("region", { name: getCareer().headline });
    expect(
      within(hero).getByText(getCareer().introduction),
    ).toBeInTheDocument();
    expect(hero).toContainElement(patent);
    expect(within(hero).getByText(/Co-inventor/)).toBeInTheDocument();
    for (const section of getCareer().journey) {
      const region = screen.getByRole("region", { name: section.title });
      expect(within(region).getByText(section.kicker)).toBeInTheDocument();
      for (const paragraph of section.paragraphs) {
        expect(within(region).getByText(paragraph)).toBeInTheDocument();
      }
    }
    expect(
      screen.getByRole("link", { name: /Full experience/ }),
    ).toHaveAttribute("href", "/experience");
    const perspective = screen.getByRole("region", {
      name: getCareer().perspective.title,
    });
    for (const paragraph of getCareer().perspective.paragraphs) {
      expect(within(perspective).getByText(paragraph)).toBeInTheDocument();
    }
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("leads with agents, then separates building, ownership, and judgment", () => {
    const career = getCareer();
    render(<HomeView career={career} featuredArticle={featuredArticle} />);

    expect(
      screen.getAllByRole("heading", { level: 2 }).map((h2) => h2.textContent),
    ).toEqual([
      career.perspective.title,
      ...career.journey.map((section) => section.title),
      featuredArticle.title,
    ]);
    const storyRegions = screen.getAllByRole("region").slice(1, -1);
    expect(storyRegions).toHaveLength(4);
    for (const [index, region] of storyRegions.entries()) {
      expect(within(region).getAllByRole("paragraph")).toHaveLength(3);
      expect(within(region).queryAllByRole("link")).toHaveLength(
        index === storyRegions.length - 1 ? 1 : 0,
      );
    }
  });
});
