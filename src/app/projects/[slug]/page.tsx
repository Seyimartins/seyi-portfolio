import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  getProjectBySlug,
  getProjectSlugs,
  caseStudySections,
} from "@/lib/content/get-projects";
import { CaseStudyToc } from "@/components/projects/case-study-toc";
import { CaseStudyContent } from "@/components/projects/case-study-content";
import { CreativeWorkJsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideIn } from "@/components/motion/reveal-on-scroll";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <CreativeWorkJsonLd
        title={project.title}
        description={project.description}
        slug={slug}
      />
      <div className="border-b border-border py-12 sm:py-16">
        <Container>
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All projects
            </Link>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="outline">{project.industry}</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent">
                {project.status}
              </Badge>
            </div>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {project.description}
            </p>
            <dl className="mt-8 flex flex-wrap gap-8 text-sm">
              <div>
                <dt className="text-muted-foreground">Role</dt>
                <dd className="mt-1 font-medium text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="mt-1 font-medium text-foreground">{project.focus}</dd>
              </div>
            </dl>
          </FadeIn>
        </Container>
      </div>

      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <SlideIn direction="left" className="lg:sticky lg:top-28 lg:self-start">
            <aside>
              <CaseStudyToc sections={caseStudySections} />
            </aside>
          </SlideIn>
          <CaseStudyContent project={project} />
        </div>
      </Container>
    </>
  );
}
