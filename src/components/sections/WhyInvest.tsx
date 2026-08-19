"use client";

import { Film, Building2, Video, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyInvest() {
  const features = [
    {
      icon: Film,
      title: "Curated Projects",
      description: "Sourced from a broad, differentiated pipeline and screened to produce a curated slate.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Building2,
      title: "Structured Offerings",
      description: "Clear ownership model with simplified, transparent economics aligned to outcomes.",
      floatDuration: 4.8,
      floatDelay: 0.6,
    },
    {
      icon: Video,
      title: "Production & Distribution",
      description: "Developed and brought to market with a focus on audience reach and performance.",
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      icon: TrendingUp,
      title: "Ongoing Portfolio",
      description: "A steady pipeline of opportunities across a growing investor community.",
      floatDuration: 5.1,
      floatDelay: 1.8,
    },
  ];

  return (
    <section id="why-bff" className="py-10 sm:py-14 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Feature Container with Ambient Light Sweep */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden group"
        >
          {/* Subtle Continuous Shimmer Light Sweep Effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-0"
          />

          {/* Card Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="space-y-2">
              <p className="type-label font-medium uppercase text-[#CD0007]">
                WHY BIG FILM FUND
              </p>

            </div>
            <h2 className="type-h2 text-[#111111] leading-tight">
              A Smarter Way to Invest in Film
            </h2>
          </div>

          {/* 4 Feature Columns with Continuous Infinite Asynchronous Floating Motion */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EAE5DC] gap-6 md:gap-0 pt-2 relative z-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 md:pt-0 pb-6 md:pb-0 cursor-pointer ${index !== 0 ? "md:pl-6" : ""
                    }`}
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
                    className="flex flex-col items-center text-center w-full group/card"
                  >
                    {/* Logo Red Icon Badge with Continuous Ambient Pulse Ring & Hover Motion */}
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
                        delay: index * 0.5,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.18, rotate: 12 }}
                      className="w-12 h-12 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-4 shadow-2xs group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300"
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>

                    {/* Logo Red Heading */}
                    <h3 className="type-h3 text-[#CD0007] mb-2 group-hover/card:translate-y-[-2px] transition-transform">
                      {item.title}
                    </h3>

                    {/* Dark Body Text */}
                    <p className="type-small text-gray-700 max-w-[220px]">
                      {item.description}
                    </p>
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
