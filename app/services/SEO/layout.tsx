import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata("/services/SEO");

export default function SeoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/SEO" />
      {children}
    </>
  );
}
