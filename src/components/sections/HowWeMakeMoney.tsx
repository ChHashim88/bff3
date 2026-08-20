"use client";

import Image from "next/image";
import { Coins, Handshake, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";
import MobileRadialCarousel from "@/components/ui/MobileRadialCarousel";

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
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs space-y-8 relative"
        >
          {/* Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* LEFT SIDE: Heading, Description & Image Card (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              <div className="space-y-3 text-left">
                <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
                  THE BUSINESS MODEL
                </h1>

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

              {/* Image / Video Card on Left Side under content */}
              <div className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[16/9.5] bg-[#111111] group cursor-pointer w-full h-[280px] sm:h-[360px] lg:h-[390px]"
                >
                  <Image
                    src="/ggh.jpeg"
                    alt="The Business Model - Built Beyond a Single Movie Preview"
                    fill
                    className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

                  {/* Text Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 space-y-1">
                    <span className="type-label font-extrabold text-[#CD0007] uppercase tracking-wider">
                      THE BUSINESS MODEL
                    </span>
                    <h3 className="type-h3 font-semibold text-white max-w-md">
                      BUILT BEYOND A SINGLE MOVIE
                    </h3>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* RIGHT SIDE: Mobile Radial Carousel (< 768px) */}
            <div className="block md:hidden pt-4 border-t border-[#EAE5DC] lg:border-t-0">
              <MobileRadialCarousel items={revenueCards} badgePrefix="STREAM" scale={1.12} />
            </div>

            {/* RIGHT SIDE: 4 Revenue Cards in 2x2 Grid with Rhythmic Sequential Pulse Beats (Desktop / Tablet >= 768px) */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full lg:col-span-6">
              {revenueCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#FAF7F1] border border-[#EAE5DC] rounded-2xl p-5 sm:p-6 shadow-2xs group cursor-pointer hover:border-[#CD0007] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center space-y-3 h-full"
                  >
                    {/* Beating Icon Container (Sequenced Beat Animation) */}
                    <motion.div
                      animate={{ scale: [1, 1.12, 1], y: [0, -5, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.55,
                      }}
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF8F3] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] shadow-2xs group-hover:bg-[#CD0007] group-hover:text-white group-hover:border-[#CD0007] transition-colors duration-300"
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>

                    <div className="space-y-1.5">
                      <h3 className="type-h3 font-semibold text-[#CD0007]">
                        {card.title}
                      </h3>
                      <p className="type-small text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Bottom Statement */}
          <div className="pt-6 border-t border-[#EAE5DC] text-center">
            <p className="type-subtitle font-medium text-[#CD0007]">
              The model is designed to grow with the portfolio—not a single film.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
