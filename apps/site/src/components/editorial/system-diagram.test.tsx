import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SystemDiagram } from "./system-diagram";

describe("SystemDiagram", () => {
  it("provides a caption, ordered steps, and a text equivalent", () => {
    render(
      <SystemDiagram
        caption="Example delivery loop"
        steps={["Intent", "Evidence", "Land"]}
      />,
    );

    expect(screen.getByText("Example delivery loop")).toBeInTheDocument();
    expect(screen.getByRole("list")).toHaveAccessibleName(
      "Example delivery loop",
    );
    expect(
      screen.getByText("A sequential flow from Intent to Evidence to Land."),
    ).toBeInTheDocument();
  });
});
