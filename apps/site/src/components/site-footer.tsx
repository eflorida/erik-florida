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
            Mission Control is the methodology. Flight Deck is the future
            engineering harness. This site is an implementation in progress.
          </p>
          <Link href="/writing">Read the working notes</Link>
        </div>
      </div>
    </footer>
  );
}
