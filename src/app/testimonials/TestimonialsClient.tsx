"use client";

import { useState, useEffect } from "react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Star, MessageSquare, Send, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { erpApiPath } from "@/lib/erpApi";
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

export default function TestimonialsClient() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", content: "", rating: 5, studentClass: "" });

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch(erpApiPath("/api/testimonials"));
        const data = await res.json();
        if (data.success) setTestimonials(data.data);
      } catch {
        /* graceful: show empty state */
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(erpApiPath("/api/testimonials"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setFormSuccess(true);
        setFormData({ name: "", content: "", rating: 5, studentClass: "" });
        setTimeout(() => { setFormSuccess(false); setShowForm(false); }, 3000);
      }
    } catch {
      /* silent */
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-ink-200 bg-ink-50 px-5 py-3 font-sans font-medium text-ink-900 transition-colors focus:border-brand-red-500 focus:bg-white focus:outline-none";

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
              <Button onClick={() => setShowForm((v) => !v)} variant="gold" size="lg" magnetic>
                <MessageSquare size={18} strokeWidth={1.75} /> Share Your Experience
              </Button>
            </div>
          </Reveal>
        </div>
      </HeroSection>

      {/* Submission form */}
      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-ink-200 bg-white"
          >
            <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
              {formSuccess ? (
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                    <Send size={32} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-ink-900">Message Received</h3>
                  <p className="mt-2 font-sans text-ink-500">Thank you for sharing your story. Our team will verify and publish it soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">Full Name</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Rahul Kumar" className={inputCls} />
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">Class / Batch</label>
                      <input required type="text" value={formData.studentClass} onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })} placeholder="e.g. 12th NEET 2025" className={inputCls} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">Your Message</label>
                    <textarea required value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={4} placeholder="Share your experience at LakshyaMarch..." className={cn(inputCls, "resize-none")} />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">Rating</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button key={s} type="button" onClick={() => setFormData({ ...formData, rating: s })} className="transition-transform hover:scale-110">
                            <Star size={26} className={formData.rating >= s ? "text-brand-gold-400" : "text-ink-200"} fill={formData.rating >= s ? "currentColor" : "none"} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button type="submit" disabled={submitting} variant="primary" size="md" className="w-full sm:w-auto">
                      {submitting ? <Loader2 size={18} className="animate-spin" /> : "Submit Feedback"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

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
