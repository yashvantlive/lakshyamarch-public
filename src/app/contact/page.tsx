import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import styles from './Contact.module.css';

export const metadata = {
  title: `Contact Us | ${INSTITUTE.name}`,
  description: `Get in touch with ${INSTITUTE.name}. Address, phone numbers, and location map.`,
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contact <span className={styles.highlight}>Us</span></h1>
          <p className={styles.subtitle}>We are here to help and answer any questions you might have.</p>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.infoCard}>
              <h2 className={styles.cardTitle}>Get in Touch</h2>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>📍</div>
                <div>
                  <h3>Our Campus</h3>
                  <p>{INSTITUTE.address.full}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>📞</div>
                <div>
                  <h3>Phone Numbers</h3>
                  <div className={styles.phoneList}>
                    {INSTITUTE.phones.map(phone => (
                      <a key={phone} href={`tel:${phone}`}>{phone}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>✉️</div>
                <div>
                  <h3>Email Address</h3>
                  <a href={`mailto:${INSTITUTE.email}`}>{INSTITUTE.email}</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>🕒</div>
                <div>
                  <h3>Office Hours</h3>
                  <p>{INSTITUTE.officeHours}</p>
                </div>
              </div>
            </div>

            <div className={styles.mapCard}>
              <iframe 
                src={INSTITUTE.mapEmbedUrl} 
                className={styles.mapIframe}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
