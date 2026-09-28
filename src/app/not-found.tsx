import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/shared/button-link";

export default function NotFound() {
  return (
    <FadeIn>
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back home
      </ButtonLink>
    </Container>
    </FadeIn>
  );
}
