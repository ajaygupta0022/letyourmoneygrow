import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-200 relative overflow-hidden" id="footer">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* 1. Pre-Footer CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="border-b border-slate-800/60 relative z-10"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">Ready to build institutional wealth?</h2>
              <p className="text-slate-400 mt-2 font-medium text-sm md:text-base">Join smart investors who trust our research-backed, fiduciary approach to mutual funds and goal planning.</p>
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex-1 md:flex-none text-center px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl font-bold shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Start Investing Today
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* 2. Main Footer Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 border-b border-slate-800/60 pb-16">
            
            {/* Col 1: Brand & Socials */}
            <div className="lg:col-span-4 space-y-6">
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
                className="inline-block cursor-pointer"
              >
                <img
                  alt="LET YOUR MONEY GROW Official Brand Logo"
                  className="h-14 md:h-16 w-auto object-contain"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW0URJzJT9fcynaxX9B1RX9cMJksjSF6keCUnqdQJOac3Ze6C-SrFRU8XMIRVHoo3X5GGW8hCtPKWOh_Igr2D_GjNfbg5AVsc7bqFZlJqw4KNieKvbaMfhY16dDhDEDapfOnzPG9Wz3cHT5yIjRghdlTn3Xy8wT7XbfeJOVcO0uHaqX8xPSD0HWmAnLgsrAS_5-p3E5Bf4MGWQ18Rmp_QTYnSBbIzQP7ORoAS8BERooTJCCc2Q-Vkr95tJAkRz9m8PEg"
                />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                A premier mutual fund distribution and advisory firm dedicated to fiduciary discipline, strategic goal planning, and long-term capital compounding.
              </p>
              
              {/* Social Hub */}
              <div className="pt-2 flex items-center gap-3">
                {/* Instagram */}
                <motion.a whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }} href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 shadow-sm hover:shadow-pink-500/20">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </motion.a>
                {/* Facebook */}
                <motion.a whileHover={{ scale: 1.15, rotate: -5 }} whileTap={{ scale: 0.9 }} href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-sm hover:shadow-blue-500/20">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </motion.a>
                {/* WhatsApp */}
                <motion.a whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://wa.me/919936411411" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 shadow-sm hover:shadow-emerald-500/20">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.124.553 4.195 1.604 6.012L.15 23.518l5.632-1.478a11.972 11.972 0 006.249 1.745c6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 21.614c-1.785 0-3.528-.48-5.06-1.388l-.362-.214-3.766.987.997-3.673-.235-.374a9.851 9.851 0 01-1.503-5.267c0-5.438 4.426-9.864 9.864-9.864 2.637 0 5.115 1.027 6.98 2.891 1.864 1.864 2.891 4.342 2.891 6.979 0 5.438-4.426 9.864-9.864 9.864zm5.347-7.299c-.293-.146-1.737-.858-2.006-.956-.269-.098-.465-.146-.66.146-.195.292-.758.956-.928 1.151-.171.195-.342.22-.635.073-.293-.146-1.242-.458-2.366-1.464-.875-.783-1.466-1.75-1.637-2.043-.171-.293-.018-.452.129-.598.132-.132.293-.342.44-.513.146-.171.195-.293.293-.488.098-.195.049-.366-.024-.513-.073-.146-.66-1.591-.904-2.179-.239-.574-.481-.497-.66-.506-.171-.01-.366-.01-.561-.01-.195 0-.513.073-.781.366-.269.293-1.026 1.002-1.026 2.443 0 1.442 1.05 2.834 1.197 3.03.146.195 2.067 3.155 5.006 4.422.7.3 1.246.48 1.674.614.703.221 1.344.19 1.848.114.567-.085 1.737-.71 1.981-1.396.244-.686.244-1.275.171-1.396-.073-.122-.269-.195-.561-.342z" />
                  </svg>
                </motion.a>
              </div>
            </div>
            
            {/* Col 2: Solutions (Temporarily Hidden) */}
            {/*
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-3">
                {['Systematic Investment Plans (SIP)', 'Lumpsum & Equity Funds', 'Corporate Fixed Deposits', 'National Pension System (NPS)', 'Term & Health Insurance'].map((item, i) => (
                  <li key={i}>
                    <a href="#solutions" className="group flex items-center text-sm text-slate-400 hover:text-orange-400 transition-colors">
                      <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-orange-500 mr-2 transition-all duration-300 material-symbols-outlined text-[14px]">arrow_right</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            */}
            
            {/* Col 3: Resources */}
            <div className="lg:col-span-4 space-y-5">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Resources</h4>
              <ul className="space-y-3">
                {[{name: 'SIP Calculator', link: '#calculators'}, {name: 'Financial Health Test', link: '#healthcheck'}, {name: 'Knowledge Center', link: '#knowledge'}, {name: 'About Sachin', link: '#about'}].map((item, i) => (
                  <li key={i}>
                    <a href={item.link} className="group flex items-center text-sm text-slate-400 hover:text-orange-400 transition-colors">
                      <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-orange-500 mr-2 transition-all duration-300 material-symbols-outlined text-[14px]">arrow_right</span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Col 4: Contact Direct */}
            <div className="lg:col-span-4 space-y-5">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="material-symbols-outlined text-slate-500 text-[20px] mt-0.5">location_on</span>
                  <span>Lucknow, Uttar Pradesh, India<br/>Serving clients PAN India securely.</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">call</span>
                  <a href="tel:+919936411411" className="hover:text-orange-400 transition-colors">+91 9936411411</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">mail</span>
                  <a href="mailto:leturmoneygrow@gmail.com" className="hover:text-orange-400 transition-colors">leturmoneygrow@gmail.com</a>
                </li>
              </ul>
            </div>

          </div>

          {/* 3. Trust Badges & Statutory Disclosures */}
          <div className="pt-10 flex flex-col lg:flex-row gap-10 items-start justify-between">
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50">
                <span className="material-symbols-outlined text-emerald-500 text-[18px]">shield</span>
                <span className="text-[11px] font-bold text-slate-300">256-bit Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50">
                <span className="material-symbols-outlined text-amber-500 text-[18px]">verified</span>
                <span className="text-[11px] font-bold text-slate-300">AMFI ARN-136748</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50">
                <span className="material-symbols-outlined text-blue-500 text-[18px]">account_balance</span>
                <span className="text-[11px] font-bold text-slate-300">SEBI Compliant</span>
              </div>
            </div>

            {/* Fine Print Disclaimers */}
            <div className="max-w-3xl text-[10px] leading-relaxed text-slate-500 space-y-3">
              <p>
                <strong className="text-slate-400">Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully. Past performance is not an indicator of future returns. 
              </p>
              <p>
                Sachin Gupta (ARN-136748) is an AMFI registered Mutual Fund Distributor. We receive distributor commission from Asset Management Companies (AMCs) as per SEBI regulations. Commission details are shared transparently upon request. Insurance is the subject matter of solicitation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. Copyright Bottom Bar */}
        <div className="bg-[#050B14] py-4 text-center border-t border-slate-900/50">
          <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
            © {currentYear} LET YOUR MONEY GROW, All Rights Reserved.<br />
            Sachin Gupta (AMFI Regd. MFD) | ARN-136748<br />
            Channel Partner : PRUDENT & FUNDZBAZAR
          </p>
        </div>
      </footer>

      {/* FLOATING ADVISORY DOCK (Bottom-Right) - Untouched logic, slightly polished visuals */}
      <aside aria-label="Advisor quick contacts" className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with Sachin Gupta on WhatsApp" 
          className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-2xl transition-all duration-200 group ring-4 ring-emerald-500/20" 
          href="https://wa.me/919936411411?text=Hello%20Sachin%20Gupta,%20I%20would%20like%20to%20consult%20regarding%20investments." 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="text-xs font-bold hidden group-hover:inline pr-1">WhatsApp Sachin</span>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Call Sachin Gupta" 
          className="flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-200 group" 
          href="tel:+919936411411"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span className="text-xs font-bold hidden group-hover:inline pr-1">Call +91 9936411411</span>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-700 hover:border-orange-200 dark:hover:border-orange-500/50 hover:text-orange-700 dark:hover:text-orange-400 py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-2xl transition-all duration-200 group" 
          href="#calculators"
        >
          <span className="material-symbols-outlined text-orange-600 text-[20px]">calculate</span>
          <span className="text-xs font-bold hidden group-hover:inline pr-1">SIP Calculator</span>
        </motion.a>
      </aside>
    </>
  );
}
