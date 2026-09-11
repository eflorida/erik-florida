import Link from "next/link";
import { notFound } from "next/navigation";

import { EvidenceList } from "@/components/editorial/evidence-list";
import { getArticle, getWritingArticleSlugs } from "@/content/articles";
import { createArticleMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getWritingArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  if (!getWritingArticleSlugs().some((registered) => registered === slug)) {
    notFound();
  }
  const article = await getArticle(slug);

  return article ? createArticleMetadata(article.metadata) : {};
}

export default async function ArticlePage({
  params,
}: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  if (!getWritingArticleSlugs().some((registered) => registered === slug)) {
    notFound();
  }
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const { Content, metadata } = article;

  return (
    <article className="article-page">
      <header className="article-header">
        <Link className="article-header__back" href="/writing">
          <span aria-hidden="true">←</span> All writing
        </Link>
        <div className="article-header__status-row">
          <p className="section-kicker">Working note / {metadata.status}</p>
          <p>{metadata.tags.join(" · ")}</p>
        </div>
        <h1>{metadata.title}</h1>
        <p className="article-header__summary">{metadata.summary}</p>
        {metadata.status === "draft" ? (
          <p className="draft-notice" role="status">
            <span aria-hidden="true" />
            Draft for review. The ideas are developed; wording and publication
            remain subject to approval.
          </p>
        ) : null}
      </header>

      <div className="article-layout">
        <div className="prose">
          <Content />
        </div>
        <div className="article-layout__rail" aria-hidden="true">
          <span />
          <p>Intent → evidence → judgment</p>
        </div>
      </div>

      <EvidenceList items={metadata.evidence} />

      <nav className="article-next" aria-label="End of article">
        <p>Continue exploring</p>
        <Link href="/">
          Return to the operating thesis <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </article>
  );
}
