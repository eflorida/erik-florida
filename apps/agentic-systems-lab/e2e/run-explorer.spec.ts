import { expect, test } from "@playwright/test";
import {
  isWorkerReady,
  recordWorkerHeartbeat,
} from "../src/lib/workflow-store";

test("a visitor can inspect a disclosed reference scenario and reach the human transfer", async ({
  page,
}) => {
  await page.goto("/reference");

  await expect(page).toHaveTitle("Agentic Systems Lab");
  await expect(
    page.getByRole("heading", { name: "Close an unsafe redirect boundary" }),
  ).toBeVisible();
  await expect(page.getByText("No live model call")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Original reference scenario" }),
  ).toBeVisible();
  await expect(
    page.getByText(/execution artifacts.*not retained/i),
  ).toBeVisible();
  await expect(page.getByText("Scenario claim").first()).toBeVisible();

  await page.getByRole("button", { name: /Boundary implemented/ }).click();
  await expect(page.getByText("src/security/redirect.ts")).toBeVisible();
  await expect(page.getByText(/target\.startsWith/)).toBeVisible();

  await page.getByRole("button", { name: /Human review requested/ }).click();
  await expect(
    page.getByRole("heading", { name: "Accept the bounded change" }),
  ).toBeVisible();
});

test("a visitor can run a bounded live review and inspect its evidence", async ({
  page,
}) => {
  await page.route("**/api/reviews", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
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
          responseId: "resp_e2e",
          model: "gpt-5.6-terra",
          latencyMs: 842,
          inputTokens: 250,
          cachedInputTokens: 0,
          outputTokens: 120,
          totalTokens: 370,
          estimatedCostUsd: 0.00194,
          stored: false,
        },
      }),
    });
  });

  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Review one TypeScript diff" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Run live review" }).click();

  await expect(
    page.getByText("Protocol-relative redirect remains open"),
  ).toBeVisible();
  await expect(page.getByText("Deterministic telemetry")).toBeVisible();
  await expect(
    page.getByText(/does not own merge or deployment authority/),
  ).toBeVisible();
});

test("the run remains readable on mobile without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/reference");

  await expect(page.getByRole("main")).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth <=
        document.documentElement.clientWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: /Checks represented/ }).click();
  await expect(page.getByText("6 passed · 0 failed")).toBeVisible();
});

test("a queued Mastra run survives navigation and exposes actual activity", async ({
  page,
}) => {
  // Simulate the worker's readiness signal; model execution is covered separately.
  await recordWorkerHeartbeat();
  expect(await isWorkerReady()).toBe(true);
  await page.goto("/workspace");
  await expect(
    page.getByRole("heading", { name: "Send a change. Follow the work." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Delegate review" }).click();
  await expect(page).toHaveURL(/\/workspace\/runs\/[a-f0-9-]{36}$/);
  await expect(page.getByText("queued", { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByText("Run", { exact: false }).first()).toBeVisible();
  await page.getByRole("button", { name: /Activity/ }).click();
  await expect(
    page.getByText("Review accepted for background work."),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close activity" }).click();
});

test("the change review workspace fits a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/workspace");
  await expect(
    page.getByRole("heading", { name: "Send a change. Follow the work." }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth <=
        document.documentElement.clientWidth,
    ),
  ).toBe(true);
});
