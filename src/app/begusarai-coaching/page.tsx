import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import Link from 'next/link';
import styles from './BegusaraiCoaching.module.css';

export const metadata = {
  title: `Best Coaching Institute in Begusarai | ${INSTITUTE.name}`,
  description: `Looking for the best coaching in Begusarai? ${INSTITUTE.name} offers top-tier faculty, premium study material, and proven results for JEE, NEET & Boards.`,
};

export default function BegusaraiCoachingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Best Coaching Institute in <span className={styles.highlight}>Begusarai</span></h1>
          <p className={styles.subtitle}>Empowering students with quality education, expert faculty, and remarkable results.</p>
          <div className={styles.ctaGroup}>
            <Link href="/admission" className={styles.btnPrimary}>Apply for Admission</Link>
            <Link href="/contact" className={styles.btnSecondary}>Contact Us</Link>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Why LakshyaMarch is the Top Choice in Begusarai?</h2>
            <p>
              When it comes to competitive exam preparation in Begusarai, {INSTITUTE.name} stands as a beacon of excellence. 
              We have consistently produced top rankers in JEE, NEET, and Board examinations.
            </p>
            <ul>
              <li><strong>Expert Faculty:</strong> Learn from the best educators who have years of experience guiding students to top IITs and Medical colleges.</li>
              <li><strong>Comprehensive Study Material:</strong> Our DPPs and class notes are meticulously designed to cover the entire syllabus with varying difficulty levels.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> A conducive learning environment that promotes focus and healthy competition.</li>
              <li><strong>Regular Testing & Analysis:</strong> Weekly and monthly tests with detailed performance analytics.</li>
            </ul>
            
            <h3>Our Programs</h3>
            <p>We offer specialized programs for different needs:</p>
            <ul>
              <li><strong>LM Integrated School (Class 6-10):</strong> A strong foundation for future competitive exams along with board preparation.</li>
              <li><strong>IIT-JEE Coaching (Class 11, 12 & Droppers):</strong> Rigorous training to crack JEE Main and Advanced.</li>
              <li><strong>NEET Coaching (Class 11, 12 & Droppers):</strong> Focused preparation to secure a seat in top medical colleges.</li>
            </ul>

            <div className={styles.bottomCta}>
              <h3>Ready to start your journey?</h3>
              <p>Join the best coaching institute in Begusarai today.</p>
              <Link href={`tel:+91${INSTITUTE.primaryPhone}`} className={styles.callBtn}>Call {INSTITUTE.primaryPhone}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
