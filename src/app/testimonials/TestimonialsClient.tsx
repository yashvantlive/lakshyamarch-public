"use client";

import { useState, useEffect } from "react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { Star, MessageSquare, Quote, Send, Loader2, User, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { erpApiPath } from "@/lib/erpApi";

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

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    rating: 5,
    studentClass: "",
  });

  // Fetch Testimonials
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch(erpApiPath("/api/testimonials"));
        const data = await res.json();
        if (data.success) {
          setTestimonials(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  // Handle Form Submission
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
        setTimeout(() => {
          setFormSuccess(false);
          setShowForm(false);
        }, 3000);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Spacer for FAANG-level transparent-header consistency */}
      <div className="h-24 bg-slate-900 border-b border-white/10" />
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0A0F2C] py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(224,71%,15%)] to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            Student Feedback
          </motion.div>
          <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-6">
            The Legend of <span className="text-[#FF6B00]">LakshyaMarch</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto font-medium opacity-80">
            Real stories, real voices. See what our students have to say about their journey towards excellence in Begusarai.
          </p>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="mt-12 group relative inline-flex items-center gap-3 bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-600/20 active:scale-95"
          >
            <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
            Share Your Experience
          </button>
        </div>
      </section>

      {/* 2. SUBMISSION FORM (Animate Presence) */}
      <AnimatePresence>
        {showForm && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-4 py-16">
              {formSuccess ? (
                <div className="text-center py-8">
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Message Received!</h3>
                  <p className="text-slate-500 font-medium">Thank you for sharing your story. Our team will verify and publish it soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Rahul Kumar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 font-bold text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Your Class / Batch</label>
                      <input 
                        required
                        type="text" 
                        value={formData.studentClass}
                        onChange={(e) => setFormData({...formData, studentClass: e.target.value})}
                        placeholder="e.g. 12th NEET 2025"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 font-bold text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Your Message</label>
                    <textarea 
                      required
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      rows={4}
                      placeholder="Share your experience at LakshyaMarch..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 font-bold text-slate-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Rating</span>
                      <div className="flex gap-1 group/rating">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button 
                            key={s}
                            type="button"
                            onClick={() => setFormData({...formData, rating: s})}
                            className={`transition-all hover:scale-110 ${formData.rating >= s ? "text-amber-500" : "text-slate-200 group-hover/rating:text-amber-200"}`}
                          >
                            <Star size={28} fill={formData.rating >= s ? "currentColor" : "none"} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <button 
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto bg-slate-900 text-white px-10 py-3.5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-amber-500 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-amber-500/20 disabled:opacity-50"
                    >
                      {submitting ? <Loader2 size={18} className="animate-spin" /> : "Submit Feedback"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 3. TESTIMONIALS GRID (Wall of Fame) */}
      <section className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
               <Loader2 size={48} className="animate-spin mb-4" />
               <span className="text-sm font-black uppercase tracking-widest">Loading Stories...</span>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {testimonials.length > 0 ? (
                testimonials.map((t) => (
                   <div key={t._id} className="break-inside-avoid bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                          {t.name[0].toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 tracking-tight leading-none mb-1">{t.name}</h4>
                          <span className="text-[10px] font-black text-slate-400 capitalize tracking-widest">{t.studentClass}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6 flex gap-1 transform group-hover:scale-105 transition-transform origin-left">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < t.rating ? "text-amber-500" : "text-slate-100"} fill={i < t.rating ? "currentColor" : "none"} />
                        ))}
                      </div>

                      <div className="relative">
                        <Quote size={40} className="absolute -top-4 -left-4 text-slate-50 opacity-20 group-hover:text-blue-500 group-hover:opacity-10 transition-colors" />
                        <p className="text-slate-600 leading-relaxed font-medium relative z-10">
                          "{t.content}"
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                        <span className="flex items-center gap-1"><User size={10} /> Verified</span>
                        <span>{new Date(t.createdAt).toLocaleDateString()}</span>
                      </div>
                   </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
                   <p className="text-slate-400 font-bold uppercase tracking-widest">No testimonials yet. Be the first!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
