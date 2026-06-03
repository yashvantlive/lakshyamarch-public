import React from "react";
import Image from "next/image";
import { Quote, Star, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  id?: string;
  name: string;
  content: string;
  rating?: number;
  studentClass?: string;
  result?: string;
  image?: string;
};

/**
 * Story-driven testimonial card. Avatar (photo or gradient initial), rating,
 * quote, and an optional result tag so reviews feel achievement-anchored.
 */
export default function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const rating = testimonial.rating ?? 5;
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-lg border border-ink-200 bg-white p-6 shadow-brand-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-600 to-brand-blue-900 font-display text-lg font-extrabold text-white">
            {testimonial.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h4 className="font-display text-sm font-bold leading-tight text-ink-900">{testimonial.name}</h4>
          {testimonial.studentClass && (
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-400">
              {testimonial.studentClass}
            </p>
          )}
        </div>
      </div>

      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            strokeWidth={1.75}
            className={i < rating ? "text-brand-gold-400" : "text-ink-200"}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      <div className="relative flex-1">
        <Quote size={28} strokeWidth={1.5} className="absolute -left-1 -top-1 text-ink-100" />
        <p className="relative font-sans text-sm leading-relaxed text-ink-600">{testimonial.content}</p>
      </div>

      {testimonial.result && (
        <div className="mt-5 flex items-center gap-2 border-t border-ink-100 pt-4">
          <BadgeCheck size={16} strokeWidth={1.75} className="text-brand-green-500" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-green-700">
            {testimonial.result}
          </span>
        </div>
      )}
    </div>
  );
}
