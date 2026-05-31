import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { SUCCESS_STORIES } from "@/lib/stories";
import { ArrowRight, BookOpen, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Badge, SectionHeader, HeroSection, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Success Stories & Toppers Journey | LakshyaMarch Begusarai",
  description: "Read inspiring stories of students from Begusarai who cracked IIT-JEE and NEET. Learn about their strategy, struggle, and ultimate success at LakshyaMarch.",
  keywords: ["NEET Toppers Begusarai", "JEE Success Stories", "IIT-JEE Preparation Tips", "LakshyaMarch Results"],
};

const catTone: Record<string, "blue" | "green" | "red"> = { JEE: "blue", NEET: "green", Board: "red" };

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="gold" minHeight="min-h-[58vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={Trophy}>Hall of Fame</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              The <span className="text-brand-gold-400">Success</span> Stories
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              How local students from Begusarai achieved national-level excellence — their preparation secrets and advice for future aspirants.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={layout.section}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Journeys" title="From Begusarai to the Top" accentWord="Top" accent="gold" className="mb-14" />
            <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SUCCESS_STORIES.map((story) => (
                <StaggerItem key={story.id}>
                  <Link
                    href={`/success-stories/${story.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                      {story.image ? (
                        <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950">
                          <Trophy size={44} strokeWidth={1.5} className="text-white/25" />
                        </div>
                      )}
                      <div className="absolute left-4 top-4">
                        <Badge tone={catTone[story.category]}>{story.category} {story.year}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="flex items-center gap-2 font-sans text-[0.625rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                        <BookOpen size={12} strokeWidth={2} /> Preparation Journey
                      </p>
                      <h3 className="mt-4 font-display text-lg font-bold leading-tight text-ink-900 transition-colors group-hover:text-brand-red-600 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-ink-500 line-clamp-3">{story.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-6">
                        <span className="flex items-center gap-2 font-sans text-[0.625rem] font-bold uppercase tracking-[0.12em] text-ink-400">
                          <GraduationCap size={14} strokeWidth={1.75} className="text-brand-blue-600" /> {story.author}
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-50 text-ink-400 transition-all group-hover:bg-brand-red-600 group-hover:text-white">
                          <ArrowRight size={14} strokeWidth={1.75} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Your Hard Work, Our Mentorship, Your Success Story"
        accentWord="Success Story"
        lead="Begin your journey at LakshyaMarch Begusarai today."
        actions={[
          { label: "Enroll for 2026–28", href: "/admission", variant: "primary", withArrow: true },
          { label: "View Results", href: "/results", variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
