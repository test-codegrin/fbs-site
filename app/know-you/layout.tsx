import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata("/know-you");
}

export default function KnowYouLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/know-you" />
      {children}
    </>
  );
}
