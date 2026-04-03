import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata("/contact");
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/contact" />
      {children}
    </>
  );
}
