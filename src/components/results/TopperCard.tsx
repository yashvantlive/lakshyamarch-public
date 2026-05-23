"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Crown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SUCCESS_STORIES } from "@/lib/stories";

interface TopperCardProps {
  student: any;
  category: string;
}

const Avatar = ({ name, image }: { name: string; image: string }) => {
  if (image) {
    return (
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm bg-slate-100">
        <Image 
          src={image} 
          alt={name} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover" 
        />
      </div>
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  
  return (
    <div className="w-full aspect-[4/5] rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF8C00] flex items-center justify-center text-white font-black text-4xl shadow-sm">
      {initials}
    </div>
  );
};

export default function TopperCard({ student, category }: TopperCardProps) {
  const isBoard = category.includes("Board");
  const isJee = category === "JEE";
  const isNeet = category === "NEET";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-4 border-2 border-[#FFD700] shadow-[0_10px_30px_rgba(255,215,0,0.1)] hover:shadow-[0_20px_40px_rgba(255,215,0,0.2)] transition-all duration-300 relative flex flex-col h-full"
    >
      {/* Crown Tag - Top Left */}
      <div className="absolute top-2 left-2 z-20 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm border border-[#FFD700] text-[#FFD700]">
        <Crown size={20} fill="currentColor" />
      </div>

      <div className="flex flex-col h-full">
        <Avatar name={student.name} image={student.image} />
        
        <div className="mt-4 flex flex-col flex-1 items-center text-center">
          {student.badge && (
            <div className="mb-2 bg-[#FF6B00] px-3 py-0.5 rounded-full shadow-sm">
              <span className="text-[9px] font-black text-white uppercase tracking-wider">
                {student.badge}
              </span>
            </div>
          )}

          <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight mb-2">
            {student.name}
          </h3>
          
          {isNeet && (
            <div className="mb-2">
              <span className="text-3xl font-black text-[#FF6B00]">
                {student.score}
              </span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">NEET Score</p>
            </div>
          )}

          {isJee && (
            <div className="mb-2">
              <span className="text-3xl font-black text-[#FF6B00]">
                {student.stat}
              </span>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  {student.examType}
                </span>
              </div>
            </div>
          )}

          {isBoard && (
            <div className="mb-2">
              <span className="text-3xl font-black text-[#FF6B00]">
                {student.percentage}
              </span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{student.board} Topper</p>
            </div>
          )}

          <div className="mt-auto w-full pt-4 border-t border-slate-100 flex flex-col gap-2">
            {student.college && (
              <div className="flex items-center justify-center gap-2 text-slate-600">
                {isJee ? <Building2 size={13} className="text-blue-500" /> : <GraduationCap size={15} className="text-blue-500" />}
                <span className="text-[11px] font-black leading-none">{student.college}</span>
              </div>
            )}
            <div className="text-[10px] font-black text-white bg-slate-900 px-3 py-1 rounded-full uppercase tracking-wider self-center">
              Batch {student.year}
            </div>
            
            {/* Read Story Button */}
            {(() => {
              const story = SUCCESS_STORIES.find((s: any) => s.studentId === student.id);
              if (!story) return null;
              return (
                <Link 
                  href={`/success-stories/${story.slug}`}
                  className="mt-2 group/btn flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm shadow-amber-500/20"
                >
                  Read Story <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              );
            })()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
