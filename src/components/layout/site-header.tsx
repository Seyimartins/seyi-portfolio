"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-sm font-semibold tracking-tight text-foreground transition-colors hover:border-accent/40"
          aria-label={`${siteConfig.name} home`}
        >
          SO
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resumeUrl}
            download
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-primary text-primary-foreground hover:bg-[#c9a227] sm:inline-flex"
            )}
          >
            <Download className="mr-2 size-4" />
            Download Resume
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
