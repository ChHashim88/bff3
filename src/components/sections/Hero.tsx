"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 sm:py-20 lg:py-24 overflow-hidden border-b border-gray-100 bg-white">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/herob.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-[82%_50%] sm:object-center transition-all duration-500 scale-105 sm:scale-100"
          />

          {/* Left Side Smooth Fade Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none w-full sm:w-2/3" />
        </motion.div>

        {/* Adorable & Creative Mobile-only Centered Glow Aura Ring */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="block sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B91C1C]/20 blur-3xl pointer-events-none"
        />

        {/* Creative Mobile Subtle Gradient Overlay for High Text Legibility */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/85 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
        <div className="max-w-3xl space-y-7 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-[2.65rem] xs:text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.12] sm:leading-[1.08]"
            >
              Everyday investors.
              <br />
              Real ownership.
              <br />
              <span className="text-[#B91C1C]">Fair profits.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-2xl leading-relaxed pt-1 sm:pt-2"
            >
              Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-3 sm:pt-4"
            >
              <motion.button
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-base sm:text-base font-semibold px-7 sm:px-8 py-4 sm:py-3.5 rounded-sm transition-all duration-200 shadow-md cursor-pointer group text-center"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#why-bff"
                whileHover={{ x: 3 }}
                className="inline-flex items-center justify-center gap-1.5 text-base sm:text-base font-semibold text-gray-900 hover:text-[#B91C1C] px-5 sm:px-4 py-3.5 sm:py-3 transition-colors duration-200 group text-center bg-white/70 sm:bg-transparent rounded-sm border border-gray-200/80 sm:border-0 shadow-xs sm:shadow-none"
              >
                <span>Learn More</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform text-[#B91C1C]" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
