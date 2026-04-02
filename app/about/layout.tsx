import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata("/about");

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/about" />
      {children}
    </>
  );
}
