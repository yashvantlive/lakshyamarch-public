import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import {
  INSTITUTE, FACULTY, RESULTS_JEE, PROGRAMS, HIGHLIGHTS, whatsappLink
} from "@/lib/siteData";
import {
  Trophy, CheckCircle2, ArrowRight, Star, Users, BookOpen,
  Target, Zap, Clock, Phone, MessageCircle, ChevronRight,
  GraduationCap, TrendingUp, Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best IIT-JEE Coaching in Begusarai | LakshyaMarch Education",
  description:
    "LakshyaMarch offers the best IIT-JEE coaching in Begusarai. IITian & NITian faculty, 99.35 percentile results, 2-Year & Dropper batches. Join Bihar's top JEE institute today.",
  keywords: [
    "IIT JEE coaching Begusarai",
    "best JEE coaching Bihar",
    "JEE Main coaching Begusarai",
    "JEE Advanced coaching Bihar",
    "IIT coaching near me Begusarai",
    "LakshyaMarch JEE",
    "dropper batch JEE Begusarai",
    "NIT coaching Begusarai",
  ],
  alternates: { canonical: "/iit-jee-coaching-begusarai" },
  openGraph: {
    title: "Best IIT-JEE Coaching in Begusarai | LakshyaMarch Education",
    description:
      "99.35 Percentile in JEE Main. IITian faculty. 2-Year & Dropper batches. LakshyaMarch — Bihar's top IIT-JEE coaching in Begusarai.",
    url: "https://lakshyamarch.com/iit-jee-coaching-begusarai",
    type: "website",
  },
};

const jeeFacultyList = FACULTY.filter((f) =>
  ["Mathematics", "Physics", "Chemistry"].includes(f.subject)
).slice(0, 4);

const jeeToppers = RESULTS_JEE.filter((r) => r.percentile && r.percentile >= 98).slice(0, 6);

const jeeFaqs = [
  {
    q: "Is LakshyaMarch good for IIT-JEE preparation?",
    a: "Absolutely. LakshyaMarch students have achieved 99.35 percentile in JEE Main 2025 and secured seats in IITs, NITs and top engineering colleges. Our faculty consists entirely of IIT/NIT alumni with years of JEE coaching experience.",
  },
  {
    q: "What batches are available for JEE in LakshyaMarch?",
    a: "We offer 2-Year JEE program (Class 11 & 12), 1-Year Dropper Batch, and Foundation Batches for Class 7 to 10 to build an early base for JEE/NEET.",
  },
  {
    q: "What is the fee for IIT-JEE coaching in LakshyaMarch?",
    a: "Fee details are shared during the counselling session as they depend on the batch and class. Call us at +91-6206323869 or WhatsApp for the current fee structure.",
  },
  {
    q: "Does LakshyaMarch have a hostel?",
    a: "Yes, LakshyaMarch provides a hostel facility for outstation students. AC classrooms and a disciplined study environment are also available.",
  },
  {
    q: "Is there a JEE dropper batch in Begusarai?",
    a: "Yes, LakshyaMarch offers a dedicated 1-Year JEE Dropper Batch starting May 2026, designed specifically for students who want to re-attempt JEE Main & Advanced.",
  },
  {
    q: "How is LakshyaMarch different from Allen or PW for JEE?",
    a: "LakshyaMarch gives personalized attention that large national chains cannot. Our batch sizes are smaller, doubt sessions are daily, and students get direct access to IIT-qualified faculty — all in their home city of Begusarai.",
  },
];

