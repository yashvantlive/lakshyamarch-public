import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import AdmissionEnquiryForm from "@/components/public/AdmissionEnquiryForm";
import { INSTITUTE, PROGRAMS, whatsappLink } from "@/lib/siteData";
import {
  ArrowRight, CheckCircle2, ChevronRight, Phone, MessageCircle,
  FileText, Users, BookOpen, Star, Clock, GraduationCap,
  ClipboardList, BadgeCheck, CalendarDays
} from "lucide-react";
import { BlackCard, GlassCard, AnimatedSection, GlowButton, SectionBadge, UnifiedContainer } from "@/components/public/ui";

export const metadata: Metadata = {
  title: "Admission 2026-27 | Apply Now | LakshyaMarch Begusarai",
  description:
    "Apply for admission in LakshyaMarch Education Begusarai 2026-27. School admissions (Class 6-10) and coaching admissions (JEE/NEET Class 7-12 + Dropper). Simple 3-step process.",
  keywords: [
    "LakshyaMarch admission 2026",
    "admission in Begusarai coaching",
    "IIT JEE admission Begusarai",
    "NEET admission Bihar",
    "LM Integrated School admission",
    "coaching admission process Begusarai",
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
  {
    q: "How to take admission in LakshyaMarch?",
    a: "Fill the enquiry form on this page or WhatsApp us at +91-6206323869. Our counsellor will call you, explain the process, and guide you through document submission and batch selection.",
  },
  {
    q: "What documents are required for admission?",
    a: "You need: (1) Previous class marksheet / report card, (2) Aadhar Card (student + parent), (3) 2 passport-size photos. Additional documents may be requested based on the batch.",
  },
  {
    q: "Is there an entrance test for admission?",
    a: "There is no mandatory entrance test for most batches. However, a diagnostic test may be conducted to assess the student's current level and suggest the most suitable batch.",
  },
  {
    q: "When does the 2026-27 session start?",
    a: "Integrated School (Class 6-10) and Foundation Coaching batches start in April 2026. JEE/NEET Class 11-12 batches start between March-May 2026. Dropper batches begin in May 2026.",
  },
  {
    q: "What is the last date to apply?",
    a: "Seats are limited and filled on a first-come-first-served basis. Apply early to secure your seat. Contact us to know current availability for specific batches.",
  },
  {
    q: "Is there an online admission process?",
    a: "Yes, you can fill the enquiry form online on this page or on our homepage. The counsellor will guide you through the rest. Physical visit for document verification is required once.",
  },
];

const admissionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: admissionFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Event",
      "name": "LakshyaMarch Admission 2026-27",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "startDate": "2026-04-01",
      "endDate": "2026-06-30",
      "location": {
        "@type": "Place",
        "name": INSTITUTE.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": INSTITUTE.address.line1,
          "addressLocality": INSTITUTE.address.city,
          "addressRegion": INSTITUTE.address.state,
          "postalCode": INSTITUTE.address.pin,
          "addressCountry": "IN",
        },
      },
      "offers": {
        "@type": "Offer",
        "url": "https://lakshyamarch.com/admission",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01"
      },
      "organizer": { "@type": "Organization", "name": INSTITUTE.name, "url": "https://lakshyamarch.com" },
      "description": "Annual admission process for IIT-JEE, NEET coaching and LM Integrated School (Class 6-10) at LakshyaMarch Begusarai.",
    },
  ],
};

