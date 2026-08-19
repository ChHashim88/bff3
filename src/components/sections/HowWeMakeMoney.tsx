"use client";

import Image from "next/image";
import { Play, Coins, Handshake, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function HowWeMakeMoney() {
  const revenueCards = [
    {
      icon: Coins,
      title: "Platform Fees",
      description: "Revenue generated through the investment platform.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Handshake,
      title: "Project Participation",
      description: "Participation across financing and production.",
      floatDuration: 4.8,
      floatDelay: 0.6,
    },
    {
      icon: TrendingUp,
      title: "Performance-Based Upside",
      description: "Potential revenue tied to project performance.",
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      icon: Globe,
      title: "Distribution & Data",
      description: "Additional value created through distribution and platform capabilities.",
      floatDuration: 5.1,
      floatDelay: 1.8,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs relative"
        >
          {/* Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* LEFT SIDE: Heading, Description & Cinematic Image (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">

              <div className="space-y-3">
                {/* Top Label & Short Logo Red Line */}
                <div className="space-y-2">
                  <p className="type-label font-medium uppercase text-[#CD0007]">
                    THE BUSINESS MODEL
                  </p>
                  <div className="w-[30px] h-[2px] bg-[#CD0007]" />
                </div>

                {/* H2 Headline */}
                <h2 className="type-h2 text-[#111111]">
                  Built Beyond a Single Movie
                </h2>

                {/* Description */}
                <div className="space-y-2 text-gray-700">
                  <p className="type-body">
                    Big Film Fund isn’t built around the success of one film.
                  </p>
                  <p className="type-body font-medium text-[#111111]">
                    It’s designed as a platform business with multiple revenue streams across a growing pipeline of projects.
                  </p>
                </div>
              </div>

              {/* Left Cinematic Image Card */}
              <div className="pt-2 flex-grow flex items-end">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl aspect-[16/9] bg-[#111111] group cursor-pointer w-full min-h-[280px] sm:min-h-[320px]"
                >
                  <Image
                    src="/ggh.jpeg"
                    alt="The Business Model - Built Beyond a Single Movie Preview"
                    fill
                    className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

                  {/* Play Button & Overlay */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center text-white shadow-xl group-hover:bg-[#CD0007] group-hover:border-[#CD0007] transition-all duration-300"
                    >
                      <Play size={26} className="fill-white translate-x-0.5" />
                    </motion.div>
                    <p className="type-label font-medium text-white/90 uppercase">
                      THE BUSINESS MODEL
                    </p>
                    <h3 className="type-h3 text-white max-w-md">
                      BUILT BEYOND A SINGLE MOVIE
                    </h3>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* RIGHT SIDE: 4 Revenue Cards in 2x2 Grid (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full pt-2 lg:pt-0">
              {revenueCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    className="bg-transparent border border-[#EAE5DC] rounded-xl p-5 sm:p-6 shadow-2xs group cursor-pointer hover:shadow-md transition-all duration-300 flex items-center gap-4 h-full min-h-[160px]"
                  >
                    {/* Floating Container (Infinite Ambient Motion) */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: card.floatDuration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: card.floatDelay,
                      }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="flex items-center gap-4 w-full h-full group/card"
                    >
                      {/* Left Icon Badge (~56px) with Continuous Ambient Pulse Ring & Hover Motion */}
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
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] shrink-0 group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300"
                      >
                        <Icon size={26} strokeWidth={1.4} />
                      </motion.div>

                      {/* Right Text Content */}
                      <div className="space-y-1 overflow-hidden">
                        <h3 className="type-h3 text-[#CD0007] group-hover/card:translate-y-[-1px] transition-transform">
                          {card.title}
                        </h3>
                        <p className="type-small text-gray-700 leading-normal">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Bottom Statement */}
          <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-center">
            <p className="type-subtitle font-medium text-[#CD0007]">
              The model is designed to grow with the portfolio—not a single film.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
