import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15, mass: 1 }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pb-20 md:pt-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500" id="home">
      {/* Advanced Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-white to-transparent dark:from-orange-900/20 dark:via-slate-950 dark:to-transparent opacity-80 pointer-events-none transition-colors duration-500"></div>
      <motion.div style={{ y: bgY }} variants={floatVariants} animate="animate" className="hidden md:block absolute -top-32 right-1/4 w-[500px] h-[500px] bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-[80px] pointer-events-none transition-colors duration-500"></motion.div>
      <motion.div style={{ y: bgY, animationDelay: '2s' }} variants={floatVariants} animate="animate" className="hidden md:block absolute top-1/3 -left-32 w-[400px] h-[400px] bg-amber-300/15 rounded-full blur-[80px] pointer-events-none"></motion.div>



      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Hero Copy */}
          <motion.div
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? textY : 0 }}
            className="hero-copy lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-300 text-xs font-semibold shadow-xs transition-colors duration-500">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              SEBI & AMFI Registered Mutual Fund Distribution & Advisory
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-tight transition-colors duration-500">
              Let Your Money Grow With <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ea580c,45%,#f59e0b,55%,#ea580c)] bg-[length:200%_100%] animate-shimmer">Smart Financial Planning</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-200 tracking-tight transition-colors duration-500">
              Tailored Investment & Insurance Architectures Designed Strictly Around Your Long-Term Goals
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base max-w-2xl font-medium transition-colors duration-500">
              From Systematic Investment Plans (SIPs) and Diversified Mutual Funds to Term Life, Comprehensive Health, Bonds, and NPS — experience personalized, conflict-free wealth navigation backed by institutional research.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-6 py-3.5 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 text-white font-bold text-sm shadow-[0_8px_20px_rgb(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgb(249,115,22,0.4)] shadow-inner border border-orange-500 transition-all duration-200 flex items-center justify-center gap-2"
                href="#calculators"
              >
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                Start Your Investment Journey
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-md font-bold text-sm transition-all duration-200"
                href="#contact"
              >
                Talk to Sachin Gupta
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-4 py-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-800/50 font-semibold text-sm transition-all flex items-center justify-center gap-2 duration-500"
                href="https://wa.me/919936411411?text=Hello%20Sachin%20Ji,%20I%20would%20like%20to%20discuss%20smart%20investment%20planning."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px] text-emerald-600 dark:text-emerald-400">chat</span>
                WhatsApp Advisory
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-200 text-slate-600 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-orange-600 text-[18px]">check_circle</span>
                Zero Upfront Advisory Fee
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-orange-600 text-[18px]">check_circle</span>
                100% Paperless Onboarding
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-orange-600 text-[18px]">check_circle</span>
                Bank-Grade 256-bit Security
              </div>
            </motion.div>
          </motion.div>

          {/* Right Live Wealth Projection Visual Preview */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <div className="bg-white/60 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/40 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 transition-colors duration-500">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200/50 dark:border-slate-800/80">
                <div>
                  <span className="text-[11px] text-orange-600 dark:text-orange-500 uppercase font-bold tracking-widest transition-colors duration-500">Live Wealth Projection</span>
                  <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5 transition-colors duration-500"><AnimatedCounter to={15} duration={2} />-Year Systematic Growth</h2>
                </div>
                <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-400 text-[11px] rounded-full font-bold transition-colors duration-500">
                  <AnimatedCounter to={12} duration={2} />% CAGR Assumed
                </span>
              </div>

              {/* Visual Bar / Graph representation */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-medium transition-colors duration-500">
                  <span>Monthly SIP: ₹<AnimatedCounter to={10000} duration={2.5} /></span>
                  <span>Horizon: <AnimatedCounter to={15} duration={2} /> Years</span>
                </div>

                {/* Compounding Progress Visual */}
                <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex ring-1 ring-slate-200/50 dark:ring-slate-700/50 transition-colors duration-500">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "33.1%" }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="bg-slate-900 dark:bg-slate-600 h-full"
                  ></motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "66.9%" }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 h-full"
                  ></motion.div>
                </div>

                <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 transition-colors duration-500">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-slate-900 dark:bg-slate-600 rounded-xs inline-block"></span> Invested: ₹<AnimatedCounter to={1800000} duration={2.5} /></span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-orange-500 rounded-xs inline-block"></span> Wealth Gain: ₹<AnimatedCounter to={3632000} duration={2.5} /></span>
                </div>
              </div>

              {/* Metric Box Matrix */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-slate-50 dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700 transition-colors duration-500">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block uppercase font-medium transition-colors duration-500">Invested Capital</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white block mt-0.5 transition-colors duration-500">
                    ₹<AnimatedCounter to={1800000} duration={2.5} />
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-500"><AnimatedCounter to={33.1} decimals={1} duration={2.5} />% of portfolio</span>
                </div>
                <div className="bg-orange-50/70 dark:bg-orange-950/40 p-3.5 rounded-xl border border-orange-200/70 dark:border-orange-900/50 transition-colors duration-500">
                  <span className="text-[11px] text-orange-800 dark:text-orange-400 block font-semibold uppercase transition-colors duration-500">Estimated Wealth</span>
                  <span className="text-lg font-extrabold text-orange-600 dark:text-orange-500 block mt-0.5 transition-colors duration-500">
                    ₹<AnimatedCounter to={5432000} duration={3} />
                  </span>
                  <span className="text-[11px] text-orange-700 dark:text-orange-400 font-bold transition-colors duration-500">+<AnimatedCounter to={201} duration={2.5} />% Net Capital Growth</span>
                </div>
              </div>

              {/* Key Metric highlight pill */}
              <div className="mt-4 p-3 bg-amber-50/60 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-700/30 rounded-xl flex items-center justify-between text-xs transition-colors duration-500">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-500 text-[18px]">trending_up</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold transition-colors duration-500">Compounding Multiplier:</span>
                </div>
                <span className="text-orange-600 dark:text-orange-400 font-extrabold text-sm transition-colors duration-500"><AnimatedCounter to={3.01} decimals={2} duration={2.5} />x Total Return</span>
              </div>

              <div className="mt-5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-xl text-center block font-bold transition-colors text-xs"
                  href="#calculators"
                >
                  Customize Your Own Wealth Projection
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Smooth Marquee - Temporarily Disabled */}
      {/* 
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-white/40 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-200 dark:border-slate-800/80 py-3 flex z-20 transition-colors duration-500">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <div className="flex gap-12 pr-12 items-center text-slate-600 dark:text-slate-400 font-bold text-xs tracking-wider uppercase transition-colors duration-500">
            <span>Prudent Corporate Advisory</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Fundzbazar</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>AMFI Registered</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Mutual Funds</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Life Insurance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>SIP Execution</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          </div>
          <div className="flex gap-12 pr-12 items-center text-slate-600 dark:text-slate-400 font-bold text-xs tracking-wider uppercase transition-colors duration-500">
            <span>Prudent Corporate Advisory</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Fundzbazar</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>AMFI Registered</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Mutual Funds</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>Life Insurance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>SIP Execution</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          </div>
        </motion.div>
      </div>
      */}
    </section>
  );
}
