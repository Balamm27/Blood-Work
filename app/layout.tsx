import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://balamm27.github.io/Blood-Work";

export const metadata: Metadata = {
  title: "Annual Lab Review | 2026 Blood Work",
  description: "A clear, de-identified review of annual blood work, priorities, reassuring results, and clinician follow-up questions.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Annual Lab Review",
    description: "Clear priorities. Complete context.",
    url: siteUrl,
    type: "website",
    images: [{ url: "/Blood-Work/og.png", width: 1200, height: 630, alt: "Annual Lab Review dashboard preview" }],
  },
  twitter: { card: "summary_large_image", title: "Annual Lab Review", description: "Clear priorities. Complete context.", images: ["/Blood-Work/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
