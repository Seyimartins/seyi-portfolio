import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/lib/content/get-projects";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and intelligence reports on fintech, operations, and service platform design work.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Project Command Center
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground">
            Systems designed for real business outcomes
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Each project is documented as an operational intelligence report—not a
            gallery tile.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-16 space-y-4">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
            <article
              className="rounded-lg border border-border bg-card transition-colors hover:border-accent/30"
            >
              <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="font-normal">
                      {project.industry}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-accent/30 font-normal text-accent"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
                    {project.title}
                  </h2>
                  <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Problem
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">
                        {project.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Role
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">
                        {project.role}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Outcome
                      </dt>
                      <dd className="mt-1 text-sm text-accent">
                        {project.outcome}
                      </dd>
                    </div>
                  </dl>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
                >
                  View case study
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </div>
  );
}
