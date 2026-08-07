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
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[56px] left-[calc(100%/12)] right-[calc(100%/12)] h-[1.5px] bg-gray-200 z-0 origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Number Label */}
                  <span className="text-xs font-bold text-[#B91C1C] mb-3 uppercase tracking-wider block">
                    {step.num}
                  </span>

                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-white border border-gray-200 group-hover:border-[#B91C1C] flex items-center justify-center text-gray-700 group-hover:text-[#B91C1C] transition-all duration-300 shadow-sm mb-4 relative z-10 ring-4 ring-white"
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </motion.div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5 tracking-tight group-hover:text-[#B91C1C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[170px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
