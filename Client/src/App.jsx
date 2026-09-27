import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Credibility from './components/sections/Credibility';
import About from './components/sections/About';
import Solutions from './components/sections/Solutions';
import Knowledge from './components/sections/Knowledge';
import Protection from './components/sections/Protection';
import Roadmap from './components/sections/Roadmap';
import Calculators from './components/sections/Calculators';
import HealthCheck from './components/sections/HealthCheck';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { scrollToSection } from './sectionNavigation';

function App() {
  const { scrollYProgress } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const navigate = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      if (scrollToSection(link.getAttribute('href').slice(1))) event.preventDefault();
    };
    document.addEventListener('click', navigate);
    return () => document.removeEventListener('click', navigate);
  }, []);

  useEffect(() => {
    // Check local storage or system preference on load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // Touch devices use native scrolling; avoid an idle animation loop there.
    const smoothScroll = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let lenis;
    const updateScrolling = () => {
      lenis?.destroy();
      lenis = undefined;
      if (!smoothScroll.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.1,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchMultiplier: 2,
        wheelMultiplier: 1,
        infinite: false,
      });
    };
    updateScrolling();
    smoothScroll.addEventListener('change', updateScrolling);

    return () => {
      smoothScroll.removeEventListener('change', updateScrolling);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-[9999]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none', transform: 'none' } }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen transition-colors duration-500 bg-background dark:bg-slate-950 text-slate-900 dark:text-slate-100"
      >
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <Credibility />
          <About />
          <Solutions setSelectedService={setSelectedService} />
          <Knowledge />
          <Protection />
          <Roadmap />
          <Calculators />
          <HealthCheck />
          <Contact selectedService={selectedService} setSelectedService={setSelectedService} />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
