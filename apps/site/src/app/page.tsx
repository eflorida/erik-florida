import { HomeView } from "@/components/career/home-view";
import { getArticle } from "@/content/articles";
import { getCareer } from "@/content/career";
import { createPageMetadata } from "@/lib/site";

export function generateMetadata() {
  return createPageMetadata({ description: getCareer().introduction });
}

export default async function Home() {
  const featuredArticle = await getArticle("verification-over-understanding");

  if (!featuredArticle) {
    throw new Error("The registered featured article could not be loaded.");
  }

  return (
    <HomeView career={getCareer()} featuredArticle={featuredArticle.metadata} />
  );
}
