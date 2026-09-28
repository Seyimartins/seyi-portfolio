import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

export function ButtonLink({
  href,
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  }) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
