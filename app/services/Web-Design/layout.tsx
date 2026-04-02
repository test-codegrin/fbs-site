import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata("/services/Web-Design");

export default function WebDesignLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/Web-Design" />
      {children}
    </>
  );
}
