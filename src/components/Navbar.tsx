import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink,
  MapPin,
  Sparkles,
  BookOpen,
  GraduationCap,
  ShoppingBag,
  Compass,
  PhoneCall,
  Clock,
  Users,
  ChevronRight,
  PlayCircle,
  Tv,
} from 'lucide-react';
import { JummahTimingsBar } from './JummahTimingsBar';
import { ThemeToggle } from './ThemeToggle';

export type ActiveTab = 
  | 'home' 
  | 'welcome' 
  | 'funeral' 
  | 'death-committee' 
  | 'zakah' 
  | 'mosques' 
  | 'about' 
  | 'contact' 
  | 'ijtima' 
  | 'qafilah' 
  | 'education' 
  | 'spiritual' 
  | 'prayer-app'
  | 'center'
  | 'madani-channel';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDonationModal: (causeId?: string) => void;
  selectedCenter?: string;
  onSelectCenter?: (centerId: string, subLocationId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDonationModal,
  selectedCenter = 'bradford',
  onSelectCenter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [centersDropdownOpen, setCentersDropdownOpen] = useState(false);
  const [funeralDropdownOpen, setFuneralDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile accordion states (collapsed by default)
  const [mobileCentersExpanded, setMobileCentersExpanded] = useState(false);
  const [mobileFuneralExpanded, setMobileFuneralExpanded] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const centersRef = useRef<HTMLDivElement>(null);
  const funeralRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Track scroll state for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (centersRef.current && !centersRef.current.contains(e.target as Node)) {
        setCentersDropdownOpen(false);
      }
      if (funeralRef.current && !funeralRef.current.contains(e.target as Node)) {
        setFuneralDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setCentersDropdownOpen(false);
    setFuneralDropdownOpen(false);
    setMoreDropdownOpen(false);
    setMobileCentersExpanded(false);
    setMobileFuneralExpanded(false);
    setMobileServicesExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCenterClick = (item: { isAll?: boolean; centerId?: string; subLocationId?: string }) => {
    if (item.isAll || !item.centerId) {
      handleNavClick('mosques');
    } else {
      if (onSelectCenter) {
        onSelectCenter(item.centerId, item.subLocationId);
      }
      setActiveTab('center');
      setMobileMenuOpen(false);
      setCentersDropdownOpen(false);
      setMobileCentersExpanded(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const centersList: { name: string; isAll?: boolean; centerId?: string; subLocationId?: string }[] = [
    { name: 'All Yorkshire Centers (11 Mosques)', isAll: true },
    { name: 'Bradford Central (Maudsley St)', centerId: 'bradford', subLocationId: 'bradford-central' },
    { name: 'Bradford West (Lilycroft Rd)', centerId: 'bradford', subLocationId: 'bradford-west' },
    { name: 'Sheffield (Firth Park Rd)', centerId: 'sheffield' },
    { name: 'Rotherham (Maltkiln St)', centerId: 'rotherham' },
    { name: 'Huddersfield (New North Rd)', centerId: 'huddersfield' },
    { name: 'Dewsbury (Ravensthorpe)', centerId: 'dewsbury' },
    { name: 'Halifax (Gibbet St)', centerId: 'halifax' },
    { name: 'Keighley (Highfield Ln)', centerId: 'keighley' },
    { name: 'Leeds (Francis St)', centerId: 'leeds' },
  ];

  const moreItems: { label: string; tab?: ActiveTab; url?: string; external?: boolean }[] = [
    { label: 'Madani Channel Live (TV & Audio)', tab: 'madani-channel' },
    { label: 'Weekly Ijtima', tab: 'ijtima' },
    { label: '3-Day Qafilah', tab: 'qafilah' },
    { label: 'Dar-ul-Madinah Education', tab: 'education' },
    { label: 'Spiritual Cures (Rohani Ilaj)', tab: 'spiritual' },
    { label: 'Prayer Times & Qibla App', tab: 'prayer-app' },
    { label: 'Islamic University (Jamia Tul Madina)', url: 'https://www.jamiatulmadinauk.net/', external: true },
    { label: 'Learn Your Faith (LYF)', url: 'https://www.lyfonline.com/', external: true },
    { label: 'Faizan Global Relief (FGRF)', url: 'https://www.fgrf.uk/', external: true },
    { label: 'Maktaba Tul Madina (Online Shop)', url: 'https://www.maktabatulmadina.net/', external: true },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full max-w-full transition-shadow duration-200 ${isScrolled ? 'shadow-md dark:shadow-slate-950/70' : 'shadow-xs'}`}>
      {/* 1. Jummah Timings Bar positioned permanently above the Navigation Bar */}
      <JummahTimingsBar 
        onViewAllMosques={() => handleNavClick('mosques')} 
        onSelectCenter={(cid) => {
          if (onSelectCenter) onSelectCenter(cid);
          setActiveTab('center');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Main Navigation Bar with Clean Design */}
      <div className="bg-white/95 dark:bg-[#111C2E]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs relative z-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4 h-16 sm:h-20">
            {/* Brand Logo & Title */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 sm:gap-3 text-left group shrink-0 min-w-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl bg-teal-800 text-white flex items-center justify-center font-heading font-extrabold text-xs sm:text-base lg:text-lg tracking-wider shadow-sm group-hover:bg-teal-900 transition-colors shrink-0">
                <span className="text-amber-300">DI</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-extrabold text-xs xs:text-sm sm:text-base lg:text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-none group-hover:text-teal-800 dark:group-hover:text-teal-400 transition-colors whitespace-nowrap">
                  Dawat-e-Islami
                </span>
                <span className="text-[9px] sm:text-[11px] font-bold tracking-wider text-teal-700 dark:text-teal-400 uppercase mt-0.5 truncate">
                  Yorkshire Region
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'home'
                    ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                    : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                }`}
              >
                Home
              </button>

              {/* Welcome To Islam */}
              <button
                onClick={() => handleNavClick('welcome')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'welcome'
                    ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                    : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                }`}
              >
                Welcome To Islam
              </button>

              {/* Funeral Dropdown (Funeral Service & Death Committee) */}
              <div className="relative" ref={funeralRef}>
                <button
                  type="button"
                  onClick={() => {
                    setFuneralDropdownOpen(!funeralDropdownOpen);
                    setCentersDropdownOpen(false);
                    setMoreDropdownOpen(false);
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1 ${
                    activeTab === 'funeral' || activeTab === 'death-committee'
                      ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                  }`}
                >
                  <span>Funeral</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${funeralDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {funeralDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white dark:bg-[#172438] rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50 text-slate-800 dark:text-slate-200 animate-fadeIn divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="px-4 py-2 text-[11px] font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider">
                      Funeral Care & Committee
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => handleNavClick('funeral')}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-start gap-3 hover:bg-teal-50 dark:hover:bg-[#25364D] ${
                          activeTab === 'funeral' ? 'bg-teal-50 dark:bg-[#25364D] text-teal-800 dark:text-teal-300 font-bold' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900 dark:text-slate-100">Funeral Service</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">24/7 Immediate Bereavement & Sunnah Care</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('death-committee')}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-start gap-3 hover:bg-teal-50 dark:hover:bg-[#25364D] ${
                          activeTab === 'death-committee' ? 'bg-teal-50 dark:bg-[#25364D] text-teal-800 dark:text-teal-300 font-bold' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900 dark:text-slate-100">Death Committee</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Funeral Services Fund (FSF) Membership</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Zakah */}
              <button
                onClick={() => handleNavClick('zakah')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'zakah'
                    ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                    : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                }`}
              >
                Zakah
              </button>

              {/* Our Centers Dropdown */}
              <div className="relative" ref={centersRef}>
                <button
                  type="button"
                  onClick={() => {
                    setCentersDropdownOpen(!centersDropdownOpen);
                    setMoreDropdownOpen(false);
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1 ${
                    activeTab === 'mosques' || activeTab === 'center'
                      ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                  }`}
                >
                  <span>Our Centers</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${centersDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {centersDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 bg-white dark:bg-[#172438] rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 text-slate-800 dark:text-slate-200 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider">
                      Yorkshire Mosques & Centres
                    </div>
                    {centersList.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleCenterClick(item)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-teal-50 dark:hover:bg-[#25364D] hover:text-teal-800 dark:hover:text-teal-300 transition-colors flex items-center justify-between cursor-pointer ${
                          item.isAll ? 'font-bold text-teal-800 dark:text-teal-300 border-b border-slate-100 dark:border-slate-800' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.isAll && <span className="text-[10px] bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-1.5 py-0.5 rounded font-bold">11 Sites</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us (Combined About Us + Contact Us) */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'contact' || activeTab === 'about'
                    ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                    : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                }`}
              >
                Contact Us
              </button>

              {/* More Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => {
                    setMoreDropdownOpen(!moreDropdownOpen);
                    setCentersDropdownOpen(false);
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1 ${
                    ['education', 'qafilah', 'spiritual', 'ijtima', 'prayer-app'].includes(activeTab)
                      ? 'text-teal-800 dark:text-teal-300 font-bold bg-teal-50 dark:bg-[#172438] border border-teal-100 dark:border-teal-900/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-slate-50 dark:hover:bg-[#172438]'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#172438] rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50 text-slate-800 dark:text-slate-200 divide-y divide-slate-100 dark:divide-slate-800 animate-fadeIn">
                    {moreItems.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {item.external ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full text-left px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-[#25364D] hover:text-teal-800 dark:hover:text-teal-300 transition-colors flex items-center justify-between group"
                          >
                            <span>{item.label}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-teal-700 dark:group-hover:text-teal-400" />
                          </a>
                        ) : (
                          <button
                            onClick={() => item.tab && handleNavClick(item.tab)}
                            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors flex items-center justify-between ${
                              activeTab === item.tab
                                ? 'bg-teal-50 dark:bg-[#25364D] text-teal-800 dark:text-teal-300 font-bold'
                                : 'text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-[#25364D] hover:text-teal-800 dark:hover:text-teal-300'
                            }`}
                          >
                            <span>{item.label}</span>
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Actions & Theme Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Watch Live Button matching user screenshot layout */}
              <button
                type="button"
                onClick={() => handleNavClick('madani-channel')}
                className={`group relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer shadow-xs ${
                  activeTab === 'madani-channel'
                    ? 'bg-red-50 dark:bg-[#251722] border-red-500 text-red-700 dark:text-red-400 ring-2 ring-red-400/30'
                    : 'bg-white dark:bg-[#1A1822] border-red-200/90 dark:border-red-900/50 hover:bg-red-50/70 dark:hover:bg-[#231A25] text-red-600 dark:text-red-400 hover:border-red-400 dark:hover:border-red-600/60'
                }`}
                title="Watch Madani Channel Live Stream"
                aria-label="Watch Madani Channel Live"
              >
                <PlayCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                  <span className="hidden sm:inline">Watch </span>Live
                </span>
                <span className="inline-flex items-center px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-black tracking-wider uppercase bg-red-600 text-white shadow-xs">
                  LIVE
                </span>
              </button>

              {/* Theme Toggle (Dropdown for all devices) */}
              <ThemeToggle variant="dropdown" />

              {/* Donate Button: Heart icon on mobile, 'Donate Now' + Heart on tablet & desktop */}
              <button
                type="button"
                onClick={() => onOpenDonationModal()}
                className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs hover:shadow whitespace-nowrap shrink-0"
                title="Make a Donation"
                aria-label="Make a Donation"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950 shrink-0" />
                <span className="hidden sm:inline">Donate Now</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-1.5 sm:p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#172438] rounded-xl transition-colors shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#111C2E] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto z-50 relative transition-colors duration-200">
          
          {/* 1. Home */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors ${
              activeTab === 'home'
                ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
            }`}
          >
            Home
          </button>

          {/* 2. Welcome To Islam */}
          <button
            type="button"
            onClick={() => handleNavClick('welcome')}
            className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors ${
              activeTab === 'welcome'
                ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
            }`}
          >
            Welcome To Islam
          </button>

          {/* 3. Our Centers (Collapsed by default) */}
          <div className="rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileCentersExpanded(!mobileCentersExpanded)}
              className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors flex items-center justify-between ${
                activeTab === 'mosques' || activeTab === 'center'
                  ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
              }`}
            >
              <span>Our Centers</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileCentersExpanded ? 'rotate-180' : ''}`} />
            </button>

            {mobileCentersExpanded && (
              <div className="mt-1 pl-3 pr-1 py-1 space-y-0.5 border-l-2 border-teal-600/40 dark:border-teal-400/40 ml-3">
                {centersList.map((c, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCenterClick(c)}
                    className={`w-full px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                      (c.isAll && activeTab === 'mosques') || (activeTab === 'center' && selectedCenter === c.centerId)
                        ? 'bg-teal-100/70 dark:bg-teal-900/40 text-teal-900 dark:text-teal-200 font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#172438]'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Funeral (Collapsed by default) */}
          <div className="rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileFuneralExpanded(!mobileFuneralExpanded)}
              className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors flex items-center justify-between ${
                activeTab === 'funeral' || activeTab === 'death-committee'
                  ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
              }`}
            >
              <span>Funeral Services</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileFuneralExpanded ? 'rotate-180' : ''}`} />
            </button>

            {mobileFuneralExpanded && (
              <div className="mt-1 pl-3 pr-1 py-1 space-y-0.5 border-l-2 border-teal-600/40 dark:border-teal-400/40 ml-3">
                <button
                  type="button"
                  onClick={() => handleNavClick('funeral')}
                  className={`w-full px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                    activeTab === 'funeral'
                      ? 'bg-teal-100/70 dark:bg-teal-900/40 text-teal-900 dark:text-teal-200 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#172438]'
                  }`}
                >
                  Funeral Service
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('death-committee')}
                  className={`w-full px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                    activeTab === 'death-committee'
                      ? 'bg-teal-100/70 dark:bg-teal-900/40 text-teal-900 dark:text-teal-200 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#172438]'
                  }`}
                >
                  Death Committee (FSF)
                </button>
              </div>
            )}
          </div>

          {/* 5. Zakah Calculator */}
          <button
            type="button"
            onClick={() => handleNavClick('zakah')}
            className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors ${
              activeTab === 'zakah'
                ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
            }`}
          >
            Zakah Calculator
          </button>

          {/* 6. Departments & Services (Collapsed by default) */}
          <div className="rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors flex items-center justify-between ${
                ['ijtima', 'qafilah', 'education', 'spiritual', 'prayer-app'].includes(activeTab)
                  ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
              }`}
            >
              <span>Departments & Services</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesExpanded && (
              <div className="mt-1 pl-3 pr-1 py-1 space-y-0.5 border-l-2 border-teal-600/40 dark:border-teal-400/40 ml-3">
                {moreItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {item.external ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#172438] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => item.tab && handleNavClick(item.tab)}
                        className={`w-full px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                          activeTab === item.tab
                            ? 'bg-teal-100/70 dark:bg-teal-900/40 text-teal-900 dark:text-teal-200 font-bold'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#172438]'
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* 7. Contact Us */}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`w-full px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors ${
              activeTab === 'contact' || activeTab === 'about'
                ? 'bg-teal-50 dark:bg-[#172438] text-teal-800 dark:text-teal-300 font-bold'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#172438]'
            }`}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};
