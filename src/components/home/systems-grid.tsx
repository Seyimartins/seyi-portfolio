"use client";

import { systemCategories } from "@/lib/content/systems";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { motion, useReducedMotion } from "framer-motion";

export function SystemsGrid() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border bg-card/30 py-20 sm:py-28">
      <Container>
        <SectionHeader
          label="Capabilities"
          title="Systems I Design"
          description="Four domains where product design meets operational and business reality."
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {systemCategories.map((system, i) => (
            <RevealOnScroll key={system.id}>
              <motion.div
                className="group h-full rounded-lg border border-border bg-card p-6 sm:p-8"
                whileHover={
                  reduced
                    ? undefined
                    : { borderColor: "rgba(212, 175, 55, 0.3)" }
                }
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                  {system.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {system.description}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {system.examples.map((ex) => (
                    <li
                      key={ex}
                      className="text-sm text-muted-foreground before:mr-2 before:text-accent before:content-['—']"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
