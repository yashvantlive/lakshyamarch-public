import React from "react";
import Image from "next/image";
import { GraduationCap, Quote } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { cn } from "@/lib/utils";

export type Faculty = {
  name: string;
  subject: string;
  role?: string;
  image?: string;
  qual: string;
  prev?: string;
  usp?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
};

/**
 * Unified faculty card. One photo treatment (4:5 cover with gradient-initial
 * fallback), consistent qual + USP blocks. Used on Home, Faculty, JEE/NEET.
 */
export default function FacultyCard({
  faculty,
  className,
  compact = false,
}: {
  faculty: Faculty;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-ink-200 bg-white shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg",
        className,
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-100">
        {faculty.image ? (
          <Image
            src={faculty.image}
            alt={faculty.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue-700 to-brand-blue-900">
            <span className="font-display text-5xl font-extrabold uppercase text-white/90">
              {faculty.name.charAt(0)}
            </span>
          </div>
        )}
        {/* subject ribbon */}
        <div className="absolute left-0 top-3">
          <span className="inline-flex items-center bg-brand-blue-800 py-1 pl-3 pr-3.5 font-sans text-[0.625rem] font-bold uppercase tracking-[0.14em] text-white">
            {faculty.subject}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-bold leading-tight text-ink-900">{faculty.name}</h3>
          {faculty.role && (
            <p className="mt-0.5 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-brand-blue-700">
              {faculty.role}
            </p>
          )}
        </div>

        <div className="flex items-start gap-2 text-ink-600">
          <GraduationCap size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-brand-blue-600" />
          <p className="font-sans text-sm leading-snug">{faculty.qual}</p>
        </div>

        {faculty.prev && (
          <span className="inline-block w-fit rounded-sm border-l-2 border-brand-gold-500 bg-brand-gold-50 px-2.5 py-1 font-sans text-[0.6875rem] font-semibold text-brand-gold-700">
            {faculty.prev}
          </span>
        )}

        {!compact && faculty.usp && (
          <div className="mt-auto rounded-sm border-l-2 border-brand-blue-700 bg-brand-blue-50/60 p-3">
            <Quote size={14} strokeWidth={1.75} className="mb-1 text-brand-blue-400" />
            <p className="font-sans text-xs italic leading-relaxed text-ink-700">{faculty.usp}</p>
          </div>
        )}

        {/* Social Links */}
        {(faculty.linkedin || faculty.instagram || faculty.facebook) && (
          <div className="mt-4 flex items-center gap-3 border-t border-ink-100 pt-3">
            {faculty.linkedin && (
              <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
            )}
            {faculty.facebook && (
              <a href={faculty.facebook} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
            )}
            {faculty.instagram && (
              <a href={faculty.instagram} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-[#E4405F] transition-colors" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
