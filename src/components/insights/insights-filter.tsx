"use client";

import { useState } from "react";
import Link from "next/link";
import type { Insight, InsightCategory } from "@/types/content";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function InsightsFilter({
  insights,
  categories,
}: {
  insights: Insight[];
  categories: InsightCategory[];
}) {
  const [active, setActive] = useState<InsightCategory | "All">("All");

  const filtered =
    active === "All"
      ? insights
      : insights.filter((i) => i.category === active);

  return (
    <>
      <FadeIn className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm transition-colors",
            active === "All"
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              active === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </FadeIn>
      <StaggerChildren
        key={active}
        className="divide-y divide-border border-y border-border"
      >
        {filtered.map((insight) => (
          <StaggerItem key={insight.slug}>
          <Link
            href={`/insights/${insight.slug}`}
            className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-3 border-border font-normal">
                {insight.category}
              </Badge>
              <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {insight.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{insight.description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-1 text-sm text-muted-foreground sm:text-right">
              <time>
                {new Date(insight.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>{insight.readingTime}</span>
            </div>
          </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </>
  );
}
