import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import {
  INSTITUTE, FACULTY, RESULTS_NEET, HIGHLIGHTS, whatsappLink
} from "@/lib/siteData";
import {
  Trophy, CheckCircle2, ArrowRight, Star, Users, BookOpen,
  Heart, Clock, Phone, MessageCircle, ChevronRight,
  GraduationCap, TrendingUp, Award, Microscope
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best NEET Coaching in Begusarai | LakshyaMarch Education",
  description:
    "LakshyaMarch offers the best NEET-UG coaching in Begusarai. Expert Biology, Chemistry & Physics faculty. AIR 499 results. NEET dropper batch available. Top medical coaching in Bihar.",
  keywords: [
    "NEET coaching Begusarai",
    "best NEET coaching Bihar",
    "NEET UG preparation Begusarai",
    "medical coaching Begusarai",
    "NEET dropper batch Bihar",
    "LakshyaMarch NEET",
    "biology coaching Begusarai",
    "NEET 2026 preparation Begusarai",
  ],
  alternates: { canonical: "/neet-coaching-begusarai" },
  openGraph: {
    title: "Best NEET Coaching in Begusarai | LakshyaMarch Education",
    description:
      "AIR 499 in NEET 2025. Expert faculty. NEET 2-Year & Dropper batches. LakshyaMarch — Bihar's top NEET coaching in Begusarai.",
    url: "https://lakshyamarch.com/neet-coaching-begusarai",
    type: "website",
  },
};

const neetFacultyList = FACULTY.filter((f) =>
  ["Biology", "Chemistry", "Physics"].includes(f.subject)
).slice(0, 4);

const neetToppers = RESULTS_NEET.slice(0, 6);

const neetFaqs = [
  {
    q: "Is LakshyaMarch good for NEET preparation?",
    a: "Yes! LakshyaMarch students secured AIR 499 in NEET 2025 with a score of 619/720 (Aradhya Bharti – ABVIMS Delhi). Our NEET results include multiple selections in PMCH Patna, ANMMCH Gaya, and other top government medical colleges.",
  },
  {
    q: "What NEET batches does LakshyaMarch offer?",
    a: "We offer a 2-Year NEET program (Class 11 & 12) and a 1-Year NEET Dropper Batch. Foundation batches for Class 8, 9, 10 are also available to build a strong biology and science base early.",
  },
  {
    q: "Does LakshyaMarch have a NEET dropper batch?",
    a: "Yes, LakshyaMarch's dedicated NEET Dropper Batch starts in May 2026. It's designed with intensive revision, test series, and one-on-one doubt support for students targeting NEET 2027.",
  },
  {
    q: "What is the NEET Biology faculty qualification?",
    a: "Our Biology faculty includes Nitish Sharma Sir (AIR-82 in GATE-XL, 5 years experience) and Rahul Kumar Sir (M.Sc Biotechnology, CUSB, 4 years experience). Both are full-time dedicated NEET Biology specialists.",
  },
  {
    q: "Can students from outside Begusarai join LakshyaMarch NEET coaching?",
    a: "Yes, students from across Bihar are welcome. LakshyaMarch provides hostel facilities for outstation students with a safe, disciplined environment and AC classrooms.",
  },
  {
    q: "How is LakshyaMarch NEET coaching different from Allen or Aakash?",
    a: "At LakshyaMarch, batch sizes are smaller, which means every student gets personalized attention. Our faculty is 100% full-time — no rotating faculty from other centers. And students stay in Begusarai instead of moving to Patna or Kota.",
  },
];

const neetPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "NEET-UG Coaching Program — LakshyaMarch Begusarai",
      description:
        "Comprehensive 2-Year and Dropper NEET-UG coaching in Begusarai. Expert Biology, Physics & Chemistry faculty. AIR 499 results. Class 11, 12, and Dropper batches available.",
      provider: {
        "@type": "EducationalOrganization",
        name: INSTITUTE.name,
        url: "https://lakshyamarch.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: INSTITUTE.address.line1,
          addressLocality: INSTITUTE.address.city,
          addressRegion: INSTITUTE.address.state,
          postalCode: INSTITUTE.address.pin,
          addressCountry: "IN",
        },
      },
      courseMode: "Onsite",
      educationalLevel: "Class 11, Class 12, Dropper",
      inLanguage: ["Hindi", "English"],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        validFrom: "2026-04-01",
        validThrough: "2027-03-31",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: neetFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function NEETCoachingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neetPageSchema) }}
      />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/15 border border-emerald-400/30 rounded-full mb-6">
                <Star size={12} className="text-emerald-400" />
                <span className="text-xs font-bold text-emerald-200 tracking-widest uppercase">
                  #1 NEET Coaching in Begusarai
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                NEET-UG Coaching
                <span className="block text-emerald-400 mt-1">in Begusarai</span>
              </h1>

              <p className="mt-6 text-lg text-blue-100/75 max-w-xl leading-relaxed">
                Bihar's leading NEET institute. <strong className="text-white">AIR 499</strong> in 2025 — ABVIMS Delhi. Dedicated Biology, Chemistry & Physics experts for NEET aspirants.
              </p>

              {/* Stats Strip */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { val: "AIR 499", label: "NEET 2025" },
                  { val: "619/720", label: "Top Score" },
                  { val: "MBBS", label: "Govt Colleges" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xl font-extrabold text-emerald-400">{s.val}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#enquiry" className="h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all">
                  Free Counselling <ArrowRight size={15} />
                </a>
                <a href={whatsappLink("Hi, I want to know about NEET coaching at LakshyaMarch.")} target="_blank" rel="noopener noreferrer"
                  className="h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all">
                  <MessageCircle size={15} /> WhatsApp Now
                </a>
              </div>
            </div>

            <div id="enquiry">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEET RESULTS ═══ */}
      <section className="py-20 sm:py-24 bg-slate-900 border-t-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500/20 mb-5">
              <Trophy size={28} className="text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              NEET Results That <span className="text-emerald-400">Make Bihar Proud</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Our NEET selections include government medical colleges across Bihar, Andhra Pradesh, Mizoram and Delhi.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {neetToppers.map((r) => (
              <div key={r.id}
                className={`rounded-2xl p-4 text-center border transition-all hover:scale-105 ${r.isTopper ? "bg-emerald-500/10 border-emerald-500/30 ring-1 ring-emerald-500/40" : "bg-slate-800 border-slate-700"}`}>
                {r.isTopper && (
                  <p className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest mb-1">⭐ Topper</p>
                )}
                <p className="text-xl font-extrabold text-emerald-400 mb-1">{r.score}</p>
                <p className="text-sm font-bold text-white mb-1 truncate">{r.name}</p>
                {r.college && (
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{r.college}</p>
                )}
                <p className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">{r.year}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/results" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              View All Results <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ NEET BATCHES ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              NEET Batches <span className="text-emerald-600">Starting Now</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "2-Year NEET Program",
                sub: "Class 11 → 12",
                color: "bg-emerald-600",
                points: ["Full NEET-UG syllabus coverage", "Board + NEET integrated plan", "Daily Biology MCQ practice", "Mock tests every 2 weeks"],
                cta: "Starts: Mar 2026",
              },
              {
                icon: TrendingUp,
                title: "1-Year Dropper Batch",
                sub: "NEET Target 2027",
                color: "bg-amber-500",
                points: ["Intensive revision from Day 1", "Weak chapter identification", "Previous year NEET analysis", "Daily doubt sessions"],
                cta: "Starts: May 2026",
              },
              {
                icon: BookOpen,
                title: "Class 9-10 Foundation",
                sub: "Early NEET Base",
                color: "bg-blue-600",
                points: ["Biology from Class 9 itself", "Strong NCERT base building", "NTSE Science preparation", "Build study habits early"],
                cta: "Starts: Apr 2026",
              },
              {
                icon: Heart,
                title: "ThinkNEET Test Series",
                sub: "All NEET Aspirants",
                color: "bg-rose-600",
                points: ["Chapter-wise test series", "Full syllabus mock tests", "All-India rank prediction", "Open for all students"],
                cta: "Starts: Apr 2026",
              },
            ].map((batch) => (
              <div key={batch.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group">
                <div className={`h-12 w-12 rounded-xl ${batch.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <batch.icon size={24} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight mb-1">{batch.title}</h3>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-5">{batch.sub}</p>
                <ul className="space-y-2 flex-1 mb-5">
                  {batch.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">{batch.cta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY LM FOR NEET ═══ */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
                <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-[0.2em]">Why Choose LakshyaMarch?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                Why LakshyaMarch for <span className="text-emerald-600">NEET in Begusarai</span>?
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Users, title: "Dedicated NEET Faculty", desc: "Our Biology specialist has AIR-82 in GATE-XL. No generic science teachers — only NEET-specific experts." },
                  { icon: Microscope, title: "NCERT-First Approach", desc: "NEET 2024 & 2025 showed 95%+ questions from NCERT. LM teaches every line of NCERT Biology with depth." },
                  { icon: Clock, title: "Daily MCQ Practice", desc: "500+ Biology MCQs per week. Dedicated daily Biology revision sessions built into the timetable." },
                  { icon: TrendingUp, title: "Real NEET Results", desc: "AIR 499, 619/720 score. Multiple selections in PMCH, ANMMCH, ABVIMS — documented, verified results." },
                  { icon: Award, title: "Local Advantage", desc: "Stay in Begusarai, study in comfort. No Kota pressure, no homesickness. Parents can visit anytime." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NEET Faculty */}
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-emerald-500" /> NEET Faculty Panel
              </h3>
              <div className="space-y-4">
                {neetFacultyList.map((f) => (
                  <div key={f.name} className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-4 items-center hover:shadow-lg hover:border-emerald-200 transition-all">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-extrabold text-xl shrink-0">
                      {f.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900">{f.name}</p>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{f.subject}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{f.qual}</p>
                    </div>
                  </div>
                ))}
                <a href="/faculty" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors mt-2">
                  Meet All Faculty <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              NEET Coaching — <span className="text-emerald-600">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {neetFaqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-extrabold text-slate-900 gap-4 hover:bg-emerald-50 transition-colors">
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
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-800 text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Your MBBS Dream Starts Here
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Join Begusarai's most trusted NEET institute. Free counselling available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#enquiry" className="h-14 px-10 inline-flex items-center gap-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold text-sm shadow-xl uppercase tracking-widest transition-all">
              Apply Now <ArrowRight size={18} />
            </a>
            <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="h-14 px-10 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all">
              <Phone size={18} /> Call: {INSTITUTE.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
