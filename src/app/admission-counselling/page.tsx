import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Phone, GraduationCap, Library, Target, Users } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, ProgramCard, CTASection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Admission Counselling | LakshyaMarch Education",
  description: "Meet our expert Admission Counselors. Get complete guidance for School Wing, Foundation Coaching, and IIT-JEE/NEET target batches.",
};

const COUNSELORS = [
  { name: "Ramayan Kumar", role: "Admission Counselor", qual: "Expert Admission Counselor", prev: "5+ Years Experience", phone: "8405906260", usp: "Helps parents and students choose the right batch for School, Boards and Competition." },
  { name: "Dheeraj Kumar", role: "Admission Counselor", qual: "Expert Admission Counselor", prev: "5+ Years Experience", phone: "7858878922", usp: "Helps parents and students choose the right batch for School, Boards and Competition." },
];

const PROGRAMS_LIST = [
  { title: "School Wing (Class 6–10)", icon: Library, accent: "blue" as const, desc: "Integrated schooling with a strong focus on core concepts, board exam preparation, and extracurricular growth.", tags: ["CBSE", "BSEB", "ICSE"] },
  { title: "Foundation Coaching (7–10)", icon: GraduationCap, accent: "green" as const, desc: "Early preparation for Olympiads, NTSE, and a solid base for future competitive exams like JEE & NEET.", tags: ["NTSE", "Olympiads", "Pre-Foundation"] },
  { title: "Target JEE / NEET (11, 12 & Droppers)", icon: Target, accent: "red" as const, desc: "Intensive target batches taught by elite IITian and NITian faculty, with specialized dropper batches.", tags: ["IIT-JEE", "NEET", "Board Prep"] },
];

export default function AdmissionCounsellingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[52vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={Users}>Free Guidance</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Admission <span className="text-brand-gold-400">Counselling</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Confused about the right batch? Connect with our expert counselors to navigate your path from School Wing to elite coaching.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="The Desk" title="Our Counselling Experts" accentWord="Experts" accent="red" className="mb-14" />
            <Stagger className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {COUNSELORS.map((c) => (
                <StaggerItem key={c.name}>
                  <div className="flex h-full flex-col rounded-lg border border-ink-200 bg-white p-7 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue-700 to-brand-blue-900 font-display text-2xl font-extrabold text-white">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink-900">{c.name}</h3>
                        <p className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-blue-700">{c.role}</p>
                      </div>
                    </div>
                    <div className="mt-5 rounded-xl border border-brand-blue-100 bg-brand-blue-50/60 p-4">
                      <p className="font-sans text-sm italic leading-relaxed text-ink-700">{c.usp}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <Badge tone="neutral">{c.prev}</Badge>
                      <Button href={`tel:+91${c.phone}`} variant="secondary" size="sm">
                        <Phone size={14} strokeWidth={1.75} /> Call Direct
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Explore" title="Our Programs" accentWord="Programs" accent="blue" lead="Whether you need school education, early foundation, or extreme target prep — there's a batch for you." className="mb-14" />
            <Stagger className="grid gap-6 md:grid-cols-3">
              {PROGRAMS_LIST.map((p) => (
                <StaggerItem key={p.title}>
                  <ProgramCard
                    title={p.title}
                    icon={p.icon}
                    accentColor={p.accent}
                    target={p.desc}
                    features={p.tags}
                    href="/admission"
                    ctaLabel="Apply Now"
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Still Not Sure Which Batch Fits?"
        accentWord="Fits?"
        lead="Request a callback from our admission counselling team. We'll map your academic goals and help you pick the winning path."
        actions={[
          { label: "Call Helpline", href: "tel:+916206323869", variant: "primary", withArrow: true },
          { label: "Apply Online", href: "/admission", variant: "ghost" },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
