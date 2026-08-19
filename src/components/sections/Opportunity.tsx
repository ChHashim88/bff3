"use client";

import { Film, Cpu, TrendingUp, Sparkles, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Opportunity() {
  const cards = [
    {
      icon: Film,
      title: "Entertainment",
      description: "One of the world's most consumed and culturally resonant forms of media.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Data-driven selection frameworks and scalable digital platform infrastructure.",
      floatDuration: 4.8,
      floatDelay: 0.5,
    },
    {
      icon: TrendingUp,
      title: "Alternative Investing",
      description: "Democratized access to institutional-grade, non-correlated asset classes.",
      floatDuration: 4.4,
      floatDelay: 1.0,
    },
    {
      icon: Sparkles,
      title: "Powerful Synergy",
      description: "Where creative passion meets modern financial discipline and structure.",
      floatDuration: 5.0,
      floatDelay: 1.5,
    },
    {
      icon: Layers,
      title: "A New Path",
      description: "Creating direct, transparent investor access to feature film opportunities.",
      floatDuration: 4.6,
      floatDelay: 2.0,
    },
  ];

  return (
    <section id="the-opportunity" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs"
        >
          {/* Top Header Row: Left Text Content & Right Dot Matrix Wave Grid */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">

            {/* Left Content Block */}
            <div className="space-y-3 max-w-2xl">
              {/* Top Label & Short Logo Red Line */}
              <div className="space-y-2">
                <p className="type-label font-medium uppercase text-[#CD0007]">
                  THE OPPORTUNITY
                </p>
                <div className="w-[30px] h-[2px] bg-[#CD0007]" />
              </div>

              {/* Headline */}
              <h2 className="type-h2">
                <span className="text-[#111111] block">Where Entertainment</span>
                <span className="text-[#CD0007] block">Meets Investing</span>
              </h2>

              {/* Paragraphs */}
              <p className="type-body text-gray-700 max-w-xl">
                Film is one of the world’s most consumed forms of entertainment—yet remains one of the least accessible asset classes for investors.
              </p>

              <div className="pt-2 space-y-2">
                <p className="type-subtitle font-medium text-[#111111]">
                  Big Film Fund brings together three powerful forces:
                </p>
                <p className="type-h3 text-[#CD0007] font-semibold">
                  Entertainment + Technology + Alternative Investing
                </p>
                <p className="type-body font-medium text-[#111111] pt-1">
                  The result: a platform designed to create a new path into film investment.
                </p>
              </div>
            </div>

            {/* Right Side Dot Matrix Grid with Continuous Silky-Smooth Wave Animation (18 cols x 4 rows) */}
            <div className="hidden md:flex flex-col justify-center gap-3.5 py-1 shrink-0 self-center">
              {Array.from({ length: 4 }).map((_, rowIdx) => (
                <div key={rowIdx} className="flex items-center gap-3.5">
                  {Array.from({ length: 18 }).map((_, colIdx) => {
                    const waveDelay = colIdx * 0.08 + rowIdx * 0.04;
                    return (
                      <motion.div
                        key={colIdx}
                        animate={{
                          scale: [1, 1.7, 1],
                          opacity: [0.2, 0.9, 0.2],
                          backgroundColor: ["#111111", "#CD0007", "#111111"],
                          y: [0, -4, 0, 4, 0],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: waveDelay,
                        }}
                        className="w-1.5 h-1.5 rounded-full"
                      />
                    );
                  })}
                </div>
              ))}
            </div>

          </div>

          {/* 5 Feature Cards Grid (1 Row on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-2">
            {cards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-transparent border border-[#EAE5DC] rounded-xl p-5 sm:p-6 flex flex-col items-center text-center shadow-2xs group cursor-pointer hover:shadow-md transition-all duration-300 min-h-[260px] justify-between"
                >
                  {/* Floating Container (Infinite Ambient Motion) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: item.floatDuration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: item.floatDelay,
                    }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="flex flex-col items-center text-center w-full group/card h-full justify-between"
                  >
                    {/* Circular Icon Badge with Continuous Ambient Pulse Ring & Hover Motion */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(205,0,7,0.12)",
                          "0 0 0 10px rgba(205,0,7,0)",
                          "0 0 0 0px rgba(205,0,7,0.12)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: idx * 0.5,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.18, rotate: 12 }}
                      className="w-[64px] h-[64px] rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] my-2 shrink-0 group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300"
                    >
                      <Icon size={30} strokeWidth={1.4} />
                    </motion.div>

                    {/* Card Title & Description */}
                    <div className="space-y-2">
                      <h3 className="type-h3 text-[#CD0007] group-hover/card:translate-y-[-2px] transition-transform">
                        {item.title}
                      </h3>
                      <p className="type-small text-gray-700 max-w-[180px] mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
