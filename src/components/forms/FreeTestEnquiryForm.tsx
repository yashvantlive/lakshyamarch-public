"use client";

import { useState } from "react";
import styles from './AdmissionEnquiryForm.module.css';

export default function FreeTestEnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [school, setSchool] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !currentClass || !school.trim()) {
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
      const res = await fetch(`${baseUrl}/api/test-enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: name.trim(),
          phone: phone.trim(),
          currentClass,
          schoolName: school.trim(),
          status: "pending",
          createdAt: Date.now(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      setName(""); setPhone(""); setCurrentClass(""); setSchool("");
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
        <h3>Test Registration Successful!</h3>
        <p>Our team will contact you shortly with your test schedule and details.</p>
        <button onClick={() => setSuccess(false)} className={styles.resetBtn}>Register another student</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3>Register for Free Demo Test</h3>
        <p>Assess your current preparation level instantly.</p>
      </div>

      <div className={styles.inputGroup}>
        <label>Student Name <span>*</span></label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" />
      </div>

      <div className={styles.inputGroup}>
        <label>Mobile Number <span>*</span></label>
        <input type="tel" maxLength={10} value={phone} onChange={e => setPhone(e.target.value)} placeholder="10-digit number" />
      </div>

      <div className={styles.inputGroup}>
        <label>Current School <span>*</span></label>
        <input type="text" value={school} onChange={e => setSchool(e.target.value)} placeholder="School Name" />
      </div>

      <div className={styles.inputGroup}>
        <label>Current Class <span>*</span></label>
        <select value={currentClass} onChange={e => setCurrentClass(e.target.value)}>
          <option value="">Select Class</option>
          <option value="Class 6">Class 6</option>
          <option value="Class 7">Class 7</option>
          <option value="Class 8">Class 8</option>
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
          <option value="Dropper">Dropper</option>
        </select>
      </div>

      {error && <div className={styles.errorBox}>{error}</div>}

      <button type="submit" disabled={saving} className={styles.submitBtn}>
        {saving ? "Registering..." : "Register Now"}
      </button>
    </form>
  );
}
