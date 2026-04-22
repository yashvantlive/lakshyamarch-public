import React from 'react';
import Link from 'next/link';
import { INSTITUTE } from '@/lib/siteData';
import styles from './StudyMaterial.module.css';

export const metadata = {
  title: `Study Material | ${INSTITUTE.name}`,
  description: `Access premium study material, notes, and daily practice problems (DPPs) curated by expert faculty.`,
};

export default function StudyMaterialIndex() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Free Study <span className={styles.highlight}>Material</span></h1>
          <p className={styles.subtitle}>Empower your preparation with our expertly curated resources for JEE, NEET, and Board Exams.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/study-material/notes" className={styles.card}>
              <div className={styles.iconBox}>📝</div>
              <h2 className={styles.cardTitle}>Class Notes</h2>
              <p className={styles.cardDesc}>Comprehensive handwritten and digital notes covering the complete syllabus for Physics, Chemistry, Math, and Biology.</p>
              <span className={styles.btn}>Browse Notes →</span>
            </Link>

            <Link href="/study-material/dpps" className={styles.card}>
              <div className={styles.iconBox}>📑</div>
              <h2 className={styles.cardTitle}>Daily Practice Problems (DPPs)</h2>
              <p className={styles.cardDesc}>Topic-wise practice questions to strengthen your concepts and improve problem-solving speed.</p>
              <span className={styles.btn}>Access DPPs →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
