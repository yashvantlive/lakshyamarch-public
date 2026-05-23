'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { erpApiPath } from '@/lib/erpApi';

// Student Data
const NEET_RESULTS = [
  { name: "Abhijeet (2024)", score: "685 / 720 ⭐", college: "PMCH, Patna", img: "abhijeet.webp", featured: true },
  { name: "Pallavi Kumari (2024)", score: "665 / 720 ⭐", college: "ANMMCH, Gaya Ji", img: "pallavi.webp" },
  { name: "Aradhya Bharti (2025)", score: "619 / 720 ⭐", college: "ABVIMS + DR RML Hospital, Delhi", img: "aradhya.webp", featured: true },
  { name: "Puja Kumari (2025)", score: "538 / 720", college: "ANMMCH, Gaya Ji", img: "puja.webp" },
  { name: "Alok kumar (2025)", score: "527 / 720", college: "ZMC, Mizoram", img: "alok.webp" },
  { name: "Aditi Vatsa (2025)", score: "520 / 720", college: "GMC, Korba Chattisgarh", img: "aditi.webp" },
  { name: "Ranjita Ranjan (2025)", score: "461 / 720", college: "NMCH, Patna", img: "ranjita.webp" },
];

const JEE_RESULTS = [
  { name: "Achyut Raj", score: "99.51 %ile", rank: "🥇 Rank 1", img: "achyut.webp" },
  { name: "Keshav Raj", score: "98.96 %ile", rank: "🥈 Rank 2", img: "keshav.webp" },
  { name: "Rishi Raj", score: "98.90 %ile", rank: "🥉 Rank 3", img: "rishi.webp" },
  { name: "Abhishek Anand", score: "97.92 %ile", rank: "🏅 Rank 4", img: "abhishek.webp" },
  { name: "Aman Raj", score: "95.98 %ile", img: "aman.webp" },
  { name: "Nutan", score: "94.77 %ile", img: "nutan.webp" },
  { name: "Pragya", score: "94.58 %ile", img: "pragya.webp" },
  { name: "Aadarsh", score: "93.65 %ile", img: "aadarsh.webp" },
];

