import { readMdxFiles } from "./mdx";
import type { ThinkingEntry, ThinkingFrontmatter, ThinkingType } from "@/types/content";

export function getAllThinking(): ThinkingEntry[] {
  const files = readMdxFiles<ThinkingFrontmatter>("thinking");

  return files
    .map(({ slug, data, content }) => ({
      slug,
      ...data,
      content: content.trim(),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getThinkingTypes(): ThinkingType[] {
  const types = new Set(getAllThinking().map((t) => t.type));
  return Array.from(types) as ThinkingType[];
}

export function getThinkingByType(type: ThinkingType): ThinkingEntry[] {
  return getAllThinking().filter((t) => t.type === type);
}
