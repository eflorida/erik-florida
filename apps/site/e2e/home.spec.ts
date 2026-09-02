import { expect, test } from "@playwright/test";

test("the walking skeleton presents the core positioning", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Engineering leadership for the agentic era.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Mission Control" }),
  ).toBeVisible();
  await expect(page).toHaveTitle("Erik Florida");
});
