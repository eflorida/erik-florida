import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getReferenceRun } from "@/data/runs";

import { RunExplorer } from "./run-explorer";

describe("RunExplorer", () => {
  it("labels the replay and exposes step evidence", () => {
    render(<RunExplorer run={getReferenceRun()} />);

    expect(screen.getByText("No live model call")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Close an unsafe redirect boundary",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Acceptance contract")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /Boundary implemented/ }),
    );

    expect(screen.getByText("src/security/redirect.ts")).toBeInTheDocument();
    expect(screen.getByText(/target\.startsWith/)).toBeInTheDocument();
  });

  it("advances to the human-review transfer", () => {
    render(<RunExplorer run={getReferenceRun()} />);

    fireEvent.click(
      screen.getByRole("button", { name: /Human review requested/ }),
    );

    expect(
      screen.getByRole("heading", { name: "Accept the bounded change" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/owns the decision/)).toBeInTheDocument();
  });
});
