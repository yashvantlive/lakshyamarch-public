"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Send, Loader2, AlertCircle, CheckCircle } from "lucide-react";
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
  const [token,        setToken]        = useState("");

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
    if (!token) {
      setError("Please complete the security check.");
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
          turnstileToken: token,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 409 || (data.error && data.error.includes("E11000") && data.error.includes("phone"))) {
          throw new Error("This phone number is already registered. Please use a different one.");
        }
        throw new Error(data.error || "Failed to submit");
      }
      setSuccess(true);
      setName(""); setPhone(""); setProgram(""); setClassApplied("");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setSaving(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg border border-ink-200 p-8 text-center max-w-md mx-auto shadow-brand-xl">
        <div className="h-16 w-16 rounded-full bg-brand-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-brand-green-600" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-display font-bold text-ink-900 mb-2">Application Submitted</h3>
        <p className="text-sm text-ink-500 mb-5">
          Aapki application receive ho gayi. Hamare counsellor 24 hours mein call karenge.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm font-medium text-brand-red-600 hover:text-brand-red-700 underline underline-offset-4 transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md overflow-hidden rounded-lg border border-ink-200 bg-white shadow-brand-xl"
    >
      {/* Official admission-form header bar */}
      <div className="bg-brand-blue-800 px-6 py-4 sm:px-8">
        <p className="font-sans text-[0.625rem] font-bold uppercase tracking-[0.2em] text-brand-gold-400">
          Admission Form · Session 2026–27
        </p>
        <h3 className="mt-1 font-display text-xl font-extrabold text-white">Apply for Admission</h3>
      </div>

      <div className="p-6 sm:p-8">
      <div className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="block text-[11px] font-bold text-ink-500 uppercase tracking-wider mb-1.5">
            Student Name <span className="text-brand-red-600">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Apna poora naam likhein"
            className="w-full h-11 px-4 rounded-md bg-ink-50 border border-ink-200 text-ink-900 placeholder:text-ink-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-500/30 focus:border-brand-red-500 transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[11px] font-bold text-ink-500 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-brand-red-600">*</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile number"
            maxLength={10}
            className="w-full h-11 px-4 rounded-md bg-ink-50 border border-ink-200 text-ink-900 placeholder:text-ink-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-500/30 focus:border-brand-red-500 transition-all"
          />
        </div>

        {/* Program + Class */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-ink-500 uppercase tracking-wider mb-1.5">
              Program <span className="text-brand-red-600">*</span>
            </label>
            <select
              value={program}
              onChange={(e) => { setProgram(e.target.value as any); setClassApplied(""); }}
              className="w-full h-11 px-3 rounded-md bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-500/30 focus:border-brand-red-500 transition-all appearance-none cursor-pointer"
            >
              <option value="">Select...</option>
              <option value="coaching">Coaching (7-12)</option>
              <option value="school">School (6-10)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-ink-500 uppercase tracking-wider mb-1.5">
              Class <span className="text-brand-red-600">*</span>
            </label>
            <select
              value={classApplied}
              onChange={(e) => setClassApplied(e.target.value)}
              disabled={!program}
              className="w-full h-11 px-3 rounded-md bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red-500/30 focus:border-brand-red-500 transition-all appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="">Class</option>
              {classOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-4 text-[13px] font-medium text-brand-red-700 bg-brand-red-50 rounded-lg px-3 py-2 border border-brand-red-100 flex items-center gap-2">
          <AlertCircle size={15} strokeWidth={1.75} className="shrink-0" /> {error}
        </p>
      )}

      <div className="flex justify-center pt-2">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
          onSuccess={setToken}
        />
      </div>

      <button
        type="submit"
        disabled={saving}
        className="mt-6 w-full h-12 rounded-md bg-brand-red-600 hover:bg-brand-red-700 text-white font-display font-semibold tracking-wide text-sm shadow-brand-md hover:shadow-brand-glow-red disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        {saving ? (
          <><Loader2 size={16} className="animate-spin" /> Submitting...</>
        ) : (
          <><Send size={15} /> Apply for Admission</>
        )}
      </button>

      <p className="mt-4 text-[10px] text-ink-400 text-center uppercase tracking-wider font-semibold">
        Free Counselling • No Obligation • Limited Seats
      </p>
      </div>
    </form>
  );
}
