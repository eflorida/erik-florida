import type { Metadata } from "next";
import { Suspense } from "react";

import { LabNav, LabNavFallback } from "@/components/lab-nav";

import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/900.css";
import "@fontsource-variable/caveat/wght.css";
import "@fontsource-variable/ibm-plex-sans/wght.css";

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
                <p className="app-context">
                  Change review, live review, and reference scenarios
                </p>
              </div>
            </div>
            <p className="lab-scribble">Follow the evidence.</p>
            <Suspense fallback={<LabNavFallback />}>
              <LabNav />
            </Suspense>
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
