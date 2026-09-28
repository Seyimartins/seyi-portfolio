"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <FadeIn className={cn("max-w-2xl", className)}>
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
