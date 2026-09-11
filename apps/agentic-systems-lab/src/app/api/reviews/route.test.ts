import { afterEach, describe, expect, it } from "vitest";

import { POST } from "./route";

const originalApiKey = process.env["OPENAI_API_KEY"];
const originalRuntimeFlag = process.env["LAB_LIVE_REVIEW_ENABLED"];

afterEach(() => {
  if (originalApiKey === undefined) {
    delete process.env["OPENAI_API_KEY"];
  } else {
    process.env["OPENAI_API_KEY"] = originalApiKey;
  }

  if (originalRuntimeFlag === undefined) {
    delete process.env["LAB_LIVE_REVIEW_ENABLED"];
  } else {
    process.env["LAB_LIVE_REVIEW_ENABLED"] = originalRuntimeFlag;
  }
});

describe("POST /api/reviews", () => {
  it("rejects input outside the bounded diff contract", async () => {
    const response = await POST(
      new Request("http://localhost/api/reviews", {
        method: "POST",
        body: JSON.stringify({ diff: "not a diff" }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      ok: false,
      code: "invalid-request",
    });
  });

  it("returns a setup state before contacting a provider", async () => {
    delete process.env["OPENAI_API_KEY"];
    process.env["LAB_LIVE_REVIEW_ENABLED"] = "true";
    const response = await POST(
      new Request("http://localhost/api/reviews", {
        method: "POST",
        body: JSON.stringify({
          diff: `diff --git a/src/a.ts b/src/a.ts
--- a/src/a.ts
+++ b/src/a.ts
@@ -1 +1 @@
-export const a = 1;
+export const a = 2;`,
        }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      code: "configuration-required",
      message:
        "Add OPENAI_API_KEY to the Lab server environment to enable live reviews.",
    });
  });

  it("rejects oversized requests before parsing their body", async () => {
    const response = await POST(
      new Request("http://localhost/api/reviews", {
        method: "POST",
        body: "{}",
        headers: { "content-length": "16001" },
      }),
    );

    expect(response.status).toBe(413);
    await expect(response.json()).resolves.toMatchObject({
      ok: false,
      code: "invalid-request",
    });
  });
});
