"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  isLocale?: boolean;
  label: string;
}

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  isLocale = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isLocale?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 18,
  });

  const displayValue = useTransform(spring, (latest) => {
    const val = Math.round(latest);
    return `${prefix}${isLocale ? val.toLocaleString() : val}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, spring, target]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function Stats() {
  const stats: StatItem[] = [
    { target: 500, suffix: "+", label: "Projects Reviewed" },
    { target: 95, suffix: "%", label: "AI Accuracy" },
    { target: 2350, suffix: "+", isLocale: true, label: "Investors" },
    { target: 50, prefix: "$", suffix: "M+", label: "Target Funding" },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: 2x2 Card Grid on Mobile, 4-Column Strip on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-0 md:divide-x divide-gray-200">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
              className="bg-gray-50/70 md:bg-transparent border border-gray-200/80 md:border-0 rounded-sm p-4 sm:p-6 md:p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#B91C1C]/40 hover:bg-red-50/30 md:hover:bg-transparent transition-all duration-300 shadow-2xs md:shadow-none"
            >
              {/* Stat Number */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2.5xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B91C1C] tracking-tight mb-1 sm:mb-2 group-hover:text-red-700 transition-colors drop-shadow-2xs whitespace-nowrap"
              >
                <AnimatedCounter
                  target={item.target}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  isLocale={item.isLocale}
                />
              </motion.div>

              {/* Stat Label */}
              <div className="text-[10px] xs:text-xs sm:text-sm font-bold text-gray-700 tracking-wider uppercase group-hover:text-[#B91C1C] transition-colors leading-tight max-w-[140px] sm:max-w-none">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
