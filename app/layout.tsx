import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { googleAnalytics } from "@/lib/analytics";
import { JsonLd } from "@/components/JsonLd";
import { GoogleTags } from "@/components/GoogleTags";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Vedação Industrial`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "vedação industrial",
    "O-Ring",
    "gaxetas",
    "retentores",
    "juntas industriais",
    "PhoenixBor",
    "vedação São Paulo",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: googleAnalytics.siteVerification,
  },
  openGraph: {
    title: `${siteConfig.name} | Vedação Industrial`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/brand/phoenix-logo.png",
        width: 1200,
        height: 630,
        alt: "PhoenixBor — Vedação e Fixação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Vedação Industrial`,
    description: siteConfig.description,
    images: ["/images/brand/phoenix-logo.png"],
  },
  icons: {
    icon: "/images/brand/phoenix-icon.png",
    apple: "/images/brand/phoenix-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-steel-950">
        <GoogleTags />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
