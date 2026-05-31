import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import {
  Badge, SectionHeader, HeroSection, FAQSection, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { FAQ } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export type SeoFeature = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  desc: string;
};

/**
 * Shared template for programmatic SEO location pages (general / JEE / NEET).
 * One branded layout — only copy, accent, and features vary per route.
 */
export default function SeoLocationPage({
  accent,
  eyebrow,
  badgeText,
  title,
  accentWord,
  lead,
  featuresTitle,
  features,
  faqs,
  primaryCta,
  secondaryCta,
}: {
  accent: "red" | "blue" | "gold" | "green";
  eyebrow: string;
  badgeText: string;
  title: string;
  accentWord: string;
  lead: string;
  featuresTitle: string;
  features: SeoFeature[];
  faqs: FAQ[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  const chip: Record<string, string> = {
    red: "bg-brand-red-50 text-brand-red-600",
    blue: "bg-brand-blue-50 text-brand-blue-700",
    gold: "bg-brand-gold-50 text-brand-gold-600",
    green: "bg-brand-green-50 text-brand-green-600",
  };

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent={accent} minHeight="min-h-[60vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark">{badgeText}</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              {title} <span className="text-brand-gold-400">{accentWord}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">{lead}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={primaryCta.href} className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand-red-600 px-9 font-display font-semibold text-white shadow-brand-md transition-all hover:bg-brand-red-700">
                {primaryCta.label}
              </a>
              <a href={secondaryCta.href} className="inline-flex h-14 items-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-9 font-display font-semibold text-white transition-all hover:bg-ink-700">
                {secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow={eyebrow} title={featuresTitle} accentWord={featuresTitle.split(" ").pop()} accent={accent} className="mb-14" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="h-full rounded-lg border border-ink-200 bg-ink-50 p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-xl", chip[accent])}>
                      <f.icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{f.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-ink-500">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <FAQSection faqs={faqs} eyebrow="FAQs" title="Questions, Answered" accentWord="Answered" accent={accent} />

      <CTASection
        title="Start Your Preparation With LakshyaMarch"
        accentWord="LakshyaMarch"
        lead={`Join Begusarai's most trusted institute. Admissions open for 2026–27.`}
        actions={[
          { label: "Apply Now", href: "/admission", variant: "primary", withArrow: true },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}

/** Helper to turn a slug into a Title Case location name. */
export function slugToLocation(slug: string): string {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
