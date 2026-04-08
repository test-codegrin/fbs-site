import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/app/lib/seo";
import { getRequestBaseUrl } from "@/app/lib/request-url";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getRequestBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml", baseUrl),
    host: baseUrl,
  };
}
