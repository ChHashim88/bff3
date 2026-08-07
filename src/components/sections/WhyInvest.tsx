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
      description: "We only greenlight projects with high ROI potential after intense evaluation.",
    },
    {
      icon: PieChart,
      title: "Fair Profit Distribution",
      description: "No hidden waterfalls or \"net profits\" that magically hit zero. Everyone shares in the wins.",
    },
  ];

  return (
    <section id="why-bff" className="py-20 sm:py-24 lg:py-32 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Dominant Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight">
            Why Invest with Big Film Fund?
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
            A fairer, smarter, and more transparent way to invest in independent films.
          </p>
        </motion.div>

        {/* 4 Columns with Dominant Sequential Pop-In & Wave Floating Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: [0.88, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.16, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 lg:pt-0 pb-6 lg:pb-0 group cursor-pointer ${
                  index !== 0 ? 'lg:pl-8' : ''
                }`}
              >
                {/* Clean Line Icon with Continuous Floating Wave Motion & Dynamic Hover Spin */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: index * 0.4 }}
                  whileHover={{ scale: 1.25, rotate: index % 2 === 0 ? 12 : -12 }}
                  className="mb-6 flex items-center justify-center pt-2"
                >
                  <Icon size={38} strokeWidth={1.35} className="text-black group-hover:text-neutral-800 transition-colors" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-black">
                  {item.title}
                </h3>

                {/* Description text */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[240px]">
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
