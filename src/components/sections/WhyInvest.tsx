"use client";

import { Users, Eye, TrendingUp, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyInvest() {
  const features = [
    {
      icon: Users,
      title: "Real Ownership",
      description: "Investors share in every revenue stream and receive gross dollar profits.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "We open the black box with complete visibility into how money flows.",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Selection",
      description: "Only projects with high ROI potential make it through our intense evaluation.",
    },
    {
      icon: PieChart,
      title: "Fair Profit Distribution",
      description: "No hidden waterfalls or 'net profits' that magically hit zero. Everyone shares in the wins.",
    },
  ];

  return (
    <section id="why-bff" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100 overflow-hidden">
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
            Why Invest With BFF
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
            A fairer, smarter way to invest in films.
          </h2>
        </motion.div>

        {/* 4 Columns with Thin Vertical Separators on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 lg:pt-0 pb-6 lg:pb-0 group cursor-pointer ${index !== 0 ? 'lg:pl-8' : ''
                  }`}
              >
                {/* Sequentially Glowing Icon Container */}
                <div className="relative mb-6">
                  {/* Outer glowing halo ring animation triggered when section enters viewport */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: [0, 0.95, 0.4, 0.8, 0.25],
                      scale: [0.8, 1.4, 1.1, 1.25, 1.05],
                      boxShadow: [
                        "0 0 0px rgba(185, 28, 28, 0)",
                        "0 0 35px rgba(185, 28, 28, 0.65)",
                        "0 0 15px rgba(185, 28, 28, 0.3)",
                        "0 0 25px rgba(185, 28, 28, 0.5)",
                        "0 0 10px rgba(185, 28, 28, 0.2)",
                      ],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.38 + 0.2, // Smooth step-by-step glow sequence one by one
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-red-100/60 pointer-events-none"
                  />

                  <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{
                      scale: [1, 1.16, 1, 1.08, 1],
                      borderColor: [
                        "rgba(254, 226, 226, 1)",
                        "rgba(185, 28, 28, 0.85)",
                        "rgba(254, 202, 202, 1)",
                        "rgba(185, 28, 28, 0.6)",
                        "rgba(254, 226, 226, 1)",
                      ],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.38 + 0.2,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.18, rotate: 6 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-red-50/80 border border-red-100 flex items-center justify-center text-[#B91C1C] shadow-xs group-hover:bg-[#B91C1C] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(185,28,28,0.4)] transition-colors duration-300"
                  >
                    <Icon size={28} strokeWidth={1.75} />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-[#B91C1C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
