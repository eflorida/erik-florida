import { expect, test } from "@playwright/test";

test("a visitor can inspect evidence and reach the human transfer", async ({
  page,
}) => {
  await page.goto("/reference");

  await expect(page).toHaveTitle("Agentic Systems Lab");
  await expect(
    page.getByRole("heading", { name: "Close an unsafe redirect boundary" }),
  ).toBeVisible();
  await expect(page.getByText("No live model call")).toBeVisible();

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
  await page.getByRole("button", { name: /Checks verified/ }).click();
  await expect(page.getByText("6 passed · 0 failed")).toBeVisible();
});
