"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BuiltForFairness() {
  return (
    <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* -------------------------------------------------------- */}
        {/* 1. MOBILE RESPONSIVE CARD VIEW (Visible below lg <1024px) */}
        {/* -------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="block lg:hidden relative rounded-sm border border-gray-200 bg-white p-5 sm:p-7 overflow-hidden shadow-xs flex flex-col justify-center"
        >
          {/* Background Image /bfc.PNG behind text with low opacity */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/bfc.PNG"
              alt="Built for fairness - Film Camera & Reels"
              fill
              priority
              className="object-cover object-right opacity-30 scale-105"
              sizes="100vw"
            />
            {/* Smooth Gradient Overlay over image for max text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30 pointer-events-none" />
          </div>

          {/* Foreground Text Content */}
          <div className="relative z-10 space-y-2.5 sm:space-y-3 max-w-lg">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B91C1C]">
              Built For Fairness
            </p>
            <h2 className="text-2.5xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
              Designed for investors.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
              We combine data, technology, and people to find the best stories — together.
            </p>
          </div>
        </motion.div>

        {/* -------------------------------------------------------- */}
        {/* 2. DESKTOP GRID LAYOUT (Strictly Visible on lg screens >=1024px) */}
        {/* -------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 max-w-xl z-20"
          >
            <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#B91C1C]">
              Built For Fairness
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.12]">
              Designed for investors.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
              We combine data, technology, and people to find the best stories — together.
            </p>
          </motion.div>

          {/* Right Image Column with Smooth Left Fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[260px] lg:h-[300px] w-full flex items-center justify-end overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src="/bfc.PNG"
                alt="Built for fairness - Film Camera & Reels"
                fill
                priority
                className="object-contain object-right"
                sizes="50vw"
              />
              {/* Fade out to left side gradient mask overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none w-2/5" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Ambient background right glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-gray-50/80 to-transparent pointer-events-none z-0" />
    </section>
  );
}
