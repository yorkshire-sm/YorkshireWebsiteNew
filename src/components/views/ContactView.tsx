import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Quote,
  Users,
  BookOpen,
  Heart,
  Globe,
  Star,
  Building,
  ArrowRight,
  Info
} from 'lucide-react';
import { FAQS, PREACHERS } from '../../data/siteData';

interface ContactViewProps {
  initialSection?: 'contact' | 'about';
  onOpenDonationModal?: (causeId?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ 
  initialSection = 'contact',
  onOpenDonationModal 
}) => {
  const [activeSection, setActiveSection] = useState<'contact' | 'about'>(initialSection);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sync initialSection if prop changes
  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden space-y-10 pb-16">
      {/* 1. Unified Hero Header with Section Switcher Tabs */}
      <section className="bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Discover · Yorkshire Region</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Contact Us & About Dawat-e-Islami
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Reach out to our regional offices in Bradford, explore our departments, or discover our global history, mission, and spiritual founder.
          </p>

          {/* Unified Sub-Nav Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <button
                type="button"
                onClick={() => {
                  setActiveSection('contact');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSection === 'contact'
                    ? 'bg-amber-400 text-slate-950 shadow-md scale-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact & Offices</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveSection('about');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSection === 'about'
                    ? 'bg-amber-400 text-slate-950 shadow-md scale-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Info className="w-4 h-4" />
                <span>About Us & Founder</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content View Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* ========================================================
            SECTION A: CONTACT & REGIONAL OFFICES
           ======================================================== */}
        {activeSection === 'contact' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-3 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-400 flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">Email Us</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">We respond within 24 to 48 hours</p>
                <a
                  href="mailto:Yorkshire@dawateislamiyorkshire.co.uk"
                  className="text-xs sm:text-sm font-bold text-teal-800 dark:text-teal-400 hover:underline block break-all"
                >
                  Yorkshire@dawateislamiyorkshire.co.uk
                </a>
              </div>

              <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-3 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">Call Our Office</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Mon – Fri: 9:00 AM – 3:00 PM</p>
                <a
                  href="tel:01274442612"
                  className="text-base font-bold font-mono text-amber-800 dark:text-amber-400 hover:underline block"
                >
                  01274 442612
                </a>
              </div>

              <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-3 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">Visit Regional HQ</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Faizan-e-Madinah, Maudsley St</p>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Bradford, BD3 9LE</span>
              </div>
            </div>

            {/* Main Form & Map Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Container */}
              <div className="lg:col-span-7 bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100 mb-2">Send Us a Message</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                  Fill out the form below and our regional coordination team will get in touch with you promptly.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-2xl space-y-3">
                    <div className="w-12 h-12 rounded-full bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-teal-950 dark:text-teal-200 font-heading">
                      Message Received, JazakAllah Khair!
                    </h4>
                    <p className="text-xs text-teal-800 dark:text-teal-300 max-w-sm mx-auto">
                      Thank you for contacting Dawat-e-Islami Yorkshire. We have logged your enquiry and will reply to {email} shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-5 py-2 bg-teal-800 dark:bg-teal-700 hover:bg-teal-750 text-white font-semibold text-xs rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Abdullah Khan"
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Contact Phone</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="07... or 01..."
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Department / Subject</label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] font-medium transition-colors"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Mosque & Jummah">Mosque & Jummah Timings</option>
                          <option value="Funeral Services">Funeral Services Support</option>
                          <option value="School Admissions">Dar-ul-Madinah Admissions</option>
                          <option value="Spiritual Cures">Spiritual Cures / Istikhara</option>
                          <option value="New Muslim Mentorship">Welcome to Islam (Reverts)</option>
                          <option value="Qafilah Registration">3-Day Qafilah Travel</option>
                          <option value="Donations & Zakah">Donations & Zakah</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we assist you today? Please provide any helpful details..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-teal-800 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Location Map & Social Links */}
              <div className="lg:col-span-5 space-y-6">
                {/* Map Preview */}
                <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                    Faizan-e-Madinah Bradford Location
                  </h4>
                  <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madina+Masjid+BD3+|+Dawat-e-Islami+UK,+Maudsley+Street,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      title="Faizan-e-Madinah Bradford Map"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/ztv9mfJHpDrBPsh5A"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 bg-slate-100 dark:bg-[#111C2E] hover:bg-slate-200 dark:hover:bg-[#1D2C42] text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors border border-transparent dark:border-slate-700"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                  </a>
                </div>

                {/* Social Channels */}
                <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                    Follow Yorkshire Region
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs font-bold">
                    <a
                      href="https://www.facebook.com/DIYorkshireReg/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-xl transition-colors flex items-center justify-between border border-blue-100 dark:border-blue-900/50"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.youtube.com/@DIYorkshireReg"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-xl transition-colors flex items-center justify-between border border-red-100 dark:border-red-900/50"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/diyorkshirereg/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/40 rounded-xl transition-colors flex items-center justify-between border border-pink-100 dark:border-pink-900/50"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@diyorkshireregion"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors flex items-center justify-between border border-slate-200 dark:border-slate-700"
                    >
                      <span>TikTok</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Switch to About Us Banner */}
            <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-teal-800/40">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-amber-300 font-bold text-xs uppercase tracking-wider">History & Leadership</span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">Learn More About Dawat-e-Islami</h3>
                <p className="text-teal-200 text-xs sm:text-sm">
                  Discover our founding in 1981, global mission of Quran & Sunnah, and spiritual guide Hazrat Allama Maulana Muhammad Ilyas Attar Qadri.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveSection('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Read About Us & Founder</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* FAQ Section */}
            <div className="bg-slate-50 dark:bg-[#111C2E] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 space-y-6 transition-colors">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Answers to common community inquiries across Yorkshire.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-800 dark:text-slate-100 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SECTION B: ABOUT US & FOUNDER
           ======================================================== */}
        {activeSection === 'about' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Foundation of Dawat-e-Islami */}
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

            {/* About Our Founder Section */}
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

            {/* Preachers & Executive Leadership */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Central Executive Leadership</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
                  Islamic Preachers & Executive Shura
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Dedicated scholars guiding the ongoing propagation of Islamic knowledge, youth development, and regional coordination across Yorkshire and the UK.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
                {PREACHERS.map((preacher, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#172438] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-lg transition-all flex flex-col group"
                  >
                    <div className="aspect-square sm:aspect-auto sm:h-60 lg:h-64 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                      <img
                        src={preacher.image}
                        alt={preacher.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      {preacher.honorific && (
                        <span className="absolute bottom-2 right-2 text-[10px] sm:text-xs text-amber-300 font-arabic font-bold bg-slate-900/80 px-1.5 py-0.5 rounded">
                          {preacher.honorific}
                        </span>
                      )}
                    </div>
                    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between text-center bg-teal-800 dark:bg-[#111C2E] border-t border-teal-700/50 dark:border-slate-700 text-white space-y-1.5 sm:space-y-2">
                      <div>
                        <h4 className="font-heading font-bold text-xs sm:text-base text-white dark:text-slate-100 leading-tight">
                          {preacher.name}
                        </h4>
                        <div className="w-6 sm:w-8 h-0.5 bg-amber-400 mx-auto my-1 sm:my-1.5 rounded" />
                        <p className="text-[10px] sm:text-[11px] font-semibold text-teal-100 dark:text-teal-300 uppercase tracking-wider line-clamp-1">
                          {preacher.title}
                        </p>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-teal-200 dark:text-slate-400 italic line-clamp-2">
                        {preacher.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Over 100 Specialized Departments Worldwide */}
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

              <div className="text-center pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenDonationModal && onOpenDonationModal()}
                  className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg"
                >
                  Support Dawat-e-Islami Yorkshire
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection('contact');
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-xl transition-all border border-white/20"
                >
                  Send a Message to Office
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
