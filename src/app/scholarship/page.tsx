import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';
import styles from './Scholarship.module.css';

export const metadata = {
  title: `Scholarship & LNAT | ${INSTITUTE.name}`,
  description: `Get up to 100% scholarship through LakshyaMarch National Admission Test (LNAT).`,
};

export default function ScholarshipPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>LakshyaMarch <span className={styles.highlight}>Scholarship</span></h1>
          <p className={styles.subtitle}>Up to 100% fee waiver through LNAT (LakshyaMarch National Admission Test).</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.infoCol}>
              <h2 className={styles.heading}>About LNAT</h2>
              <p className={styles.stepDesc} style={{ marginBottom: '2rem' }}>
                At LakshyaMarch, we believe that financial constraints should never come in the way of a deserving student's education. 
                LNAT is conducted to identify and nurture talent by providing them with up to 100% scholarships on tuition fees.
              </p>

              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>📝</div>
                  <div>
                    <h3 className={styles.stepTitle}>Eligibility</h3>
                    <p className={styles.stepDesc}>Students currently studying in Class 6 to 12 are eligible to appear for the test.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>🏆</div>
                  <div>
                    <h3 className={styles.stepTitle}>Scholarship Criteria</h3>
                    <p className={styles.stepDesc}>Fee waivers are awarded based on the student's percentile in LNAT and an interview round.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formCol}>
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
