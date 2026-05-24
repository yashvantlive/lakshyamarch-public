import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, FOUNDER, PROGRAMS, HIGHLIGHTS } from "@/lib/siteData";
import { Shield, Target, Lightbulb, Users, CheckCircle2 } from "lucide-react";

const aboutFaqs = [
  { q: "When was LakshyaMarch established?", a: "LakshyaMarch Education was established in 2019 in Begusarai, Bihar by Ram Kumar Sir, a B.Tech graduate from IIT Kharagpur." },
  { q: "What is the vision of LakshyaMarch?", a: "The vision is to bring JEE & NEET-level coaching and disciplined schooling together under one roof in Begusarai, so students don't have to leave their home city for top-tier education." },
  { q: "What makes LakshyaMarch different from other coaching?", a: "LakshyaMarch stands out because: (1) All faculty are IIT/NIT alumni, (2) Integrated school + coaching model saves time, (3) Small batch sizes for personal attention, (4) No compromise policy on discipline." },
  { q: "Does LakshyaMarch have hostel facility?", a: "Yes, LakshyaMarch provides AC classrooms and hostel facility for outstation students with a safe, disciplined environment." },
];

export const metadata = {
  title: "About Us | Our Story & Vision",
  description: "Learn about LakshyaMarch Begusarai, established in 2019 by Ram Sir. We are dedicated to bringing premier academic excellence and disciplined schooling to Begusarai.",
  keywords: ["About LakshyaMarch", "Ram Sir Begusarai", "Best Coaching in Begusarai", "Educational Vision", "LM Integrated School Story"],
};

const featureIcons = [Shield, Target, Lightbulb, Users];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <FaqSchema faqs={aboutFaqs} />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-slate-900 py-16 sm:py-24 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent mix-blend-overlay"></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 relative z-10">About <span className="text-amber-400">LakshyaMarch</span></h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto relative z-10">
            A Revolution in Education is Taking Shape in Begusarai. Established in {INSTITUTE.established}, we are dedicated to academic excellence.
          </p>
        </div>

        {/* Founder Section */}
        <section className="py-16 sm:py-24 bg-white px-5 sm:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-center">
            <div className="col-span-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-2xl relative">
                <div className="absolute -top-4 -right-4 h-16 w-16 bg-amber-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 text-white font-bold text-center leading-tight text-[10px]">
                  ESTD<br/>{INSTITUTE.established}
                </div>
                <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                  {FOUNDER.image ? (
                    <img src={FOUNDER.image} alt={FOUNDER.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users size={80} className="text-slate-300" />
                  )}
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black text-slate-900">{FOUNDER.name}</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">{FOUNDER.designation}</p>
                <div className="mt-3 space-y-1">
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full">{FOUNDER.qualification}</span>
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full">{FOUNDER.certification}</span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 relative inline-block">
                Founder's Message
                <div className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-amber-400 rounded-full"></div>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-serif italic">
                "{FOUNDER.message}"
              </p>
              <p className="mt-6 text-slate-500 leading-relaxed">
                We started LakshyaMarch in {INSTITUTE.established} with a simple goal: Quality Education with No Compromises. Today, observing our phenomenal success in IIT-JEE and NEET, we are bringing the same rigorous, result-oriented approach to the schooling level with the launch of <strong className="text-slate-900">{PROGRAMS.school.name}</strong>. Students no longer need to travel to other cities — we provide all elite facilities right here.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose <span className="text-blue-600">Us?</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                  <p className="text-sm font-semibold text-slate-700 leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
