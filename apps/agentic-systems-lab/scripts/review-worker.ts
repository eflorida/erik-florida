import { setTimeout as delay } from "node:timers/promises";
import { existsSync } from "node:fs";

import {
  createMastraReviewers,
  createReviewWorkflow,
} from "../src/lib/workflow-engine";
import {
  claimReviewRun,
  clearWorkerHeartbeat,
  completeReviewRun,
  failReviewRun,
  purgeExpiredRuns,
  recordWorkerHeartbeat,
  recoverInterruptedRuns,
} from "../src/lib/workflow-store";

if (existsSync(".env.local")) process.loadEnvFile(".env.local");
const enabled =
  process.env["LAB_WORKFLOW_ENABLED"] === "true" &&
  Boolean(process.env["OPENAI_API_KEY"]);
if (!enabled)
  console.info(
    "Review worker idle: OPENAI_API_KEY and LAB_WORKFLOW_ENABLED=true are required.",
  );

{
  let stopping = false;
  process.on("SIGINT", () => {
    stopping = true;
  });
  process.on("SIGTERM", () => {
    stopping = true;
  });
  if (enabled) {
    await recoverInterruptedRuns();
    await recordWorkerHeartbeat();
  }
  const heartbeat = enabled
    ? setInterval(() => {
        void recordWorkerHeartbeat().catch((error: unknown) =>
          console.error(
            "Worker heartbeat failed",
            error instanceof Error ? error.name : "unknown",
          ),
        );
      }, 2_000)
    : null;
  let lastPurge = 0;

  while (!stopping) {
    try {
      if (!enabled) {
        await delay(5_000);
        continue;
      }
      if (Date.now() - lastPurge > 60_000) {
        await purgeExpiredRuns();
        lastPurge = Date.now();
      }
      const job = await claimReviewRun();
      if (!job) {
        await delay(750);
        continue;
      }
      try {
        const workflow = createReviewWorkflow(
          job.id,
          createMastraReviewers(job.model, job.id),
        );
        const run = await workflow.createRun({ runId: job.id });
        const result = await run.start({ inputData: { diff: job.diff } });
        if (result.status !== "success")
          throw new Error(`Mastra workflow ended with ${result.status}`);
        await completeReviewRun(job.id);
      } catch (error) {
        console.error(
          "Review workflow failed",
          job.id,
          error instanceof Error ? error.name : "unknown",
        );
        await failReviewRun(
          job.id,
          "The review could not be completed. Check the input and try a new run.",
        );
      }
    } catch (error) {
      console.error(
        "Review worker loop error",
        error instanceof Error ? error.name : "unknown",
      );
      await delay(2_000);
    }
  }
  if (heartbeat) clearInterval(heartbeat);
  if (enabled) await clearWorkerHeartbeat();
}
