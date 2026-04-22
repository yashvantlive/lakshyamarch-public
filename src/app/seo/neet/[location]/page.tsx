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
      ? `Best NEET Coaching in ${locationName} | ${INSTITUTE.name}`
      : `Best NEET Coaching for ${locationName} Students | ${INSTITUTE.name} Begusarai`,
    description: isBegusarai
      ? `Achieve your dream of becoming a doctor with the best NEET coaching in ${locationName}. ${INSTITUTE.name} offers top faculty, NCERT-focused material, and extreme test series.`
      : `Dreaming of cracking NEET from ${locationName}? Join ${INSTITUTE.name} Begusarai. We provide a highly competitive environment and dedicated hostel facilities for future doctors.`,
  };
}

export default async function NeetPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.location;
  const locationName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isBegusarai = slug === 'begusarai';

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ background: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)' }}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge} style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>NEET-UG Preparation</span>
            <h1 className={styles.title}>
              Best NEET Coaching for <span className={styles.highlight} style={{ color: '#34d399' }}>{locationName}</span> Students
            </h1>
            <p className={styles.subtitle}>
              {isBegusarai 
                ? `Empowering the future doctors of ${locationName}. Get the finest NCERT-based curriculum and competitive environment to score 650+ in NEET.`
                : `Aiming for 650+ in NEET? Move to our Begusarai campus! We provide a highly competitive environment, proven results, and premium hostel facilities for ${locationName} students.`}
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/admission" className={styles.primaryBtn} style={{ background: '#10b981' }}>
                {isBegusarai ? 'Enroll for NEET' : 'Join Begusarai Campus'}
              </Link>
              <Link href="/scholarship" className={styles.secondaryBtn}>
                {isBegusarai ? 'LNAT Scholarship' : 'Hostel Facility Available'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why NEET Aspirants in {locationName} Choose Us</h2>
            <div className={styles.titleUnderline} style={{ background: '#10b981' }}></div>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🧬</div>
              <h3 className={styles.cardTitle}>NCERT Focused</h3>
              <p className={styles.cardDesc}>Line-by-line coverage of NCERT Biology, Physics, and Chemistry.</p>
            </div>
            {!isBegusarai ? (
              <div className={styles.card}>
                <div className={styles.cardIcon}>🏨</div>
                <h3 className={styles.cardTitle}>Hostel & Results</h3>
                <p className={styles.cardDesc}>We produce doctors every year! Safe and dedicated hostels available for {locationName} outstation students.</p>
              </div>
            ) : (
              <div className={styles.card}>
                <div className={styles.cardIcon}>🩺</div>
                <h3 className={styles.cardTitle}>Expert Mentorship</h3>
                <p className={styles.cardDesc}>Guidance from top medical professionals and seasoned educators.</p>
              </div>
            )}
            <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3 className={styles.cardTitle}>All India Test Series</h3>
              <p className={styles.cardDesc}>Benchmark your performance with aspirants across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions (NEET)</h2>
            <div className={styles.titleUnderline} style={{ background: '#10b981' }}></div>
          </div>
          
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is {INSTITUTE.name} the right choice for NEET aspirants from {locationName}?</h3>
              <p className={styles.faqAnswer}>
                Yes, it is the top choice. We have specialized batches strictly adhering to the latest NTA NEET syllabus, ensuring maximum selections for students from the {locationName} area.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you provide NCERT based study material?</h3>
              <p className={styles.faqAnswer}>
                Absolutely. Our study material is meticulously designed to cover every single concept, diagram, and summary of the NCERT textbooks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
