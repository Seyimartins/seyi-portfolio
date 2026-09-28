import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { pillars, stats, principles } from "@/lib/content/about-data";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}'s journey from graphic design to systems design—and what makes their product practice different.`,
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            I design systems that help businesses scale—not just interfaces.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {siteConfig.tagline} Over six years across fintech, SaaS, operations,
            and service platforms, I&apos;ve partnered with teams to turn complex
            workflows into products people actually use.
          </p>
        </FadeIn>

        <section className="mt-20 sm:mt-28">
          <SectionHeader
            label="Journey"
            title="From pixels to systems"
            className="mb-12"
          />
          <JourneyTimeline />
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeader
            label="Differentiators"
            title="What makes me different"
            className="mb-12"
          />
          <StaggerChildren className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
              <div
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeader
            label="Track record"
            title="Experience snapshot"
            className="mb-12"
          />
          <StaggerChildren className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
              <div
                className="rounded-lg border border-border bg-card p-6 text-center sm:p-8"
              >
                <p className="font-heading text-4xl font-semibold text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        <section className="mt-20 sm:mt-28">
          <SectionHeader label="Values" title="Principles" className="mb-12" />
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <StaggerItem key={p.title}>
              <div
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>
      </Container>
    </div>
  );
}
