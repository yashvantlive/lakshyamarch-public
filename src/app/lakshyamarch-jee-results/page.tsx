import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import { RESULTS_JEE } from "@/lib/studentData";
import { Trophy } from "lucide-react";
import { Badge, HeroSection, StatsGrid, CTASection, Reveal, FAQSection } from "@/components/brand";
import type { ResultStudent, Stat } from "@/components/brand";
import JeeResultsShowcase from "@/components/brand/JeeResultsShowcase";
import { layout } from "@/design-system/spacing";

const STATS: Stat[] = [
  { value: 99.51, decimals: 2, label: "Top JEE Percentile", accent: "blue" },
  { value: 100, suffix: "+", label: "Total Selections", accent: "gold" },
  { value: 7, label: "Years of Trust", suffix: "", accent: "red" },
];

const FAQS = [
  { q: "What is the highest JEE percentile at LakshyaMarch?", a: "Our students regularly score above the 99th percentile, with Achyut securing 99.51 percentile in 2026." },
  { q: "Is board preparation integrated with JEE?", a: "Yes, our Integrated Schooling program covers both CBSE/ICSE board curriculum and JEE Foundation." },
  { q: "Who teaches the JEE batches?", a: "Our JEE batches are guided by elite faculty, including IIT/NIT alumni with years of experience." }
];

export default function JeeResultsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <main className="flex-1 bg-ink-50">
        <HeroSection accent="blue" minHeight="min-h-[70vh]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge tone="onDark" icon={Trophy}>JEE Hall of Fame</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Our <span className="text-brand-blue-400">JEE Results</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Consistently producing top engineering ranks. Discover the bright minds that paved their way to IITs and NITs.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mt-14">
            <StatsGrid stats={STATS} theme="dark" />
          </Reveal>
        </HeroSection>

        <section className={layout.section}>
          <div className={layout.container}>
            <JeeResultsShowcase jee={RESULTS_JEE as ResultStudent[]} />
          </div>
        </section>

        <FAQSection faqs={FAQS} accent="blue" />

        <CTASection
          title="Start Your Engineering Journey"
          accentWord="Engineering Journey"
          lead="Admissions open for JEE Main+Advanced 2026–28 batches. Shape your future with Begusarai's best."
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
