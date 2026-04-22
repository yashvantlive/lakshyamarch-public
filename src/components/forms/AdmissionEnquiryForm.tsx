"use client";

import { useState } from "react";
import { PROGRAMS } from "@/lib/siteData";
import styles from './AdmissionEnquiryForm.module.css';

export default function AdmissionEnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState<"school" | "coaching" | "">("");
  const [classApplied, setClassApplied] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const classOptions =
    program === "school" ? PROGRAMS.school.classes :
    program === "coaching" ? PROGRAMS.coaching.classes : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !classApplied || !program) {
      setError("Please fill all compulsory fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSaving(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_ERP_API_URL || 'https://admin.lakshyamarch.com';
      const res = await fetch(`${baseUrl}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: name.trim(),
          phone: phone.trim(),
          classApplied,
          targetProgram: program === "school" ? "LM Integrated School" : "LakshyaMarch Coaching",
          instituteCategory: program,
          source: "admission_page",
          status: "new",
          createdAt: Date.now(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      setName(""); setPhone(""); setProgram(""); setClassApplied("");
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setSaving(false);
    }
  };

  if (success) {
    return (
      <div className={styles.successBox}>
        <div className={styles.checkIcon}>✓</div>
        <h3>Application Submitted!</h3>
        <p>Your application has been received. Our counsellor will contact you within 24 hours.</p>
        <button onClick={() => setSuccess(false)} className={styles.resetBtn}>Submit another application</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3>Apply for Admission</h3>
        <p>Session 2026-27 — Free Counselling</p>
      </div>

      <div className={styles.inputGroup}>
        <label>Student Name <span>*</span></label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
      </div>

      <div className={styles.inputGroup}>
        <label>Mobile Number <span>*</span></label>
        <input type="tel" maxLength={10} value={phone} onChange={e => setPhone(e.target.value)} placeholder="10-digit number" />
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <label>Program <span>*</span></label>
          <select value={program} onChange={e => { setProgram(e.target.value as any); setClassApplied(""); }}>
            <option value="">Select...</option>
            <option value="coaching">Coaching (7-12)</option>
            <option value="school">School (6-10)</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Class <span>*</span></label>
          <select value={classApplied} onChange={e => setClassApplied(e.target.value)} disabled={!program}>
            <option value="">Class</option>
            {classOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {error && <div className={styles.errorBox}>{error}</div>}

      <button type="submit" disabled={saving} className={styles.submitBtn}>
        {saving ? "Submitting..." : "Apply for Admission"}
      </button>
    </form>
  );
}
