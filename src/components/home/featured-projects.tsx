import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content/get-projects";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/motion/reveal-on-scroll";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          label="Case studies"
          title="Featured Work"
          description="Four systems designed for fintech, operations, financial services, and service platforms."
          className="mb-12"
        />
        <StaggerChildren className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.1)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="outline" className="border-border font-normal">
                    {project.industry}
                  </Badge>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-muted-foreground">Challenge</dt>
                    <dd className="mt-0.5 text-foreground">{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Role</dt>
                    <dd className="mt-0.5 text-foreground">{project.role}</dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-border pt-4 text-sm text-accent">
                  {project.outcome}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
