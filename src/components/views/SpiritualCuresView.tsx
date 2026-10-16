import React from 'react';
import { 
  Sparkles, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  CheckCircle, 
  HeartHandshake, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { SPIRITUAL_CURES_CENTRES } from '../../data/siteData';

export const SpiritualCuresView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Rohani Ilaj & Istikhara Department
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
          Spiritual Cures & Guidance
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Islamic spiritual healing (Rohani Ilaj), Istikhara consultations, and Quranic supplications conducted across West & South Yorkshire centres.
        </p>
      </div>

      {/* 100% FREE SERVICE NOTICE */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-2xl p-5 sm:p-6 text-slate-950 shadow-md border-2 border-amber-600/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-base sm:text-lg uppercase tracking-wide">
              Important Community Notice: 100% Free of Charge
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 leading-relaxed">
              All Istikhara, Spiritual Cures, and Taweezat services offered by Dawat-e-Islami are completely <strong>free of charge</strong> and always have been. We do not demand or accept fees for spiritual remedies.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact & Opening Hours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Istikhara Head Office */}
        <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-4 flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-400 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Direct Telephone Line
            </span>
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Istikhara Head Office</h4>
            <div className="text-xl font-mono font-extrabold text-teal-800 dark:text-teal-400">
              01274 733578
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Faizan-e-Madinah, Maudsley St, Bradford BD3 9LE</p>
          </div>
          <a
            href="tel:01274733578"
            className="w-full py-2.5 bg-teal-800 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white font-bold text-xs rounded-xl transition-colors block"
          >
            Call Head Office
          </a>
        </div>

        {/* Card 2: WhatsApp Desk */}
        <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-4 flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Instant Text Support
            </span>
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">WhatsApp Istikhara</h4>
            <div className="text-xl font-mono font-extrabold text-emerald-800 dark:text-emerald-400">
              07535 155711
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Message anytime with your name and consultation request</p>
          </div>
          <a
            href="https://wa.me/447535155711"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Message on WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Card 3: Opening Hours & Sisters Info */}
        <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-700 dark:text-teal-400" />
            <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Central Opening Hours</h4>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-[#111C2E] border border-slate-100 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Monday – Saturday</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">10:00 AM – 10:00 PM</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-slate-50 dark:bg-[#111C2E] border border-slate-100 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Sunday</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">2:00 PM – 10:00 PM</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800 text-teal-900 dark:text-teal-300 font-medium">
              <span>Weekly Regional Ijtima</span>
              <span className="font-bold">Every Thursday 8:00 PM</span>
            </div>
          </div>

          <div className="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-300 space-y-1">
            <span className="font-bold block">👭 Confidential Service for Sisters:</span>
            <span>Dedicated sisters WhatsApp service available via text for complete privacy.</span>
          </div>
        </div>
      </div>

      {/* Yorkshire Gathering Timetable Directory */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Regional Rohani Ijtima & Consultation Timetable
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
            Find the nearest scheduled session in Bradford, Leeds, Sheffield, Rotherham, Huddersfield, Dewsbury, and Halifax.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPIRITUAL_CURES_CENTRES.map((centre, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#172438] rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider border border-transparent dark:border-teal-800/60">
                  {centre.city}
                </span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">{centre.masjid}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{centre.address}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#111C2E] border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-300 block">📅 Session Schedule:</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed block">{centre.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome to Islam Section */}
      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
            Reverts & Seekers Department
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Welcome to Islam Support
          </h2>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            Taking the step to embrace Islam is a life-changing milestone. Our dedicated New Muslims team provides compassionate, non-judgmental guidance:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
              <h4 className="font-bold text-amber-300 text-sm mb-1">Personal Mentorship</h4>
              <p className="text-xs text-slate-200">One-to-one mentoring tailored to your pace and lifestyle.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
              <h4 className="font-bold text-amber-300 text-sm mb-1">Step-by-Step Learning</h4>
              <p className="text-xs text-slate-200">From learning the Arabic alphabet to performing Salah with confidence.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
              <h4 className="font-bold text-amber-300 text-sm mb-1">Warm Community</h4>
              <p className="text-xs text-slate-200">A supportive brotherhood and sisterhood welcoming you as family.</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="tel:01274442612"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Connect with New Muslims Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
