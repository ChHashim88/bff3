"use client";

import { useState } from "react";
import { Plus, Send, CheckCircle2, Film, Cpu, Users, ShieldCheck, DollarSign, Rocket, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    icon: Film,
    tag: "Platform",
    question: "What is Big Film Fund?",
    answer:
      "Big Film Fund is an institutional-grade investment platform that enables everyday investors to gain real ownership in feature films with complete, audited gross revenue transparency.",
  },
  {
    icon: Cpu,
    tag: "Technology",
    question: "How does AI evaluation work?",
    answer:
      "Our proprietary AI platform evaluates script data, talent attachment metrics, genre box office performance, and distribution models to filter for high-ROI projects before production begins.",
  },
  {
    icon: Users,
    tag: "Eligibility",
    question: "Who can invest?",
    answer:
      "Both accredited and non-accredited investors can participate in our film offerings with accessible minimum investment amounts.",
  },
  {
    icon: ShieldCheck,
    tag: "Security",
    question: "Is my investment secure?",
    answer:
      "Investments are backed by direct ownership structures in project-specific SPVs, ensuring first-dollar gross revenue payouts without hidden net profit deductions.",
  },
  {
    icon: DollarSign,
    tag: "Returns",
    question: "How do investors make money?",
    answer:
      "Investors receive pro-rata payouts directly from gross revenues generated across theatrical, streaming, international licensing, and ancillary markets.",
  },
  {
    icon: Rocket,
    tag: "Getting Started",
    question: "How can I get started?",
    answer:
      "Simply join our waitlist or submit an inquiry to receive early access notification and investor documentation for upcoming film campaigns.",
  },
];

