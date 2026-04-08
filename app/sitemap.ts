import type { MetadataRoute } from "next";
import { absoluteUrl, publicPagePaths } from "@/app/lib/seo";
import { getRequestBaseUrl } from "@/app/lib/request-url";
import { getServiceLocationPages } from "@/app/lib/service-location-pages";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getRequestBaseUrl();
  const corePages: MetadataRoute.Sitemap = publicPagePaths.map((path) => ({
    url: absoluteUrl(path, baseUrl),
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === "/"
        ? 1
        : path.startsWith("/services/")
          ? 0.9
          : path === "/privacy"
            ? 0.4
            : 0.8,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = getServiceLocationPages().map((page) => ({
    url: absoluteUrl(page.path, baseUrl),
    lastModified: new Date(page.location.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...corePages, ...serviceLocationPages];
}
