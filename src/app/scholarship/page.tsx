import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  Trophy, CheckCircle2, ArrowRight, Star, ChevronRight,
  Phone, MessageCircle, Gift, Percent, BookOpen,
  Clock, Award, GraduationCap, Zap, Users
} from "lucide-react";
import { BlackCard, GlassCard, AnimatedSection, GlowButton, SectionBadge, UnifiedContainer } from "@/components/public/ui";

export const metadata: Metadata = {
  title: "Scholarship Exam 2026 | Free Coaching Scholarship | LakshyaMarch Begusarai",
  description:
    "LakshyaMarch Scholarship Exam 2026 — Win up to 100% fee waiver. Free registration. Begusarai's biggest scholarship test for JEE, NEET & Foundation students. Class 6 to 12 eligible.",
  keywords: [
    "LakshyaMarch scholarship 2026",
    "scholarship exam Begusarai",
    "free coaching scholarship Bihar",
    "JEE NEET scholarship test Begusarai",
    "scholarship for coaching Bihar",
    "LM scholarship test",
    "free JEE NEET scholarship exam",
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
  {
    q: "What is the LakshyaMarch Scholarship Exam?",
    a: "The LakshyaMarch Scholarship Exam is a free competitive test conducted for students of Class 6 to 12. Based on performance, students can win scholarship benefits ranging from partial to 100% fee waiver on coaching / school admission at LakshyaMarch.",
  },
  {
    q: "Who can apply for the LakshyaMarch scholarship?",
    a: "Any student currently studying in Class 6 to 12 is eligible to apply. There is no registration fee. Students from any school or coaching can apply.",
  },
  {
    q: "What subjects are tested in the scholarship exam?",
    a: "For Class 6-8: Maths, Science, and Mental Ability. For Class 9-10: Maths, Physics, Chemistry, Biology. For Class 11-12 (JEE): Physics, Chemistry, Maths (PCM). For Class 11-12 (NEET): Physics, Chemistry, Biology (PCB).",
  },
  {
    q: "What scholarship benefits can I win?",
    a: "Scholarship ranges from 10% to 100% fee waiver depending on rank. Top rankers get 100% fee waiver. Full details are shared after the exam based on your score.",
  },
  {
    q: "Is registration free?",
    a: "Yes, registration for the LakshyaMarch Scholarship Exam is completely free. No hidden charges. Simply WhatsApp or call us to register.",
  },
  {
    q: "When is the next scholarship exam?",
    a: "Scholarship exams are conducted multiple times a year. Contact us on WhatsApp or call +91-6206323869 to know the next exam date and register.",
  },
];

const scholarshipSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: scholarshipFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "Event",
      name: "LakshyaMarch Scholarship Exam 2026",
      description: "Free scholarship examination for Class 6-12 students at LakshyaMarch Education Begusarai. Win up to 100% fee waiver on coaching admission.",
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
      endDate: "2027-03-31",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      isAccessibleForFree: true,
    },
  ],
};

