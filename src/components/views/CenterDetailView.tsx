import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Heart, 
  ExternalLink, 
  Navigation, 
  ChevronRight, 
  ArrowLeft, 
  Building, 
  Calendar, 
  Phone, 
  Mail, 
  GraduationCap, 
  X, 
  Maximize2,
  CheckCircle,
  Share2
} from 'lucide-react';
import { CENTERS_DATA, CenterDetail, CenterLocationItem, CenterEventItem } from '../../data/centersData';

interface CenterDetailViewProps {
  centerId: string;
  subLocationId?: string;
  onSelectCenter: (centerId: string) => void;
  onOpenDonationModal: (causeId?: string) => void;
  onViewAllMosques: () => void;
}

export const CenterDetailView: React.FC<CenterDetailViewProps> = ({
  centerId,
  subLocationId,
  onSelectCenter,
  onOpenDonationModal,
  onViewAllMosques,
}) => {
  // Normalize centerId to valid key
  const validCenterId = CENTERS_DATA[centerId] ? centerId : 'bradford';
  const center: CenterDetail = CENTERS_DATA[validCenterId];

  // Active map drawer ID
  const [activeMapId, setActiveMapId] = useState<string | null>(null);

  // Active Bradford sub-tab if in Bradford
  const [bradfordFilter, setBradfordFilter] = useState<string>(subLocationId || 'all');

  // Lightbox modal state for posters & building images
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  // Update bradford filter when subLocationId prop changes
  useEffect(() => {
    if (subLocationId) {
      setBradfordFilter(subLocationId);
    } else {
      setBradfordFilter('all');
    }
    setActiveMapId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [centerId, subLocationId]);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMap = (id: string) => {
    setActiveMapId(prev => (prev === id ? null : id));
  };

  const centerKeys = [
    { key: 'bradford', label: 'Bradford (4 Sites)' },
    { key: 'dewsbury', label: 'Dewsbury' },
    { key: 'halifax', label: 'Halifax' },
    { key: 'huddersfield', label: 'Huddersfield' },
    { key: 'keighley', label: 'Keighley' },
    { key: 'leeds', label: 'Leeds' },
    { key: 'rotherham', label: 'Rotherham' },
    { key: 'sheffield', label: 'Sheffield' },
  ];

  // Filter locations for Bradford if specific sub-site selected
  const displayedLocations = center.locations.filter(loc => {
    if (validCenterId !== 'bradford' || bradfordFilter === 'all') return true;
    return loc.id === bradfordFilter;
  });

  return (
    <div className="w-full max-w-full overflow-x-hidden font-sans pb-16 space-y-10 bg-slate-50 dark:bg-[#0B1220] text-slate-800 dark:text-slate-100 transition-colors">
      
      {/* 1. Header & Navigation Ribbon */}
      <section className="bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white pt-8 pb-12 px-4 sm:px-6 relative overflow-hidden border-b border-teal-800/60">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Top Breadcrumb & Back Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-teal-200">
              <button 
                onClick={onViewAllMosques}
                className="hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Yorkshire Centers</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-amber-300 font-bold">{center.city} Center</span>
            </div>

            <button
              onClick={onViewAllMosques}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Mosques Directory</span>
            </button>
          </div>

          {/* Center Switcher Strip */}
          <div className="pt-2">
            <div className="text-[11px] font-bold text-teal-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-amber-300" />
              <span>Select Regional Center:</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {centerKeys.map(item => {
                const isSelected = item.key === validCenterId;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => onSelectCenter(item.key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm scale-102'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-3xl space-y-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <span>{center.regionTag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              {center.name}
            </h1>

            <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
              {center.description}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => onOpenDonationModal(center.causeId)}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-slate-950 fill-current" />
                <span>Support {center.city} Center</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const firstMapId = center.locations[0]?.id;
                  if (firstMapId) {
                    setActiveMapId(firstMapId);
                    document.getElementById(`location-${firstMapId}`)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>View Timings & Maps</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Center Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">

        {/* For Bradford: Sub-Location Filter Tabs */}
        {validCenterId === 'bradford' && (
          <div className="bg-white dark:bg-[#172438] p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 px-3 uppercase tracking-wider">
              Bradford Masajid:
            </span>
            <button
              onClick={() => setBradfordFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                bradfordFilter === 'all'
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-[#142136] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#25364D]'
              }`}
            >
              All 4 Masajid
            </button>
            {center.locations.map(loc => (
              <button
                key={loc.id}
                onClick={() => setBradfordFilter(loc.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  bradfordFilter === loc.id
                    ? 'bg-teal-800 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-[#142136] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#25364D]'
                }`}
              >
                {loc.tag}
              </button>
            ))}
          </div>
        )}

        {/* Location Cards */}
        <div className="space-y-8">
          {displayedLocations.map((loc: CenterLocationItem) => {
            const isMapOpen = activeMapId === loc.id;

            return (
              <div
                key={loc.id}
                id={`location-${loc.id}`}
                className="bg-white dark:bg-[#172438] rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Left Column: Image with click to view in full resolution */}
                  <div 
                    className="lg:col-span-5 relative bg-slate-950 overflow-hidden cursor-pointer group min-h-[280px] lg:min-h-[380px] flex items-center justify-center"
                    onClick={() => setLightboxImage({ url: loc.image, title: `${loc.name} - ${loc.tag}` })}
                  >
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 bg-teal-900/90 text-amber-300 text-xs font-bold rounded-lg backdrop-blur-sm shadow-md">
                      {loc.tag}
                    </div>

                    <div className="absolute bottom-4 right-4 px-2.5 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm transition-all shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>View Full Image</span>
                    </div>
                  </div>

                  {/* Right Column: Center Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Tag & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider text-xs">
                          {loc.tag}
                        </span>
                        {loc.statusBadge && (
                          <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold rounded-full">
                            {loc.statusBadge}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
                        {loc.name}
                      </h2>
                      <div className="w-16 h-1 bg-teal-700 dark:bg-teal-500 rounded-full mt-2 mb-4" />

                      {loc.description && (
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
                          {loc.description}
                        </p>
                      )}

                      {/* Info Item: Address */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-100 dark:border-slate-700/80 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                            Address & Postcode
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 break-words">
                            {loc.address}
                          </p>
                        </div>
                      </div>

                      {/* Timing Box */}
                      <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-[#111C2E] border-l-4 border-l-teal-700 dark:border-l-teal-500 border border-teal-100 dark:border-slate-700 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-900 dark:text-teal-200">
                          <Clock className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                          <span>Jummah Prayer Timings</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {loc.jummahTimings.map((t, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white dark:bg-[#172438] px-3 py-2 rounded-xl border border-teal-100/60 dark:border-slate-700">
                              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{t.label}:</span>
                              <span className="text-sm font-extrabold text-teal-800 dark:text-amber-300 font-mono">{t.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => toggleMap(loc.id)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                          isMapOpen
                            ? 'bg-teal-900 text-white shadow-xs'
                            : 'bg-teal-800 hover:bg-teal-700 text-white shadow-xs'
                        }`}
                      >
                        <Navigation className="w-4 h-4 text-amber-300" />
                        <span>{isMapOpen ? 'Hide Interactive Map' : 'View Map & Directions'}</span>
                      </button>

                      <a
                        href={loc.directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 dark:bg-[#142136] hover:bg-slate-200 dark:hover:bg-[#25364D] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenDonationModal(center.causeId)}
                        className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors flex items-center gap-1.5 shadow-xs"
                      >
                        <Heart className="w-3.5 h-3.5 text-slate-950 fill-current" />
                        <span>Donate to this Center</span>
                      </button>
                    </div>

                  </div>
                </div>

                {/* Inline Google Map Drawer */}
                {isMapOpen && (
                  <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-[#111C2E] p-3 sm:p-4 animate-fadeIn">
                    <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700 aspect-video sm:aspect-21/9 w-full">
                      <iframe
                        src={loc.mapEmbedUrl}
                        title={`Map of ${loc.name}`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* 3. Sheffield Special Feature: Dar-ul-Madinah Islamic School */}
        {center.schoolFeature && (
          <section className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div 
                className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md cursor-pointer group relative aspect-4/3 bg-slate-900"
                onClick={() => setLightboxImage({ url: center.schoolFeature!.image, title: center.schoolFeature!.title })}
              >
                <img
                  src={center.schoolFeature.image}
                  alt={center.schoolFeature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                />
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white rounded-md text-[11px] font-semibold flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span>Preview</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Sheffield Education Campus</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
                  {center.schoolFeature.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {center.schoolFeature.description}
                </p>

                <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-teal-950 dark:text-teal-200">
                    {center.schoolFeature.admissionsText}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:${center.schoolFeature.phone.replace(/\s+/g, '')}`}
                    className="p-3 bg-slate-50 dark:bg-[#142136] hover:bg-slate-100 dark:hover:bg-[#25364D] rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Phone Enquiry</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{center.schoolFeature.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${center.schoolFeature.email}`}
                    className="p-3 bg-slate-50 dark:bg-[#142136] hover:bg-slate-100 dark:hover:bg-[#25364D] rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Email Admissions</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate block">{center.schoolFeature.email}</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 4. Events & Weekly Gatherings Section */}
        {center.events.length > 0 && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                Community & Gatherings
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
                {center.city} Center Events
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Weekly Ijtima gatherings, Tajweed classes, and special appeals at {center.name}. Click any poster to view in high definition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {center.events.map((evt: CenterEventItem) => (
                <div
                  key={evt.id}
                  className="bg-white dark:bg-[#172438] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  {/* Poster Image */}
                  <div
                    onClick={() => setLightboxImage({ url: evt.image, title: evt.title })}
                    className="relative aspect-3/4 bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center"
                  >
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {evt.tag && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-teal-900/90 text-amber-300 text-[11px] font-bold rounded-lg shadow-sm backdrop-blur-xs">
                        {evt.tag}
                      </span>
                    )}

                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white rounded-md text-[10px] font-semibold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3 text-amber-300" />
                      <span>Zoom Poster</span>
                    </div>
                  </div>

                  {/* Caption & Action */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100 text-center">
                      {evt.title}
                    </h3>

                    {evt.actionText ? (
                      <button
                        type="button"
                        onClick={() => onOpenDonationModal(evt.actionCauseId || center.causeId)}
                        className="w-full py-2.5 px-4 bg-teal-800 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                      >
                        <Heart className="w-3.5 h-3.5 text-amber-300 fill-current" />
                        <span>{evt.actionText}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setLightboxImage({ url: evt.image, title: evt.title })}
                        className="w-full py-2 px-3 bg-slate-100 dark:bg-[#142136] hover:bg-slate-200 dark:hover:bg-[#25364D] text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition-colors text-center"
                      >
                        View Full Details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Center Donation Section Matching Theme */}
        <section className="bg-gradient-to-br from-teal-900 via-teal-850 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6 border border-teal-700/40">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
              Sadaqah Jariyah & Facility Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              {center.donationTitle}
            </h2>
            <p className="text-teal-100 text-xs sm:text-sm leading-relaxed">
              {center.donationDesc}
            </p>
          </div>

          {/* Quick Giving Amounts */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[20, 50, 100, 250].map(amt => (
              <button
                key={amt}
                type="button"
                onClick={() => onOpenDonationModal(center.causeId)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-sm border border-white/20 transition-all hover:scale-105 cursor-pointer"
              >
                £{amt}
              </button>
            ))}
            <button
              type="button"
              onClick={() => onOpenDonationModal(center.causeId)}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm transition-all shadow-md hover:scale-105 cursor-pointer flex items-center gap-1.5"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate Now</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-teal-200">
            <span>Official Giving Portal · 100% Donation Policy · Gift Aid Eligible</span>
          </div>
        </section>

      </div>

      {/* 6. Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-xs sm:text-sm font-bold truncate pr-4 text-slate-200">
                {lightboxImage.title}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-2 overflow-auto bg-black flex items-center justify-center max-h-[80vh]">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain block mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
