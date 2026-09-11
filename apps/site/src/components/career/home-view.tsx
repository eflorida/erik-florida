import Link from "next/link";

import type { ArticleMetadata } from "@/content/article-schema";
import type { Career } from "@/content/career";

import { CareerPeriod } from "./career-period";

type HomeViewProps = {
  career: Career;
  featuredArticle: ArticleMetadata;
};

export function HomeView({ career, featuredArticle }: HomeViewProps) {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="page-title">
        <div className="home-hero__copy">
          <p className="section-kicker">
            {career.name} / Engineering & product
          </p>
          <h1 id="page-title">{career.headline}</h1>
          <p className="home-hero__lede">{career.introduction}</p>
          <div className="home-hero__actions">
            <Link className="button button--primary" href="/experience">
              View experience <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button--quiet" href="/writing">
              Read the writing
            </Link>
          </div>
        </div>

        <aside className="career-snapshot" aria-label="Current role and patent">
          <p className="section-kicker">Currently</p>
          <p className="career-snapshot__company">
            {career.currentRole.organization}
          </p>
          <p className="career-snapshot__role">{career.currentRole.title}</p>
          <CareerPeriod
            start={career.currentRole.start}
            end={career.currentRole.end}
          />
          <div className="career-snapshot__patent">
            <p className="section-kicker">
              U.S. patent / {career.patent.attribution}
            </p>
            <p>AI-assisted procurement.</p>
            <a
              className="text-link"
              href={career.patent.href}
              target="_blank"
              rel="noopener noreferrer"
              title="Open the USPTO patent PDF in a new tab"
            >
              <span>
                View patent (USPTO PDF){" "}
                <span className="sr-only">(opens in a new tab)</span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </section>

      <section className="home-story" aria-labelledby="perspective-title">
        <div className="home-story__heading">
          <p className="section-kicker">Engineering with agents</p>
          <h2 id="perspective-title">{career.perspective.title}</h2>
        </div>
        <div className="home-story__body">
          {career.perspective.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {career.journey.map((section, index) => (
        <section
          className="home-story"
          aria-labelledby={`${section.id}-title`}
          key={section.id}
        >
          <div className="home-story__heading">
            <p className="section-kicker">{section.kicker}</p>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
          </div>
          <div className="home-story__body">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {index === career.journey.length - 1 && (
              <Link className="text-link" href="/experience">
                Full experience <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </section>
      ))}

      <section className="featured-note" aria-labelledby="featured-note-title">
        <div className="featured-note__label">
          <p className="section-kicker">Writing · {featuredArticle.status}</p>
          <p>Agentic engineering</p>
        </div>
        <div className="featured-note__content">
          <h2 id="featured-note-title">{featuredArticle.title}</h2>
          <p>{featuredArticle.summary}</p>
          <Link href={`/writing/${featuredArticle.slug}`}>
            Read the {featuredArticle.status === "draft" ? "draft" : "article"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
