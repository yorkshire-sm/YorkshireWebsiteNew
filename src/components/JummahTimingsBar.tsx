import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface JummahTimingSummary {
  city: string;
  centerId: string;
  name: string;
  firstJamat: string;
  secondJamat?: string;
  address: string;
}

const JUMMAH_SCHEDULES: JummahTimingSummary[] = [
  { city: 'Bradford Central', centerId: 'bradford', name: 'Faizan E Madina (BD3)', firstJamat: '2:00 PM', address: 'Maudsley St, BD3 9LE' },
  { city: 'Bradford West', centerId: 'bradford', name: 'Faizan E Makkah (BD9)', firstJamat: '1:30 PM', secondJamat: '2:00 PM', address: 'Lilycroft Rd, BD9 5AB' },
  { city: 'Bradford East', centerId: 'bradford', name: 'Faizan E Attar (BD1)', firstJamat: '1:30 PM', address: '70-72 Harris St, BD1 5JD' },
  { city: 'Bradford South', centerId: 'bradford', name: 'Faizan e Raza (BD6)', firstJamat: '1:30 PM', secondJamat: '2:00 PM', address: '71 Beacon Rd, BD6 3ET' },
  { city: 'Dewsbury', centerId: 'dewsbury', name: 'Faizan E Madinah', firstJamat: '1:30 PM', address: 'John St, Ravensthorpe, WF13 3LE' },
  { city: 'Halifax', centerId: 'halifax', name: 'Faizan E Madina', firstJamat: '1:30 PM', secondJamat: '2:30 PM', address: 'Gibbet St, HX1 4JX' },
  { city: 'Huddersfield', centerId: 'huddersfield', name: 'Faizan E Madina', firstJamat: '1:30 PM', address: '75 New N Rd, HD1 5ND' },
  { city: 'Keighley', centerId: 'keighley', name: 'Faizan E Raza', firstJamat: '1:30 PM', address: '29 Highfield Ln, BD21 2DJ' },
  { city: 'Rotherham', centerId: 'rotherham', name: 'Faizan E Madinah', firstJamat: '1:30 PM', address: '1 Maltkiln St, S60 2HY' },
  { city: 'Sheffield', centerId: 'sheffield', name: 'Faizan E Madinah', firstJamat: '1:30 PM', secondJamat: '4:00 PM', address: 'Firth Park Rd, S5 6WS' },
];

interface JummahTimingsBarProps {
  onViewAllMosques: () => void;
  onSelectCenter?: (centerId: string) => void;
}

export const JummahTimingsBar: React.FC<JummahTimingsBarProps> = ({ 
  onViewAllMosques,
  onSelectCenter 
}) => {
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const activeMosque = JUMMAH_SCHEDULES[selectedCityIdx];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll boundary to enable/disable arrow buttons
  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScrollability();
    const el = scrollContainerRef.current;
    if (!el) return;

    window.addEventListener('resize', checkScrollability);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        checkScrollability();
      });
      resizeObserver.observe(el);
    }

    return () => {
      window.removeEventListener('resize', checkScrollability);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [checkScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distance = 160;
    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
    setTimeout(checkScrollability, 320);
  };

  const handleSelectCenter = (index: number, e?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCityIdx(index);
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setTimeout(checkScrollability, 350);
    }
  };

  return (
    <section className="bg-gradient-to-r from-teal-950 via-teal-900 to-slate-950 text-white border-b border-teal-800/60 py-2.5 px-3 sm:px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3 text-xs">
        {/* Left: Badge & Title */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 font-extrabold uppercase tracking-wider text-[11px] shadow-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>Jummah Timings</span>
          </div>
          <span className="text-teal-200 font-medium hidden sm:inline">
            Yorkshire Regional Jamā'at Schedule
          </span>
        </div>

        {/* Center: Interactive Centre Selector Strip with Slide Arrows on Both Sides */}
        <div className="flex items-center gap-1.5 flex-1 min-w-0 max-w-full">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Slide centers to the left"
            title="Slide left to show previous centers"
            className={`w-6 h-6 rounded-md flex items-center justify-center transition-all shrink-0 border ${
              canScrollLeft
                ? 'bg-white/15 hover:bg-amber-400 hover:text-slate-950 text-white border-white/20 active:scale-90 cursor-pointer shadow-xs'
                : 'bg-white/5 text-white/30 border-white/5 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Scrollable Container with Smooth Scroll and Edge Fade Overlays */}
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-teal-950 to-transparent z-10 transition-opacity" />
            )}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-slate-950 to-transparent z-10 transition-opacity" />
            )}

            <div
              ref={scrollContainerRef}
              onScroll={checkScrollability}
              className="flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none scroll-smooth w-full"
            >
              {JUMMAH_SCHEDULES.map((item, index) => {
                const isSelected = selectedCityIdx === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={(e) => handleSelectCenter(index, e)}
                    className={`px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap text-[11px] transition-all shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {item.city}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Slide centers to the right"
            title="Slide right to show remaining centers"
            className={`w-6 h-6 rounded-md flex items-center justify-center transition-all shrink-0 border ${
              canScrollRight
                ? 'bg-white/15 hover:bg-amber-400 hover:text-slate-950 text-white border-white/20 active:scale-90 cursor-pointer shadow-xs'
                : 'bg-white/5 text-white/30 border-white/5 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Right: Selected Mosque Timing Highlight & Link */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 md:pt-0 border-t md:border-t-0 border-teal-800/50">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-medium hidden lg:inline">{activeMosque.name}:</span>
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-md border border-white/10 font-mono">
              <span className="text-amber-300 font-bold">{activeMosque.firstJamat}</span>
              {activeMosque.secondJamat && (
                <>
                  <span className="text-slate-500">|</span>
                  <span className="text-amber-200">{activeMosque.secondJamat}</span>
                </>
              )}
            </div>
          </div>
          {onSelectCenter && (
            <button
              type="button"
              onClick={() => onSelectCenter(activeMosque.centerId)}
              className="text-white hover:text-amber-300 font-bold flex items-center gap-0.5 text-[11px] hover:underline shrink-0"
              title={`View ${activeMosque.city} center page`}
            >
              <span>View Center</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onViewAllMosques}
            className="text-amber-300 hover:text-white font-bold flex items-center gap-0.5 text-[11px] hover:underline shrink-0"
          >
            <span>All Mosques</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
