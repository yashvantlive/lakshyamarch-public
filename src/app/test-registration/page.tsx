"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Turnstile } from "@marsidev/react-turnstile";
import {
  User, Users, Phone, CheckCircle2, AlertCircle, Loader2,
  GraduationCap, School, Target, Sparkles, BookOpen, Trophy, Info
} from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import { erpApiPath } from "@/lib/erpApi";

function RegistrationFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const [testType, setTestType] = useState("Free Mock Test");
  const [targetExam, setTargetExam] = useState("");
  const [className, setClassName] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const isSchool = targetExam === "Foundation/NTSE";

  // Pre-select test type based on URL parameter
  useEffect(() => {
    const testParam = searchParams.get("test");
    if (testParam === "scholarship") {
      setTestType("Scholarship Admission Test (SAT)");
    } else if (testParam === "free") {
      setTestType("Free Mock Test");
    } else if (testParam === "neet") {
      setTestType("Think NEET Test Series");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!token) {
      setError("Please complete the security check.");
      setLoading(false);
      return;
    }

    const fd = new FormData(e.currentTarget);
    const data = {
      name: (fd.get("name") as string).trim(),
      parentName: (fd.get("parentName") as string || "").trim(),
      phone: (fd.get("phone") as string).trim(),
      testType: testType,
      targetExam: fd.get("targetExam") as string,
      className: fd.get("className") as string,
      schoolName: (fd.get("schoolName") as string).trim(),
      turnstileToken: token,
    };

    try {
      const res = await fetch(erpApiPath("/api/test-enquiries"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (res.status === 409 || (errData.error && errData.error.includes("E11000") && errData.error.includes("phone"))) {
          throw new Error("This phone number is already registered for a test. Please use a different number or visit the office.");
        }
        throw new Error(errData.error || "Failed to submit registration");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.refresh();
      }, 5000);
      (e.target as HTMLFormElement).reset();
      setTargetExam("");
      setClassName("");
      setSchoolName("");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl w-full">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-brand-xl border border-ink-100 relative overflow-hidden">
        {/* Top Banner Accent */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${
          testType === "Think NEET Test Series"
            ? "from-brand-green-600 to-brand-green-700"
            : testType === "Scholarship Admission Test (SAT)"
              ? "from-brand-gold-500 to-brand-gold-600"
              : "from-brand-red-600 to-brand-red-700"
        }`} />

        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink-50">
            {testType === "Think NEET Test Series" ? (
              <BookOpen className="text-brand-green-600" size={24} />
            ) : testType === "Scholarship Admission Test (SAT)" ? (
              <Trophy className="text-brand-gold-500" size={24} />
            ) : (
              <Target className="text-brand-red-600" size={24} />
            )}
          </div>
          <h2 className="text-2xl font-display font-extrabold text-ink-900 leading-tight">
            Register for test
          </h2>
          <p className="text-sm text-ink-500 mt-2 font-medium">
            Fill the form below to lock in your slot.
          </p>
        </div>

        {success && (
          <div className="mb-6 bg-emerald-50 text-emerald-700 p-4 rounded-xl flex items-start gap-3 border border-emerald-100 animate-in fade-in slide-in-from-bottom-4">
            <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-extrabold">Registration Successful!</p>
              <p className="mt-1 opacity-90">Your test slot is reserved. Our academic coordinator will contact you on WhatsApp with date details.</p>
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
          {/* Test Type Select */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
              Select Test / Exam <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                {testType === "Think NEET Test Series" ? (
                  <BookOpen size={16} />
                ) : testType === "Scholarship Admission Test (SAT)" ? (
                  <Trophy size={16} />
                ) : (
                  <Target size={16} />
                )}
              </div>
              <select
                value={testType}
                onChange={(e) => setTestType(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all appearance-none"
              >
                <option value="Free Mock Test">Free Diagnostic Mock Test / LM OTC (All Classes)</option>
                <option value="Scholarship Admission Test (SAT)">Scholarship Admission Test (SAT - Win up to 100% waiver)</option>
                <option value="Think NEET Test Series">Think NEET Test Series (Paid Series)</option>
              </select>
            </div>
          </div>

          {/* Paid Test Series Note */}
          {testType === "Think NEET Test Series" && (
            <div className="bg-brand-gold-50/50 border border-brand-gold-200/50 rounded-xl p-4 flex gap-3 text-xs text-brand-gold-800 font-medium animate-in fade-in slide-in-from-top-2">
              <Info className="shrink-0 text-brand-gold-600 mt-0.5" size={16} />
              <div>
                <p className="font-extrabold text-brand-gold-900">Paid Test Series</p>
                <p className="mt-1 leading-relaxed text-brand-gold-700">Please note that Think NEET is a paid mock series. The exact package structure and payment will be finalized offline at our Begusarai Center.</p>
              </div>
            </div>
          )}

          {/* Student Name */}
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
                className="w-full pl-10 pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Parents Name */}
          <div>
            <label className="block text-xs font-extrabold text-slate-700 mb-1.5 uppercase tracking-wide">
              Parents Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Users size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                name="parentName"
                required
                className="w-full pl-10 pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all"
                placeholder="Enter your father name"
              />
            </div>
          </div>

          {/* WhatsApp Phone */}
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
                className="w-full pl-[4.5rem] pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all"
                placeholder="10-digit number"
              />
            </div>
          </div>

          {/* Target Exam */}
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
                className="w-full pl-10 pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all appearance-none"
              >
                <option value="" disabled>Select target exam...</option>
                {testType === "Think NEET Test Series" ? (
                  <option value="NEET">NEET (Medical)</option>
                ) : (
                  <>
                    <option value="NEET">NEET (Medical)</option>
                    <option value="JEE">JEE (Engineering)</option>
                    <option value="Foundation/NTSE">Foundation / NTSE / Olympiad</option>
                  </>
                )}
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
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all appearance-none"
              >
                <option value="" disabled>Select your class...</option>
                {isSchool ? (
                  <>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
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
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink-400">
                <School size={18} strokeWidth={1.5} />
              </div>
              <input
                type="text"
                name="schoolName"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-ink-50 border border-ink-200 rounded-xl text-sm font-medium text-ink-900 focus:bg-white focus:ring-2 focus:ring-brand-red-500/20 focus:border-brand-red-500 outline-none transition-all"
                placeholder="Your current school"
              />
            </div>
          </div>

          {/* Security Turnstile */}
          <div className="flex justify-center pt-2">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
              onSuccess={setToken}
            />
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className={`w-full h-12 mt-2 text-white font-extrabold rounded-xl text-sm flex items-center justify-center transition-all disabled:opacity-70 ${
              testType === "Think NEET Test Series"
                ? "bg-brand-green-600 hover:bg-brand-green-700 shadow-brand-md"
                : testType === "Scholarship Admission Test (SAT)"
                  ? "bg-brand-gold-500 hover:bg-brand-gold-600 text-ink-950 shadow-brand-md"
                  : "bg-brand-red-600 hover:bg-brand-red-700 shadow-brand-md"
            }`}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : "Submit Test Registration"}
          </button>

          <p className="text-center text-[10px] sm:text-xs text-slate-400 font-medium mt-4">
            By registering, you agree to receive updates about the test schedule via WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function TestRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <PublicNavbar />

      <main className="flex-1 py-16 sm:py-24 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold-500/30 bg-brand-gold-500/10 text-brand-gold-400 text-xs font-bold mb-6">
              <Sparkles size={14} className="animate-pulse" />
              LakshyaMarch Testing Portal
            </div>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              Take Your Next Step with <span className="text-brand-gold-400">LakshyaMarch</span>
            </h1>
            <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-white/70">
              Register for our various test series and diagnostic exams. Prepare, evaluate, and benchmark your progress under the guidance of our IIT/NIT alumni team.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-brand-gold-400">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Scholarship Admission Test (SAT)</h4>
                  <p className="font-sans text-xs text-white/60 mt-1">Unlock up to 100% tuition fee waiver for classroom programs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-brand-red-400">
                  <Target size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Free Diagnostic Mock Test / LM OTC</h4>
                  <p className="font-sans text-xs text-white/60 mt-1">Evaluate chapter-wise strengths and weaknesses, or participate in the monthly Open Test Challenge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-brand-green-400">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Think NEET Test Series</h4>
                  <p className="font-sans text-xs text-white/60 mt-1">Premium NCERT-based medical mock test series with comprehensive feedback.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Suspense fallback={
              <div className="bg-white p-10 rounded-2xl shadow-brand-xl border border-ink-100 flex items-center justify-center min-h-[400px]">
                <Loader2 className="animate-spin text-brand-gold-400" size={32} />
              </div>
            }>
              <RegistrationFormContent />
            </Suspense>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
