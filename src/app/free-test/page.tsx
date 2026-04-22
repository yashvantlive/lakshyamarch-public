import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import FreeTestEnquiryForm from '@/components/forms/FreeTestEnquiryForm';
import styles from './FreeTest.module.css';

export const metadata = {
  title: `Free Demo Test | ${INSTITUTE.name}`,
  description: `Register for a free demo test at ${INSTITUTE.name} to assess your preparation level.`,
};

export default function FreeTestPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Free <span className={styles.highlight}>Demo Test</span></h1>
          <p className={styles.subtitle}>Not sure where you stand? Take our free diagnostic test to evaluate your current level.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.infoCol}>
              <h2 className={styles.heading}>Why Take the Free Test?</h2>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>🎯</div>
                  <div>
                    <h3 className={styles.stepTitle}>Identify Strengths & Weaknesses</h3>
                    <p className={styles.stepDesc}>Get a detailed analysis of which topics you are good at and which need improvement.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>📊</div>
                  <div>
                    <h3 className={styles.stepTitle}>All-India Level Benchmarking</h3>
                    <p className={styles.stepDesc}>See where you stand among your peers with our standardized testing methodology.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNum}>🎓</div>
                  <div>
                    <h3 className={styles.stepTitle}>Expert Academic Counselling</h3>
                    <p className={styles.stepDesc}>Post-test, our senior faculty will guide you on the right batch and strategy for your goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formCol}>
              <FreeTestEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