const allBatches = [
  ...PROGRAMS.school.batches.map((b) => ({ ...b, wing: "school" as const })),
  ...PROGRAMS.coaching.batches.map((b) => ({ ...b, wing: "coaching" as const })),
];

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionSchema) }}
      />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
        <BlackCard glowColor="blue" className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div className="absolute top-1/3 right-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionBadge color="blue" className="bg-indigo-500/15 border-indigo-400/30 text-indigo-200 mb-6">
                <Star size={12} className="text-indigo-300 mr-2" />
                Admissions Open — 2026-27 Session
              </SectionBadge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Apply for
                <span className="block text-amber-400 mt-1">LakshyaMarch</span>
                <span className="block text-white text-3xl sm:text-4xl mt-2 font-bold">Admission 2026-27</span>
              </h1>

              <p className="mt-6 text-lg text-blue-100/75 max-w-xl leading-relaxed">
                Secure your child's future at Begusarai's most result-oriented coaching and integrated school. Limited seats — apply today.
              </p>

              {/* Steps Preview */}
              <div className="mt-8 space-y-3">
                {[
                  { step: "1", text: "Fill the enquiry form or call us" },
                  { step: "2", text: "Get counselling & choose your batch" },
                  { step: "3", text: "Submit documents & confirm seat" },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-amber-500 text-slate-900 font-black text-sm flex items-center justify-center shrink-0">
                      {s.step}
                    </div>
                    <p className="text-white/80 font-bold text-sm uppercase tracking-wider">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <GlowButton variant="amber" asChild>
                  <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="px-7 py-4">
                    <Phone size={15} className="mr-2" /> Call to Apply
                  </a>
                </GlowButton>
                <GlowButton variant="emerald" asChild>
                  <a href={whatsappLink("Hi, I want to apply for admission at LakshyaMarch 2026-27.")} target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-emerald-600/90 hover:bg-emerald-600 border-emerald-500/30 text-white">
                    <MessageCircle size={15} className="mr-2" /> WhatsApp Apply
                  </a>
                </GlowButton>
              </div>
            </div>

            <GlassCard className="p-6 bg-slate-900/60 border-slate-800 shadow-2xl" id="enquiry">
              <AdmissionEnquiryForm />
            </GlassCard>
          </div>
        </BlackCard>
      </div>

      {/* ═══ PROCESS STEPS ═══ */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Simple <span className="text-indigo-600">Admission Process</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              We've made admission as easy as possible. 3 steps — done in 48 hours.
            </p>
          </div>

          <UnifiedContainer className="p-4 sm:p-8 grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                step: "01",
                title: "Enquire",
                desc: "Fill the form on this page, call us, or WhatsApp. Our counsellor will respond within 2 hours.",
                color: "bg-amber-500",
              },
              {
                icon: Users,
                step: "02",
                title: "Counselling",
                desc: "Free 1-on-1 counselling session. We assess the student's goal, explain batch options, and suggest the best fit.",
                color: "bg-blue-600",
              },
              {
                icon: BadgeCheck,
                step: "03",
                title: "Confirm Seat",
                desc: "Submit documents, pay the registration amount, and your seat is confirmed. Session begins as per batch date.",
                color: "bg-emerald-600",
              },
            ].map((s) => (
              <GlassCard key={s.step} className="relative text-center pt-10 hover:-translate-y-1">
                <div className="text-[80px] font-black text-slate-100/50 absolute -top-8 left-1/2 -translate-x-1/2 leading-none select-none">{s.step}</div>
                <div className="relative z-10">
                  <div className={`h-16 w-16 rounded-2xl ${s.color} text-white flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <s.icon size={30} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </GlassCard>
            ))}
          </UnifiedContainer>
        </div>
      </AnimatedSection>

      {/* ═══ DOCUMENTS REQUIRED ═══ */}
      <AnimatedSection className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <GlassCard className="p-8 sm:p-10">
            <h2 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-3">
              <FileText size={24} className="text-indigo-500" /> Documents Required for Admission
            </h2>
            <p className="text-slate-500 text-sm mb-8">Keep these ready before visiting the campus or applying online.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Previous class marksheet / report card",
                "Student Aadhar Card",
                "Parent / Guardian Aadhar Card",
                "2 passport-size photographs (recent)",
                "School Transfer Certificate (if applicable)",
                "Mobile number for OTP-based registration",
              ].map((doc) => (
                <div key={doc} className="flex gap-3 items-start p-3 bg-white/50 rounded-xl border border-slate-200/50 hover:bg-white transition-colors">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-bold text-slate-700">{doc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* ═══ BATCH LIST ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              All Batches — <span className="text-indigo-600">2026-27 Session</span>
            </h2>
          </div>

          {/* School Batches */}
          <div className="mb-12">
            <h3 className="text-lg font-extrabold text-white bg-blue-600 px-6 py-3 rounded-t-xl inline-flex items-center gap-2">
              <GraduationCap size={18} /> LM Integrated School (Class 6-10)
            </h3>
            <div className="overflow-x-auto border border-blue-200 rounded-b-2xl rounded-tr-2xl shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-blue-50 text-blue-800">
                  <tr>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest">Batch</th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest">Target</th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest">Start Date</th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {PROGRAMS.school.batches.map((b) => (
                    <tr key={b.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{b.name}</td>
                      <td className="px-6 py-4 text-slate-600">{b.target}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
                          <CalendarDays size={13} className="text-blue-500" /> {b.startDate}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-extrabold rounded-full border border-emerald-200 uppercase tracking-wider">
                          Open
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Coaching Batches */}
          <div>
            <h3 className="text-lg font-extrabold text-white bg-slate-900 px-6 py-3 rounded-t-xl inline-flex items-center gap-2">
              <BookOpen size={18} /> Coaching Wing (JEE / NEET / Foundation)
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-b-2xl rounded-tr-2xl shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest text-slate-600">Batch</th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest text-slate-600">Target</th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest text-slate-600">Start Date</th>
                    <th className="px-6 py-3 text-left font-extrabold text-xs uppercase tracking-widest text-slate-600">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {PROGRAMS.coaching.batches.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{b.name}</td>
                      <td className="px-6 py-4 text-slate-600">{b.target}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
                          <CalendarDays size={13} className="text-amber-500" /> {b.startDate}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-extrabold rounded-full border border-emerald-200 uppercase tracking-wider">
                          Open
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Admission <span className="text-indigo-600">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {admissionFaqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-extrabold text-slate-900 gap-4 hover:bg-indigo-50 transition-colors">
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronRight size={18} className="text-slate-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <AnimatedSection className="py-16 bg-slate-900 text-center px-5 border-t-4 border-indigo-500">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Don't Wait — <span className="text-amber-400">Seats are Limited</span>
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Contact us today for free counselling and batch selection guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlowButton variant="emerald" asChild>
              <a href={whatsappLink("Hi, I want to apply for LakshyaMarch 2026-27 admission.")} target="_blank" rel="noopener noreferrer" className="px-10 py-4 uppercase tracking-widest">
                <MessageCircle size={18} className="mr-2" /> WhatsApp Apply
              </a>
            </GlowButton>
            <GlowButton variant="blue" asChild>
              <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="px-10 py-4 bg-transparent border-2 border-slate-200 text-white hover:bg-slate-800 uppercase tracking-widest">
                <Phone size={18} className="mr-2" /> {INSTITUTE.primaryPhone}
              </a>
            </GlowButton>
          </div>
        </div>
      </AnimatedSection>

      <PublicFooter />
    </div>
  );
}
