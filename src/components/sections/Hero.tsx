"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] py-16 sm:py-20 lg:py-28 flex flex-col justify-center overflow-hidden border-b border-gray-200/70">
      {/* Background Image: heroback.jpeg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/heroback.jpeg"
          alt="Big Film Fund Hero Background"
          fill
          priority
          className="object-cover object-right md:object-center opacity-85 sm:opacity-90 md:opacity-100 transition-opacity duration-300"
          sizes="100vw"
        />
      </div>

      {/* Hero Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-2xl space-y-6 sm:space-y-8"
        >
          {/* Creative Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 text-black text-xs sm:text-sm font-medium tracking-wide border border-black/10 backdrop-blur-md shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>Next-Gen Film Investment Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.25] sm:leading-[1.08]"
          >
            Everyday investors.
            <br />
            Real ownership.
            <br />
            <span className="text-black font-bold">Fair profits.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 font-normal max-w-xl leading-relaxed"
          >
            Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-2"
          >
            <motion.button
              onClick={onOpenWaitlist}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-black hover:bg-neutral-800 text-white text-sm sm:text-base font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full sm:rounded-sm transition-all duration-200 shadow-lg cursor-pointer group"
            >
              <span>Join the Waitlist</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="#why-bff"
              whileHover={{ x: 3 }}
              className="inline-flex items-center justify-center gap-1.5 text-sm sm:text-base font-semibold text-gray-900 hover:text-black px-4 py-3 transition-colors duration-200 group rounded-full sm:rounded-none border border-gray-200/80 sm:border-0 bg-white/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none"
            >
              <span>Learn More</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform text-black" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
