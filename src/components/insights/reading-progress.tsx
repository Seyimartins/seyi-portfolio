"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduced) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-border">
      <motion.div
        className="h-full bg-accent"
        style={{ width: `${progress}%` }}
        initial={false}
      />
    </div>
  );
}
