import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { INSTITUTE, NAV_LINKS } from '@/lib/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>🎓</div>
              <div>
                <span className={styles.logoHighlight}>Lakshya</span>March
                <span className={styles.estd}>ESTD {INSTITUTE.established}</span>
              </div>
            </Link>
            <p className={styles.tagline}>{INSTITUTE.tagline}</p>
            <div className={styles.socials}>
              {Object.entries(INSTITUTE.social.coaching).map(([platform, url]) => (
                <a key={platform} href={url as string} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={platform}>
                  {platform === 'youtube' && 'YT'}
                  {platform === 'facebook' && 'FB'}
                  {platform === 'instagram' && 'IG'}
                  {platform === 'twitter' && 'X'}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Navigation</h3>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.bullet}></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admission" className={styles.link}>
                  <span className={styles.bullet}></span>
                  Admission 2026-27
                </Link>
              </li>
              <li>
                <Link href="/scholarship" className={styles.link}>
                  <span className={styles.bullet}></span>
                  Scholarship Exam
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className={styles.link}>
                  <span className={styles.bullet}></span>
                  Student Reviews
                </Link>
              </li>
              <li>
                <Link href="/free-test" className={styles.link}>
                  <span className={styles.bullet}></span>
                  Free Mock Test
                </Link>
              </li>
              <li>
                <Link href="/admission-counselling" className={`${styles.link} ${styles.highlightLink}`}>
                  <span className={`${styles.bullet} ${styles.highlightBullet}`}></span>
                  Admission Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Wings */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Academic Wings</h3>
            <ul className={styles.wingsList}>
              <li>
                <Link href="/begusarai-coaching" className={styles.wingLink}>
                  <span className={styles.wingTitle}>📍 Best Coaching in Begusarai</span>
                  <span className={styles.wingDesc}>No. 1 Institute in Begusarai.</span>
                </Link>
              </li>
              <li>
                <Link href="/iit-jee-coaching-begusarai" className={styles.wingLink}>
                  <span className={styles.wingTitle}>⚡ IIT-JEE Coaching Begusarai</span>
                  <span className={styles.wingDesc}>Best JEE coaching in Begusarai, Bihar.</span>
                </Link>
              </li>
              <li>
                <Link href="/neet-coaching-begusarai" className={styles.wingLink}>
                  <span className={styles.wingTitle}>🩺 NEET Coaching Begusarai</span>
                  <span className={styles.wingDesc}>Top NEET-UG coaching in Begusarai, Bihar.</span>
                </Link>
              </li>
              <li>
                <Link href="/admission" className={styles.wingLink}>
                  <span className={styles.wingTitle}>📋 Admission 2026-27</span>
                  <span className={styles.wingDesc}>Apply now — JEE, NEET & School admissions open.</span>
                </Link>
              </li>
              <li>
                <Link href="/scholarship" className={styles.wingLink}>
                  <span className={styles.wingTitle}>🎓 Scholarship Exam 2026</span>
                  <span className={styles.wingDesc}>Win up to 100% fee waiver. Free registration.</span>
                </Link>
              </li>
              <li>
                <Link href="/results" className={styles.wingLink}>
                  <span className={styles.wingTitle}>🏆 Hall of Fame</span>
                  <span className={styles.wingDesc}>IIT, NIT & NEET selections every year.</span>
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className={styles.wingLink}>
                  <span className={styles.wingTitle}>🌟 Success Stories</span>
                  <span className={styles.wingDesc}>Inspiring journeys of our top rankers.</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact & Visit</h3>
            <ul className={styles.contactList}>
              <li>
                <div className={styles.iconWrapper}><span className={styles.icon}>📍</span></div>
                <span className={styles.contactText}>{INSTITUTE.address.full}</span>
              </li>
              {INSTITUTE.phones.map(phone => (
                <li key={phone}>
                  <div className={styles.iconWrapper}><span className={styles.icon}>📞</span></div>
                  <a href={`tel:${phone}`} className={styles.contactLink}>+91 {phone}</a>
                </li>
              ))}
              <li>
                <div className={styles.iconWrapper}><span className={styles.icon}>✉️</span></div>
                <a href={`mailto:${INSTITUTE.email}`} className={styles.contactLink}>{INSTITUTE.email}</a>
              </li>
              <li>
                <div className={styles.iconWrapper}><span className={styles.icon}>🕒</span></div>
                <span className={styles.contactText}>{INSTITUTE.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="https://admin.lakshyamarch.com" target="_blank" className={styles.teamLogin}>Team Login</Link>
          </div>
          <div className={styles.copyInfo}>
            <p className={styles.copyText}>&copy; {currentYear} {INSTITUTE.name}. All rights reserved.</p>
            <p className={styles.madeWith}>Made with ❤️ in {INSTITUTE.address.city}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
