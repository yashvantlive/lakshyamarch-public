import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, FACULTY } from "@/lib/siteData";

const facultyFaqs = [
  { q: "Are LakshyaMarch teachers from IIT?", a: "Yes, LakshyaMarch faculty includes graduates from IIT Kharagpur, NIT Allahabad, IIT Dhanbad, NIT Agartala, NIT Patna, and other top-tier institutes. No local-level or part-time tutors are hired." },
  { q: "How many teachers does LakshyaMarch have?", a: "LakshyaMarch has 8+ full-time dedicated faculty members covering Mathematics, Physics, Chemistry, and Biology for both JEE and NEET streams." },
  { q: "Who is the best Physics teacher at LakshyaMarch?", a: "Chandan Kumar Sir (B.Tech, NIT Agartala) is highly rated for his engaging teaching style. Students say 'He makes you fall in love with Physics.' L.K.P. Sir (B.Tech, MIT Muzaffarpur) is also a senior Physics faculty." },
  { q: "Who teaches Biology for NEET at LakshyaMarch?", a: "Nitish Sharma Sir (AIR-82 in GATE-XL, 5 years experience) leads the Biology department. Rahul Kumar Sir (M.Sc Biotechnology, CUSB) supports with 4 years of dedicated NEET Biology teaching." },
];

export const metadata = {
  title: "Expert Faculty | IIT-JEE & NEET Specialists",
  description: "Meet our elite faculty panel consisting of IITians, NITians, and subject experts with years of experience in competitive exam preparation.",
  keywords: ["IITian Faculty", "NIT Alumni Teachers", "Physics Experts", "Chemistry Specialists", "Biology NEET Faculty", "Mathematics IIT-JEE Coaches"],
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <FaqSchema faqs={facultyFaqs} />
      <PublicNavbar />
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      <main className="flex-1">
        <div className="bg-slate-900 py-16 sm:py-24 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent mix-blend-overlay"></div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 relative z-10">Elite <span className="text-amber-400">Faculty</span></h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto relative z-10">
            India's Top Tier Educators. We don't hire part-time local tutors. All our teachers are highly experienced IITians, NITians, and subject experts holding national ranks.
          </p>
        </div>

        <section className="py-16 sm:py-24 bg-white px-5 sm:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FACULTY.map((f) => (
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
                          <span className="h-px w-4 bg-slate-200"></span> Qualification
                        </p>
                        <p className="text-sm font-bold text-slate-800 leading-relaxed">{f.qual}</p>
                        {f.prev && (
                          <div className="mt-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 inline-block">
                            {f.prev}
                          </div>
                        )}
                      </div>

                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1.5">Expertise & Style</p>
                        <p className="text-xs text-slate-700 italic font-bold leading-relaxed">
                          "{f.usp}"
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-black text-slate-300 uppercase tracking-widest text-center">
                      LakshyaMarch Elite Faculty Panel
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
