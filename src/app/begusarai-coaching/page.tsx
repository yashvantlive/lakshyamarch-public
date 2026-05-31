import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  MapPin, Users, ShieldCheck, GraduationCap, CheckCircle2,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, FAQSection, StatsGrid, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import type { Stat } from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best Coaching in Begusarai for IIT-JEE & NEET | LakshyaMarch",
  description: "Looking for the top coaching institute in Begusarai? LakshyaMarch offers premium IIT-JEE & NEET preparation with IITian faculty in Chanakya Nagar.",
  keywords: [
    "best coaching in Begusarai", "IIT JEE coaching Begusarai", "NEET coaching Bihar",
    "top coaching institute Begusarai", "Ram sir coaching Begusarai", "LakshyaMarch Begusarai",
  ],
  alternates: { canonical: "/begusarai-coaching" },
  openGraph: {
    title: "Best Coaching in Begusarai | LakshyaMarch",
    description: "Premium IIT-JEE & NEET preparation with IITian faculty right here in Begusarai.",
  },
};

const localFaqs = [
  { q: "Which is the best coaching for IIT JEE in Begusarai?", a: "LakshyaMarch is widely considered the best coaching for IIT-JEE in Begusarai. With a faculty panel of IIT and NIT alumni, they produced a 99.35 percentile top scorer in JEE Main 2025." },
  { q: "Where is LakshyaMarch coaching located?", a: "LakshyaMarch is centrally located at Dakbangla Road, Opposite Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101." },
  { q: "Is NEET coaching available in Begusarai?", a: "Yes, LakshyaMarch offers dedicated NEET medical coaching in Begusarai. Their students have achieved massive success, including AIR 499 (619/720) in NEET 2025." },
  { q: "Do I need to go to Kota for coaching if I live in Begusarai?", a: "No. LakshyaMarch brings Kota-level education to Begusarai through its experienced IIT/NIT faculty, rigorous test series, and integrated school model — saving parents money and keeping students close to home." },
];

const STATS: Stat[] = [
  { value: 99.35, decimals: 2, label: "JEE 2025 Percentile", accent: "blue" },
  { display: "AIR 499", label: "NEET Best Rank", accent: "green" },
  { value: 100, suffix: "+", label: "Total Selections", accent: "gold" },
  { value: 2019, label: "Trusted Since", accent: "red" },
];

const WHY = [
  { title: "IIT/NIT Faculty Only", desc: "No local part-time tutors. Your child is mentored by engineers and doctors who cracked the toughest exams themselves.", icon: GraduationCap },
  { title: "No Migration Stress", desc: "Keep your child safe at home. Avoid homesickness and the high hostel costs of distant cities.", icon: ShieldCheck },
  { title: "Integrated Schooling", desc: "Our Class 6–10 model saves time — board schooling and foundation coaching happen under one roof.", icon: Users },
];

const CAMPUS = [
  "Fully air-conditioned classrooms",
  "Hi-tech digital smart boards",
  "Strictly monitored CCTV campus",
];

export default function BegusaraiCoachingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <FaqSchema faqs={localFaqs} />
      <PublicNavbar />

      <HeroSection accent="red" minHeight="min-h-[68vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge tone="onDark" icon={MapPin}>Begusarai, Bihar</Badge>
              <Badge tone="onDark" icon={ShieldCheck}>Premium Coaching</Badge>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              The Undisputed Leader in <span className="text-brand-gold-400">Begusarai Coaching</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Why send your child away to Kota or Patna? LakshyaMarch brings India's top IIT/NIT educators directly to your hometown.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="primary" size="lg" withArrow magnetic>Call Admissions</Button>
              <Button href="/admission" variant="ghost" size="lg">Apply Online</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-14"><StatsGrid stats={STATS} theme="dark" /></Reveal>
      </HeroSection>

      <main className="flex-1">
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="Why Stay Local" title="Every Advantage, Right Here" accentWord="Here" accent="red" lead="LakshyaMarch offers every benefit of a national institute — without leaving Begusarai." className="mb-14" />
            <Stagger className="grid gap-8 md:grid-cols-3">
              {WHY.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="h-full rounded-2xl border border-ink-200 bg-ink-50 p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-600">
                      <f.icon size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink-900">{f.title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-ink-500">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Campus + real map */}
        <section className={cn(layout.section, "bg-ink-950 text-white")}>
          <div className={layout.container}>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <Badge tone="onDark" icon={MapPin}>Visit Campus</Badge>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-white">
                  In the Heart of <span className="text-brand-gold-400">Begusarai</span>
                </h2>
                <p className="mt-5 font-sans leading-relaxed text-white/70">
                  Our modern campus sits at {INSTITUTE.address.line1}, easily accessible from all parts of the city.
                </p>
                <ul className="mt-7 space-y-3">
                  {CAMPUS.map((c) => (
                    <li key={c} className="flex items-center gap-3 font-sans font-medium text-white/85">
                      <CheckCircle2 size={20} strokeWidth={1.75} className="text-brand-green-400" /> {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Button href="/contact" variant="gold" size="md" withArrow>Get Directions</Button>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 shadow-brand-xl lg:h-[440px]">
                  <iframe
                    src={INSTITUTE.mapEmbedUrl}
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="LakshyaMarch Begusarai Location"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <FAQSection faqs={localFaqs} eyebrow="Local FAQs" title="Begusarai Coaching, Answered" accentWord="Answered" accent="red" />

      <PublicFooter />
    </div>
  );
}
