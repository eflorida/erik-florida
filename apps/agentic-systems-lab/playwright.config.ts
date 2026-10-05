import { defineConfig, devices } from "@playwright/test";

const e2eDatabaseUrl =
  process.env["LAB_E2E_DATABASE_URL"] ?? `file:/tmp/lab-e2e-${process.pid}.db`;
process.env["LAB_E2E_DATABASE_URL"] = e2eDatabaseUrl;
process.env["LAB_DATABASE_URL"] = e2eDatabaseUrl;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env["CI"]),
  retries: process.env["CI"] ? 2 : 0,
  reporter: process.env["CI"] ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:3110",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `OPENAI_API_KEY=e2e-not-a-real-key LAB_LIVE_REVIEW_ENABLED=true LAB_WORKFLOW_ENABLED=true LAB_DATABASE_URL=${e2eDatabaseUrl} pnpm exec next start --port 3110`,
    reuseExistingServer: false,
    timeout: 120_000,
    url: "http://127.0.0.1:3110",
  },
});
