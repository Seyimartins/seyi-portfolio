import type { Metadata } from "next";
import { getAllThinking, getThinkingTypes } from "@/lib/content/get-thinking";
import { ThinkingMasonry } from "@/components/thinking/thinking-masonry";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "A public notebook of observations, mental models, frameworks, and product critiques.",
};

export default function ThinkingPage() {
  const entries = getAllThinking();
  const types = getThinkingTypes();

  return (
    <div className="py-16 sm:py-24">
      <Container wide>
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Knowledge garden
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            How I think about product
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Short observations, mental models, and notes from the field—updated as
            I learn.
          </p>
        </FadeIn>
        <div className="mt-16">
          <ThinkingMasonry entries={entries} types={types} />
        </div>
      </Container>
    </div>
  );
}
