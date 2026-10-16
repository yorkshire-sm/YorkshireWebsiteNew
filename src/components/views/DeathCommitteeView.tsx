import React, { useState } from 'react';
import { ActiveTab } from '../Navbar';

interface DeathCommitteeViewProps {
  setActiveTab?: (tab: ActiveTab) => void;
  onOpenDonationModal?: (causeId?: string, amount?: number) => void;
}

export const DeathCommitteeView: React.FC<DeathCommitteeViewProps> = ({
  setActiveTab,
  onOpenDonationModal,
}) => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : donationAmount;
    if (onOpenDonationModal) {
      if (finalAmount && finalAmount > 0) {
        onOpenDonationModal('funeral-services', finalAmount);
      } else {
        onOpenDonationModal('funeral-services');
      }
    }
  };

  return (
    <div className="fsf-root w-full overflow-x-hidden" style={{ margin: '0', padding: '0' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;600;700&display=swap');

        .fsf-root {
          /* Muted, respectful color palette */
          --fsf-primary: #1a5f4a;
          --fsf-secondary: #2d4a3e;
          --fsf-accent: #6b8e7f;
          --fsf-cream: #f8f6f1;
          --fsf-white: #ffffff;
          --fsf-text-dark: #2c3e3a;
          --fsf-text-gray: #5a6963;
          --fsf-border: #d4d9d6;
          --fsf-gold: #b8976f;
        }

        .fsf-main-wrapper {
          font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow-x: hidden;
          background: var(--fsf-cream);
          width: 100%;
          max-width: 100%;
          color: var(--fsf-text-dark);
          line-height: 1.6;
        }

        .fsf-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section - More Subdued & Respectful */
        .fsf-hero-section {
          background: linear-gradient(to bottom, rgba(26, 95, 74, 0.95), rgba(45, 74, 62, 0.97)), 
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><rect fill="%231a5f4a" width="1200" height="400"/></svg>');
          color: #ffffff;
          padding: 70px 20px 65px;
          text-align: center;
          position: relative;
          border-bottom: 3px solid var(--fsf-gold);
        }

        /* Subtle pattern overlay */
        .fsf-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.02) 35px,
            rgba(255, 255, 255, 0.02) 70px
          );
          pointer-events: none;
        }

        .fsf-hero-content {
          position: relative;
          z-index: 1;
        }

        .fsf-hero-icon {
          font-size: 48px;
          margin-bottom: 20px;
          opacity: 0.95;
        }

        .fsf-hero-title {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.3em);
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
          color: #ffffff;
          letter-spacing: 0.5px;
        }

        .fsf-hero-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.05em);
          line-height: 1.8;
          margin: 0 auto 25px;
          opacity: 0.93;
          font-weight: 300;
          color: #ffffff;
          max-width: 900px;
        }

        .fsf-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          padding: 10px 24px;
          border-radius: 4px;
          font-size: 0.88em;
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        .fsf-brand-badge {
          display: inline-block;
          background: var(--fsf-gold);
          color: var(--fsf-white);
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 0.9em;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        /* Mission Section - Refined & Dignified */
        .fsf-mission-section {
          background: var(--fsf-white);
          padding: 70px 20px;
          border-bottom: 1px solid var(--fsf-border);
          display: flex;
          justify-content: center;
        }

        .fsf-mission-quote {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: clamp(1.1rem, 2.5vw, 1.35em);
          font-style: italic;
          color: var(--fsf-secondary);
          line-height: 1.9;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 30px 20px;
          position: relative;
          border-left: 4px solid var(--fsf-gold);
          padding-left: 40px;
        }

        .fsf-mission-quote:before {
          content: '"';
          font-size: 5em;
          color: var(--fsf-accent);
          opacity: 0.2;
          position: absolute;
          left: -10px;
          top: -20px;
          font-family: Georgia, serif;
          line-height: 1;
        }

        /* Section Titles */
        .fsf-section-title {
          text-align: center;
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2em);
          color: var(--fsf-primary);
          margin-bottom: 20px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .fsf-section-title-light {
          color: var(--fsf-white);
        }

        .fsf-section-subtitle {
          text-align: center;
          color: var(--fsf-text-gray);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-size: 1.05em;
        }
        
        .fsf-section-subtitle-light {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Statistics Section */
        .fsf-stats-section {
          padding: 60px 20px;
          background: var(--fsf-white);
          border-top: 1px solid var(--fsf-border);
          border-bottom: 1px solid var(--fsf-border);
        }

        .fsf-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 25px;
          margin: 40px auto;
          max-width: 1000px;
        }

        .fsf-stat-card {
          background: var(--fsf-cream);
          padding: 35px 20px;
          text-align: center;
          border: 1px solid var(--fsf-border);
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .fsf-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(26, 95, 74, 0.12);
          border-color: var(--fsf-accent);
        }

        .fsf-stat-icon {
          font-size: 2.2em;
          margin-bottom: 15px;
          opacity: 0.85;
        }

        .fsf-stat-number {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: 2em;
          font-weight: 700;
          color: var(--fsf-primary);
          margin-bottom: 8px;
          display: block;
        }

        .fsf-stat-label {
          font-size: 0.92em;
          color: var(--fsf-text-gray);
          font-weight: 400;
          line-height: 1.4;
        }

        /* Services Section */
        .fsf-services-section {
          background: var(--fsf-cream);
          padding: 70px 20px;
        }

        .fsf-services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 40px auto 0;
          max-width: 1000px;
        }

        .fsf-service-item {
          background: var(--fsf-white);
          padding: 25px 20px;
          border: 1px solid var(--fsf-border);
          border-left: 4px solid var(--fsf-primary);
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          border-radius: 4px;
        }

        .fsf-service-item:hover {
          border-left-color: var(--fsf-gold);
          box-shadow: 0 4px 15px rgba(26, 95, 74, 0.1);
          transform: translateX(5px);
        }

        .fsf-service-bullet {
          font-size: 2.0em;
          flex-shrink: 0;
          opacity: 0.8;
          line-height: 1;
        }

        .fsf-service-text {
          font-size: 1.05em;
          line-height: 1.6;
          color: var(--fsf-text-dark);
        }

        /* Gallery Section */
        .fsf-gallery-section {
          padding: 70px 20px;
          background: var(--fsf-white);
          border-top: 1px solid var(--fsf-border);
        }

        .fsf-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }

        .fsf-gallery-item {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--fsf-border);
          transition: all 0.3s ease;
          background: var(--fsf-cream);
        }

        .fsf-gallery-item:hover {
          box-shadow: 0 8px 25px rgba(26, 95, 74, 0.15);
          transform: translateY(-3px);
        }

        .fsf-gallery-item img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
        }

        .fsf-gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(26, 95, 74, 0.92));
          color: white;
          padding: 50px 20px 20px;
          font-weight: 500;
          font-size: 0.95em;
        }

        /* Testimonials */
        .fsf-testimonials {
          padding: 70px 20px;
          background: var(--fsf-cream);
        }

        .fsf-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .fsf-testimonial {
          background: var(--fsf-white);
          padding: 35px 30px;
          border: 1px solid var(--fsf-border);
          border-top: 3px solid var(--fsf-primary);
          border-radius: 4px;
          position: relative;
        }

        .fsf-testimonial-quote {
          font-size: 1.02em;
          color: var(--fsf-text-dark);
          margin-bottom: 20px;
          font-style: italic;
          line-height: 1.7;
        }

        .fsf-testimonial-author {
          font-weight: 700;
          color: var(--fsf-primary);
          margin-bottom: 5px;
        }

        .fsf-testimonial-location {
          color: var(--fsf-text-gray);
          font-size: 0.9em;
        }

        /* Support Section */
        .fsf-support-section {
          background: var(--fsf-white);
          padding: 70px 20px;
          border-top: 1px solid var(--fsf-border);
        }

        .fsf-support-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .fsf-support-card {
          background: var(--fsf-cream);
          padding: 40px 30px;
          text-align: center;
          border: 1px solid var(--fsf-border);
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .fsf-support-card:hover {
          border-color: var(--fsf-primary);
          box-shadow: 0 8px 25px rgba(26, 95, 74, 0.12);
          transform: translateY(-5px);
        }

        .fsf-support-icon {
          font-size: 3em;
          margin-bottom: 20px;
          display: block;
          opacity: 0.85;
        }

        .fsf-support-title {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: 1.35em;
          color: var(--fsf-primary);
          margin-bottom: 15px;
          font-weight: 700;
        }

        .fsf-support-description {
          font-size: 0.98em;
          color: var(--fsf-text-gray);
          line-height: 1.7;
        }
        
        /* DONATION FORM STYLES */
        .fsf-donation-wrapper {
          background: var(--fsf-primary); /* Dark Green Background */
          padding: 70px 20px;
          position: relative;
        }
        
        .fsf-donation-wrapper::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 20%),
                            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.05) 0%, transparent 20%);
          pointer-events: none;
        }

        .fsf-donation-card {
          background: var(--fsf-white);
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          overflow: hidden;
          border-top: 5px solid var(--fsf-gold);
          position: relative;
          z-index: 10;
        }

        .fsf-form-inner {
          padding: 35px 30px;
        }

        .fsf-donation-footer {
          text-align: center;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.08);
          font-size: 0.88em;
          color: var(--fsf-text-gray);
        }

        /* CTA Section - More Respectful */
        .fsf-cta-section {
          background: var(--fsf-primary);
          color: #ffffff;
          padding: 60px 20px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .fsf-cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .fsf-cta-title {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2em);
          margin-bottom: 15px;
          font-weight: 700;
          color: white;
        }

        .fsf-cta-subtitle {
          font-size: 1.08em;
          margin-bottom: 35px;
          opacity: 0.95;
          line-height: 1.7;
          color: white;
        }

        .fsf-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .fsf-btn {
          display: inline-block;
          padding: 14px 32px;
          font-size: 0.98em;
          font-weight: 700;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
          letter-spacing: 0.3px;
        }

        .fsf-btn-primary {
          background: var(--fsf-gold);
          color: var(--fsf-white);
          border-color: var(--fsf-gold);
        }

        .fsf-btn-primary:hover {
          background: #a07f5a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .fsf-btn-secondary {
          background: var(--fsf-white);
          color: var(--fsf-primary);
          border-color: var(--fsf-white);
        }

        .fsf-btn-secondary:hover {
          background: var(--fsf-cream);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .fsf-note {
          font-size: 0.88em;
          color: var(--fsf-text-gray);
          font-style: italic;
          margin-top: 25px;
          padding: 15px 20px;
          background: rgba(26, 95, 74, 0.05);
          border-radius: 4px;
          border-left: 3px solid var(--fsf-accent);
          text-align: center;
        }

        .fsf-intro-text {
          text-align: center;
          font-size: 1.05em;
          color: var(--fsf-text-gray);
          margin: 0 auto 35px;
          line-height: 1.7;
          max-width: 700px;
        }

        /* Dark Mode Overrides */
        .dark .fsf-main-wrapper {
          background-color: #0B1220;
          color: #F1F5F9;
        }
        .dark .fsf-intro-section,
        .dark .fsf-services-section,
        .dark .fsf-gallery-section,
        .dark .fsf-support-section {
          background-color: #0B1220;
          border-color: #334155;
        }
        .dark .fsf-section-title {
          color: #F1F5F9;
        }
        .dark .fsf-intro-text,
        .dark .fsf-service-text,
        .dark .fsf-support-description {
          color: #CBD5E1;
        }
        .dark .fsf-service-item {
          background: #172438;
          border-color: #334155;
        }
        .dark .fsf-testimonials {
          background: #111C2E;
        }
        .dark .fsf-testimonial {
          background: #172438;
          border-color: #334155;
        }
        .dark .fsf-testimonial-quote {
          color: #CBD5E1;
        }
        .dark .fsf-support-card {
          background: #172438;
          border-color: #334155;
        }
        .dark .fsf-support-title {
          color: #FBBF24;
        }
        .dark .fsf-note {
          background: rgba(26, 95, 74, 0.25);
          color: #CBD5E1;
          border-left-color: #FBBF24;
        }
        .dark .fsf-form-inner {
          background: #172438;
          border-color: #334155;
        }
        .dark .fsf-input-field {
          background: #142136;
          border-color: #334155;
          color: #F1F5F9;
        }
        .dark .fsf-preset-btn {
          background: #142136;
          border-color: #334155;
          color: #F1F5F9;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .fsf-hero-title { font-size: 1.8em; }
          .fsf-hero-subtitle { font-size: 1em; }
          .fsf-section-title { font-size: 1.7em; }
          .fsf-mission-quote { font-size: 1.15em; padding-left: 30px; }
          .fsf-stats-grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; }
          .fsf-services-list, .fsf-gallery-grid, .fsf-testimonials-grid, .fsf-support-grid { grid-template-columns: 1fr; }
          .fsf-cta-buttons { flex-direction: column; align-items: stretch; }
          .fsf-btn { width: 100%; text-align: center; }
          .fsf-form-inner { padding: 25px 20px; }
        }

        @media (max-width: 480px) {
          .fsf-hero-title { font-size: 1.5em; }
          .fsf-section-title { font-size: 1.5em; }
          .fsf-mission-quote { font-size: 1.05em; }
        }
      `}</style>

      <div className="fsf-main-wrapper">
        {/* Funeral Section Tabs */}
        <nav aria-label="Funeral Services Navigation" className="bg-[#143627] border-b border-amber-400/20 py-2.5 px-4 text-center">
          <div className="max-w-xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('funeral')}
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>📞</span> Funeral Service
            </button>
            <button
              type="button"
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#b8976f] text-white shadow-sm flex items-center gap-1.5 cursor-default"
            >
              <span>📋</span> Death Committee (FSF)
            </button>
          </div>
        </nav>

        {/* 1. Hero Section */}
        <section className="fsf-hero-section">
          <div className="fsf-container">
            <div className="fsf-hero-content">
              <div className="fsf-brand-badge">Dawat-e-Islami Yorkshire</div>
              <div className="fsf-hero-icon">🌙</div>
              <h1 className="fsf-hero-title">
                Funeral Services Fund<br />Death Committee (FSF)
              </h1>
              <p className="fsf-hero-subtitle">
                The <strong>Funeral Services Fund (FSF)</strong> by <strong>Dawat-e-Islami</strong> was established to assist Muslims with funeral arrangements that fully align with the <strong>teachings of the Qur&apos;an and Sunnah</strong>.
                Our mission is to ensure that every Muslim — regardless of financial means — is buried with <strong>dignity, compassion, and Sharī&apos;ah compliance</strong>, whether in the UK or their ancestral homeland.
              </p>
              <div className="fsf-badge">🤲 Purely Charitable • Not Insurance-Based • Serving the Ummah</div>
            </div>
          </div>
        </section>

        {/* 2. Mission Section */}
        <section className="fsf-mission-section">
          <div className="fsf-container">
            <h2 className="fsf-section-title">Our Mission</h2>
            <blockquote className="fsf-mission-quote">
              To provide Islamic funeral and repatriation services to Muslims across the UK, ensuring every burial is conducted with dignity, compassion, and adherence to Islamic principles.
            </blockquote>
          </div>
        </section>

        {/* 3. Statistics Section (Our Impact) */}
        <section className="fsf-stats-section">
          <div className="fsf-container">
            <h2 className="fsf-section-title">Our Impact</h2>
            <p className="fsf-section-subtitle">Since our establishment, we have been honored to serve the Muslim community across the UK</p>
            <div className="fsf-stats-grid">
              <div className="fsf-stat-card">
                <div className="fsf-stat-icon">🧕</div>
                <span className="fsf-stat-number">10000+</span>
                <div className="fsf-stat-label">Registered Members</div>
              </div>
              <div className="fsf-stat-card">
                <div className="fsf-stat-icon">👨‍👩‍👧‍👦</div>
                <span className="fsf-stat-number">80+</span>
                <div className="fsf-stat-label">Families Supported</div>
              </div>
              <div className="fsf-stat-card">
                <div className="fsf-stat-icon">⚰️</div>
                <span className="fsf-stat-number">80+</span>
                <div className="fsf-stat-label">Funerals Arranged</div>
              </div>
              <div className="fsf-stat-card">
                <div className="fsf-stat-icon">✈️</div>
                <span className="fsf-stat-number">20+</span>
                <div className="fsf-stat-label">Bodies Repatriated Overseas</div>
              </div>
              <div className="fsf-stat-card">
                <div className="fsf-stat-icon">🤝</div>
                <span className="fsf-stat-number">50+</span>
                <div className="fsf-stat-label">Active Volunteers</div>
              </div>
            </div>
            <p className="fsf-note">
              <em>These numbers are regularly updated as FSF continues to grow across the UK.</em>
            </p>
          </div>
        </section>

        {/* 4. Services Section */}
        <section className="fsf-services-section">
          <div className="fsf-container">
            <h2 className="fsf-section-title">Our Services</h2>
            <p className="fsf-section-subtitle">Comprehensive Islamic funeral services provided with care and respect</p>
            <ul className="fsf-services-list">
              <li className="fsf-service-item">
                <span className="fsf-service-bullet">🏥</span>
                <span className="fsf-service-text">Complete funeral arrangements within the UK</span>
              </li>
              <li className="fsf-service-item">
                <span className="fsf-service-bullet">✈️</span>
                <span className="fsf-service-text">Repatriation to ancestral homelands (e.g., Pakistan, India, Bangladesh, etc.)</span>
              </li>
              <li className="fsf-service-item">
                <span className="fsf-service-bullet">📋</span>
                <span className="fsf-service-text">Assistance with legal documentation and government clearance</span>
              </li>
              <li className="fsf-service-item">
                <span className="fsf-service-bullet">🌿</span>
                <span className="fsf-service-text">Washing, shrouding, and burial in accordance with Sharī&apos;ah</span>
              </li>
              <li className="fsf-service-item">
                <span className="fsf-service-bullet">💚</span>
                <span className="fsf-service-text">Compassionate support and guidance for the family</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Gallery Section (Our Work) */}
        <section className="fsf-gallery-section">
          <div className="fsf-container">
            <h2 className="fsf-section-title">Our Work</h2>
            <p className="fsf-section-subtitle">A glimpse into our services and community support</p>
            <div className="fsf-gallery-grid">
              <div className="fsf-gallery-item">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/private_ambulance.jpg"
                  alt="Funeral Vans & Transport Teams"
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
                <div className="fsf-gallery-overlay">
                  Funeral Vans & Transport Teams
                </div>
              </div>
              <div className="fsf-gallery-item">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/building.jpg"
                  alt="Masjid Partnership & Burial Sites"
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
                <div className="fsf-gallery-overlay">
                  Masjid Partnership & Burial Sites
                </div>
              </div>
              <div className="fsf-gallery-item">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/vol.jpg"
                  alt="Volunteers Serving Families"
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
                <div className="fsf-gallery-overlay">
                  Volunteers Serving Families During Funerals
                </div>
              </div>
              <div className="fsf-gallery-item">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/repretation.jpg"
                  alt="Repatriation arrangements"
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
                <div className="fsf-gallery-overlay">
                  Repatriation Arrangements At Airports
                </div>
              </div>
              <div className="fsf-gallery-item">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/fsf_img.jpg"
                  alt="Community awareness sessions"
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
                <div className="fsf-gallery-overlay">
                  Community Awareness Sessions & FSF Outreach Booths
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="fsf-testimonials">
          <div className="fsf-container">
            <h2 className="fsf-section-title">Testimonials</h2>
            <p className="fsf-section-subtitle">Words from families we have had the honor of serving during their most difficult times</p>
            
            <div className="fsf-testimonials-grid">
              <div className="fsf-testimonial">
                <p className="fsf-testimonial-quote">
                  &ldquo;When my father passed away suddenly, FSF took care of everything. They handled the repatriation to Pakistan with such professionalism and compassion. We couldn&apos;t have managed without their support.&rdquo;
                </p>
                <div className="fsf-testimonial-author">Ahmed Hassan</div>
                <div className="fsf-testimonial-location">Bradford</div>
              </div>
              
              <div className="fsf-testimonial">
                <p className="fsf-testimonial-quote">
                  &ldquo;The volunteers were incredibly respectful and knowledgeable about Islamic burial rites. They guided us through every step and made sure everything was done according to Sunnah.&rdquo;
                </p>
                <div className="fsf-testimonial-author">Fatima Ali</div>
                <div className="fsf-testimonial-location">Yorkshire</div>
              </div>
              
              <div className="fsf-testimonial">
                <p className="fsf-testimonial-quote">
                  &ldquo;FSF&apos;s 24/7 support was a blessing. They responded immediately to our call and took care of all the arrangements. The family could focus on grieving and supporting each other.&rdquo;
                </p>
                <div className="fsf-testimonial-author">Mohammad Khan</div>
                <div className="fsf-testimonial-location">Dewsbury</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. How to Support FSF */}
        <section className="fsf-support-section">
          <div className="fsf-container">
            <h2 className="fsf-section-title">How to Support FSF</h2>
            <p className="fsf-intro-text">
              You can support the Funeral Services Fund in several ways:
            </p>
            <div className="fsf-support-grid">
              <div className="fsf-support-card">
                <span className="fsf-support-icon">🤲</span>
                <h3 className="fsf-support-title">Register as a Member</h3>
                <p className="fsf-support-description">
                  Join the fund to ensure your family receives Sharī&apos;ah-compliant support when needed.
                </p>
              </div>
              <div className="fsf-support-card">
                <span className="fsf-support-icon">💚</span>
                <h3 className="fsf-support-title">Donate Regularly</h3>
                <p className="fsf-support-description">
                  Help sustain this noble work as part of your ongoing <em>sadaqah jariyah</em>.
                </p>
              </div>
              <div className="fsf-support-card">
                <span className="fsf-support-icon">👥</span>
                <h3 className="fsf-support-title">Volunteer with Us</h3>
                <p className="fsf-support-description">
                  Join our nationwide team helping Muslim families during their most difficult moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Donation Section */}
        <section className="fsf-donation-wrapper" id="donate-now">
          <div className="fsf-container">
            <h2 className="fsf-section-title fsf-section-title-light">Make a Donation</h2>
            <p className="fsf-section-subtitle fsf-section-subtitle-light">
              Your contribution helps us continue providing dignified funeral services to those in need.
            </p>
            
            <div className="fsf-donation-card">
              <div className="fsf-form-inner">
                <p style={{ color: 'var(--fsf-text-dark)', fontWeight: 600, marginBottom: '1.25rem', textAlign: 'center', fontSize: '1.05rem' }}>
                  Select an amount to support the Funeral Services Fund (FSF):
                </p>

                <form onSubmit={handleDonate} className="space-y-4">
                  {/* Donation Preset Grid */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {[25, 50, 100, 250].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amt);
                          setCustomAmount('');
                        }}
                        className={`py-2.5 px-3 rounded text-sm font-bold transition-all border ${
                          donationAmount === amt && !customAmount
                            ? 'bg-[#b8976f] text-white border-[#b8976f] shadow-sm'
                            : 'bg-[#f8f6f1] text-[#2c3e3a] border-[#d4d9d6] hover:border-[#b8976f]'
                        }`}
                      >
                        £{amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount Field */}
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6963] font-bold">£</span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-8 pr-3 py-2.5 bg-[#f8f6f1] border border-[#d4d9d6] rounded text-[#2c3e3a] text-sm focus:outline-none focus:border-[#1a5f4a]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#b8976f] hover:bg-[#a07f5a] text-white font-bold text-sm rounded transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center whitespace-nowrap"
                    >
                      Donate Now
                    </button>
                  </div>
                </form>

                <div className="fsf-donation-footer">
                  <p>All donations are handled securely. <br />May Allah Almighty accept your Sadaqah Jariyah.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA Section */}
        <section className="fsf-cta-section">
          <div className="fsf-container">
            <div className="fsf-cta-content">
              <h2 className="fsf-cta-title">Get In Touch</h2>
              <p className="fsf-cta-subtitle">
                Be part of this ongoing <strong>sadaqah jariyah</strong> and help ensure that every Muslim receives a proper Islamic burial.
              </p>
              <div className="fsf-cta-buttons">
                <a href="tel:07936883621" className="fsf-btn fsf-btn-primary">Call Us: 07936 883621</a>
                <a href="mailto:info@dawateislamiyorkshire.co.uk" className="fsf-btn fsf-btn-secondary">Email Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
