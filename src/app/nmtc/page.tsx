import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  Trophy, Star, CheckCircle2, ShieldCheck,
  TrendingUp, Award, Users,
  Building, GraduationCap, Calendar
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, FAQSection, Button, Reveal, Stagger, StaggerItem
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

// SEO Metadata
export const metadata: Metadata = {
  title: "NMTC Examination Center in Begusarai | LakshyaMarch",
  description:
    "Join the NMTC Examination through LakshyaMarch, Begusarai. Trusted NMTC center with 150+ student participation in 2024 and 2025. Contact us for registration and complete details.",
  keywords: [
    "NMTC Begusarai",
    "NMTC Registration Begusarai",
    "LakshyaMarch NMTC",
    "National Medical Talent Competition",
    "NMTC Exam Center Bihar",
    "NMTC Coaching Begusarai",
    "NMTC Registration Bihar",
  ],
  alternates: { canonical: "/nmtc" },
  openGraph: {
    title: "NMTC Examination Center in Begusarai | LakshyaMarch",
    description:
      "Join the NMTC Examination through LakshyaMarch, Begusarai. Trusted NMTC center with 150+ student participation in 2024 and 2025. Contact us for registration and complete details.",
    url: "https://lakshyamarch.com/nmtc",
    siteName: "LakshyaMarch Education",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NMTC Examination Center in Begusarai | LakshyaMarch",
    description:
      "Join the NMTC Examination through LakshyaMarch, Begusarai. Trusted NMTC center with 150+ student participation in 2024 and 2025.",
  },
};

const nmtcWAString =
  "Hello LakshyaMarch Team, I am interested in the NMTC Examination. Please provide me complete details regarding registration, eligibility, fees, and exam center.";

const nmtcFAQs = [
  {
    q: "What is NMTC?",
    a: "NMTC stands for National Medical Talent Competition. It is a highly respected national-level competition that helps students evaluate their conceptual understanding and medical-stream talent under competitive, real-time conditions.",
  },
  {
    q: "Who can participate in NMTC?",
    a: "Students preparing for medical streams, foundation levels, and competitive examinations are eligible to participate. Generally, students from Class 8 onwards can register for their respective categories.",
  },
  {
    q: "How can I register?",
    a: "You can register by visiting LakshyaMarch (the designated NMTC center in Begusarai) or by contacting our team via WhatsApp/phone. We will assist you with the forms, eligibility verification, and payment.",
  },
  {
    q: "Is LakshyaMarch an NMTC examination center?",
    a: "Yes, LakshyaMarch is the official, trusted NMTC examination center in Begusarai. We have been organizing the center smoothly and successfully for multiple years.",
  },
  {
    q: "When is the examination conducted?",
    a: "The examination is conducted annually. For the latest exam dates, schedules, and deadlines, please connect with our admissions desk or send us a message on WhatsApp.",
  },
  {
    q: "Is there any registration fee?",
    a: "Yes, there is a standard nominal registration fee prescribed by the NMTC board. Please contact our counseling team for the exact fee structure for this year's session.",
  },
  {
    q: "How can parents contact LakshyaMarch?",
    a: "Parents can visit our campus at Begusarai directly, call us at our helpline number, or send an inquiry via WhatsApp for quick digital assistance.",
  },
];

const nmtcSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://lakshyamarch.com/nmtc#webpage",
      "url": "https://lakshyamarch.com/nmtc",
      "name": "NMTC Examination Center in Begusarai | LakshyaMarch",
      "description":
        "Join the NMTC Examination through LakshyaMarch, Begusarai. Trusted NMTC center with 150+ student participation in 2024 and 2025.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://lakshyamarch.com/nmtc#faq",
      "mainEntity": nmtcFAQs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lakshyamarch.com/nmtc#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://lakshyamarch.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "NMTC",
          "item": "https://lakshyamarch.com/nmtc",
        },
      ],
    },
  ],
};

