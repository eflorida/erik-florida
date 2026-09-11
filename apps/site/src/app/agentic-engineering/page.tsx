import { AgenticOverview } from "@/components/editorial/agentic-overview";
import { getArticle } from "@/content/articles";
import { createPageMetadata } from "@/lib/site";

async function getOverview() {
  const overview = await getArticle("agentic-engineering");
  if (!overview) {
    throw new Error(
      "The registered agentic engineering overview could not be loaded.",
    );
  }
  return overview;
}

export async function generateMetadata() {
  const { metadata } = await getOverview();
  return createPageMetadata({
    title: "AI & Agentic Engineering",
    description: metadata.summary,
    index: metadata.status === "published",
  });
}

export default async function AgenticEngineeringPage() {
  return <AgenticOverview {...await getOverview()} />;
}
