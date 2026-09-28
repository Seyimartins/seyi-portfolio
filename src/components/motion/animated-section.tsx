"use client";

import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

export function AnimatedSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <RevealOnScroll>
      <section id={id} className="scroll-mt-28">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          {title}
        </h2>
        <div className="mt-6 prose-portfolio">{children}</div>
      </section>
    </RevealOnScroll>
  );
}
