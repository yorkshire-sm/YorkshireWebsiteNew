import React from 'react';
import { 
  Sparkles, 
  Quote, 
  Video, 
  Users, 
  BookOpen, 
  Heart, 
  Globe, 
  Award, 
  Star,
  CheckCircle,
  Building
} from 'lucide-react';
import { PREACHERS } from '../../data/siteData';

interface AboutViewProps {
  onOpenDonationModal: (causeId?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenDonationModal }) => {
  return (
    <div className="space-y-16 pb-16 w-full max-w-full overflow-x-hidden">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our History & Mission · Est. 1981</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            About Dawat-e-Islami
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A global, non-political Islamic movement dedicated to the propagation of the Holy Quran and Sunnah, fostering personal reform, educational enlightenment, and social welfare.
          </p>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 transition-colors">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-md">
              Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
              Foundation of Dawat-e-Islami
            </h2>
            <div className="w-20 h-1 bg-teal-700 dark:bg-teal-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overview Text */}
            <div className="lg:col-span-7 space-y-5">
              {/* Mission Statement Highlight Box */}
              <div className="bg-gradient-to-r from-teal-50 to-amber-50/50 dark:from-teal-950/40 dark:to-amber-950/30 border-l-4 border-teal-700 dark:border-teal-500 p-5 rounded-r-2xl relative">
                <Quote className="w-6 h-6 text-teal-700/30 dark:text-teal-400/30 absolute right-4 top-4" />
                <p className="text-amber-800 dark:text-amber-300 font-arabic text-lg font-bold mb-1">
                  "مجھے اپنی اور ساری دنیا کے لوگوں کی اصلاح کی کوشش کرنی ہے"
                </p>
                <h3 className="text-teal-900 dark:text-teal-200 font-bold italic text-base sm:text-lg leading-relaxed">
                  "I must strive to reform myself and people of the entire world."
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Dawat-e-Islami is a global, non-political, Islamic organization working for the propagation of Quran and Sunnah throughout the world. It was established in <strong className="text-slate-900 dark:text-white">1981</strong> by Hazrat Allama Maulana Muhammad Ilyas Attar Qadri Razavi Ziyae, who is one of the prominent Islamic scholars and spiritual guides of our era.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Through our mission statement, Dawat-e-Islami has transformed the lives of millions of people across the globe, bringing religious reform, moral rectitude, and spiritual guidance to communities worldwide.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                <div className="p-4 bg-slate-50 dark:bg-[#111C2E] rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-800 dark:text-teal-400 font-heading">1981</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mt-0.5">Established</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-[#111C2E] rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-800 dark:text-teal-400 font-heading">Global</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mt-0.5">Presence</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-[#111C2E] rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-800 dark:text-teal-400 font-heading">Millions</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mt-0.5">Lives Changed</div>
                </div>
              </div>
            </div>

            {/* Video Documentary */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-video bg-black shadow-lg border border-slate-200 dark:border-slate-700 relative">
              <video
                controls
                playsInline
                className="w-full h-full object-cover"
                poster="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-1.jpg"
              >
                <source
                  src="https://videos.files.wordpress.com/2zNsczCB/whatsapp-video-2025-03-25-at-03.24.24_d0db911a.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm space-y-10 transition-colors">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-md">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
              About Our Founder
            </h2>
            <div className="w-16 h-1 bg-teal-700 dark:bg-teal-500 mx-auto rounded" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Founder Image (Full Uncropped View) */}
            <div className="relative shrink-0 text-center">
              <div className="w-56 sm:w-64 rounded-2xl overflow-hidden border-4 border-teal-700 dark:border-teal-500 shadow-2xl mx-auto relative bg-slate-950 p-1 group">
                <img
                  src="https://yt3.googleusercontent.com/vrnrxbuIKn_z2DP7Dex285p_SGm5LvDIXZJGvlNrP0noz2CQAOs-tixOwQTXaWd7fzFCGLlcgg=s900-c-k-c0x00ffffff-no-rj"
                  alt="Hazrat Allama Maulana Muhammad Ilyas Attar Qadri Razavi Ziyae"
                  className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 block"
                />
              </div>
            </div>

            {/* Founder Biography */}
            <div className="space-y-5 text-center lg:text-left flex-1">
              <div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 leading-tight">
                  Hazrat Allama Maulana Muhammad Ilyas Attar Qadri Razavi Ziyae
                </h3>
                <p className="text-teal-700 dark:text-teal-400 font-arabic text-xl font-bold mt-1">دامت برکاتھم العالیہ</p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
                  <span className="px-3.5 py-1 bg-teal-100 dark:bg-teal-950 text-teal-900 dark:text-teal-300 rounded-full text-xs font-bold border border-teal-200 dark:border-teal-800">
                    Shaykh-e-Tariqat
                  </span>
                  <span className="px-3.5 py-1 bg-teal-100 dark:bg-teal-950 text-teal-900 dark:text-teal-300 rounded-full text-xs font-bold border border-teal-200 dark:border-teal-800">
                    Ameer-e-Ahlesunnat
                  </span>
                  <span className="px-3.5 py-1 bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 rounded-full text-xs font-bold border border-amber-200 dark:border-amber-800">
                    Founder
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p>
                    One of the prominent Islamic scholars of the 21st century and a spiritual guide. His impressive efforts and untiring struggle have brought religious reform to the lives of millions of individuals worldwide.
                  </p>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <p>
                    Maulana Ilyas Qadri has given the Madani mission, and by the grace of Allah Almighty, millions of Dawat-e-Islami's representatives are working towards religious and social reform in society across more than 180 countries.
                  </p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-teal-50/80 dark:bg-[#111C2E] rounded-xl border border-teal-100 dark:border-slate-700 flex items-center gap-2.5 text-xs text-teal-900 dark:text-teal-300 font-bold">
                  <Users className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>Millions of followers worldwide</span>
                </div>
                <div className="p-3 bg-teal-50/80 dark:bg-[#111C2E] rounded-xl border border-teal-100 dark:border-slate-700 flex items-center gap-2.5 text-xs text-teal-900 dark:text-teal-300 font-bold">
                  <BookOpen className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>Countless Islamic teachings shared</span>
                </div>
                <div className="p-3 bg-teal-50/80 dark:bg-[#111C2E] rounded-xl border border-teal-100 dark:border-slate-700 flex items-center gap-2.5 text-xs text-teal-900 dark:text-teal-300 font-bold">
                  <Heart className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>Lives transformed through guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preachers & Executive Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Central Executive Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
            Islamic Preachers & Executive Shura
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Dedicated scholars guiding the ongoing propagation of Islamic knowledge, youth development, and regional coordination across Yorkshire and the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PREACHERS.map((preacher, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#172438] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="h-64 bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                <img
                  src={preacher.image}
                  alt={preacher.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                {preacher.honorific && (
                  <span className="absolute bottom-2 right-2 text-xs text-amber-300 font-arabic font-bold bg-slate-900/80 px-2 py-0.5 rounded">
                    {preacher.honorific}
                  </span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between text-center bg-teal-800 dark:bg-[#111C2E] border-t border-teal-700/50 dark:border-slate-700 text-white space-y-2">
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white dark:text-slate-100">
                    {preacher.name}
                  </h4>
                  <div className="w-8 h-0.5 bg-amber-400 mx-auto my-1.5 rounded" />
                  <p className="text-[11px] font-semibold text-teal-100 dark:text-teal-300 uppercase tracking-wider">
                    {preacher.title}
                  </p>
                </div>
                <p className="text-[11px] text-teal-200 dark:text-slate-400 italic line-clamp-2">
                  {preacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Departments Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-700/50 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Over 100 Specialized Departments Worldwide
            </h3>
            <p className="text-teal-200 text-sm">
              Empowering communities through education, charity, media, and spirituality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
              <span className="font-bold text-amber-300 text-sm block">Jamia Tul Madina</span>
              <p className="text-slate-300">Higher Islamic seminaries offering Dars-e-Nizami Alim courses.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
              <span className="font-bold text-amber-300 text-sm block">Dar-ul-Madinah</span>
              <p className="text-slate-300">Accredited Islamic School System with EYFS and British curriculums.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
              <span className="font-bold text-amber-300 text-sm block">Madani Channel</span>
              <p className="text-slate-300">24/7 global transmission broadcasting in Urdu, English, and Bangla.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-1.5">
              <span className="font-bold text-amber-300 text-sm block">FGRF Relief</span>
              <p className="text-slate-300">Faizan Global Relief Foundation delivering aid in disaster zones.</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onOpenDonationModal()}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg"
            >
              Support Dawat-e-Islami Yorkshire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
