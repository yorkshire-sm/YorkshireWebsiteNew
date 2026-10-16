import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  ExternalLink, 
  Navigation, 
  Clock, 
  Sparkles,
  Compass,
  BookOpen,
  PhoneCall,
  Shield,
  ArrowRight,
  Building
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDonationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenDonationModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 3 Main Modern Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: About & Mission */}
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div>
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-800 dark:from-teal-900 dark:via-teal-800 dark:to-emerald-900 p-6 text-white border-b border-teal-700/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center font-heading font-black text-xl text-amber-300 shadow-inner">
                    DI
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-teal-400/20 text-teal-200 border border-teal-300/30 rounded-full">
                    Est. 1981
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Dawat-e-Islami UK
                </h3>
                <p className="text-xs text-teal-100 dark:text-teal-200 mt-1">
                  Yorkshire Regional Islamic Center & Community Services
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dedicated to propagating the teachings of the Holy Quran and Sunnah globally under the spiritual guidance of Ameer-e-Ahlesunnat Hazrat Allama Maulana Muhammad Ilyas Attar Qadri.
                </p>

                {/* 24/7 Bereavement Dispatch Pill */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      24/7 Bereavement Dispatch
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Emergency: <a href="tel:01274442663" className="text-teal-700 dark:text-amber-400 font-bold hover:underline">01274 442663</a> / <a href="tel:07936883621" className="text-teal-700 dark:text-amber-400 font-bold hover:underline">07936 883621</a>
                  </p>
                </div>

                {/* Regional Social Links */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
                    Connect With Yorkshire
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <a
                      href="https://www.facebook.com/DIYorkshireReg/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 hover:bg-[#1877F2] hover:text-white text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-between border border-slate-200 dark:border-slate-700/60 group"
                    >
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-[#1877F2] group-hover:text-white" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <a
                      href="https://www.youtube.com/@DIYorkshireReg"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 hover:bg-[#FF0000] hover:text-white text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-between border border-slate-200 dark:border-slate-700/60 group"
                    >
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-[#FF0000] group-hover:text-white" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <a
                      href="https://www.instagram.com/diyorkshirereg/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-between border border-slate-200 dark:border-slate-700/60 group"
                    >
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-pink-500 group-hover:text-white" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@diyorkshireregion"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 hover:bg-black hover:text-white text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-between border border-slate-200 dark:border-slate-700/60 group"
                    >
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 fill-current text-teal-600 dark:text-teal-300 group-hover:text-cyan-400" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.31 6.31 0 0 0 1.94-4.57V8.62a8.21 8.21 0 0 0 4.83 1.57v-3.5z"/>
                        </svg>
                        TikTok
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Charity Footnote */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-teal-600 dark:text-teal-500 shrink-0" />
              <span>Registered UK Charity · Serving Yorkshire Communities</span>
            </div>
          </div>

          {/* Card 2: Quick Links & Key Services */}
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div>
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-800 dark:from-emerald-900 dark:via-teal-900 dark:to-slate-900 p-6 text-white border-b border-teal-700/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-teal-200 dark:text-teal-300 shadow-inner">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-teal-400/20 text-teal-200 border border-teal-300/30 rounded-full">
                    Departments
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Portals & Key Services
                </h3>
                <p className="text-xs text-teal-100 dark:text-teal-200 mt-1">
                  Direct access to community portals
                </p>
              </div>

              {/* Card Body - Grid Links */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => { setActiveTab('home'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Home Portal</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('welcome'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/80 text-left text-teal-800 dark:text-teal-200 hover:text-teal-950 dark:hover:text-white transition-all flex items-center justify-between group border border-teal-200 dark:border-teal-800/50"
                  >
                    <span className="font-semibold">Welcome To Islam</span>
                    <Sparkles className="w-3 h-3 text-teal-600 dark:text-teal-400 group-hover:text-amber-500 dark:group-hover:text-amber-300" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('mosques'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Mosques (11 Centres)</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('funeral'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Funeral Service (24/7)</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('death-committee'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-left text-amber-900 dark:text-amber-200 hover:text-amber-950 dark:hover:text-white transition-all flex items-center justify-between group border border-amber-200 dark:border-amber-800/40"
                  >
                    <span className="font-semibold">Death Committee (FSF)</span>
                    <ArrowRight className="w-3 h-3 text-amber-600 dark:text-amber-400 group-hover:text-amber-800 dark:group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('education'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Dar-ul-Madinah Schools</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('spiritual'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Spiritual Cures / Ilaj</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('ijtima'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Weekly Ijtima</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('qafilah'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>3-Day Qafilah Travel</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('zakah'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between group border border-slate-200 dark:border-slate-800"
                  >
                    <span>Live Zakah Calculator</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    onClick={() => { setActiveTab('prayer-app'); scrollToTop(); }}
                    className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-left text-amber-900 dark:text-amber-200 hover:text-amber-950 dark:hover:text-white transition-all flex items-center justify-between group border border-amber-200 dark:border-amber-800/40"
                  >
                    <span className="font-semibold">Prayer Times App</span>
                    <BookOpen className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Donation Action Bar */}
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => onOpenDonationModal()}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <Heart className="w-4 h-4 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>Donate to Yorkshire Projects</span>
              </button>
            </div>
          </div>

          {/* Card 3: Find Us (Location & Map) */}
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div>
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-teal-800 via-slate-800 to-slate-900 dark:from-teal-800 dark:via-slate-900 dark:to-slate-950 p-6 text-white border-b border-teal-700/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-full">
                    Regional HQ
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Find Us
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Faizan-e-Madinah Bradford
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Embedded Map */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner h-36 bg-slate-100 dark:bg-slate-800">
                  <iframe
                    title="Faizan-e-Madinah Bradford Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.5904838686663!2d-1.7371903233814092!3d53.79679234127027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be147e813f8bb%3A0x95dc7c125dbbc63a!2sFaizan-e-Madinah%20Bradford!5e0!3m2!1sen!2suk!4v1711200000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Location Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-teal-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>Maudsley Street, Bradford, West Yorkshire, BD3 9LE</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>Office Hours: 09:00 AM – 09:00 PM (Daily)</span>
                  </div>
                </div>

                {/* Quick Map, Call & Email Buttons */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <a
                    href="https://maps.google.com/?q=Faizan-e-Madinah+Bradford+Maudsley+Street+BD3+9LE"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 shadow-2xs text-center"
                    title="Open in Maps"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 shrink-0" />
                    <span>Maps</span>
                  </a>

                  <a
                    href="tel:01274442612"
                    className="py-2.5 px-2 bg-teal-50 dark:bg-teal-900/60 hover:bg-teal-100 dark:hover:bg-teal-800 text-teal-800 dark:text-teal-200 hover:text-teal-950 dark:hover:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-teal-200 dark:border-teal-700/50 shadow-2xs text-center"
                    title="Call 01274 442612"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300 shrink-0" />
                    <span>Call</span>
                  </a>

                  <a
                    href="mailto:Yorkshire@dawateislamiyorkshire.co.uk"
                    className="py-2.5 px-2 bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-800/60 text-slate-800 dark:text-white hover:text-teal-900 dark:hover:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 shadow-2xs text-center"
                    title="Email Yorkshire@dawateislamiyorkshire.co.uk"
                  >
                    <Mail className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 shrink-0" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* View All 11 Centres Action Button (matches height of Card 2 donate button) */}
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => { setActiveTab('mosques'); scrollToTop(); }}
                className="w-full py-3.5 px-4 bg-slate-50 hover:bg-teal-50 dark:bg-slate-800/80 dark:hover:bg-[#1f2e42] text-teal-900 dark:text-teal-200 font-extrabold text-xs sm:text-sm rounded-2xl transition-all border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 group shadow-2xs hover:border-teal-400 dark:hover:border-teal-500 cursor-pointer"
              >
                <Building className="w-4 h-4 text-teal-700 dark:text-teal-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>View All 11 Yorkshire Mosques</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </div>

        </div>

        {/* Dedicated Full Social Media & Channels Showcase Banner */}
        <div className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-teal-950/70 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-teal-800/40 p-6 sm:p-8 shadow-sm dark:shadow-xl transition-colors">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left max-w-xl">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600 dark:bg-teal-400"></span>
                </span>
                <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Stay Connected Worldwide & Regionally
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">
                Follow Dawat-e-Islami Across All Social Media
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Daily Islamic reminders, live broadcast alerts, weekly Ijtima highlights, and regional community announcements.
              </p>
            </div>

            {/* Social Grid with All Official Channels */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto shrink-0">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/DIYorkshireReg/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 bg-slate-50 dark:bg-slate-900/90 hover:bg-[#1877F2] border border-slate-200 dark:border-slate-700/80 hover:border-[#1877F2] rounded-2xl transition-all shadow-xs text-center"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 group-hover:bg-white flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-5 h-5 fill-[#1877F2] group-hover:fill-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-white">Facebook</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-blue-100">@DIYorkshireReg</span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@DIYorkshireReg"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 bg-slate-50 dark:bg-slate-900/90 hover:bg-[#FF0000] border border-slate-200 dark:border-slate-700/80 hover:border-[#FF0000] rounded-2xl transition-all shadow-xs text-center"
              >
                <div className="w-9 h-9 rounded-xl bg-red-500/10 group-hover:bg-white flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-5 h-5 fill-[#FF0000] group-hover:fill-[#FF0000]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-white">YouTube</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-red-100">@DIYorkshireReg</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/diyorkshirereg/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 bg-slate-50 dark:bg-slate-900/90 hover:bg-gradient-to-tr hover:from-[#fd1d1d] hover:to-[#833ab4] border border-slate-200 dark:border-slate-700/80 hover:border-pink-500 rounded-2xl transition-all shadow-xs text-center"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 group-hover:bg-white flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-5 h-5 fill-pink-500 group-hover:fill-[#E1306C]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-white">Instagram</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-pink-100">@diyorkshirereg</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@diyorkshireregion"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 bg-slate-50 dark:bg-slate-900/90 hover:bg-black border border-slate-200 dark:border-slate-700/80 hover:border-slate-500 rounded-2xl transition-all shadow-xs text-center"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/40 group-hover:bg-slate-900 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-5 h-5 fill-teal-600 dark:fill-teal-400 group-hover:fill-cyan-300" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.31 6.31 0 0 0 1.94-4.57V8.62a8.21 8.21 0 0 0 4.83 1.57v-3.5z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-white">TikTok</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-slate-300">@diyorkshireregion</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 transition-colors">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span>© {new Date().getFullYear()} Dawat-e-Islami UK (Yorkshire Region). Registered Charity. All Rights Reserved.</span>
            <div className="hidden sm:block">
              <ThemeToggle variant="segmented" />
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <button
              onClick={() => { setActiveTab('contact'); scrollToTop(); }}
              className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              Contact Us & HQ
            </button>
            <span>·</span>
            <button
              onClick={() => { setActiveTab('zakah'); scrollToTop(); }}
              className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              Zakah Guidance
            </button>
            <span>·</span>
            <button
              onClick={() => { setActiveTab('prayer-app'); scrollToTop(); }}
              className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              Prayer Times
            </button>
            <span>·</span>
            <button
              onClick={() => { setActiveTab('madani-channel'); scrollToTop(); }}
              className="hover:text-red-600 dark:hover:text-red-400 font-semibold transition-colors flex items-center gap-1"
            >
              <span>Madani Channel Live</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
