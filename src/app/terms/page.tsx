import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import styles from './Terms.module.css';

export const metadata = {
  title: `Terms of Use | ${INSTITUTE.name}`,
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section} style={{ paddingTop: '8rem' }}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Terms of Use</h2>
            <p>Last updated: April 2026</p>
            <p>
              By accessing the website at lakshyamarch.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <h3>Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on {INSTITUTE.name}'s website for personal, non-commercial transitory viewing only.
            </p>
            <h3>Disclaimer</h3>
            <p>
              The materials on {INSTITUTE.name}'s website are provided on an 'as is' basis. {INSTITUTE.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <h3>Fee and Refund Policy</h3>
            <p>
              All fees once paid are non-refundable unless explicitly stated otherwise in a specific program brochure. Admission is granted subject to seat availability and management approval.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
