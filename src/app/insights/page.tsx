import type { Metadata } from "next";
import { getAllInsights, getInsightCategories } from "@/lib/content/get-insights";
import { InsightsFilter } from "@/components/insights/insights-filter";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Product Signals",
  description:
    "Essays on product design, UX research, operations, fintech, and systems thinking.",
};

export default function InsightsPage() {
  const insights = getAllInsights();
  const categories = getInsightCategories();

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Product Signals
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ideas for builders of complex products
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Not a blog—a publication on product, operations, and the systems
            underneath great interfaces.
          </p>
        </FadeIn>
        <div className="mt-16">
          <InsightsFilter insights={insights} categories={categories} />
        </div>
      </Container>
    </div>
  );
}
