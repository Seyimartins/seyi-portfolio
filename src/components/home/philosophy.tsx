import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";

export function Philosophy() {
  return (
    <section className="border-y border-border py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Design philosophy
          </p>
          <blockquote className="mt-8 max-w-4xl font-heading text-3xl font-medium leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Every interface is the visible layer of a much larger system.
          </blockquote>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Great products emerge when user needs, business goals, and
            operational realities align. I design for that alignment—from
            research and workflow mapping through to execution teams can ship
            and scale.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
