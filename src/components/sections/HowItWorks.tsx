"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { UploadCloud, Cpu, Users, DollarSign, Clapperboard, PieChart } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds per step

// Helper for polar to cartesian coordinate conversion
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

// Helper to construct SVG Arc path string
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: UploadCloud,
      title: "Submit Project",
      desc: "Filmmakers submit their projects.",
    },
    {
      num: "02",
      icon: Cpu,
      title: "AI Evaluation",
      desc: "Our AI analyzes market potential and ROI.",
    },
    {
      num: "03",
      icon: Users,
      title: "Investor Review",
      desc: "Investors review and choose to invest.",
    },
    {
      num: "04",
      icon: DollarSign,
      title: "Funding",
      desc: "Capital is raised and secured.",
    },
    {
      num: "05",
      icon: Clapperboard,
      title: "Production",
      desc: "The film is produced with full transparency.",
    },
    {
      num: "06",
      icon: PieChart,
      title: "Revenue Sharing",
      desc: "Profits are shared fairly with investors.",
    },
  ];

  // Mobile Radial Carousel State
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.3 });

  // Swipe gesture state
  const touchStartX = useRef<number | null>(null);

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
    setProgressKey((prev) => prev + 1);
  }, [steps.length]);

  const prevStep = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
    setProgressKey((prev) => prev + 1);
  }, [steps.length]);

  const handleSelectStep = (index: number) => {
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  // Autoplay Timer with IntersectionObserver & Reduced Motion Check
  useEffect(() => {
    if (!isSectionInView) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      nextStep();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isSectionInView, nextStep, progressKey]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextStep();
      } else {
        prevStep();
      }
    }
    touchStartX.current = null;
  };

  const ActiveIcon = steps[activeIndex].icon;

  return (
    <section id="how-it-works" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-20"
        >
          <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#B91C1C] mb-2 sm:mb-3">
            How It Works
          </p>
          <h2 className="text-2.5xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
            From project to profit.
          </h2>
        </motion.div>

        {/* ---------------------------------------------------- */}
        {/* 1. MOBILE RADIAL CAROUSEL (Visible strictly on <md)  */}
        {/* ---------------------------------------------------- */}
        <div
          className="block md:hidden relative max-w-[340px] xs:max-w-[370px] mx-auto px-2 select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Circular Track Container */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            
            {/* SVG Segmented Arc Tracks & Active Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 300 300"
            >
              {/* 6 Connected Arc Segments */}
              {steps.map((_, i) => {
                const centerAngle = i * 60;
                const startAngle = centerAngle - 24;
                const endAngle = centerAngle + 24;
                const pathD = describeArc(150, 150, 125, startAngle, endAngle);
                const isActive = i === activeIndex;

                return (
                  <g key={i}>
                    {/* Inactive Subtle Arc Track */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isActive ? "#B91C1C" : "#E5E7EB"}
                      strokeWidth={isActive ? "3.5" : "2"}
                      strokeLinecap="round"
                      className="transition-colors duration-300"
                    />

                    {/* Active Arc Animated Fill Progress Bar */}
                    {isActive && (
                      <motion.path
                        key={`progress-${progressKey}`}
                        d={pathD}
                        fill="none"
                        stroke="#B91C1C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* CENTER CONTENT DISPLAY (Optimized size for generous radial gap) */}
            <div className="relative z-20 w-[155px] h-[155px] xs:w-[170px] xs:h-[170px] rounded-full bg-white border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col items-center justify-center p-3 text-center ring-4 ring-gray-50/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center space-y-1"
                >
                  {/* Step Number Tag */}
                  <span className="text-[9px] font-bold text-[#B91C1C] uppercase tracking-widest bg-red-50/80 px-2 py-0.5 rounded-full">
                    STEP {steps[activeIndex].num}
                  </span>

                  {/* Icon */}
                  <div className="text-[#B91C1C] py-0.5">
                    <ActiveIcon size={22} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs xs:text-sm font-bold text-gray-900 leading-tight tracking-tight max-w-[130px]">
                    {steps[activeIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] xs:text-[11px] text-gray-500 leading-snug max-w-[140px] line-clamp-2">
                    {steps[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 6 RADIAL NODES POSITIONED AROUND THE CIRCLE */}
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const angleRad = ((i * 60 - 90) * Math.PI) / 180;
              const radiusPercent = 41.67; // 125px out of 300px radius
              const leftPercent = 50 + radiusPercent * Math.cos(angleRad);
              const topPercent = 50 + radiusPercent * Math.sin(angleRad);
              const isActive = i === activeIndex;

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => handleSelectStep(i)}
                  aria-label={`View step ${step.num}: ${step.title}`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 focus:outline-none cursor-pointer group ${
                    isActive ? "scale-115" : "hover:scale-105"
                  }`}
                >
                  {/* Circular Icon Node */}
                  <div
                    className={`w-11 h-11 xs:w-12 xs:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md relative ${
                      isActive
                        ? "bg-[#B91C1C] text-white ring-4 ring-red-100 shadow-red-500/20"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-[#B91C1C] hover:text-[#B91C1C]"
                    }`}
                  >
                    <StepIcon size={18} strokeWidth={isActive ? 2.2 : 1.8} />

                    {/* Outer Step Number Label Badge */}
                    <span
                      className={`absolute -bottom-1 -right-1 text-[9px] font-bold px-1.5 py-0.2 rounded-full border shadow-xs transition-colors ${
                        isActive
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Pagination Indicator Dots Below the Radial Carousel */}
          <div className="flex items-center justify-center space-x-2 pt-6 pb-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelectStep(i)}
                aria-label={`Go to step ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-6 h-2 bg-[#B91C1C]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. DESKTOP & TABLET LAYOUT (Strictly UNCHANGED >=md) */}
        {/* ---------------------------------------------------- */}
        <div className="hidden md:block relative">
          {/* Desktop Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-[56px] left-[calc(100%/12)] right-[calc(100%/12)] h-[1.5px] bg-gray-200 z-0 origin-left"
          />

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Number Label */}
                  <span className="text-xs font-bold text-[#B91C1C] mb-3 uppercase tracking-wider block">
                    {step.num}
                  </span>

                  {/* Icon Circle with Ultra-Smooth Liquid Zoom In */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.85,
                      delay: idx * 0.12 + 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 rounded-full bg-white border border-gray-200 group-hover:border-[#B91C1C] flex items-center justify-center text-gray-700 group-hover:text-[#B91C1C] group-hover:bg-red-50/50 transition-colors duration-300 shadow-sm mb-4 relative z-10 ring-4 ring-white"
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </motion.div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5 tracking-tight group-hover:text-[#B91C1C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[170px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
