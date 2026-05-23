"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SUCCESS_STORIES } from "@/lib/stories";

interface StudentCardProps {
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
    <div className="w-full aspect-[4/5] rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black text-4xl shadow-sm">
      {initials}
    </div>
  );
};

export default function StudentCard({ student, category }: StudentCardProps) {
  const isBoard = category.includes("Board");
  const isJee = category === "JEE";
  const isNeet = category === "NEET";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full"
    >
      <div className="flex flex-col h-full">
        <Avatar name={student.name} image={student.image} />
        
        <div className="mt-4 flex flex-col flex-1 items-center text-center">
          <h4 className="text-lg font-black text-slate-900 tracking-tight leading-tight mb-2">
            {student.name}
          </h4>
          
          {isNeet && (
            <div className="mb-2">
              <span className="text-2xl font-black text-[#FF6B00]">
                {student.score}
              </span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">NEET Score</p>
            </div>
          )}

          {isJee && (
            <div className="mb-2 text-center">
              <span className="text-2xl font-black text-[#FF6B00]">
                {student.stat}
              </span>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  {student.examType}
                </span>
              </div>
            </div>
          )}

          {isBoard && (
            <div className="mb-2">
              <span className="text-2xl font-black text-[#FF6B00]">
                {student.percentage}
              </span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Board Score</p>
            </div>
          )}

          <div className="mt-auto w-full pt-4 border-t border-slate-100 flex flex-col gap-2">
            {student.college && (
              <div className="flex items-center justify-center gap-2 text-slate-500">
                {isJee ? <Building2 size={13} className="text-blue-500" /> : <GraduationCap size={15} className="text-blue-500" />}
                <span className="text-[11px] font-bold leading-none">{student.college}</span>
              </div>
            )}
            <div className="text-[10px] font-black text-slate-400 self-center bg-slate-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Batch {student.year}
            </div>

            {/* Read Story Button */}
            {(() => {
              const story = SUCCESS_STORIES.find((s: any) => s.studentId === student.id);
              if (!story) return null;
              return (
                <Link 
                  href={`/success-stories/${story.slug}`}
                  className="mt-2 group/btn flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm shadow-blue-600/10"
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
