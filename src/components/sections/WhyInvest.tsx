"use client";

import { UserCheck, ShieldCheck, TrendingUp, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyInvest() {
  const features = [
    {
      icon: UserCheck,
      title: "Real Ownership",
      description: "Investors share in every revenue stream and receive gross profits.",
    },
    {
      icon: ShieldCheck,
      title: "Full Transparency",
      description: "We open the black box with complete visibility into how money flows.",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Selection",
      description: "Only projects with high ROI potential make it through our model.",
    },
    {
      icon: PieChart,
      title: "Fair Profit Distribution",
      description: "No hidden waterfalls or net profits that magically hit zero.",
    },
  ];

  return (
    <section id="why-bff" className="py-5 sm:py-7 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-1.5"
        >
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block">
            VALUE PROPOSITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            A fairer, smarter way to invest in films.
          </h2>
        </motion.div>

        {/* 4 Glass Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-3xl p-7 text-center flex flex-col items-center justify-center min-h-[220px] group cursor-pointer"
              >
                {/* Clean Red Line Icon (No Background Box, matching screenshot) */}
                <div className="mb-5 flex items-center justify-center text-[#cd0007] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={44} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description text */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[210px]">
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
