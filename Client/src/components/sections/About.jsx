import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function About() {
  const pillars = [
    {
      icon: "flag",
      title: "Understanding Life Milestones",
      desc: "Mapping exact timeframes and financial numbers for child higher education, dream homes, and peaceful retirement."
    },
    {
      icon: "speed",
      title: "Risk Appetite Profiling",
      desc: "Conducting psychometric and capacity checks so portfolio volatility never disrupts your sleep during market dips."
    },
    {
      icon: "pie_chart",
      title: "Disciplined Asset Allocation",
      desc: "Balancing equity, debt, gold, and fixed-income assets to maximize upside while buffering systemic market drawdowns."
    },
    {
      icon: "sync",
      title: "Periodic Rebalancing",
      desc: "Disciplined semi-annual portfolio reviews to systematically book profits from overheated asset classes."
    },
    {
      icon: "account_balance_wallet",
      title: "Tax-Efficient Withdrawals & Legacy Planning",
      desc: "Structuring redemptions, SWPs, and nominations to minimize long-term capital gains tax while preserving seamless intergenerational transfer.",
      fullWidth: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fcfbf9] dark:bg-slate-900 transition-colors duration-500" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Advisor Persona Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-xl relative ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-500">
              <div className="relative mb-6 rounded-2xl overflow-hidden border-2 border-orange-500/20 shadow-xl ring-1 ring-black/5 dark:ring-white/5 bg-slate-100 dark:bg-slate-700">
                <img
                  alt="Sachin Gupta - AMFI Registered Mutual Fund Distributor"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp1BoADkx9urC_G7X2kVYiTHim8d7BA-RiNVVzQrPf8lESM3dUcJN7Y19TME2fPfdRhonEOKjXYr-4Z7cy7OAHILOx6Llak2MUKxfqVMtirNmIqvjj3n9gdLZF9P73P3rE_7dsXxR0eyBlaS2CiM_bvaSB7MK3JrhvGOJHCLgXBJpjOJvbIK1xYTFkQ7OlKLqBXw-3CCGrlEiP1rFvHL6W3kLlQTeS0pMDD0W3r0rMy6A2IWE--xU6"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-amber-400">verified</span>
                    <span className="text-[11px] font-bold tracking-wide text-slate-100">AMFI Reg.&nbsp;&nbsp;ARN-136748</span>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20"><AnimatedCounter to={8} duration={2} />+ Yrs Exp.</span>
                </div>
              </div>

              <div className="inline-block px-3 py-1 bg-orange-50 dark:bg-slate-700 border border-orange-200 dark:border-slate-600 text-orange-800 dark:text-orange-400 text-xs font-bold rounded-full mb-3 transition-colors duration-500">
                Investment & Insurance Advisor
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">Sachin Gupta</h2>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-500">
                AMFI Regd.MFD (ARN-136748)
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-colors duration-500">
                {[
                  { icon: 'handshake', text: 'Fiduciary commitment with zero conflict of interest' },
                  { icon: 'hearing', text: 'Active listener focused on your specific life horizon' },
                  { icon: 'block', text: 'No aggressive selling or lock-in product pushes' },
                  { icon: 'receipt_long', text: 'Complete transparent SEBI-compliant commission disclosure' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-orange-600">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between transition-colors duration-500">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block uppercase font-medium transition-colors duration-500">Direct Advisor Helpline</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white transition-colors duration-500">+91 9936411411</span>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  href="#contact"
                >
                  Schedule Call
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Philosophy & 5 Strategic Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15, margin: "-50px" }}
              transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            >
              <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Fiduciary Philosophy</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight transition-colors duration-500">
                Your Dedicated Partner in Building Generational Wealth
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed text-sm sm:text-base transition-colors duration-500">
                True wealth advisory is not about predicting the next 30 days of the stock market. It is about constructing an unwavering, shock-proof financial fortress tailored to your family's future, ensuring that your capital works consistently for you across all economic cycles.
              </p>
            </motion.div>

            {/* 5 Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.15, margin: "-50px" }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02, borderColor: '#fb923c', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  className={`p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-orange-400 dark:hover:border-orange-500/50 transition-colors duration-500 ${pillar.fullWidth ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-2 text-orange-600 dark:text-orange-500 font-bold text-sm transition-colors duration-500">
                    <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
                    <h3 className="text-slate-900 dark:text-white transition-colors duration-500">{pillar.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed transition-colors duration-500">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
