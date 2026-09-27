import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function SpotlightCard({ children, className, delay }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.15, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
      whileHover={{ y: -8, scale: 1.02, borderColor: '#fb923c', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 10px 20px -5px rgba(0, 0, 0, 0.04)' }}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(249,115,22,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Protection() {
  const categories = [
    {
      icon: "health_and_safety",
      title: "Pure Term Life Cover",
      desc: "High sum assured (₹1 Cr to ₹5 Cr+) at affordable annual premiums. Secures your family's lifestyle and clears liabilities in your absence.",
      highlight: "10x - 20x Annual Income Cover"
    },
    {
      icon: "medical_services",
      title: "Comprehensive Health Insurance",
      desc: "Individual and Family Floater covers with zero room rent capping, restoration benefits, and cashless hospitalization across 10,000+ network hospitals.",
      highlight: "Zero Copay & Restore Benefits"
    },
    {
      icon: "monitor_heart",
      title: "Critical Illness Riders",
      desc: "Lump-sum payouts upon diagnosis of 36+ major critical illnesses (cardiac, stroke, cancer) to handle expensive treatments and income loss.",
      highlight: "Direct Lump-Sum Payout"
    },
    {
      icon: "directions_car",
      title: "Motor, Property & Commercial",
      desc: "Zero depreciation motor covers, factory/shop policies, transit insurance, and comprehensive residential fire & burglary protection.",
      highlight: "Complete Asset Protection"
    }
  ];

  return (
    <section id="protection" className="py-16 md:py-24 bg-orange-50/30 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-5 space-y-5"
          >
            <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Comprehensive Risk Mitigation</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight transition-colors duration-500">
              Protect What Matters Most: Comprehensive Family Shield
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed transition-colors duration-500">
              Wealth creation without risk mitigation is incomplete. Protect your health, life, and accumulated assets against unexpected emergencies before accelerating risk investments.
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 shadow-xs transition-colors duration-500">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-orange-600 dark:text-orange-500">verified</span>
                The Golden Insurance Rule:
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Separate insurance from investments. Pure risk protection (Term & Health) guarantees maximum coverage with minimal premium outflow, leaving surplus funds for high-growth compounding.
              </p>
            </div>
            <div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-orange-500/20 inline-flex items-center gap-2 transition-all cursor-pointer"
                href="#contact"
              >
                <span className="material-symbols-outlined text-[18px]">security</span>
                Get Tailored Insurance Quote
              </motion.a>
            </div>
          </motion.div>

          {/* Insurance Categories Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((item, index) => (
              <SpotlightCard
                key={index}
                delay={index * 0.15}
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-700 hover:border-orange-400/50 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/5 transition-all group"
              >
                <div>
                  <div className="relative w-12 h-12 rounded-2xl bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 shadow-sm transition-transform group-hover:scale-110 z-10">
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <div className="absolute inset-0 bg-orange-100 dark:bg-slate-700 blur-md opacity-50 -z-10 rounded-2xl"></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="inline-block mt-3 text-xs text-orange-700 dark:text-orange-400 font-bold">{item.highlight}</span>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
