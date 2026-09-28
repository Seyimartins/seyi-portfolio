import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getProjectSlugs } from "@/lib/content/get-projects";
import { getInsightSlugs } from "@/lib/content/get-insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/insights",
    "/thinking",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = getProjectSlugs().map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = getInsightSlugs().map((slug) => ({
    url: `${base}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
