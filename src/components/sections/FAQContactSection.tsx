"use client";

import { useState } from "react";
import { Plus, Minus, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQContactSection() {
  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First expanded by default

  // Contact form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      question: "What is Big Film Fund?",
      answer:
        "Big Film Fund is an institutional-grade investment platform that enables everyday investors to gain real ownership in feature films with complete, audited gross revenue transparency.",
    },
    {
      question: "How does AI evaluation work?",
      answer:
        "Our proprietary AI platform evaluates script data, talent attachment metrics, genre box office performance, and distribution models to filter for high-ROI projects before production begins.",
    },
    {
      question: "Who can invest?",
      answer:
        "Both accredited and non-accredited investors can participate in our film offerings with accessible minimum investment amounts.",
    },
    {
      question: "Is my investment secure?",
      answer:
        "Investments are backed by direct ownership structures in project-specific SPVs, ensuring first-dollar gross revenue payouts without hidden net profit deductions.",
    },
    {
      question: "How do investors make money?",
      answer:
        "Investors receive pro-rata payouts directly from gross revenues generated across theatrical, streaming, international licensing, and ancillary markets.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply join our waitlist or submit an inquiry to receive early access notification and investor documentation for upcoming film campaigns.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: "", email: "", company: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B91C1C] mb-3">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                Frequently asked questions.
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-4 sm:py-5 transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                    >
                      <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${
                        isOpen ? 'text-[#B91C1C]' : 'text-gray-900 group-hover:text-[#B91C1C]'
                      }`}>
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`ml-4 shrink-0 text-gray-400 group-hover:text-[#B91C1C] transition-colors ${
                          isOpen ? 'text-[#B91C1C]' : ''
                        }`}
                      >
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 pr-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8 lg:pl-4"
          >
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B91C1C] mb-3">
                Contact
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                Let&apos;s build the future of film, together.
              </h2>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-red-50/70 border border-red-200 rounded-sm text-center space-y-3"
              >
                <CheckCircle2 size={40} className="text-[#B91C1C] mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900">Thank you for your message!</h3>
                <p className="text-sm text-gray-600">
                  Our team has received your inquiry and will reach out to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#B91C1C] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-semibold px-8 py-3.5 rounded-sm transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>Send Inquiry</span>
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
