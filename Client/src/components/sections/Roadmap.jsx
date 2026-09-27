import React from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const steps = [
    {
      num: 1,
      tag: "Stage 1",
      title: "Child Higher Education",
      desc: "Beat 10%+ educational inflation through targeted equity SIPs initiated early in your child's life.",
      horizon: "Horizon: 10 - 18 Years",
      featured: false
    },
    {
      num: 2,
      tag: "Stage 2",
      title: "Dream Home Creation",
      desc: "Accumulate home down payment corpus without overleveraging high-interest commercial bank loans.",
      horizon: "Horizon: 5 - 8 Years",
      featured: false
    },
    {
      num: 3,
      tag: "Stage 3",
      title: "Wealth Maximization",
      desc: "Compounding acceleration phase using mid-cap and thematic flexi-cap equities during peak earning years.",
      horizon: "Horizon: 7 - 15 Years",
      featured: true
    },
    {
      num: 4,
      tag: "Stage 4",
      title: "Financial Freedom & Early Retirement",
      desc: "Creating an automated Systematic Withdrawal Plan (SWP) replacing active salary with perpetual passive yield.",
      horizon: "Horizon: 15 - 25 Years",
      featured: false
    },
    {
      num: 5,
      tag: "Stage 5",
      title: "Succession & Legacy Planning",
      desc: "Clear nomination structures, private family trusts, and smooth tax-efficient wealth distribution to heirs.",
      horizon: "Horizon: Generational",
      featured: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Structured Milestones</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 transition-colors duration-500">
            Goal-Based Financial Journey Roadmap
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm transition-colors duration-500">
            Every rupee should have a dedicated assignment. We structure your portfolio across five vital life phases.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2 z-0 origin-left"
          ></motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className={`bg-white dark:bg-slate-800 p-5 rounded-2xl flex flex-col justify-between relative transition-colors duration-500 ${step.featured ? 'border-2 border-orange-500 shadow-md' : 'border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500/50 shadow-sm'}`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center mb-4 text-base transition-colors duration-500 ${step.featured ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20' : 'bg-slate-900 dark:bg-slate-700 text-white shadow-sm'}`}>
                    {step.num}
                  </div>
                  <span className="text-[11px] text-orange-700 dark:text-orange-400 font-bold uppercase tracking-wider transition-colors duration-500">{step.tag}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mt-1 text-sm transition-colors duration-500">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
                <div className={`mt-4 pt-3 transition-colors duration-500 ${step.featured ? 'border-t border-orange-100 dark:border-orange-900/50 text-[11px] font-bold text-orange-700 dark:text-orange-400' : 'border-t border-slate-100 dark:border-slate-700 text-[11px] font-medium text-slate-500 dark:text-slate-400'}`}>
                  {step.horizon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm shadow-lg hover:shadow-orange-500/25 transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Connect to plan your Goals
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">arrow_right_alt</span>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
