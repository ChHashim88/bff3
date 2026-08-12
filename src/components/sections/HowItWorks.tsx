"use client";

import { UploadCloud, Cpu, Users, DollarSign, Clapperboard, PieChart } from "lucide-react";
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
      icon: Cpu,
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
      icon: DollarSign,
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
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B91C1C] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
            From project to profit.
          </h2>
        </motion.div>

        {/* 6-Step Horizontal Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-[56px] left-[calc(100%/12)] right-[calc(100%/12)] h-[1.5px] bg-gray-200 z-0 origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.14, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Number Label */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.16 + 0.05 }}
                    className="text-xs font-bold text-[#B91C1C] mb-3 uppercase tracking-wider block"
                  >
                    {step.num}
                  </motion.span>

                  {/* Icon Circle with Dominant & Silky Smooth Spring Zoom */}
                  <div className="relative mb-4">
                    {/* Glowing Pulse Halo on Zoom Pop */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{
                        scale: [0, 1.6, 1.1],
                        opacity: [0, 0.6, 0],
                      }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.2,
                        delay: idx * 0.16 + 0.1,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-full bg-[#B91C1C]/30 blur-md pointer-events-none"
                    />

                    <motion.div
                      initial={{ scale: 0, opacity: 0, rotate: -25 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 15,
                        delay: idx * 0.16 + 0.1,
                      }}
                      whileHover={{ scale: 1.22, rotate: 8 }}
                      className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 group-hover:border-[#B91C1C] flex items-center justify-center text-gray-700 group-hover:text-white group-hover:bg-[#B91C1C] group-hover:shadow-[0_10px_25px_rgba(185,28,28,0.4)] transition-all duration-300 shadow-md relative z-10 ring-4 ring-white"
                    >
                      <Icon size={22} strokeWidth={2} />
                    </motion.div>
                  </div>

                  {/* Title & Desc */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.16 + 0.2 }}
                  >
                    <h3 className="text-base font-semibold text-gray-900 mb-1.5 tracking-tight group-hover:text-[#B91C1C] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[170px]">
                      {step.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
