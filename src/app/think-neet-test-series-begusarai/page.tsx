import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import EnquiryForm from "@/components/public/EnquiryForm";
import { INSTITUTE, whatsappLink } from "@/lib/siteData";
import {
  Trophy, CheckCircle2, ArrowRight, Star,
  Target, Zap, BarChart3, BookOpen,
  ClipboardList, AlertCircle, Sparkles, GraduationCap
} from "lucide-react";
import { BlackCard, GlassCard, KpiCard, AnimatedSection, GlowButton, SectionBadge } from "@/components/public/ui";

export const metadata: Metadata = {
  title: "ThinkNEET Test Series Begusarai | Best NEET Mock Tests | LakshyaMarch",
  description:
    "Join ThinkNEET Test Series at LakshyaMarch Begusarai. NCERT-based patterns, OMR practice, and expert analysis for NEET 2027. Boost your rank with the most structured test series.",
  keywords: [
    "ThinkNEET test series Begusarai",
    "best NEET test series Bihar",
    "NCERT based NEET mock test",
    "LakshyaMarch NEET test series",
    "NEET 2027 preparation Begusarai",
    "medical entrance mock test",
  ],
  alternates: { canonical: "/think-neet-test-series-begusarai" },
};

const features = [
  {
    title: "100% NCERT Pattern",
    desc: "Every single question is strictly curated from NCERT lines, exactly as per the latest NTA NEET trends.",
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "AIR Benchmarking",
    desc: "Compete with thousands of students and get your potential All India Rank baseline after every test.",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "In-Depth Analysis",
    desc: "Get chapter-wise and topic-wise error analysis to identify exactly where you need improvement.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "OMR Practice",
    desc: "Actual offline exam simulation with OMR sheets to minimize 'silly mistakes' in the real exam.",
    icon: ClipboardList,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

export default function ThinkNeetPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />
      
      <div className="h-24 bg-slate-900" />

      {/* ═══ HERO SECTION ═══ */}
      <div className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
        <BlackCard glowColor="emerald" className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <SectionBadge color="emerald" className="bg-emerald-500/10 border-emerald-500/30 text-emerald-300 mb-8">
                <Sparkles size={14} className="text-emerald-400 mr-2" />
                The Ultimate NEET Prep
              </SectionBadge>
              
              <div className="mb-8">
                <img 
                  src="/images/campaigns/think-neet/think-neet-logo.webp" 
                  alt="ThinkNEET Logo" 
                  className="h-16 w-auto object-contain mb-6 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                />
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  Master the <span className="text-emerald-400">NEET</span> <br />
                  with <span className="text-blue-400">ThinkNEET</span>
                </h1>
              </div>

              <p className="text-lg text-emerald-100/70 leading-relaxed max-w-xl mb-10">
                LakshyaMarch presents Begusarai's most scientific and structured test series. 
                Designed by experts to help you crack the medical entrance with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <GlowButton variant="emerald" asChild>
                  <a href="#register" className="px-8 py-4 tracking-widest uppercase">
                    Enroll Now <ArrowRight size={18} className="ml-2" />
                  </a>
                </GlowButton>
                <GlowButton variant="blue" asChild>
                  <a href={whatsappLink("Hi, I want more details about ThinkNEET Test Series.")} target="_blank" className="px-8 py-4 bg-white/5 border-white/10 hover:bg-white/10 text-white">
                    Download Schedule
                  </a>
                </GlowButton>
              </div>
            </div>

            <GlassCard className="relative p-6 bg-slate-900/60 border-slate-800 shadow-2xl" id="register">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] -z-10"></div>
                <EnquiryForm />
            </GlassCard>
          </div>
        </BlackCard>
      </div>

      {/* ═══ WHY THINKNEET ═══ */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Why <span className="text-emerald-600">ThinkNEET?</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              In NEET, accuracy is as important as knowledge. Our test series is built on 4 core pillars to ensure you are exam-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <KpiCard
                key={i}
                title={`Pillar ${i + 1}`}
                value={f.title}
                subtitle={f.desc}
                icon={f.icon}
                color={f.title === "In-Depth Analysis" ? "blue" : (f.title === "OMR Practice" ? "purple" : (f.title.includes("NCERT") ? "emerald" : "amber"))}
                trend={{ value: "Positive", positive: true }}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ EXAM STRUCTURE ═══ */}
      <AnimatedSection className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
                Structured <span className="text-blue-600">Learning Path</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  { title: "Unit Tests", desc: "Focus on single chapters to build foundation." },
                  { title: "Cumulative Tests", desc: "Combining 3-4 chapters for retention." },
                  { title: "Quarterly Major Tests", desc: "Simulating 1/4th of the full syllabus." },
                  { title: "Full Syllabus Mocks", desc: "Exact replica of NEET UG exam paper." }
                ].map((item, i) => (
                  <GlassCard key={i} className="flex gap-5 p-5 hover:border-blue-300">
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold shadow-lg shadow-blue-600/30">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <BlackCard glowColor="emerald" className="p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full"></div>
                <h3 className="text-2xl font-black text-white mb-6">Expert Mentorship</h3>
                <p className="text-emerald-100/80 leading-relaxed mb-8">
                  Taking a test is only 50% of the work. The other 50% is analysis. Our expert faculty conducts discussion sessions after every major test to clarify doubts and provide shortcuts.
                </p>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <AlertCircle className="text-amber-400 shrink-0" size={24} />
                    <p className="text-sm text-slate-200">
                        <strong className="text-white">Note:</strong> Test series is available in both Hindi & English mediums.
                    </p>
                </div>
            </BlackCard>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══ CONCLUSION & FINAL CTA ═══ */}
      <AnimatedSection className="py-24 text-center px-5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full mb-8">
            <GraduationCap size={32} />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
            Agar aap bhi NEET 2027 ya aage ke liye serious hain, <br />
            toh hamare institute ki is <span className="text-emerald-600">specialized test series</span> ka hissa banein aur apni rank pakki karein.
          </h2>

          <GlassCard className="mb-12 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-emerald-300 border-2">
            <div className="text-left">
                <h4 className="text-lg font-black text-slate-900">Expert Preparation Strategy</h4>
                <p className="text-sm text-slate-600">Read our detailed blog on how to use ThinkNEET to crack the medical entrance.</p>
            </div>
            <a href="/blog/think-neet-test-series-begusarai-launch" className="px-6 py-3 bg-white border border-emerald-200 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all flex items-center gap-2 uppercase tracking-widest text-xs">
                Read Blog Story <ArrowRight size={16} />
            </a>
          </GlassCard>

          <div className="flex flex-wrap justify-center gap-6">
            <GlowButton variant="emerald" asChild>
              <a href="#register" className="px-10 py-4 uppercase tracking-widest">
                  Join ThinkNEET Today
              </a>
            </GlowButton>
            <GlowButton variant="blue" asChild>
              <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="px-10 py-4 bg-transparent border-2 border-slate-200 hover:border-emerald-300 text-slate-900 uppercase tracking-widest">
                  Call for Schedule
              </a>
            </GlowButton>
          </div>
        </div>
      </AnimatedSection>

      <PublicFooter />
    </div>
  );
}
