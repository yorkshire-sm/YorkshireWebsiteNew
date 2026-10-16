import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, ActiveTab } from './components/Navbar';
import { DonationModal } from './components/DonationModal';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';

// Views
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { MosquesView } from './components/views/MosquesView';
import { IjtimaView } from './components/views/IjtimaView';
import { QafilahView } from './components/views/QafilahView';
import { FuneralServicesView } from './components/views/FuneralServicesView';
import { DeathCommitteeView } from './components/views/DeathCommitteeView';
import { EducationView } from './components/views/EducationView';
import { SpiritualCuresView } from './components/views/SpiritualCuresView';
import { ZakahCalculatorView } from './components/views/ZakahCalculatorView';
import { ContactView } from './components/views/ContactView';
import { PrayerTimesAppView } from './components/views/PrayerTimesAppView';
import { WelcomeToIslamView } from './components/views/WelcomeToIslamView';
import { CenterDetailView } from './components/views/CenterDetailView';
import { MadaniChannelView } from './components/views/MadaniChannelView';

// Mobile Floating Nav
import { Compass, MapPin, Heart, Calculator, PhoneCall, Users, Calendar } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCenter, setSelectedCenter] = useState<string>('bradford');
  const [selectedSubLocation, setSelectedSubLocation] = useState<string | undefined>(undefined);
  const [ijtimaType, setIjtimaType] = useState<'brothers' | 'sisters'>('brothers');
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationCause, setDonationCause] = useState<string>('general');
  const [donationAmount, setDonationAmount] = useState<number | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (rawHash === 'gatherings') {
        setActiveTab('ijtima');
        return;
      }
      if (rawHash === 'live' || rawHash === 'madani-channel' || rawHash === 'streaming') {
        setActiveTab('madani-channel');
        return;
      }
      if (rawHash.startsWith('center')) {
        const parts = rawHash.split('-');
        if (parts.length > 1) {
          setSelectedCenter(parts[1]);
        }
        setActiveTab('center');
        return;
      }
      const hash = rawHash as ActiveTab;
      const validTabs: ActiveTab[] = [
        'home',
        'welcome',
        'about',
        'mosques',
        'center',
        'ijtima',
        'qafilah',
        'funeral',
        'death-committee',
        'education',
        'spiritual',
        'zakah',
        'contact',
        'prayer-app',
        'madani-channel',
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIjtimaType = (type: 'brothers' | 'sisters') => {
    setIjtimaType(type);
    handleTabChange('ijtima');
  };

  const handleOpenDonation = (causeId?: string, amount?: number) => {
    setDonationCause(causeId || 'general');
    setDonationAmount(amount);
    setDonationModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B1220] text-slate-800 dark:text-slate-100 font-sans pb-16 lg:pb-0 w-full max-w-full overflow-x-clip transition-colors duration-200">
        {/* Persistent Navigation */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenDonationModal={handleOpenDonation}
          selectedCenter={selectedCenter}
          onSelectCenter={(cid, subId) => {
            setSelectedCenter(cid);
            setSelectedSubLocation(subId);
            handleTabChange('center');
          }}
        />

        {/* Main View Container */}
        <main className="flex-1 w-full max-w-full">
          {activeTab === 'home' && (
            <HomeView
              setActiveTab={handleTabChange}
              onOpenDonationModal={handleOpenDonation}
              onSelectIjtimaType={handleSelectIjtimaType}
            />
          )}

          {activeTab === 'welcome' && (
            <WelcomeToIslamView
              onOpenDonationModal={handleOpenDonation}
              setActiveTab={handleTabChange}
            />
          )}

          {activeTab === 'about' && (
            <ContactView
              initialSection="about"
              onOpenDonationModal={handleOpenDonation}
            />
          )}

          {activeTab === 'mosques' && (
            <MosquesView
              onOpenDonationModal={handleOpenDonation}
              onSelectCenter={(cid) => {
                setSelectedCenter(cid);
                setSelectedSubLocation(undefined);
                handleTabChange('center');
              }}
            />
          )}

          {activeTab === 'center' && (
            <CenterDetailView
              centerId={selectedCenter}
              subLocationId={selectedSubLocation}
              onSelectCenter={(cid) => {
                setSelectedCenter(cid);
                setSelectedSubLocation(undefined);
              }}
              onOpenDonationModal={handleOpenDonation}
              onViewAllMosques={() => handleTabChange('mosques')}
            />
          )}

        {activeTab === 'ijtima' && (
          <IjtimaView
            initialType={ijtimaType}
          />
        )}

        {activeTab === 'qafilah' && (
          <QafilahView />
        )}

        {activeTab === 'funeral' && (
          <FuneralServicesView
            onOpenDonationModal={handleOpenDonation}
            setActiveTab={handleTabChange}
          />
        )}

        {activeTab === 'death-committee' && (
          <DeathCommitteeView
            setActiveTab={handleTabChange}
            onOpenDonationModal={handleOpenDonation}
          />
        )}

        {activeTab === 'education' && (
          <EducationView
            onOpenDonationModal={handleOpenDonation}
          />
        )}

        {activeTab === 'spiritual' && (
          <SpiritualCuresView />
        )}

        {activeTab === 'zakah' && (
          <ZakahCalculatorView
            onOpenDonationModal={handleOpenDonation}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            initialSection="contact"
            onOpenDonationModal={handleOpenDonation}
          />
        )}

        {activeTab === 'prayer-app' && (
          <PrayerTimesAppView
            onBackToHome={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'madani-channel' && (
          <MadaniChannelView
            onOpenDonationModal={handleOpenDonation}
            onBackToHome={() => handleTabChange('home')}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenDonationModal={handleOpenDonation}
      />

      {/* Mobile Sticky Quick-Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#111C2E]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => handleTabChange('home')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
            activeTab === 'home'
              ? 'text-teal-800 dark:text-teal-400'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => handleTabChange('mosques')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
            activeTab === 'mosques'
              ? 'text-teal-800 dark:text-teal-400'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Jummah</span>
        </button>

        <button
          onClick={() => handleTabChange('ijtima')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
            activeTab === 'ijtima'
              ? 'text-teal-800 dark:text-teal-400'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Users className="w-4 h-4 text-teal-700 dark:text-teal-400" />
          <span>Ijtima</span>
        </button>

        <button
          onClick={() => handleTabChange('qafilah')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
            activeTab === 'qafilah'
              ? 'text-teal-800 dark:text-teal-400'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4 text-teal-700 dark:text-teal-400" />
          <span>Qafilah</span>
        </button>

        <button
          onClick={() => handleTabChange('funeral')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-colors ${
            activeTab === 'funeral'
              ? 'text-teal-800 dark:text-teal-400'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <PhoneCall className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>Funeral</span>
        </button>

        <button
          onClick={() => handleOpenDonation()}
          className="flex flex-col items-center gap-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-400"
        >
          <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center">
            <Heart className="w-3 h-3 fill-white" />
          </div>
          <span>Donate</span>
        </button>
      </div>

      {/* Unified In-App Donation Modal */}
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        defaultCause={donationCause}
        defaultAmount={donationAmount}
      />

      {/* Floating Back to Top Button */}
      <BackToTopButton />
    </div>
    </ThemeProvider>
  );
}
