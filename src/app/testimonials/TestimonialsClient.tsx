"use client";

import { useState } from "react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Star, MessageSquare, Loader2 } from "lucide-react";
import {
  Badge, HeroSection, TestimonialCard, Button, Reveal, Stagger, StaggerItem,
} from "@/components/brand";
import { layout } from "@/design-system/spacing";
import { cn } from "@/lib/utils";

interface Testimonial {
  _id: string;
  name: string;
  content: string;
  rating: number;
  studentClass: string;
  avatar?: string;
  createdAt: string;
}

export default function TestimonialsClient({ initialTestimonials = [] }: { initialTestimonials?: Testimonial[] }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [loading, setLoading] = useState(false);

  // Data is fetched server-side using ISR now

  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <HeroSection accent="gold" minHeight="min-h-[56vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Badge tone="onDark" icon={MessageSquare}>Student Feedback</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white">
              Voices of <span className="text-brand-gold-400">LakshyaMarch</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
              Real stories, real voices. See what our students say about their journey towards excellence in Begusarai.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9">
              <Button href="https://www.google.com/search?q=Lakshyamarch+Education+Begusarai" target="_blank" rel="noopener noreferrer" variant="gold" size="lg" magnetic>
                <Star size={18} strokeWidth={1.75} className="mr-2" /> Write a Google Review
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      {/* Wall */}
      <section className={cn(layout.section, "flex-1")}>
        <div className={layout.container}>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-ink-400">
              <Loader2 size={44} className="mb-4 animate-spin" />
              <span className="font-sans text-sm font-bold uppercase tracking-widest">Loading Stories…</span>
            </div>
          ) : testimonials.length > 0 ? (
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <StaggerItem key={t._id}>
                  <TestimonialCard
                    testimonial={{
                      name: t.name,
                      content: t.content,
                      rating: t.rating,
                      studentClass: t.studentClass,
                      image: t.avatar,
                    }}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="rounded-lg border-2 border-dashed border-ink-200 bg-white py-20 text-center">
              <p className="font-sans font-bold uppercase tracking-widest text-ink-400">No testimonials yet. Be the first!</p>
            </div>
          )}
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
