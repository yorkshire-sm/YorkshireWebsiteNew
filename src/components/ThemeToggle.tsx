import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'compact' | 'segmented' | 'dropdown';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'dropdown',
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Segmented control variant (ideal for mobile menu or footer)
  if (variant === 'segmented') {
    return (
      <div
        role="radiogroup"
        aria-label="Theme mode selector"
        className={`inline-flex items-center p-1 rounded-xl bg-slate-200/70 dark:bg-[#142136] border border-slate-300/80 dark:border-slate-700/80 ${className}`}
      >
        <button
          type="button"
          role="radio"
          aria-checked={theme === 'light'}
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            theme === 'light'
              ? 'bg-white text-teal-800 shadow-xs border border-slate-200 dark:border-transparent dark:bg-slate-800 dark:text-teal-400'
              : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
          title="Light Mode"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={theme === 'dark'}
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            theme === 'dark'
              ? 'bg-white text-teal-800 shadow-xs border border-slate-200 dark:border-transparent dark:bg-[#1D2C42] dark:text-teal-300'
              : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
          title="Dark Mode"
        >
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>Dark</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={theme === 'system'}
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            theme === 'system'
              ? 'bg-white text-teal-800 shadow-xs border border-slate-200 dark:border-transparent dark:bg-[#1D2C42] dark:text-teal-300'
              : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
          title="System Default"
        >
          <Laptop className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
          <span>System</span>
        </button>
      </div>
    );
  }

  // Compact toggle: cycles light -> dark -> system
  if (variant === 'compact') {
    const handleNext = () => {
      if (theme === 'light') setTheme('dark');
      else if (theme === 'dark') setTheme('system');
      else setTheme('light');
    };

    return (
      <button
        type="button"
        onClick={handleNext}
        aria-label={`Current theme: ${theme}. Click to switch theme.`}
        className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#172438] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#25364D] transition-colors shadow-xs ${className}`}
        title={`Theme: ${theme} (Click to switch)`}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-indigo-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </button>
    );
  }

  // Standard Dropdown variant (default in main navbar)
  const options: { mode: ThemeMode; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      mode: 'light',
      label: 'Light Mode',
      desc: 'Clean & bright theme',
      icon: <Sun className="w-4 h-4 text-amber-500" />,
    },
    {
      mode: 'dark',
      label: 'Dark Mode',
      desc: 'Easy on the eyes',
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
    },
    {
      mode: 'system',
      label: 'System Default',
      desc: 'Follows OS preference',
      icon: <Laptop className="w-4 h-4 text-slate-400" />,
    },
  ];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        id="theme-menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Toggle theme (currently ${theme})`}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-1.5 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#172438] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#25364D] hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500/40"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-indigo-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="theme-menu-button"
          className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-[#172438] border border-slate-200 dark:border-slate-700 shadow-xl py-1.5 z-50 animate-fadeIn divide-y divide-slate-100 dark:divide-slate-800"
        >
          <div className="px-3 py-1.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
              Appearance
            </p>
          </div>
          <div className="py-1">
            {options.map((opt) => {
              const isActive = theme === opt.mode;
              return (
                <button
                  key={opt.mode}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setTheme(opt.mode);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                    isActive
                      ? 'bg-teal-50/80 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#25364D]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="shrink-0">{opt.icon}</span>
                    <div>
                      <div className="font-medium leading-none">{opt.label}</div>
                      <div className="text-[10px] text-slate-600 dark:text-slate-400 mt-0.5">{opt.desc}</div>
                    </div>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
