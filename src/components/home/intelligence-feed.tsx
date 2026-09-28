import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getIntelligenceFeed } from "@/lib/content/feed";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/motion/reveal-on-scroll";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const typeLabels: Record<string, string> = {
  article: "Article",
  thought: "Thought",
  project: "Project",
  observation: "Observation",
};

export function IntelligenceFeed() {
  const items = getIntelligenceFeed(6);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          label="Live stream"
          title="Product Intelligence Feed"
          description="Recent signals across product, operations, and systems design."
          className="mb-12"
        />
        <StaggerChildren className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href={item.href}
                className="group flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card/80"
              >
                <div>
                  <Badge
                    variant="outline"
                    className={cn(
                      "mb-3 border-border text-xs font-normal text-muted-foreground",
                      item.type === "project" && "border-accent/30 text-accent"
                    )}
                  >
                    {typeLabels[item.type]}
                  </Badge>
                  <h3 className="font-heading text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-muted-foreground">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
