import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, FOUNDER, PROGRAMS, HIGHLIGHTS } from "@/lib/siteData";
import { DIRECTOR_DATA, INST_VALUES } from "@/lib/contactData";
import { Shield, Target, Lightbulb, Users, CheckCircle2, Quote } from "lucide-react";

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

        {/* Vision, Mission, Goals Section (Core Values) */}
        <section className="py-20 sm:py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Our <span className="text-amber-400">Core Values</span>
              </h2>
              <p className="mt-5 text-blue-200/70 leading-relaxed font-medium">
                The pillars that guide our commitment to educational excellence and character building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(INST_VALUES).map(([key, value]) => (
                <div key={key} className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-amber-500/50 transition-colors group">
                  <div className="h-16 w-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform shadow-inner">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Desk Section */}
        <section className="py-20 sm:py-28 bg-white px-5 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Leadership <span className="text-blue-600">Desk</span>
              </h2>
              <p className="mt-4 text-slate-500">Guided by experience, driven by a passion for education.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Profile Card */}
              <div className="w-full lg:w-[400px] shrink-0 sticky top-32">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-8 border border-white">
                    {DIRECTOR_DATA.image ? (
                      <img
                        src={DIRECTOR_DATA.image}
                        alt={DIRECTOR_DATA.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-6xl">
                        {DIRECTOR_DATA.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center relative z-10">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">{DIRECTOR_DATA.name}</h3>
                    <p className="text-sm font-black text-blue-600 uppercase tracking-widest mt-2">{DIRECTOR_DATA.designation}</p>
                    
                    <div className="flex flex-col gap-2 mt-6">
                      <span className="px-4 py-2 bg-white text-slate-700 text-xs font-bold rounded-xl border border-slate-200">
                        {DIRECTOR_DATA.qualification}
                      </span>
                      <span className="px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-100">
                        {DIRECTOR_DATA.certification}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Column */}
              <div className="flex-1 flex flex-col gap-12">
                {/* Short Vision Quote (From siteData) */}
                <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                  <Quote className="absolute -top-4 -left-2 h-32 w-32 text-white/5 pointer-events-none" />
                  <h3 className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-6">Our Foundational Vision</h3>
                  <p className="text-xl sm:text-2xl text-white leading-relaxed font-serif italic relative z-10">
                    "{FOUNDER.message}"
                  </p>
                </div>

                {/* Detailed Director's Message (From contactData) */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                    {DIRECTOR_DATA.title}
                  </h3>
                  <div className="prose prose-lg text-slate-600">
                    <p className="leading-relaxed">
                      {DIRECTOR_DATA.message}
                    </p>
                    <p className="leading-relaxed mt-6">
                      We started LakshyaMarch in {INSTITUTE.established} with a simple goal: Quality Education with No Compromises. Today, observing our phenomenal success in IIT-JEE and NEET, we are bringing the same rigorous, result-oriented approach to the schooling level with the launch of <strong className="text-slate-900">{PROGRAMS.school.name}</strong>. Students no longer need to travel to other cities — we provide all elite facilities right here.
                    </p>
                  </div>
                </div>
              </div>
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
