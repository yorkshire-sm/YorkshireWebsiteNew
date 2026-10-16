import React, { useState } from 'react';
import { ActiveTab } from '../Navbar';

interface FuneralServicesViewProps {
  onOpenDonationModal: (causeId?: string, amount?: number) => void;
  setActiveTab?: (tab: ActiveTab) => void;
}

export const FuneralServicesView: React.FC<FuneralServicesViewProps> = ({
  onOpenDonationModal,
  setActiveTab,
}) => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : donationAmount;
    if (finalAmount && finalAmount > 0) {
      onOpenDonationModal('funeral-services', finalAmount);
    } else {
      onOpenDonationModal('funeral-services');
    }
  };

  return (
    <div className="fs-root fs-wrapper w-full -mx-4 sm:-mx-6 lg:-mx-8 px-0" style={{ width: 'calc(100% + 2rem)', margin: '0 -1rem' }}>
      <style>{`
        .fs-root {
          --fs-primary-green: #3d5440;
          --fs-dark-green: #2a3a2d;
          --fs-gold: #d4af37;
          --fs-light-gold: #f4e4b8;
          --fs-cream: #f9f7f4;
          --fs-text-dark: #2c2c2c;
          --fs-text-light: #ffffff;
        }

        .fs-wrapper {
          font-family: 'Georgia', 'Times New Roman', serif;
          line-height: 1.6;
          color: var(--fs-text-dark);
          background-color: var(--fs-cream);
          overflow-x: hidden;
          width: 100%;
        }

        /* Emergency Banner */
        .fs-emergency-banner {
          background-color: var(--fs-gold);
          color: var(--fs-dark-green);
          padding: 1rem;
          text-align: center;
          font-weight: bold;
          font-size: clamp(0.85rem, 2vw, 1.2rem);
          line-height: 1.4;
          letter-spacing: 0.5px;
        }

        /* Header Styles */
        .fs-header {
          background: linear-gradient(135deg, var(--fs-dark-green) 0%, var(--fs-primary-green) 100%);
          color: var(--fs-text-light);
          padding: 2rem 0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .fs-header-content {
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .fs-logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
        }

        .fs-logo {
          width: 130px;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fs-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25));
        }

        .fs-logo-text {
          text-align: center;
        }

        .fs-logo-text h1 {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: bold;
          letter-spacing: 1.5px;
          margin-bottom: 0.5rem;
          color: white;
          line-height: 1.3;
        }

        .fs-logo-text .fs-highlight {
          color: var(--fs-gold);
        }

        .fs-logo-text .fs-location {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: normal;
          color: white;
        }

        .fs-arabic-text {
          text-align: center;
          font-size: clamp(1.6rem, 4.5vw, 2.8rem);
          margin: 0.75rem 0 0 0;
          font-family: 'Traditional Arabic', 'Amiri', 'Arabic Typesetting', serif;
          direction: rtl;
          color: #f7e7be;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Hero Section */
        .fs-hero {
          background: linear-gradient(135deg, var(--fs-primary-green) 0%, var(--fs-dark-green) 100%);
          color: var(--fs-text-light);
          padding: 2.5rem 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .fs-hero-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .fs-hero h2 {
          font-size: clamp(1rem, 2.2vw, 1.45rem);
          line-height: 1.8;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: white;
        }

        /* Container & Section */
        .fs-section {
          padding: 2.5rem 1rem;
          margin: 1rem auto;
          max-width: 1200px;
        }

        .fs-section-title {
          text-align: center;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          color: var(--fs-dark-green);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding-bottom: 1rem;
          font-weight: bold;
        }

        .fs-section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: var(--fs-gold);
        }

        .fs-section-title .fs-highlight {
          color: var(--fs-gold);
        }

        /* Services Grid */
        .fs-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .fs-service-card {
          background: white;
          padding: 1.75rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .fs-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 14px rgba(0,0,0,0.12);
        }

        .fs-service-card h3 {
          color: var(--fs-dark-green);
          margin-bottom: 1.25rem;
          font-size: clamp(1.15rem, 2.5vw, 1.35rem);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: bold;
          border-bottom: 2px solid var(--fs-light-gold);
          padding-bottom: 0.5rem;
        }

        .fs-service-card ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .fs-service-card ul li {
          padding: 0.55rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: clamp(0.9rem, 2vw, 1rem);
          color: #333;
          line-height: 1.5;
        }

        .fs-service-card ul li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--fs-gold);
          font-weight: bold;
          font-size: 1.1rem;
        }

        /* Highlight Boxes */
        .fs-highlight-boxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: 1.5rem;
          margin: 2.5rem 0 1rem 0;
        }

        .fs-highlight-box {
          background: linear-gradient(135deg, var(--fs-gold) 0%, #c49a2d 100%);
          padding: 1.75rem 1.25rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.12);
          color: var(--fs-dark-green);
        }

        .fs-highlight-box h3 {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          margin-bottom: 0.4rem;
          text-transform: uppercase;
          font-weight: bold;
        }

        .fs-highlight-box p {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-weight: 600;
          color: #1f2d22;
        }

        /* Gallery Section */
        .fs-gallery-section {
          background: white;
          padding: 3rem 1rem;
          margin: 1.5rem auto;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .fs-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 1.75rem;
          margin-top: 2rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .fs-gallery-item {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
          display: flex;
          flex-direction: column;
        }

        .fs-gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 14px rgba(0,0,0,0.15);
        }

        .fs-gallery-item img,
        .fs-gallery-item video {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .fs-gallery-caption {
          padding: 1rem;
          background: var(--fs-dark-green);
          color: white;
          text-align: center;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-weight: 500;
        }

        .fs-video-container {
          position: relative;
          width: 100%;
          height: 300px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fs-video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Certificates Section */
        .fs-certificates-section {
          background: linear-gradient(135deg, var(--fs-primary-green) 0%, var(--fs-dark-green) 100%);
          padding: 3rem 1.5rem;
          margin: 2rem auto;
          border-radius: 8px;
          color: white;
        }

        .fs-certificates-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        .fs-certificates-image {
          margin: 2rem auto 0 auto;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 18px rgba(0,0,0,0.25);
          max-width: 750px;
        }

        .fs-certificates-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* About Section */
        .fs-about-section {
          background: white;
          border-radius: 8px;
          padding: 3rem 1.5rem;
          margin: 2rem auto;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .fs-about-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.8;
          padding: 0 1rem;
          color: #333;
        }

        .fs-about-content p {
          margin-bottom: 1.5rem;
        }

        /* Membership Section */
        .fs-membership-section {
          background: linear-gradient(135deg, var(--fs-primary-green) 0%, var(--fs-dark-green) 100%);
          color: white;
          border-radius: 8px;
          padding: 3rem 1.5rem;
          margin: 2rem auto;
        }

        .fs-membership-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.8;
          padding: 0 1rem;
        }

        .fs-membership-content h3 {
          color: var(--fs-gold);
          font-size: clamp(1.3rem, 3vw, 2rem);
          margin-bottom: 0.75rem;
          font-weight: bold;
        }

        .fs-membership-content p {
          margin-bottom: 1.5rem;
          color: white;
        }

        /* Contact Section */
        .fs-contact-section {
          background: linear-gradient(135deg, var(--fs-dark-green) 0%, var(--fs-primary-green) 100%);
          color: var(--fs-text-light);
          padding: 3rem 1.5rem;
          text-align: center;
          border-radius: 8px;
          margin: 2rem auto;
        }

        .fs-contact-details {
          margin: 2rem auto;
          max-width: 900px;
          padding: 0 1rem;
        }

        .fs-phone-numbers {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin: 2rem 0;
        }

        .fs-phone-number {
          font-size: clamp(1.3rem, 4vw, 2.1rem);
          font-weight: bold;
          color: var(--fs-gold);
          text-decoration: none;
          transition: transform 0.3s ease, color 0.3s ease;
          white-space: nowrap;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          background: rgba(0,0,0,0.15);
        }

        .fs-phone-number:hover {
          transform: scale(1.05);
          color: var(--fs-light-gold);
          background: rgba(0,0,0,0.3);
        }

        .fs-address {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          margin: 2rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .fs-address-highlight {
          color: var(--fs-gold);
          font-weight: bold;
          font-size: clamp(1.3rem, 3vw, 2rem);
          text-transform: uppercase;
        }

        /* Bank & Donation Details */
        .fs-bank-details {
          background: rgba(255,255,255,0.08);
          padding: 2rem;
          border-radius: 8px;
          margin: 2.5rem auto;
          backdrop-filter: blur(10px);
          max-width: 700px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .fs-bank-details h3 {
          color: var(--fs-gold);
          margin-bottom: 1.25rem;
          font-size: clamp(1.3rem, 3vw, 1.9rem);
          font-weight: bold;
        }

        .fs-services-summary {
          margin: 2.5rem auto 1rem auto;
          padding: 1.5rem;
          background: rgba(255,255,255,0.08);
          border-radius: 8px;
          max-width: 900px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .fs-services-summary h3 {
          color: var(--fs-gold);
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .fs-services-summary-text {
          font-size: clamp(0.9rem, 2vw, 1.15rem);
          line-height: 1.8;
          word-break: break-word;
          letter-spacing: 1px;
          color: #f7e7be;
          font-weight: 600;
        }

        /* Dark Mode Overrides */
        .dark .fs-root {
          background-color: #0B1220;
          color: #F1F5F9;
        }
        .dark .fs-about-section {
          background: #172438;
          border: 1px solid #334155;
        }
        .dark .fs-about-content {
          color: #CBD5E1;
        }
        .dark .fs-gallery-section {
          background: #111C2E;
          border: 1px solid #334155;
        }
        .dark .fs-gallery-item {
          background: #172438;
          border: 1px solid #334155;
        }
        .dark .fs-highlight-box {
          background: #172438;
          border-color: #334155;
        }
        .dark .fs-highlight-box p {
          color: #CBD5E1;
        }
        .dark .fs-bank-details {
          background: #111C2E;
          border-color: #334155;
        }

        @media (max-width: 768px) {
          .fs-header { padding: 1.5rem 0; }
          .fs-logo { width: 100px; height: 100px; }
          .fs-phone-numbers { flex-direction: column; gap: 0.75rem; }
          .fs-phone-numbers span { display: none; }
          .fs-address { flex-direction: column; text-align: center; }
          .fs-services-grid { grid-template-columns: 1fr; }
          .fs-highlight-boxes { grid-template-columns: 1fr; }
          .fs-gallery-grid { grid-template-columns: 1fr; }
          .fs-gallery-item img, .fs-gallery-item video { height: 250px; }
          .fs-hero h2 { font-size: 1.05rem; }
        }

        @media (max-width: 480px) {
          .fs-logo { width: 85px; height: 85px; }
          .fs-hero h2 { font-size: 0.9rem !important; line-height: 1.5 !important; }
          .fs-gallery-item img, .fs-gallery-item video { height: 210px; }
          .fs-bank-details { padding: 1.25rem; }
        }
      `}</style>

      {/* Emergency Banner */}
      <div className="fs-emergency-banner">
        📞 AVAILABLE 24 HOURS / 7 DAYS - CALL NOW FOR IMMEDIATE ASSISTANCE
      </div>

      {/* Funeral Section Tabs */}
      <nav aria-label="Funeral Services Navigation" className="bg-[#143627] border-b border-amber-400/20 py-2.5 px-4 text-center">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
          <button
            type="button"
            className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#c9a961] text-[#1f2d22] shadow-sm flex items-center gap-1.5 cursor-default"
          >
            <span>📞</span> Funeral Service
          </button>
          <button
            type="button"
            onClick={() => setActiveTab && setActiveTab('death-committee')}
            className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>📋</span> Death Committee (FSF)
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="fs-header">
        <div className="fs-header-content">
          <div className="fs-logo-section">
            <div className="fs-logo" role="img" aria-label="Dawat-e-Islami Funeral Services Logo">
              <img
                src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/bg-removebg-preview.png"
                alt="Dawat-e-Islami Funeral Services Logo"
              />
            </div>
            <div className="fs-logo-text">
              <h1>
                DAWAT-E-ISLAMI<br />
                <span className="fs-highlight">FUNERAL SERVICES</span><br />
                <span className="fs-location">BRADFORD</span>
              </h1>
            </div>
            <div className="fs-arabic-text">
              مجلس کفن دفن دعوت اسلامی
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="fs-hero" id="fs-home">
        <div className="fs-hero-content">
          <h2>
            Our Dedicated Team is Managed by Islamic Scholars to Provide You with the
            Highest Quality of Service by Fulfilling All the Islamic Laws and Sunnah&apos;s
            Associated with a Funeral from the Last Breath to the Burial and Beyond
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="fs-section" id="fs-services">
        <h2 className="fs-section-title">
          Our <span className="fs-highlight">Services</span> Include
        </h2>

        <div className="fs-services-grid">
          <div className="fs-service-card">
            <h3>Administrative Services</h3>
            <ul>
              <li>Full administrative service</li>
              <li>Liaison with the cemetery</li>
              <li>Liaison with doctor and coroner&apos;s office</li>
              <li>Collection of the deceased from home/hospital</li>
              <li>24/7 availability</li>
            </ul>
          </div>

          <div className="fs-service-card">
            <h3>Facilities</h3>
            <ul>
              <li>Overnight cold storage facility</li>
              <li>Coffin box made to measure</li>
              <li>Condolence seating facilities for males and females</li>
              <li>Shower facilities for males and females</li>
              <li>Modern, dignified environment</li>
            </ul>
          </div>

          <div className="fs-service-card">
            <h3>Islamic Services</h3>
            <ul>
              <li>Full Sunnah Ghusl service: washing and shrouding according to Sunnah</li>
              <li>Full Sunnah burial service: Talqeen, Quran recitation, Azaan and Dua according to Sunnah</li>
              <li>Janazah Salah service</li>
              <li>Transport of the deceased in our hearse</li>
            </ul>
          </div>

          <div className="fs-service-card">
            <h3>Support Services</h3>
            <ul>
              <li>Transport to home, hospital, coroners, cemetery, and Dawat e Islami Funeral Service</li>
              <li>After funeral bereavement support</li>
              <li>Khatam, Esaal e Sawaab etc.</li>
              <li>Guidance throughout the entire process</li>
              <li>Compassionate care for families</li>
            </ul>
          </div>
        </div>

        {/* Highlight Boxes */}
        <div className="fs-highlight-boxes">
          <div className="fs-highlight-box">
            <h3>No Membership Required</h3>
            <p>No registration needed</p>
          </div>
          <div className="fs-highlight-box">
            <h3>No Service Charge</h3>
            <p>T&amp;C&apos;s Apply</p>
          </div>
          <div className="fs-highlight-box">
            <h3>Voluntary Donations</h3>
            <p>Donations are accepted</p>
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <section className="fs-section fs-gallery-section" id="fs-facilities">
        <h2 className="fs-section-title">
          Our <span className="fs-highlight">Facilities</span>
        </h2>

        <div className="fs-gallery-grid">
          <div className="fs-gallery-item">
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/seating-area.jpg"
              alt="Condolence Seating Area"
            />
            <div className="fs-gallery-caption">
              Comfortable Seating Area for Families
            </div>
          </div>

          <div className="fs-gallery-item">
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/ghusl_area.jpg"
              alt="Ghusl Area"
            />
            <div className="fs-gallery-caption">
              Dedicated Ghusl Area
            </div>
          </div>

          <div className="fs-gallery-item">
            <div className="fs-video-container">
              <video controls preload="metadata" aria-label="Ghusl Area Video Tour">
                <source src="https://videos.files.wordpress.com/b68gjL4l/ghusl_area_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fs-gallery-caption">
              Ghusl Area - Video Tour
            </div>
          </div>

          <div className="fs-gallery-item">
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/private_ambulance.jpg"
              alt="Private Ambulance"
            />
            <div className="fs-gallery-caption">
              Private Ambulance Service
            </div>
          </div>

          <div className="fs-gallery-item">
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/vol.jpg"
              alt="Dedicated Volunteers"
            />
            <div className="fs-gallery-caption">
              Our Dedicated Volunteers
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="fs-section fs-certificates-section" id="fs-certificates">
        <h2 className="fs-section-title" style={{ color: 'var(--fs-gold)' }}>
          Our <span style={{ color: 'white' }}>Certifications</span>
        </h2>
        <div className="fs-certificates-content">
          <p style={{ color: 'white', fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '1.5rem' }}>
            We maintain the highest standards of service, adhering to all necessary certifications and Islamic guidelines.
          </p>
          <div className="fs-certificates-image">
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/Certificates.jpg"
              alt="Dawat-e-Islami Funeral Services Certificates"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="fs-section fs-about-section" id="fs-about">
        <h2 className="fs-section-title">
          About <span className="fs-highlight">Our Service</span>
        </h2>
        <div className="fs-about-content">
          <p>
            Dawat-e-Islami Funeral Services Bradford is dedicated to providing compassionate, dignified Islamic funeral services to the community. Our team of Islamic scholars ensures that every aspect of the funeral process adheres strictly to Islamic laws and Sunnah.
          </p>
          <p>
            We understand that losing a loved one is one of life&apos;s most difficult experiences. Our mission is to ease this burden by handling all arrangements with care, respect, and in accordance with Islamic traditions.
          </p>
          <p>
            <strong>Available 24 hours a day, 7 days a week</strong> — we are here when you need us most.
          </p>
        </div>
      </section>

      {/* Membership Section */}
      <section className="fs-section fs-membership-section" id="fs-membership">
        <h2 className="fs-section-title" style={{ color: 'var(--fs-gold)' }}>
          Membership <span className="fs-highlight" style={{ color: 'white' }}>Information</span>
        </h2>
        <div className="fs-membership-content">
          <h3>No Membership or Registration Required</h3>
          <p>
            Our services are available to everyone in the community without the need for membership or registration. We believe that when families are in need, administrative barriers should not stand in the way of proper Islamic funeral services.
          </p>
          <h3 style={{ marginTop: '2rem' }}>No Service Charge</h3>
          <p>
            We do not charge for our services (Terms &amp; Conditions apply). Our goal is to serve the community and fulfill our Islamic duty.
          </p>
          <h3 style={{ marginTop: '2rem' }}>Voluntary Donations</h3>
          <p>
            While we do not charge for services, voluntary donations are gratefully accepted. Your donations help us continue providing these essential services to the community and can be used for any permissible, religious, reformatory, welfare, spiritual, benevolent, or good purpose.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="fs-contact-section" id="fs-contact">
        <h2 className="fs-section-title" style={{ color: 'var(--fs-gold)' }}>
          Contact <span style={{ color: 'white' }}>Us</span>
        </h2>

        <div className="fs-contact-details">
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '2rem', color: 'white' }}>
            Call Us Anytime — We&apos;re Here 24/7
          </h3>

          <div className="fs-phone-numbers">
            <a href="tel:01274442663" className="fs-phone-number">01274 442663</a>
            <span style={{ fontSize: '2rem', color: 'var(--fs-gold)' }}>|</span>
            <a href="tel:07936883621" className="fs-phone-number">07936 883621</a>
          </div>

          <div className="fs-address">
            <span style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>📍</span>
            <div>
              <div className="fs-address-highlight">Faizan e Madinah</div>
              <div>Maudsley Street, Bradford, BD3 9LE</div>
            </div>
          </div>
        </div>

        {/* Donation Section */}
        <div className="fs-bank-details">
          <h3>Make a Donation</h3>
          <p style={{ color: 'white', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Choose an amount to support the 24/7 Dawat-e-Islami Funeral Service:
          </p>

          <form onSubmit={handleDonate} className="space-y-4 max-w-md mx-auto text-left">
            <div className="grid grid-cols-4 gap-2">
              {[25, 50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setDonationAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`py-2 px-3 rounded-lg font-bold text-sm transition-all border ${
                    donationAmount === amt && !customAmount
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                  }`}
                >
                  £{amt}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 font-bold">£</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-amber-300"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Donate Now
              </button>
            </div>
          </form>

          <p style={{ marginTop: '1.5rem', fontStyle: 'italic', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', color: '#f4e4b8' }}>
            Give your donations to Dawat-e-Islami. Your donation can be used for any permissible, religious, reformatory, welfare, spiritual, benevolent, and good purpose.
          </p>
        </div>

        {/* Services Summary */}
        <div className="fs-services-summary">
          <h3>Complete Services Include:</h3>
          <div className="fs-services-summary-text">
            COLLECTION | COLD STORAGE | GHUSL | SHROUD | CASKET | JANAZAH | TRANSPORT | BURIAL | SUPPORT
          </div>
        </div>
      </section>
    </div>
  );
};
