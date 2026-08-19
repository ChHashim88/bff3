"use client";

import { useState } from "react";
import Image from "next/image";
import { ClipboardCheck, Search, Share2, Landmark, TrendingUp, Users, Camera, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(2); // Center card active (index 2: Distribution & Audience)

  const steps = [
    {
      num: 1,
      icon: ClipboardCheck,
      title: "Quality Projects",
      description: "A consistent pipeline sourced through industry relationships.",
      image: "/images/film1.jpg",
      alt: "Quality Projects",
    },
    {
      num: 2,
      icon: Search,
      title: "Disciplined Selection",
      description: "Projects evaluated against clear financial and commercial standards.",
      image: "/images/film2.jpg",
      alt: "Disciplined Selection",
    },
    {
      num: 3,
      icon: Share2,
      title: "Distribution & Audience",
      description: "Strong distribution capability and audience reach.",
      image: "/wfb.png",
      alt: "Distribution and Audience Reach World Map",
    },
    {
      num: 4,
      icon: Landmark,
      title: "Financial Discipline",
      description: "Responsible capital and platform management.",
      image: "/bfc.PNG",
      alt: "Financial Discipline Pillars",
    },
    {
      num: 5,
      icon: TrendingUp,
      title: "Growing Investor Community",
      description: "A network that grows with every project.",
      image: "/2ndd.png",
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

  // Positions relative to center: [-2, -1, 0, 1, 2]
  const positions = [-2, -1, 0, 1, 2];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-10 sm:space-y-14">

        {/* ── 1. SECTION HEADER: BUILT TO SUCCEED ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="space-y-2">
            <p className="type-label font-medium uppercase text-[#CD0007]">
              BUILT TO SUCCEED
            </p>
            <div className="w-[30px] h-[2px] bg-[#CD0007] mx-auto" />
          </div>

          <h2 className="type-h2 text-[#111111]">
            Five Foundations <span className="text-[#CD0007]">of the Platform</span>
          </h2>

          <p className="type-subtitle font-normal text-gray-700 max-w-xl mx-auto pt-1">
            Success in film investing requires more than finding good projects.
          </p>
        </motion.div>

        {/* ── 2. CENTERED STATEMENT CALLOUT BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-8 sm:p-12 lg:p-14 flex flex-col sm:flex-row items-center gap-8 shadow-xs min-h-[160px] sm:min-h-[190px]"
        >
          {/* Target Icon Badge */}
          <div className="w-20 h-20 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] shrink-0 shadow-2xs">
            <Target size={38} strokeWidth={1.4} />
          </div>

          {/* Text Content */}
          <div className="space-y-2.5 text-center sm:text-left flex-1">
            <p className="type-body text-gray-800">
              It requires deal flow, disciplined selection, distribution, financial discipline, and community.
            </p>
            <p className="type-subtitle font-medium text-[#111111]">
              Together, these capabilities create a foundation built to scale.
            </p>
          </div>
        </motion.div>

        {/* ── 3. CINEMATIC 5-CARD 3D BODYGUARD GALLERY STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl py-12 sm:py-16 px-4 sm:px-8 shadow-sm relative overflow-hidden text-[#111111]"
        >
          {/* Minimalist Corner Framing Brackets in Logo Red (#CD0007) */}
          <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[#CD0007] pointer-events-none z-20 opacity-80" />
          <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[#CD0007] pointer-events-none z-20 opacity-80" />
          <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-[#CD0007] pointer-events-none z-20 opacity-80" />
          <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-[#CD0007] pointer-events-none z-20 opacity-80" />

          {/* Section Header Inside Card */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 relative z-10">
            <div className="space-y-2">
              <p className="type-label font-medium uppercase text-[#CD0007]">
                BUILT TO SUCCEED
              </p>
              <div className="w-[30px] h-[2px] bg-[#CD0007] mx-auto" />
            </div>
            <h3 className="type-h3 text-[#111111] uppercase">
              Five Foundations of the Platform
            </h3>
          </div>

          {/* 3D Perspective Bodyguard Stage */}
          <div className="relative w-full max-w-[1340px] mx-auto min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex items-center justify-center perspective-[1200px] z-10 py-4 overflow-hidden">

            {/* Left Edge Creative Vignette Fade-out Mask Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 lg:w-44 bg-gradient-to-r from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent pointer-events-none z-30" />

            {/* Right Edge Creative Vignette Fade-out Mask Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 lg:w-44 bg-gradient-to-l from-[#FAF8F3] via-[#FAF8F3]/80 to-transparent pointer-events-none z-30" />

            {/* Left Arrow Navigation Button */}
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="absolute left-2 sm:left-4 z-40 w-12 h-12 rounded-full bg-white/95 border border-[#EAE5DC] text-[#111111] flex items-center justify-center hover:bg-[#CD0007] hover:text-white hover:border-[#CD0007] transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous step"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right Arrow Navigation Button */}
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="absolute right-2 sm:right-4 z-40 w-12 h-12 rounded-full bg-white/95 border border-[#EAE5DC] text-[#111111] flex items-center justify-center hover:bg-[#CD0007] hover:text-white hover:border-[#CD0007] transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Next step"
            >
              <ChevronRight size={22} />
            </button>

            {/* 5 Cards Positioned in 3D Bodyguard Arc */}
            <div className="flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-4 lg:gap-6 w-full px-8 sm:px-12">
              {positions.map((pos) => {
                const cardIndex = ((activeStep + pos) % 5 + 5) % 5;
                const step = steps[cardIndex];
                const isCenter = pos === 0;

                let rotateY = 0;
                let scale = 1.12;
                let zIndex = 30;
                let opacity = 1;
                let filter = "blur(0px)";

                if (pos === -1) {
                  rotateY = 18;
                  scale = 0.95;
                  zIndex = 20;
                  opacity = 0.92;
                } else if (pos === 1) {
                  rotateY = -18;
                  scale = 0.95;
                  zIndex = 20;
                  opacity = 0.92;
                } else if (pos === -2) {
                  rotateY = 32;
                  scale = 0.82;
                  zIndex = 10;
                  opacity = 0.45;
                  filter = "blur(1.5px)";
                } else if (pos === 2) {
                  rotateY = -32;
                  scale = 0.82;
                  zIndex = 10;
                  opacity = 0.45;
                  filter = "blur(1.5px)";
                }

                return (
                  <motion.div
                    key={`${cardIndex}-${pos}`}
                    onClick={() => setActiveStep(cardIndex)}
                    animate={{
                      rotateY,
                      scale,
                      opacity,
                      filter,
                      z: isCenter ? 60 : -Math.abs(pos) * 50,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 25,
                    }}
                    style={{ zIndex, transformStyle: "preserve-3d" }}
                    whileHover={{
                      scale: isCenter ? 1.15 : scale * 1.05,
                      opacity: isCenter ? 1 : 0.95,
                      filter: "blur(0px)",
                    }}
                    className={`relative shrink-0 w-[170px] xs:w-[200px] sm:w-[240px] md:w-[270px] lg:w-[290px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 shadow-xl ${isCenter
                        ? "border-[#CD0007] shadow-[0_15px_35px_rgba(205,0,7,0.32)] ring-4 ring-[#CD0007]/20"
                        : "border-[#EAE5DC] hover:border-[#CD0007]/80 hover:shadow-2xl"
                      }`}
                  >
                    {/* Card Background Image */}
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 240px, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15" />

                    {/* Step Badge & Title Content Overlay */}
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-10">
                      {/* Top Step Number & Status Badge */}
                      <div className="flex justify-between items-center">
                        <span className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${isCenter ? "bg-[#CD0007] text-white" : "bg-white/90 text-[#111111]"
                          }`}>
                          0{step.num}
                        </span>
                        {isCenter && (
                          <span className="type-label text-white bg-[#CD0007] px-3 py-1 rounded-full shadow-md uppercase font-semibold tracking-wider text-[10px]">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      {/* Bottom Card Title */}
                      <div className="space-y-1">
                        <h4 className="type-body font-semibold text-white leading-tight drop-shadow-md">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Active Step Content Block */}
          <div className="max-w-2xl mx-auto text-center mt-10 space-y-2 relative z-10 px-4 min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <h4 className="type-h3 text-[#CD0007]">
                  {steps[activeStep].title}
                </h4>
                <p className="type-small text-gray-700 max-w-xl mx-auto">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="transition-all duration-300 cursor-pointer p-1"
                  aria-label={`Go to step ${step.num}`}
                >
                  <div className={`h-2 rounded-full transition-all duration-300 ${isActive ? "w-7 bg-[#CD0007]" : "w-2 bg-[#EAE5DC] hover:bg-gray-400"
                    }`} />
                </button>
              );
            })}
          </div>

        </motion.div>

        {/* ── 4. BOTTOM STATEMENT + 5-COLUMN SUMMARY ── */}
        <div className="space-y-6">
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
                    className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 sm:pt-0 pb-6 sm:pb-0 cursor-pointer ${idx !== 0 ? "lg:pl-6" : ""
                      }`}
                  >
                    {/* Floating Container (Infinite Ambient Motion) */}
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
                      {/* Icon Badge with Continuous Ambient Pulse Ring & Hover Motion */}
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

      </div>
    </section>
  );
}
