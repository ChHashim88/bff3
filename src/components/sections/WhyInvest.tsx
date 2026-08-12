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
    <section id="why-bff" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100">
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
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 lg:pt-0 pb-6 lg:pb-0 group ${index !== 0 ? 'lg:pl-8' : ''
                  }`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-full bg-red-50/70 border border-red-100 flex items-center justify-center text-[#B91C1C] mb-6 shadow-xs group-hover:bg-[#B91C1C] group-hover:text-white transition-colors duration-300"
                >
                  <Icon size={26} strokeWidth={1.75} />
                </motion.div>
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
