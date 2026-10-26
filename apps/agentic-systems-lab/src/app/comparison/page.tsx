import { ComparisonBench } from "@/components/comparison-bench";
import { comparisonCases } from "@/data/comparisons";

export const dynamic = "force-dynamic";

export default function ComparisonPage() {
  const configured =
    process.env["LAB_COMPARISON_ENABLED"] === "true" &&
    Boolean(process.env["OPENAI_API_KEY"]) &&
    !process.env["VERCEL"];
  return (
    <main id="main-content">
      <ComparisonBench
        cases={comparisonCases}
        isConfigured={configured}
        model={process.env["LAB_COMPARISON_MODEL"] ?? "openai/gpt-5.6-sol"}
      />
    </main>
  );
}
