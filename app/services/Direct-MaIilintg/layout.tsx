import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata("/services/Direct-MaIilintg");

export default function DirectMailingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <RouteStructuredData path="/services/Direct-MaIilintg" />
      {children}
    </>
  );
}
