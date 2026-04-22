import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import Link from 'next/link';
import styles from './Neet.module.css';

export const metadata = {
  title: `Best NEET Coaching in Begusarai | ${INSTITUTE.name}`,
  description: `Join the best NEET coaching institute in Begusarai. ${INSTITUTE.name} provides expert faculty, NCERT-focused study material, and regular mock tests for medical aspirants.`,
};

export default function NEETCoachingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Best NEET Coaching in <span className={styles.highlight}>Begusarai</span></h1>
          <p className={styles.subtitle}>Your gateway to top medical colleges with NCERT-focused curriculum and expert mentorship.</p>
          <div className={styles.ctaGroup}>
            <Link href="/admission" className={styles.btnPrimary}>Apply for NEET Batch</Link>
            <Link href="/free-test" className={styles.btnSecondary}>Take Free Demo Test</Link>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Why Choose LakshyaMarch for NEET-UG?</h2>
            <p>
              The competition for medical seats is fierce, and cracking NEET requires absolute mastery of NCERT along with speed and accuracy. At {INSTITUTE.name}, we have tailored our NEET curriculum to ensure our students in Begusarai achieve top percentiles.
            </p>
            <ul>
              <li><strong>Specialized Medical Faculty:</strong> Learn Biology (Botany & Zoology), Physics, and Chemistry from subject matter experts who understand the NEET pattern inside out.</li>
              <li><strong>NCERT-Centric Approach:</strong> 100% adherence to the NCERT syllabus with in-depth line-by-line analysis.</li>
              <li><strong>Extensive Mock Tests:</strong> OMR-based offline testing to simulate the real exam environment and improve time management.</li>
              <li><strong>Personalized Mentorship:</strong> Continuous monitoring of student progress and emotional support throughout the rigorous preparation phase.</li>
            </ul>
            
            <h3>Our NEET Programs</h3>
            <ul>
              <li><strong>Two-Year Foundation Course (Class 11):</strong> Step-by-step preparation covering Class 11 and 12 syllabus comprehensively.</li>
              <li><strong>Target Batch (Droppers):</strong> Intensive preparation with rigorous testing and doubt clearing.</li>
            </ul>

            <h3>Frequently Asked Questions</h3>
            <p><strong>Q: Is LakshyaMarch good for NEET coaching in Begusarai?</strong><br/>
            A: Yes, it is the top choice. We have specialized batches strictly adhering to the latest NTA NEET syllabus, ensuring maximum selections from the Begusarai area.</p>
            <p><strong>Q: Do you provide NCERT based study material?</strong><br/>
            A: Absolutely. Our study material is meticulously designed to cover every single concept, diagram, and summary of the NCERT Biology, Physics, and Chemistry textbooks.</p>
            <p><strong>Q: How frequent are the mock tests?</strong><br/>
            A: We conduct minor tests every 15 days and major full-syllabus tests monthly to benchmark your performance on a national level.</p>

            <div className={styles.bottomCta}>
              <h3>Secure your White Coat!</h3>
              <p>Join the leading NEET coaching institute in Begusarai today.</p>
              <Link href={`tel:+91${INSTITUTE.primaryPhone}`} className={styles.callBtn}>Call {INSTITUTE.primaryPhone}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
