import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";

import { workflowRunSchema } from "@/contracts/workflow-review";
import { ReviewWorkspace } from "./review-workspace";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));

it("renders persisted model reports and keeps human authority visible", () => {
  const run = workflowRunSchema.parse({
    id: "f72729ab-f0d5-45f6-998d-7ca334a87635",
    status: "completed",
    createdAt: "2026-10-05T10:00:00.000Z",
    updatedAt: "2026-10-05T10:01:00.000Z",
    expiresAt: "2026-10-06T10:00:00.000Z",
    attempt: 1,
    output: {
      risk: {
        level: "medium",
        summary: "Double slash may redirect externally.",
        findings: [],
        uncertainty: "Only the diff was inspected.",
      },
      tests: {
        strategy: "Check redirect boundaries.",
        cases: [
          {
            title: "Reject double slash",
            purpose: "Block external navigation.",
            priority: "first",
          },
        ],
        limits: "Tests were not executed.",
      },
      brief: {
        recommendation: "request-changes",
        rationale: "The boundary remains open.",
        nextActions: ["Fix the prefix check."],
      },
    },
    events: [
      {
        sequence: 1,
        at: "2026-10-05T10:00:00.000Z",
        step: "queue",
        state: "queued",
        message: "Review accepted for background work.",
      },
    ],
    error: null,
    model: "test-model",
    inputCharacters: 150,
    inputTokens: 500,
    outputTokens: 100,
    estimatedCostUsd: null,
  });
  render(<ReviewWorkspace initialRun={run} isConfigured model="test-model" />);
  expect(
    screen.getByText("Double slash may redirect externally."),
  ).toBeInTheDocument();
  expect(screen.getByText("Reject double slash")).toBeInTheDocument();
  expect(screen.getByText("The boundary remains open.")).toBeInTheDocument();
  expect(
    screen.getByText(/person verifies the full repository/),
  ).toBeInTheDocument();
  expect(screen.getByText("500 in · 100 out")).toBeInTheDocument();
});
