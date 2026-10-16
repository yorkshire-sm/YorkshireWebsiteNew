import React, { useState } from 'react';
import { 
  Bell, 
  Compass, 
  VolumeX, 
  CheckCircle, 
  Calendar, 
  Globe, 
  Clock, 
  Smartphone, 
  ArrowLeft,
  Download,
  Star,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface PrayerTimesAppViewProps {
  onBackToHome?: () => void;
}

export const PrayerTimesAppView: React.FC<PrayerTimesAppViewProps> = ({ onBackToHome }) => {
  const [selectedBanner, setSelectedBanner] = useState<string | null>(null);

  const features = [
    {
      title: "Prayer Timings Alert",
      desc: "Stay notified with the sweet vocals of Azan alerts at the start of prayer times, plus warning notifications before prayer time lapses.",
      icon: <Bell className="w-9 h-9 text-white" />
    },
    {
      title: "Accurate Qibla Direction",
      desc: "Instant and pinpoint Qibla compass that automatically points directly to the Holy Ka'abah from anywhere in the UK or across the globe.",
      icon: <Compass className="w-9 h-9 text-white" />
    },
    {
      title: "Jama'at Silent Mode",
      desc: "Automatically silences your smartphone when you enter the Masjid during congregation timings so your Salah remains undisturbed.",
      icon: <VolumeX className="w-9 h-9 text-white" />
    },
    {
      title: "Digital Tasbih Counter",
      desc: "An intuitive digital counter for your daily recitations, Durood-e-Pak, and tasbihaat with haptic vibration feedback and saved counts.",
      icon: <Sparkles className="w-9 h-9 text-white" />
    },
    {
      title: "Qaza (Missed) Namaz Tracker",
      desc: "Easily log and track your missed prayers with progress tracking, detailed analytics, and secure cloud sync to Google Drive.",
      icon: <CheckCircle className="w-9 h-9 text-white" />
    },
    {
      title: "Hanafi & Shafai Jurisprudence",
      desc: "Accurate prayer timetables calculated for both Hanafi and Shafai schools of thought based on the research of Ala Hazrat.",
      icon: <Layers className="w-9 h-9 text-white" />
    },
    {
      title: "Hijri & Gregorian Calendar",
      desc: "Complete monthly schedules showing both Islamic Lunar dates and Gregorian dates, along with important Islamic event markers.",
      icon: <Calendar className="w-9 h-9 text-white" />
    },
    {
      title: "Worldwide GPS Location",
      desc: "Auto-detects your location via GPS or lets you select and bookmark any city from over 200,000 global locations.",
      icon: <Globe className="w-9 h-9 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1220] text-slate-800 dark:text-slate-100 font-sans pb-20 w-full max-w-full overflow-x-hidden transition-colors">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white dark:bg-[#111C2E] border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#ce4729] dark:hover:text-[#F87171] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Dawat-e-Islami</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-[#ce4729] dark:text-[#F87171]">Prayer Times App</span>
          </div>
        </div>
      </div>

      {/* Embedded Styles matching user's custom CSS */}
      <style>{`
        .header-section {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #ce4729 0%, #a8381e 100%);
          color: white;
          margin-bottom: 60px;
        }

        .header-section h1 {
          font-size: 3rem;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          font-weight: 700;
        }

        .header-section .lead {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          color: white;
          opacity: 0.95;
        }

        .header-section .lead a {
          color: #fde8d7;
          text-decoration: none;
          font-weight: 600;
        }

        .header-section .lead a:hover {
          text-decoration: underline;
        }

        /* Features Section */
        .features-section {
          padding: 2rem 0;
        }
        
        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .dark .feature-card {
          background: #172438;
          border: 1px solid #334155;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #ce4729, #a8381e);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(206, 71, 41, 0.2);
        }

        .feature-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          background: linear-gradient(135deg, #ce4729, #a8381e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(206, 71, 41, 0.3);
          flex-shrink: 0;
        }

        .feature-icon-wrapper img, .feature-icon-wrapper svg {
          width: 38px;
          height: 38px;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ce4729;
          margin-bottom: 15px;
        }

        .dark .feature-card h3 {
          color: #F87171;
        }

        .feature-card p {
          color: #666;
          font-size: 1rem;
          line-height: 1.7;
          flex-grow: 1;
        }

        .dark .feature-card p {
          color: #CBD5E1;
        }
        
        /* New Detailed Content Sections */
        .detailed-content-section {
          background-color: #fff;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
          overflow: hidden;
        }

        .dark .detailed-content-section {
          background-color: #172438;
          border: 1px solid #334155;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .detailed-content-section h2 {
          font-size: 2.2rem;
          color: #ce4729;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .dark .detailed-content-section h2 {
          color: #F87171;
        }

        .dark .detailed-content-section p {
          color: #CBD5E1 !important;
        }
        
        .detailed-content-section .feature-list {
          list-style: none;
          padding-left: 0;
        }

        .detailed-content-section .feature-list li {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 20px;
          display: flex;
          align-items: flex-start;
        }

        .dark .detailed-content-section .feature-list li {
          color: #CBD5E1;
        }

        .dark .detailed-content-section .feature-list li strong {
          color: #F1F5F9 !important;
        }

        .detailed-content-section .feature-list li svg {
          margin-right: 14px;
          margin-top: 4px;
          flex-shrink: 0;
          color: #ce4729;
        }

        .dark .detailed-content-section .feature-list li svg {
          color: #F87171;
        }

        @media (max-width: 640px) {
          .header-section h1 {
            font-size: 2.2rem;
          }
          .header-section {
            padding: 40px 15px;
            margin-bottom: 40px;
          }
          .detailed-content-section {
            padding: 24px;
          }
          .detailed-content-section h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      {/* Header Section */}
      <header className="header-section">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Official Islamic Application</span>
          </div>
          <h1>Prayer Times (Salah & Qibla)</h1>
          <p className="lead">
            The meticulous research of <a href="#research" className="underline font-bold">Ala Hazrat Imam Ahmad Raza Khan</a> has made it easy for millions of Muslims across Yorkshire, the UK, and the world to offer their Salah with complete accuracy and devotion.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.dawateislami.namaz&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-slate-900 text-white rounded-2xl border border-white/20 shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 512 512" fill="none">
                <path d="M60.6 28.5C54.4 35 51 45.3 51 58.3v395.4c0 13 3.4 23.3 9.6 29.8l1.6 1.5 221.7-221.7v-5.2L62.2 27l-1.6 1.5z" fill="#00e5ff" />
                <path d="M356.5 321.4l-72.6-72.6v-5.2l72.6-72.6 1.6.9 86 48.9c24.6 14 24.6 36.9 0 50.9l-86 48.9-1.6.8z" fill="#ffea00" />
                <path d="M283.9 248.8L60.6 473.5c8.1 8.6 21.4 9.6 36.3 1.2l259.6-147.5-72.6-78.4z" fill="#ff3d00" />
                <path d="M283.9 248.8l72.6-72.6L96.9 28.7C82 20.3 68.7 21.3 60.6 29.9l223.3 218.9z" fill="#00e676" />
              </svg>
              <div className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 leading-none">
                  GET IT ON
                </span>
                <span className="block text-lg font-bold font-sans text-white leading-tight">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="https://apps.apple.com/in/app/prayer-times/id430204572"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black hover:bg-slate-900 text-white rounded-2xl border border-white/20 shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-7 h-7 shrink-0 fill-current text-white" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.56-11.23-20.89-14.78-33.99-3.56-13.1-5.34-25.07-5.34-35.91 0-15.11 3.79-27.56 11.37-37.34 7.58-9.78 17.18-14.77 28.8-14.99 4.89 0 10.22 1.25 15.99 3.74 5.76 2.5 9.4 3.79 10.92 3.89 1.96 0 5.86-1.39 11.71-4.17 5.84-2.77 11.08-4.04 15.71-3.8 11.63.65 21.05 4.96 28.26 12.93-10.22 6.19-15.23 14.88-15.01 26.08.22 8.91 3.59 16.41 10.11 22.5 6.52 6.08 14.34 9.67 23.47 10.76-2.07 6.08-4.57 12.39-7.51 18.91zM119.22 31.84c0-7.17 2.61-13.8 7.82-19.89 5.22-6.08 11.73-9.88 19.56-11.41.22 1.3.33 2.5.33 3.59 0 7.06-2.72 13.91-8.15 20.54-5.43 6.63-12.06 10.32-19.89 11.08-.11-1.3-.22-2.39-.22-3.91z"/>
              </svg>
              <div className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 leading-none">
                  DOWNLOAD ON THE
                </span>
                <span className="block text-lg font-bold font-sans text-white leading-tight">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Full-Size Uncropped App Poster Showcase */}
        <div className="mb-14 bg-white dark:bg-[#172438] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md transition-colors">
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#ce4729] rounded-lg text-xs font-bold text-white uppercase tracking-wider">
                Official App Poster
              </span>
              <span className="text-sm font-semibold text-slate-200 hidden sm:inline">
                High-Resolution Prayer Times & Qibla Direction
              </span>
            </div>
            <button
              onClick={() => setSelectedBanner('https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/prayer-times.jpg')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold border border-white/20 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen</span>
            </button>
          </div>

          <div 
            onClick={() => setSelectedBanner('https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/prayer-times.jpg')}
            className="w-full bg-slate-100 dark:bg-[#111C2E] flex items-center justify-center p-2 sm:p-4 cursor-pointer group"
          >
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/prayer-times.jpg"
              alt="Download To find Accurate prayer times & Qibla direction"
              className="w-full h-auto object-contain block mx-auto rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Features Section */}
        <section className="features-section mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ce4729] dark:text-[#F87171]">Comprehensive Tools</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-1 mb-3">
              Why Millions Trust The Prayer Times App
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Designed with precision by the I.T. Department of Dawat-e-Islami to serve every Muslim's spiritual daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feat.icon}
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Content Section 1: Islamic Astronomical Research */}
        <section id="research" className="detailed-content-section">
          <h2>Precision Founded on Authentic Research</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Unlike standard applications that rely solely on crude computational algorithms without Shar'i validation, the Dawat-e-Islami Prayer Times system is built upon decades of research conducted by Majlis Touqeet (Astronomical Timing Department) in accordance with the works of <strong>Ameer-e-Ahl-e-Sunnat</strong> and <strong>Imam-e-Ahle-Sunnat Ala Hazrat Imam Ahmad Raza Khan</strong>.
          </p>

          <ul className="feature-list">
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Validated Solar Angles:</strong> Meticulous calculation of Subh-e-Sadiq (Fajr) and twilight disappearance (Isha) specifically calibrated for higher latitudes including the UK and Northern Europe.
              </div>
            </li>
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Hanafi & Shafai Accuracy:</strong> The Asr time transitions smoothly according to your chosen Madhhab (single shadow for Shafai, double shadow for Hanafi).
              </div>
            </li>
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Custom Manual Time Offsets:</strong> Easily adjust timings by +/- minutes to sync with the exact congregation Iqamah schedules of your local Yorkshire Masjid.
              </div>
            </li>
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Forbidden Prayer Times Alert:</strong> Clearly marks the Makrooh (disliked/forbidden) times for prayer during Sunrise (Tulu), Solar Zenith (Zawaal/Nisf-un-Nahar), and Sunset (Ghuroob).
              </div>
            </li>
          </ul>
        </section>

        {/* Detailed Content Section 2: Smart Convenience & Masjid Etiquette */}
        <section className="detailed-content-section">
          <h2>Smart Features for Everyday Peace of Mind</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            The app is loaded with thoughtful utilities created to protect the sanctity of the Masjid and assist believers in maintaining consistency in their ibadah.
          </p>

          <ul className="feature-list">
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Jama'at Auto-Silent Mode:</strong> Set your Masjid congregation times or let geo-location automatically switch your device to vibrate/silent when you are in the house of Allah, avoiding embarrassing ringtones.
              </div>
            </li>
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Complete Qaza-e-Umri Ledger:</strong> Record how many missed prayers you have accumulated and systematically tick them off as you pray them, with automatic cloud sync.
              </div>
            </li>
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Authentic Azan Vocals:</strong> Choose from inspiring Azan recitations by renowned Muazzins of Dawat-e-Islami with customizable audio levels.
              </div>
            </li>
            <li>
              <CheckCircle className="w-6 h-6" />
              <div>
                <strong className="text-slate-900">Works 100% Offline:</strong> Once your location timetable is downloaded, the app functions fully without requiring continuous mobile data or Wi-Fi.
              </div>
            </li>
          </ul>
        </section>

        {/* Final Download Call to Action */}
        <section className="bg-gradient-to-br from-[#ce4729] to-[#a8381e] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl mb-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get Started with the Free Prayer Times App Today
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Join over 3 million Muslims worldwide who rely on Dawat-e-Islami's trusted digital platform every day for their prayers and spiritual reminders.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.dawateislami.namaz&hl=en_US"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-black hover:bg-slate-900 text-white rounded-2xl border border-white/20 shadow-xl transition-all hover:scale-105"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 512 512" fill="none">
                  <path d="M60.6 28.5C54.4 35 51 45.3 51 58.3v395.4c0 13 3.4 23.3 9.6 29.8l1.6 1.5 221.7-221.7v-5.2L62.2 27l-1.6 1.5z" fill="#00e5ff" />
                  <path d="M356.5 321.4l-72.6-72.6v-5.2l72.6-72.6 1.6.9 86 48.9c24.6 14 24.6 36.9 0 50.9l-86 48.9-1.6.8z" fill="#ffea00" />
                  <path d="M283.9 248.8L60.6 473.5c8.1 8.6 21.4 9.6 36.3 1.2l259.6-147.5-72.6-78.4z" fill="#ff3d00" />
                  <path d="M283.9 248.8l72.6-72.6L96.9 28.7C82 20.3 68.7 21.3 60.6 29.9l223.3 218.9z" fill="#00e676" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 leading-none">
                    GET IT ON
                  </span>
                  <span className="block text-lg font-bold font-sans text-white leading-tight">
                    Google Play
                  </span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/in/app/prayer-times/id430204572"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-black hover:bg-slate-900 text-white rounded-2xl border border-white/20 shadow-xl transition-all hover:scale-105"
              >
                <svg className="w-7 h-7 shrink-0 fill-current text-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.56-11.23-20.89-14.78-33.99-3.56-13.1-5.34-25.07-5.34-35.91 0-15.11 3.79-27.56 11.37-37.34 7.58-9.78 17.18-14.77 28.8-14.99 4.89 0 10.22 1.25 15.99 3.74 5.76 2.5 9.4 3.79 10.92 3.89 1.96 0 5.86-1.39 11.71-4.17 5.84-2.77 11.08-4.04 15.71-3.8 11.63.65 21.05 4.96 28.26 12.93-10.22 6.19-15.23 14.88-15.01 26.08.22 8.91 3.59 16.41 10.11 22.5 6.52 6.08 14.34 9.67 23.47 10.76-2.07 6.08-4.57 12.39-7.51 18.91zM119.22 31.84c0-7.17 2.61-13.8 7.82-19.89 5.22-6.08 11.73-9.88 19.56-11.41.22 1.3.33 2.5.33 3.59 0 7.06-2.72 13.91-8.15 20.54-5.43 6.63-12.06 10.32-19.89 11.08-.11-1.3-.22-2.39-.22-3.91z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 leading-none">
                    DOWNLOAD ON THE
                  </span>
                  <span className="block text-lg font-bold font-sans text-white leading-tight">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onBackToHome}
                className="text-white/80 hover:text-white text-sm font-semibold underline"
              >
                Return to Dawat-e-Islami Yorkshire Home
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* High-Resolution Poster Lightbox Modal */}
      {selectedBanner && (
        <div
          onClick={() => setSelectedBanner(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[95vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-sm font-bold text-amber-400">
                Official Prayer Times App Poster (Full Resolution)
              </span>
              <button
                onClick={() => setSelectedBanner(null)}
                className="p-1 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-2 overflow-auto bg-black flex items-center justify-center">
              <img
                src={selectedBanner}
                alt="Full Size Prayer Times Poster"
                className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain block mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
