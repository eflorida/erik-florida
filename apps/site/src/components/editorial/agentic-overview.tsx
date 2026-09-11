import Link from "next/link";

import type { Article } from "@/content/articles";

const sections = [
  { id: "applied-ai", label: "Applied AI" },
  { id: "engineering-practice", label: "Engineering practice" },
  { id: "mission-control", label: "Mission Control" },
  { id: "organizational-change", label: "Organizational change" },
] as const;

export function AgenticOverview({ Content, metadata }: Article) {
  return (
    <article className="agentic-page">
      <header className="agentic-hero">
        <div>
          <p className="section-kicker">AI & Agentic Engineering</p>
          <h1>{metadata.title}</h1>
          <p className="agentic-hero__summary">{metadata.summary}</p>
          {metadata.status === "draft" && (
            <p className="draft-notice" role="status">
              Draft for review. This overview distinguishes current practice
              from a methodology in development.
            </p>
          )}
        </div>
        <nav className="agentic-contents" aria-label="On this page">
          <p className="section-kicker">Practice → Operating model</p>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {section.label}
                  <span aria-hidden="true">↓</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      <Content />

      <nav
        className="article-next"
        aria-label="Continue from agentic engineering"
      >
        <p>Experience behind the perspective</p>
        <Link href="/experience">
          Explore the experience <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </article>
  );
}
