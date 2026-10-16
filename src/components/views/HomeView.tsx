import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  PhoneCall, 
  Sparkles, 
  BookOpen, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Users, 
  Award,
  Video,
  CheckCircle,
  ExternalLink,
  Smartphone,
  Star,
  Quote,
  Clock
} from 'lucide-react';
import { FastSlider } from '../FastSlider';
import { MOSQUE_LOCATIONS, PREACHERS, SPIRITUAL_CURES_CENTRES } from '../../data/siteData';
import { ActiveTab } from '../Navbar';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDonationModal: (causeId?: string) => void;
  onSelectIjtimaType?: (type: 'brothers' | 'sisters') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onOpenDonationModal,
  onSelectIjtimaType,
}) => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <div className="space-y-16 pb-16 w-full max-w-full overflow-x-hidden">
      {/* 1. Fast Slider (Custom Slider from original site) */}
      <FastSlider
        setActiveTab={setActiveTab}
        onOpenDonationModal={onOpenDonationModal}
      />

      {/* 3. Welcome to Islam (New Muslims) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-teal-700/50">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Are you new to Islam or want to learn more?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              WELCOME TO ISLAM
            </h2>

            <p className="text-base sm:text-xl font-medium text-teal-100">
              We support your journey with personal mentoring, Islamic education and integration guidance.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From <strong>Shahadah</strong> to <strong>Salah</strong> – we're here with resources, friendly community fellowship, and dedicated support tailored for you.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setActiveTab('welcome')}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Learn More & Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all"
              >
                Speak with a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Weekly Spiritual Gatherings (Brothers & Sisters Ijtima) */}
      <section className="bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Join Our Community
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Weekly Spiritual Gatherings
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover spiritual growth, meaningful connections, and Islamic knowledge through our weekly Ijtima gatherings. Experience the warmth of community in a welcoming environment.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 block font-heading">5000+</span>
                <span className="text-[11px] text-slate-300 uppercase">Community Members</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 block font-heading">Weekly</span>
                <span className="text-[11px] text-slate-300 uppercase">Gatherings</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 block font-heading">15+</span>
                <span className="text-[11px] text-slate-300 uppercase">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Gathering Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Brothers Ijtima */}
            <div className="bg-white dark:bg-[#172438] rounded-2xl overflow-hidden text-slate-900 dark:text-slate-100 shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-colors">
              <div
                className="relative bg-slate-950 p-2 overflow-hidden cursor-pointer flex items-center justify-center"
                onClick={() => setSelectedPoster('https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Brothers.jpg')}
              >
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Brothers.jpg"
                  alt="Weekly Gathering for Brothers"
                  className="w-full h-auto object-contain block rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-teal-900/90 text-amber-300 text-xs font-bold rounded-lg backdrop-blur-sm shadow-md">
                  Brothers
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Weekly Gathering for Brothers</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Join our brotherhood in transformative weekly sessions featuring deep Islamic knowledge, Quran recitation, Naats, and spiritual discussions.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectIjtimaType) {
                      onSelectIjtimaType('brothers');
                    } else {
                      setActiveTab('ijtima');
                    }
                  }}
                  className="text-teal-800 dark:text-teal-400 font-bold text-sm flex items-center gap-1 hover:underline pt-2"
                >
                  <span>Discover More & View Timings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sisters Ijtima */}
            <div className="bg-white dark:bg-[#172438] rounded-2xl overflow-hidden text-slate-900 dark:text-slate-100 shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between group transition-colors">
              <div
                className="relative bg-slate-950 p-2 overflow-hidden cursor-pointer flex items-center justify-center"
                onClick={() => setSelectedPoster('https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Sisters.jpg')}
              >
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Sisters.jpg"
                  alt="Weekly Gathering for Sisters"
                  className="w-full h-auto object-contain block rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-900/90 text-amber-300 text-xs font-bold rounded-lg backdrop-blur-sm shadow-md">
                  Sisters
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Weekly Gathering for Sisters</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Empower your faith journey through our sisterhood gatherings in a private environment, featuring enriching Islamic education and Tarbiyyah.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectIjtimaType) {
                      onSelectIjtimaType('sisters');
                    } else {
                      setActiveTab('ijtima');
                    }
                  }}
                  className="text-teal-800 dark:text-teal-400 font-bold text-sm flex items-center gap-1 hover:underline pt-2"
                >
                  <span>Discover More & View Timings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Al-Madinah Online Secondary School */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-700/60">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md inline-block">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              AL Madinah Online Secondary School
            </h2>
            <p className="text-amber-300 font-semibold text-sm flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Official Cambridge International School! <Sparkles className="w-4 h-4" />
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Image & Features */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 aspect-video bg-slate-950 flex items-center justify-center p-1">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2026/01/al-madina.jpeg"
                  alt="AL Madinah Online Secondary School"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-bold text-base text-amber-200">
                  Admissions are Open for Years 7, 8, 9 and 10
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Cambridge IGCSE Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Live Online Interactive Classes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Islamic Studies with Tarbiyyah</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Learn from the Comfort of Home</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Video & Free Trial */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 aspect-video bg-black flex items-center justify-center">
                <video
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2026/01/al-madina.jpeg"
                >
                  <source
                    src="https://videos.files.wordpress.com/i9JHzR9z/al-madina.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML5 video.
                </video>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-3">
                <h4 className="font-heading font-bold text-base text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" /> Free Trial Lesson
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Not sure if AL Madinah Online Secondary School is the right option for your child? Book a free trial lesson and see the difference for yourself.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://www.almadinahonline.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Book Your Free Trial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:01217131799"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20"
                  >
                    0121 713 1799
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Services Grid (All 6 core services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Our Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Explore our comprehensive range of Islamic educational, humanitarian, and spiritual services designed to support your faith journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1: Jamia Tul Madina */}
          <a
            href="https://www.jamiatulmadinauk.net/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-600 dark:hover:border-teal-500 hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://static.wixstatic.com/media/06ce1a_b72ecbad2ebd405885ffe2a795beb249~mv2.png/v1/fill/w_93,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20200908-WA0008_PNG.png"
                alt="Jamia Tul Madina"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Jamia Tul Madina
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Islamic Educational Institution</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 w-full flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-400 gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Service 2: FGRF */}
          <a
            href="https://www.fgrf.uk/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-600 dark:hover:border-teal-500 hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://fgrf.org/web_assets/images/fgrf/newLogo.png"
                alt="FGRF"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                FGRF
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Faizan Global Relief Foundation</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 w-full flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-400 gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Service 3: Learn Your Faith */}
          <a
            href="https://www.lyfonline.com/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-600 dark:hover:border-teal-500 hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/logo.webp"
                alt="Learn Your Faith"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Learn Your Faith
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Online Islamic Education</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 w-full flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-400 gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Service 4: Spiritual Cures */}
          <button
            type="button"
            onClick={() => setActiveTab('spiritual')}
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-600 dark:hover:border-teal-500 hover:shadow-xl transition-all flex flex-col items-center text-center justify-between w-full"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/output-onlinepngtools.png"
                alt="Spiritual Cures"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Spiritual Cures
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Rohani Ilaj & Istikhara</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 w-full flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-400 gap-1">
              <span>View Timetables</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Service 5: Maktaba Tul Madina */}
          <a
            href="https://www.maktabatulmadina.net/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-600 dark:hover:border-teal-500 hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://www.maktabatulmadina.net/img/SiteImg/MaktabaTulMadinaLogo.png"
                alt="Maktaba Tul Madina"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Maktaba Tul Madina
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Islamic Books & Resources</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 w-full flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-400 gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Service 6: Darul Ifta Ahlesunnat */}
          <a
            href="https://www.daruliftaahlesunnat.net/en"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-600 dark:hover:border-teal-500 hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 p-3 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src="https://www.daruliftaahlesunnat.net/public_html/assets/images/img/logo-en.png"
                alt="Darul Ifta Ahlesunnat"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Darul Ifta Ahlesunnat
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Shar'i Verdicts & Fatawa</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 w-full flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-400 gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* 7. Prayer Times App Showcase (Full Size Uncropped Image & Store Badges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-[#172438] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md transition-colors">
          {/* Full-Size Uncropped Prayer Times Image Banner */}
          <div 
            onClick={() => setSelectedPoster('https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/prayer-times.jpg')}
            className="w-full bg-slate-50 dark:bg-[#111C2E] flex justify-center overflow-hidden cursor-pointer group"
          >
            <img
              src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/prayer-times.jpg"
              alt="Download To find Accurate prayer times & Qibla direction"
              className="w-full h-auto object-contain block mx-auto group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          {/* Download Store Buttons */}
          <div className="p-6 sm:p-8 bg-white dark:bg-[#172438] border-t border-slate-100 dark:border-slate-700/80 flex flex-col items-center justify-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {/* Google Play Store Badge Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dawateislami.namaz&hl=en_US"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3.5 px-6 py-3 bg-black hover:bg-slate-900 text-white rounded-2xl border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 512 512" fill="none">
                  <path d="M60.6 28.5C54.4 35 51 45.3 51 58.3v395.4c0 13 3.4 23.3 9.6 29.8l1.6 1.5 221.7-221.7v-5.2L62.2 27l-1.6 1.5z" fill="#00e5ff" />
                  <path d="M356.5 321.4l-72.6-72.6v-5.2l72.6-72.6 1.6.9 86 48.9c24.6 14 24.6 36.9 0 50.9l-86 48.9-1.6.8z" fill="#ffea00" />
                  <path d="M283.9 248.8L60.6 473.5c8.1 8.6 21.4 9.6 36.3 1.2l259.6-147.5-72.6-78.4z" fill="#ff3d00" />
                  <path d="M283.9 248.8l72.6-72.6L96.9 28.7C82 20.3 68.7 21.3 60.6 29.9l223.3 218.9z" fill="#00e676" />
                </svg>
                <div className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 leading-none">
                    GET IT ON
                  </span>
                  <span className="block text-xl font-bold font-sans text-white leading-tight mt-0.5">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Apple App Store Badge Button */}
              <a
                href="https://apps.apple.com/in/app/prayer-times/id430204572"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3.5 px-6 py-3 bg-black hover:bg-slate-900 text-white rounded-2xl border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <svg className="w-8 h-8 shrink-0 fill-current text-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.56-11.23-20.89-14.78-33.99-3.56-13.1-5.34-25.07-5.34-35.91 0-15.11 3.79-27.56 11.37-37.34 7.58-9.78 17.18-14.77 28.8-14.99 4.89 0 10.22 1.25 15.99 3.74 5.76 2.5 9.4 3.79 10.92 3.89 1.96 0 5.86-1.39 11.71-4.17 5.84-2.77 11.08-4.04 15.71-3.8 11.63.65 21.05 4.96 28.26 12.93-10.22 6.19-15.23 14.88-15.01 26.08.22 8.91 3.59 16.41 10.11 22.5 6.52 6.08 14.34 9.67 23.47 10.76-2.07 6.08-4.57 12.39-7.51 18.91zM119.22 31.84c0-7.17 2.61-13.8 7.82-19.89 5.22-6.08 11.73-9.88 19.56-11.41.22 1.3.33 2.5.33 3.59 0 7.06-2.72 13.91-8.15 20.54-5.43 6.63-12.06 10.32-19.89 11.08-.11-1.3-.22-2.39-.22-3.91z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[11px] font-medium text-slate-300 leading-none">
                    Download on the
                  </span>
                  <span className="block text-xl font-bold font-sans text-white leading-tight mt-0.5">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-300 pt-1">
              <span className="font-semibold text-slate-700 dark:text-slate-200">⭐ 3.0M+ Downloads</span>
              <span>•</span>
              <span className="font-semibold text-slate-700 dark:text-slate-200">★ 120K+ 5-Star Reviews</span>
              <span>•</span>
              <button
                type="button"
                onClick={() => setActiveTab('prayer-app')}
                className="font-bold text-teal-800 dark:text-teal-400 hover:text-teal-950 dark:hover:text-teal-200 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Read More About The App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Meet The Experts - Islamic Preachers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Meet The Experts</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Islamic Preachers
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Spiritual and executive leadership guiding Dawat-e-Islami across Yorkshire and the United Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {PREACHERS.map((preacher, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#172438] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="aspect-[4/5] sm:aspect-auto sm:h-60 lg:h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                <img
                  src={preacher.image}
                  alt={preacher.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                {preacher.honorific && (
                  <span className="absolute bottom-2 right-2 text-[10px] sm:text-xs text-amber-300 font-arabic font-bold bg-slate-900/80 px-1.5 py-0.5 rounded">
                    {preacher.honorific}
                  </span>
                )}
              </div>
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between text-center bg-teal-800 dark:bg-[#111C2E] border-t border-teal-700/50 dark:border-slate-700 text-white space-y-1.5 sm:space-y-2">
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-base text-white dark:text-slate-100 leading-tight">
                    {preacher.name}
                  </h4>
                  <div className="w-6 sm:w-8 h-0.5 bg-amber-400 mx-auto my-1 sm:my-1.5 rounded" />
                  <p className="text-[10px] sm:text-[11px] font-semibold text-teal-100 dark:text-teal-300 uppercase tracking-wider line-clamp-1">
                    {preacher.title}
                  </p>
                </div>
                <p className="text-[10px] sm:text-[11px] text-teal-200 dark:text-slate-400 italic line-clamp-2">
                  {preacher.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Poster Modal */}
      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative max-w-2xl max-h-[90vh] bg-transparent rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full z-10 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedPoster}
              alt="Enlarged Gathering Poster"
              className="max-h-[85vh] w-auto mx-auto rounded-xl shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
