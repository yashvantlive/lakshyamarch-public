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
      <section className="relative py-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
                <Sparkles size={14} className="text-emerald-400" />
                <span className="text-[10px] font-black text-emerald-300 uppercase tracking-[0.2em]">The Ultimate NEET Prep</span>
              </div>
              
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

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
                LakshyaMarch presents Begusarai's most scientific and structured test series. 
                Designed by experts to help you crack the medical entrance with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#register" className="h-14 px-8 inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-black rounded-2xl shadow-xl shadow-emerald-500/20 transition-all uppercase tracking-widest text-sm">
                  Enroll Now <ArrowRight size={18} />
                </a>
                <a href={whatsappLink("Hi, I want more details about ThinkNEET Test Series.")} target="_blank" className="h-14 px-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all text-sm">
                  Download Schedule
                </a>
              </div>
            </div>

            <div id="register" className="relative">
                <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] -z-10"></div>
                <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY THINKNEET ═══ */}
      <section className="py-24 bg-white">
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
              <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-emerald-100 transition-all duration-500">
                <div className={`h-14 w-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXAM STRUCTURE ═══ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
                Structured <span className="text-blue-600">Learning Path</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "Unit Tests", desc: "Focus on single chapters to build foundation." },
                  { title: "Cumulative Tests", desc: "Combining 3-4 chapters for retention." },
                  { title: "Quarterly Major Tests", desc: "Simulating 1/4th of the full syllabus." },
                  { title: "Full Syllabus Mocks", desc: "Exact replica of NEET UG exam paper." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 sm:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full"></div>
                <h3 className="text-2xl font-black text-white mb-6">Expert Mentorship</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Taking a test is only 50% of the work. The other 50% is analysis. Our expert faculty conducts discussion sessions after every major test to clarify doubts and provide shortcuts.
                </p>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <AlertCircle className="text-amber-400 shrink-0" size={24} />
                    <p className="text-sm text-slate-200">
                        <strong className="text-white">Note:</strong> Test series is available in both Hindi & English mediums.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONCLUSION & FINAL CTA ═══ */}
      <section className="py-24 text-center px-5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full mb-8">
            <GraduationCap size={32} />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
            Agar aap bhi NEET 2027 ya aage ke liye serious hain, <br />
            toh hamare institute ki is <span className="text-emerald-600">specialized test series</span> ka hissa banein aur apni rank pakki karein.
          </h2>

          <div className="mb-12 p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
                <h4 className="text-lg font-bold text-slate-900">Expert Preparation Strategy</h4>
                <p className="text-sm text-slate-500">Read our detailed blog on how to use ThinkNEET to crack the medical entrance.</p>
            </div>
            <a href="/blog/think-neet-test-series-begusarai-launch" className="px-6 py-3 bg-white border border-emerald-200 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all flex items-center gap-2">
                Read Blog Story <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#register" className="h-16 px-10 inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-full shadow-2xl transition-all uppercase tracking-widest text-sm">
                Join ThinkNEET Today
            </a>
            <a href={`tel:+91${INSTITUTE.primaryPhone}`} className="h-16 px-10 inline-flex items-center gap-3 bg-white border-2 border-slate-100 hover:border-emerald-200 text-slate-900 font-bold rounded-full transition-all">
                Call for Schedule
            </a>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
