import React, { useState } from 'react';
import { Tv, Radio, Volume2, Globe, Sparkles, ExternalLink } from 'lucide-react';

export const LiveStreamingPlayer: React.FC = () => {
  const [streamType, setStreamType] = useState<'video' | 'audio'>('video');
  const [language, setLanguage] = useState<'urdu' | 'english' | 'bangla'>('urdu');

  const videoStreams = {
    urdu: 'https://streaming.madanichannel.tv/videos/embed/b9790f10-cb0d-4e30-82bf-84a756234e58?autoplay=0&warningTitle=0&peertubeLink=0',
    english: 'https://streaming.madanichannel.tv/videos/embed/c6a600b0-82cb-454a-8953-2bb2bb372edc?autoplay=0&warningTitle=0&peertubeLink=0',
    bangla: 'https://streaming.madanichannel.tv/videos/embed/d3e49b76-ac06-4689-a641-9200445b647f?autoplay=0&warningTitle=0&peertubeLink=0',
  };

  const audioStreams = {
    urdu: 'https://audio.madanichannel.tv/public/urdu_live/embed?theme=light',
    english: 'https://audio.madanichannel.tv/public/english_live/embed?theme=light',
    bangla: 'https://audio.madanichannel.tv/public/bangla_live/embed?theme=light',
  };

  const languages: { id: 'urdu' | 'english' | 'bangla'; label: string; flag: string }[] = [
    { id: 'urdu', label: 'Urdu', flag: 'اردو' },
    { id: 'english', label: 'English', flag: 'EN' },
    { id: 'bangla', label: 'Bangla', flag: 'বাংলা' },
  ];

  return (
    <div className="bg-white dark:bg-[#172438] rounded-2xl shadow-lg border border-slate-200 dark:border-[#334155] overflow-hidden transition-colors">
      {/* Player Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
            {streamType === 'video' ? <Tv className="w-4 h-4" /> : <Radio className="w-4 h-4" />}
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm sm:text-base leading-tight">
              Madani Channel {streamType === 'video' ? 'Live TV' : 'Live Radio'}
            </h3>
            <p className="text-[11px] text-teal-200">24/7 Worldwide Transmission</p>
          </div>
        </div>

        {/* Video / Audio Switcher */}
        <div className="flex items-center gap-1 bg-teal-950/70 p-1 rounded-xl border border-teal-700/60 text-xs">
          <button
            type="button"
            onClick={() => setStreamType('video')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              streamType === 'video'
                ? 'bg-amber-400 text-slate-900 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Tv className="w-3.5 h-3.5" /> Video
          </button>
          <button
            type="button"
            onClick={() => setStreamType('audio')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              streamType === 'audio'
                ? 'bg-amber-400 text-slate-900 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" /> Audio
          </button>
        </div>
      </div>

      {/* Language Selector Tabs */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-slate-50 dark:bg-[#111C2E] border-b border-slate-200 dark:border-[#334155] text-xs">
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
          <Globe className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
          <span>Select Language:</span>
        </div>
        <div className="flex items-center gap-1">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setLanguage(lang.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                language === lang.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white dark:bg-[#1D2C42] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#334155] hover:border-teal-400'
              }`}
            >
              {lang.label} <span className="opacity-70 text-[10px]">({lang.flag})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Iframe Stream Container */}
      <div className="relative bg-slate-950 aspect-video w-full flex items-center justify-center">
        {streamType === 'video' ? (
          <iframe
            key={`video-${language}`}
            src={videoStreams[language]}
            title={`Madani Channel Live TV - ${language}`}
            className="w-full h-full border-0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-radial from-slate-900 to-slate-950">
            <div className="w-16 h-16 rounded-full bg-teal-800/60 border border-teal-500/40 flex items-center justify-center text-amber-400 mb-4 animate-pulse">
              <Radio className="w-8 h-8" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">Live Audio Broadcast ({language.toUpperCase()})</h4>
            <p className="text-slate-400 text-xs mb-4">Continuous Quran recitation, Naats, and spiritual discourses</p>
            <div className="w-full max-w-md h-28 bg-white/5 rounded-xl border border-white/10 p-2 overflow-hidden">
              <iframe
                key={`audio-${language}`}
                src={audioStreams[language]}
                title={`Madani Channel Live Radio - ${language}`}
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </div>
        )}
      </div>

      {/* Stream Footer Info */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-[#111C2E] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-[#334155]">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Broadcast directly from Dawat-e-Islami Media Network
        </span>
        <a
          href="https://madanichannel.tv"
          target="_blank"
          rel="noreferrer"
          className="text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 font-semibold flex items-center gap-1"
        >
          MadaniChannel.tv <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
