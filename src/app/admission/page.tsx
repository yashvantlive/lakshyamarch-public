import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import AdmissionEnquiryForm from "@/components/public/AdmissionEnquiryForm";
import { INSTITUTE, PROGRAMS, whatsappLink } from "@/lib/siteData";
import {
  CheckCircle2, Phone, MessageCircle, FileText, Users, BookOpen,
  GraduationCap, ClipboardList, BadgeCheck, CalendarDays, Star,
} from "lucide-react";
import {
  Badge, SectionHeader, HeroSection, FAQSection, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admission 2026-27 | Apply Now | LakshyaMarch Begusarai",
  description:
    "Apply for admission in LakshyaMarch Education Begusarai 2026-27. School admissions (Class 6-10) and coaching admissions (JEE/NEET Class 7-12 + Dropper). Simple 3-step process.",
  keywords: [
    "LakshyaMarch admission 2026", "admission in Begusarai coaching", "IIT JEE admission Begusarai",
    "NEET admission Bihar", "LM Integrated School admission", "coaching admission process Begusarai",
  ],
  alternates: { canonical: "/admission" },
  openGraph: {
    title: "Admission 2026-27 | LakshyaMarch Begusarai",
    description: "Apply for LakshyaMarch admission. JEE/NEET coaching and Integrated School (Class 6-10) admissions open.",
    url: "https://lakshyamarch.com/admission",
    type: "website",
  },
};

const admissionFaqs = [
  { q: "How to take admission in LakshyaMarch?", a: "Fill the enquiry form on this page or WhatsApp us at +91-6206323869. Our counsellor will call you, explain the process, and guide you through document submission and batch selection." },
  { q: "What documents are required for admission?", a: "You need: (1) Previous class marksheet / report card, (2) Aadhar Card (student + parent), (3) 2 passport-size photos. Additional documents may be requested based on the batch." },
  { q: "Is there an entrance test for admission?", a: "There is no mandatory entrance test for most batches. However, a diagnostic test may be conducted to assess the student's current level and suggest the most suitable batch." },
  { q: "When does the 2026-27 session start?", a: "Integrated School (Class 6-10) and Foundation Coaching batches start in April 2026. JEE/NEET Class 11-12 batches start between March-May 2026. Dropper batches begin in May 2026." },
  { q: "What is the last date to apply?", a: "Seats are limited and filled on a first-come-first-served basis. Apply early to secure your seat. Contact us to know current availability for specific batches." },
  { q: "Is there an online admission process?", a: "Yes, you can fill the enquiry form online on this page or on our homepage. The counsellor will guide you through the rest. Physical visit for document verification is required once." },
];

const admissionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "FAQPage", mainEntity: admissionFaqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
    {
      "@type": "Event", name: "LakshyaMarch Admission 2026-27",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-04-01", endDate: "2026-06-30",
      location: { "@type": "Place", name: INSTITUTE.name, address: { "@type": "PostalAddress", streetAddress: INSTITUTE.address.line1, addressLocality: INSTITUTE.address.city, addressRegion: INSTITUTE.address.state, postalCode: INSTITUTE.address.pin, addressCountry: "IN" } },
      offers: { "@type": "Offer", url: "https://lakshyamarch.com/admission", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", validFrom: "2026-01-01" },
      organizer: { "@type": "Organization", name: INSTITUTE.name, url: "https://lakshyamarch.com" },
      description: "Annual admission process for IIT-JEE, NEET coaching and LM Integrated School (Class 6-10) at LakshyaMarch Begusarai.",
    },
  ],
};

const STEPS = [
  { icon: ClipboardList, step: "01", title: "Enquire", desc: "Fill the form, call, or WhatsApp. Our counsellor responds within 2 hours." },
  { icon: Users, step: "02", title: "Counselling", desc: "Free 1-on-1 session to assess goals and recommend the best-fit batch." },
  { icon: BadgeCheck, step: "03", title: "Confirm Seat", desc: "Submit documents, complete registration, and your seat is confirmed." },
];

const DOCS = [
  "Previous class marksheet / report card",
  "Student Aadhar Card",
  "Parent / Guardian Aadhar Card",
  "2 passport-size photographs (recent)",
  "School Transfer Certificate (if applicable)",
  "Mobile number for OTP-based registration",
];

