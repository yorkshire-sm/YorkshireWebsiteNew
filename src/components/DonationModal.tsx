import React, { useState, useEffect } from 'react';
import { Heart, X, CheckCircle, ShieldCheck, ArrowRight, Building, Sparkles } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCause?: string;
  defaultAmount?: number;
}

export const DONATION_CAUSES = [
  { id: 'general', name: 'General Welfare & Sadqa Fund' },
  { id: 'zakah', name: 'Zakah Obligation (Purify Your Wealth)' },
  { id: 'fsf', name: 'Funeral Services Fund (FSF Death Committee)' },
  { id: 'regular', name: '£15 Monthly Direct Debit (Regular Supporter)' },
  { id: 'palestine', name: 'Palestine Relief Appeal (FGRF)' },
  { id: 'leeds', name: 'Leeds New Mosque Development Appeal (£150k)' },
  { id: 'huddersfield', name: 'Huddersfield Debt-Free Appeal' },
  { id: 'darulmadinah', name: 'Dar-ul-Madinah Islamic Education Fund' },
];

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  defaultCause = 'general',
  defaultAmount,
}) => {
  const [amount, setAmount] = useState<number | string>(defaultAmount || 50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>(defaultCause);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [giftAid, setGiftAid] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const presetAmounts = [20, 50, 100, 250, 500];

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val && !isNaN(Number(val))) {
      setAmount(Number(val));
    }
  };

  const finalAmount = typeof amount === 'number' ? amount : parseFloat(amount as string) || 0;
  const giftAidAmount = giftAid ? (finalAmount * 0.25).toFixed(2) : '0.00';
  const totalWithGiftAid = giftAid ? (finalAmount * 1.25).toFixed(2) : finalAmount.toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount <= 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReceiptNumber(`DI-YRK-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  const causeName = DONATION_CAUSES.find((c) => c.id === selectedCause)?.name || 'General Community Fund';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn cursor-pointer"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#172438] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 transition-colors cursor-default"
      >
        {/* Header - Strong contrast green/teal background */}
        <div
          className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-4 text-white rounded-t-2xl shadow-md border-b border-teal-700/60"
          style={{ background: 'linear-gradient(135deg, #064E3B 0%, #0D5C4B 50%, #115E59 100%)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-heading text-white leading-tight">
                Secure Donation Portal
              </h2>
              <p className="text-[11px] sm:text-xs text-teal-100 font-medium">
                Dawat-e-Islami UK · Yorkshire Region
              </p>
            </div>
          </div>

          {/* High-visibility Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm border border-white/30 shrink-0 hover:scale-105"
            aria-label="Close donation modal"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                JazakAllah Khair
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-heading">May Allah Almighty Accept Your Contribution</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-md mx-auto">
                Your donation of <span className="font-bold text-teal-800 dark:text-teal-300">£{finalAmount.toFixed(2)}</span> towards{' '}
                <span className="font-semibold text-slate-900 dark:text-slate-100">{causeName}</span> has been confirmed.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#111C2E] border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-left text-sm space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Receipt Reference:</span>
                <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">{receiptNumber}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Donor Name:</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">{fullName || 'Generous Donor'}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Frequency:</span>
                <span className="text-slate-900 dark:text-slate-100 capitalize">{frequency}</span>
              </div>
              {giftAid && (
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-medium pt-1 border-t border-slate-200 dark:border-slate-700">
                  <span>Gift Aid Applied (+25%):</span>
                  <span>+£{giftAidAmount}</span>
                </div>
              )}
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 italic">
              "Those who spend their wealth in the cause of Allah, day and night, secretly and openly, they have their reward with their Lord." (Surah Al-Baqarah)
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl transition-all shadow-md"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Frequency Selector */}
            <div className="flex bg-slate-100 dark:bg-[#111C2E] p-1 rounded-xl border border-slate-200 dark:border-slate-700/80">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  frequency === 'once'
                    ? 'bg-white dark:bg-[#1D2C42] text-teal-800 dark:text-teal-300 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Single Donation
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                  frequency === 'monthly'
                    ? 'bg-white dark:bg-[#1D2C42] text-teal-800 dark:text-teal-300 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Monthly Sadaqah (Ongoing)
              </button>
            </div>

            {/* Cause Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> Choose Cause or Regional Center
              </label>
              <select
                value={selectedCause}
                onChange={(e) => setSelectedCause(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
              >
                {DONATION_CAUSES.map((c) => (
                  <option key={c.id} value={c.id} className="bg-white dark:bg-[#172438] text-slate-900 dark:text-slate-100">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                Select Amount (£ GBP)
              </label>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {presetAmounts.map((p) => {
                  const isSelected = amount === p && !customAmount;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handlePresetSelect(p)}
                      className={`py-2.5 px-2 text-sm font-bold rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-teal-700 dark:bg-teal-600 text-white border-teal-700 dark:border-teal-500 shadow-md ring-2 ring-teal-200 dark:ring-teal-900'
                          : 'bg-white dark:bg-[#111C2E] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-[#25364D]'
                      }`}
                    >
                      £{p}
                    </button>
                  );
                })}
              </div>

              {/* Custom amount input */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  placeholder="Or enter custom amount..."
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-8 pr-4 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                />
              </div>
            </div>

            {/* Gift Aid Box */}
            <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-xl p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftAid}
                  onChange={(e) => setGiftAid(e.target.checked)}
                  className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 dark:border-slate-600 focus:ring-teal-500"
                />
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">
                    Boost my donation by 25% with Gift Aid at no extra cost to me
                  </span>
                  I am a UK taxpayer and would like Dawat-e-Islami UK to reclaim tax on this donation.
                  {giftAid && (
                    <p className="mt-1 font-semibold text-teal-800 dark:text-teal-300">
                      Total value to charity: £{totalWithGiftAid} (includes £{giftAidAmount} from HMRC)
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* Donor Information */}
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Donor Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 sm:w-28 py-3.5 px-4 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm rounded-xl transition-all border border-slate-300 dark:border-slate-600 cursor-pointer text-center shrink-0"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || finalAmount <= 0}
                  className="flex-1 py-3.5 px-4 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing Secure Payment...
                    </span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Confirm & Donate £{finalAmount.toFixed(2)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>256-Bit SSL Encrypted · Dawat-e-Islami UK Charity</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
