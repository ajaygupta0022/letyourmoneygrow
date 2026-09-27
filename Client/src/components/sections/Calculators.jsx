import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Calculators() {
  const [mode, setMode] = useState('SIP'); // 'SIP' or 'LUMPSUM'
  
  // Shared states
  const [amount, setAmount] = useState(15000); // Monthly SIP or One-time Lumpsum
  const [returnRate, setReturnRate] = useState(12);
  const [timeHorizon, setTimeHorizon] = useState(15);
  
  // Results
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedGain, setEstimatedGain] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [invPct, setInvPct] = useState(0);
  const [gainPct, setGainPct] = useState(0);

  // Math logic
  useEffect(() => {
    let fv = 0;
    let invested = 0;

    if (mode === 'SIP') {
      const P = amount;
      const i = (returnRate / 100) / 12; // monthly rate
      const n = timeHorizon * 12; // total months
      
      // Prevent divide by zero if rate is 0
      if (i === 0) {
        fv = P * n;
      } else {
        fv = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      }
      invested = P * n;
    } else {
      // Lumpsum
      const P = amount;
      const r = returnRate / 100;
      const n = timeHorizon;
      
      fv = P * Math.pow(1 + r, n);
      invested = P;
    }

    const gain = fv - invested;

    setTotalInvested(invested);
    setFutureValue(fv);
    setEstimatedGain(gain);

    if (fv > 0) {
      const calculatedInvPct = Math.max(1, Math.round((invested / fv) * 100));
      setInvPct(calculatedInvPct);
      setGainPct(100 - calculatedInvPct);
    } else {
      setInvPct(0);
      setGainPct(0);
    }
  }, [amount, returnRate, timeHorizon, mode]);

  // SVG Chart settings
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const invStrokeOffset = circumference - (invPct / 100) * circumference;
  
  const formatCurrency = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    // Set sensible defaults when switching
    if (newMode === 'SIP') {
      setAmount(15000);
    } else {
      setAmount(1000000); // 10 Lakhs default for lumpsum
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 overflow-hidden transition-colors duration-500" 
      id="calculators"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-orange-600 uppercase font-bold tracking-widest">Interactive Dashboard</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight transition-colors duration-500">
            Wealth Projection Engine
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-3 font-medium transition-colors duration-500">
            Plan your financial future with institutional-grade precision. Adjust the variables below to simulate your compounding growth.
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-2 sm:p-3 md:p-4 max-w-5xl mx-auto ring-1 ring-slate-900/5 dark:ring-slate-100/5 transition-colors duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 rounded-2xl overflow-hidden">
            
            {/* Calculator Controls (Left) */}
            <div className="lg:col-span-7 p-3 sm:p-4 md:p-8 space-y-4 sm:space-y-5 md:space-y-8">
              
              {/* Mode Tabs */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700 transition-colors duration-500">
                <button 
                  onClick={() => handleModeSwitch('SIP')}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${mode === 'SIP' ? 'bg-white dark:bg-slate-700 text-orange-600 shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
                >
                  SIP Calculator
                </button>
                <button 
                  onClick={() => handleModeSwitch('LUMPSUM')}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${mode === 'LUMPSUM' ? 'bg-white dark:bg-slate-700 text-orange-600 shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
                >
                  Lumpsum Calculator
                </button>
              </div>
              
              {/* Amount Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-center transition-colors duration-500">
                  <label className="text-sm text-slate-700 dark:text-slate-300 font-semibold">{mode === 'SIP' ? 'Monthly Investment' : 'Total Investment'}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-bold">₹</span>
                    <input 
                      type="number"
                      className="w-32 pl-7 pr-3 py-1.5 text-right font-bold text-slate-900 dark:text-white bg-orange-50/50 dark:bg-slate-800 border border-orange-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow outline-none"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
                <input 
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 transition-colors duration-500" 
                  max={mode === 'SIP' ? 500000 : 50000000} 
                  min={mode === 'SIP' ? 500 : 5000} 
                  step={mode === 'SIP' ? 500 : 5000} 
                  type="range" 
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))} 
                />
              </div>
              
              {/* Return Rate Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-center transition-colors duration-500">
                  <label className="text-sm text-slate-700 dark:text-slate-300 font-semibold">Expected Return Rate (p.a)</label>
                  <div className="relative">
                    <input 
                      type="number"
                      className="w-24 px-3 py-1.5 text-right font-bold text-slate-900 dark:text-white bg-orange-50/50 dark:bg-slate-800 border border-orange-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow outline-none"
                      value={returnRate}
                      onChange={(e) => setReturnRate(Number(e.target.value))}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold">%</span>
                  </div>
                </div>
                <input 
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 transition-colors duration-500" 
                  max="30" min="1" step="0.5" type="range" 
                  value={returnRate} 
                  onChange={(e) => setReturnRate(Number(e.target.value))} 
                />
              </div>
              
              {/* Time Horizon Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-center transition-colors duration-500">
                  <label className="text-sm text-slate-700 dark:text-slate-300 font-semibold">Time Period</label>
                  <div className="relative">
                    <input 
                      type="number"
                      className="w-28 pl-3 pr-8 py-1.5 text-right font-bold text-slate-900 dark:text-white bg-orange-50/50 dark:bg-slate-800 border border-orange-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow outline-none"
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(Number(e.target.value))}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 font-semibold text-xs">Yr</span>
                  </div>
                </div>
                <input 
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 transition-colors duration-500" 
                  max="40" min="1" step="1" type="range" 
                  value={timeHorizon} 
                  onChange={(e) => setTimeHorizon(Number(e.target.value))} 
                />
              </div>
            </div>
            
            {/* Visual Output Card (Right) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5 md:p-8 rounded-2xl text-white relative overflow-hidden flex flex-col justify-between">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">Future Value Projection</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
                  ₹<AnimatedCounter to={futureValue} duration={1} />
                </h3>
              </div>
              
              {/* Animated Donut Chart */}
              <div className="relative flex justify-center py-5 sm:py-8 z-10">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                    {/* Background Circle (Gain) */}
                    <circle 
                      cx="70" cy="70" r={radius} 
                      fill="transparent" 
                      stroke="#f97316" // orange-500
                      strokeWidth="16" 
                      className="opacity-90"
                    />
                    {/* Foreground Circle (Invested) */}
                    <motion.circle 
                      cx="70" cy="70" r={radius} 
                      fill="transparent" 
                      stroke="#334155" // slate-700
                      strokeWidth="16" 
                      strokeDasharray={circumference}
                      animate={{ strokeDashoffset: invStrokeOffset }}
                      transition={{ type: 'spring', stiffness: 40, damping: 15 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs text-slate-400 font-medium">Return</span>
                    <span className="text-lg font-bold text-orange-400"><AnimatedCounter to={gainPct} duration={1} />%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-700 inline-block"></span>
                    Invested Amount
                  </span>
                  <span className="font-bold text-white">
                    ₹<AnimatedCounter to={totalInvested} duration={1} />
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
                    Est. Wealth Gain
                  </span>
                  <span className="font-bold text-orange-400">
                    ₹<AnimatedCounter to={estimatedGain} duration={1} />
                  </span>
                </div>
                
                <div className="pt-4 mt-2">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white text-center block rounded-xl font-bold text-sm shadow-[0_8px_20px_rgb(249,115,22,0.2)] transition-all" 
                    href="#contact"
                  >
                    Start Investing Now
                  </motion.a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
}