const BENEFITS = [
  {
    title: "National-Level Exposure",
    desc: "Compete alongside thousands of top minds across the nation to test your actual standards.",
  },
  {
    title: "Performance Benchmarking",
    desc: "Receive a detailed analytics report outlining your conceptual strengths and specific areas of growth.",
  },
  {
    title: "Scholarship Opportunities",
    desc: "Win scholarships and recognition badges that boost your academic profile and credentials.",
  },
];

const WHY_PARTICIPATE = [
  {
    icon: Trophy,
    title: "National-Level Competition",
    desc: "Gives students a realistic measure of where they stand against peers nationwide.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analysis",
    desc: "Get diagnostic insight into weak concepts to refine your study strategy.",
  },
  {
    icon: Award,
    title: "Scholarship Opportunities",
    desc: "Attractive rewards, cash prizes, and scholarships for exceptional ranks.",
  },
  {
    icon: ClipboardCheck,
    title: "Rank Improvement",
    desc: "Learn test-taking strategies early to consistently improve your academic ranks.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence Building",
    desc: "Overcome exam anxiety by practicing under strict, real-time invigilated environments.",
  },
  {
    icon: Users,
    title: "Competitive Environment",
    desc: "Interact with like-minded, ambitious peers to keep your preparation drive fueled.",
  },
];

import { ClipboardCheck } from "lucide-react";

const WHY_LAKSHYAMARCH = [
  {
    title: "Trusted Educational Institute",
    desc: "Established as Begusarai's #1 coaching hub with top IIT-JEE and NEET results.",
  },
  {
    title: "Experienced Academic Team",
    desc: "Get coached and mentored by alumni of IITs, NITs, and premier universities.",
  },
  {
    title: "Smooth Exam Management",
    desc: "We ensure zero-hassle enrollment, detailed briefing sessions, and strict invigilation.",
  },
  {
    title: "Student-Friendly Environment",
    desc: "Fully air-conditioned, silent rooms with comfortable seating and perfect lighting.",
  },
  {
    title: "End-to-End Guidance",
    desc: "From registration support to post-exam analysis, our team is there to help.",
  },
];

const TIMELINE_STEPS = [
  {
    step: "Step 1",
    title: "Contact LakshyaMarch",
    desc: "Reach out via WhatsApp or visit our Begusarai center to show your interest.",
  },
  {
    step: "Step 2",
    title: "Get Registration Details",
    desc: "Our counselor will share the forms, eligibility guidelines, and fees details.",
  },
  {
    step: "Step 3",
    title: "Complete Registration",
    desc: "Fill out the registration form, submit required docs, and confirm your slot.",
  },
  {
    step: "Step 4",
    title: "Appear for the Exam",
    desc: "Get your admit card and walk into our high-standard examination center on the test day.",
  },
];

