import type { Metadata } from "next";
import Link from "next/link";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import FaqSchema from "@/components/seo/FaqSchema";
import { INSTITUTE, PROGRAMS, RESULTS_JEE, RESULTS_NEET } from "@/lib/siteData";
import {
  MapPin, Star, Trophy, Target, ArrowRight,
  Phone, Users, ShieldCheck, CheckCircle2, ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Coaching in Begusarai for IIT-JEE & NEET | LakshyaMarch",
  description: "Looking for the top coaching institute in Begusarai? LakshyaMarch offers premium IIT-JEE & NEET preparation with IITian faculty in Chanakya Nagar.",
  keywords: [
    "best coaching in Begusarai", "IIT JEE coaching Begusarai", "NEET coaching Bihar",
    "top coaching institute Begusarai", "Ram sir coaching Begusarai", "LakshyaMarch Begusarai"
  ],
  alternates: { canonical: "/begusarai-coaching" },
  openGraph: {
    title: "Best Coaching in Begusarai | LakshyaMarch",
    description: "Premium IIT-JEE & NEET preparation with IITian faculty right here in Begusarai.",
  },
};

const localFaqs = [
  { q: "Which is the best coaching for IIT JEE in Begusarai?", a: "LakshyaMarch is widely considered the best coaching for IIT-JEE in Begusarai. With a faculty panel of IIT and NIT alumni, they produced a 99.35 percentile top scorer in JEE Main 2025." },
  { q: "Where is LakshyaMarch coaching located?", a: "LakshyaMarch is centrally located at Dakbangla Road, Opposite Omar Girls High School, Chanakya Nagar, Begusarai, Bihar – 851101." },
  { q: "Is NEET coaching available in Begusarai?", a: "Yes, LakshyaMarch offers dedicated NEET medical coaching in Begusarai. Their students have achieved massive success, including AIR 499 (619/720) in NEET 2025." },
  { q: "Do I need to go to Kota for coaching if I live in Begusarai?", a: "No. LakshyaMarch brings Kota-level education to Begusarai through its experienced IIT/NIT faculty, rigorous test series, and integrated school model, saving parents money and keeping students close to home." },
];

export default function BegusaraiCoachingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-amber-200">
      <FaqSchema faqs={localFaqs} />
      <PublicNavbar />
      
      {/* Spacer for fixed navbar to give it a dark background initially */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-3xl mix-blend-multiply" />
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 mb-8">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                <MapPin size={12} /> Begusarai, Bihar
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                <ShieldCheck size={12} /> Premium Coaching
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              The Undisputed Leader in <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Begusarai Coaching
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Why send your child away to Kota or Patna? LakshyaMarch brings India's top IIT/NIT educators directly to your hometown.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+916206323869" className="h-14 px-8 inline-flex items-center gap-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-600/20">
                <Phone size={18} /> Call Admissions
              </a>
              <Link href="/admission" className="h-14 px-8 inline-flex items-center gap-3 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                Apply Online <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap justify-center gap-10 items-center opacity-70 grayscale">
               <div className="flex items-center gap-2 font-black text-slate-800 text-lg"><Trophy size={20}/> 99.35%ile JEE 2025</div>
               <div className="flex items-center gap-2 font-black text-slate-800 text-lg"><Target size={20}/> AIR 499 NEET</div>
               <div className="flex items-center gap-2 font-black text-slate-800 text-lg"><Users size={20}/> 100+ Selections</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US GRID ═══ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Don't Compromise on Education Hubs</h2>
            <p className="text-slate-500 font-medium text-lg">LakshyaMarch offers every advantage of a national institute right here in Begusarai.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "IIT/NIT Faculty Only", desc: "No local part-time tutors. Your child gets mentored by engineers and doctors who have cracked the toughest exams themselves." },
              { title: "No Migration Stress", desc: "Keep your child safe at home. Avoid the mental health issues, homesickness, and high hostel costs associated with other cities." },
              { title: "Integrated Schooling", desc: "Our revolutionary Class 6-10 model saves time. Regular board schooling + Foundation coaching happens under one roof." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600 shadow-sm">
                  <Star size={20} fill="currentColor" className="opacity-80" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATION BANNERS ═══ */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-12 flex-wrap lg:flex-nowrap">
           <div className="max-w-xl">
             <span className="text-amber-400 font-black tracking-widest uppercase text-[10px] mb-4 block">Visit Campus</span>
             <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                Located in the Heart of Begusarai
             </h2>
             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our ultra-modern campus is situated at {INSTITUTE.address.line1}. Easily accessible from all parts of the city with dedicated transport facility for students.
             </p>
             <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-semibold text-blue-200"><CheckCircle2 className="text-emerald-400" size={20}/> Fully Air-Conditioned Classrooms</li>
                <li className="flex items-center gap-3 font-semibold text-blue-200"><CheckCircle2 className="text-emerald-400" size={20}/> Hi-Tech Digital Smart Boards</li>
                <li className="flex items-center gap-3 font-semibold text-blue-200"><CheckCircle2 className="text-emerald-400" size={20}/> Strictly Monitored CCTV Campus</li>
             </ul>
             <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold bg-white text-slate-900 px-6 py-3 rounded-full hover:bg-slate-200 transition-colors">
                <MapPin size={16}/> Get Directions
             </a>
           </div>

           {/* Simple Map Placeholder visual */}
           <div className="flex-1 w-full relative">
              <div className="w-full aspect-video sm:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800 border-4 border-slate-800 relative shadow-2xl flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                 <div className="text-center">
                    <MapPin className="text-amber-400 w-16 h-16 mx-auto mb-4 animate-bounce" fill="currentColor"/>
                    <h4 className="text-xl font-bold font-sans">Chanakya Nagar</h4>
                    <p className="text-slate-400 text-sm">{INSTITUTE.address.line1}</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
      
      {/* ═══ CTA ═══ */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Start Your Journey Today</h2>
        <Link href="/programs" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 text-lg group">
          Explore Our Programs <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
        </Link>
      </section>

      <PublicFooter />
    </div>
  );
}
