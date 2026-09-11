import { ExperienceView } from "@/components/career/experience-view";
import { getCareer } from "@/content/career";
import { createPageMetadata } from "@/lib/site";

export function generateMetadata() {
  return createPageMetadata({
    title: "Experience",
    description: getCareer().experienceIntroduction,
  });
}

export default function ExperiencePage() {
  return <ExperienceView career={getCareer()} />;
}
