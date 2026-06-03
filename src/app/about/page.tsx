import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, FOUNDER, PROGRAMS, HIGHLIGHTS } from "@/lib/siteData";
import { DIRECTOR_DATA, INST_VALUES } from "@/lib/contactData";
import { Eye, Target, Trophy, CheckCircle2, Quote, ShieldCheck } from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, CTASection, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { whatsappLink } from "@/lib/siteData";
import { cn } from "@/lib/utils";

const aboutFaqs = [
  { q: "When was LakshyaMarch established?", a: "LakshyaMarch Education was established in 2019 in Begusarai, Bihar by Ram Kumar Sir, a B.Tech graduate from IIT Kharagpur." },
  { q: "What is the vision of LakshyaMarch?", a: "The vision is to bring JEE & NEET-level coaching and disciplined schooling together under one roof in Begusarai, so students don't have to leave their home city for top-tier education." },
  { q: "What makes LakshyaMarch different from other coaching?", a: "LakshyaMarch stands out because: (1) All faculty are IIT/NIT alumni, (2) Integrated school + coaching model saves time, (3) Small batch sizes for personal attention, (4) No compromise policy on discipline." },
  { q: "Does LakshyaMarch have hostel facility?", a: "Yes, LakshyaMarch provides AC classrooms and hostel facility for outstation students with a safe, disciplined environment." },
];

export const metadata = {
  title: "About Us | Our Story & Vision",
  description: "Learn about LakshyaMarch Begusarai, established in 2019 by Ram Sir. We are dedicated to bringing premier academic excellence and disciplined schooling to Begusarai.",
  keywords: ["About LakshyaMarch", "Ram Sir Begusarai", "Best Coaching in Begusarai", "Educational Vision", "LM Integrated School Story"],
};

const VALUE_ICONS = { vision: Eye, mission: Target, goal: Trophy } as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <FaqSchema faqs={aboutFaqs} />
      <PublicNavbar />

      <HeroSection accent="blue" minHeight="min-h-[60vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={ShieldCheck}>Established {INSTITUTE.established}</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              About <span className="text-brand-gold-400">LakshyaMarch</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              A revolution in education is taking shape in Begusarai. We are dedicated to academic excellence,
              discipline, and bringing premier IIT-JEE & NEET preparation to your hometown.
            </p>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        {/* Core values */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="What Drives Us"
              title="Our Core Values"
              accentWord="Values"
              accent="red"
              lead="The pillars that guide our commitment to educational excellence and character building."
              className="mb-14"
            />
            <Stagger className="grid gap-6 md:grid-cols-3">
              {(Object.keys(INST_VALUES) as Array<keyof typeof INST_VALUES>).map((key) => {
                const value = INST_VALUES[key];
                const Icon = VALUE_ICONS[key];
                return (
                  <StaggerItem key={key}>
                    <div className="h-full rounded-lg border border-ink-200 bg-white p-8 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                        <Icon size={28} strokeWidth={1.75} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{value.title}</h3>
                      <p className="mt-3 font-sans leading-relaxed text-ink-500">{value.text}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* Leadership */}
        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="Leadership"
              title="The Director's Desk"
              accentWord="Desk"
              accent="blue"
              lead="Guided by experience, driven by a passion for education."
              className="mb-14"
            />
            <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
              <Reveal>
                <div className="overflow-hidden rounded-lg border border-ink-200 bg-white p-8 shadow-brand-sm lg:sticky lg:top-28">
                  <div className="relative mb-7 aspect-square overflow-hidden rounded-lg border border-ink-100 shadow-brand-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={DIRECTOR_DATA.image} alt={DIRECTOR_DATA.name} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-extrabold text-ink-900">{DIRECTOR_DATA.name}</h3>
                    <p className="mt-2 font-sans text-sm font-bold uppercase tracking-[0.14em] text-brand-blue-700">{DIRECTOR_DATA.designation}</p>
                    <div className="mt-5 flex flex-col gap-2">
                      <Badge tone="neutral" className="justify-center">{DIRECTOR_DATA.qualification}</Badge>
                      <Badge tone="green" className="justify-center">{DIRECTOR_DATA.certification}</Badge>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-10">
                  <div className="relative overflow-hidden rounded-lg bg-ink-950 p-8 sm:p-12">
                    <Quote className="absolute -left-2 -top-3 h-28 w-28 text-white/5" />
                    <p className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brand-gold-400">Our Foundational Vision</p>
                    <p className="relative mt-5 font-sans text-xl italic leading-relaxed text-white sm:text-2xl">
                      {FOUNDER.message}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">{DIRECTOR_DATA.title}</h3>
                    <p className="mt-5 font-sans leading-relaxed text-ink-600">{DIRECTOR_DATA.message}</p>
                    <p className="mt-5 font-sans leading-relaxed text-ink-600">
                      We started LakshyaMarch in {INSTITUTE.established} with a simple goal: Quality Education with No
                      Compromises. Today we bring the same rigorous, result-oriented approach to schooling through{" "}
                      <strong className="text-ink-900">{PROGRAMS.school.name}</strong> — so students no longer need to
                      travel to other cities.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Our Edge" title="Why Choose Us" accentWord="Us" accent="red" className="mb-14" />
            <Stagger className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <StaggerItem key={h}>
                  <div className="flex h-full items-start gap-4 rounded-lg border border-ink-200 bg-ink-50 p-6">
                    <CheckCircle2 size={22} strokeWidth={1.75} className="shrink-0 text-brand-green-500" />
                    <p className="font-sans text-sm font-medium leading-snug text-ink-700">{h}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>

      <CTASection
        title="Be Part of the Revolution"
        accentWord="Revolution"
        lead="Join LakshyaMarch and march ahead towards your goal with India's finest mentors."
        actions={[
          { label: "Apply Now", href: "/admission", variant: "primary", withArrow: true },
          { label: "Talk to Us", href: whatsappLink(), variant: "ghost", external: true },
        ]}
      />
      <PublicFooter />
    </div>
  );
}
