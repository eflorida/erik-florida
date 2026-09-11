import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Systems Lab",
  description:
    "Inspect how bounded agentic work moves from intent through evidence and human review.",
  applicationName: "Agentic Systems Lab",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to run
        </a>
        <div className="app-shell">
          <header className="app-header">
            <div className="app-identity">
              <span className="app-mark" aria-hidden="true">
                AS
              </span>
              <div>
                <p className="app-name">Agentic Systems Lab</p>
                <p className="app-context">Verified change runs</p>
              </div>
            </div>
            <nav className="app-nav" aria-label="Lab modes">
              <Link href="/">Live review</Link>
              <Link href="/reference">Reference replay</Link>
            </nav>
            <div className="environment-state">
              <span aria-hidden="true" />
              Bounded environment
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
