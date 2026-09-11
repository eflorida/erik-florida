import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { LiveReview } from "./live-review";

const successfulResponse = {
  ok: true,
  review: {
    verdict: "request-changes",
    risk: "medium",
    summary: "Protocol-relative redirects still pass the new boundary.",
    strengths: ["The change is narrowly scoped."],
    findings: [
      {
        severity: "medium",
        title: "Protocol-relative redirect remains open",
        explanation:
          "A target beginning with two slashes also begins with one slash.",
        lineReference: "+2",
        recommendation: "Reject targets that begin with two slashes.",
      },
    ],
    humanReviewNotes: "Run focused redirect tests before merging.",
  },
  telemetry: {
    responseId: "resp_test",
    model: "gpt-5.6-terra",
    latencyMs: 842,
    inputTokens: 250,
    cachedInputTokens: 0,
    outputTokens: 120,
    totalTokens: 370,
    estimatedCostUsd: 0.00194,
    stored: false,
  },
} as const;

describe("LiveReview", () => {
  it("explains the missing server credential without accepting a run", () => {
    render(<LiveReview isConfigured={false} model="gpt-5.6-terra" />);

    expect(screen.getByText("API key required")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Run live review" }),
    ).toBeDisabled();
    expect(screen.getByText("12,000 characters max")).toBeInTheDocument();
  });

  it("renders structured judgment and deterministic telemetry separately", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify(successfulResponse), {
          headers: { "content-type": "application/json" },
        }),
      ),
    );
    render(<LiveReview isConfigured model="gpt-5.6-terra" />);

    fireEvent.click(screen.getByRole("button", { name: "Run live review" }));

    await waitFor(() => {
      expect(
        screen.getByText("Protocol-relative redirect remains open"),
      ).toBeInTheDocument();
    });
    expect(screen.getByText("Deterministic telemetry")).toBeInTheDocument();
    expect(screen.getByText("842 ms")).toBeInTheDocument();
    expect(screen.getByText("$0.00194")).toBeInTheDocument();
    expect(
      screen.getByText(/does not own merge or deployment authority/),
    ).toBeInTheDocument();
  });
});
