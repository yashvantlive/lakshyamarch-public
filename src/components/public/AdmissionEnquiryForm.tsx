"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { PROGRAMS } from "@/lib/siteData";
import { erpApiPath } from "@/lib/erpApi";

export default function AdmissionEnquiryForm() {
  const [name,         setName]         = useState("");
  const [phone,        setPhone]        = useState("");
  const [program,      setProgram]      = useState<"school" | "coaching" | "">("");
  const [classApplied, setClassApplied] = useState("");
  const [saving,       setSaving]       = useState(false);
  const [success,      setSuccess]      = useState(false);
  const [error,        setError]        = useState("");

  const classOptions =
    program === "school"   ? PROGRAMS.school.classes   :
    program === "coaching" ? PROGRAMS.coaching.classes : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !classApplied || !program) {
      setError("Sare fields fill karna compulsory hai.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Valid 10-digit mobile number enter karo.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(erpApiPath("/api/admissions"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName:   name.trim(),
          phone:         phone.trim(),
          classApplied,
          targetProgram: program === "school" ? "LM Integrated School" : "LakshyaMarch Coaching",
          instituteCategory: program,
          source:        "admission_page",   // ← auto-tag for filtering in admin
          status:        "new",
          createdAt:     Date.now(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      setName(""); setPhone(""); setProgram(""); setClassApplied("");
    } catch {
      setError("Kuch galat hua. Please directly call karo.");
    } finally {
      setSaving(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center max-w-md mx-auto shadow-brand-xl">
        <div className="h-16 w-16 rounded-full bg-brand-green-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-brand-green-400" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2">Application Submitted</h3>
        <p className="text-sm text-white/70 mb-5">
          Aapki application receive ho gayi. Hamare counsellor 24 hours mein call karenge.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm font-medium text-brand-gold-400 hover:text-white underline underline-offset-4 transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 max-w-md mx-auto shadow-2xl"
    >
      <div className="mb-6">
        <h3 className="text-xl font-display font-extrabold text-white mb-1">Apply for Admission</h3>
        <p className="text-sm text-white/65">Session 2026-27 — Fill below to get a free counselling call</p>
      </div>

      <div className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
            Student Name <span className="text-brand-gold-400">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Apna poora naam likhein"
            className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-brand-gold-400">*</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile number"
            maxLength={10}
            className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Program + Class */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
              Program <span className="text-brand-gold-400">*</span>
            </label>
            <select
              value={program}
              onChange={(e) => { setProgram(e.target.value as any); setClassApplied(""); }}
              className="w-full h-11 px-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-ink-900">Select...</option>
              <option value="coaching" className="text-ink-900">Coaching (7-12)</option>
              <option value="school"   className="text-ink-900">School (6-10)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1.5">
              Class <span className="text-brand-gold-400">*</span>
            </label>
            <select
              value={classApplied}
              onChange={(e) => setClassApplied(e.target.value)}
              disabled={!program}
              className="w-full h-11 px-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="" className="text-ink-900">Class</option>
              {classOptions.map((c) => (
                <option key={c} value={c} className="text-ink-900">{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-4 text-[13px] font-medium text-red-100 bg-brand-red-500/20 rounded-lg px-3 py-2 border border-brand-red-500/30 flex items-center gap-2">
          <AlertCircle size={15} strokeWidth={1.75} className="shrink-0" /> {error}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="mt-6 w-full h-12 rounded-xl bg-brand-red-600 hover:bg-brand-red-700 text-white font-display font-semibold tracking-wide text-sm shadow-brand-md hover:shadow-brand-glow-red disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        {saving ? (
          <><Loader2 size={16} className="animate-spin" /> Submitting...</>
        ) : (
          <><Send size={15} /> Apply for Admission</>
        )}
      </button>

      <p className="mt-4 text-[10px] text-white/50 text-center uppercase tracking-wider font-semibold">
        Free Counselling • No Obligation • Limited Seats
      </p>
    </form>
  );
}
