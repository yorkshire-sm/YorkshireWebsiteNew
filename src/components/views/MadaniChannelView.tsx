import React, { useState } from 'react';
import { 
  Play, 
  Volume2, 
  Globe, 
  Tv, 
  Radio, 
  RadioTower, 
  ExternalLink, 
  Share2, 
  Check, 
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Heart
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface MadaniChannelViewProps {
  onOpenDonationModal?: (causeId?: string) => void;
  onBackToHome?: () => void;
}

export const MadaniChannelView: React.FC<MadaniChannelViewProps> = ({ 
  onOpenDonationModal, 
  onBackToHome 
}) => {
  const { resolvedTheme } = useTheme();
  const [videoLang, setVideoLang] = useState<'urdu' | 'english' | 'bangla'>('urdu');
  const [audioLang, setAudioLang] = useState<'urdu' | 'english' | 'bangla'>('urdu');
  const [copiedLink, setCopiedLink] = useState(false);

  const videoStreams = {
    urdu: 'https://streaming.madanichannel.tv/videos/embed/b9790f10-cb0d-4e30-82bf-84a756234e58?autoplay=1&warningTitle=0&peertubeLink=0',
    english: 'https://streaming.madanichannel.tv/videos/embed/c6a600b0-82cb-454a-8953-2bb2bb372edc?autoplay=1&warningTitle=0&peertubeLink=0',
    bangla: 'https://streaming.madanichannel.tv/videos/embed/d3e49b76-ac06-4689-a641-9200445b647f?autoplay=1&warningTitle=0&peertubeLink=0',
  };

  const audioStreams = {
    urdu: `https://audio.madanichannel.tv/public/urdu_live/embed?theme=${resolvedTheme}`,
    english: `https://audio.madanichannel.tv/public/english_live/embed?theme=${resolvedTheme}`,
    bangla: `https://audio.madanichannel.tv/public/bangla_live/embed?theme=${resolvedTheme}`,
  };

  const handleCopyShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0B1220] text-slate-800 dark:text-slate-100 transition-colors pb-16">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-950 via-teal-900 to-slate-950 text-white pt-8 sm:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-teal-800/60">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center gap-2 text-xs text-teal-300/80 mb-6 font-medium">
            <button 
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-teal-200">Media & Transmission</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">Madani Channel Live</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span>24/7 GLOBAL BROADCAST LIVE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
                Madani Channel <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">Live Transmission</span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Watch and listen to 100% Islamic programming with zero commercial advertising or musical content. 
                Streaming live worldwide in Urdu, English, and Bangla with authentic Quranic recitation, Sunnah teachings, 
                blessed Naats, and spiritual cure sessions.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyShare}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-xs border border-white/15 transition-all cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Link Copied!' : 'Share Stream'}</span>
              </button>

              {onOpenDonationModal && (
                <button
                  type="button"
                  onClick={() => onOpenDonationModal('madani-channel')}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-slate-950" />
                  <span>Support Channel</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 sm:pt-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-800/80 text-amber-300 flex items-center justify-center shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">100% Islamic</div>
                <div className="text-[11px] text-teal-200/80">No commercial ads</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-800/80 text-amber-300 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Multilingual</div>
                <div className="text-[11px] text-teal-200/80">Urdu, English, Bangla</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-800/80 text-amber-300 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">HD Video & Audio</div>
                <div className="text-[11px] text-teal-200/80">24/7 crystal clear sound</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-800/80 text-amber-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Family Safe</div>
                <div className="text-[11px] text-teal-200/80">Sunnah-guided content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Streaming Content Area */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 pt-8 sm:pt-10 space-y-10 sm:space-y-12">
        {/* Video Streaming Section */}
        <div className="video-streaming-section">
          <div className="section-header">
            <div className="section-title">
              <i className="fa fa-youtube-play">
                <Play className="w-5 h-5 fill-current" />
              </i>
              <span>Video Streaming</span>
            </div>
          </div>
          
          <div className="language-tabs">
            <button 
              type="button"
              className={`video-tab-btn ${videoLang === 'urdu' ? 'active' : ''}`}
              data-target="urdu-iframe"
              onClick={() => setVideoLang('urdu')}
            >
              <i className="fa fa-youtube-play">
                <Play className="w-3.5 h-3.5 fill-current" />
              </i>
              <span>Urdu</span>
            </button>
            <button 
              type="button"
              className={`video-tab-btn ${videoLang === 'english' ? 'active' : ''}`}
              data-target="english-iframe"
              onClick={() => setVideoLang('english')}
            >
              <i className="fa fa-youtube-play">
                <Play className="w-3.5 h-3.5 fill-current" />
              </i>
              <span>English</span>
            </button>
            <button 
              type="button"
              className={`video-tab-btn ${videoLang === 'bangla' ? 'active' : ''}`}
              data-target="bangla-iframe"
              onClick={() => setVideoLang('bangla')}
            >
              <i className="fa fa-youtube-play">
                <Play className="w-3.5 h-3.5 fill-current" />
              </i>
              <span>Bangla</span>
            </button>
          </div>
          
          <div className="video-iframe-wrapper">
            <div id="urdu-iframe" className={`iframe-container ${videoLang === 'urdu' ? 'active' : ''}`}>
              <div className="relative aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="450" 
                  src={videoStreams.urdu} 
                  title="Madani Channel Urdu Live Video Stream"
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-full min-h-[260px] sm:min-h-[400px] lg:min-h-[460px]"
                />
              </div>
            </div>
            <div id="english-iframe" className={`iframe-container ${videoLang === 'english' ? 'active' : ''}`}>
              <div className="relative aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="450" 
                  src={videoStreams.english} 
                  title="Madani Channel English Live Video Stream"
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-full min-h-[260px] sm:min-h-[400px] lg:min-h-[460px]"
                />
              </div>
            </div>
            <div id="bangla-iframe" className={`iframe-container ${videoLang === 'bangla' ? 'active' : ''}`}>
              <div className="relative aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="450" 
                  src={videoStreams.bangla} 
                  title="Madani Channel Bangla Live Video Stream"
                  frameBorder="0" 
                  allowFullScreen
                  className="w-full h-full min-h-[260px] sm:min-h-[400px] lg:min-h-[460px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Audio Streaming Section */}
        <div className="container about_p !px-0 !max-w-none">
          <div className="audio-streaming-section">
            <div className="section-header">
              <div className="section-title">
                <i className="fa fa-volume-up">
                  <Volume2 className="w-5 h-5" />
                </i>
                <span>Audio Streaming</span>
              </div>
            </div>
            
            <div className="language-tabs">
              <button 
                type="button"
                className={`audio-tab-btn ${audioLang === 'urdu' ? 'active' : ''}`}
                data-target="iframe-urdu"
                onClick={() => setAudioLang('urdu')}
              >
                <i className="fa fa-volume-up">
                  <Volume2 className="w-3.5 h-3.5" />
                </i>
                <span>Urdu</span>
              </button>
              <button 
                type="button"
                className={`audio-tab-btn ${audioLang === 'english' ? 'active' : ''}`}
                data-target="iframe-english"
                onClick={() => setAudioLang('english')}
              >
                <i className="fa fa-volume-up">
                  <Volume2 className="w-3.5 h-3.5" />
                </i>
                <span>English</span>
              </button>
              <button 
                type="button"
                className={`audio-tab-btn ${audioLang === 'bangla' ? 'active' : ''}`}
                data-target="iframe-bangla"
                onClick={() => setAudioLang('bangla')}
              >
                <i className="fa fa-volume-up">
                  <Volume2 className="w-3.5 h-3.5" />
                </i>
                <span>Bangla</span>
              </button>
            </div>
            
            <div className="audio-iframe-wrapper">
              <div id="iframe-urdu" className={`iframe-container ${audioLang === 'urdu' ? 'active' : ''}`}>
                <iframe 
                  src={audioStreams.urdu} 
                  title="Madani Channel Urdu Live Audio Stream"
                  frameBorder="0" 
                  allowTransparency
                  width="100%" 
                  height="200"
                  className="w-full rounded-lg"
                />
              </div>
              <div id="iframe-english" className={`iframe-container ${audioLang === 'english' ? 'active' : ''}`}>
                <iframe 
                  src={audioStreams.english} 
                  title="Madani Channel English Live Audio Stream"
                  frameBorder="0" 
                  allowTransparency
                  width="100%" 
                  height="200"
                  className="w-full rounded-lg"
                />
              </div>
              <div id="iframe-bangla" className={`iframe-container ${audioLang === 'bangla' ? 'active' : ''}`}>
                <iframe 
                  src={audioStreams.bangla} 
                  title="Madani Channel Bangla Live Audio Stream"
                  frameBorder="0" 
                  allowTransparency
                  width="100%" 
                  height="200"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Informational Guidance Cards matching website cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
          <div className="bg-white dark:bg-[#111C2E] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-800 dark:text-teal-400 flex items-center justify-center font-bold mb-4">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              UK & European Satellite
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Madani Channel is available on satellite receivers across the United Kingdom and Europe free-to-air. Tune into standard DVB-S satellite transponders.
            </p>
            <span className="inline-flex text-[11px] font-bold text-teal-800 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-md">
              Astra 2G / Sky UK Freeview
            </span>
          </div>

          <div className="bg-white dark:bg-[#111C2E] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Official Mobile Apps
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Download the official Madani Channel app on Google Play Store and Apple iOS App Store for seamless on-the-go viewing with background audio playback.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.dawateislami.madanichannel" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 dark:text-teal-400 hover:underline"
            >
              <span>Download on Play Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white dark:bg-[#111C2E] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
              <RadioTower className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Live Interactive Programs
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Participate in live call-in shows such as Dar-ul-Ifta Ahlesunnat (Fatwa questions), Silsila Zehni Azmayesh, and Rohani Ilaj (Spiritual Cures).
            </p>
            <span className="inline-flex text-[11px] font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
              Live Phone-in Broadcasts
            </span>
          </div>
        </div>
      </div>

      {/* Styled to match website's Dawat-e-Islami green/teal & amber brand colors in both Light & Dark modes */}
      <style>{`
        .video-streaming-section,
        .audio-streaming-section {
          max-width: 1000px;
          margin: 0 auto 30px auto;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(6, 78, 59, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .dark .video-streaming-section,
        .dark .audio-streaming-section {
          background: #111C2E;
          border-color: #1e293b;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
        }

        .video-streaming-section:hover,
        .audio-streaming-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(6, 78, 59, 0.14);
        }

        .dark .video-streaming-section:hover,
        .dark .audio-streaming-section:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
        }

        /* Section Header matching website brand green/teal */
        .video-streaming-section .section-header,
        .audio-streaming-section .section-header {
          background: linear-gradient(135deg, #064E3B 0%, #0D5C4B 50%, #115E59 100%);
          padding: 18px 24px;
          position: relative;
        }

        .dark .video-streaming-section .section-header,
        .dark .audio-streaming-section .section-header {
          background: linear-gradient(135deg, #06392D 0%, #0F3F37 50%, #134E4A 100%);
        }

        .video-streaming-section .section-title,
        .audio-streaming-section .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
        }

        .video-streaming-section .section-title i,
        .audio-streaming-section .section-title i {
          font-size: 20px;
          background: rgba(251, 191, 36, 0.2);
          border: 1.5px solid rgba(251, 191, 36, 0.45);
          color: #FBBF24;
          padding: 8px;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .video-streaming-section .language-tabs,
        .audio-streaming-section .language-tabs {
          display: flex;
          background: #f8fafc;
          padding: 14px 20px;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          border-bottom: 1px solid #f1f5f9;
        }

        .dark .video-streaming-section .language-tabs,
        .dark .audio-streaming-section .language-tabs {
          background: #0d1524;
          border-color: #1e293b;
        }

        .video-tab-btn,
        .audio-tab-btn {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #475569;
          padding: 9px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.25s ease;
          font-weight: 600;
          font-size: 13.5px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 115px;
          justify-content: center;
        }

        .dark .video-tab-btn,
        .dark .audio-tab-btn {
          background: #172438;
          border-color: #334155;
          color: #cbd5e1;
        }

        .video-tab-btn:hover,
        .audio-tab-btn:hover {
          border-color: #0F766E;
          color: #064E3B;
          background: #F0FDF4;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(6, 78, 59, 0.15);
        }

        .dark .video-tab-btn:hover,
        .dark .audio-tab-btn:hover {
          border-color: #2DD4BF;
          color: #5EEAD4;
          background: #13282C;
        }

        /* Active tab button matching website green/teal gradient and subtle gold accent */
        .video-tab-btn.active,
        .audio-tab-btn.active {
          background: linear-gradient(135deg, #064E3B, #0F766E);
          border-color: #047857;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(6, 78, 59, 0.35);
        }

        .dark .video-tab-btn.active,
        .dark .audio-tab-btn.active {
          background: linear-gradient(135deg, #0F766E, #115E59);
          border-color: #14B8A6;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(20, 184, 166, 0.25);
        }

        .video-iframe-wrapper,
        .audio-iframe-wrapper {
          padding: 20px;
          background: #f8fafc;
        }

        .dark .video-iframe-wrapper,
        .dark .audio-iframe-wrapper {
          background: #0d1524;
        }

        .video-streaming-section .iframe-container,
        .audio-streaming-section .iframe-container {
          display: none;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          background: #000000;
        }

        .video-streaming-section .iframe-container.active,
        .audio-streaming-section .iframe-container.active {
          display: block;
          animation: fadeInVideo 0.35s ease;
        }

        .audio-streaming-section .iframe-container {
          background: #ffffff;
        }

        .dark .audio-streaming-section .iframe-container {
          background: #172438;
        }

        .video-streaming-section .iframe-container iframe,
        .audio-streaming-section .iframe-container iframe {
          width: 100%;
          border: none;
          display: block;
        }

        @keyframes fadeInVideo {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInAudio {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .video-streaming-section .section-title,
          .audio-streaming-section .section-title {
            font-size: 17px;
          }
          .video-streaming-section .language-tabs,
          .audio-streaming-section .language-tabs {
            padding: 10px;
            gap: 6px;
          }
          .video-tab-btn,
          .audio-tab-btn {
            min-width: 90px;
            padding: 7px 12px;
            font-size: 12px;
          }
          .video-iframe-wrapper,
          .audio-iframe-wrapper {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};
