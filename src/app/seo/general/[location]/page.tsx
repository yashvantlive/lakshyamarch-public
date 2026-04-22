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
    // Add district itself
    params.push({ location: district.english.toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    // Add all blocks
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
      ? `Best Coaching Institute in ${locationName} | ${INSTITUTE.name}`
      : `Best Coaching for ${locationName} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Looking for the best coaching in ${locationName}? ${INSTITUTE.name} provides top-tier education for IIT-JEE, NEET, and Foundation courses with expert faculty and proven results.`
      : `Are you from ${locationName}? Join ${INSTITUTE.name} in Begusarai for premium IIT-JEE & NEET coaching with top-tier hostel facilities and proven results.`,
  };
}

export default async function GeneralCoachingPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>#1 Coaching Institute</span>
            <h1 className={styles.title}>
              Best Coaching for <span className={styles.highlight}>{locationName}</span> Students
            </h1>
            <p className={styles.subtitle}>
              {isBegusarai 
                ? `Empowering students in ${locationName} to achieve their dreams in IIT-JEE, NEET, and Board Exams with proven teaching methodologies and top-tier faculty.`
                : `Looking for the best coaching? Just a short journey away, ${INSTITUTE.name} in Begusarai offers premium hostel facilities and a proven track record of top results for students from ${locationName}.`}
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/admission" className={styles.primaryBtn}>
                {isBegusarai ? 'Apply for Admission 2026' : 'Join Our Begusarai Campus'}
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                {isBegusarai ? 'Contact Us' : 'Hostel Enquiry'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose LakshyaMarch in {locationName}?</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>👨‍🏫</div>
              <h3 className={styles.cardTitle}>Expert Faculty</h3>
              <p className={styles.cardDesc}>Learn from highly experienced teachers dedicated to student success in {locationName}.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📚</div>
              <h3 className={styles.cardTitle}>Comprehensive Material</h3>
              <p className={styles.cardDesc}>Updated study materials, DPPs, and modules tailored for competitive exams.</p>
            </div>
            {!isBegusarai ? (
              <div className={styles.card}>
                <div className={styles.cardIcon}>🏨</div>
                <h3 className={styles.cardTitle}>Premium Hostel Facility</h3>
                <p className={styles.cardDesc}>Safe, secure, and study-friendly hostel accommodations available for students coming from {locationName}.</p>
              </div>
            ) : (
              <div className={styles.card}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Personalized Attention</h3>
                <p className={styles.cardDesc}>Small batch sizes ensuring every student in {locationName} gets the attention they need.</p>
              </div>
            )}
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏆</div>
              <h3 className={styles.cardTitle}>Proven Results</h3>
              <p className={styles.cardDesc}>Consistent track record of top ranks in IIT-JEE and NEET from {locationName} region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Which is the best coaching choice for students in {locationName}?</h3>
              <p className={styles.faqAnswer}>
                {INSTITUTE.name} is recognized as the premier educational choice for students from {locationName}, delivering consistently high results in IIT-JEE, NEET, and Foundation courses.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What courses does LakshyaMarch offer to students from {locationName}?</h3>
              <p className={styles.faqAnswer}>
                We offer targeted coaching for IIT-JEE (Main & Advanced), NEET-UG, and comprehensive Foundation courses for class 8th, 9th, and 10th students of {locationName}.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How do I enroll at LakshyaMarch?</h3>
              <p className={styles.faqAnswer}>
                Students from {locationName} can apply directly through our website by visiting the Admission page, or they can register for our Scholarship Exam (LNAT) to avail up to 100% fee waiver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
