import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { scrollToSection } from '../../sectionNavigation';

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const pendingMobileSection = useRef(null);
  const navigationFrame = useRef(null);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 960px)');
    const closeMenu = () => setIsMobileMenuOpen(false);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    desktop.addEventListener('change', closeMenu);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      desktop.removeEventListener('change', closeMenu);
      window.removeEventListener('keydown', onKeyDown);
      cancelAnimationFrame(navigationFrame.current);
    };
  }, []);
  const { scrollYProgress } = useScroll();

  const progressColor = useTransform(scrollYProgress, [0, 1], ['#f97316', '#fbbf24']); // orange-500 to amber-400
  const glowShadow = useMotionTemplate`0 0 10px ${progressColor}, 0 0 20px ${progressColor}`;

  const handleMobileNavigation = (event, sectionId) => {
    event.preventDefault();
    pendingMobileSection.current = sectionId;
    setIsMobileMenuOpen(false);
  };

  const finishMobileNavigation = () => {
    if (!pendingMobileSection.current) return;

    // Wait for the drawer's removal to commit before measuring the page.
    navigationFrame.current = requestAnimationFrame(() => {
      const sectionId = pendingMobileSection.current;
      pendingMobileSection.current = null;
      scrollToSection(sectionId);
    });
  };

  return (
    <>
      {/* Scroll Progress Reading Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
        style={{
          scaleX: scrollYProgress,
          backgroundColor: progressColor,
          boxShadow: glowShadow
        }}
      />
      {/* 1. TOP UTILITY TRUST BAR */}
      <div className="bg-slate-950 text-slate-200 border-b border-slate-800 py-1.5 px-4 md:px-8 text-xs relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left trust tokens */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 font-semibold text-[10px] md:text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded shrink-0">
              <span className="material-symbols-outlined text-[13px] text-amber-400">verified</span>
              ARN-136748
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline text-slate-300 truncate">Partnered with <strong className="text-white">Prudent Corporate Advisory</strong></span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:inline text-slate-300">via <strong className="text-orange-400">Fundzbazar</strong></span>
          </div>
          {/* Right direct contact items */}
          <div className="flex items-center gap-3 font-medium shrink-0">
            <a className="hidden sm:flex items-center gap-1 hover:text-orange-400 transition-colors text-slate-200 text-[11px]" href="tel:+919936411411">
              <span className="material-symbols-outlined text-[14px] text-orange-400">call</span>
              +91 9936411411
            </a>
            <a className="flex items-center gap-1 hover:text-orange-400 transition-colors text-slate-200 text-[11px]" href="mailto:leturmoneygrow@gmail.com">
              <span className="material-symbols-outlined text-[14px] text-orange-400">mail</span>
              <span className="hidden xs:inline">leturmoneygrow@gmail.com</span>
              <span className="xs:hidden">Email</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400 text-[11px]">
              <span className="material-symbols-outlined text-[13px] text-slate-400">schedule</span>
              Mon-Sat 9AM - 7PM
            </span>
          </div>
        </div>
      </div>

      {/* SHARED COMPONENT: TopNavBar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="bg-white/70 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs docked full-width top-0 sticky z-40 transition-colors duration-500"
      >
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto">
          {/* Logo Anchor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-start items-center"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 active:scale-95 transition-transform duration-150 shrink-0 cursor-pointer"
              href="/"
              onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
            >
              <img alt="LET YOUR MONEY GROW Official Brand Logo" className="h-11 sm:h-14 md:h-16 w-auto object-contain" loading="eager" fetchPriority="high" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2TZiRSHgQ-1tTGxXDer14uErXqYAVxL4suPqeBk_GTDBUbS9GhaUuyQTBKqL4K5OFJUz7c3eHU1LYwka4x2kCEWXjK6Cw5m0uG4Zumv3z3TFIOyOPjmJP60llb5qWRbc8v_xdZTaJP02NQD7CILwoLPgxy8QVoznUpidOnno4kE8KZFNllMiG4PzBqRSnUk6POM1ZQkYtMIcOKY9ZGiBBn8FwATRbmQS9mebJaS6DOYypHIHxzsNBaiflxKPmrmS_A" />
            </motion.a>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" onMouseLeave={() => setHoveredNav(null)}>
            {[
              { name: 'Investment solutions', id: 'solutions' },
              { name: 'Insurance', id: 'protection' },
              { name: 'Goals planning', id: 'roadmap' },
              { name: 'Health Check', id: 'healthcheck' },
              { name: 'About', id: 'about' },
              { name: 'Wealth Planner', id: 'calculators' }
            ].map((item, index) => (
              <div key={index} className="overflow-hidden py-1">
                <motion.a
                  onMouseEnter={() => setHoveredNav(index)}
                  initial={{ y: "150%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[13px] xl:text-sm tracking-tight font-medium transition-colors relative group text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 flex flex-col"
                  href={`#${item.id}`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Sliding Underline Effect (Vercel Style) */}
                  {hoveredNav === index ? (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 -bottom-1 h-[2px] bg-orange-500 w-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  ) : null}
                </motion.a>
              </div>
            ))}
          </nav>

          {/* Trailing CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="hidden lg:flex items-center gap-3 justify-end"
          >
            <MagneticButton>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0px 0px 0px rgba(249,115,22,0)", "0px 0px 15px rgba(249,115,22,0.5)", "0px 0px 0px rgba(249,115,22,0)"] }}
                transition={{ boxShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } }}
                className="relative overflow-hidden px-5 py-2.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md hover:from-orange-600 hover:to-amber-700 transition-all flex items-center gap-1.5 group"
                href="#contact"
              >
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                  animate={{ x: ["-100%", "200%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10">trending_up</span>
                <span className="relative z-10">Start SIP</span>
              </motion.a>
            </MagneticButton>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              aria-label="Toggle Dark Mode"
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <a aria-label="Call Advisor" className="p-2 text-white bg-orange-600 rounded-lg shadow-sm flex items-center justify-center" href="tel:+919936411411">
              <span className="material-symbols-outlined">phone</span>
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation (Animated) */}
        <AnimatePresence onExitComplete={finishMobileNavigation}>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg transition-colors duration-500"
            >
              <div className="px-5 py-4 space-y-3">
                {[
                  { name: 'Investment solutions', id: 'solutions' },
                  { name: 'Insurance', id: 'protection' },
                  { name: 'Goals planning', id: 'roadmap' },
                  { name: 'Health Check', id: 'healthcheck' },
                  { name: 'About', id: 'about' },
                  { name: 'Wealth Planner', id: 'calculators' }
                ].map((item, index) => (
                  <a
                    key={index}
                    className={`block py-1.5 ${index === 0 ? 'text-orange-600 font-semibold' : 'text-slate-700 dark:text-slate-300 font-medium'}`}
                    href={`#${item.id}`}
                    onClick={(event) => handleMobileNavigation(event, item.id)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2 transition-colors duration-500">
                  <a className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold text-xs shadow-md" href="#contact" onClick={(event) => handleMobileNavigation(event, 'contact')}>Start SIP</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
