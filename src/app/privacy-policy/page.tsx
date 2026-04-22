import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import styles from './Privacy.module.css';

export const metadata = {
  title: `Privacy Policy | ${INSTITUTE.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section} style={{ paddingTop: '8rem' }}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Privacy Policy</h2>
            <p>Last updated: April 2026</p>
            <p>
              At {INSTITUTE.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website lakshyamarch.com or use our mobile application.
            </p>
            <h3>Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, phone number, and academic details when you register for an account, apply for admission, or participate in our online tests.
            </p>
            <h3>How We Use Your Information</h3>
            <ul>
              <li>To provide, operate, and maintain our educational services.</li>
              <li>To process your admission and communicate with you regarding your application.</li>
              <li>To send administrative information, such as updates, security alerts, and support messages.</li>
            </ul>
            <h3>Contact Us</h3>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: {INSTITUTE.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
