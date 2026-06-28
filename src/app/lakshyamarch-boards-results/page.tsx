import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE } from "@/lib/siteData";
import { RESULTS_BOARD } from "@/lib/studentData";
import { Trophy } from "lucide-react";
import { Badge, HeroSection, StatsGrid, CTASection, Reveal, FAQSection } from "@/components/brand";
import type { ResultStudent, Stat } from "@/components/brand";
import BoardResultsShowcase from "@/components/brand/BoardResultsShowcase";
import { layout } from "@/design-system/spacing";

const STATS: Stat[] = [
  { value: 96.80, decimals: 2, suffix: "%", label: "Top Board Score", accent: "gold" },
  { value: 500, suffix: "+", label: "Distinctions", accent: "blue" },
  { value: 7, label: "Years of Trust", suffix: "", accent: "red" },
];

const FAQS = [
  { q: "Which boards does LakshyaMarch support?", a: "We provide comprehensive preparation for CBSE, ICSE, and Bihar Board (BSEB) students." },
  { q: "Is foundation coaching provided along with boards?", a: "Absolutely. Our integrated curriculum builds a strong foundation for competitive exams like NTSE, Olympiads, and JEE/NEET." },
  { q: "How do you help weak students in board exams?", a: "We offer special doubt-clearing sessions, daily practice papers (DPPs), and personalized mentorship to ensure every student excels." }
];

export default function BoardsResultsPage() {
  const board: ResultStudent[] = [
    ...RESULTS_BOARD.cbse12,
    ...RESULTS_BOARD.bseb12,
    ...RESULTS_BOARD.cbse10,
    ...RESULTS_BOARD.icse10,
  ].map((r: any) => ({ ...r, board: `${r.board} ${r.class}th` }));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      <main className="flex-1 bg-ink-50">
        <HeroSection accent="gold" minHeight="min-h-[70vh]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge tone="onDark" icon={Trophy}>Board Achievers</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Our <span className="text-brand-gold-400">Board Results</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Outstanding performances in CBSE, ICSE, and Bihar Board. A strong academic foundation starts here.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mt-14">
            <StatsGrid stats={STATS} theme="dark" />
          </Reveal>
        </HeroSection>

        <section className={layout.section}>
          <div className={layout.container}>
            <BoardResultsShowcase board={board} />
          </div>
        </section>

        <FAQSection faqs={FAQS} accent="gold" />

        <CTASection
          title="Secure Your Academic Foundation"
          accentWord="Academic Foundation"
          lead="Admissions open for Class 6th to 12th integrated programs. Join us to excel in board exams."
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
