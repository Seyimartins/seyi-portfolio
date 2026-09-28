import Link from "next/link";
import { Download, ExternalLink, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/shared/button-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScaleIn } from "@/components/motion/reveal-on-scroll";

export function RecruiterCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <ScaleIn>
          <div className="rounded-xl border border-border bg-card p-8 sm:p-12 lg:p-16">
            <h2 className="max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Looking for a designer who understands users, operations and
              business outcomes?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              I partner with product and operations leaders to design systems
              that scale—across fintech, SaaS, and service platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.resumeUrl}
                download
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary text-primary-foreground hover:bg-[#c9a227]"
                )}
              >
                <Download className="mr-2 size-4" />
                Download Resume
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <ExternalLink className="mr-2 size-4" />
                View LinkedIn
              </a>
              <ButtonLink href="/contact" variant="outline">
                <Mail className="mr-2 size-4" />
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
