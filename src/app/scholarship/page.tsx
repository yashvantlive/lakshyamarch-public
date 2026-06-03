import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  Trophy, CheckCircle2, Gift, BookOpen, Clock,
  MessageCircle, GraduationCap, Phone,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, ScholarshipBadge, FAQSection,
  StatsGrid, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { Stat } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Scholarship Exam 2026 | Free Coaching Scholarship | LakshyaMarch Begusarai",
  description:
    "LakshyaMarch Scholarship Exam 2026 — Win up to 100% fee waiver. Free registration. Begusarai's biggest scholarship test for JEE, NEET & Foundation students. Class 6 to 12 eligible.",
  keywords: [
    "LakshyaMarch scholarship 2026", "scholarship exam Begusarai", "free coaching scholarship Bihar",
    "JEE NEET scholarship test Begusarai", "scholarship for coaching Bihar", "LM scholarship test",
  ],
  alternates: { canonical: "/scholarship" },
  openGraph: {
    title: "Scholarship Exam 2026 | LakshyaMarch Begusarai | Win 100% Fee Waiver",
    description: "Free scholarship exam for Class 6-12 students. Win up to 100% coaching fee waiver at LakshyaMarch Begusarai.",
    url: "https://lakshyamarch.com/scholarship",
    type: "website",
  },
};

const scholarshipFaqs = [
  { q: "What is the LakshyaMarch Scholarship Exam?", a: "The LakshyaMarch Scholarship Exam is a free competitive test conducted for students of Class 6 to 12. Based on performance, students can win scholarship benefits ranging from partial to 100% fee waiver on coaching / school admission at LakshyaMarch." },
  { q: "Who can apply for the LakshyaMarch scholarship?", a: "Any student currently studying in Class 6 to 12 is eligible to apply. There is no registration fee. Students from any school or coaching can apply." },
  { q: "What subjects are tested in the scholarship exam?", a: "For Class 6-8: Maths, Science, and Mental Ability. For Class 9-10: Maths, Physics, Chemistry, Biology. For Class 11-12 (JEE): Physics, Chemistry, Maths (PCM). For Class 11-12 (NEET): Physics, Chemistry, Biology (PCB)." },
  { q: "What scholarship benefits can I win?", a: "Scholarship ranges from 10% to 100% fee waiver depending on rank. Top rankers get 100% fee waiver. Full details are shared after the exam based on your score." },
  { q: "Is registration free?", a: "Yes, registration for the LakshyaMarch Scholarship Exam is completely free. No hidden charges. Simply WhatsApp or call us to register." },
  { q: "When is the next scholarship exam?", a: "Scholarship exams are conducted multiple times a year. Contact us on WhatsApp or call +91-6206323869 to know the next exam date and register." },
];

const scholarshipSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "FAQPage", mainEntity: scholarshipFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    {
      "@type": "Event", name: "LakshyaMarch Scholarship Exam 2026",
      description: "Free scholarship examination for Class 6-12 students at LakshyaMarch Education Begusarai. Win up to 100% fee waiver on coaching admission.",
      location: { "@type": "Place", name: INSTITUTE.name, address: { "@type": "PostalAddress", streetAddress: INSTITUTE.address.line1, addressLocality: INSTITUTE.address.city, addressRegion: INSTITUTE.address.state, postalCode: INSTITUTE.address.pin, addressCountry: "IN" } },
      organizer: { "@type": "Organization", name: INSTITUTE.name, url: "https://lakshyamarch.com" },
      startDate: "2026-04-01", endDate: "2027-03-31",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled", isAccessibleForFree: true,
    },
  ],
};

const QUICK_STATS: Stat[] = [
  { display: "6–12", label: "Eligible Classes", accent: "blue" },
  { display: "100%", label: "Max Scholarship", accent: "gold" },
  { display: "FREE", label: "Registration", accent: "green" },
  { display: "Multiple", label: "Exam Dates", accent: "red" },
];

const SLABS = [
  { tier: "gold" as const, rank: "Rank 1", award: "100% Fee Waiver" },
  { tier: "silver" as const, rank: "Rank 2", award: "75% Fee Waiver" },
  { tier: "bronze" as const, rank: "Rank 3", award: "50% Fee Waiver" },
  { tier: "merit" as const, rank: "Rank 4–10", award: "25% Fee Waiver" },
  { tier: "merit" as const, rank: "Rank 11–25", award: "10% Fee Waiver" },
];

