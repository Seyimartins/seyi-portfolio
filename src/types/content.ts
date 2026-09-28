export type InsightCategory =
  | "Product Design"
  | "UX Research"
  | "Product Strategy"
  | "AI"
  | "SaaS"
  | "Fintech"
  | "Operations"
  | "Career Growth"
  | "Freelancing";

export type ThinkingType =
  | "observation"
  | "mental-model"
  | "framework"
  | "research"
  | "critique"
  | "ai"
  | "startup"
  | "design-note";

export type FeedItemType = "article" | "thought" | "project" | "observation";

export interface ProjectFrontmatter {
  title: string;
  industry: string;
  problem: string;
  role: string;
  outcome: string;
  challenge: string;
  status: "Shipped" | "In Progress" | "Concept";
  featured: boolean;
  order: number;
  description: string;
  focus: string;
  themes: string[];
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export interface InsightFrontmatter {
  title: string;
  description: string;
  date: string;
  category: InsightCategory;
  published: boolean;
}

export interface Insight extends InsightFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface ThinkingFrontmatter {
  title: string;
  type: ThinkingType;
  date: string;
  tags: string[];
}

export interface ThinkingEntry extends ThinkingFrontmatter {
  slug: string;
  content: string;
}

export interface FeedItem {
  id: string;
  type: FeedItemType;
  title: string;
  description?: string;
  href: string;
  date: string;
}

export interface SystemCategory {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export interface CaseStudySection {
  id: string;
  title: string;
}
