"use client";

import Image from "next/image";
import VideoPlayerWithLoader from "@/components/ui/VideoPlayerWithLoader";
import { ClipboardCheck, Search, Share2, Landmark, TrendingUp, Users, Camera, Target } from "lucide-react";
import { motion } from "framer-motion";
import MobileRadialCarousel from "@/components/ui/MobileRadialCarousel";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: ClipboardCheck,
      title: "Quality Projects",
      description: "A consistent pipeline sourced through industry relationships.",
      image: "/1.jpeg",
      alt: "Quality Projects",
    },
    {
      num: 2,
      icon: Search,
      title: "Disciplined Selection",
      description: "Projects evaluated against clear financial and commercial standards.",
      image: "/2.jpeg",
      alt: "Disciplined Selection",
    },
    {
      num: 3,
      icon: Share2,
      title: "Distribution & Audience",
      description: "Strong distribution capability and audience reach.",
      image: "/3.jpeg",
      alt: "Distribution and Audience Reach World Map",
    },
    {
      num: 4,
      icon: Landmark,
      title: "Financial Discipline",
      description: "Responsible capital and platform management.",
      image: "/4.jpeg",
      alt: "Financial Discipline Pillars",
    },
    {
      num: 5,
      icon: TrendingUp,
      title: "Growing Investor Community",
      description: "A network that grows with every project.",
      image: "/5.jpeg",
      alt: "Growing Investor Community",
    },
  ];

  const summaryItems = [
    { icon: Users, title: "Sourcing", description: "A consistent pipeline sourced through industry relationships.", floatDuration: 4.2, floatDelay: 0 },
    { icon: Search, title: "Selection", description: "Projects evaluated against clear financial and commercial standards.", floatDuration: 4.8, floatDelay: 0.5 },
    { icon: Camera, title: "Distribution", description: "Strong distribution capability and audience reach.", floatDuration: 4.4, floatDelay: 1.0 },
    { icon: Landmark, title: "Financial Discipline", description: "Responsible capital and platform management.", floatDuration: 5.0, floatDelay: 1.5 },
    { icon: TrendingUp, title: "Community", description: "A network that grows with every project.", floatDuration: 4.6, floatDelay: 2.0 },
  ];

  // Duplicate steps array for seamless infinite looping marquee on desktop
  const marqueeSteps = [...steps, ...steps, ...steps];

  return (
    <section id="how-it-works" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-10 sm:space-y-12">

        {/* ── 1. SECTION HEADER & CALLOUT CARD + TOP-RIGHT IMAGE CARD COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT SIDE: Heading, Subtitle & Statement Callout Card (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

            {/* Header Text Stack */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 text-left"
            >
              <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
                BUILT TO SUCCEED
              </h1>

              <h2 className="type-h2 text-[#111111]">
                Five Foundations <span className="text-[#CD0007]">of the Platform</span>
              </h2>

              <p className="type-subtitle font-normal text-gray-700 pt-1">
                Success in film investing requires more than finding good projects.
              </p>
            </motion.div>

            {/* Animated Red Lifeline Reading Divider */}
            <div className="relative w-full h-[2.5px] bg-[#EAE5DC] overflow-hidden rounded-full my-1 shadow-2xs">
              {/* Subtle Red Background Line Track */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#CD0007]/15 via-[#CD0007]/40 to-[#CD0007]/15" />

              {/* Animated Glowing Red Pulse Laser Beam */}
              <motion.div
                animate={{ x: ["-100%", "250%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#CD0007] to-transparent shadow-[0_0_12px_#CD0007]"
              />
            </div>

            {/* Statement Callout Card Under Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 shadow-xs"
            >
              {/* Target Icon Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] shrink-0 shadow-2xs">
                <Target size={28} strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="space-y-1 text-center sm:text-left flex-1">
                <p className="type-body text-gray-800">
                  It requires deal flow, disciplined selection, distribution, financial discipline, and community.
                </p>
                <p className="type-small font-semibold text-[#111111]">
                  Together, these capabilities create a foundation built to scale.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Video Player Card (Matching Opportunity Video Player Size) (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-stretch h-full"
          >
            <VideoPlayerWithLoader
              primarySrc="https://www.dropbox.com/scl/fo/fr0i9s0r31wvmmwctfvf3/AFh6UsocgRbT7qBuWEtkWa8/bff_promo_4_why_bff_will_win_260602_v1.mp4?dl=1&rlkey=d1069gkyon7op9goc3htz7340"
              fallbackSrc="https://www.dropbox.com/scl/fo/fr0i9s0r31wvmmwctfvf3/AFh6UsocgRbT7qBuWEtkWa8/bff_promo_4_why_bff_will_win_260602_v1.mp4?dl=1&rlkey=d1069gkyon7op9goc3htz7340"
              poster="/ggh.jpeg"
              aspectRatioClass="aspect-[16/9] lg:aspect-auto"
            />
          </motion.div>

        </div>

      </div>

      {/* ── 3A. MOBILE INTERACTIVE RADIAL CAROUSEL (ONLY FOR MOBILE BREAKPOINTS < 768px) ── */}
      <div className="block md:hidden px-4 mt-6">
        <MobileRadialCarousel items={steps} badgePrefix="STEP" />
      </div>

      {/* ── 3B. FULL-WIDTH CONTINUOUS SCROLLING MARQUEE (DESKTOP / TABLET ONLY >= 768px) ── */}
      <div className="hidden md:block w-full overflow-hidden relative mt-8 py-4">
        {/* Left Edge Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF7F1] to-transparent z-20 pointer-events-none" />

        {/* Right Edge Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF7F1] to-transparent z-20 pointer-events-none" />

        {/* Infinite Moving Track (Left to Right) */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
          className="flex items-center gap-6 w-max"
        >
          {marqueeSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={`${step.num}-${idx}`}
                className="w-[280px] sm:w-[340px] lg:w-[380px] h-[340px] sm:h-[380px] rounded-2xl border border-[#EAE5DC] bg-[#FAF8F3] relative overflow-hidden shrink-0 shadow-md group hover:border-[#CD0007] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Image Preview */}
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  sizes="380px"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Content Overlay */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">

                  {/* Top Badge Row */}
                  <div className="flex items-center justify-end">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Bottom Text Stack */}
                  <div className="space-y-2">
                    <h3 className="type-h3 text-white font-semibold drop-shadow-md">
                      {step.title}
                    </h3>
                    <p className="type-body text-gray-200 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ── 4. BOTTOM STATEMENT + 5-COLUMN SUMMARY (DESKTOP / TABLET ONLY >= 768px) ── */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mt-10 space-y-6">
        <p className="type-subtitle text-center text-[#111111]">
          Together, these capabilities create a foundation built to scale.
        </p>

        <div className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl shadow-xs overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#EAE5DC] gap-6 lg:gap-0">
            {summaryItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 sm:pt-0 pb-6 sm:pb-0 cursor-pointer ${idx !== 0 ? "lg:pl-6" : ""}`}
                >
                  {/* Floating Container */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: item.floatDuration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: item.floatDelay,
                    }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="flex flex-col items-center text-center w-full group/card"
                  >
                    {/* Icon Badge */}
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
                      whileHover={{ scale: 1.18, rotate: 12 }}
                      className="w-14 h-14 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-4 shadow-2xs group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300"
                    >
                      <Icon size={24} strokeWidth={1.4} />
                    </motion.div>

                    <h4 className="type-h3 text-[#CD0007] mb-1.5 group-hover/card:translate-y-[-2px] transition-transform">
                      {item.title}
                    </h4>
                    <p className="type-small text-gray-700 max-w-[190px]">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
