import { afterEach, expect, it } from "vitest";

import { POST } from "./route";

const priorEnabled = process.env["LAB_WORKFLOW_ENABLED"];
const priorKey = process.env["OPENAI_API_KEY"];
afterEach(() => {
  if (priorEnabled === undefined) delete process.env["LAB_WORKFLOW_ENABLED"];
  else process.env["LAB_WORKFLOW_ENABLED"] = priorEnabled;
  if (priorKey === undefined) delete process.env["OPENAI_API_KEY"];
  else process.env["OPENAI_API_KEY"] = priorKey;
});

it("rejects malformed input before opening a run", async () => {
  const response = await POST(
    new Request("http://localhost/api/workflow-runs", {
      method: "POST",
      body: JSON.stringify({ diff: "not a diff" }),
    }),
  );
  expect(response.status).toBe(400);
});

it("keeps the paid workflow disabled without an explicit server opt-in", async () => {
  delete process.env["LAB_WORKFLOW_ENABLED"];
  delete process.env["OPENAI_API_KEY"];
  const diff = `diff --git a/src/a.ts b/src/a.ts\n--- a/src/a.ts\n+++ b/src/a.ts\n@@ -1 +1 @@\n-old\n+new`;
  const response = await POST(
    new Request("http://localhost/api/workflow-runs", {
      method: "POST",
      body: JSON.stringify({ diff }),
    }),
  );
  expect(response.status).toBe(503);
  expect(await response.json()).toEqual({
    error: "The workflow is not configured on this server.",
  });
});
