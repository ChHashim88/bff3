"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ClipboardCheck, Search, Share2, Landmark, TrendingUp, Users, Camera, Target } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function HowItWorks() {
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

  // Duplicate steps array for seamless infinite looping marquee on desktop
  const marqueeSteps = [...steps, ...steps, ...steps];

  return (
    <section id="how-it-works" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-10 sm:space-y-12">

        {/* ── 1. SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <p className="type-label font-medium uppercase text-[#CD0007]">
            BUILT TO SUCCEED
          </p>

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
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 shadow-xs"
        >
          {/* Target Icon Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] shrink-0 shadow-2xs">
            <Target size={36} strokeWidth={1.4} />
          </div>

          {/* Text Content */}
          <div className="space-y-2 text-center sm:text-left flex-1">
            <p className="type-body text-gray-800">
              It requires deal flow, disciplined selection, distribution, financial discipline, and community.
            </p>
            <p className="type-subtitle font-medium text-[#111111]">
              Together, these capabilities create a foundation built to scale.
            </p>
          </div>
        </motion.div>

      </div>

      {/* ── 3A. MOBILE INTERACTIVE RADIAL CAROUSEL (ONLY FOR MOBILE BREAKPOINTS < 768px) ── */}
      <div className="block md:hidden px-4 mt-6">
        <MobileRadialCarousel steps={steps} />
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
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-[#CD0007] text-white flex items-center justify-center font-bold text-xs shadow-md">
                      0{step.num}
                    </span>
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

{/* ── MOBILE RADIAL PROCESS CAROUSEL COMPONENT ── */}
function MobileRadialCarousel({ steps }: { steps: Array<any> }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-50px" });

  const AUTO_PLAY_INTERVAL = 4000; // 4 seconds per step
  const totalSteps = steps.length;

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView || isPaused) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTO_PLAY_INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= AUTO_PLAY_INTERVAL) {
        setActiveIndex((prev) => (prev + 1) % totalSteps);
        setProgress(0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, isPaused, activeIndex, totalSteps]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setIsPaused(true);
    // Pause briefly after user manual click, then resume
    setTimeout(() => setIsPaused(false), 6000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swipe left -> next
        handleStepClick((activeIndex + 1) % totalSteps);
      } else {
        // Swipe right -> prev
        handleStepClick((activeIndex - 1 + totalSteps) % totalSteps);
      }
    }
    touchStartX.current = null;
  };

  const activeStep = steps[activeIndex];
  const Icon = activeStep.icon;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full py-4 flex flex-col items-center select-none"
    >
      {/* Main Radial Container (Responsive Aspect Square) */}
      <div className="relative w-[300px] xs:w-[330px] sm:w-[360px] aspect-square flex items-center justify-center my-2">
        
        {/* SVG Segmented Circular Track & Active Arc Fill */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 320 320"
        >
          {/* Base Background Track Circle */}
          <circle
            cx="160"
            cy="160"
            r="125"
            fill="none"
            stroke="#EAE5DC"
            strokeWidth="3"
            strokeDasharray="4 6"
            className="opacity-50"
          />

          {/* Segmented Arcs for each step */}
          {steps.map((_, i) => {
            const radius = 125;
            const circumference = 2 * Math.PI * radius;
            const segmentAngle = 360 / totalSteps;
            const segmentLength = (segmentAngle / 360) * circumference;
            const gap = 12;
            const dashArray = `${segmentLength - gap} ${circumference - (segmentLength - gap)}`;
            const strokeDashoffset = -i * segmentLength;
            const isActive = i === activeIndex;

            return (
              <circle
                key={i}
                cx="160"
                cy="160"
                r={radius}
                fill="none"
                stroke={isActive ? "#CD0007" : "#EAE5DC"}
                strokeWidth={isActive ? "5" : "3"}
                strokeDasharray={dashArray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-500 ease-in-out"
              />
            );
          })}

          {/* Active Arc Dynamic Filling Progress Indicator */}
          {(() => {
            const radius = 125;
            const circumference = 2 * Math.PI * radius;
            const segmentAngle = 360 / totalSteps;
            const segmentLength = (segmentAngle / 360) * circumference - 12;
            const filledLength = (progress / 100) * segmentLength;
            const offset = -activeIndex * ((segmentAngle / 360) * circumference);

            return (
              <circle
                cx="160"
                cy="160"
                r={radius}
                fill="none"
                stroke="#CD0007"
                strokeWidth="6"
                strokeDasharray={`${filledLength} ${circumference - filledLength}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                filter="drop-shadow(0px 0px 5px rgba(205,0,7,0.6))"
                className="transition-all duration-75"
              />
            );
          })()}
        </svg>

        {/* 6 Segment Nodes positioned dynamically around the circle */}
        {steps.map((step, i) => {
          const angleDeg = (i / totalSteps) * 360 - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          const radius = 125;
          const x = 160 + radius * Math.cos(angleRad);
          const y = 160 + radius * Math.sin(angleRad);
          const isActive = i === activeIndex;
          const NodeIcon = step.icon;

          return (
            <button
              key={step.num}
              onClick={() => handleStepClick(i)}
              aria-label={`View step ${step.num}: ${step.title}`}
              style={{
                left: `${(x / 320) * 100}%`,
                top: `${(y / 320) * 100}%`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-500 z-20 cursor-pointer ${
                isActive
                  ? "w-12 h-12 xs:w-13 xs:h-13 bg-[#CD0007] text-white shadow-[0_0_18px_rgba(205,0,7,0.45)] scale-110 border-2 border-white"
                  : "w-9 h-9 xs:w-10 xs:h-10 bg-[#FAF7F1] text-gray-600 border border-[#EAE5DC] hover:border-[#CD0007]/50 hover:text-[#CD0007]"
              }`}
            >
              <div className="relative flex items-center justify-center">
                <NodeIcon size={isActive ? 18 : 15} strokeWidth={isActive ? 2 : 1.5} />
                <span
                  className={`absolute -top-2 -right-2 px-1 py-0.2 rounded-full text-[9px] font-bold ${
                    isActive
                      ? "bg-white text-[#CD0007] shadow-xs"
                      : "bg-[#EAE5DC] text-gray-700"
                  }`}
                >
                  0{step.num}
                </span>
              </div>
            </button>
          );
        })}

        {/* Center Active Content Display Card */}
        <div className="w-[180px] xs:w-[200px] sm:w-[220px] aspect-square rounded-full bg-[#FAF8F3] border border-[#EAE5DC] shadow-lg flex flex-col items-center justify-center p-4 text-center z-10 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-1.5 w-full"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#CD0007] bg-[#CD0007]/10 px-2 py-0.5 rounded-full">
                STEP 0{activeStep.num}
              </span>

              <div className="w-8 h-8 rounded-full bg-[#CD0007]/10 text-[#CD0007] flex items-center justify-center my-0.5">
                <Icon size={16} strokeWidth={1.8} />
              </div>

              <h3 className="type-h3 text-xs xs:text-sm font-semibold text-[#111111] leading-tight line-clamp-2 px-1">
                {activeStep.title}
              </h3>

              <p className="text-[10px] xs:text-[11px] text-gray-600 leading-snug line-clamp-3 px-1">
                {activeStep.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Step Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleStepClick(idx)}
            aria-label={`Go to step ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeIndex
                ? "w-5 h-1.5 bg-[#CD0007]"
                : "w-1.5 h-1.5 bg-[#EAE5DC] hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
