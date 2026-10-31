import { expect, test } from "@playwright/test";

test("company narrative, working anchors, assets, and preview indexing", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/Flo Forge/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Good ideas.Forged intogreat software.",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: testInfo.outputPath("flo-forge-desktop.png") });
  await page
    .getByRole("link", { name: "Explore the forge", exact: true })
    .click();
  await expect(page).toHaveURL(/#approach$/);
  await expect(
    page.getByRole("heading", { name: "Less friction. More possibility." }),
  ).toBeInViewport();
  await page.getByRole("link", { name: "Back to top" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
  await expect(
    page.getByRole("link", { name: "erik@floforge.tech", exact: true }),
  ).toHaveAttribute("href", "mailto:erik@floforge.tech");
  await expect(
    page.getByRole("link", { name: "Get in touch with Erik" }),
  ).toHaveAttribute("href", "mailto:erik@floforge.tech");
  await expect(page.locator('a[href*="github.com"]')).toHaveCount(0);
  expect(
    await page
      .locator("img")
      .evaluateAll((images) =>
        images.every(
          (image) =>
            image instanceof HTMLImageElement &&
            image.complete &&
            image.naturalWidth > 0,
        ),
      ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test("forge can be stoked and all motion can be paused and resumed", async ({
  page,
}) => {
  await page.goto("/");
  const stoke = page.getByRole("button", {
    name: "Stoke the forge",
    exact: true,
  });
  await stoke.click();
  await expect(stoke).toHaveText("Now we’re forging");
  await page.getByRole("button", { name: "Pause animations" }).click();
  await expect(stoke).toBeDisabled();
  await expect(page.locator(".forge-site")).toHaveAttribute(
    "data-motion",
    "off",
  );
  expect(
    await page
      .locator(".emblem-float")
      .evaluate((element) => getComputedStyle(element).animationPlayState),
  ).toBe("paused");
  await page.getByRole("button", { name: "Play animations" }).click();
  await expect(stoke).toBeEnabled();
});

test("reduced-motion preference disables ambient and interactive motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Motion disabled by your device preference" })
    .waitFor();
  await expect(page.locator(".forge-site")).toHaveAttribute(
    "data-motion",
    "off",
  );
  await expect(
    page.getByRole("button", { name: "Stoke the forge", exact: true }),
  ).toBeDisabled();
  await expect(
    page.getByRole("button", {
      name: "Motion disabled by your device preference",
    }),
  ).toBeDisabled();
  expect(
    await page
      .locator(".emblem-float")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  await page
    .getByRole("link", { name: "Explore the forge", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Less friction. More possibility." }),
  ).toBeInViewport();
});

test("mobile navigation and content fit narrow screens", async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overflowing = await page
      .locator("main h1, main h2, main h3, main p, main a, header a, footer a")
      .evaluateAll((elements) =>
        elements
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return (
              rect.width > 0 &&
              (rect.left < -1 ||
                rect.right > document.documentElement.clientWidth + 1)
            );
          })
          .map((element) => element.textContent),
      );
    expect(overflowing, `overflowing content at ${width}px`).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByLabel("Open navigation").click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Our ethos" })
    .click();
  await expect(
    page.getByRole("heading", {
      name: "AI is the engine, People are the driver.",
    }),
  ).toBeInViewport();
});

test("core content and navigation work without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL ?? "http://127.0.0.1:3201/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page
    .getByRole("link", { name: "Explore the forge", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Less friction. More possibility." }),
  ).toBeInViewport();
  await expect(
    page.getByRole("link", { name: "erik@floforge.tech", exact: true }),
  ).toBeVisible();
  await context.close();
});
