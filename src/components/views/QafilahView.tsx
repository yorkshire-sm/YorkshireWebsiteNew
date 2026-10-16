import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  Heart, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users
} from 'lucide-react';

export const QafilahView: React.FC = () => {
  // Registration Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Bradford');
  const [days, setDays] = useState('3');
  const [experience, setExperience] = useState('first-time');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 w-full max-w-full overflow-x-hidden">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
            Sunnah-Inspired Spiritual Journey
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Join the 3-Day Qafilah
          </h1>
          <p className="text-teal-100 text-base leading-relaxed">
            A blessed travel arrangement in which Islamic brothers travel together for 3 days or more to learn the Deen, strengthen brotherhood, and invite others towards righteousness.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 bg-white/10 rounded-xl text-center">
              <span className="text-2xl font-extrabold text-amber-300 block">3+</span>
              <span className="text-slate-300">Days Journey</span>
            </div>
            <div className="p-3 bg-white/10 rounded-xl text-center">
              <span className="text-2xl font-extrabold text-amber-300 block">Practical</span>
              <span className="text-slate-300">Sunnah Learning</span>
            </div>
            <div className="p-3 bg-white/10 rounded-xl text-center">
              <span className="text-2xl font-extrabold text-amber-300 block">True</span>
              <span className="text-slate-300">Brotherhood</span>
            </div>
            <div className="p-3 bg-white/10 rounded-xl text-center">
              <span className="text-2xl font-extrabold text-amber-300 block">Character</span>
              <span className="text-slate-300">Reform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Transformative Experience</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100 mt-1">
            Why Travel in a Qafilah?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
            Discover the life-changing benefits of leaving routine worldly distractions for the sake of Allah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Increase Knowledge</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Learn Islamic teachings through practical application, daily Tajweed correction, and experienced mentors during your journey.
            </p>
          </div>

          <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Character Development</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Reform your habits and develop beautiful Islamic manners, humility, and patience through guided spiritual practice.
            </p>
          </div>

          <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">Brotherhood Bonds</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Build lasting relationships with fellow brothers who share your commitment to Islamic values and self-accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Video Feedback from Real Participants */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">Real Voices</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100 mt-1">
            Participant Feedback & Experiences
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
            Watch short video reflections from brothers who recently traveled in the Qafilah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Video 1 */}
          <div className="bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm space-y-3 transition-colors">
            <div className="p-4 bg-slate-900 text-white text-center">
              <h4 className="font-heading font-bold text-sm">"Travelled 6.5 Hours For A Qafilah"</h4>
              <p className="text-[11px] text-amber-300 mt-0.5">What's your excuse?</p>
            </div>
            <div className="aspect-[9/16] max-h-96 mx-auto bg-black flex items-center justify-center">
              <video
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source
                  src="https://videos.files.wordpress.com/j2Z4MnJf/captions_c0ab34.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm space-y-3 transition-colors">
            <div className="p-4 bg-slate-900 text-white text-center">
              <h4 className="font-heading font-bold text-sm">Feedback from a New Muslim</h4>
              <p className="text-[11px] text-teal-300 mt-0.5">Experience of Islamic Brotherhood</p>
            </div>
            <div className="aspect-[9/16] max-h-96 mx-auto bg-black flex items-center justify-center">
              <video
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source
                  src="https://videos.files.wordpress.com/fpZ187l6/diyorkshireregion_2025-10-27-13-33-07_1761571987222.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-white dark:bg-[#172438] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm space-y-3 transition-colors">
            <div className="p-4 bg-slate-900 text-white text-center">
              <h4 className="font-heading font-bold text-sm">First-Time Qafilah Traveller</h4>
              <p className="text-[11px] text-amber-300 mt-0.5">Reflections & Character Reform</p>
            </div>
            <div className="aspect-[9/16] max-h-96 mx-auto bg-black flex items-center justify-center">
              <video
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source
                  src="https://videos.files.wordpress.com/9DRJa5n7/qafila2-video-export-2025-10-27t11-46-30.619z.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Registration Card */}
      <div className="bg-white dark:bg-[#172438] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-md transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-md">
              Registration
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-slate-100">
              Register for Next 3-Day Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Qafilahs depart on weekends and holidays from Yorkshire mosques to nearby towns across the UK. Accommodation and meals are provided at host mosques.
            </p>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Food and lodging hosted at destination mosque</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Mentored by scholars and experienced coordinators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Open to brothers of all backgrounds</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#111C2E] rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-2">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">Qafilah Regional Coordinator:</span>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <a href="tel:07506223083" className="font-bold hover:underline">07506223083</a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <a href="mailto:raozeb@gmail.com" className="font-bold hover:underline">raozeb@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 dark:text-emerald-200 font-heading">
                  Registration Received, Alhamdulillah!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                  Brother {fullName}, our Qafilah coordinator will reach out to you via WhatsApp at {phone} with full travel schedules.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-teal-800 dark:bg-teal-700 hover:bg-teal-750 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Muhammad Bilal"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07123 456789"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your City *</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                    >
                      <option value="Bradford">Bradford</option>
                      <option value="Leeds">Leeds</option>
                      <option value="Sheffield">Sheffield</option>
                      <option value="Rotherham">Rotherham</option>
                      <option value="Huddersfield">Huddersfield</option>
                      <option value="Dewsbury">Dewsbury</option>
                      <option value="Halifax">Halifax</option>
                      <option value="Keighley">Keighley</option>
                      <option value="Other">Other UK Town</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Duration</label>
                    <select
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                    >
                      <option value="3">3 Days (Weekend)</option>
                      <option value="7">7 Days</option>
                      <option value="12">12 Days</option>
                      <option value="30">1 Month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Prior Experience</label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                    >
                      <option value="first-time">First Time Traveller</option>
                      <option value="traveled-before">Traveled in Qafilah Before</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-teal-800 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Qafilah Registration</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
