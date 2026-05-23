import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import TestEnquiryForm from "@/components/public/TestEnquiryForm";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  Trophy, CheckCircle2, ArrowRight, Star,
  Phone, MessageCircle, Clock, BookOpen,
  GraduationCap, CalendarDays, ShieldCheck, Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Mock Test | JEE, NEET, Foundation | LakshyaMarch Begusarai",
  description:
    "Register for LakshyaMarch's Free Mock Test for Class 9 to Dropper students. Test your preparation for JEE, NEET, and NTSE. Get an all-India rank baseline. Free registration.",
  keywords: [
    "free mock test Begusarai",
    "free JEE test Bihar",
    "NEET free test series",
    "LakshyaMarch free test",
    "scholarship test Begusarai",
    "NTSE mock test free",
  ],
  alternates: { canonical: "/free-test" },
  openGraph: {
    title: "Free Mock Test 2026 | LakshyaMarch Education",
    description: "Evaluate your JEE/NEET preparation with a completely free mock test. Available for Class 9 to Droppers.",
    url: "https://lakshyamarch.com/free-test",
    type: "website",
  },
};

const freeTestSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationEvent",
      name: "LakshyaMarch Free Mock Test 2026 (JEE/NEET)",
      description: "Free diagnostic and mock test for ambitious JEE, NEET, and Foundation students in Begusarai.",
      location: {
        "@type": "Place",
        name: INSTITUTE.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: INSTITUTE.address.line1,
          addressLocality: INSTITUTE.address.city,
          addressRegion: INSTITUTE.address.state,
          postalCode: INSTITUTE.address.pin,
          addressCountry: "IN",
        },
      },
      organizer: {
        "@type": "Organization",
        name: INSTITUTE.name,
        url: "https://lakshyamarch.com",
      },
      startDate: "2026-04-01",
      endDate: "2026-12-31",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      isAccessibleForFree: true,
    },
  ],
};

const testCards = [
  { class: "Class 9", target: "Foundation / NTSE", color: "from-blue-500 to-blue-700", bg: "bg-blue-50 border-blue-100" },
  { class: "Class 10", target: "Foundation / Boards", color: "from-emerald-500 to-emerald-700", bg: "bg-emerald-50 border-emerald-100" },
  { class: "Class 11", target: "JEE / NEET Target", color: "from-amber-500 to-orange-600", bg: "bg-amber-50 border-amber-100" },
  { class: "Class 12", target: "JEE / NEET Pre-Board", color: "from-rose-500 to-rose-700", bg: "bg-rose-50 border-rose-100" },
  { class: "Dropper", target: "JEE / NEET Advance", color: "from-indigo-500 to-indigo-700", bg: "bg-indigo-50 border-indigo-100" },
];

export default function FreeTestPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freeTestSchema) }}
      />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[hsl(220,50%,15%)] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-400/30 rounded-full mb-6 max-w-full overflow-hidden">
                <ShieldCheck size={14} className="text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-amber-200 tracking-widest uppercase truncate">
                  No Registration Fee — 100% Free
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                Benchmark Your
                <span className="block text-amber-400 mt-1">Preparation for Free</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                Take the LakshyaMarch diagnostic mock test designed by ex-IITians. Find out exactly where you stand in JEE, NEET or NTSE competition locally.
              </p>

              {/* Notice Panel */}
              <div className="mt-8 bg-blue-500/10 border border-blue-400/30 p-4 rounded-2xl flex items-start gap-4">
                <CalendarDays className="text-blue-400 shrink-0 mt-0.5" size={24} />
                <div>
                  <p className="text-white font-bold text-sm">Tentative Date & Timing</p>
                  <p className="text-blue-200 text-sm mt-1">
                    The exact exam date and shift timings will be communicated to you via <strong className="text-white">WhatsApp message / Group</strong> after successful registration.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: BookOpen, val: "Offline Mode", label: "Exam Format" },
                  { icon: Clock, val: "1 - 3 Hours", label: "Duration" },
                  { icon: CheckCircle2, val: "Instant PTM", label: "Analysis" },
                  { icon: Trophy, val: "All BIHAR", label: "Benchmarking" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl border border-white/10 px-4 py-3">
                    <s.icon size={18} className="text-amber-400 mb-2" />
                    <p className="text-sm font-extrabold text-white">{s.val}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="enquiry" className="relative z-20">
              <TestEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AVAILABLE FOR CLASSES ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tests Available For <span className="text-blue-600">All Levels</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Our academic team has prepared distinct diagnostic tests scaled to the exact difficulty parameter of individual classes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {testCards.map((card) => (
              <div key={card.class} className={`p-6 rounded-3xl border ${card.bg} text-center flex flex-col justify-center items-center h-48 transition-all hover:-translate-y-1 hover:shadow-xl`}>
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-1">{card.class}</h3>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">{card.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY TAKE THIS TEST ═══ */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-14">
            Why Should You Take This <span className="text-amber-500">MOCK TEST?</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-6">
                <Target size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3">Diagnostic Report</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Identify your exact weak chapters conceptually before the actual exams. Stop studying blindly.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6">
                <Star size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3">Expert Counselling</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Meet our IIT/NIT alumni faculty post-exam to discuss your career trajectory based on the test data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto mb-6">
                <Trophy size={24} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3">Win Scholarships</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                If you score exceptionally well, you automatically become eligible for LakshyaMarch fee waivers!
              </p>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
