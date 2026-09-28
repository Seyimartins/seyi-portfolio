"use client";

import { useState } from "react";
import type { ThinkingEntry, ThinkingType } from "@/types/content";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const typeLabels: Record<ThinkingType, string> = {
  observation: "Observation",
  "mental-model": "Mental Model",
  framework: "Framework",
  research: "Research",
  critique: "Critique",
  ai: "AI",
  startup: "Startup",
  "design-note": "Design Note",
};

function ThinkingCard({ entry }: { entry: ThinkingEntry }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="mb-4 break-inside-avoid rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30"
      whileHover={reduced ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-accent">
        {typeLabels[entry.type]}
      </span>
      <h3 className="mt-2 font-heading text-base font-medium leading-snug text-foreground">
        {entry.title}
      </h3>
      {entry.content && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {entry.content}
        </p>
      )}
      <time className="mt-4 block text-xs text-muted-foreground">
        {new Date(entry.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </time>
    </motion.article>
  );
}

export function ThinkingMasonry({
  entries,
  types,
}: {
  entries: ThinkingEntry[];
  types: ThinkingType[];
}) {
  const [filter, setFilter] = useState<ThinkingType | "all">("all");

  const filtered =
    filter === "all" ? entries : entries.filter((e) => e.type === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm transition-colors",
            filter === "all"
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(type)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === type
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {typeLabels[type]}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((entry) => (
          <ThinkingCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </>
  );
}
