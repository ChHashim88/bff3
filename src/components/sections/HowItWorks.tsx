"use client";

import { UploadCloud, Brain, Users, CircleDollarSign, Clapperboard, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: UploadCloud,
      title: "Submit Project",
      desc: "Filmmakers submit their projects.",
    },
    {
      num: "02",
      icon: Brain,
      title: "AI Evaluation",
      desc: "Our AI analyzes market potential and ROI.",
    },
    {
      num: "03",
      icon: Users,
      title: "Investor Review",
      desc: "Investors review and choose to invest.",
    },
    {
      num: "04",
      icon: CircleDollarSign,
      title: "Funding",
      desc: "Capital is raised and secured.",
    },
    {
      num: "05",
      icon: Clapperboard,
      title: "Production",
      desc: "The film is produced with full transparency.",
    },
    {
      num: "06",
      icon: PieChart,
      title: "Revenue Sharing",
      desc: "Profits are shared fairly with investors.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container with Smooth Zoom Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Larger Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 tracking-tight leading-tight">
              A Smarter Way to Invest in Film
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-normal leading-relaxed">
              From project to profit.
            </p>
          </div>

          {/* 6-Step Horizontal Process Timeline with Larger Icons & Sequential Wave Animation */}
          <div className="relative">
            {/* Desktop Thin Horizontal Connecting Line Wave */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="hidden lg:block absolute top-[62px] left-[calc(100%/12)] right-[calc(100%/12)] h-[1.5px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 z-0 origin-left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-4 relative z-10">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    whileInView={{ opacity: 1, scale: [0.7, 1.25, 1], y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.22, ease: "easeOut" }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Step Number Label */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.22 + 0.1 }}
                      className="text-xs font-normal text-gray-400 mb-4 tracking-widest block"
                    >
                      {step.num}
                    </motion.span>

                    {/* Larger Icon Box with Pulsing Glow Wave */}
                    <div className="relative mb-6 flex items-center justify-center bg-white px-3 py-1.5 z-10">
                      {/* Wave Glow Pulse Effect */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: [0, 0.7, 0], scale: [0.8, 1.6, 1.1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.22 + 0.2, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full bg-black/10 blur-md pointer-events-none"
                      />

                      {/* Icon with interactive hover spring */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 6, y: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="relative z-10"
                      >
                        <Icon size={48} strokeWidth={1.25} className="text-gray-900 group-hover:text-black transition-colors" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.22 + 0.3 }}
                      className="text-base sm:text-lg font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-black transition-colors"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description text */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.22 + 0.4 }}
                      className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[170px]"
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
