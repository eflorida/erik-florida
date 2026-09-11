import { expect, test } from "@playwright/test";

const sectionIds = [
  "applied-ai",
  "engineering-practice",
  "mission-control",
  "organizational-change",
];

test("the homepage leads into a grounded, visibly draft agentic overview", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Explore agentic engineering/ }).click();
  await expect(page).toHaveURL(/\/agentic-engineering$/);
  await expect(page).toHaveTitle("AI & Agentic Engineering — Erik Florida");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Engineering beyond code generation.",
  );
  await expect(page.getByRole("status")).toContainText("Draft for review");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex, nofollow/,
  );
  await expect(page.locator("#applied-ai")).toContainText("co-inventor");
  await expect(page.locator("#mission-control")).toContainText(
    "methodology I am developing",
  );
  await expect(page.locator("#mission-control")).toContainText(
    "Missing evidence sends work back for revision",
  );
  const diagram = page.getByRole("list", {
    name: "An example feature-delivery loop",
  });
  await expect(diagram.getByRole("listitem")).toHaveCount(5);
  await expect(diagram).toContainText("Accepted artifact");

  await page
    .getByRole("link", { name: /Explore the work and patent evidence/ })
    .click();
  await expect(page).toHaveURL(/\/experience#patent$/);
  await expect(page.locator("#patent-title")).toBeInViewport();
});

for (const javaScriptEnabled of [true, false]) {
  test(`the small-screen overview works ${javaScriptEnabled ? "with" : "without"} JavaScript`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled,
      reducedMotion: "reduce",
      viewport: { width: 320, height: 844 },
    });
    const page = await context.newPage();
    await page.goto("/");
    const navigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });
    for (const name of [
      "Home",
      "Experience",
      "Agentic engineering",
      "Writing",
    ]) {
      await expect(
        navigation.getByRole("link", { name, exact: true }),
      ).toBeVisible();
    }
    await navigation.getByRole("link", { name: "Agentic engineering" }).click();
    const contents = page.getByRole("navigation", { name: "On this page" });
    for (const id of sectionIds) {
      await contents.locator(`a[href="#${id}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}-title`)).toBeInViewport();
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page
      .getByRole("link", { name: /Read Verification Over Understanding/ })
      .click();
    await expect(page).toHaveURL(/\/writing\/verification-over-understanding$/);
    await expect(page.getByRole("status")).toContainText("Draft for review");
    await context.close();
  });
}

test("the overview has one address and writing remains a separate collection", async ({
  page,
}) => {
  const duplicate = await page.goto("/writing/agentic-engineering");
  expect(duplicate?.status()).toBe(404);
  const unknown = await page.goto("/writing/not-registered");
  expect(unknown?.status()).toBe(404);
  await page.goto("/writing");
  await expect(page.locator(".article-list > li")).toHaveCount(1);
  await expect(page.locator(".article-list")).not.toContainText(
    "Engineering beyond code generation",
  );
});

test("keyboard navigation reaches the overview and native section anchors", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/agentic-engineering");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  await page.keyboard.press("Tab");
  const appliedAI = page
    .getByRole("navigation", { name: "On this page" })
    .getByRole("link", { name: "Applied AI" });
  await expect(appliedAI).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#applied-ai$/);
  await expect(page.locator("#applied-ai-title")).toBeInViewport();
});
