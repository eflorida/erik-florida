import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">Erik Florida</p>
          <p className="site-footer__position">
            Engineering leadership for the agentic era.
          </p>
        </div>

        <div className="site-footer__context">
          <p>
            Product engineering, architecture, and the systems that help teams
            deliver.
          </p>
          <nav aria-label="Footer navigation" className="footer-nav">
            <Link href="/experience">Experience</Link>
            <Link href="/agentic-engineering">Agentic engineering</Link>
            <Link href="/writing">Writing</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
