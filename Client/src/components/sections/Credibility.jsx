import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Credibility() {
  const credentials = [
    {
      icon: "verified_user",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      tagColor: "text-orange-700",
      tagText: "Verified Credential",
      title: "AMFI Registered ARN-136748",
      desc: "Fully certified distributor bound by rigorous AMFI code of conduct and SEBI ethical compliance standards."
    },
    {
      icon: "corporate_fare",
      iconBg: "bg-slate-900",
      iconColor: "text-amber-400",
      tagColor: "text-slate-900",
      tagText: "Platform Power",
      title: "Prudent Corporate Advisory",
      desc: "Institutional partnership with India's premier financial distributor managing over ₹75,000+ Crore AUM."
    },
    {
      icon: "devices",
      iconBg: "bg-orange-500",
      iconColor: "text-white",
      tagColor: "text-orange-700",
      tagText: "Fintech Ecosystem",
      title: "Fundzbazar Digital Portal",
      desc: "Real-time multi-asset dashboard, bi-weekly portfolio reports, one-click purchase, switch, STP & SWP execution."
    },
    {
      icon: "groups",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      tagColor: "text-amber-800",
      tagText: "Fiduciary Track Record",
      title: <><AnimatedCounter to={1200} duration={2.5} />+ Families Protected</>,
      desc: "8+ years cumulative market experience helping families navigate bull runs, volatile corrections, and life milestones."
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Institutional Stability</span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 transition-colors duration-500">Backed by India’s Leading Financial Infrastructure</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15, margin: "-50px" }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-slate-50/60 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-xl ${cred.iconBg} ${cred.iconColor} flex items-center justify-center mb-3 transition-colors duration-500`}>
                <span className="material-symbols-outlined">{cred.icon}</span>
              </div>
              <span className={`text-[11px] ${cred.tagColor} dark:text-orange-400 uppercase font-bold tracking-wide transition-colors duration-500`}>{cred.tagText}</span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-1 text-base transition-colors duration-500">{cred.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed transition-colors duration-500">
                {cred.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
