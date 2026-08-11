"use client";

import { Handshake, Lock, Brain, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface OpportunityProps {
  onOpenWaitlist?: () => void;
}

export default function Opportunity({ onOpenWaitlist }: OpportunityProps = {}) {
  const differentiators = [
    {
      icon: Handshake,
      title: "Aligned Investors",
      desc: "We align incentives with creators and investors from day one.",
    },
    {
      icon: Lock,
      title: "No Hidden Fees",
      desc: "No hidden waterfalls or surprise middleman deductions.",
    },
    {
      icon: Brain,
      title: "Data-Driven Algorithm",
      desc: "AI finds high-potential projects and validates market demand.",
    },
    {
      icon: Users,
      title: "Community Focused",
      desc: "We build an active community involved in every project.",
    },
    {
      icon: Globe,
      title: "Global Opportunity",
      desc: "Access high-potential curated film projects worldwide.",
    },
  ];

  return (
    <section id="investment" className="py-5 sm:py-7 relative overflow-hidden">
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
            WHY BFF IS DIFFERENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            We do things differently, so investors win.
          </h2>
        </motion.div>

        {/* 5 Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover rounded-3xl p-6 text-center flex flex-col items-center justify-center min-h-[210px] group cursor-pointer"
              >
                {/* Clean Red Line Icon (matching reference screenshot) */}
                <div className="mb-4 text-[#cd0007] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Icon size={40} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
