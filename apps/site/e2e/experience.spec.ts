import { expect, test } from "@playwright/test";

test("keyboard navigation skips the shell and reaches career sections", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/experience");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  await page.keyboard.press("Tab");
  const careerLink = page
    .getByRole("navigation", { name: "Experience sections" })
    .getByRole("link", { name: "Career", exact: true });
  await expect(careerLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#career$/);
  await expect(page.locator("#career-title")).toBeInViewport();
});

test("a visitor can follow the career progression and public evidence", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: /View experience/ }).click();
  await expect(page).toHaveTitle("Experience — Erik Florida");
  await expect(
    page.getByRole("heading", { name: "Raiven / Qmerit", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Software Engineering Manager",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator("#raiven-qmerit")).toContainText(
    "Continuous tenure since 2018",
  );
  await expect(
    page.locator("#raiven-engineering-manager time"),
  ).toHaveAttribute("datetime", "2025-01");
  await expect(
    page.getByRole("heading", { name: "Macy's", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Experience sections" })
    .getByRole("link", { name: "Patent" })
    .click();
  await expect(page.locator("#patent")).toContainText("Co-inventor");
  await expect(page.locator("#patent a")).toHaveAttribute(
    "href",
    "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12327222",
  );
});

test("patent links open a separate tab and preserve the site", async ({
  page,
  context,
}) => {
  const patentUrl =
    "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12327222";
  // Test our navigation contract without relying on an external host or PDF viewer.
  await context.route(patentUrl, (route) =>
    route.fulfill({ contentType: "text/html", body: "Patent destination" }),
  );
  for (const route of ["/", "/experience"]) {
    await page.goto(route);
    const originalUrl = page.url();
    const link = page.getByRole("link", {
      name: /patent \(USPTO PDF\) \(opens in a new tab\)/,
    });
    await expect(link).toHaveAttribute("href", patentUrl);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    const [patentTab] = await Promise.all([
      page.waitForEvent("popup"),
      link.click(),
    ]);
    await expect(patentTab).toHaveURL(patentUrl);
    await expect(patentTab.locator("body")).toHaveText("Patent destination");
    expect(await patentTab.evaluate(() => window.opener)).toBeNull();
    await expect(page).toHaveURL(originalUrl);
    await patentTab.close();
  }
});

for (const javaScriptEnabled of [true, false]) {
  test(`the mobile narrative leads into experience ${javaScriptEnabled ? "with" : "without"} client JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled,
      reducedMotion: "reduce",
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator(".home-hero")).toContainText("Co-inventor");
    await expect(page.locator(".home-story h2")).toHaveText([
      "Agents change the engineering model.",
      "Build the first version.",
      "Give teams ownership.",
      "Earn complexity.",
    ]);
    await expect(page.locator(".home-story__body").first()).toContainText(
      "I use AI from requirements and architecture through implementation and review",
    );
    await expect(
      page.getByRole("region", { name: "Build the first version." }),
    ).toContainText(
      "I built the first procurement browser extension at Qmerit",
    );
    for (const section of await page.locator(".home-story__body").all()) {
      await expect(section.locator("p")).toHaveCount(2);
    }
    await expect(page.locator('a[href^="/experience#"]')).toHaveCount(0);
    await page.getByRole("link", { name: /Full experience/ }).click();
    await expect(page).toHaveURL(/\/experience$/);
    await page
      .getByRole("navigation", { name: "Experience sections" })
      .getByRole("link", { name: "Selected work" })
      .click();
    await expect(page.locator("#selected-work-title")).toBeInViewport();
    const workIds = await page
      .locator(".work-account")
      .evaluateAll((accounts) => accounts.map((account) => account.id));
    expect(workIds).toHaveLength(3);
    for (const id of workIds) {
      await page.goto(`/experience#${id}`);
      await expect(page.locator(`#${id} h3`)).toBeInViewport();
      await expect(page.locator(`#${id}`)).toContainText("My contribution");
    }
    const navigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });
    await navigation.getByRole("link", { name: "Home", exact: true }).click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await context.close();
  });
}