// JSON-LD Schema (Course + FAQ + LocalBusiness)
const jeePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "IIT-JEE Coaching Program — LakshyaMarch Begusarai",
      description:
        "Comprehensive 2-Year and Dropper IIT-JEE (Main + Advanced) coaching in Begusarai by IIT/NIT alumni faculty. Class 11, 12, and Dropper batches available.",
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
      mainEntity: jeeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function JEECoachingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jeePageSchema) }}
      />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[hsl(224,71%,18%)] to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-400/30 rounded-full mb-6">
                <Star size={12} className="text-amber-400" />
                <span className="text-xs font-bold text-amber-200 tracking-widest uppercase">
                  #1 IIT-JEE Coaching in Begusarai
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                IIT-JEE Coaching
                <span className="block text-amber-400 mt-1">in Begusarai</span>
              </h1>

              <p className="mt-6 text-lg text-blue-100/75 max-w-xl leading-relaxed">
                Bihar's most result-oriented JEE institute. Study under <strong className="text-white">IIT Kharagpur alumni</strong> with 99.35 percentile results — without leaving Begusarai.
              </p>

              {/* Stats Strip */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { val: "99.35%", label: "Top Percentile" },
                  { val: "IIT/NIT", label: "Faculty Alumni" },
                  { val: "2019", label: "Est. Batch" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-2xl font-extrabold text-amber-400">{s.val}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#enquiry" className="h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all">
                  Free Counselling <ArrowRight size={15} />
                </a>
                <a href={whatsappLink("Hi, I want to know about IIT-JEE coaching at LakshyaMarch.")} target="_blank" rel="noopener noreferrer"
                  className="h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600/90 text-white font-bold text-sm hover:bg-emerald-600 transition-all border border-emerald-500/30">
                  <MessageCircle size={15} /> WhatsApp Now
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div id="enquiry">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ JEE RESULTS ═══ */}
      <section className="py-20 sm:py-24 bg-slate-900 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-amber-500/20 mb-5">
              <Trophy size={28} className="text-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              JEE Results That <span className="text-amber-400">Speak for Themselves</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Every year, LakshyaMarch students crack JEE Main & Advanced and secure seats in IITs and NITs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {jeeToppers.map((r) => (
              <div key={r.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center hover:border-amber-500/40 transition-all hover:bg-slate-750">
                <p className="text-2xl font-extrabold text-emerald-400 mb-1">{r.stat}</p>
                <p className="text-sm font-bold text-white mb-1 truncate">{r.name}</p>
                {r.college && (
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{r.college}</p>
                )}
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{r.examType}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/results" className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors">
              View All Results <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMS / BATCHES ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              JEE Batches <span className="text-blue-600">Available Now</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Choose the batch that matches your timeline and goal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "2-Year JEE Program",
                sub: "Class 11 → 12",
                color: "bg-blue-600",
                points: ["Full JEE Main + Advanced syllabus", "Board + JEE integrated study", "Regular test series (DPPs)", "Daily doubt-clearing sessions"],
                cta: "Starts: Mar 2026",
              },
              {
                icon: Target,
                title: "1-Year Dropper Batch",
                sub: "JEE Target 2027",
                color: "bg-amber-500",
                points: ["Complete syllabus revision", "Crash + Mastery approach", "Focussed on improvement areas", "Previous year paper analysis"],
                cta: "Starts: May 2026",
              },
              {
                icon: BookOpen,
                title: "Class 9-10 Foundation",
                sub: "Early JEE Base",
                color: "bg-emerald-600",
                points: ["Concepts built from scratch", "NTSE & Olympiad preparation", "Board excellence alongside", "5-year advantage over peers"],
                cta: "Starts: Apr 2026",
              },
              {
                icon: Zap,
                title: "Class 7-8 Foundation",
                sub: "The Headstart",
                color: "bg-purple-600",
                points: ["Mental ability (MAT) training", "Math & Science deep dive", "Logical reasoning skills", "Best start for IIT journey"],
                cta: "Starts: Apr 2026",
              },
            ].map((batch) => (
              <div key={batch.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className={`h-12 w-12 rounded-xl ${batch.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <batch.icon size={24} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight mb-1">{batch.title}</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-5">{batch.sub}</p>
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

      {/* ═══ WHY LM FOR JEE ═══ */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.2em]">Why Choose LakshyaMarch?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                Why LakshyaMarch is <span className="text-blue-600">Better than Allen</span> for Begusarai Students
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Users, title: "Small Batch Sizes", desc: "More personal attention. No getting lost in a crowd of 200+ students like in large national chains." },
                  { icon: GraduationCap, title: "IIT/NIT Alumni Faculty", desc: "Every teacher at LM is from a top institute — no local-level tutors." },
                  { icon: Clock, title: "Daily Doubt Sessions", desc: "Doubts cleared same day. Students never carry confusion to the next topic." },
                  { icon: TrendingUp, title: "Proven Results", desc: "99.35 percentile in JEE Main 2025. IIT Bhilai, NIT Trichy, IIT Roorkee — real results." },
                  { icon: Award, title: "Stay in Begusarai", desc: "No need to leave home and go to Kota or Patna. Top-quality JEE coaching in your city." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Highlight */}
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-amber-500" /> JEE Faculty Panel
              </h3>
              <div className="space-y-4">
                {jeeFacultyList.map((f) => (
                  <div key={f.name} className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-4 items-center hover:shadow-lg hover:border-blue-200 transition-all">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-xl shrink-0">
                      {f.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900">{f.name}</p>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{f.subject}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{f.qual}</p>
                    </div>
                  </div>
                ))}
                <a href="/faculty" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-2">
                  Meet All Faculty <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HIGHLIGHTS STRIP ═══ */}
      <div className="bg-blue-600 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...HIGHLIGHTS, ...HIGHLIGHTS].map((h, i) => (
            <span key={i} className="mx-8 text-sm font-bold text-white/90 uppercase tracking-widest flex items-center gap-2">
              <Star size={10} className="text-amber-300" /> {h}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {jeeFaqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-extrabold text-slate-900 gap-4 hover:bg-blue-50 transition-colors">
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
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Start Your IIT Journey Today
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Book a free counselling session with our JEE experts in Begusarai.
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
