import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgencyOS — Your AI Marketing Team That Runs Itself",
  description:
    "7 specialized AI agents. One marketing engine. AgencyOS orchestrates content creation, SEO, social media, design, and outreach — autonomously. Join the waitlist.",
  keywords: [
    "AI marketing team",
    "AI marketing agency",
    "marketing automation AI",
    "AI content creation",
    "automated marketing",
    "AI marketing agents",
    "marketing operating system",
    "AI social media manager",
    "AI SEO specialist",
    "AI copywriter",
  ],
  authors: [{ name: "AgencyOS" }],
  openGraph: {
    title: "AgencyOS — Your AI Marketing Team That Runs Itself",
    description:
      "7 AI agents working together: Writer, Social Manager, SEO Specialist, Designer, Growth Lead, Analyst, and Tech Lead. One sprint at a time.",
    url: "https://agencyos.dev",
    siteName: "AgencyOS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgencyOS — Your AI Marketing Team",
    description:
      "7 specialized AI agents. One marketing engine. Content, SEO, social, design, outreach — all automated.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AgencyOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cross-platform",
  description:
    "AI-powered marketing agency operating system with 7 specialized agents that autonomously handle content creation, SEO, social media, design, outreach, and analytics.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  creator: {
    "@type": "Organization",
    name: "AgencyOS",
    url: "https://agencyos.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
