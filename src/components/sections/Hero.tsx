"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] sm:h-auto sm:min-h-[calc(100vh-80px)] py-4 sm:py-14 lg:py-16 flex flex-col justify-center overflow-hidden border-b border-white/60">

      {/* 2-Column Hero Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* LEFT COLUMN: Text Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 relative z-10"
          >
            {/* Mobile View Only: Creative Floating Director Chair Watermark Centered in Middle Background */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 -top-4 z-0 lg:hidden flex items-center justify-center pointer-events-none opacity-[0.22] overflow-hidden"
            >
              <div className="relative w-[340px] sm:w-[400px] flex items-center justify-center">
                <Image
                  src="/heroo.png"
                  alt="Director chair background watermark"
                  width={640}
                  height={500}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl scale-110"
                />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.08]"
            >
              <span className="block whitespace-nowrap">Everyday investors.</span>
              <span className="block">Real ownership.</span>
              <span className="block text-[#cd0007] font-extrabold">Fair profits.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-700 font-normal max-w-xl leading-relaxed"
            >
              Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-6 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <motion.button
                  onClick={onOpenWaitlist}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 btn-red text-white text-sm sm:text-base font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer group shadow-lg shadow-gray-900/10"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  href="#why-bff"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center justify-center gap-2 glass-btn text-gray-900 text-sm sm:text-base font-semibold px-6 py-3.5 sm:py-4 rounded-full transition-all cursor-pointer group"
                >
                  <span>Learn More</span>
                  <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform text-gray-700" />
                </motion.a>
              </div>

              {/* Avatar Social Proof Badge with real face photos */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2 overflow-hidden py-0.5">
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-100 shrink-0">
                    <Image src="/images/brad.png" alt="Investor 1" fill className="object-cover object-top" />
                  </div>
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-100 shrink-0">
                    <Image src="/images/stess.png" alt="Investor 2" fill className="object-cover object-top" />
                  </div>
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-100 shrink-0">
                    <Image src="/images/matnat.png" alt="Investor 3" fill className="object-cover object-top" />
                  </div>
                  <div className="relative h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-100 shrink-0">
                    <Image src="/images/priya.png" alt="Investor 4" fill className="object-cover object-top" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-700">
                  Join <span className="font-bold text-gray-900">10,000+</span> future investors
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Floating Director Chair Visual (heroo.png - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-end min-h-[440px]">
            
            {/* Main Floating 3D Director Chair Image (heroo.png) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: {
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative z-10 w-full max-w-lg lg:max-w-xl flex items-center justify-center"
            >
              <Image
                src="/heroo.png"
                alt="Big Film Fund Director Chair"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
