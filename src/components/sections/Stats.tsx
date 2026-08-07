"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  formatComma?: boolean;
}

function AnimatedCounter({ value, prefix = "", suffix = "", formatComma = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const duration = 2200; // 2.2 seconds morphing
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(start + (end - start) * easeOutCubic);

      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formattedNumber = formatComma ? count.toLocaleString("en-US") : count;

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Reviewed", formatComma: false },
    { value: 95, suffix: "%", label: "AI Accuracy", formatComma: false },
    { value: 2350, suffix: "+", label: "Investors", formatComma: true },
    { value: 50, prefix: "$", suffix: "M+", label: "Target Funding", formatComma: false },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8F9FA] border-b border-gray-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll Reveal Container */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200"
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              whileInView={{ opacity: 1, scale: [0.75, 1.15, 1], y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.08 }}
              className={`flex flex-col items-center justify-center text-center px-4 group cursor-pointer transition-all duration-300 ${
                idx !== 0 ? 'pt-6 md:pt-0' : ''
              }`}
            >
              {/* Orbital Motion + Digit Morphing Counter */}
              <motion.div
                animate={{
                  y: [0, -5, 0, 5, 0],
                  x: [0, 3, 0, -3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5 + idx * 0.8,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.15 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-2 transition-transform"
              >
                <AnimatedCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  formatComma={item.formatComma}
                />
              </motion.div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide uppercase group-hover:text-black transition-colors">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
