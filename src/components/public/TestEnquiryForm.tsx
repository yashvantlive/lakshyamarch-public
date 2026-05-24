"use client";

import { useState } from "react";
import { User, Phone, CheckCircle2, AlertCircle, Loader2, GraduationCap, School, Target } from "lucide-react";
import { useRouter } from "next/navigation";
import { erpApiPath } from "@/lib/erpApi";

export default function TestEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Selected Target determines class options
  const [targetExam, setTargetExam] = useState("");
  // Determine standard classes based on target
  const isSchool = targetExam === "Foundation/NTSE";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      targetExam: fd.get("targetExam") as string,
      className: fd.get("className") as string,
      schoolName: fd.get("schoolName") as string,
    };

    try {
      const res = await fetch(erpApiPath("/api/test-enquiries"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.refresh();
      }, 5000);
      (e.target as HTMLFormElement).reset();
      setTargetExam("");
    } catch (err) {
      const e = err as any;
      setError(e.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
      {/* Top Banner inside form */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 to-orange-500" />
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-black text-slate-900 leading-tight">
          Register for <span className="text-amber-500">Free Test</span>
        </h3>
        <p className="text-sm text-slate-500 mt-2 font-medium">Limited slots. Fill the form to secure your seat.</p>
      </div>

      {success && (
        <div className="mb-6 bg-emerald-50 text-emerald-700 p-4 rounded-xl flex items-start gap-3 border border-emerald-100 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-extrabold">Registration Successful!</p>
            <p className="mt-1 opacity-90">Thank you. Our team will contact you on WhatsApp with the test schedule.</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-xl flex items-start gap-3 border border-red-100">
          <AlertCircle className="shrink-0 mt-0.5" size={18} />
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
            Student Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <User size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              name="name"
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
              placeholder="e.g. Rahul Kumar"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
              <Phone size={16} className="mr-1" /> +91
            </div>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              className="w-full pl-[4.5rem] pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
              placeholder="10-digit number"
            />
          </div>
        </div>

        {/* Target */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
            Target Exam <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Target size={16} className="text-slate-400" />
            </div>
            <select
              name="targetExam"
              required
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all appearance-none"
            >
              <option value="" disabled>Select target exam...</option>
              <option value="NEET">NEET (Medical)</option>
              <option value="JEE">JEE (Engineering)</option>
              <option value="Foundation/NTSE">Foundation / NTSE</option>
            </select>
          </div>
        </div>

        {/* Class */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
            Present Class <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <GraduationCap size={16} className="text-slate-400" />
            </div>
            <select
              name="className"
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all appearance-none"
            >
              <option value="" disabled>Select your class...</option>
              {isSchool ? (
                <>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                </>
              ) : (
                <>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Dropper">Dropper</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* School Name */}
        <div>
          <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
            School / College Name <span className="text-slate-400 font-normal lowercase">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <School size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              name="schoolName"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
              placeholder="Your current school"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || success}
          className="w-full h-12 mt-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold rounded-xl text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center transition-all disabled:opacity-70"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Submit Registration"}
        </button>

        <p className="text-center text-[10px] sm:text-xs text-slate-400 font-medium mt-4">
          By registering, you agree to receive exam updates on WhatsApp.
        </p>
      </form>
    </div>
  );
}
