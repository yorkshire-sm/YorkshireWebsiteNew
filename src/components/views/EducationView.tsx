import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Calendar, 
  Clock, 
  Sparkles,
  Heart
} from 'lucide-react';

interface EducationViewProps {
  onOpenDonationModal: (causeId?: string) => void;
}

export const EducationView: React.FC<EducationViewProps> = ({
  onOpenDonationModal,
}) => {
  const [activeTab, setActiveTab] = useState<'darulmadinah' | 'almadinah' | 'higher'>('darulmadinah');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Islamic Education System
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
          Nurturing Minds, Faith & Character
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          From accredited Early Years Foundation Stage (EYFS) to Cambridge IGCSE secondary schooling and higher scholarly education under Dawat-e-Islami.
        </p>

        {/* Sub-navigation tabs */}
        <div className="flex justify-center gap-2 pt-4 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveTab('darulmadinah')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'darulmadinah'
                ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-md'
                : 'bg-white dark:bg-[#172438] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#25364D]'
            }`}
          >
            Dar-ul-Madinah Schools (Ages 2–11)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('almadinah')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'almadinah'
                ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-md'
                : 'bg-white dark:bg-[#172438] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#25364D]'
            }`}
          >
            Al-Madinah Online Secondary (IGCSE)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('higher')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'higher'
                ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-md'
                : 'bg-white dark:bg-[#172438] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#25364D]'
            }`}
          >
            Higher Islamic Institutes
          </button>
        </div>
      </div>

      {/* Tab 1: Dar-ul-Madinah Schools */}
      {activeTab === 'darulmadinah' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md">
                  Ofsted Regulated Nursery & Primary
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  Dar-ul-Madinah Yorkshire
                </h2>
                <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
                  Fostering a collaborative partnership between qualified educators and parents. We deliver the Early Years Foundation Stage (EYFS) alongside Islamic curriculum, Sunnah values, and daily Quran memorization.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <span className="font-bold text-amber-300 block">Admissions Open</span>
                    <span className="text-slate-300">Ages 2, 3 & 4 Years</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl">
                    <span className="font-bold text-amber-300 block">Flexible Sessions</span>
                    <span className="text-slate-300">Morning, Afternoon & Full-Day</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl col-span-2 sm:col-span-1">
                    <span className="font-bold text-amber-300 block">3 Intakes / Year</span>
                    <span className="text-slate-300">Autumn, Spring & Summer</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 flex items-center justify-center p-1">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/10/1837040886_welcome_banner.jpeg"
                  alt="Dar-ul-Madinah Welcome Banner"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Core Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Daily Hifdh Sessions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Children memorize Juzz Ammah with correct Tajweed rules, instilling a deep love for Allah's holy words from a tender age.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Islamic Studies</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learning the 99 Blessed Names of Allah, basic Fiqh, daily Masnoon Duas, and Islamic manners through interactive storytelling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Moral Tarbiyyah</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instilling reverence for Allah, love for the Holy Prophet ﷺ, self-discipline, respect for elders, and practical Sunnahs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Fun Fridays</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exciting hands-on arts, crafts, educational games, melodious Nasheeds, and experiencing the collective joy of Jummah.
              </p>
            </div>
          </div>

          {/* Campuses Directory */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-heading text-slate-900">Our Yorkshire Campuses</h3>
              <p className="text-slate-600 text-sm mt-1">Visit or call your local campus to arrange a tour or register your child.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sheffield Campus */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-700" />
                  <h4 className="font-heading font-bold text-lg text-slate-900">Sheffield Campus</h4>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <p>69 Norwood Road, Sheffield, S5 7BP</p>
                  <p className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <Phone className="w-3.5 h-3.5 text-teal-700" /> 0114 327 0930
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold text-teal-800">
                    <Mail className="w-3.5 h-3.5 text-teal-700" /> Operations.Sheffield@darulmadinah.co.uk
                  </p>
                </div>
                <a
                  href="mailto:Operations.Sheffield@darulmadinah.co.uk"
                  className="inline-block w-full py-2.5 text-center text-xs font-bold bg-teal-50 hover:bg-teal-100 text-teal-800 rounded-xl transition-colors"
                >
                  Contact Sheffield Campus
                </a>
              </div>

              {/* Bradford Campus */}
              <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-700 dark:text-teal-400" />
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Bradford Campus</h4>
                </div>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <p>Faizan E Madinah, Maudsley Street, Bradford, BD3 9LE</p>
                  <p className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                    <Phone className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" /> 0114 327 1060
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold text-teal-800 dark:text-teal-400">
                    <Mail className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" /> Operations.bradford@darulmadinah.co.uk
                  </p>
                </div>
                <a
                  href="mailto:Operations.bradford@darulmadinah.co.uk"
                  className="inline-block w-full py-2.5 text-center text-xs font-bold bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-800 dark:text-teal-300 rounded-xl transition-colors border border-transparent dark:border-teal-800/60"
                >
                  Contact Bradford Campus
                </a>
              </div>

              {/* Rotherham Campus */}
              <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-700 dark:text-teal-400" />
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Rotherham Campus</h4>
                </div>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <p>Faizan e Madinah, 1 Maltkiln Street, Rotherham, S60 2HY</p>
                  <p className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                    <Phone className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" /> 01709 296 220
                  </p>
                  <p className="flex items-center gap-1.5 font-semibold text-teal-800 dark:text-teal-400">
                    <Mail className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" /> Operations.rotherham@darulmadinah.co.uk
                  </p>
                </div>
                <a
                  href="mailto:Operations.rotherham@darulmadinah.co.uk"
                  className="inline-block w-full py-2.5 text-center text-xs font-bold bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-800 dark:text-teal-300 rounded-xl transition-colors border border-transparent dark:border-teal-800/60"
                >
                  Contact Rotherham Campus
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Al-Madinah Online Secondary School */}
      {activeTab === 'almadinah' && (
        <div className="space-y-10 animate-fadeIn">
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md">
                  Official Cambridge International School
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  AL Madinah Online Secondary School
                </h2>
                <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
                  Now admitting students for <strong>Years 7, 8, 9, and 10</strong>. Offering world-class Cambridge IGCSE qualifications combined with live classes and Islamic Tarbiyyah, accessible from the comfort and safety of home.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Cambridge IGCSE Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Live Interactive Classes</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Islamic Studies with Tarbiyyah</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Affordable & Flexible Fees</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.almadinahonline.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Book Your Free Trial Lesson</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:01217131799"
                    className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> 0121 713 1799
                  </a>
                </div>
              </div>

              {/* Video Player */}
              <div className="lg:col-span-5 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video flex items-center justify-center">
                <video
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2026/01/al-madina.jpeg"
                >
                  <source
                    src="https://videos.files.wordpress.com/i9JHzR9z/al-madina.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">
                Experience a Free Trial Lesson
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                Not sure if online secondary schooling is right for your child? Book a complimentary trial lesson today and see the live teaching quality firsthand.
              </p>
            </div>
            <a
              href="https://www.almadinahonline.co.uk"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-all whitespace-nowrap"
            >
              Book Trial Slot →
            </a>
          </div>
        </div>
      )}

      {/* Tab 3: Higher Islamic Education & Resources */}
      {activeTab === 'higher' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
          {/* Jamia Tul Madina */}
          <a
            href="https://www.jamiatulmadinauk.net/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#142136] p-2 flex items-center justify-center border border-slate-100 dark:border-slate-700/80">
                <img
                  src="https://static.wixstatic.com/media/06ce1a_b72ecbad2ebd405885ffe2a795beb249~mv2.png/v1/fill/w_93,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20200908-WA0008_PNG.png"
                  alt="Jamia Tul Madina UK"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Jamia Tul Madina UK
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Comprehensive Dars-e-Nizami (Alim Course) curriculum training future Islamic scholars and imams in the UK.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400">
              <span>Higher Seminary</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Learn Your Faith */}
          <a
            href="https://www.lyfonline.com/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#142136] p-2 flex items-center justify-center border border-slate-100 dark:border-slate-700/80">
                <img
                  src="https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/logo.webp"
                  alt="Learn Your Faith Online"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Learn Your Faith (LYF)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Structured online short courses in Arabic, Quran translation, Tajweed, and essential Fiqh for busy adults and professionals.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400">
              <span>Online Learning</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Maktaba Tul Madina */}
          <a
            href="https://www.maktabatulmadina.net/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#142136] p-2 flex items-center justify-center border border-slate-100 dark:border-slate-700/80">
                <img
                  src="https://www.maktabatulmadina.net/img/SiteImg/MaktabaTulMadinaLogo.png"
                  alt="Maktaba Tul Madina"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Maktaba Tul Madina
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Official publishing house providing authentic Islamic books, commentaries, treatises, and translated literature.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400">
              <span>Publications</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Darul Ifta Ahlesunnat */}
          <a
            href="https://www.daruliftaahlesunnat.net/en"
            target="_blank"
            rel="noreferrer"
            className="group bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#142136] p-2 flex items-center justify-center border border-slate-100 dark:border-slate-700/80">
                <img
                  src="https://www.daruliftaahlesunnat.net/public_html/assets/images/img/logo-en.png"
                  alt="Darul Ifta Ahlesunnat"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Darul Ifta Ahlesunnat
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Shar'i verdicts (Fatawa) addressing contemporary lifestyle, financial, and family questions based on Hanafi Fiqh.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400">
              <span>Fatawa & Guidance</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      )}

      {/* Support Education CTA */}
      <div className="bg-slate-100 dark:bg-[#111C2E] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-4 transition-colors">
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">
          Support Islamic Education in Yorkshire
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Help sponsor classrooms, learning resources, and nursery provisions for children across our Yorkshire campuses.
        </p>
        <button
          type="button"
          onClick={() => onOpenDonationModal('darulmadinah')}
          className="px-6 py-3 bg-teal-800 dark:bg-teal-700 hover:bg-teal-900 dark:hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all inline-flex items-center gap-2 shadow-md"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>Donate to Education Fund</span>
        </button>
      </div>
    </div>
  );
};
