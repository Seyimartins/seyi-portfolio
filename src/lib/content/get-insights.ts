import { readMdxFiles, getReadingTime } from "./mdx";
import type { Insight, InsightCategory, InsightFrontmatter } from "@/types/content";

export function getAllInsights(): Insight[] {
  const files = readMdxFiles<InsightFrontmatter>("insights");

  return files
    .filter(({ data }) => data.published !== false)
    .map(({ slug, data, content }) => ({
      slug,
      ...data,
      content,
      readingTime: getReadingTime(content),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return getAllInsights().find((i) => i.slug === slug);
}

export function getInsightSlugs(): string[] {
  return getAllInsights().map((i) => i.slug);
}

export function getInsightsByCategory(category: InsightCategory): Insight[] {
  return getAllInsights().filter((i) => i.category === category);
}

export function getRelatedInsights(
  slug: string,
  category: InsightCategory,
  limit = 3
): Insight[] {
  return getAllInsights()
    .filter((i) => i.slug !== slug && i.category === category)
    .slice(0, limit);
}

export function getInsightCategories(): InsightCategory[] {
  const cats = new Set(getAllInsights().map((i) => i.category));
  return Array.from(cats) as InsightCategory[];
}
