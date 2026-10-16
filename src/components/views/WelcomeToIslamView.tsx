import React, { useState } from 'react';
import { 
  Heart, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  Check, 
  Droplets, 
  Sun, 
  Compass, 
  HelpCircle, 
  X, 
  ArrowRight,
  Tv,
  Share2,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

interface WelcomeToIslamViewProps {
  onOpenDonationModal: (causeId?: string, amount?: number) => void;
  setActiveTab: (tab: any) => void;
}

export const WelcomeToIslamView: React.FC<WelcomeToIslamViewProps> = ({
  onOpenDonationModal,
  setActiveTab
}) => {
  const [activeFlipbook, setActiveFlipbook] = useState<string | null>(null);

  const books = [
    {
      title: "Welcome to Islam",
      image: "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/06/welcome.png",
      url: "https://online.fliphtml5.com/gwjhb/tcnu/"
    },
    {
      title: "Primary Teachings of Islam",
      image: "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/12/bt2120.png",
      url: "https://online.fliphtml5.com/gwjhb/uzfe/"
    },
    {
      title: "Madani Qaida",
      image: "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/06/bt526.png",
      url: "https://online.fliphtml5.com/gwjhb/bggu/"
    },
    {
      title: "Laws of Salah",
      image: "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/06/bt20.png",
      url: "https://online.fliphtml5.com/gwjhb/oyby/"
    },
    {
      title: "Salah for Islamic Sisters",
      image: "https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/06/salah-for-islamic-sister-1.png",
      url: "https://online.fliphtml5.com/gwjhb/hxca/"
    }
  ];

  const pillars = [
    {
      icon: "🕌",
      title: "Faith / Shahadah",
      desc: "Testimony of Faith that there is no god but Allah, and Muhammad (peace be upon him) is His final Messenger.",
      link: "https://dawateislamiyorkshire.co.uk/shahadah/"
    },
    {
      icon: "🤲",
      title: "Prayer / Salah",
      desc: "The sacred act of worshipping Allah five times a day throughout your lifetime to cultivate mindfulness.",
      link: "https://dawateislamiyorkshire.co.uk/salah-prayer/"
    },
    {
      icon: "💰",
      title: "Zakah / Charity",
      desc: "Giving an obligatory 2.5% share of your qualifying annual wealth to the less fortunate.",
      tab: "zakah"
    },
    {
      icon: "🌙",
      title: "Fasting / Sawm",
      desc: "Fasting from dawn to sunset during the holy month of Ramadan for spiritual cleansing and discipline.",
      link: "https://dawateislamiyorkshire.co.uk/fasting/"
    },
    {
      icon: "🕋",
      title: "Pilgrimage / Hajj",
      desc: "A spiritual once-in-a-lifetime pilgrimage to the Holy Ka'abah in Makkah for those who are able.",
      link: "https://dawateislamiyorkshire.co.uk/hajj/"
    }
  ];

  const resources = [
    {
      icon: "🕌",
      title: "How To Pray Salah",
      desc: "Complete step-by-step guide to performing the five daily prayers with proper postures and recitations.",
      badge: "Complete Guide",
      actionUrl: "https://dawateislamiyorkshire.co.uk/how-to-pray/"
    },
    {
      icon: "💧",
      title: "How to Perform Wudu",
      desc: "Step-by-step interactive guide showing you how to perform ablution (wudu) before prayer.",
      badge: "11 Steps",
      actionUrl: "https://dawateislamiyorkshire.co.uk/wudu"
    },
    {
      icon: "🚿",
      title: "How to Perform Ghusl",
      desc: "A simple, clear guide to performing the full-body ritual bath (ghusl) in accordance with the Sunnah.",
      badge: "12 Steps",
      actionUrl: "https://dawateislamiyorkshire.co.uk/ghusl"
    },
    {
      icon: "🏜️",
      title: "How to Perform Tayammum",
      desc: "Learn dry ablution (tayammum) with clean earth when water is unavailable or cannot be used.",
      badge: "10 Steps",
      actionUrl: "https://dawateislamiyorkshire.co.uk/tayammum"
    },
    {
      icon: "📖",
      title: "Islamic Glossary",
      desc: "Learn essential Islamic terms like Sunnah, Hadith, Fard, Wajib, Halal, and Haram.",
      badge: "16+ Terms",
      actionUrl: "https://dawateislamiyorkshire.co.uk/terms"
    },
    {
      icon: "🤲",
      title: "Essential Duas",
      desc: "Daily supplications with Arabic text, transliteration, and translation for morning, evening, and meals.",
      badge: "7+ Duas",
      actionUrl: "https://dawateislamiyorkshire.co.uk/dua"
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden font-sans pb-16 bg-slate-50 dark:bg-[#0B1220] text-slate-800 dark:text-slate-100 transition-colors">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7B96] via-[#0a5e76] to-[#083d4f] text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(251,191,36,0.1)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <img
            src="https://welcometoislam.net/components/logo-footer.png"
            alt="Welcome to Islam Logo"
            className="w-40 sm:w-48 mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />

          <div className="inline-block px-6 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-amber-300 font-semibold text-xs sm:text-sm tracking-wide shadow-md">
            Are you new to Islam or want to learn more?
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight drop-shadow-md">
            WELCOME TO ISLAM
          </h1>

          <p className="text-lg sm:text-2xl text-teal-100 max-w-3xl mx-auto font-medium leading-relaxed">
            We support your journey with personal mentoring, Islamic education and integration guidance.
          </p>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            From <span className="text-amber-300 font-bold">Shahadah</span> to <span className="text-amber-300 font-bold">Hajj</span> – we're here with resources, friendly community fellowship, and dedicated support tailored for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#resources"
              className="px-6 py-3.5 bg-white text-[#0F7B96] hover:bg-slate-100 font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore Free Resources
            </a>
            <a
              href="https://welcometoislam.net/register"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <span>📝 Request New Muslim Support</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Hero Donation Card */}
          <aside className="mt-12 text-left bg-white dark:bg-[#172438] text-slate-800 dark:text-slate-100 rounded-3xl p-6 sm:p-10 shadow-2xl border-t-4 border-amber-400 border border-slate-200 dark:border-slate-700 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-colors">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                Support Welcome to Islam
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#083d4f] dark:text-teal-300 font-heading leading-tight">
                Help someone take their next step towards Islam
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Your donation helps Welcome to Islam develop future projects, share the message of Islam and support new Muslims on their journey across Yorkshire and beyond.
              </p>
              
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-slate-100 block font-bold">Help us fund:</strong>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 list-disc marker:text-[#0F7B96] dark:marker:text-teal-400">
                  <li>Leaflets that introduce Islam warmly</li>
                  <li>Books & learning resources for new Muslims</li>
                  <li>Dawah stalls & community outreach</li>
                  <li>Website running costs & digital guides</li>
                  <li>Future New Muslims Welcome Events</li>
                  <li>New Muslims Gift & Starter Packs</li>
                </ul>
              </div>

              <p className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold pt-1">
                Give today and help us reach more people. JazakAllahu khayran for your support.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 dark:bg-[#111C2E] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 text-center transition-colors">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">
                Give Sadaqah / Donation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Support our outreach, mentoring, and educational packs for new reverts.
              </p>

              <div className="grid grid-cols-3 gap-2">
                {[15, 30, 50].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => onOpenDonationModal('welcome-islam', amt)}
                    className="py-2.5 px-3 rounded-xl border border-teal-700 dark:border-teal-500 bg-white dark:bg-[#172438] hover:bg-teal-50 dark:hover:bg-teal-900/40 text-teal-900 dark:text-teal-300 font-bold text-sm transition-all shadow-xs"
                  >
                    £{amt}
                  </button>
                ))}
              </div>

              <button
                onClick={() => onOpenDonationModal('welcome-islam')}
                className="w-full py-3.5 bg-[#0F7B96] hover:bg-[#0a5e76] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Donate to Welcome to Islam</span>
              </button>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">100% Secure & Charitable</span>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. Support Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-100 to-white dark:from-[#0B1220] dark:to-[#111C2E] transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden space-y-8 transition-colors">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">Compassionate Guidance</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
                Do you need support with:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/60 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Learning authentic Islamic knowledge?</span>
              </div>
              <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/60 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Navigating lifestyle & daily routine changes?</span>
              </div>
              <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/60 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Connecting with the wider Muslim community?</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111C2E] border-l-4 border-[#0F7B96] space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
              <p>
                Our aim is to support individuals with their new journey from the initial stage of accepting Islam, known as the Testimony of Faith <strong>'Shahadah'</strong>.
              </p>
              <p>
                We provide <strong>educational</strong>, <strong>spiritual</strong>, and <strong>social mentoring</strong> to develop an active and confident new member of the Islamic community.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 space-y-3 transition-colors">
              <p className="text-xs sm:text-sm font-bold text-sky-950 dark:text-sky-200">
                Our education department provides classes to best fit your learning outcomes from fundamentals to advanced:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-sky-900 dark:text-sky-300">
                <li className="flex items-center gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✔</span> Primary <strong>Madani Qaidah</strong> lessons (learn to read the Holy Quran)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✔</span> Lessons on <strong>ritual purity (Wudu & Ghusl)</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✔</span> Practical guidance on the <strong>5 daily prayers (Salah)</strong>
                </li>
              </ul>
            </div>

            {/* Registration Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 dark:from-[#111C2E] dark:via-[#142136] dark:to-[#111C2E] border border-teal-200 dark:border-teal-800 text-center space-y-4 transition-colors">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F7B96] dark:text-teal-400 font-heading">
                Welcome to Islam – New Muslim Support Registration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto italic">
                "We are here to help you on your journey with care, guidance, and support. You are not alone."
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                Please fill out this short form so we can offer the right support for you — whether it's learning to pray, meeting other Muslims, or having someone friendly to talk to. We will never share your personal details with any third party.
              </p>
              <div className="pt-2">
                <a
                  href="https://welcometoislam.net/register"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F7B96] hover:bg-[#0a5e76] text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-105"
                >
                  <span>📝 Request Support Online</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. New Muslim Resources Cards */}
      <section id="resources" className="py-16 px-4 sm:px-6 bg-amber-50/40 dark:bg-[#0B1220] transition-colors">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F7B96] dark:text-teal-400">Practical Guides</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
              NEW MUSLIM RESOURCES
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Essential step-by-step guides and tools to help you perform acts of worship with confidence. Click on any resource below to view the full guide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item, idx) => (
              <a
                key={idx}
                href={item.actionUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white dark:bg-[#172438] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F7B96] via-teal-400 to-emerald-400 group-hover:h-2.5 transition-all" />
                <div>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0F7B96] dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-[#0F7B96] dark:text-teal-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Learn Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 5 Pillars of Islam */}
      <section className="py-16 px-4 sm:px-6 bg-white dark:bg-[#111C2E] transition-colors">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">The Foundations</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
              5 PILLARS OF ISLAM
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              The essential five obligations that form the core foundation of a Muslim's faith and daily devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#172438] hover:bg-white dark:hover:bg-[#1D2C42] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-teal-600 dark:hover:border-teal-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2">
                  {pillar.tab ? (
                    <button
                      type="button"
                      onClick={() => setActiveTab(pillar.tab)}
                      className="w-full py-2 bg-slate-900 dark:bg-teal-800 hover:bg-teal-700 dark:hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      Calculate Zakah →
                    </button>
                  ) : (
                    <a
                      href={pillar.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full block py-2 bg-slate-900 dark:bg-teal-800 hover:bg-teal-700 dark:hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Islamic Books & Interactive Flipbook Slider */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0B1220] dark:to-[#111C2E] transition-colors">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F7B96] dark:text-teal-400">Free Digital Library</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
              ISLAMIC BOOKS
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Read free digital publications and flipbooks tailored for new Muslims, available in interactive page-turning view.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#172438] rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between group"
              >
                <div 
                  onClick={() => setActiveFlipbook(book.url)}
                  className="cursor-pointer bg-slate-50 dark:bg-[#111C2E] p-2 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-50 dark:group-hover:bg-teal-950/40 transition-colors"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="max-h-60 w-auto object-contain rounded-lg drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center space-y-3">
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100 line-clamp-2">
                    {book.title}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setActiveFlipbook(book.url)}
                    className="w-full py-2.5 px-4 bg-[#0F7B96] hover:bg-[#0a5e76] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>📖 Read Online</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Connect With Us / Social Media */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-teal-50 to-sky-100 dark:from-[#0B1220] dark:via-[#111C2E] dark:to-[#172438] transition-colors">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">Stay Connected</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F7B96] dark:text-teal-400 font-heading">
              CONNECT WITH US
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Follow Welcome to Islam on social media for daily inspiration, video guides, and community reminders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* YouTube */}
            <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 shadow-md border-t-4 border-red-600 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-3">
                <span className="text-4xl">📺</span>
                <h3 className="font-heading font-bold text-xl text-red-600 dark:text-red-400">YouTube</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Watch inspiring videos, revert stories, and step-by-step worship tutorials.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://youtube.com/@wti_official?si=izBoqfztOaoKXt0f"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  <span>Visit Channel →</span>
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 shadow-md border-t-4 border-blue-600 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-3">
                <span className="text-4xl">👥</span>
                <h3 className="font-heading font-bold text-xl text-blue-600 dark:text-blue-400">Facebook</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Join our online revert community and stay updated with upcoming gatherings and workshops.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://www.facebook.com/share/1BdZbQeJHA/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  <span>Follow Us →</span>
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 shadow-md border-t-4 border-pink-500 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-3">
                <span className="text-4xl">📸</span>
                <h3 className="font-heading font-bold text-xl text-pink-600 dark:text-pink-400">Instagram</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Daily visual quotes, stories, and answers to common questions about Islam.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/welcometoislamofficial?igsh=MTRmNTV2NDg5aXZnag=="
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 text-white font-bold text-xs rounded-xl transition-opacity"
                >
                  <span>Follow Instagram →</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#111C2E] border border-teal-200 dark:border-teal-800 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-left transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Daily Posts & Reminders</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎥</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Web Series for Reverts</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Answers to Common Objections</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Flipbook Modal */}
      {activeFlipbook && (
        <div
          onClick={() => setActiveFlipbook(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-slate-700"
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  Welcome to Islam - Interactive Digital Reader
                </span>
              </div>
              <button
                onClick={() => setActiveFlipbook(null)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                ✕ Close Reader
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-black">
              <iframe
                src={activeFlipbook}
                title="Islamic Book Flipbook"
                className="w-full h-full border-none"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
