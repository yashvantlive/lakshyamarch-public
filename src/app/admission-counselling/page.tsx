import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import Link from "next/link";
import { Phone, ArrowRight, GraduationCap, Library } from "lucide-react";

export const metadata = {
  title: "Admission Counselling | LakshyaMarch Education",
  description: "Meet our expert Admission Counselors. Get complete guidance for School Wing, Foundation Coaching, and IIT-JEE/NEET target batches.",
};

const COUNSELORS = [
  {
    name: "Ramayan Kumar",
    role: "Admission Counselor",
    subject: "Admissions",
    image: "",
    qual: "Expert Admission Counselor",
    prev: "5+ Years Experience",
    phone: "8405906260",
    usp: "Helps parents and students understand the right batch for School, Boards and Competition."
  },
  {
    name: "Dheeraj Kumar",
    role: "Admission Counselor",
    subject: "Admissions",
    image: "",
    qual: "Expert Admission Counselor",
    prev: "5+ Years Experience",
    phone: "7858878922",
    usp: "Helps parents and students understand the right batch for School, Boards and Competition."
  }
];

const PROGRAMS = [
  {
    title: "School Wing (Class 6th to 10th)",
    icon: <Library className="h-6 w-6 text-emerald-500" />,
    desc: "Integrated schooling with a strong focus on core concepts, board exam preparation, and extracurricular growth.",
    tags: ["CBSE", "BSEB", "ICSE"],
    link: "/admission",
    color: "emerald"
  },
  {
    title: "Foundation Coaching (7th to 10th)",
    icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    desc: "Early preparation for Olympiads, NTSE, and building a solid base for future competitive exams like JEE & NEET.",
    tags: ["NTSE", "Olympiads", "Pre-Foundation"],
    link: "/admission",
    color: "blue"
  },
  {
    title: "Target JEE / NEET (11th, 12th & Droppers)",
    icon: <ArrowRight className="h-6 w-6 text-rose-500" />,
    desc: "Intensive target batches taught by elite IITian and NITian faculty. Specialized dropper batches available.",
    tags: ["IIT-JEE", "NEET", "Board Prep"],
    link: "/admission",
    color: "rose"
  }
];

export default function AdmissionCounsellingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PublicNavbar />
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      <main className="flex-1">
        {/* Header Section */}
        <div className="bg-slate-900 py-16 sm:py-24 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent mix-blend-overlay"></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 relative z-10">
            Admission <span className="text-amber-400">Counselling</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto relative z-10">
            Confused about the right batch? Connect with our expert counselors to navigate your path from School Wing to Elite Coaching.
          </p>
        </div>

        {/* Counselors Section */}
        <section className="py-16 bg-white px-5 sm:px-8 shadow-sm relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Our Counseling Experts</h2>
              <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {COUNSELORS.map((f) => (
                <div key={f.name} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex flex-col h-full">
                  <div className="grid sm:grid-cols-5 gap-6 h-full">
                    {/* Left Column: Image Area */}
                    <div className="sm:col-span-2">
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-slate-100 border-4 border-white ring-1 ring-slate-100">
                        {f.image ? (
                          <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-4xl uppercase">
                            {f.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Info Area */}
                    <div className="sm:col-span-3 flex flex-col pt-2">
                      <div className="mb-6">
                        <h4 className="text-2xl font-black text-slate-900 leading-tight">
                          {f.name}
                        </h4>
                        <p className="mt-1 text-sm font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                          {f.role} <span className="h-1 w-1 bg-slate-300 rounded-full"></span> {f.subject}
                        </p>
                      </div>

                      <div className="space-y-5 flex-1">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                            <span className="h-px w-4 bg-slate-200"></span> Profile
                          </p>
                          <p className="text-sm font-bold text-slate-800 leading-relaxed">{f.qual}</p>
                          {f.prev && (
                            <div className="mt-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 inline-block">
                              {f.prev}
                            </div>
                          )}
                        </div>

                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                          <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1.5">Guidance Strategy</p>
                          <p className="text-xs text-slate-700 italic font-bold leading-relaxed">
                            "{f.usp}"
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          LakshyaMarch Admission Desk
                        </div>
                        <a 
                          href={`tel:+91${f.phone}`}
                          className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-sm"
                        >
                          <Phone size={10} fill="currentColor" />
                          Call Direct
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section for Programs */}
        <section className="py-16 sm:py-24 bg-slate-50 px-5 sm:px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Explore Our Programs</h2>
              <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
                Whether you need pure school education, early foundation coaching, or extreme target preparation for IIT-JEE/NEET — we have a batch customized for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROGRAMS.map((program) => (
                <div key={program.title} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:-translate-y-2 transition-all duration-300 flex flex-col group">
                  <div className={`h-14 w-14 rounded-2xl bg-${program.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-3">{program.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                    {program.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={program.link}
                    className={`w-full py-4 text-center text-sm font-black uppercase tracking-widest text-white transition-all rounded-xl shadow-lg
                      ${program.color === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20' : ''}
                      ${program.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20' : ''}
                      ${program.color === 'rose' ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' : ''}
                    `}
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-slate-900 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Still Not Sure Which Batch Is Right For You?</h3>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-8">
                Request a callback from our admission counseling team today. We'll map your academic goals and help you pick the winning path.
              </p>
              <a 
                href="tel:+916206323869" 
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-lg"
              >
                <Phone size={18} />
                Call Helpline Now
              </a>
            </div>
          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
}
