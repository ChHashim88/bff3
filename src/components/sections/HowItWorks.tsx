"use client";

import { UploadCloud, Gem, Users, CircleDollarSign, Clapperboard, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: UploadCloud,
      title: "Sektoral Project",
      desc: "Filmmakers submit their projects.",
    },
    {
      num: "2",
      icon: Gem,
      title: "AI Evaluation",
      desc: "Our AI evaluates market potential & risks.",
    },
    {
      num: "3",
      icon: Users,
      title: "Investor Review",
      desc: "Investors review and select allocations.",
    },
    {
      num: "4",
      icon: CircleDollarSign,
      title: "Funding",
      desc: "Escrow funding is raised & secured.",
    },
    {
      num: "5",
      icon: Clapperboard,
      title: "Production",
      desc: "The film moves into production with transparent tracking.",
    },
    {
      num: "6",
      icon: PieChart,
      title: "Revenue Realization",
      desc: "Gross profits are shared directly with investors.",
    },
  ];

  return (
    <section id="how-it-works" className="py-5 sm:py-7 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-1.5"
        >
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block">
            HOW BFF WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            From project to profit.
          </h2>
        </motion.div>

        {/* 6 Process Cards Grid with Dotted Connecting Line */}
        <div className="relative pt-2">
          {/* Connecting Dotted Line running behind badges */}
          <div className="hidden lg:block absolute top-[70px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-gray-300 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover rounded-3xl p-6 text-center flex flex-col items-center justify-center min-h-[220px] relative group cursor-pointer"
                >
                  {/* Step Number Badge Pill (Positioned half on right card corner edge, lower down) */}
                  <div className="absolute top-2.5 -right-3.5 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200/90 text-gray-800 font-extrabold text-xs flex items-center justify-center z-20">
                    {step.num}
                  </div>

                  <div className="flex flex-col items-center justify-center w-full">
                    {/* Clean Blue Line Icon (matching reference screenshot) */}
                    <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <Icon size={42} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-900 mb-1.5 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-gray-500 leading-relaxed max-w-[130px]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
