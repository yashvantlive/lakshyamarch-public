import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { SUCCESS_STORIES } from "@/lib/stories";
import { ArrowRight, BookOpen, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories & Toppers Journey | LakshyaMarch Begusarai",
  description: "Read inspiring stories of students from Begusarai who cracked IIT-JEE and NEET. Learn about their strategy, struggle, and ultimate success at LakshyaMarch.",
  keywords: ["NEET Toppers Begusarai", "JEE Success Stories", "IIT-JEE Preparation Tips", "LakshyaMarch Results"],
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
       <PublicNavbar />
       
       {/* 1. HEADER SECTION */}
       <section className="bg-[#0A0F2C] pt-40 pb-24 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
         <div className="max-w-4xl mx-auto relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
             <Trophy size={14} /> Hall of Fame
           </div>
           <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-6">
             The <span className="text-amber-400">Success</span> Stories
           </h1>
           <p className="text-blue-200 text-lg sm:text-xl font-medium opacity-80 max-w-2xl mx-auto">
             How local students from Begusarai achieved national level excellence. Read their preparation secrets and advice for future aspirants.
           </p>
         </div>
       </section>

       {/* 2. STORIES GRID */}
       <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {SUCCESS_STORIES.map((story) => (
             <Link 
               key={story.id} 
               href={`/success-stories/${story.slug}`}
               className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
             >
               {/* Image Container */}
               <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex items-center justify-center">
                 {story.image ? (
                   <Image 
                     src={story.image} 
                     alt={story.title}
                     fill 
                     className="object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                 ) : (
                   <Trophy size={48} className="text-slate-300 opacity-50" />
                 )}
                 <div className="absolute top-4 left-4">
                   <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-[#FF6B00] shadow-sm">
                     {story.category} {story.year}
                   </div>
                 </div>
               </div>

               {/* Content */}
               <div className="p-8 flex-1 flex flex-col">
                 <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                   <BookOpen size={12} />
                   <span>Preparation Journey</span>
                 </div>
                 
                 <h3 className="text-xl font-black text-slate-900 tracking-tight leading-[1.2] mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                   {story.title}
                 </h3>
                 
                 <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                   {story.excerpt}
                 </p>

                 <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <GraduationCap size={12} />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{story.author}</span>
                   </div>
                   <div className="h-8 w-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <ArrowRight size={14} />
                   </div>
                 </div>
               </div>
             </Link>
           ))}
         </div>
       </main>

       {/* 3. CTA SECTION */}
       <section className="bg-slate-900 py-20 px-4">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-6 italic">
              "Your hard work, Our mentorship, Your Success Story."
            </h2>
            <p className="text-slate-400 font-bold mb-10 text-lg">
              Begin your professional journey at LakshyaMarch Begusarai today.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-amber-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20"
            >
              Enroll for 2026-28 Batches
            </Link>
         </div>
       </section>

       <PublicFooter />
    </div>
  );
}
