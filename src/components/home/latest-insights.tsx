import Link from "next/link";
import { getAllInsights } from "@/lib/content/get-insights";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/reveal-on-scroll";
import { Badge } from "@/components/ui/badge";

export function LatestInsights() {
  const insights = getAllInsights().slice(0, 4);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            label="Product Signals"
            title="Latest Insights"
            description="Essays on product, operations, and systems design."
          />
          <FadeIn delay={0.15}>
            <Link
              href="/insights"
              className="text-sm text-accent hover:underline underline-offset-4"
            >
              View all insights →
            </Link>
          </FadeIn>
        </div>
        <StaggerChildren className="divide-y divide-border border-y border-border">
          {insights.map((insight) => (
            <StaggerItem key={insight.slug}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <Badge variant="outline" className="mb-2 border-border font-normal text-muted-foreground">
                    {insight.category}
                  </Badge>
                  <h3 className="font-heading text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {insight.title}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                    {insight.description}
                  </p>
                </div>
                <div className="flex shrink-0 gap-4 text-xs text-muted-foreground sm:text-right">
                  <time>
                    {new Date(insight.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span>{insight.readingTime}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
