"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border py-12">
      <Container>
        <FadeIn>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.role}
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
            aria-label="Footer"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        </FadeIn>
      </Container>
    </footer>
  );
}