export default function NMTCPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nmtcSchema) }}
      />
      <PublicNavbar />

      {/* Hero Section */}
      <HeroSection accent="red" className="relative bg-gradient-to-br from-[#450a0a] to-ink-950">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge tone="onDark" icon={Star} className="border-brand-gold-500/30 bg-brand-gold-500/10 text-brand-gold-400">
              Official NMTC Center — Begusarai
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              NMTC Examination Center in <span className="text-[#1E8E3E]">Begusarai</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-300">
              Prepare, Participate, and Compete Nationally with <span className="text-brand-gold-400 font-bold">LakshyaMarch</span>. 
              LakshyaMarch proudly organizes NMTC examinations in Begusarai, providing students with an opportunity to assess their preparation at a national level.
            </p>
          </Reveal>
          
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={whatsappLink(nmtcWAString)}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E8E3E] hover:bg-[#156f2f] text-white border-transparent"
              >
                Register Now
              </Button>
              <Button
                href={whatsappLink(nmtcWAString)}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Contact on WhatsApp
              </Button>
            </div>
          </Reveal>

          {/* Quick Badges */}
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-3 border-t border-white/10 pt-8">
              <span className="flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-ink-300">
                <CheckCircle2 size={14} className="text-[#1E8E3E]" /> Real-time Simulation
              </span>
              <span className="h-4 w-px bg-white/20 hidden sm:block" />
              <span className="flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-ink-300">
                <CheckCircle2 size={14} className="text-[#1E8E3E]" /> National Percentile
              </span>
              <span className="h-4 w-px bg-white/20 hidden sm:block" />
              <span className="flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-ink-300">
                <CheckCircle2 size={14} className="text-[#1E8E3E]" /> Verified Center
              </span>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        {/* Section 2: What is NMTC? */}
        <section className={cn(layout.section, "bg-white border-b border-ink-100")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="Introduction"
              title="What is National Medical Talent Competition?"
              accentWord="Talent Competition"
              accent="green"
              lead="Understand the platform designed to discover and reward tomorrow's medical innovators."
              className="mb-14"
            />
            <div className="grid gap-8 md:grid-cols-3">
              {BENEFITS.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="flex">
                  <div className="flex flex-col rounded-xl border border-ink-200 bg-ink-50 p-6 transition-all hover:shadow-brand-md">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F1F]/10 text-[#7A1F1F]">
                      <GraduationCap size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Participate in NMTC? */}
        <section className={cn(layout.section, "bg-ink-50/50")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="Key Benefits"
              title="Why Participate in NMTC?"
              accentWord="Participate"
              accent="red"
              lead="Grooming and benchmarking your performance relative to top national percentiles."
              className="mb-14"
            />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_PARTICIPATE.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full rounded-xl border border-ink-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-brand-lg">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1E8E3E]/10 text-[#1E8E3E]">
                      <item.icon size={22} />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Section 4: Why Choose LakshyaMarch? */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Badge tone="red" icon={Building} className="border-[#7A1F1F]/20 bg-[#7A1F1F]/5 text-[#7A1F1F]">
                  Trusted Begusarai Center
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
                  Why Choose LakshyaMarch as Your <span className="text-[#7A1F1F]">NMTC Center</span>?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  As Begusarai's most trusted coaching center, we make sure that students do not face any logistical or academic hurdles during the competition cycle.
                </p>
                <div className="mt-8">
                  <Button
                    href={whatsappLink(nmtcWAString)}
                    variant="primary"
                    size="md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7A1F1F] hover:bg-[#5b1616] text-white border-transparent"
                  >
                    Talk to Our Team
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {WHY_LAKSHYAMARCH.map((item, idx) => (
                    <Reveal key={idx} delay={idx * 0.05}>
                      <div className="flex gap-4 rounded-lg border border-ink-150 p-5 hover:bg-ink-50 transition-colors">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E8E3E] text-white">
                          <CheckCircle2 size={12} strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="font-display text-sm font-bold text-ink-900">{item.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed text-ink-500">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: NMTC 2026 Important Dates */}
        <section className={cn(layout.section, "bg-ink-50/50 border-y border-ink-200")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="Timeline"
              title="NMTC 2026 Important Dates"
              accentWord="Important Dates"
              accent="red"
              lead="Mark your calendar with the official schedule of the NMTC 2026 examination cycle."
              className="mb-14"
            />
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Registration Last Date",
                  subtitle: "(Without Late Fee)",
                  date: "15 July 2026",
                  color: "border-brand-green-500 text-brand-green-700 bg-brand-green-50/40",
                },
                {
                  title: "Registration with Late Fee",
                  subtitle: "Standard late registration window",
                  date: "16 July 2026 to 25 July 2026",
                  color: "border-brand-gold-500 text-brand-gold-800 bg-brand-gold-50/40",
                },
                {
                  title: "Stage 1 Preliminary Exam",
                  subtitle: "Time: 10:00 AM – 12:00 Noon",
                  date: "30 August 2026",
                  color: "border-brand-blue-500 text-brand-blue-800 bg-brand-blue-50/40",
                },
                {
                  title: "Stage 2 Final Examination",
                  subtitle: "Time: 10:00 AM – 12:00 Noon",
                  date: "25 October 2026",
                  color: "border-[#7A1F1F] text-[#7A1F1F] bg-red-50/40",
                },
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className={cn("h-full flex flex-col justify-between rounded-xl border p-6 shadow-brand-sm transition-all hover:-translate-y-1 hover:shadow-brand-md bg-white", item.color.split(" ")[0])}>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar size={18} className="shrink-0 text-ink-400" />
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-ink-500">
                          {idx + 1 === 1 || idx + 1 === 2 ? "Registration" : "Examination"}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-ink-900 leading-snug">{item.title}</h3>
                      <p className="mt-1 text-xs text-ink-500 leading-normal">{item.subtitle}</p>
                    </div>
                    <div className={cn("mt-6 rounded-lg px-4 py-3 font-display text-sm font-extrabold text-center", item.color.split(" ").slice(1).join(" "))}>
                      {item.date}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-8 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-red-50 border border-brand-red-100 px-4 py-1.5 font-sans text-xs font-semibold text-[#7A1F1F] shadow-brand-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#7A1F1F]" />
                Dates are based on the official NMTC 2026 schedule announced by AMTI.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Section: Registration Fee Section */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="Pricing Plan"
              title="Registration Fee Structure"
              accentWord="Fee Structure"
              accent="green"
              lead="Transparent fee details for NMTC 2026. Slots are registered directly at our Begusarai center."
              className="mb-14"
            />
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {/* Early Registration Card */}
              <Reveal delay={0.05} className="flex">
                <div className="flex flex-1 flex-col justify-between rounded-2xl border-2 border-brand-green-205 bg-brand-green-50/10 p-8 shadow-brand-md transition-all hover:shadow-brand-lg relative overflow-hidden">
                  <div className="absolute right-0 top-0 bg-brand-green-500 text-white font-display text-[0.625rem] font-bold uppercase tracking-[0.1em] py-1 px-4 rounded-bl-lg shadow-brand-sm">
                    Recommended
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-green-800">Early Registration</h3>
                    <p className="mt-1 text-xs text-ink-500">Available for early applicants</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-extrabold text-ink-900">₹150</span>
                      <span className="text-xs text-ink-500">/ student</span>
                    </div>
                    <div className="mt-6 border-t border-ink-100 pt-6">
                      <ul className="space-y-3 text-sm text-ink-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-brand-green-600 shrink-0" />
                          <span>Validity: <strong>Up to 15 July 2026</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-brand-green-600 shrink-0" />
                          <span>No late fee penalty charge</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button
                      href={whatsappLink("Hello LakshyaMarch Team, I am interested in registering for NMTC 2026. Please provide complete registration details.")}
                      variant="primary"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#1E8E3E] hover:bg-[#156f2f] text-white border-transparent py-2.5"
                    >
                      Register on WhatsApp
                    </Button>
                  </div>
                </div>
              </Reveal>

              {/* Late Registration Card */}
              <Reveal delay={0.1} className="flex">
                <div className="flex flex-1 flex-col justify-between rounded-2xl border border-ink-200 bg-white p-8 shadow-brand-sm transition-all hover:shadow-brand-md">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-700">Late Registration</h3>
                    <p className="mt-1 text-xs text-ink-500">Standard late fee structure</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-4xl font-extrabold text-ink-900">₹250</span>
                      <span className="text-xs text-ink-500">/ student</span>
                    </div>
                    <div className="mt-6 border-t border-ink-100 pt-6">
                      <ul className="space-y-3 text-sm text-ink-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-brand-gold-600 shrink-0" />
                          <span>Validity: <strong>16 July 2026 to 25 July 2026</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-brand-gold-600 shrink-0" />
                          <span>Includes AMTI late registration charge</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button
                      href={whatsappLink("Hello LakshyaMarch Team, I am interested in registering for NMTC 2026. Please provide complete registration details.")}
                      variant="outline"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border-ink-300 text-ink-800 hover:bg-ink-50 py-2.5"
                    >
                      Register on WhatsApp
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 border-t border-ink-150 pt-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-600">
                <ShieldCheck size={16} className="text-[#1E8E3E] shrink-0" />
                <span>Official NMTC Examination Center</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-600">
                <ShieldCheck size={16} className="text-[#1E8E3E] shrink-0" />
                <span>Organized Successfully in 2024 & 2025</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-600">
                <ShieldCheck size={16} className="text-[#1E8E3E] shrink-0" />
                <span>150+ Students Participated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Proven Track Record (Important) */}
        <section className={cn(layout.section, "bg-[#7A1F1F] text-white relative overflow-hidden")}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#450a0a] to-[#7A1F1F] opacity-90" />
          <div className={cn(layout.container, "relative z-10")}>
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="onDark" icon={Star} className="border-brand-gold-500/30 bg-brand-gold-500/10 text-brand-gold-400">
                Our Heritage
              </Badge>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Successfully Organizing NMTC Centers Since Previous Years
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-300">
                LakshyaMarch successfully organized NMTC examination centers in both 2024 and 2025. 
                More than 150+ students participated through our center, reflecting the trust and confidence students and parents place in LakshyaMarch.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              <Reveal delay={0.05} className="flex">
                <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-md">
                  <div className="text-3xl font-extrabold text-brand-gold-400">2024</div>
                  <div className="mt-2 text-sm font-semibold text-white">Center Organized ✓</div>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="flex">
                <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-md">
                  <div className="text-3xl font-extrabold text-brand-gold-400">2025</div>
                  <div className="mt-2 text-sm font-semibold text-white">Center Organized ✓</div>
                </div>
              </Reveal>
              <Reveal delay={0.15} className="flex">
                <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-md">
                  <div className="text-3xl font-extrabold text-[#34d399]">150+</div>
                  <div className="mt-2 text-sm font-semibold text-white">Students Participated ✓</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 6: How to Register? */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader
              eyebrow="Admission Process"
              title="How to Register for NMTC?"
              accentWord="How to Register"
              accent="green"
              lead="Get enrolled systematically in under 5 minutes with our easy verification pipeline."
              className="mb-16"
            />
            <div className="relative mx-auto max-w-3xl">
              {/* Vertical line indicator */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-ink-200 sm:left-1/2 sm:-ml-px" />
              
              <div className="space-y-12">
                {TIMELINE_STEPS.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <Reveal key={idx} delay={idx * 0.05} className="relative flex flex-col sm:flex-row items-start justify-between">
                      {/* Left content block (visible on desktop only if even) */}
                      <div className={cn("w-full sm:w-[45%] text-left sm:text-right hidden sm:block", !isEven && "opacity-0 pointer-events-none")}>
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-[#7A1F1F]">
                          {step.step}
                        </span>
                        <h4 className="mt-1 font-display text-lg font-bold text-ink-900">{step.title}</h4>
                        <p className="mt-2 text-sm text-ink-600">{step.desc}</p>
                      </div>

                      {/* Timeline circle marker */}
                      <div className="absolute left-0 sm:left-1/2 sm:-ml-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#1E8E3E] text-white shadow-brand-md">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>

                      {/* Right content block (always visible on mobile; visible on desktop if odd) */}
                      <div className={cn("pl-12 sm:pl-0 w-full sm:w-[45%] text-left", isEven && "sm:opacity-0 sm:pointer-events-none")}>
                        <span className="font-display text-xs font-bold uppercase tracking-wider text-[#7A1F1F] sm:hidden">
                          {step.step}
                        </span>
                        <h4 className="mt-1 font-display text-lg font-bold text-ink-900">{step.title}</h4>
                        <p className="mt-2 text-sm text-ink-600">{step.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ Accordion Section */}
        <FAQSection
          faqs={nmtcFAQs}
          eyebrow="FAQ"
          title="Frequently Asked Questions About NMTC"
          accentWord="Questions"
          accent="green"
        />

        {/* Section 8: Final CTA Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#450a0a] to-[#7A1F1F] text-white py-20 sm:py-24">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Participate in NMTC?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-300">
              Join hundreds of students who have trusted LakshyaMarch for their NMTC journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={whatsappLink(nmtcWAString)}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E8E3E] hover:bg-[#156f2f] text-white border-transparent"
              >
                Register Now
              </Button>
              <Button
                href={whatsappLink(nmtcWAString)}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