const slabs = [
  { rank: "Rank 1", color: "from-amber-400 to-yellow-500", textColor: "text-amber-900", bg: "bg-amber-50 border-amber-200", label: "🏆 Champion", scholarship: "100% Fee Waiver", icon: Trophy },
  { rank: "Rank 2", color: "from-slate-300 to-slate-400", textColor: "text-slate-700", bg: "bg-slate-50 border-slate-200", label: "🥈 Excellence", scholarship: "75% Fee Waiver", icon: Award },
  { rank: "Rank 3", color: "from-orange-400 to-amber-600", textColor: "text-orange-900", bg: "bg-orange-50 border-orange-200", label: "🥉 Merit", scholarship: "50% Fee Waiver", icon: Star },
  { rank: "Rank 4-10", color: "from-blue-500 to-indigo-500", textColor: "text-blue-900", bg: "bg-blue-50 border-blue-200", label: "⭐ Achiever", scholarship: "25% Fee Waiver", icon: Zap },
  { rank: "Rank 11-25", color: "from-emerald-500 to-teal-500", textColor: "text-emerald-900", bg: "bg-emerald-50 border-emerald-200", label: "✅ Performer", scholarship: "10% Fee Waiver", icon: CheckCircle2 },
];

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipSchema) }}
      />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
        <BlackCard glowColor="amber" className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-64 bg-amber-500/8 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionBadge color="amber" className="bg-amber-500/15 border-amber-400/30 text-amber-200 mb-6">
                <Gift size={12} className="text-amber-400 mr-2" />
                Registration Free — Scholarship Up to 100%
              </SectionBadge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                LakshyaMarch
                <span className="block text-amber-400 mt-1">Scholarship Exam</span>
                <span className="block text-slate-300 text-2xl sm:text-3xl font-bold mt-2">2026 — Win Free Coaching</span>
              </h1>

              <p className="mt-6 text-lg text-blue-100/75 max-w-xl leading-relaxed">
                Talented students deserving quality education shouldn't be stopped by fees. Register free & win up to <strong className="text-amber-400">100% fee waiver</strong> on JEE, NEET or Foundation coaching.
              </p>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: Users, val: "Class 6 to 12", label: "Eligible" },
                  { icon: Percent, val: "Up to 100%", label: "Scholarship" },
                  { icon: Gift, val: "FREE", label: "Registration" },
                  { icon: Clock, val: "Multiple Dates", label: "Exam Timing" },
                ].map((s) => (
                  <GlassCard key={s.label} className="flex items-center gap-3 bg-white/5 border-white/10 px-4 py-3 hover:bg-white/10">
                    <s.icon size={18} className="text-amber-400 shrink-0" />
                    <div>
                      <p className="text-sm font-black text-white">{s.val}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">{s.label}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <GlowButton variant="amber" asChild>
                  <a href={whatsappLink("Hi, I want to register for LakshyaMarch Scholarship Exam 2026.")} target="_blank" rel="noopener noreferrer" className="px-7 py-4">
                    Register Free <ArrowRight size={15} className="ml-2" />
                  </a>
                </GlowButton>
                <GlowButton variant="blue" asChild>
                  <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="px-7 py-4 bg-white/10 hover:bg-white/20 border-white/20 text-white">
                    <Phone size={15} className="mr-2" /> Call to Register
                  </a>
                </GlowButton>
              </div>
            </div>

            <GlassCard className="p-6 bg-slate-900/60 border-slate-800 shadow-2xl" id="enquiry">
              <EnquiryForm />
            </GlassCard>
          </div>
        </BlackCard>
      </div>

      {/* ═══ SCHOLARSHIP SLABS ═══ */}
      <AnimatedSection className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Scholarship <span className="text-amber-500">Prize Slabs</span>
            </h2>
            <p className="mt-4 text-slate-500">Based on your rank in the scholarship exam:</p>
          </div>

          <div className="space-y-4">
            {slabs.map((s) => (
              <GlassCard key={s.rank} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 ${s.bg} hover:border-amber-300 hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <s.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg">{s.rank}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="text-2xl font-black text-slate-900">{s.scholarship}</p>
                  <p className="text-xs text-slate-500">on total coaching fee</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            * Scholarship is applicable on LakshyaMarch coaching / school admission fee. Conditions apply. Final scholarship amount confirmed after counselling.
          </p>
        </div>
      </AnimatedSection>

      {/* ═══ EXAM SYLLABUS ═══ */}
      <AnimatedSection className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Exam <span className="text-blue-600">Syllabus & Pattern</span>
            </h2>
          </div>

          <UnifiedContainer className="p-2 sm:p-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Class 6–8",
                  color: "bg-blue-600",
                  subjects: ["Mathematics (NCERT)", "Science (Physics + Biology)", "Mental Ability / Reasoning"],
                  duration: "60 minutes",
                  questions: "60 MCQs",
                },
                {
                  title: "Class 9–10",
                  color: "bg-emerald-600",
                  subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
                  duration: "90 minutes",
                  questions: "90 MCQs",
                },
                {
                  title: "Class 11–12 (JEE)",
                  color: "bg-amber-500",
                  subjects: ["Physics (PCM level)", "Chemistry", "Mathematics"],
                  duration: "90 minutes",
                  questions: "90 MCQs",
                },
                {
                  title: "Class 11–12 (NEET)",
                  color: "bg-rose-600",
                  subjects: ["Physics (PCB level)", "Chemistry", "Biology"],
                  duration: "90 minutes",
                  questions: "90 MCQs",
                },
                {
                  title: "Dropper (JEE)",
                  color: "bg-purple-600",
                  subjects: ["Physics (JEE Adv level)", "Chemistry", "Mathematics"],
                  duration: "90 minutes",
                  questions: "90 MCQs",
                },
                {
                  title: "Dropper (NEET)",
                  color: "bg-teal-600",
                  subjects: ["Biology (full NEET)", "Physics", "Chemistry"],
                  duration: "90 minutes",
                  questions: "90 MCQs",
                },
              ].map((cat) => (
                <GlassCard key={cat.title} className="p-6 hover:shadow-lg hover:border-blue-300">
                  <div className={`${cat.color} text-white text-sm font-black px-4 py-2 rounded-xl inline-block mb-4 uppercase tracking-wider`}>
                    {cat.title}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {cat.subjects.map((sub) => (
                      <li key={sub} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> {sub}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest pt-4 border-t border-slate-200/50">
                    <span className="flex items-center gap-1"><Clock size={11} /> {cat.duration}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><BookOpen size={11} /> {cat.questions}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </UnifiedContainer>
        </div>
      </AnimatedSection>

      {/* ═══ HOW TO REGISTER ═══ */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
            How to <span className="text-amber-500">Register for Free?</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "01", icon: MessageCircle, title: "WhatsApp / Call", desc: `Message "Scholarship 2026" to +91-${INSTITUTE.primaryPhone}` },
              { step: "02", icon: GraduationCap, title: "Share Details", desc: "Share student name, class, and school name." },
              { step: "03", icon: Trophy, title: "Get Exam Date", desc: "We'll confirm exam date and venue. Arrive and write the test." },
            ].map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="text-[70px] font-extrabold text-slate-100 absolute -top-4 left-1/2 -translate-x-1/2 leading-none select-none">{s.step}</div>
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <s.icon size={26} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Scholarship <span className="text-amber-500">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {scholarshipFaqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-extrabold text-slate-900 gap-4 hover:bg-amber-50 transition-colors">
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
            Register Now — It's <span className="text-amber-400">100% Free!</span>
          </h2>
          <p className="text-amber-100/80 mb-8 text-lg">
            Limited seats for the scholarship exam. Don't miss your chance to win up to 100% fee waiver.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlowButton variant="amber" asChild>
              <a href={whatsappLink("Hi, I want to register for LakshyaMarch Scholarship Exam 2026.")} target="_blank" rel="noopener noreferrer" className="px-10 py-4 uppercase tracking-widest">
                <MessageCircle size={18} className="mr-2" /> Register on WhatsApp
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
