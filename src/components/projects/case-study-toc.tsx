"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CaseStudyToc({
  sections,
}: {
  sections: readonly { id: string; title: string }[];
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav aria-label="Case study sections" className="hidden lg:block">
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "block border-l-2 py-1 pl-4 text-sm transition-colors -ml-px",
                active === id
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