export default function AdmissionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionSchema) }} />
      <PublicNavbar />

      <HeroSection accent="red" posterSrc="/images/posters/brochure.webp" posterOpacity={6} logoWatermark>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Badge tone="onDark" icon={Star}>Admissions Open · 2026–27</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                Apply for <span className="text-brand-gold-400">LakshyaMarch</span> Admission
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-white/70">
                Secure your child's future at Begusarai's most result-oriented coaching and integrated school. Limited seats — apply today.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {STEPS.map((s) => (
                  <div key={s.step} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold-400 font-display text-sm font-extrabold text-ink-900">
                      {s.step.replace("0", "")}
                    </span>
                    <p className="font-sans text-sm text-white/80">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`tel:+91${INSTITUTE.primaryPhone}`} variant="primary" size="md">
                  <Phone size={16} strokeWidth={1.75} /> Call to Apply
                </Button>
                <Button href={whatsappLink("Hi, I want to apply for admission at LakshyaMarch 2026-27.")} variant="ghost" size="md" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} strokeWidth={1.75} /> WhatsApp Apply
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <AdmissionEnquiryForm />
          </Reveal>
        </div>
      </HeroSection>

      <main className="flex-1">
        {/* Process */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.containerMedium}>
            <SectionHeader eyebrow="How it works" title="A Simple Admission Process" accentWord="Process" accent="red" lead="We've made admission as easy as possible — three steps, done in 48 hours." className="mb-16" />
            <Stagger className="grid gap-8 sm:grid-cols-3">
              {STEPS.map((s) => (
                <StaggerItem key={s.step} className="relative text-center">
                  <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[5rem] font-extrabold leading-none text-ink-200/70 select-none">{s.step}</span>
                  <div className="relative">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red-600 text-white shadow-brand-md">
                      <s.icon size={28} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink-900">{s.title}</h3>
                    <p className="mx-auto mt-2 max-w-xs font-sans text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Documents */}
        <section className={cn(layout.sectionTight, "bg-ink-50")}>
          <div className={layout.containerNarrow}>
            <Reveal>
              <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-brand-sm sm:p-10">
                <SectionHeader align="left" eyebrow="Checklist" eyebrowIcon={FileText} title="Documents Required" accentWord="Required" accent="blue" lead="Keep these ready before visiting the campus or applying online." className="mb-8" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {DOCS.map((doc) => (
                    <div key={doc} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50 p-3">
                      <CheckCircle2 size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-green-500" />
                      <p className="font-sans text-sm font-medium text-ink-700">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Batches */}
        <section className={cn(layout.section, "bg-white")}>
          <div className={layout.container}>
            <SectionHeader eyebrow="2026–27 Session" title="All Available Batches" accentWord="Batches" accent="blue" className="mb-12" />
            <div className="space-y-10">
              <BatchTable title="LM Integrated School (Class 6–10)" icon={GraduationCap} accent="blue" batches={PROGRAMS.school.batches} />
              <BatchTable title="Coaching Wing (JEE / NEET / Foundation)" icon={BookOpen} accent="red" batches={PROGRAMS.coaching.batches} />
            </div>
          </div>
        </section>
      </main>

      <FAQSection faqs={admissionFaqs} eyebrow="Admission FAQs" title="Questions, Answered" accentWord="Answered" accent="red" />

      <PublicFooter />
    </div>
  );
}

function BatchTable({
  title, icon: Icon, accent, batches,
}: {
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  accent: "blue" | "red";
  batches: { id: string; name: string; target: string; startDate: string }[];
}) {
  const head = accent === "blue" ? "bg-brand-blue-800" : "bg-brand-red-600";
  const accentText = accent === "blue" ? "text-brand-blue-600" : "text-brand-red-600";
  return (
    <Reveal>
      <div>
        <h3 className={cn("inline-flex items-center gap-2 rounded-t-2xl px-6 py-3 font-display text-base font-bold text-white", head)}>
          <Icon size={18} strokeWidth={1.75} /> {title}
        </h3>
        <div className="overflow-x-auto rounded-b-2xl rounded-tr-2xl border border-ink-200 shadow-brand-sm">
          <table className="w-full text-sm">
            <thead className="bg-ink-50">
              <tr>
                {["Batch", "Target", "Start Date", "Status"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left font-sans text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 bg-white">
              {batches.map((b) => (
                <tr key={b.id} className="transition-colors hover:bg-ink-50">
                  <td className="px-6 py-4 font-display font-semibold text-ink-900">{b.name}</td>
                  <td className="px-6 py-4 font-sans text-ink-600">{b.target}</td>
                  <td className="px-6 py-4">
                    <span className={cn("inline-flex items-center gap-1.5 font-sans font-medium", accentText)}>
                      <CalendarDays size={13} strokeWidth={1.75} /> {b.startDate}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full border border-brand-green-200 bg-brand-green-50 px-2.5 py-1 font-sans text-[0.625rem] font-bold uppercase tracking-wider text-brand-green-700">Open</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
