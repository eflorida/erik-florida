import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ReviewWorkspace } from "@/components/review-workspace";
import { getReviewRun, isWorkerReady } from "@/lib/workflow-store";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function RunPage({
  params,
}: PageProps<"/workspace/runs/[id]">) {
  const { id } = await params;
  if (!/^[a-f0-9-]{36}$/.test(id)) notFound();
  const run = await getReviewRun(id);
  if (!run) notFound();
  const configured =
    Boolean(process.env["OPENAI_API_KEY"]) &&
    process.env["LAB_WORKFLOW_ENABLED"] === "true" &&
    !process.env["VERCEL"] &&
    (await isWorkerReady());
  return (
    <main id="main-content">
      <ReviewWorkspace
        key={run.id}
        initialRun={run}
        isConfigured={configured}
        model={run.model}
      />
    </main>
  );
}
