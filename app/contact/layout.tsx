import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata("/contact");

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/contact" />
      {children}
    </>
  );
}
