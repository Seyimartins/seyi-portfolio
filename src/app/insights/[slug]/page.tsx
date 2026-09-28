import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  getInsightBySlug,
  getInsightSlugs,
  getRelatedInsights,
} from "@/lib/content/get-insights";
import { MdxContent } from "@/components/mdx/mdx-content";
import { ReadingProgress } from "@/components/insights/reading-progress";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/motion/fade-in";
import {
  RevealOnScroll,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: "Article Not Found" };

  return {
    title: insight.title,
    description: insight.description,
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: "article",
      publishedTime: insight.date,
      url: `${siteConfig.url}/insights/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/insights/${slug}`,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) notFound();

  const related = getRelatedInsights(slug, insight.category);

  return (
    <>
      <ArticleJsonLd
        title={insight.title}
        description={insight.description}
        date={insight.date}
        slug={slug}
      />
      <ReadingProgress />
      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FadeIn>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Product Signals
            </Link>
            <Badge variant="outline" className="mt-8 font-normal">
              {insight.category}
            </Badge>
            <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {insight.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{insight.description}</p>
            <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
              <time>
                {new Date(insight.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{insight.readingTime}</span>
            </div>
          </FadeIn>
          <RevealOnScroll>
            <div className="prose-portfolio mt-12">
              <MdxContent source={insight.content} />
            </div>
          </RevealOnScroll>

          {related.length > 0 && (
            <RevealOnScroll>
              <aside className="mt-20 border-t border-border pt-12">
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  Related reading
                </h2>
                <StaggerChildren className="mt-6 space-y-4">
                  {related.map((r) => (
                    <StaggerItem key={r.slug}>
                      <Link
                        href={`/insights/${r.slug}`}
                        className="block text-muted-foreground transition-colors hover:text-accent"
                      >
                        {r.title}
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </aside>
            </RevealOnScroll>
          )}
        </Container>
      </article>
    </>
  );
}
