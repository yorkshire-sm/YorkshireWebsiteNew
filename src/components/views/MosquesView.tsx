import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, Navigation, Clock, Heart, Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';
import { MOSQUE_LOCATIONS, MosqueLocation } from '../../data/siteData';

interface MosquesViewProps {
  onOpenDonationModal: (causeId?: string) => void;
  initialCity?: string;
  onSelectCenter?: (centerId: string) => void;
}

export const MosquesView: React.FC<MosquesViewProps> = ({
  onOpenDonationModal,
  initialCity = 'All',
  onSelectCenter,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>(initialCity);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMapId, setActiveMapId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollTabsLeft, setCanScrollTabsLeft] = useState(false);
  const [canScrollTabsRight, setCanScrollTabsRight] = useState(true);

  const checkTabsScrollability = useCallback(() => {
    const el = tabsScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollTabsLeft(scrollLeft > 4);
    setCanScrollTabsRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkTabsScrollability();
    const el = tabsScrollRef.current;
    if (!el) return;

    window.addEventListener('resize', checkTabsScrollability);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        checkTabsScrollability();
      });
      resizeObserver.observe(el);
    }

    return () => {
      window.removeEventListener('resize', checkTabsScrollability);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [checkTabsScrollability]);

  const handleTabsScroll = (direction: 'left' | 'right') => {
    const el = tabsScrollRef.current;
    if (!el) return;
    const distance = 200;
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
    setTimeout(checkTabsScrollability, 320);
  };

  const handleSelectCity = (city: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCity(city);
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setTimeout(checkTabsScrollability, 350);
    }
  };

  const getCenterKey = (id: string): string => {
    if (id.startsWith('bradford')) return 'bradford';
    if (id.includes('dewsbury')) return 'dewsbury';
    if (id.includes('halifax')) return 'halifax';
    if (id.includes('huddersfield')) return 'huddersfield';
    if (id.includes('keighley')) return 'keighley';
    if (id.includes('leeds')) return 'leeds';
    if (id.includes('rotherham')) return 'rotherham';
    if (id.includes('sheffield')) return 'sheffield';
    return 'bradford';
  };

  const cities = [
    'All',
    'Bradford',
    'Dewsbury',
    'Halifax',
    'Huddersfield',
    'Keighley',
    'Leeds',
    'Rotherham',
    'Sheffield',
  ];

  const filteredMosques = MOSQUE_LOCATIONS.filter((m) => {
    const matchesCity =
      selectedCity === 'All' ||
      m.region.toLowerCase().includes(selectedCity.toLowerCase()) ||
      m.name.toLowerCase().includes(selectedCity.toLowerCase()) ||
      m.address.toLowerCase().includes(selectedCity.toLowerCase());

    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.postcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.region.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCity && matchesSearch;
  });

  const toggleMap = (id: string) => {
    setActiveMapId(activeMapId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Mosques Directory
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
          Yorkshire Centres & Jamā'at Times
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
          Find your nearest Dawat-e-Islami center across West & South Yorkshire. Check Jummah timings, explore maps, view full center images, and support local community facilities.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-[#172438] p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
        {/* City Filter Tabs with Slide Navigation Arrows */}
        <div className="flex items-center gap-2">
          {/* Slide Left Button */}
          <button
            type="button"
            onClick={() => handleTabsScroll('left')}
            disabled={!canScrollTabsLeft}
            aria-label="Slide cities to the left"
            title="Slide left to show previous cities"
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all shrink-0 border ${
              canScrollTabsLeft
                ? 'bg-slate-100 dark:bg-[#142136] hover:bg-teal-700 hover:text-white dark:hover:bg-teal-600 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 active:scale-95 cursor-pointer shadow-xs'
                : 'bg-slate-50 dark:bg-[#111C2E] text-slate-300 dark:text-slate-600 border-slate-200/50 dark:border-slate-800 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Scrollable Container with Smooth Scroll and Edge Fade Overlays */}
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {canScrollTabsLeft && (
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white dark:from-[#172438] to-transparent z-10 transition-opacity" />
            )}
            {canScrollTabsRight && (
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white dark:from-[#172438] to-transparent z-10 transition-opacity" />
            )}

            <div
              ref={tabsScrollRef}
              onScroll={checkTabsScrollability}
              className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none scroll-smooth w-full"
            >
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={(e) => handleSelectCity(city, e)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                    selectedCity === city
                      ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-[#142136] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#25364D]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Slide Right Button */}
          <button
            type="button"
            onClick={() => handleTabsScroll('right')}
            disabled={!canScrollTabsRight}
            aria-label="Slide cities to the right"
            title="Slide right to show remaining cities"
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all shrink-0 border ${
              canScrollTabsRight
                ? 'bg-slate-100 dark:bg-[#142136] hover:bg-teal-700 hover:text-white dark:hover:bg-teal-600 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 active:scale-95 cursor-pointer shadow-xs'
                : 'bg-slate-50 dark:bg-[#111C2E] text-slate-300 dark:text-slate-600 border-slate-200/50 dark:border-slate-800 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mosque by name, address, or postcode (e.g. BD3, S5, Gibbet St)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
          />
        </div>
      </div>

      {/* Mosques Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMosques.map((m: MosqueLocation) => {
          const isMapOpen = activeMapId === m.id;

          return (
            <div
              key={m.id}
              className="bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-600 dark:hover:border-teal-500 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container - uncropped full preview on click */}
                <div 
                  onClick={() => setSelectedImage({ url: m.image, title: `${m.name} (${m.region})` })}
                  className="relative h-56 bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-300">
                    {m.region}
                  </div>
                  {m.statusBadge && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500/90 backdrop-blur-md rounded-lg text-[11px] font-bold text-slate-950">
                      {m.statusBadge}
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-slate-900/70 hover:bg-slate-900 text-white rounded-md text-[10px] font-semibold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                    <span>Full Photo</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">{m.name}</h3>
                    <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{m.address}, {m.postcode}</span>
                    </div>
                  </div>

                  {/* Timings Box */}
                  <div className="bg-slate-50 dark:bg-[#111C2E] rounded-xl p-3.5 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                      <span>Jummah Congregational Timings:</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {m.jummahTimings.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-white dark:bg-[#172438] rounded-lg border border-slate-200 dark:border-slate-700 text-center"
                        >
                          <span className="block text-[11px] text-slate-500 dark:text-slate-400">{t.label}</span>
                          <span className="block text-sm font-extrabold text-teal-800 dark:text-teal-300 font-heading">
                            {t.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {m.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                      {m.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleMap(m.id)}
                    className="flex-1 py-2 px-3 bg-slate-100 dark:bg-[#142136] hover:bg-slate-200 dark:hover:bg-[#25364D] text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                    <span>{isMapOpen ? 'Hide Map' : 'View Map'}</span>
                    {isMapOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={m.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3 bg-slate-100 dark:bg-[#142136] hover:bg-slate-200 dark:hover:bg-[#25364D] text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                    <span>Directions</span>
                  </a>
                </div>

                {onSelectCenter && (
                  <button
                    type="button"
                    onClick={() => onSelectCenter(getCenterKey(m.id))}
                    className="w-full py-2 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>View Full Center Page & Events</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onOpenDonationModal(m.id)}
                  className="w-full py-2.5 px-4 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-amber-300" />
                  <span>Support {m.name}</span>
                </button>

                {/* Map Drawer */}
                {isMapOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
                    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-video bg-slate-100 dark:bg-[#111C2E]">
                      <iframe
                        src={m.mapEmbedUrl}
                        title={`Google Map for ${m.name}`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMosques.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
          <p className="text-slate-500 dark:text-slate-400 text-base">No mosques found matching your search.</p>
          <button
            onClick={() => {
              setSelectedCity('All');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Mosque Full Photo Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-sm font-bold text-amber-300">
                {selectedImage.title}
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-2 overflow-auto bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain block mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
