"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FairnessBanner() {
  return (
    <section className="py-4 sm:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card glass-card-hover rounded-3xl overflow-hidden relative min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center justify-between"
        >
          {/* Left Text Content - Ends near middle */}
          <div className="p-8 sm:p-12 lg:p-16 max-w-xl z-20 space-y-3 relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Built for fairness.
              <br />
              Designed for investors.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal max-w-md leading-relaxed pt-1">
              We combine data, technology, and people to build the best stories — together.
            </p>
          </div>

          {/* Full Width bfc.PNG Background */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            {/* Subtle soft gradient fade over text for legibility */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-[#eef2f6]/95 via-[#eef2f6]/70 to-transparent z-10 pointer-events-none" />

            <Image
              src="/bfc.PNG"
              alt="Built for fairness cinema projector"
              fill
              className="object-cover object-right pointer-events-none"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
