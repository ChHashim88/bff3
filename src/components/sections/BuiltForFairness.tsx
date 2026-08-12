"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BuiltForFairness() {
  return (
    <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden py-10 sm:py-16 lg:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* -------------------------------------------------------- */}
        {/* 1. MOBILE RESPONSIVE CARD VIEW (Visible below lg <1024px) */}
        {/* -------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block lg:hidden relative rounded-sm border border-gray-200 bg-white p-6 xs:p-8 sm:p-10 overflow-hidden shadow-xs flex flex-col justify-center min-h-[260px]"
        >
          {/* Background Image /bfc.PNG behind text with low opacity */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/bfc.PNG"
              alt="Built for fairness - Film Camera & Reels"
              fill
              priority
              className="object-cover object-right opacity-25 scale-105"
              sizes="100vw"
            />
            {/* Smooth Gradient Overlay over image for max text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30 pointer-events-none" />
          </div>

          {/* Foreground Text Content */}
          <div className="relative z-10 space-y-3.5 max-w-lg">
            <h2 className="text-3.5xl xs:text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-[1.08]">
              Built for fairness.
              <br />
              Designed for investors.
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 font-semibold leading-relaxed">
              We combine data, technology, and people to find the best stories — together.
            </p>
          </div>
        </motion.div>

        {/* -------------------------------------------------------- */}
        {/* 2. DESKTOP GRID LAYOUT (Strictly Visible on lg screens >=1024px) */}
        {/* -------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 max-w-2xl z-20"
          >
            <h2 className="text-6.5xl lg:text-7.5xl xl:text-8xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
              Built for fairness.
              <br />
              Designed for investors.
            </h2>
            <p className="text-xl lg:text-2.5xl text-gray-700 font-semibold leading-relaxed max-w-xl">
              We combine data, technology, and people to find the best stories — together.
            </p>
          </motion.div>

          {/* Right Image Column with Smooth Left Fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[380px] lg:h-[460px] w-full flex items-center justify-end overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src="/bfc.PNG"
                alt="Built for fairness - Film Camera & Reels"
                fill
                priority
                className="object-contain object-right"
                sizes="40vw"
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
