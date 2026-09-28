"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { ease, slideUp } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute inset-0 hero-gradient" />
      <Container className="relative">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          <motion.p
            variants={slideUp}
            className="mb-6 text-xs font-medium uppercase tracking-widest text-accent"
          >
            Senior Product Designer
          </motion.p>
          <motion.h1
            variants={slideUp}
            className="max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Designing Products, Workflows & Systems That Scale Businesses.
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Senior Product Designer with 6+ years of experience turning complex
            business operations into intuitive digital products.
          </motion.p>
          <motion.div
            variants={slideUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <ButtonLink
              href="/projects"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-[#c9a227]"
            >
              View Projects
              <ArrowRight className="ml-2 size-4" />
            </ButtonLink>
            <Link
              href="/insights"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Read Insights
            </Link>
          </motion.div>
        </motion.div>
      </Container>
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute -right-32 top-1/2 size-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease }}
        />
      )}
    </section>
  );
}
