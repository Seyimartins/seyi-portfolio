"use client";

import { journeyStages } from "@/lib/content/about-data";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function JourneyTimeline() {
  const reduced = useReducedMotion();

  return (
    <motion.ol
      className="relative flex flex-col gap-0 sm:flex-row sm:justify-between"
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-0 sm:right-0 sm:top-6 sm:bottom-auto sm:h-px sm:w-full" />
      {journeyStages.map((stage, i) => (
        <motion.li
          key={stage}
          variants={staggerItem}
          className="relative flex items-start gap-4 pb-8 pl-10 sm:flex-col sm:items-center sm:pb-0 sm:pl-0 sm:pt-10 sm:text-center"
        >
          <span className="absolute left-2.5 top-1.5 flex size-3 items-center justify-center rounded-full border border-accent bg-background sm:left-1/2 sm:-top-0 sm:-translate-x-1/2">
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-xs text-muted-foreground">0{i + 1}</span>
          <span className="font-heading text-sm font-medium text-foreground sm:mt-2">
            {stage}
          </span>
          {i < journeyStages.length - 1 && (
            <span className="ml-2 hidden text-muted-foreground sm:inline" aria-hidden>
              ↓
            </span>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