export default function NeetCampaignPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    mobileNo: '',
    parentsName: '',
    city: '',
    remarks: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const registerSection = document.getElementById('register');
      if (registerSection) {
        const rect = registerSection.getBoundingClientRect();
        setStickyVisible(rect.bottom < 0 || rect.top > window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.mobileNo || !formData.city) {
      setError('Please fill all mandatory fields (Name, Mobile, City)');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(erpApiPath('/api/campaign/neet-3may'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="neet-campaign-root">
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <style jsx global>{`
        :root {
          --blue:        #1a3faa;
          --blue-dark:   #0f2878;
          --blue-mid:    #2251cc;
          --blue-light:  #e8eeff;
          --yellow:      #f5c200;
          --yellow-dark: #d4a800;
          --yellow-light:#fffae6;
          --green:       #1a8c4e;
          --green-light: #e8f7ef;
          --red:         #cc2222;
          --white:       #ffffff;
          --bg:          #f7f8fc;
          --text:        #1a1a2e;
          --text-mid:    #444466;
          --text-soft:   #888899;
          --border:      #dde2f0;
          --shadow-sm:   0 2px 8px rgba(26,63,170,.10);
          --shadow-md:   0 4px 20px rgba(26,63,170,.14);
          --shadow-lg:   0 8px 40px rgba(26,63,170,.18);
          --radius:      14px;
          --radius-sm:   8px;
          --font-head:   'Baloo 2', sans-serif;
          --font-body:   'Nunito', sans-serif;
        }

        .neet-campaign-root {
          font-family: var(--font-body);
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .top-strip {
          background: var(--blue-dark);
          color: var(--white);
          text-align: center;
          padding: 8px 16px;
          font-size: .82rem;
          font-weight: 600;
        }
        .top-strip a { color: var(--yellow); font-weight: 700; text-decoration: none; }

        .navbar {
          background: var(--white);
          border-bottom: 3px solid var(--blue);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: var(--shadow-sm);
        }
        .nav-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-wrap { display: flex; align-items: center; gap: 12px; }
        .logo-badge {
          background: var(--blue);
          color: var(--yellow);
          font-family: var(--font-head);
          font-size: 1.5rem;
          font-weight: 800;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(26,63,170,.3);
        }
        .logo-text { display: flex; flex-direction: column; }
        .logo-main { font-family: var(--font-head); font-weight: 800; font-size: 1.1rem; color: var(--blue-dark); line-height: 1.2; }
        .logo-sub { font-size: .7rem; color: var(--text-soft); font-weight: 600; }

        .nav-cta {
          background: var(--yellow);
          color: var(--blue-dark);
          font-family: var(--font-head);
          font-weight: 700;
          font-size: .9rem;
          padding: 10px 20px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 3px 12px rgba(245,194,0,.4);
        }

        .hero {
          background: linear-gradient(160deg, var(--blue-dark) 0%, var(--blue-mid) 60%, #3366dd 100%);
          color: var(--white);
          text-align: center;
          padding: 60px 20px 100px;
          position: relative;
        }
        .hero-badge {
          display: inline-block;
          background: var(--yellow);
          color: var(--blue-dark);
          font-family: var(--font-head);
          font-weight: 800;
          font-size: .95rem;
          padding: 7px 18px;
          border-radius: 50px;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .hero-title {
          font-family: var(--font-head);
          font-weight: 800;
          font-size: clamp(2.2rem, 8vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 15px;
        }
        .hero-title span { color: var(--yellow); }
        .hero-sub { font-size: 1.2rem; opacity: 0.9; margin-bottom: 30px; font-weight: 600; }

        .trust-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 30px; }
        .trust-pill {
          background: rgba(255,255,255,.15);
          border: 1.5px solid rgba(255,255,255,.3);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: .82rem;
          font-weight: 700;
          backdrop-filter: blur(4px);
        }

        .form-section {
          padding: 0 16px 60px;
          margin-top: -60px;
          position: relative;
          z-index: 10;
        }
        .form-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 35px 30px;
          box-shadow: var(--shadow-lg);
          max-width: 550px;
          margin: 0 auto;
          border: 2px solid var(--blue-light);
        }
        .form-header { display: flex; align-items: center; gap: 15px; margin-bottom: 30px; }
        .form-icon { font-size: 2.5rem; }
        .form-title { font-family: var(--font-head); font-weight: 800; font-size: 1.5rem; color: var(--blue-dark); }
        .form-sub { font-size: 0.9rem; color: var(--text-soft); font-weight: 600; }

        .field-group { margin-bottom: 20px; }
        .field-group label {
          display: block;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-mid);
          margin-bottom: 8px;
        }
        .field-group input, .field-group textarea {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 1rem;
          background: #fafbff;
          transition: all 0.3s;
          outline: none;
        }
        .field-group input:focus, .field-group textarea:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(26,63,170,0.1);
        }

        .btn-primary {
          background: var(--yellow);
          color: var(--blue-dark);
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 1.15rem;
          padding: 18px;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          width: 100%;
          box-shadow: 0 6px 20px rgba(245,194,0,0.4);
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(245,194,0,0.5); }
        .btn-primary:active { transform: scale(0.98); }

        .results-section { padding: 80px 20px; background: white; text-align: center; }
        .section-label {
          display: inline-block;
          background: var(--blue-light);
          color: var(--blue);
          font-size: .75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 10px;
        }
        .section-title { font-family: var(--font-head); font-weight: 800; font-size: 2.5rem; color: var(--blue-dark); margin-bottom: 10px; }
        .section-sub { font-size: 1.1rem; color: var(--text-soft); margin-bottom: 50px; font-weight: 600; }

        .category-badge {
          display: inline-block;
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 1.1rem;
          padding: 8px 22px;
          border-radius: 50px;
          margin-bottom: 30px;
        }
        .neet-badge  { background: var(--green-light); color: var(--green); border: 2px solid #a8e6c8; }
        .jee-badge   { background: var(--blue-light);  color: var(--blue);  border: 2px solid #b8caff; }
        .other-badge { background: var(--yellow-light); color: #7a5800; border: 2px solid #ffe080; }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: 0 auto 60px;
        }
        .student-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 15px;
          border: 1.5px solid var(--border);
          transition: all 0.3s;
          position: relative;
        }
        .student-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: var(--blue); }
        .featured-card { border-color: var(--yellow); box-shadow: 0 4px 20px rgba(245,194,0,0.25); }
        
        .rank-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--blue);
          color: var(--white);
          font-size: .72rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 50px;
          white-space: nowrap;
          z-index: 5;
        }

        .student-img-wrap {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 10px;
          overflow: hidden;
          background: var(--blue-light);
          margin-bottom: 15px;
        }
        .student-img { width: 100%; height: 100%; object-fit: cover; }
        .student-name { font-weight: 800; font-size: 1.05rem; margin-bottom: 8px; line-height: 1.2; }
        .score-badge {
          display: inline-block;
          background: var(--blue-light);
          color: var(--blue);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .score-badge.top-score { background: var(--yellow); color: var(--blue-dark); }
        .college-tag { font-size: 0.75rem; color: var(--text-soft); font-weight: 700; }

        .why-section { padding: 80px 20px; background: var(--bg); text-align: center; }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .why-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 30px 25px;
          border: 2px solid var(--border);
          transition: all 0.3s;
        }
        .why-card:hover { transform: translateY(-5px); border-color: var(--blue); }
        .why-icon { font-size: 2.5rem; margin-bottom: 15px; }
        .why-card h3 { font-family: var(--font-head); font-weight: 800; font-size: 1.2rem; color: var(--blue-dark); margin-bottom: 10px; }
        .why-card p { font-size: 0.9rem; color: var(--text-mid); font-weight: 500; }

        .batch-section { padding: 80px 20px; background: white; text-align: center; }
        .batch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
          max-width: 900px;
          margin: 0 auto 40px;
        }
        .batch-card {
          border-radius: var(--radius);
          padding: 30px 25px;
          text-align: left;
          border: 2px solid var(--border);
          transition: all 0.3s;
        }
        .neet-card   { background: var(--green-light); border-color: #a8e6c8; }
        .jee-card    { background: var(--blue-light);  border-color: #b8caff; }
        .class11-card{ background: var(--yellow-light);border-color: #ffe080; }
        
        .batch-tag { font-size: .75rem; font-weight: 800; text-transform: uppercase; color: var(--text-soft); margin-bottom: 10px; display: block; }
        .batch-card h3 { font-family: var(--font-head); font-weight: 800; font-size: 1.4rem; color: var(--blue-dark); margin-bottom: 8px; }
        .batch-detail { font-size: 0.9rem; color: var(--text-mid); margin-bottom: 20px; font-weight: 600; }
        .batch-date {
          display: inline-block;
          background: var(--blue);
          color: var(--white);
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 1.1rem;
          padding: 10px 20px;
          border-radius: var(--radius-sm);
        }

        .cta-section {
          background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 100%);
          padding: 80px 20px;
          text-align: center;
          color: white;
        }
        .cta-inner { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 40px; }
        .cta-text h2 { font-family: var(--font-head); font-weight: 800; font-size: 2.5rem; margin-bottom: 15px; }
        .cta-text p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 30px; }

        .qr-section { padding: 60px 20px; background: var(--blue-light); border-top: 4px solid var(--blue); }
        .qr-inner { max-width: 700px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap; text-align: left; }
        .qr-title { font-family: var(--font-head); font-weight: 800; font-size: 1.8rem; color: var(--blue-dark); margin-bottom: 10px; }
        .qr-sub { font-size: 1rem; color: var(--text-mid); font-weight: 600; margin-bottom: 20px; }
        .qr-link { background: var(--blue); color: white; padding: 10px 25px; border-radius: 50px; font-weight: 700; text-decoration: none; }
        .qr-frame { background: white; padding: 15px; border-radius: 20px; border: 4px solid var(--blue); box-shadow: var(--shadow-md); }

        .footer { background: var(--blue-dark); color: rgba(255,255,255,0.7); padding: 60px 20px 100px; }
        .footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
        .footer-logo { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .footer-logo strong { font-family: var(--font-head); color: white; font-size: 1.2rem; }
        .footer h4 { color: white; margin-bottom: 20px; font-family: var(--font-head); }
        .footer p { font-size: 0.9rem; margin-bottom: 10px; }
        .social-row { display: flex; gap: 15px; margin-top: 20px; }
        .social-row a { background: rgba(255,255,255,0.1); padding: 8px 15px; rounded: 50px; color: white; font-size: 0.8rem; font-weight: 700; text-decoration: none; border-radius: 50px; }

        .sticky-cta {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: white;
          padding: 12px 16px;
          box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
          z-index: 1000;
          display: ${stickyVisible ? 'block' : 'none'};
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .sticky-btn { background: var(--blue); color: white; font-family: var(--font-head); font-weight: 800; font-size: 1.1rem; text-align: center; padding: 15px; border-radius: 10px; display: block; text-decoration: none; box-shadow: 0 4px 15px rgba(26,63,170,0.3); }

        @media (max-width: 768px) {
          .nav-inner { padding: 10px 15px; }
          .hero-title { font-size: 2.2rem; }
          .qr-inner { text-align: center; }
          .students-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .batch-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header Strip */}
      <div className="top-strip">
        <span>📍 Begusarai&apos;s Trusted NEET/JEE Coaching&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span>📞 <a href="tel:7296050207">7296050207</a> | <a href="tel:6206323869">6206323869</a> | <a href="tel:8603793869">8603793869</a></span>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="nav-inner">
          <div className="logo-wrap">
            <div className="logo-badge">LM</div>
            <div className="logo-text">
              <span className="logo-main">LakshyaMarch</span>
              <span className="logo-sub">लक्ष्यमार्च बेगूसराय • Estd. 2019</span>
            </div>
          </div>
          <Link href="#register" className="nav-cta">Register Free</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">🎯 Free 1 Week Demo Class</div>
        <h1 className="hero-title">NEET 2027 Preparation<br /><span>Starts Now</span></h1>
        <p className="hero-sub">Join LakshyaMarch – Proven Results Every Year</p>
        <div className="trust-row">
          <div className="trust-pill">✅ 100+ Students Selected</div>
          <div className="trust-pill">✅ Est. 2019</div>
          <div className="trust-pill">✅ Begusarai Based</div>
        </div>
        <Link href="#register" className="btn-primary" style={{ maxWidth: '300px', margin: '0 auto' }}>
          Fill Registration Form ↓
        </Link>
      </section>

      {/* Form Section */}
      <section className="form-section" id="register">
        <div className="form-card">
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📢</div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: '800', fontSize: '2rem', color: 'var(--blue-dark)' }}>Campaign Concluded</h2>
            <p style={{ marginTop: '10px', fontWeight: '600', color: 'var(--text-mid)' }}>The NEET May 3 Campaign has ended. Please visit our official contact page for admissions and enquiries.</p>
            <Link href="/contact" className="btn-primary" style={{ marginTop: '30px', background: 'var(--blue)', color: 'white' }}>Go to Contact Page</Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="section-label">Trust Builder</div>
        <h2 className="section-title">Our Real Results</h2>
        <p className="section-sub">Students from Begusarai, making it big – every year</p>

        {/* NEET RESULTS */}
        <div className="category-badge neet-badge">🩺 NEET 2025 Qualifiers</div>
        <div className="students-grid">
          {NEET_RESULTS.map((s, idx) => (
            <div key={idx} className={`student-card ${s.featured ? 'featured-card' : ''}`}>
              <div className="student-img-wrap">
                <img src={`/campaign/neet/${s.img}`} alt={s.name} className="student-img" />
              </div>
              <p className="student-name">{s.name}</p>
              <div className={`score-badge ${s.featured || s.score.includes('⭐') ? 'top-score' : ''}`}>{s.score}</div>
              <p className="college-tag">{s.college}</p>
            </div>
          ))}
        </div>

        {/* JEE RESULTS */}
        <div className="category-badge jee-badge">⚙️ JEE Mains 2026 Results</div>
        <div className="students-grid">
          {JEE_RESULTS.map((s, idx) => (
            <div key={idx} className="student-card">
              {s.rank && <div className="rank-badge">{s.rank}</div>}
              <div className="student-img-wrap">
                <img src={`/campaign/neet/${s.img}`} alt={s.name} className="student-img" />
              </div>
              <p className="student-name">{s.name}</p>
              <div className="score-badge top-score">{s.score}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">Why Parents Trust Us</h2>
        <div className="why-grid">
          {[
            { icon: "👨‍🏫", title: "Expert Faculty", desc: "IIT/NIT and Subject specialists with years of experience." },
            { icon: "📊", title: "Test & Analysis", desc: "Weekly tests and detailed performance monitoring." },
            { icon: "🤝", title: "Personal Attention", desc: "Small batches for individual guidance & doubt clearing." },
            { icon: "🏆", title: "Proven Track Record", desc: "Consistent results since 2019. Real students, real success." }
          ].map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Batch Section */}
      <section className="batch-section">
        <div className="section-label">New Batches</div>
        <h2 className="section-title">Upcoming Batch Dates</h2>
        <div className="batch-grid">
          <div className="batch-card neet-card">
            <span className="batch-tag">🩺 NEET</span>
            <h3>Target NEET 2027</h3>
            <p className="batch-detail">For 12th Passed Out / Repeaters</p>
            <div className="batch-date">📅 14 May 2026</div>
          </div>
          <div className="batch-card jee-card">
            <span className="batch-tag">⚙️ JEE</span>
            <h3>Target JEE 2027</h3>
            <p className="batch-detail">For 12th Passed Out / Repeaters</p>
            <div className="batch-date">📅 21 May 2026</div>
          </div>
          <div className="batch-card class11-card">
            <span className="batch-tag">📚 Class 11</span>
            <h3>Foundation Batch</h3>
            <p className="batch-detail">Evening Batch – Class 11th Students</p>
            <div className="batch-date">📅 21 May 2026</div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Start Your Success Journey</h2>
            <p>Don&apos;t wait. Secure your future now with Begusarai&apos;s leading education institute.</p>
            <Link href="/contact" className="btn-primary" style={{ maxWidth: '300px', margin: '0 auto' }}>Contact Us Today →</Link>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="qr-section">
        <div className="qr-inner">
          <div className="qr-text">
            <h2 className="qr-title">📱 Visit Our Website</h2>
            <p className="qr-sub">Scan the QR code to open our official website instantly</p>
            <a href="https://lakshyamarch.com" target="_blank" rel="noreferrer" className="qr-link">lakshyamarch.com</a>
          </div>
          <div className="qr-code-wrap">
            <div className="qr-frame">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://lakshyamarch.com&color=1a3faa&bgcolor=ffffff&margin=8"
                alt="QR Code"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <div className="logo-badge" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>LM</div>
              <strong>LakshyaMarch Education</strong>
            </div>
            <p>📍 Dakbangla Road, Begusarai (In Front of Omar Girls High School)</p>
            <p>📧 lakshyamarch@gmail.com</p>
            <p>📞 7296050207 | 6206323869 | 8603793869</p>
          </div>
          <div>
            <h4>Quick Exploration</h4>
            <p>Visit our campus for a personalized counseling session and see why we are Begusarai&apos;s No. 1 results provider.</p>
            <div className="social-row">
              <Link href="/">Official Site</Link>
              <Link href="/neet-campaign">Campaign Home</Link>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
          © 2026 LakshyaMarch Education. Begusarai. All rights reserved.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="sticky-cta">
        <Link href="#register" className="sticky-btn">🎯 Register Free – Limited Seats</Link>
      </div>

    </div>
  );
}
