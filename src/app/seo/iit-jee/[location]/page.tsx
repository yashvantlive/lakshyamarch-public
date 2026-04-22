import React from 'react';
import { INSTITUTE } from '@/lib/siteData';
import { districtData } from '@/lib/districtData';
import Link from 'next/link';
import styles from '../../SeoPage.module.css';

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  const params: { location: string }[] = [];
  districtData.forEach(district => {
    params.push({ location: district.english.toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    district.blocks.forEach(block => {
      params.push({ location: block.english.split('/')[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return {
    title: isBegusarai 
      ? `Best IIT JEE Coaching in ${locationName} | ${INSTITUTE.name}`
      : `Best IIT JEE Coaching for ${locationName} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Crack IIT JEE with the best coaching in ${locationName}. ${INSTITUTE.name} provides expert faculty, comprehensive study material, and proven strategies.`
      : `Targeting IIT JEE from ${locationName}? Relocate to ${INSTITUTE.name} Begusarai. We offer expert faculty, rigorous testing, and secure hostel facilities for outstation students.`,
  };
}

export default async function IitJeePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge} style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }}>JEE Main & Advanced</span>
            <h1 className={styles.title}>
              Best IIT JEE Coaching for <span className={styles.highlight} style={{ color: '#60a5fa' }}>{locationName}</span> Students
            </h1>
            <p className={styles.subtitle}>
              {isBegusarai 
                ? `Join the most trusted IIT JEE preparation institute for students from ${locationName}. We build strong fundamentals to ensure top ranks in JEE Main and Advanced.`
                : `Crack IIT JEE by joining our Begusarai campus! We offer top-tier faculty, consistent year-on-year results, and secure hostel facilities exclusively for students from ${locationName}.`}
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/admission" className={styles.primaryBtn} style={{ background: '#3b82f6' }}>
                {isBegusarai ? 'Join JEE Batch' : 'Join Begusarai Campus'}
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                {isBegusarai ? 'Take Free Mock Test' : 'Hostel Facility Available'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our IIT JEE Strategy for {locationName} Students</h2>
            <div className={styles.titleUnderline} style={{ background: '#3b82f6' }}></div>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔬</div>
              <h3 className={styles.cardTitle}>In-Depth Concepts</h3>
              <p className={styles.cardDesc}>Focus on fundamental clarity in Physics, Chemistry, and Mathematics.</p>
            </div>
            {!isBegusarai ? (
              <div className={styles.card}>
                <div className={styles.cardIcon}>🏨</div>
                <h3 className={styles.cardTitle}>Hostel & Results</h3>
                <p className={styles.cardDesc}>Proven track record of JEE selections every year. Safe hostels available for {locationName} outstation students.</p>
              </div>
            ) : (
              <div className={styles.card}>
                <div className={styles.cardIcon}>📝</div>
                <h3 className={styles.cardTitle}>Rigorous Testing</h3>
                <p className={styles.cardDesc}>Weekly part tests and monthly cumulative tests based on the latest NTA patterns.</p>
              </div>
            )}
            <div className={styles.card}>
              <div className={styles.cardIcon}>💡</div>
              <h3 className={styles.cardTitle}>Doubt Resolution</h3>
              <p className={styles.cardDesc}>Dedicated doubt clearing sessions ensuring no student from {locationName} is left behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions (IIT-JEE)</h2>
            <div className={styles.titleUnderline} style={{ background: '#3b82f6' }}></div>
          </div>
          
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Why is LakshyaMarch the best for IIT-JEE aspirants from {locationName}?</h3>
              <p className={styles.faqAnswer}>
                With an elite faculty pool, high-quality study materials, and rigorous mock tests aligned with NTA standards, we provide the best ecosystem for JEE aspirants from {locationName}.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>When do the new JEE batches start for {locationName} students?</h3>
              <p className={styles.faqAnswer}>
                New batches for class 11th, 12th, and droppers commence in April and June. Register early via our Admission portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
