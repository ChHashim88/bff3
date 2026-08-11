"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StatsProps {
  onOpenWaitlist?: () => void;
}

export default function Stats({ onOpenWaitlist }: StatsProps) {
  const statCards = [
    {
      stat: "$248B",
      label: "Global film market by 2025",
      source: "Source: Statista",
    },
    {
      stat: "79%",
      label: "Growth in annual streaming revenue",
      source: "Source: Statista",
    },
    {
      stat: "10X",
      label: "Lower distribution costs with AI tech",
      source: "Source: Unique Report",
    },
    {
      stat: "High ROI",
      label: "Optimal risk-adjusted scenario modeling",
      source: "Source: BFF Analytics",
    },
  ];

  return (
    <section className="py-4 sm:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left CTA Card: WHY NOW? */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block">
                WHY NOW?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Time to invest
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Global film consumption is growing rapidly, while technological innovation is lowering distribution costs. The opportunity to democratize film investment has never been larger.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-gray-700" />
              </button>
            </div>
          </motion.div>

          {/* 4 Stat Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 flex flex-col justify-between text-left cursor-pointer"
              >
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                    {item.stat}
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-snug">
                    {item.label}
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-medium text-gray-400">
                  {item.source}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
