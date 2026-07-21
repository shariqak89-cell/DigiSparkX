import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { absoluteUrl } from "@/lib/utils";
import { company } from "@/data/content";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#050915" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "DigiSparkX | Digital Services & Academy",
    template: "%s | DigiSparkX"
  },
  description: "DigiSparkX provides professional websites, software, branding, digital marketing, AI automation and practical digital skills training.",
  applicationName: "DigiSparkX",
  keywords: ["DigiSparkX", "website development", "digital marketing", "academy", "AI automation", "graphic design", "Delhi"],
  authors: [{ name: "DigiSparkX" }],
  creator: "DigiSparkX",
  publisher: "DigiSparkX",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl(),
    siteName: company.name,
    title: "DigiSparkX | Grow Smarter, Go Digital",
    description: "A premium digital services and academy company for businesses and learners.",
    images: [{ url: company.logo, width: 1200, height: 1200, alt: "DigiSparkX logo" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiSparkX | Grow Smarter, Go Digital",
    description: "Digital services, academy, automation, branding and web development.",
    images: [company.logo]
  },
  icons: {
    icon: company.logo,
    apple: company.logo
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    email: company.email,
    founder: company.ceo,
    url: absoluteUrl(),
    logo: absoluteUrl(company.logo),
    slogan: company.tagline,
    sameAs: []
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
