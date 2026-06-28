import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import { RESULTS_NEET } from "@/lib/studentData";
import { Trophy } from "lucide-react";
import { Badge, HeroSection, StatsGrid, CTASection, Reveal, FAQSection } from "@/components/brand";
import type { ResultStudent, Stat } from "@/components/brand";
import NeetResultsShowcase from "@/components/brand/NeetResultsShowcase";
import { layout } from "@/design-system/spacing";

const STATS: Stat[] = [
  { display: "AIR 499", label: "Best NEET Rank", accent: "green" },
  { value: 100, suffix: "+", label: "Total Selections", accent: "gold" },
  { value: 7, label: "Years of Trust", suffix: "", accent: "red" },
];

const FAQS = [
  { q: "What is the highest NEET score at LakshyaMarch?", a: "The highest score achieved by our student is 685/720 (Abhijeet, 2024), and AIR 499 by Aradhya Bharti in 2025." },
  { q: "Do you offer droppers batch for NEET?", a: "Yes, we offer specialized dropper batches tailored for intense preparation and mock tests to secure a seat in top medical colleges." },
  { q: "How are the mock tests conducted?", a: "We conduct tests based exactly on the NTA pattern (ThinkNEET Test Series), providing detailed analytics for weak areas." }
];

export default function NeetResultsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <main className="flex-1 bg-ink-50">
        <HeroSection accent="green" minHeight="min-h-[70vh]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge tone="onDark" icon={Trophy}>NEET Hall of Fame</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Our <span className="text-brand-green-400">NEET Results</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Transforming medical aspirations into reality. See how our dedicated NEET methodology builds rank holders from Begusarai.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mt-14">
            <StatsGrid stats={STATS} theme="dark" />
          </Reveal>
        </HeroSection>

        <section className={layout.section}>
          <div className={layout.container}>
            <NeetResultsShowcase neet={RESULTS_NEET as ResultStudent[]} />
          </div>
        </section>

        <FAQSection faqs={FAQS} accent="green" />

        <CTASection
          title="Become Our Next Medical Scholar"
          accentWord="Medical Scholar"
          lead="Admissions open for NEET 2026–28 batches. Join the leaders in medical coaching."
          actions={[
            { label: "Enroll Now", href: "/admission", variant: "primary", withArrow: true },
            { label: "Call Us", href: `tel:+91${INSTITUTE.primaryPhone}`, variant: "ghost" },
          ]}
        />
      </main>
      <PublicFooter />
    </div>
  );
}
