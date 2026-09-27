import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

export default function Knowledge() {
  const categories = [
    {
      title: "SIP vs Lump Sum",
      tag: "Strategy",
      tagColor: "text-orange-800 bg-orange-100",
      desc: "SIP averages volatility across bull and bear markets with monthly discipline. Lump sum is optimal when substantial cash reserves are available and equities trade at reasonable valuation multiples.",
      idealFor: "Regular monthly salary earners & entrepreneurs"
    },
    {
      title: "Large, Mid & Small Cap",
      tag: "Equity",
      tagColor: "text-slate-800 bg-slate-200",
      desc: "Large Caps (Top 100 firms) provide core stability. Mid Caps (101-250) capture emerging sector winners. Small Caps offer aggressive alpha over 7+ year horizons.",
      idealFor: "5 to 15+ years long-term compounding goals"
    },
    {
      title: "Balanced Advantage (BAF)",
      tag: "Hybrid",
      tagColor: "text-amber-900 bg-amber-100",
      desc: "Dynamic asset allocation funds that automatically increase equity exposure during market corrections and shift into debt instruments when market valuations run expensive.",
      idealFor: "First-time equity investors seeking calm ride"
    },
    {
      title: "ELSS Tax Saving Funds",
      tag: "Tax Saver",
      tagColor: "text-orange-800 bg-orange-100",
      desc: "Equity Linked Savings Schemes carry the shortest lock-in period (3 years) among all Section 80C options (compared to PPF 15 years), with superior long-term inflation-beating equity potential.",
      idealFor: "Tax deduction up to ₹1.5 Lakhs under Sec 80C"
    },
    {
      title: "Liquid & Arbitrage Funds",
      tag: "Capital Safety",
      tagColor: "text-slate-800 bg-slate-200",
      desc: "High liquidity with negligible interest rate risk. Perfect for parking emergency funds or storing capital earmarked for systematic transfer plans (STP) into equity schemes.",
      idealFor: "Emergency reserves & short-term parking"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-500" id="knowledge">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Knowledge Center</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 transition-colors duration-500">
            Invest Systematically. Build Wealth Gradually.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base transition-colors duration-500">
            Demystifying financial instruments so you can invest with clarity, conviction, and emotional discipline.
          </p>
        </motion.div>

        {/* Comparative Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <SpotlightCard key={index} spotColor="rgba(249,115,22,0.1)">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-between hover:border-orange-300 dark:hover:border-orange-600 transition-all cursor-pointer relative z-10"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-slate-900 dark:text-white text-base transition-colors duration-500">{cat.title}</span>
                    <span className={`px-2 py-0.5 text-[11px] font-bold rounded ${cat.tagColor}`}>{cat.tag}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-orange-700 dark:text-orange-400 font-semibold transition-colors duration-500">
                  Ideal For: {cat.idealFor}
                </div>
              </motion.div>
            </SpotlightCard>
          ))}

          {/* Knowledge Action Card in Sleek Slate/Orange */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
            className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg border border-slate-800"
          >
            <div>
              <span className="text-[11px] text-amber-400 uppercase font-bold tracking-wider">Execution Gateway</span>
              <h3 className="text-lg font-bold text-white mt-1">Start Digital SIP via Fundzbazar</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Setup instant NACH mandate, automate investments across top AMCs, and track your net worth in real-time.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2.5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-center py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-xs hover:from-orange-600 hover:to-amber-700 transition-all shadow-md shadow-orange-500/20"
                href="#contact"
              >
                Start SIP via Fundzbazar
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-center py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold text-xs transition-colors border border-slate-700"
                href="#calculators"
              >
                Calculate SIP Return
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
