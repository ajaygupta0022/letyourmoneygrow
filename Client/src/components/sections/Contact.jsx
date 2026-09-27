import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ selectedService = "", setSelectedService = null }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const subject = 'New Advisory Request';
    const body = [
      'Hello Sachin Gupta,',
      '',
      'I would like to request a financial advisory consultation.',
      '',
      `Full Name: ${data.fullName}`,
      `Phone Number: ${data.phoneNumber}`,
      `Email Address: ${data.email}`,
      `Age Group: ${data.ageGroup}`,
      `Monthly Investment Capacity: ${data.monthlyInvestmentCapacity}`,
      `Primary Financial Priority: ${data.primaryFinancialPriority}`,
      `Service of Interest: ${data.serviceOfInterest || 'General Enquiry'}`,
      '',
      'Specific Notes / Current Portfolio Questions:',
      data.notes || 'Not provided',
    ].join('\r\n');

    window.location.href = `mailto:leturmoneygrow@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-16 md:py-24 bg-orange-50/30 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Advisor Details & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs text-orange-600 uppercase font-bold tracking-wider">Personalized Advisory</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 leading-tight transition-colors duration-500">
                Let’s Discuss Your Financial Future Over a Cup of Coffee or Video Call
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed transition-colors duration-500">
                Whether you are looking to kickstart your first ₹2,000 SIP or restructure a ₹5 Crore family portfolio, Sachin Gupta provides direct, confidential, and comprehensive guidance.
              </p>
            </div>

            {/* Advisor Card Box */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 hover:border-orange-400 dark:hover:border-orange-500 transition-colors duration-500">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 dark:from-slate-700 dark:to-slate-900 border border-orange-500/40 text-orange-400 flex items-center justify-center font-bold text-xl shadow-sm">
                  SG
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base transition-colors duration-500">Sachin Gupta</h3>
                  <span className="text-xs text-orange-600 dark:text-orange-400 font-bold block transition-colors duration-500">AMFI Regd.MFD (ARN-136748)</span>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-colors duration-500">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-500 text-[18px]">call</span>
                  <a className="font-bold text-slate-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400" href="tel:+919936411411">+91 9936411411</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-500 text-[18px]">mail</span>
                  <a className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="mailto:leturmoneygrow@gmail.com">leturmoneygrow@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-500 text-[18px]">location_on</span>
                  <span className="text-slate-600 dark:text-slate-400">Pan-India Virtual Advisory & In-Person Sessions</span>
                </div>
              </div>

              {/* Direct Quick Access Buttons */}
              <div className="pt-4 grid grid-cols-2 gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 text-center font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  href="tel:+919936411411"
                >
                  <span className="material-symbols-outlined text-[16px] text-slate-700 dark:text-slate-300">call</span>
                  Call Advisor
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  href="https://wa.me/919936411411?text=Hello%20Sachin%20Gupta,%20I%20would%20like%20to%20schedule%20a%20consultation."
                  rel="noopener noreferrer" target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  WhatsApp
                </motion.a>
              </div>
            </div>

            {/* Digital Portal Reminder */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center gap-3 border border-slate-800">
              <span className="material-symbols-outlined text-amber-400 text-[24px]">devices</span>
              <div className="text-xs">
                <strong className="block text-white">Digital Execution via Fundzbazar</strong>
                <span className="text-slate-300">Seamless paperless account opening within 10 minutes.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15, margin: "-50px" }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-800 p-4 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl ring-1 ring-black/5 dark:ring-white/5 hover:border-orange-300 dark:hover:border-orange-500/50 transition-colors duration-500">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-500">Book Your Strategy Session</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 transition-colors duration-500">
                Fill out this preliminary form and Sachin Gupta will personally connect with you within 24 business hours.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Full Name *</label>
                    <input name="fullName" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500" placeholder="e.g. Rajesh Sharma" required type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Phone Number *</label>
                    <input name="phoneNumber" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500" placeholder="e.g. 9876543210" required type="tel" maxLength="10" pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Email Address *</label>
                    <input name="email" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500" placeholder="e.g. rajesh@domain.com" required type="email" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Age Group</label>
                    <select name="ageGroup" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500" defaultValue="31-45">
                      <option value="20-30">20 - 30 Years (Wealth Kickstart)</option>
                      <option value="31-45">31 - 45 Years (Core Compounding)</option>
                      <option value="46-58">46 - 58 Years (Pre-Retirement Prep)</option>
                      <option value="58+">58+ Years (Pension & Succession)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Monthly Investment Capacity</label>
                    <select name="monthlyInvestmentCapacity" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500" defaultValue="₹10,000 - ₹25,000">
                      <option value="₹2,500 - ₹10,000">₹2,500 - ₹10,000 / month</option>
                      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 / month</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 / month</option>
                      <option value="₹50,000+">₹50,000+ / month (HNI Strategy)</option>
                      <option value="Lump Sum">Lump Sum Capital (₹5 Lakhs+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Primary Financial Priority</label>
                    <select name="primaryFinancialPriority" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500">
                      <option value="Long Term Investment">Long Term Investment</option>
                      <option value="Retirement Corpus">Retirement Corpus (NPS / SIP)</option>
                      <option value="Child Education">Child Higher Education Fund</option>
                      <option value="Family Protection">Family Protection</option>
                      <option value="Tax Saving">Section 80C Tax Saving</option>
                      <option value="Portfolio Review">Existing Portfolio Restructuring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Service of Interest (Optional)</label>
                  <select 
                    name="serviceOfInterest" 
                    value={selectedService}
                    onChange={(e) => setSelectedService && setSelectedService(e.target.value)}
                    className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500"
                  >
                    <option value="">-- General Enquiry --</option>
                    <option value="Systematic Investment Plans (SIP)">Systematic Investment Plans (SIP)</option>
                    <option value="Lump Sum Mutual Funds">Lump Sum Mutual Funds</option>
                    <option value="Equity & Shares Portfolio">Equity & Shares Portfolio</option>
                    <option value="Corporate Fixed Deposits (FDs)">Corporate Fixed Deposits (FDs)</option>
                    <option value="Sovereign & Corporate Bonds">Sovereign & Corporate Bonds</option>
                    <option value="National Pension System (NPS)">National Pension System (NPS)</option>
                    <option value="P2P Lending Solutions">P2P Lending Solutions</option>
                    <option value="Loan Against Securities (LAS)">Loan Against Securities (LAS)</option>
                    <option value="Unit Linked Investment Plans (ULIP)">Unit Linked Investment Plans (ULIP)</option>
                    <option value="Real Estate Investment Trusts">Real Estate Investment Trusts</option>
                    <option value="Multi-AMC Mutual Fund Architecture">Multi-AMC Mutual Fund Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-500">Specific Notes / Current Portfolio Questions</label>
                  <textarea name="notes" className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-500" placeholder="Tell us about your existing investments, timeline, or preferred consultation time..." rows="3"></textarea>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl font-bold text-sm shadow-[0_8px_20px_rgb(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgb(249,115,22,0.4)] shadow-inner border border-orange-500 transition-all flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    Submit Advisory Request
                  </motion.button>
                </div>

                <div className="flex items-center gap-2 justify-center text-[11px] text-slate-500 pt-1">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Strict Confidentiality Guaranteed. Never shared with third-party telemarketers.
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
