import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot 
} from 'firebase/firestore';
import { 
  firestoreDb, 
  GatheringItem, 
  FALLBACK_BROTHERS_GATHERINGS, 
  FALLBACK_SISTERS_GATHERINGS 
} from '../../data/firebaseIjtima';
import { 
  Search, 
  Clock, 
  MapPin, 
  Building, 
  Users, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Maximize2,
  Calendar,
  Share2
} from 'lucide-react';

interface IjtimaViewProps {
  initialType?: 'brothers' | 'sisters';
}

export const IjtimaView: React.FC<IjtimaViewProps> = ({ initialType = 'brothers' }) => {
  const [activeType, setActiveType] = useState<'brothers' | 'sisters'>(initialType);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Real-time data from Firestore
  const [brothersGatherings, setBrothersGatherings] = useState<GatheringItem[]>(FALLBACK_BROTHERS_GATHERINGS);
  const [sistersGatherings, setSistersGatherings] = useState<GatheringItem[]>(FALLBACK_SISTERS_GATHERINGS);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  // Sync with initialType changes
  useEffect(() => {
    if (initialType) {
      setActiveType(initialType);
    }
  }, [initialType]);

  // Firestore real-time listener for Brothers & Sisters
  useEffect(() => {
    let unsubscribeBrothers: () => void;
    let unsubscribeSisters: () => void;

    try {
      const qBrothers = query(collection(firestoreDb, "brothers_gatherings"), orderBy("city"));
      unsubscribeBrothers = onSnapshot(qBrothers, (snapshot) => {
        if (!snapshot.empty) {
          const list: GatheringItem[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data() as GatheringItem;
            list.push({ ...data, id: doc.id });
          });
          setBrothersGatherings(list);
        }
        setLoading(false);
      }, (error) => {
        console.warn("Firestore brothers listener fallback active:", error);
        setLoading(false);
      });

      const qSisters = query(collection(firestoreDb, "sisters_gatherings"), orderBy("city"));
      unsubscribeSisters = onSnapshot(qSisters, (snapshot) => {
        if (!snapshot.empty) {
          const list: GatheringItem[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data() as GatheringItem;
            list.push({ ...data, id: doc.id });
          });
          setSistersGatherings(list);
        }
        setLoading(false);
      }, (error) => {
        console.warn("Firestore sisters listener fallback active:", error);
        setLoading(false);
      });
    } catch (err) {
      console.warn("Firebase initialization error, using local verified records:", err);
      setLoading(false);
    }

    return () => {
      if (unsubscribeBrothers) unsubscribeBrothers();
      if (unsubscribeSisters) unsubscribeSisters();
    };
  }, []);

  // Filter brothers gatherings
  const filteredBrothers = brothersGatherings.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      (item.city || '').toLowerCase().includes(term) ||
      (item.venue || '').toLowerCase().includes(term) ||
      (item.address || '').toLowerCase().includes(term) ||
      (item.timeDisplay || '').toLowerCase().includes(term)
    );
  });

  // Filter sisters gatherings
  const filteredSisters = sistersGatherings.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      (item.city || '').toLowerCase().includes(term) ||
      (item.venue || '').toLowerCase().includes(term) ||
      (item.address || '').toLowerCase().includes(term) ||
      (item.timeDisplay || '').toLowerCase().includes(term)
    );
  });

  const brothersPosterUrl = "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Brothers.jpg";
  const sistersPosterUrl = "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Sisters.jpg";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 w-full max-w-full overflow-x-hidden">
      {/* Top Category Toggle: Brothers vs Sisters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-[#111C2E] p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => { setActiveType('brothers'); setSearchTerm(''); }}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
              activeType === 'brothers'
                ? 'bg-[#0F7B96] text-white shadow-md'
                : 'bg-slate-100 dark:bg-[#172438] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#25364D]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Weekly Brothers</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveType('sisters'); setSearchTerm(''); }}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
              activeType === 'sisters'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-[#172438] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#25364D]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-200" />
            <span>Weekly Sisters</span>
          </button>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center sm:text-right">
          {activeType === 'brothers' ? 'Weekly Thursday Evenings Across Yorkshire' : 'Dedicated Private Sessions for Islamic Sisters'}
        </div>
      </div>

      {/* ============================================================== */}
      {/* BROTHERS VIEW - EXACT USER SPECIFIED STYLE                     */}
      {/* ============================================================== */}
      {activeType === 'brothers' && (
        <div className="space-y-10 animate-fadeIn">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-heading tracking-tight">
              Weekly Gatherings For Brothers
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Join us for spiritual gatherings, Quran recitation, Naats, and inspirational discourses across Yorkshire.
            </p>
          </div>

          {/* Search Box - 50px pill with #0F7B96 border & soft shadow */}
          <div className="max-w-[600px] mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by city, location, or day..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-[18px] pr-[50px] pl-[25px] rounded-[50px] border-2 border-[#0F7B96] text-base text-slate-900 dark:text-slate-100 bg-white dark:bg-[#142136] placeholder-slate-400 dark:placeholder-slate-500 shadow-[0_10px_30px_rgba(15,123,150,0.2)] focus:outline-none focus:-translate-y-0.5 focus:shadow-[0_15px_40px_rgba(15,123,150,0.3)] transition-all duration-300"
              />
              <Search className="w-5 h-5 text-[#0F7B96] absolute right-[25px] top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Full-Size Uncropped Poster Section */}
          <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 transition-colors">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/80 pb-4">
              <div>
                <span className="px-3 py-1 bg-teal-50 dark:bg-teal-950/60 text-[#0F7B96] dark:text-teal-400 rounded-md text-xs font-bold uppercase tracking-wider">
                  Regional Central Gathering
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-slate-100 mt-1">
                  Sunnah-Inspired Weekly Gathering Poster
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Full official poster displayed in complete size without cropping. Click image to enlarge full screen.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPoster(brothersPosterUrl)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F7B96] hover:bg-[#0A5368] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Full Screen</span>
                </button>
                <a
                  href={brothersPosterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 dark:bg-[#111C2E] hover:bg-slate-200 dark:hover:bg-[#1D2C42] text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition-all border border-transparent dark:border-slate-700"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Image</span>
                </a>
              </div>
            </div>

            {/* UN-CROPPED FULL POSTER DISPLAY */}
            <div 
              onClick={() => setSelectedPoster(brothersPosterUrl)}
              className="w-full flex justify-center cursor-pointer group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-slate-950 max-w-4xl w-full p-2">
                <img
                  src={brothersPosterUrl}
                  alt="Weekly Gathering for Brothers - Full Poster"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto block group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="p-3 text-center text-xs font-semibold text-slate-300 bg-slate-900 rounded-b-xl flex items-center justify-center gap-2">
                  <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Click to view poster in 100% full high resolution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Layout - User's exact card styling:
              .gathering-card {
                background: white;
                border-radius: 20px;
                padding: 25px;
                box-shadow: 0 10px 30px rgba(15, 123, 150, 0.2);
                border: 1px solid rgba(15, 123, 150, 0.1);
                border-top: 5px solid #0F7B96;
              }
          */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>📍</span> All Yorkshire Gathering Locations ({filteredBrothers.length})
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">Every Thursday at 7:30 PM with Tabarruk</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {filteredBrothers.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#172438] rounded-[20px] p-[25px] shadow-[0_10px_30px_rgba(15,123,150,0.15)] dark:shadow-none border border-[rgba(15,123,150,0.15)] dark:border-slate-700 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,123,150,0.25)] flex flex-col justify-between group"
                >
                  {/* Top 5px bar */}
                  <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#0F7B96]" />

                  <div className="space-y-4">
                    {/* Header / City */}
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#0F7B96] dark:text-teal-400 flex items-center justify-center text-lg font-bold">
                          🕌
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-lg text-slate-900 dark:text-slate-100">
                            {item.city}
                          </h4>
                          <span className="text-[11px] font-semibold text-[#0F7B96] dark:text-teal-400 block">
                            Yorkshire Region
                          </span>
                        </div>
                      </div>

                      {item.language && (
                        <span className="px-2.5 py-1 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-[10px] font-bold rounded-full border border-teal-100 dark:border-teal-800/60">
                          {item.language}
                        </span>
                      )}
                    </div>

                    {/* Venue */}
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
                        <Building className="w-4 h-4 text-[#0F7B96] dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{item.venue}</span>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{item.address}</span>
                      </div>
                    </div>

                    {/* Timing Badge */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F7B96] text-white text-xs font-bold shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.timeDisplay}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(item.venue + ' ' + item.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#0F7B96] dark:text-teal-400 hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      Tabarruk Served
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBrothers.length === 0 && (
              <div className="text-center py-16 bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm">No gatherings found matching "{searchTerm}".</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 px-4 py-2 bg-[#0F7B96] text-white text-xs font-bold rounded-lg"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SISTERS VIEW                                                   */}
      {/* ============================================================== */}
      {activeType === 'sisters' && (
        <div className="space-y-10 animate-fadeIn">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-heading tracking-tight">
              Weekly Gatherings For Sisters
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Join us for uplifting spiritual gatherings, Islamic education, and Tarbiyyah in a dedicated, private sisters' environment.
            </p>
          </div>

          {/* Search Box - 50px pill with rose/pink border */}
          <div className="max-w-[600px] mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by city, location, or day..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-[18px] pr-[50px] pl-[25px] rounded-[50px] border-2 border-pink-500 text-base text-slate-900 dark:text-slate-100 bg-white dark:bg-[#142136] placeholder-slate-400 dark:placeholder-slate-500 shadow-[0_10px_30px_rgba(219,39,119,0.2)] focus:outline-none focus:-translate-y-0.5 focus:shadow-[0_15px_40px_rgba(219,39,119,0.3)] transition-all duration-300"
              />
              <Search className="w-5 h-5 text-pink-500 absolute right-[25px] top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Full-Size Uncropped Sisters Poster Section */}
          <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-8 border border-pink-200 dark:border-pink-900/50 shadow-sm space-y-6 transition-colors">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-pink-50 dark:border-slate-700/80 pb-4">
              <div>
                <span className="px-3 py-1 bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 rounded-md text-xs font-bold uppercase tracking-wider">
                  Sisters Department
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-slate-100 mt-1">
                  Weekly Sisters Gathering Poster
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Full official poster displayed in complete size without cropping. Click image to enlarge full screen.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPoster(sistersPosterUrl)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Full Screen</span>
                </button>
                <a
                  href={sistersPosterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-pink-50 dark:bg-pink-950/60 hover:bg-pink-100 dark:hover:bg-pink-900/60 text-pink-800 dark:text-pink-300 text-xs font-semibold rounded-xl transition-all border border-pink-100 dark:border-pink-900/50"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Image</span>
                </a>
              </div>
            </div>

            {/* UN-CROPPED FULL SISTERS POSTER DISPLAY */}
            <div 
              onClick={() => setSelectedPoster(sistersPosterUrl)}
              className="w-full flex justify-center cursor-pointer group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-pink-200 dark:border-slate-700 shadow-lg bg-slate-950 max-w-4xl w-full p-2">
                <img
                  src={sistersPosterUrl}
                  alt="Weekly Gathering for Sisters - Full Poster"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto block group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="p-3 text-center text-xs font-semibold text-slate-300 bg-slate-900 rounded-b-xl flex items-center justify-center gap-2">
                  <Maximize2 className="w-3.5 h-3.5 text-pink-400" />
                  <span>Click to view poster in 100% full high resolution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sisters Gatherings Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>📍</span> All Sisters Sessions Across Yorkshire ({filteredSisters.length})
              </h3>
              <span className="text-xs text-pink-700 dark:text-pink-400 font-semibold">Strict Confidentiality & Female Instructors</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {filteredSisters.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#172438] rounded-[20px] p-[25px] shadow-[0_10px_30px_rgba(219,39,119,0.15)] dark:shadow-none border border-[rgba(219,39,119,0.15)] dark:border-slate-700 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(219,39,119,0.25)] flex flex-col justify-between group"
                >
                  {/* Top 5px pink bar */}
                  <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600" />

                  <div className="space-y-4">
                    {/* Header / City */}
                    <div className="flex items-center justify-between border-b border-pink-50 dark:border-slate-700/80 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center text-lg font-bold">
                          🕌
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-lg text-slate-900 dark:text-slate-100">
                            {item.city}
                          </h4>
                          <span className="text-[11px] font-semibold text-pink-600 dark:text-pink-400 block">
                            Sisters Hall
                          </span>
                        </div>
                      </div>

                      {item.language && (
                        <span className="px-2.5 py-1 bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-[10px] font-bold rounded-full border border-pink-100 dark:border-pink-900/50">
                          {item.language}
                        </span>
                      )}
                    </div>

                    {/* Venue */}
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
                        <Building className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                        <span>{item.venue}</span>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{item.address}</span>
                      </div>
                    </div>

                    {/* Timing Badge */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.timeDisplay}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="pt-5 mt-4 border-t border-pink-50 dark:border-slate-700/80 flex items-center justify-between text-xs">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(item.venue + ' ' + item.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-pink-700 dark:text-pink-400 hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>

                    <div className="text-[11px] text-pink-600 dark:text-pink-400 font-medium">
                      Private Hall
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredSisters.length === 0 && (
              <div className="text-center py-16 bg-white dark:bg-[#172438] rounded-2xl border border-pink-100 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm">No gatherings found matching "{searchTerm}".</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 px-4 py-2 bg-pink-600 text-white text-xs font-bold rounded-lg"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enlarged High-Resolution Poster Lightbox (Zero Cropping) */}
      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[96vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-xs font-bold text-teal-400">
                Official Gathering Poster (Full Resolution)
              </span>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-xs font-bold flex items-center gap-1"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-2 overflow-auto flex items-center justify-center bg-black max-h-[88vh]">
              <img
                src={selectedPoster}
                alt="Enlarged Gathering Poster"
                className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl object-contain block mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
