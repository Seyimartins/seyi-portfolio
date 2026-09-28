"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        ...fadeIn,
        visible: {
          ...fadeIn.visible,
          transition: { ...fadeIn.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
