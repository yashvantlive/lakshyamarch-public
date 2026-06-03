"use client";

import React, { useState } from 'react';
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { HeroSection, Reveal, Badge } from "@/components/brand";
import { ShieldAlert, AlertTriangle, Send } from "lucide-react";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Account Deletion Request - " + formData.name);
    const body = encodeURIComponent(
      `Hello Admin,\n\nI would like to request the deletion of my student account. Here are my details:\n\n` +
      `Full Name: ${formData.name}\n` +
      `Registered Email: ${formData.email}\n` +
      `Registered Phone: ${formData.phone}\n\n` +
      `Reason for Deletion:\n${formData.reason}\n\n` +
      `I understand that this action will permanently delete my data and test records.\n\n` +
      `Regards,\n${formData.name}`
    );

    window.location.href = `mailto:lakshyamarchbegusarai@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-ink-50 flex flex-col">
      <PublicNavbar />
      
      <main className="flex-1">
        <HeroSection accent="red" minHeight="min-h-[40vh]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal delay={0.05}>
              <Badge tone="onDark" icon={ShieldAlert}>Privacy & Data</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                Account <span className="text-brand-red-400">Deletion</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-white/70">
                Submit a request to permanently delete your student account and associated data.
              </p>
            </Reveal>
          </div>
        </HeroSection>

        <section className="py-20 px-5 sm:px-8 max-w-3xl mx-auto">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-brand-md border border-ink-200 p-6 md:p-10">
              
              <div className="flex gap-4 items-start mb-8 p-4 bg-brand-red-50 border border-brand-red-100 rounded-xl">
                <AlertTriangle className="text-brand-red-600 shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-display font-bold text-brand-red-900 mb-1">Important Notice</h3>
                  <p className="text-sm font-sans text-brand-red-800/80 leading-relaxed">
                    Account deletion is a permanent action. All your test records, attendance, and enrolled courses history will be permanently erased. Please allow up to 7-14 business days for the complete removal of your data.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-ink-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ink-50 border border-ink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent transition-all"
                    placeholder="Enter your registered name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-ink-900 mb-2">Registered Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ink-50 border border-ink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-ink-900 mb-2">Registered Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ink-50 border border-ink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent transition-all"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-bold text-ink-900 mb-2">Reason for Deletion</label>
                  <textarea 
                    id="reason" 
                    name="reason" 
                    required 
                    rows={4}
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ink-50 border border-ink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please briefly explain why you want to delete your account..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-red-600 hover:bg-brand-red-700 text-white font-bold rounded-xl transition-colors shadow-sm"
                >
                  <Send size={18} />
                  Proceed to Email Request
                </button>
                <p className="text-center text-xs text-ink-500 mt-4">
                  Clicking this will open your default email app with a pre-filled request.
                </p>
              </form>

            </div>
          </Reveal>
        </section>
      </main>
      
      <PublicFooter />
    </div>
  );
}
