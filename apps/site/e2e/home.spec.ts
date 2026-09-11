import { expect, test } from "@playwright/test";

test("the golden path moves from positioning to a draft article", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Engineering leadership for the agentic era.",
    }),
  ).toBeVisible();
  await expect(page).toHaveTitle("Erik Florida");

  await page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "Writing", exact: true })
    .click();
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Developed in the open, made durable here.",
    }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: /Verification Over Understanding/ })
    .click();
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Verification Over Understanding",
    }),
  ).toBeVisible();
  await expect(page.getByRole("status")).toContainText("Draft for review");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
});

test("primary navigation remains available at a mobile width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });

  await expect(navigation.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Writing" })).toBeVisible();
});
