import { getAllInsights } from "./get-insights";
import { getAllThinking } from "./get-thinking";
import { getFeaturedProjects } from "./get-projects";
import type { FeedItem } from "@/types/content";

export function getIntelligenceFeed(limit = 6): FeedItem[] {
  const insights = getAllInsights().slice(0, 3).map((i) => ({
    id: `insight-${i.slug}`,
    type: "article" as const,
    title: i.title,
    description: i.description,
    href: `/insights/${i.slug}`,
    date: i.date,
  }));

  const thinking = getAllThinking().slice(0, 2).map((t) => ({
    id: `thinking-${t.slug}`,
    type: "thought" as const,
    title: t.title,
    href: "/thinking",
    date: t.date,
  }));

  const projects = getFeaturedProjects().slice(0, 1).map((p) => ({
    id: `project-${p.slug}`,
    type: "project" as const,
    title: p.title,
    description: p.description,
    href: `/projects/${p.slug}`,
    date: "2025-01-01",
  }));

  const curated: FeedItem[] = [
    {
      id: "feed-1",
      type: "observation",
      title: "Why Collection Teams Fail Before Their Tools Do",
      href: "/insights/collection-teams-fail",
      date: "2025-05-12",
    },
    {
      id: "feed-2",
      type: "article",
      title: "What Teaching 60+ Students Taught Me About Product Design",
      href: "/insights/teaching-product-design",
      date: "2025-04-28",
    },
    {
      id: "feed-3",
      type: "observation",
      title: "The Hidden Cost of Poor Internal Tools",
      href: "/insights/hidden-cost-internal-tools",
      date: "2025-04-10",
    },
  ];

  const merged = [...curated, ...insights, ...thinking, ...projects];
  const seen = new Set<string>();

  return merged
    .filter((item) => {
      if (seen.has(item.title)) return false;
      seen.add(item.title);
      return true;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
