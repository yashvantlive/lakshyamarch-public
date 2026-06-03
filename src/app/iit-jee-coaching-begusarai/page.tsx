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
import { BlackCard, GlassCard, AnimatedSection, GlowButton, SectionBadge } from "@/components/public/ui";

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
      <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
        <BlackCard glowColor="blue" className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              {/* Badge */}
              <SectionBadge color="amber" className="bg-amber-500/15 border-amber-400/30 text-amber-200 mb-6">
                <Star size={12} className="text-amber-400 mr-2" />
                #1 IIT-JEE Coaching in Begusarai
              </SectionBadge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
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
                  <div key={s.label} className="text-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-2xl font-black text-amber-400">{s.val}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <GlowButton variant="amber" asChild>
                  <a href="#enquiry" className="px-7 py-4">
                    Free Counselling <ArrowRight size={15} className="ml-2" />
                  </a>
                </GlowButton>
                <GlowButton variant="blue" asChild>
                  <a href={whatsappLink("Hi, I want to know about IIT-JEE coaching at LakshyaMarch.")} target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-emerald-600/90 hover:bg-emerald-600 border-emerald-500/30">
                    <MessageCircle size={15} className="mr-2" /> WhatsApp Now
                  </a>
                </GlowButton>
              </div>
            </div>

            {/* Enquiry Form */}
            <GlassCard className="p-6 bg-slate-900/60 border-slate-800 shadow-2xl" id="enquiry">
              <EnquiryForm />
            </GlassCard>
          </div>
        </BlackCard>
      </div>

      {/* ═══ JEE RESULTS ═══ */}
      <AnimatedSection className="py-20 sm:py-24 bg-slate-900 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-amber-500/20 mb-5">
              <Trophy size={28} className="text-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              JEE Results That <span className="text-amber-400">Speak for Themselves</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Every year, LakshyaMarch students crack JEE Main & Advanced and secure seats in IITs and NITs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {jeeToppers.map((r) => (
              <GlassCard key={r.id} className="bg-slate-800/80 border-slate-700/80 p-4 text-center hover:border-amber-500/40 hover:bg-slate-800/90">
                <p className="text-2xl font-black text-emerald-400 mb-1">{r.stat}</p>
                <p className="text-sm font-bold text-white mb-1 truncate">{r.name}</p>
                {r.college && (
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{r.college}</p>
                )}
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{r.examType}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/results" className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors">
              View All Results <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ PROGRAMS / BATCHES ═══ */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
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
              <GlassCard key={batch.title} className="p-6 flex flex-col hover:border-blue-300">
                <div className={`h-12 w-12 rounded-xl ${batch.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <batch.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-tight mb-1">{batch.title}</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-5">{batch.sub}</p>
                <ul className="space-y-2 flex-1 mb-5">
                  {batch.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{batch.cta}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ WHY LM FOR JEE ═══ */}
      <AnimatedSection className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionBadge color="blue" className="mb-6">Why Choose LakshyaMarch?</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                Why LakshyaMarch is <span className="text-blue-600">Better than Allen</span> for Begusarai Students
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Users, title: "Small Batch Sizes", desc: "More personal attention. No getting lost in a crowd of 200+ students like in large national chains." },
                  { icon: GraduationCap, title: "IIT/NIT Alumni Faculty", desc: "Every teacher at LM is from a top institute — no local-level tutors." },
                  { icon: Clock, title: "Daily Doubt Sessions", desc: "Doubts cleared same day. Students never carry confusion to the next topic." },
                  { icon: TrendingUp, title: "Proven Results", desc: "99.35 percentile in JEE Main 2025. IIT Bhilai, NIT Trichy, IIT Roorkee — real results." },
                  { icon: Award, title: "Stay in Begusarai", desc: "No need to leave home and go to Kota or Patna. Top-quality JEE coaching in your city." },
                ].map((item) => (
                  <GlassCard key={item.title} className="p-5 flex gap-4 hover:-translate-y-0.5 hover:border-blue-300">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Faculty Highlight */}
            <div className="self-start">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-amber-500" /> JEE Faculty Panel
              </h3>
              <div className="space-y-4">
                {jeeFacultyList.map((f) => (
                  <GlassCard key={f.name} className="p-5 flex gap-4 items-center hover:border-blue-300">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xl shrink-0 shadow-inner">
                      {f.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{f.name}</p>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{f.subject}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{f.qual}</p>
                    </div>
                  </GlassCard>
                ))}
                <a href="/faculty" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-2 uppercase tracking-widest">
                  Meet All Faculty <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

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
      <AnimatedSection className="py-16 bg-slate-900 text-center px-5 border-t-4 border-amber-500">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Start Your IIT Journey Today
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Book a free counselling session with our JEE experts in Begusarai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlowButton variant="amber" asChild>
              <a href="#enquiry" className="px-10 py-4 uppercase tracking-widest">
                Apply Now <ArrowRight size={18} className="ml-2" />
              </a>
            </GlowButton>
            <GlowButton variant="blue" asChild>
              <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="px-10 py-4 uppercase tracking-widest bg-transparent border-2 border-blue-500 hover:bg-blue-600/20">
                <Phone size={18} className="mr-2" /> Call: {INSTITUTE.primaryPhone}
              </a>
            </GlowButton>
          </div>
        </div>
      </AnimatedSection>

      <PublicFooter />
    </div>
  );
}
