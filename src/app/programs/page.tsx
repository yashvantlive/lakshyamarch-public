import React from 'react';
import { INSTITUTE, PROGRAMS } from '@/lib/siteData';
import styles from './Programs.module.css';

export const metadata = {
  title: `Our Programs | ${INSTITUTE.name}`,
  description: `Explore our Schooling and Coaching programs for JEE, NEET, and Board Exams at ${INSTITUTE.name}.`,
};

export default function ProgramsPage() {
  return (
    <div className={styles.programsPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Academic <span className={styles.highlight}>Programs</span></h1>
          <p className={styles.subtitle}>Comprehensive education solutions designed for your success. Choose between our Integrated School and Dedicated Coaching wings.</p>
        </div>
      </div>

      <section id="school" className={styles.wingSection}>
        <div className={styles.container}>
          <div className={styles.wingHeader}>
            <div className={styles.iconBox}>🏫</div>
            <div>
              <h2 className={styles.wingTitle}>{PROGRAMS.school.name}</h2>
              <p className={styles.wingTagline}>{PROGRAMS.school.tagline}</p>
            </div>
          </div>
          <p className={styles.wingDesc}>{PROGRAMS.school.description}</p>
          
          <h3 className={styles.batchTitle}>Available Batches (2026-27)</h3>
          <div className={styles.grid}>
            {PROGRAMS.school.batches.map(batch => (
              <div key={batch.id} className={styles.batchCard}>
                <h4 className={styles.batchName}>{batch.name}</h4>
                <p className={styles.batchTarget}>{batch.target}</p>
                <div className={styles.batchDetails}>
                  <div className={styles.detailRow}>
                    <span>Starts:</span> <strong>{batch.startDate}</strong>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Mode:</span> <strong>{batch.type}</strong>
                  </div>
                </div>
                <a href={`/admission?batch=${batch.id}`} className={styles.applyBtn}>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coaching" className={`${styles.wingSection} ${styles.altBg}`}>
        <div className={styles.container}>
          <div className={styles.wingHeader}>
            <div className={styles.iconBox}>🎯</div>
            <div>
              <h2 className={styles.wingTitle}>{PROGRAMS.coaching.name}</h2>
              <p className={styles.wingTagline}>{PROGRAMS.coaching.tagline}</p>
            </div>
          </div>
          <p className={styles.wingDesc}>{PROGRAMS.coaching.description}</p>
          
          <h3 className={styles.batchTitle}>Available Batches (2026-27)</h3>
          <div className={styles.grid}>
            {PROGRAMS.coaching.batches.map(batch => (
              <div key={batch.id} className={styles.batchCard}>
                <h4 className={styles.batchName}>{batch.name}</h4>
                <p className={styles.batchTarget}>{batch.target}</p>
                <div className={styles.batchDetails}>
                  <div className={styles.detailRow}>
                    <span>Starts:</span> <strong>{batch.startDate}</strong>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Mode:</span> <strong>{batch.type}</strong>
                  </div>
                </div>
                <a href={`/admission?batch=${batch.id}`} className={styles.applyBtn}>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
