import Link from "next/link";

import { SystemDiagram } from "@/components/editorial/system-diagram";
import { getArticle } from "@/content/articles";
import type { ArticleMetadata } from "@/content/article-schema";

const principles = [
  {
    number: "01",
    title: "Start with intent",
    description:
      "Define the customer outcome, constraints, and evidence before implementation accelerates.",
  },
  {
    number: "02",
    title: "Make context durable",
    description:
      "Put decisions, architecture, and accepted state where people and agents can reliably use them.",
  },
  {
    number: "03",
    title: "Earn autonomy with evidence",
    description:
      "Increase execution speed as verification, observability, and policy make outcomes trustworthy.",
  },
] as const;

type HomeViewProps = {
  featuredArticle: ArticleMetadata;
};

export function HomeView({ featuredArticle }: HomeViewProps) {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="page-title">
        <div className="home-hero__copy">
          <p className="section-kicker">Engineering · Architecture · AI</p>
          <h1 id="page-title">Engineering leadership for the agentic era.</h1>
          <p className="home-hero__lede">
            I build teams, architecture, and software-delivery systems that turn
            emerging technology into durable customer value.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--primary" href="/writing">
              Explore the thinking
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              className="button button--quiet"
              href={`/writing/${featuredArticle.slug}`}
            >
              Read the first note
            </Link>
          </div>
        </div>

        <div className="home-hero__system">
          <div className="home-hero__system-heading">
            <p>Operating thesis</p>
            <span>Mission Control / 001</span>
          </div>
          <SystemDiagram
            caption="A delivery system for verified outcomes"
            steps={["Intent", "Work", "Evaluate", "Evidence", "Land"]}
          />
        </div>
      </section>

      <section className="point-of-view" aria-labelledby="point-of-view-title">
        <div className="section-heading">
          <p className="section-kicker">Point of view</p>
          <h2 id="point-of-view-title">
            Agentic leverage is an organizational design problem.
          </h2>
        </div>

        <ol className="principle-list">
          {principles.map((principle) => (
            <li key={principle.number}>
              <p className="principle-list__number">{principle.number}</p>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="featured-note" aria-labelledby="featured-note-title">
        <div className="featured-note__label">
          <p className="section-kicker">
            Working note · {featuredArticle.status}
          </p>
          <p>Content path / 001</p>
        </div>
        <div className="featured-note__content">
          <h2 id="featured-note-title">{featuredArticle.title}</h2>
          <p>{featuredArticle.summary}</p>
          <Link href={`/writing/${featuredArticle.slug}`}>
            Read the {featuredArticle.status} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default async function Home() {
  const featuredArticle = await getArticle("verification-over-understanding");

  if (!featuredArticle) {
    throw new Error("The registered featured article could not be loaded.");
  }

  return <HomeView featuredArticle={featuredArticle.metadata} />;
}
