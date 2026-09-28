import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, ExternalLink, Download, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/shared/button-link";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for product design opportunities.`,
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedIn,
    external: true,
  },
  {
    icon: Download,
    label: "Resume",
    value: "Download PDF",
    href: siteConfig.resumeUrl,
    download: true,
  },
  {
    icon: Calendar,
    label: "Schedule",
    value: "Book a call — coming soon",
    href: siteConfig.calendarUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s build products that solve real business problems.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Open to senior product design roles, consulting, and collaborations
            with teams building complex operational and financial products.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16">
          <ul className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isPlaceholder = item.href === "#";

              return (
                <li key={item.label}>
                  {isPlaceholder ? (
                    <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 opacity-70">
                      <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      download={item.download ? true : undefined}
                      className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/40"
                    >
                      <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-foreground group-hover:text-accent transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <ButtonLink
            href="/projects"
            className="bg-primary text-primary-foreground hover:bg-[#c9a227]"
          >
            View my work
          </ButtonLink>
        </FadeIn>
      </Container>
    </div>
  );
}
