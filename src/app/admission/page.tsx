import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import AdmissionEnquiryForm from '@/components/forms/AdmissionEnquiryForm';
import styles from './Admission.module.css';

export const metadata = {
  title: `Admission | Apply to ${INSTITUTE.name}`,
  description: `Secure your seat for the upcoming session at ${INSTITUTE.name}.`,
};

export default function AdmissionPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Apply for <span className={styles.highlight}>Admission</span></h1>
          <p className={styles.subtitle}>Begin your journey towards academic excellence. Seats are limited.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.infoCol}>
              <h2 className={styles.heading}>Admission Process</h2>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>1</div>
                  <div>
                    <h3 className={styles.stepTitle}>Submit Enquiry</h3>
                    <p className={styles.stepDesc}>Fill out the online application form with your basic details.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>2</div>
                  <div>
                    <h3 className={styles.stepTitle}>Free Counselling</h3>
                    <p className={styles.stepDesc}>Our expert counsellors will contact you to understand your goals and suggest the best batch.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>3</div>
                  <div>
                    <h3 className={styles.stepTitle}>Confirm Seat</h3>
                    <p className={styles.stepDesc}>Submit required documents and complete the fee payment to secure your admission.</p>
                  </div>
                </div>
              </div>

              <h2 className={styles.heading} style={{ marginTop: '3rem' }}>Required Documents</h2>
              <ul className={styles.docList}>
                <li><span className={styles.docIcon}>📄</span> Previous class marksheet</li>
                <li><span className={styles.docIcon}>📄</span> Student Aadhar Card</li>
                <li><span className={styles.docIcon}>📄</span> Parent / Guardian Aadhar Card</li>
                <li><span className={styles.docIcon}>📸</span> 2 Passport-size photographs</li>
              </ul>
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
