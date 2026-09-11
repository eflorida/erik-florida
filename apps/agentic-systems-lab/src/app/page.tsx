import { LiveReview } from "@/components/live-review";
import { DEFAULT_REVIEW_MODEL } from "@/lib/review-runtime";

export const dynamic = "force-dynamic";

export default function LabPage() {
  return (
    <main id="main-content">
      <LiveReview
        isConfigured={
          Boolean(process.env["OPENAI_API_KEY"]) &&
          process.env["LAB_LIVE_REVIEW_ENABLED"] === "true"
        }
        model={process.env["OPENAI_MODEL"] ?? DEFAULT_REVIEW_MODEL}
      />
    </main>
  );
}