const SYLLABUS = [
  { title: "Class 6–8", subjects: ["Mathematics (NCERT)", "Science (Physics + Biology)", "Mental Ability / Reasoning"], duration: "60 min", questions: "60 MCQs" },
  { title: "Class 9–10", subjects: ["Mathematics", "Physics", "Chemistry", "Biology"], duration: "90 min", questions: "90 MCQs" },
  { title: "Class 11–12 (JEE)", subjects: ["Physics", "Chemistry", "Mathematics"], duration: "90 min", questions: "90 MCQs" },
  { title: "Class 11–12 (NEET)", subjects: ["Physics", "Chemistry", "Biology"], duration: "90 min", questions: "90 MCQs" },
  { title: "Dropper (JEE)", subjects: ["Physics (Adv level)", "Chemistry", "Mathematics"], duration: "90 min", questions: "90 MCQs" },
  { title: "Dropper (NEET)", subjects: ["Biology (full NEET)", "Physics", "Chemistry"], duration: "90 min", questions: "90 MCQs" },
];

const REGISTER_STEPS = [
  { icon: MessageCircle, step: "01", title: "WhatsApp / Call", desc: `Message "Scholarship 2026" to +91-${INSTITUTE.primaryPhone}` },
  { icon: GraduationCap, step: "02", title: "Share Details", desc: "Share student name, class, and school name." },
  { icon: Trophy, step: "03", title: "Get Exam Date", desc: "We confirm exam date and venue. Arrive and write the test." },
];

export default function ScholarshipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipSchema) }} />
      <PublicNavbar />

      <HeroSection accent="gold">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Badge tone="onDark" icon={Gift}>Free Registration · Up to 100% Waiver</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                Scholarship Exam <span className="text-brand-gold-400">2026</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
                Talent deserving quality education shouldn't be stopped by fees. Register free and win up to{" "}
                <strong className="text-brand-gold-400">100% fee waiver</strong> on JEE, NEET, or Foundation coaching.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <StatsGrid stats={QUICK_STATS} theme="dark" />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <EnquiryForm />
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        {/* Slabs */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.containerMedium}>
            <SectionHeader eyebrow="Rewards" title="Scholarship Prize Slabs" accentWord="Slabs" accent="gold" lead="Based on your rank in the scholarship exam:" className="mb-12" />
            <Stagger className="space-y-4">
              {SLABS.map((s, i) => (
                <StaggerItem key={i}>
                  <ScholarshipBadge tier={s.tier} rank={s.rank} award={s.award} note="on total coaching fee" />
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 text-center font-sans text-xs text-ink-400">
              * Applicable on LakshyaMarch coaching / school admission fee. Conditions apply. Final amount confirmed after counselling.
            </p>
          </div>
        </section>

        {/* Syllabus */}
        <section className={cn(layout.section, "bg-ink-50")}>
          <div className={layout.containerMedium}>
            <SectionHeader eyebrow="Pattern" title="Exam Syllabus & Pattern" accentWord="Pattern" accent="blue" className="mb-12" />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SYLLABUS.map((cat) => (
                <StaggerItem key={cat.title}>
                  <div className="h-full rounded-lg border border-ink-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <span className="inline-block rounded-lg bg-brand-blue-800 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-white">{cat.title}</span>
                    <ul className="mb-5 mt-4 space-y-2">
                      {cat.subjects.map((sub) => (
                        <li key={sub} className="flex items-start gap-2 font-sans text-sm text-ink-600">
                          <CheckCircle2 size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-green-500" /> {sub}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4 border-t border-ink-100 pt-4 font-sans text-[0.6875rem] font-bold uppercase tracking-wider text-ink-500">
                      <span className="flex items-center gap-1"><Clock size={12} strokeWidth={1.75} /> {cat.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen size={12} strokeWidth={1.75} /> {cat.questions}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Register steps */}
        <section className={cn(layout.sectionTight, "bg-white")}>
          <div className={layout.containerMedium}>
            <SectionHeader eyebrow="Get Started" title="How to Register for Free" accentWord="Free" accent="gold" className="mb-14" />
            <Stagger className="grid gap-8 sm:grid-cols-3">
              {REGISTER_STEPS.map((s) => (
                <StaggerItem key={s.step} className="relative text-center">
                  <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 font-display text-[4.5rem] font-extrabold leading-none text-ink-200/70 select-none">{s.step}</span>
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-gold-400 text-ink-900 shadow-brand-md">
                      <s.icon size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink-900">{s.title}</h3>
                    <p className="mx-auto mt-2 max-w-xs font-sans text-sm text-ink-500">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
              <Button href={whatsappLink("Hi, I want to register for LakshyaMarch Scholarship Exam 2026.")} variant="gold" size="lg" withArrow magnetic target="_blank" rel="noopener noreferrer">
                Register on WhatsApp
              </Button>
              <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="outline" size="lg">
                <Phone size={18} strokeWidth={1.75} /> {INSTITUTE.primaryPhone}
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <FAQSection faqs={scholarshipFaqs} eyebrow="Scholarship FAQs" title="Questions, Answered" accentWord="Answered" accent="gold" />

      <PublicFooter />
    </div>
  );
}
