import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("exposes only implemented primary destinations", () => {
    render(<SiteHeader />);

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    expect(navigation).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Writing" })).toHaveAttribute(
      "href",
      "/writing",
    );
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "/experience",
    );
    expect(
      screen.getByRole("link", { name: "Agentic engineering" }),
    ).toHaveAttribute("href", "/agentic-engineering");
  });
});
