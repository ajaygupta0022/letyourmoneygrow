import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HealthCheck() {
  const [answers, setAnswers] = useState({
    q1: 20,
    q2: 20,
    q3: 0,
    q4: 20,
    q5: 0
  });

  const [score, setScore] = useState(60);
  const [feedback, setFeedback] = useState("");
  const [scoreColor, setScoreColor] = useState("text-slate-800 dark:text-slate-200");

  useEffect(() => {
    let total = Object.values(answers).reduce((a, b) => a + b, 0);
    setScore(total);

    if (total >= 80) {
      setFeedback("Excellent financial discipline! Your foundation is well fortified against market uncertainties.");
      setScoreColor("text-orange-600 dark:text-orange-500");
    } else if (total >= 60) {
      setFeedback("Moderate preparedness. Key gaps exist in insurance cover or dedicated retirement structuring.");
      setScoreColor("text-slate-800 dark:text-slate-200");
    } else {
      setFeedback("Urgent attention recommended. Your assets are vulnerable to sudden emergencies or inflation decay.");
      setScoreColor("text-red-600 dark:text-red-500");
    }
  }, [answers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: parseInt(value) }));
  };

  const questions = [
    { name: "q1", text: "1. Do you maintain at least 6 months of living expenses in liquid emergency funds?" },
    { name: "q2", text: "2. Does your family have health insurance of at least ₹10-15 Lakhs separate from corporate cover?" },
    { name: "q3", text: "3. Is your pure term life cover at least 10x-15x of your annual gross earnings?" },
    { name: "q4", text: "4. Are you investing at least 20% of your monthly take-home income in inflation-beating assets?" },
    { name: "q5", text: "5. Do you have a structured retirement and pension roadmap independent of EPF?" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500" id="healthcheck">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="text-xs text-orange-600 dark:text-orange-500 uppercase font-bold tracking-wider">2-Minute Diagnostic</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 transition-colors duration-500">
            Financial Health Check Test
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-500">
            Assess how resilient your personal balance sheet is against inflation, medical emergencies, and retirement needs.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-500">
          <form className="space-y-5">
            {questions.map((q, idx) => (
              <motion.div 
                key={q.name}
                initial={{ opacity: 0, x: -30, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 90, damping: 15, delay: idx * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs hover:border-orange-300 dark:hover:border-orange-500/50 transition-colors duration-500"
              >
                <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 transition-colors duration-500">
                  {q.text}
                </span>
                <div className="flex items-center gap-3 shrink-0">
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-500">
                    <input 
                      checked={answers[q.name] === 20} 
                      onChange={handleChange}
                      className="accent-orange-600" 
                      name={q.name} 
                      type="radio" 
                      value="20" 
                    /> Yes
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-500">
                    <input 
                      checked={answers[q.name] === 0} 
                      onChange={handleChange}
                      className="accent-orange-600" 
                      name={q.name} 
                      type="radio" 
                      value="0" 
                    /> No
                  </label>
                </div>
              </motion.div>
            ))}
          </form>
          
          {/* Score Meter & Result */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="mt-8 p-6 md:p-8 bg-white dark:bg-slate-800 rounded-3xl border-2 border-orange-200/60 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none flex flex-col sm:flex-row items-center justify-between gap-5 hover:shadow-[0_8px_30px_rgb(249,115,22,0.1)] dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.05)] hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-500"
          >
            <div className="text-center sm:text-left">
              <span className="text-[11px] text-orange-800 dark:text-orange-400 uppercase font-bold tracking-wider transition-colors duration-500">Your Preparedness Rating</span>
              <div className="flex items-baseline gap-2 mt-1 justify-center sm:justify-start">
                <span className={`text-4xl font-extrabold ${scoreColor}`}>
                  {score}
                </span>
                <span className="text-lg font-bold text-slate-400">/ 100</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium transition-colors duration-500">{feedback}</p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm shadow-[0_8px_20px_rgb(15,23,42,0.3)] shadow-inner transition-all text-center block cursor-pointer border border-slate-700" 
                href="#contact"
              >
                Book a Free Financial Health Audit
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
