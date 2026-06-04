"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { PROGRAMS } from "@/lib/siteData";
import ClientOnly from "@/components/ClientOnly";
import { erpApiPath } from "@/lib/erpApi";

function EnquiryFormSkeleton() {
  return (
    <div
      className="mx-auto max-w-md overflow-hidden rounded-lg border border-ink-200 bg-white shadow-brand-xl"
      aria-hidden
    >
      <div className="bg-brand-blue-800 px-6 py-4 sm:px-8">
        <div className="h-3 w-40 rounded bg-white/20" />
        <div className="mt-2 h-5 w-32 rounded bg-white/30" />
      </div>
      <div className="p-6 animate-pulse sm:p-8">
        <div className="space-y-4">
          <div className="h-11 rounded-md bg-ink-100" />
          <div className="h-11 rounded-md bg-ink-100" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-11 rounded-md bg-ink-100" />
            <div className="h-11 rounded-md bg-ink-100" />
          </div>
        </div>
        <div className="mt-6 h-12 rounded-md bg-ink-200" />
      </div>
    </div>
  );
}

function EnquiryFormInner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState<"school" | "coaching" | "">("");
  const [classApplied, setClassApplied] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !classApplied || !program) {
      setError("Please fill all fields.");
      return;
    }
    if (!token) {
      setError("Please complete the security check.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(erpApiPath("/api/admissions"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: name.trim(),
          phone: phone.trim(),
          classApplied,
          targetProgram: program === "school" ? "LM Integrated School" : "LakshyaMarch Coaching",
          instituteCategory: program,
          source: "online",
          status: "inquiry",
          createdAt: Date.now(),
          turnstileToken: token,
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 409 || (data.error && data.error.includes("E11000") && data.error.includes("phone"))) {
          throw new Error("This phone number is already registered. Please use a different one.");
        }
        throw new Error(data.error || "Failed to submit");
      }

      setSuccess(true);
      setName("");
      setPhone("");
      setProgram("");
      setClassApplied("");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setSaving(false);
    }
  };

  if (success) {
    return (
      <div className="bg-ink-900/80 backdrop-blur-md rounded-xl border border-ink-800 p-8 text-center max-w-md mx-auto shadow-2xl ring-1 ring-white/5">
        <div className="h-16 w-16 rounded-full bg-brand-green-500/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-brand-green-500" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2">Enquiry Submitted</h3>
        <p className="text-sm text-ink-300 mb-5">
          Thank you for your interest in LakshyaMarch. Our counsellor will call you within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm font-medium text-brand-red-400 hover:text-brand-red-300 underline underline-offset-4 transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const classOptions = program === "school" ? PROGRAMS.school.classes :
    program === "coaching" ? PROGRAMS.coaching.classes : [];

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md overflow-hidden rounded-xl border border-ink-800 bg-ink-900/80 backdrop-blur-md shadow-2xl ring-1 ring-white/5 transition-all duration-300 relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold-500" />
      
      {/* Official admission-form header bar */}
      <div className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-950 to-brand-blue-900 px-6 py-5 sm:px-8 border-b border-ink-800 relative pl-8">
        <div className="inline-block px-2.5 py-1 rounded bg-brand-blue-950 border border-brand-blue-800/50 mb-3 shadow-inner">
          <p className="font-sans text-[0.625rem] font-bold uppercase tracking-[0.2em] text-brand-gold-400">
            Admission Registration · 2026–27
          </p>
        </div>
        <h3 className="font-display text-2xl font-extrabold text-white tracking-tight drop-shadow-sm">
          Begin Your Journey
        </h3>
      </div>
      
      {/* Ticket Perforation effect */}
      <div className="flex justify-between items-center h-4 bg-ink-900/80 backdrop-blur-md relative overflow-hidden -mt-2 z-10 px-4">
        <div className="w-full border-t-[1.5px] border-dashed border-ink-700/50"></div>
        <div className="absolute left-0 w-3 h-3 rounded-full bg-ink-950 -translate-x-1.5 shadow-inner"></div>
        <div className="absolute right-0 w-3 h-3 rounded-full bg-ink-950 translate-x-1.5 shadow-inner"></div>
      </div>

      <div className="p-6 sm:p-8 pt-4">
      <div className="space-y-4">
        <div>
          <label className="block text-[11px] font-bold text-ink-400 uppercase tracking-wider mb-1.5 ml-1">
            Student Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full h-11 px-4 rounded-lg bg-ink-950/50 border border-ink-800 text-white placeholder:text-ink-600 text-sm focus:outline-none focus:ring-4 focus:ring-brand-red-500/20 focus:border-brand-red-500 hover:border-ink-700 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold text-ink-400 uppercase tracking-wider mb-1.5 ml-1">
            Mobile Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit number"
            maxLength={10}
            className="w-full h-11 px-4 rounded-lg bg-ink-950/50 border border-ink-800 text-white placeholder:text-ink-600 text-sm focus:outline-none focus:ring-4 focus:ring-brand-red-500/20 focus:border-brand-red-500 hover:border-ink-700 transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-ink-400 uppercase tracking-wider mb-1.5 ml-1">
              Program
            </label>
            <select
              value={program}
              onChange={(e) => { setProgram(e.target.value as any); setClassApplied(""); }}
              className="w-full h-11 px-3 rounded-lg bg-ink-950/50 border border-ink-800 text-white text-sm focus:outline-none focus:ring-4 focus:ring-brand-red-500/20 focus:border-brand-red-500 hover:border-ink-700 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Select...</option>
              <option value="coaching">Coaching (7-12)</option>
              <option value="school">School (6-10)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-ink-400 uppercase tracking-wider mb-1.5 ml-1">
              Class
            </label>
            <select
              value={classApplied}
              onChange={(e) => setClassApplied(e.target.value)}
              disabled={!program}
              className="w-full h-11 px-3 rounded-lg bg-ink-950/50 border border-ink-800 text-white text-sm focus:outline-none focus:ring-4 focus:ring-brand-red-500/20 focus:border-brand-red-500 hover:border-ink-700 transition-all duration-200 appearance-none cursor-pointer disabled:opacity-40"
            >
              <option value="">Class</option>
              {classOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
          
          <div className="flex justify-center pt-2">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
              onSuccess={setToken}
            />
          </div>

        {program === "coaching" && (
          <div className="pt-1">
            <label className="block text-[11px] font-bold text-ink-400 uppercase tracking-wider mb-1.5 ml-1">
              Target Exam
            </label>
            <select
              required
              className="w-full h-11 px-3 rounded-lg bg-ink-950/50 border border-ink-800 text-white text-sm focus:outline-none focus:ring-4 focus:ring-brand-red-500/20 focus:border-brand-red-500 hover:border-ink-700 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="">Select Target</option>
              <option value="IIT-JEE">IIT-JEE (Engineering)</option>
              <option value="NEET">NEET (Medical)</option>
              <option value="Foundation">Foundation / Olympiads</option>
            </select>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-4 text-[13px] font-medium text-brand-red-400 bg-brand-red-500/10 rounded-lg px-3 py-2 border border-brand-red-500/20 flex items-center gap-2 shadow-inner">
          <AlertCircle size={15} strokeWidth={1.75} className="shrink-0 text-brand-red-400" /> {error}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="mt-6 w-full h-12 rounded-lg bg-gradient-to-r from-brand-red-600 to-brand-red-500 hover:from-brand-red-500 hover:to-brand-red-400 text-white font-display font-semibold tracking-wide text-sm shadow-lg hover:shadow-brand-glow-red disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-brand-red-500/50"
      >
        {saving ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Submit Details
          </>
        )}
      </button>

      <p className="mt-4 text-[10px] text-ink-500 text-center uppercase tracking-wider font-semibold">
        No Spam • Expert Counselling
      </p>
      </div>
    </form>
  );
}

export default function EnquiryForm() {
  return (
    <ClientOnly fallback={<EnquiryFormSkeleton />}>
      <EnquiryFormInner />
    </ClientOnly>
  );
}
