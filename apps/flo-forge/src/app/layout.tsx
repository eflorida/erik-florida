import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flo Forge — Good ideas. Forged into great software.",
  description:
    "An independent software company forging AI-first SaaS products. Human purpose. Intelligent engineering. Software built to work.",
  applicationName: "Flo Forge",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Flo Forge — Software, forged with purpose.",
    description:
      "The home for AI-first SaaS. Human purpose. Intelligent engineering. Built to work.",
    type: "website",
    siteName: "Flo Forge",
  },
};

export const viewport: Viewport = {
  themeColor: "#272b2d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{`.forge-site * { animation: none !important; } .stoke-button, .motion-toggle { display: none; }`}</style>
        </noscript>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
