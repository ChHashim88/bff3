"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-white py-12 sm:py-16 lg:py-20 flex flex-col justify-center overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.08]"
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
              className="text-base sm:text-lg lg:text-xl text-gray-600 font-normal max-w-2xl leading-relaxed"
            >
              Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              <motion.button
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3.5 rounded-sm transition-all duration-200 shadow-md cursor-pointer group"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#why-bff"
                whileHover={{ x: 3 }}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-gray-800 hover:text-[#B91C1C] px-4 py-3 transition-colors duration-200 group"
              >
                <span>Learn More</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform text-[#B91C1C]" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] flex items-center justify-center"
            >
              <Image
                src="/herooo.png"
                alt="Big Film Fund Director's Chair, Megaphone, and Film Reels"
                fill
                priority
                className="object-contain object-center scale-105 transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
