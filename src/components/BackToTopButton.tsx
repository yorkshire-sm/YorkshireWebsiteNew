import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button as soon as user starts scrolling down (after 180px)
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed z-40 bottom-20 right-4 sm:bottom-22 sm:right-6 lg:bottom-8 lg:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-teal-800 hover:bg-teal-700 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-700/50 dark:border-amber-300/40 focus:outline-hidden focus:ring-2 focus:ring-teal-400 dark:focus:ring-amber-300 active:scale-90 group cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};
