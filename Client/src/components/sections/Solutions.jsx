import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function SpotlightCard({ children, className, delay, id }) {
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
      id={id}
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

export default function Solutions({ setSelectedService }) {
  const solutions = [
    {
      id: "sip",
      icon: "trending_up",
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      tagText: "Most Popular",
      tagBg: "bg-orange-100",
      tagColor: "text-orange-800",
      title: "Systematic Investment Plans (SIP)",
      desc: "Harness rupee cost averaging and the exponential magic of compounding starting from as little as ₹500/month.",
      footerText: "Equity & Hybrid",
      footerColor: "text-orange-600"
    },
    {
      id: "lumpsum",
      icon: "savings",
      iconBg: "bg-slate-900",
      iconColor: "text-amber-400",
      tagText: "Capital Allocation",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "Lump Sum Mutual Funds",
      desc: "Strategic lump-sum capital deployment through systematic transfer plans (STP) during market dips to optimize entry points.",
      footerText: "Multi-Cap & Flexi-Cap",
      footerColor: "text-slate-800"
    },
    {
      icon: "show_chart",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Wealth Creation",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "Equity & Shares Portfolio",
      desc: "Long-term wealth creation via curated high-conviction themes, direct equities, and passive index fund architectures.",
      footerText: "Thematic & Sectoral",
      footerColor: "text-slate-800"
    },
    {
      id: "fd",
      icon: "lock",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Guaranteed Yield",
      tagBg: "bg-amber-50 border border-amber-200",
      tagColor: "text-amber-800",
      title: "Corporate Fixed Deposits (FDs)",
      desc: "AAA & AA+ rated corporate deposits and SFBs offering significantly higher returns than standard commercial bank savings.",
      footerText: "Up to 8.5%+ p.a.",
      footerColor: "text-orange-600"
    },
    {
      icon: "account_balance",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Predictable Flow",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "Sovereign & Corporate Bonds",
      desc: "Higher yield debt instruments, RBI floating rate bonds, and 54EC capital gain exemption bonds for steady passive income.",
      footerText: "Fixed Coupon Returns",
      footerColor: "text-slate-800"
    },
    {
      id: "nps",
      icon: "elderly",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Retirement",
      tagBg: "bg-orange-50 border border-orange-200",
      tagColor: "text-orange-800",
      title: "National Pension System (NPS)",
      desc: "Government backed Tier-1 & Tier-2 retirement accounts with exclusive extra ₹50,000 tax deduction under Section 80CCD(1B).",
      footerText: "Tax Saver 80CCD",
      footerColor: "text-orange-600"
    },
    {
      icon: "sync_alt",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Alternative",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "P2P Lending Solutions",
      desc: "RBI regulated peer-to-peer non-market linked debt instruments designed for yield diversification with monthly payout schedules.",
      footerText: "Non-Market Linked",
      footerColor: "text-slate-800"
    },
    {
      icon: "credit_score",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Instant Liquidity",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "Loan Against Securities (LAS)",
      desc: "Unlock quick liquidity for urgent financial needs without breaking your mutual funds or selling valuable equities.",
      footerText: "Keep Compounding Active",
      footerColor: "text-orange-600"
    },
    {
      id: "insurance",
      icon: "shield",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Hybrid Security",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "Unit Linked Investment Plans (ULIP)",
      desc: "Dual advantage of life cover combined with market participation and tax-exempt maturity under Section 10(10D) parameters.",
      footerText: "Protection + Growth",
      footerColor: "text-slate-800"
    },
    {
      icon: "real_estate_agent",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagText: "Real Estate",
      tagBg: "bg-slate-100",
      tagColor: "text-slate-700",
      title: "Real Estate Investment Trusts",
      desc: "Invest in high-grade commercial real estate and earn rental yields plus capital appreciation without owning physical property.",
      footerText: "Fractional Ownership",
      footerColor: "text-slate-800"
    }
  ];

  const amcs = [
    "SBI Mutual Fund", "HDFC Mutual Fund", "ICICI Prudential", "Nippon India", "Kotak Mutual Fund", "Axis Mutual Fund", "UTI Mutual Fund", "Tata Mutual Fund", "Mirae Asset", "DSP Mutual Fund"
  ];

  return (
    <section className="py-16 md:py-24 bg-orange-50/30 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500" id="solutions">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
          >
            <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Comprehensive Product Basket</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 transition-colors duration-500">
              Investment Solutions Portfolio
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mt-2 transition-colors duration-500">
              Institutional-grade access across premier financial instruments tailored to individual risk appetites and capital horizons.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700"
            href="#contact"
          >
            Request Complete Solution Brochure
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </motion.a>
        </div>

        {/* 10 Product Solutions Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {solutions.map((sol, index) => (
            <SpotlightCard
              key={index}
              id={sol.id}
              delay={(index % 3) * 0.15}
              className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200/60 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all group ring-1 ring-slate-900/5 dark:ring-slate-100/5 shadow-sm hover:ring-orange-500/20"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className={`relative w-12 h-12 rounded-2xl ${sol.iconBg} ${sol.iconColor} flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 z-10`}>
                    <span className="material-symbols-outlined">{sol.icon}</span>
                    <div className={`absolute inset-0 blur-md opacity-40 -z-10 rounded-2xl ${sol.iconBg}`}></div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${sol.tagBg} ${sol.tagColor} border border-black/5`}>{sol.tagText}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">{sol.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed transition-colors duration-500">
                  {sol.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between transition-colors duration-500">
                <span className={`text-[11px] font-bold uppercase ${sol.footerColor}`}>{sol.footerText}</span>
                <a 
                  className="text-xs text-slate-900 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 font-bold inline-flex items-center gap-1 transition-colors" 
                  href="#contact"
                  onClick={() => setSelectedService && setSelectedService(sol.title)}
                >
                  Enquire Now <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </SpotlightCard>
          ))}

          {/* Solution 10: Multi-AMC Mutual Fund Selection */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            whileHover={{ y: -8, scale: 1.01, boxShadow: '0 30px 60px -15px rgba(249, 115, 22, 0.15)' }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-orange-200/70 dark:border-orange-500/30 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 hover:shadow-xl transition-all flex flex-col justify-between md:col-span-2 lg:col-span-3 ring-1 ring-orange-500/10 dark:ring-orange-500/20"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full text-xs font-bold shadow-xs">
                  Complete Market Coverage
                </span>
                <span className="text-xs text-slate-500 font-medium">Fundzbazar One-Click Execution</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-500">Multi-AMC Mutual Fund Architecture</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-4xl leading-relaxed transition-colors duration-500">
                Access 40+ leading Indian Asset Management Companies. Unbiased selection based solely on rolling returns, standard deviation, alpha generation, and fund manager pedigree — zero company bias.
              </p>
              {/* AMC Pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {amcs.map((amc, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-2xs hover:border-orange-300 transition-colors cursor-default">
                    {amc}
                  </span>
                ))}
                <span className="px-3 py-1 bg-orange-100 border border-orange-300 rounded-lg text-xs font-bold text-orange-800">+ 30 More AMCs</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-semibold">Digital KYC in 5 Minutes | Zero Physical Paperwork</span>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
                href="#contact"
                onClick={() => setSelectedService && setSelectedService("Multi-AMC Mutual Fund Architecture")}
              >
                Request AMC Recommendation
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
