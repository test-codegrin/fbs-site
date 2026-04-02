import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "./Components/BackToTop";
import { buildPageMetadata, siteConfig } from "@/app/lib/seo";
import { GlobalStructuredData } from "@/app/Components/RouteStructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: buildPageMetadata("/").title,
  description: buildPageMetadata("/").description,
  keywords: buildPageMetadata("/").keywords,
  alternates: buildPageMetadata("/").alternates,
  robots: buildPageMetadata("/").robots,
  openGraph: buildPageMetadata("/").openGraph,
  twitter: buildPageMetadata("/").twitter,
  category: "business",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth lenis-scrolling">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalStructuredData />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
