import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Scale, 
  Coins, 
  FileText, 
  Heart, 
  CheckCircle, 
  RotateCcw, 
  Sparkles,
  Info,
  Building,
  HelpCircle
} from 'lucide-react';

interface ZakahCalculatorViewProps {
  onOpenDonationModal: (causeId?: string, amount?: number) => void;
}

export const ZakahCalculatorView: React.FC<ZakahCalculatorViewProps> = ({
  onOpenDonationModal,
}) => {
  const NISAB_SILVER_GRAMS = 612.36;
  const NISAB_GOLD_GRAMS = 87.48;
  const ZAKAT_RATE = 0.025;

  // Metal Rates (GBP per gram fallbacks)
  const [metal, setMetal] = useState<'silver' | 'gold'>('silver');
  const [nisabThreshold, setNisabThreshold] = useState<number>(550.0);
  const [isLoadingNisab, setIsLoadingNisab] = useState<boolean>(true);
  const [nisabStatus, setNisabStatus] = useState<string>('Loading live market rates...');

  // Asset inputs
  const [goldSilverVal, setGoldSilverVal] = useState<string>('');
  const [cashVal, setCashVal] = useState<string>('');
  const [savingsVal, setSavingsVal] = useState<string>('');
  const [investmentsVal, setInvestmentsVal] = useState<string>('');
  const [loansGivenVal, setLoansGivenVal] = useState<string>('');
  const [businessStockVal, setBusinessStockVal] = useState<string>('');

  // Liability inputs
  const [loansOwedVal, setLoansOwedVal] = useState<string>('');
  const [salariesVal, setSalariesVal] = useState<string>('');
  const [otherBillsVal, setOtherBillsVal] = useState<string>('');

  // Info Tab selection
  const [eduTab, setEduTab] = useState<'what' | 'nisab' | 'why'>('what');

  // Fetch metal price
  useEffect(() => {
    let isMounted = true;
    setIsLoadingNisab(true);

    const symbol = metal === 'gold' ? 'XAU' : 'XAG';
    const grams = metal === 'gold' ? NISAB_GOLD_GRAMS : NISAB_SILVER_GRAMS;
    const fallbackRate = metal === 'gold' ? 76.5 : 0.85;

    // Check cache in localStorage (60s TTL)
    const cacheKey = `zc_${symbol.toLowerCase()}_gbp`;
    const cacheTimeKey = `zc_${symbol.toLowerCase()}_time`;
    const cached = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

    if (cached && cachedTime && Date.now() - parseInt(cachedTime) < 60000) {
      const pricePerOzGBP = parseFloat(cached);
      const pricePerGram = pricePerOzGBP / 31.1035;
      const total = pricePerGram * grams;
      setNisabThreshold(total);
      setIsLoadingNisab(false);
      setNisabStatus(`Live rate: £${pricePerGram.toFixed(2)}/g`);
      return;
    }

    Promise.all([
      fetch(`https://api.gold-api.com/price/${symbol}`).then((r) => r.json()),
      fetch('https://open.er-api.com/v6/latest/USD').then((r) => r.json()),
    ])
      .then(([metalData, fxData]) => {
        if (!isMounted) return;
        if (metalData?.price && fxData?.rates?.GBP) {
          const priceOzUSD = parseFloat(metalData.price);
          const gbpRate = parseFloat(fxData.rates.GBP);
          const priceOzGBP = priceOzUSD * gbpRate;

          localStorage.setItem(cacheKey, priceOzGBP.toString());
          localStorage.setItem(cacheTimeKey, Date.now().toString());

          const pricePerGram = priceOzGBP / 31.1035;
          const total = pricePerGram * grams;
          setNisabThreshold(total);
          setIsLoadingNisab(false);
          setNisabStatus(`Live market rate: £${pricePerGram.toFixed(2)}/g`);
        } else {
          throw new Error('API format mismatch');
        }
      })
      .catch(() => {
        if (!isMounted) return;
        const total = fallbackRate * grams;
        setNisabThreshold(total);
        setIsLoadingNisab(false);
        setNisabStatus(`Standard estimate: £${fallbackRate.toFixed(2)}/g`);
      });

    return () => {
      isMounted = false;
    };
  }, [metal]);

  // Calculations
  const parseNum = (v: string) => {
    const num = parseFloat(v);
    return isNaN(num) || num < 0 ? 0 : num;
  };

  const totalAssets =
    parseNum(goldSilverVal) +
    parseNum(cashVal) +
    parseNum(savingsVal) +
    parseNum(investmentsVal) +
    parseNum(loansGivenVal) +
    parseNum(businessStockVal);

  const totalLiabilities =
    parseNum(loansOwedVal) +
    parseNum(salariesVal) +
    parseNum(otherBillsVal);

  const netWealth = Math.max(0, totalAssets - totalLiabilities);
  const isEligible = nisabThreshold > 0 && netWealth >= nisabThreshold;
  const zakahDue = netWealth * ZAKAT_RATE;

  const handleReset = () => {
    setGoldSilverVal('');
    setCashVal('');
    setSavingsVal('');
    setInvestmentsVal('');
    setLoansGivenVal('');
    setBusinessStockVal('');
    setLoansOwedVal('');
    setSalariesVal('');
    setOtherBillsVal('');
  };

  const fmtCurrency = (n: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
    }).format(n);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Third Pillar of Islam
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-slate-100">
          Zakah & Nisaab Calculator
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Accurately calculate your annual 2.5% Zakah obligation with live precious metal market rates according to Hanafi Fiqh.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The Interactive Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Nisab Threshold Selector */}
          <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h2 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                1. Select Nisaab Threshold Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Threshold Based On
                </label>
                <select
                  value={metal}
                  onChange={(e) => setMetal(e.target.value as 'silver' | 'gold')}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                >
                  <option value="silver" className="bg-white dark:bg-[#172438] text-slate-900 dark:text-slate-100">Silver (612.36g) · Recommended</option>
                  <option value="gold" className="bg-white dark:bg-[#172438] text-slate-900 dark:text-slate-100">Gold (87.48g)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Current Nisaab Value
                </label>
                <div className="px-3.5 py-2.5 bg-slate-100 dark:bg-[#142136] rounded-xl text-sm font-mono font-bold text-teal-900 dark:text-teal-300 border border-slate-200 dark:border-slate-700">
                  {isLoadingNisab ? 'Fetching rates...' : fmtCurrency(nisabThreshold)}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>{nisabStatus}</span>
              <span className="text-[11px] text-teal-700 dark:text-teal-400 italic">Hanafi standard: 612.36g silver</span>
            </div>
          </div>

          {/* Assets Section */}
          <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <Coins className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                2. Your Zakatable Assets (£ GBP)
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Value of Gold & Silver possessed
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={goldSilverVal}
                    onChange={(e) => setGoldSilverVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Cash in Hand & Bank Accounts
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={cashVal}
                    onChange={(e) => setCashVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Other Savings (future funds, ISAs, bonds)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={savingsVal}
                    onChange={(e) => setSavingsVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Investments / Shares / Cryptocurrencies
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={investmentsVal}
                    onChange={(e) => setInvestmentsVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Money you have loaned out (expected to recover)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={loansGivenVal}
                    onChange={(e) => setLoansGivenVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Business Inventory / Stock For Sale Value
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={businessStockVal}
                    onChange={(e) => setBusinessStockVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Deductible Liabilities Section */}
          <div className="bg-white dark:bg-[#172438] rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 transition-colors">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <FileText className="w-5 h-5 text-red-500 dark:text-red-400" />
              <h2 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                3. Deductible Liabilities Due (£ GBP)
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Money owed (immediate debts, credit cards due)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={loansOwedVal}
                    onChange={(e) => setLoansOwedVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Employees' wages / salaries due
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={salariesVal}
                    onChange={(e) => setSalariesVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Other outgoings due (unpaid rent, bills, tax)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={otherBillsVal}
                    onChange={(e) => setOtherBillsVal(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#172438]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#142136] hover:bg-slate-200 dark:hover:bg-[#25364D] rounded-lg transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Reset Values
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Summary & Action Card */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-700/50 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase border-b border-white/10 pb-3">
              Calculation Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-300">Total Zakatable Assets:</span>
                <span className="font-mono font-bold text-white text-base">{fmtCurrency(totalAssets)}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-300">Deductible Liabilities:</span>
                <span className="font-mono font-bold text-red-300 text-base">- {fmtCurrency(totalLiabilities)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t border-white/15">
                <span className="font-bold text-white">Net Qualifying Wealth:</span>
                <span className="font-mono font-extrabold text-amber-300 text-lg">{fmtCurrency(netWealth)}</span>
              </div>
              <div className="flex justify-between items-center py-1 text-xs text-slate-300">
                <span>Nisaab Threshold ({metal}):</span>
                <span className="font-mono">{fmtCurrency(nisabThreshold)}</span>
              </div>
            </div>

            {/* Eligibility State Card */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-3">
              {isEligible ? (
                <>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full text-xs font-bold uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5" /> Eligible to Pay Zakah
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 uppercase tracking-wider block">
                      Your Zakah Obligation (2.5%)
                    </span>
                    <div className="text-3xl sm:text-4xl font-mono font-extrabold text-amber-300 mt-1">
                      {fmtCurrency(zakahDue)}
                    </div>
                  </div>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    Your net wealth exceeds the Nisaab threshold. May Allah bless your wealth, purify your provisions, and reward you abundantly.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenDonationModal('zakah', Math.round(zakahDue) || 50)}
                    className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-slate-950" />
                    <span>Pay Your Zakah ({fmtCurrency(zakahDue)})</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-500/20 text-slate-300 border border-slate-400/30 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Info className="w-3.5 h-3.5" /> Below Nisaab Threshold
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 uppercase tracking-wider block">
                      Suggested Voluntary Sadaqah
                    </span>
                    <div className="text-3xl font-mono font-bold text-amber-200 mt-1">
                      {fmtCurrency(zakahDue > 0 ? zakahDue : 25)}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your net wealth ({fmtCurrency(netWealth)}) does not meet the Nisaab requirement ({fmtCurrency(nisabThreshold)}). Zakah is not obligatory upon you, but voluntary Sadaqah brings profound barakah.
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenDonationModal('general', Math.round(zakahDue) || 25)}
                    className="w-full py-3.5 bg-teal-700 hover:bg-teal-600 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    <span>Give Voluntary Sadaqah</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Educational Tabs: What is Zakah? What is Nisaab? Why Dawat-e-Islami? */}
      <div className="bg-white dark:bg-[#172438] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 transition-colors">
        <div className="flex border-b border-slate-200 dark:border-slate-700 gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setEduTab('what')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all px-3 whitespace-nowrap ${
              eduTab === 'what'
                ? 'border-teal-700 dark:border-teal-400 text-teal-800 dark:text-teal-300'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            What is Zakah?
          </button>
          <button
            type="button"
            onClick={() => setEduTab('nisab')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all px-3 whitespace-nowrap ${
              eduTab === 'nisab'
                ? 'border-teal-700 dark:border-teal-400 text-teal-800 dark:text-teal-300'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Understanding Nisaab
          </button>
          <button
            type="button"
            onClick={() => setEduTab('why')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all px-3 whitespace-nowrap ${
              eduTab === 'why'
                ? 'border-teal-700 dark:border-teal-400 text-teal-800 dark:text-teal-300'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Why Give Through Dawat-e-Islami?
          </button>
        </div>

        {eduTab === 'what' && (
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed animate-fadeIn">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Understanding Zakah</h3>
            <p>
              Zakah is one of the five core pillars of Islam. It is a divine obligation upon every sane, adult Muslim whose wealth exceeds the minimum Nisaab threshold for one complete lunar year (Hawl).
            </p>
            <p>
              It purifies the wealth of the giver, suppresses greed, and ensures that resources are systematically distributed to widows, orphans, students of sacred knowledge, and the destitute as commanded in Surah At-Tawbah (verse 60).
            </p>
          </div>
        )}

        {eduTab === 'nisab' && (
          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed animate-fadeIn">
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Nisaab Threshold Principles</h3>
              <p className="mt-1">
                The Nisaab is the minimum qualifying amount of net wealth that obligates a Muslim to pay Zakah. It is defined according to two classical standards:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 space-y-2">
                <span className="font-bold text-amber-900 dark:text-amber-300 block text-base">Gold Standard (87.48 grams)</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Equivalent to 7.5 Tolas of Gold (1 Tola = 11.664 grams). Applied primarily when an individual possesses exclusively gold assets and no cash, silver, or trade merchandise.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block text-base">Silver Standard (612.36 grams) · Hanafi Preferred</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Equivalent to 52.5 Tolas of Silver. Classical scholars recommend calculating against silver when a person possesses mixed assets (cash, gold jewelry, stock), benefiting the poor by establishing a lower eligibility baseline.
                </p>
              </div>
            </div>
          </div>
        )}

        {eduTab === 'why' && (
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed animate-fadeIn">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">
              Why Entrust Your Zakah to Dawat-e-Islami?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-teal-900 dark:text-teal-300 text-sm block">1. 100% Sharī'ah Verified</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Strictly supervised by Muftis and scholars of Darul Ifta Ahlesunnat to ensure proper Tamleek (lawful transfer of ownership) to eligible recipients.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-teal-900 dark:text-teal-300 text-sm block">2. Supporting Sacred Knowledge</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Funding thousands of needy students studying the Quran, Hadith, and Islamic jurisprudence in Jamia tul Madina seminaries.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#142136] border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-teal-900 dark:text-teal-300 text-sm block">3. Humanitarian Relief (FGRF)</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Rapid food aid, clean water wells, emergency disaster response, and orphan care across 180+ countries.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
