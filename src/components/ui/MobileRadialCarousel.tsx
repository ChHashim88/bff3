"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface RadialItem {
  num?: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MobileRadialCarouselProps {
  items: RadialItem[];
  badgePrefix?: string;
  autoPlayInterval?: number;
}

export default function MobileRadialCarousel({
  items,
  badgePrefix = "STEP",
  autoPlayInterval = 4000,
}: MobileRadialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-50px" });

  const totalItems = items.length;
  const touchStartX = useRef<number | null>(null);

  // Auto-play timer with arc fill progress tracking
  useEffect(() => {
    if (!isInView || isPaused) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / autoPlayInterval) * 100, 100);
      setProgress(pct);

      if (elapsed >= autoPlayInterval) {
        setActiveIndex((prev) => (prev + 1) % totalItems);
        setProgress(0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, isPaused, activeIndex, totalItems, autoPlayInterval]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setIsPaused(true);
    // Pause briefly after user tap, then resume
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
        // Swipe Left -> Next item
        handleItemClick((activeIndex + 1) % totalItems);
      } else {
        // Swipe Right -> Prev item
        handleItemClick((activeIndex - 1 + totalItems) % totalItems);
      }
    }
    touchStartX.current = null;
  };

  const activeItem = items[activeIndex];
  const Icon = activeItem.icon;
  const itemNum = activeItem.num ?? activeIndex + 1;

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

          {/* Segmented Arcs for each item */}
          {items.map((_, i) => {
            const radius = 125;
            const circumference = 2 * Math.PI * radius;
            const segmentAngle = 360 / totalItems;
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
            const segmentAngle = 360 / totalItems;
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

        {/* Nodes positioned dynamically around the circle */}
        {items.map((item, i) => {
          const angleDeg = (i / totalItems) * 360 - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          const radius = 125;
          const x = 160 + radius * Math.cos(angleRad);
          const y = 160 + radius * Math.sin(angleRad);
          const isActive = i === activeIndex;
          const NodeIcon = item.icon;
          const numBadge = item.num ?? i + 1;

          return (
            <button
              key={i}
              onClick={() => handleItemClick(i)}
              aria-label={`View ${badgePrefix.toLowerCase()} ${numBadge}: ${item.title}`}
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
                  0{numBadge}
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
                {badgePrefix} 0{itemNum}
              </span>

              <div className="w-8 h-8 rounded-full bg-[#CD0007]/10 text-[#CD0007] flex items-center justify-center my-0.5">
                <Icon size={16} strokeWidth={1.8} />
              </div>

              <h3 className="type-h3 text-xs xs:text-sm font-semibold text-[#111111] leading-tight line-clamp-2 px-1">
                {activeItem.title}
              </h3>

              <p className="text-[10px] xs:text-[11px] text-gray-600 leading-snug line-clamp-3 px-1">
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Step Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleItemClick(idx)}
            aria-label={`Go to item ${idx + 1}`}
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
