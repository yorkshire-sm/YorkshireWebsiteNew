import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { ActiveTab } from './Navbar';

interface FastSliderProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDonationModal: (causeId?: string) => void;
}

interface SlideItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryBtn: { text: string; action: () => void; isDonation?: boolean };
  secondaryBtn?: { text: string; action: () => void; isDonation?: boolean };
  bgGradient: string;
  image: string;
}

export const FastSlider: React.FC<FastSliderProps> = ({
  setActiveTab,
  onOpenDonationModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: SlideItem[] = [
    {
      id: 'welcome',
      badge: 'Non-Political Islamic Movement · Est. 1981',
      title: 'Welcome to Dawat-e-Islami Yorkshire',
      subtitle: 'Where Faith Meets Excellence & Community Service',
      description: 'Serving Muslims across Bradford, Leeds, Sheffield, Rotherham, Huddersfield, Dewsbury, Halifax, and Keighley through Quran, Sunnah, and welfare.',
      primaryBtn: { text: 'Find Mosques & Timings', action: () => setActiveTab('mosques') },
      secondaryBtn: { text: 'Support Local Centers', action: () => onOpenDonationModal(), isDonation: true },
      bgGradient: 'from-teal-950 via-teal-900 to-slate-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-1.jpg',
    },
    {
      id: 'regular-supporter',
      badge: 'Monthly Direct Debit · Regular Giving',
      title: 'Become A Regular Supporter',
      subtitle: 'Set Up a £15 Monthly Direct Debit',
      description: 'Support Dawat-E-Islami by Setting up a £15 Monthly Direct Debit. Your donation can be used for any permissible, religious, reformatory, welfare, well-wishing, spiritual, benevolent, and good purpose.',
      primaryBtn: { text: 'Setup Now!', action: () => onOpenDonationModal('regular'), isDonation: true },
      secondaryBtn: { text: 'Support Local Centers', action: () => onOpenDonationModal() },
      bgGradient: 'from-sky-950 via-teal-950 to-slate-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2026/01/SET-UP-A-MONTHLY-15.jpg',
    },
    {
      id: 'leeds-project',
      badge: 'New Mosque & Madrasah Construction',
      title: 'Faizan E Madina Leeds Project',
      subtitle: 'Purpose-Built Islamic & Education Centre in West Yorkshire',
      description: 'A new purpose built Faizan-e-Madina Mosque & education centre is under construction in Leeds, West Yorkshire. Please help Dawateislami to raise £150,000 for New Faizan-e-Madina Masjid & Madrasah in Leeds.',
      primaryBtn: { text: 'Donate Now!', action: () => onOpenDonationModal('leeds'), isDonation: true },
      secondaryBtn: { text: 'View All Mosques', action: () => setActiveTab('mosques') },
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/5_project_img_1306208297.jpeg',
    },
    {
      id: 'palestine',
      badge: 'Emergency Humanitarian Relief · FGRF',
      title: 'Donate For Palestine',
      subtitle: 'Supporting Distressed Palestinian Families',
      description: 'FGRF, has reached Palestine to assist the oppressed Muslim population. The Muslim population of Palestine is suffering in the agony of separation from their loved ones, feeling helpless and vulnerable, as they await any unseen assistance.',
      primaryBtn: { text: 'Donate Now!', action: () => onOpenDonationModal('palestine'), isDonation: true },
      secondaryBtn: { text: 'General Welfare Fund', action: () => onOpenDonationModal('general') },
      bgGradient: 'from-teal-950 via-slate-900 to-emerald-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/78450863338_hero_img.png',
    },
    {
      id: 'zakah',
      badge: 'Pillar of Islam · Wealth Purification',
      title: 'Paying Your Zakah',
      subtitle: 'Fulfill Your Obligation with Complete Precision',
      description: 'Zakah is one of the five pillars of Islam and it is an obligatory act. The meaning of Zakah is "to purify". In essence, Zakah is purity or to purify. To purify our own wealth all Muslims are obliged to pay a portion of their wealth.',
      primaryBtn: { text: 'Calculate Zakah!', action: () => setActiveTab('zakah') },
      secondaryBtn: { text: 'Pay Zakah Directly', action: () => onOpenDonationModal('zakah'), isDonation: true },
      bgGradient: 'from-amber-950 via-teal-950 to-slate-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/Zakah.jpg',
    },
    {
      id: 'jummah',
      badge: 'Friday Congregational Prayers',
      title: 'Regional Jummah Jamā\'at Schedules',
      subtitle: 'Bradford · Leeds · Sheffield · Dewsbury · Halifax',
      description: 'Check verified 1st and 2nd Jamā\'at timings, mosque facilities, and interactive map directions for every central and local centre in Yorkshire.',
      primaryBtn: { text: 'View All Jummah Timings', action: () => setActiveTab('mosques') },
      secondaryBtn: { text: 'Spiritual Cures Timetable', action: () => setActiveTab('spiritual') },
      bgGradient: 'from-slate-950 via-teal-950 to-slate-900',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/Faizan-E-Makkah-1.png',
    },
    {
      id: 'funeral',
      badge: '24/7 Emergency Bereavement Service',
      title: 'Funeral Services Fund (FSF)',
      subtitle: 'Dignified Sunnah Burial & Overseas Repatriation',
      description: 'Immediate 24/7 care from the last breath to the grave: Sunnah Ghusl, overnight cold storage, private ambulances, and flights to ancestral homelands.',
      primaryBtn: { text: '24/7 Funeral Helpline', action: () => setActiveTab('funeral') },
      secondaryBtn: { text: 'Donate to FSF Fund', action: () => onOpenDonationModal('fsf'), isDonation: true },
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/private_ambulance.jpg',
    },
    {
      id: 'education',
      badge: 'Cambridge International & Ofsted Regulated',
      title: 'Dar-ul-Madinah & Al-Madinah Schools',
      subtitle: 'Accredited Nursery, Primary & Online Secondary (IGCSE)',
      description: 'Campuses in Sheffield, Bradford, and Rotherham. World-class British academics infused with Islamic morals, Quran memorization, and Tarbiyyah.',
      primaryBtn: { text: 'Explore Schools & Campuses', action: () => setActiveTab('education') },
      secondaryBtn: { text: 'Book Free Trial Lesson', action: () => setActiveTab('education') },
      bgGradient: 'from-teal-900 via-slate-900 to-teal-950',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/1837040886_welcome_banner.jpeg',
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const activeSlide = slides[currentSlide];

  return (
    <div
      className="relative overflow-hidden w-full max-w-full bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides View */}
      <div className={`relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] bg-gradient-to-r ${activeSlide.bgGradient} flex items-center transition-all duration-700`}>
        {/* Ambient background image with soft fade */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 z-0 pointer-events-none" />

        {/* Slide Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
          <div className="max-w-3xl space-y-5 animate-fadeIn" key={activeSlide.id}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeSlide.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {activeSlide.title}
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-teal-200 font-heading">
              {activeSlide.subtitle}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {activeSlide.description}
            </p>

            {/* Slide Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={activeSlide.primaryBtn.action}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                {activeSlide.primaryBtn.text}
              </button>

              {activeSlide.secondaryBtn && (
                <button
                  type="button"
                  onClick={activeSlide.secondaryBtn.action}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  {activeSlide.secondaryBtn.isDonation ? (
                    <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ) : null}
                  <span>{activeSlide.secondaryBtn.text}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Next / Prev Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