export default function FAQContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ fullName: "", email: "", company: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ fullName: "", email: "", company: "", message: "" });
        }, 5000);
      }, 800);
    }
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-[#FAF7F1] py-8 sm:py-10 lg:py-12">

      {/* ── BACKGROUND ACCENTS (THEME-NATIVE) ── */}
      {/* Warm parchment glow – bottom right */}
      <div className="absolute -right-32 bottom-0 w-[360px] h-[360px] rounded-full bg-[#C4A55A] opacity-[0.05] blur-[100px] pointer-events-none" />

      {/* Top & bottom hairline separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD0007]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EAE5DC] to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 space-y-14">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-[#CD0007]" />
            <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#CD0007]">
              INVESTOR SUPPORT
            </span>
          </div>
          <h3 className="type-h3 md:type-h2 font-bold text-[#111111] leading-[1.06] tracking-tight">
            Every Question,{" "}
            <span className="relative">
              <span className="relative z-10 text-[#CD0007]">Clearly Answered.</span>
              {/* Underline accent */}
              <span className="absolute bottom-0.5 left-0 right-0 h-[3px] bg-[#CD0007]/15 rounded-full" />
            </span>
          </h3>
          <p className="text-[13px] sm:text-[16px] text-gray-600 max-w-xl leading-relaxed">
            Transparency is our foundation. Read through common investor questions or reach our team directly.
          </p>
        </motion.div>

        {/* ── TWO-COLUMN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ═══════════════════════════════════════ */}
          {/*  LEFT: ANIMATED FAQ ACCORDION CARDS     */}
          {/* ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-3"
          >
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              const isHovered = hoveredFaq === idx;
              const IconComp = item.icon;

              return (
                <motion.div
                  key={idx}
                  layout
                  onMouseEnter={() => setHoveredFaq(idx)}
                  onMouseLeave={() => setHoveredFaq(null)}
                  className="relative rounded-2xl border overflow-hidden transition-all duration-300"
                  style={{
                    background: "#FAF7F1",
                    borderColor: isOpen ? "rgba(205,0,7,0.35)" : isHovered ? "rgba(205,0,7,0.18)" : "#EAE5DC",
                    boxShadow: isOpen
                      ? "0 8px 32px rgba(205,0,7,0.06), 0 2px 8px rgba(0,0,0,0.03)"
                      : "none",
                  }}
                >


                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4 text-left focus:outline-none cursor-pointer group"
                  >
                    {/* Icon badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen ? "#CD0007" : isHovered ? "rgba(205,0,7,0.08)" : "#FAF7F1",
                        border: isOpen ? "1px solid #CD0007" : "1px solid #EAE5DC",
                      }}
                    >
                      <IconComp size={18} className={isOpen ? "text-white" : "text-[#CD0007]"} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#CD0007]/60 block mb-0.5">
                        {item.tag}
                      </span>
                      <span className="text-[15px] sm:text-[16px] font-semibold text-[#111111] group-hover:text-[#CD0007] transition-colors leading-snug">
                        {item.question}
                      </span>
                    </div>

                    {/* Animated +/× toggle */}
                    <motion.div
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{
                        borderColor: isOpen ? "#CD0007" : "#EAE5DC",
                        background: isOpen ? "rgba(205,0,7,0.06)" : "#FAF7F1",
                      }}
                    >
                      <Plus size={15} className={isOpen ? "text-[#CD0007]" : "text-gray-400 group-hover:text-[#CD0007]"} />
                    </motion.div>
                  </button>

                  {/* Answer panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-0 ml-14">
                          <div className="h-px w-full bg-[#EAE5DC] mb-4" />
                          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.8]">
                            {item.answer}
                          </p>
                          <button className="mt-4 flex items-center gap-1.5 text-[#CD0007] text-[13px] font-semibold group/link hover:gap-2.5 transition-all">
                            <span>Learn more</span>
                            <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ═══════════════════════════════════════ */}
          {/*  RIGHT: PREMIUM CONTACT FORM CARD       */}
          {/* ═══════════════════════════════════════ */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer glow border ring */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#CD0007]/30 via-[#EAE5DC] to-[#C4A55A]/20 opacity-70" />

            <div className="relative rounded-3xl bg-[#FAF7F1] overflow-hidden border border-[#EAE5DC]">



              <div className="relative z-10 p-7 sm:p-9 space-y-6">

                {/* Form header */}
                <div className="space-y-2 pb-5 border-b border-[#EAE5DC]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#CD0007]">
                      DIRECT INQUIRY
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#CD0007]/25 bg-[#CD0007]/06">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CD0007] animate-pulse" />
                      <span className="text-[9px] font-bold text-[#CD0007] uppercase tracking-wider">LIVE SUPPORT</span>
                    </div>
                  </div>
                  <h3 className="text-[21px] sm:text-[23px] font-bold text-[#111111] leading-tight tracking-tight">
                    Let&apos;s build the future<br />of film, together.
                  </h3>
                  <p className="text-[13px] text-gray-500">Response within 24 business hours.</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#CD0007]/10 border border-[#CD0007]/25 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} className="text-[#CD0007]" />
                    </div>
                    <div>
                      <p className="text-[#111111] font-bold text-lg">Inquiry Received!</p>
                      <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto leading-relaxed">
                        Our investor relations team will be in touch within 24 hours.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="text-[#CD0007] fill-[#CD0007]" />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name + Email grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { label: "Full Name", key: "fullName", placeholder: "John Doe", type: "text", required: true },
                        { label: "Email Address", key: "email", placeholder: "john@firm.com", type: "email", required: true },
                      ].map(({ label, key, placeholder, type, required }) => (
                        <div key={key}>
                          <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#111111] mb-1.5">
                            {label}{required && " *"}
                          </label>
                          <input
                            type={type}
                            required={required}
                            placeholder={placeholder}
                            value={formData[key as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-[13px] font-medium text-[#111111] placeholder-gray-400 focus:outline-none transition-all"
                            style={{ background: "#FAF7F1", border: "1px solid #EAE5DC" }}
                            onFocus={(e) => {
                              e.target.style.borderColor = "#CD0007";
                              e.target.style.boxShadow = "0 0 0 3px rgba(205,0,7,0.10)";
                              e.target.style.background = "#FFFFFF";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = "#EAE5DC";
                              e.target.style.boxShadow = "none";
                              e.target.style.background = "#FAF7F1";
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#111111] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Optional"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-[13px] font-medium text-[#111111] placeholder-gray-400 focus:outline-none transition-all"
                        style={{ background: "#FAF7F1", border: "1px solid #EAE5DC" }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#CD0007";
                          e.target.style.boxShadow = "0 0 0 3px rgba(205,0,7,0.10)";
                          e.target.style.background = "#FFFFFF";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#EAE5DC";
                          e.target.style.boxShadow = "none";
                          e.target.style.background = "#FAF7F1";
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#111111] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your investment interest..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-[13px] font-medium text-[#111111] placeholder-gray-400 focus:outline-none transition-all resize-none"
                        style={{ background: "#FAF7F1", border: "1px solid #EAE5DC" }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#CD0007";
                          e.target.style.boxShadow = "0 0 0 3px rgba(205,0,7,0.10)";
                          e.target.style.background = "#FFFFFF";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#EAE5DC";
                          e.target.style.boxShadow = "none";
                          e.target.style.background = "#FAF7F1";
                        }}
                      />
                    </div>

                    {/* Submit CTA */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-[15px] text-white cursor-pointer relative overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, #CD0007 0%, #A60005 100%)",
                        boxShadow: "0 8px 28px rgba(205,0,7,0.28), 0 2px 6px rgba(0,0,0,0.08)",
                      }}
                    >
                      {/* Shimmer on hover */}
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.06] transition-opacity duration-200 rounded-2xl" />
                      <Send size={15} className={`${isSubmitting ? "opacity-60" : ""} group-hover:translate-x-0.5 transition-transform`} />
                      <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                    </motion.button>

                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
