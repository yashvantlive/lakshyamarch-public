import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import Link from 'next/link';
import styles from './IitJee.module.css';

export const metadata = {
  title: `Best IIT JEE Coaching in Begusarai | ${INSTITUTE.name}`,
  description: `Prepare for IIT JEE Main and Advanced with the best faculty at ${INSTITUTE.name} in Begusarai. We offer comprehensive study material, regular tests, and proven results.`,
};

export default function IITJEECoachingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Best IIT JEE Coaching in <span className={styles.highlight}>Begusarai</span></h1>
          <p className={styles.subtitle}>Cracking JEE Main & Advanced made possible with expert guidance and rigorous preparation strategies.</p>
          <div className={styles.ctaGroup}>
            <Link href="/admission" className={styles.btnPrimary}>Apply for JEE Batch</Link>
            <Link href="/free-test" className={styles.btnSecondary}>Take Free Demo Test</Link>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Why Choose LakshyaMarch for IIT-JEE?</h2>
            <p>
              Clearing the prestigious IIT-JEE exam requires more than just hard work; it demands a strategic approach, expert mentorship, and continuous evaluation. At {INSTITUTE.name}, we provide the perfect ecosystem for JEE aspirants in Begusarai.
            </p>
            <ul>
              <li><strong>Highly Experienced Faculty:</strong> Our Physics, Chemistry, and Mathematics departments are led by educators who have successfully mentored thousands of IITians.</li>
              <li><strong>Targeted Study Material:</strong> From basic concept builders to advanced level problems, our DPPs are aligned with the latest JEE pattern.</li>
              <li><strong>Doubt Clearing Sessions:</strong> 1-on-1 personalized doubt solving to ensure conceptual clarity.</li>
              <li><strong>All-India Test Series:</strong> Benchmark your preparation against the best minds.</li>
            </ul>
            
            <h3>Our JEE Programs</h3>
            <ul>
              <li><strong>Two-Year Foundation Course (Class 11):</strong> Ideal for early starters wanting to build a strong base.</li>
              <li><strong>Target Batch (Droppers):</strong> Intensive preparation with a focus on problem-solving and speed.</li>
            </ul>

            <h3>Frequently Asked Questions</h3>
            <p><strong>Q: Why is LakshyaMarch the best for IIT-JEE in Begusarai?</strong><br/>
            A: With an elite faculty pool, high-quality study materials, and rigorous mock tests aligned with NTA standards, we provide the best ecosystem for JEE aspirants in Begusarai.</p>
            <p><strong>Q: When do the new JEE batches start for Begusarai students?</strong><br/>
            A: New batches for class 11th, 12th, and droppers commence in April and June. Register early via our Admission portal.</p>
            <p><strong>Q: Can average students clear IIT-JEE studying here?</strong><br/>
            A: Yes. We focus on building fundamentals from the ground up and provide personalized doubt-clearing sessions to ensure every student succeeds.</p>

            <div className={styles.bottomCta}>
              <h3>Don't compromise on your IIT dream</h3>
              <p>Join the top JEE coaching institute in Begusarai.</p>
              <Link href={`tel:+91${INSTITUTE.primaryPhone}`} className={styles.callBtn}>Call {INSTITUTE.primaryPhone}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
