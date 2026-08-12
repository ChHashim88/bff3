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
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-center justify-center text-center px-4 group cursor-pointer ${
                idx !== 0 ? 'pt-6 md:pt-0' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#B91C1C] tracking-tight mb-2 group-hover:text-red-700 transition-colors drop-shadow-xs"
              >
                <AnimatedCounter
                  target={item.target}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  isLocale={item.isLocale}
                />
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide uppercase group-hover:text-[#B91C1C] transition-colors">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
