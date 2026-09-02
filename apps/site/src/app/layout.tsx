import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Erik Florida",
    template: "%s — Erik Florida",
  },
  description:
    "Engineering leadership, agentic software development, and pragmatic technical architecture.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
