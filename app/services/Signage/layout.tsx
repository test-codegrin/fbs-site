import type { ReactNode } from "react";
import { RouteStructuredData } from "@/app/Components/RouteStructuredData";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata("/services/Signage");

export default function SignageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/Signage" />
      {children}
    </>
  );
}
