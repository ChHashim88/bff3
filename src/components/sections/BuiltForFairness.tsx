"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BuiltForFairness() {
  return (
    <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-xl z-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.12]">
              Built for fairness.
              <br />
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[260px] sm:h-[340px] lg:h-[400px] w-full flex items-center justify-end overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src="/bfc.PNG"
                alt="Built for fairness - Film Camera & Reels"
                fill
                priority
                className="object-contain object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Fade out to left side gradient mask overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none w-1/2 sm:w-2/5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient background right glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-gray-50/80 to-transparent pointer-events-none z-0" />
    </section>
  );
}
