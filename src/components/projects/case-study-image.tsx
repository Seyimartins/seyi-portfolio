import { cn } from "@/lib/utils";

export function CaseStudyImage({
  alt,
  caption,
  className,
}: {
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("my-8", className)}>
      <div
        className="aspect-[16/10] w-full rounded-lg border border-border bg-gradient-to-br from-card to-secondary"
        role="img"
        aria-label={alt}
      >
        <div className="flex h-full items-center justify-center">
          <span className="text-sm text-muted-foreground">{alt}</span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
