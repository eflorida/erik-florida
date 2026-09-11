import Link from "next/link";

import { getWritingArticles } from "@/content/articles";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Writing",
  description:
    "Working notes on agentic engineering, architecture, delivery systems, and engineering leadership.",
});

export default async function WritingIndex() {
  const articles = await getWritingArticles();
  const publishedCount = articles.filter(
    (article) => article.metadata.status === "published",
  ).length;

  return (
    <div className="index-page">
      <header className="index-header">
        <p className="section-kicker">Writing / Notes</p>
        <h1>Developed in the open, made durable here.</h1>
        <p>
          Short, opinionated notes on the architecture and operating systems
          that make agentic engineering useful in real organizations.
        </p>
        <p className="index-header__status">
          {publishedCount} published · {articles.length - publishedCount} in
          review
        </p>
      </header>

      <section className="article-index" aria-labelledby="article-index-title">
        <div className="article-index__heading">
          <h2 id="article-index-title">Current notes</h2>
          <p>Drafts are visible for review and excluded from search indexes.</p>
        </div>

        <ol className="article-list">
          {articles.map(({ metadata: article }) => (
            <li key={article.slug}>
              <Link href={`/writing/${article.slug}`}>
                <div className="article-list__meta">
                  <span>{article.status}</span>
                  <span>{article.tags.join(" · ")}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <span className="article-list__action" aria-hidden="true">
                  Read note →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
