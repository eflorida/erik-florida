import { ReviewWorkspace } from "@/components/review-workspace";
import { isWorkerReady } from "@/lib/workflow-store";

export const dynamic = "force-dynamic";

export default async function WorkspacePage() {
  const configured =
    Boolean(process.env["OPENAI_API_KEY"]) &&
    process.env["LAB_WORKFLOW_ENABLED"] === "true" &&
    !process.env["VERCEL"] &&
    (await isWorkerReady());
  return (
    <main id="main-content">
      <ReviewWorkspace
        isConfigured={configured}
        model={process.env["LAB_WORKFLOW_MODEL"] ?? "openai/gpt-5.6-sol"}
      />
    </main>
  );
}
