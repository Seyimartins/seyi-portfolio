"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "md:hidden"
        )}
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="border-border bg-card">
        <SheetHeader>
          <SheetTitle className="font-heading">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mx-6 mt-8 flex flex-col gap-4" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-lg transition-colors",
                pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.resumeUrl}
            download
            className="mt-4 inline-flex items-center gap-2 text-accent"
            onClick={() => setOpen(false)}
          >
            <Download className="size-4" />
            Download Resume
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
