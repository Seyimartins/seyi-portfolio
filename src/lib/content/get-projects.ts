import { readMdxFiles } from "./mdx";
import type { Project, ProjectFrontmatter } from "@/types/content";

export function getAllProjects(): Project[] {
  const files = readMdxFiles<ProjectFrontmatter>("projects");

  return files
    .map(({ slug, data, content }) => ({
      slug,
      ...data,
      content,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

export const caseStudySections = [
  { id: "overview", title: "Project Overview" },
  { id: "problem", title: "Problem" },
  { id: "research", title: "Research" },
  { id: "stakeholders", title: "Stakeholder Interviews" },
  { id: "insights", title: "Key Insights" },
  { id: "flows", title: "User Flows" },
  { id: "ia", title: "Information Architecture" },
  { id: "wireframes", title: "Wireframes" },
  { id: "designs", title: "Final Designs" },
  { id: "impact", title: "Business Impact" },
  { id: "lessons", title: "Lessons Learned" },
  { id: "next", title: "Next Steps" },
] as const;
