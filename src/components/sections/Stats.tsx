"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Globe, Video, TrendingUp, Users } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

function AnimatedMetricValue({
  targetValue,
  isInView,
}: {
  targetValue: string;
  isInView: boolean;
}) {
  const [displayText, setDisplayText] = useState(() => {
    if (targetValue === "$2.8T+") return "$0.0T+";
    if (targetValue === "$100B+") return "$0B+";
    if (targetValue === "$13T → $20T+") return "$0T → $0T+";
    if (targetValue === "$1B+") return "$0B+";
    return targetValue;
  });

  useEffect(() => {
    if (!isInView) return;

    if (targetValue === "$2.8T+") {
      const controls = animate(0, 2.8, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayText(`$${latest.toFixed(1)}T+`),
      });
      return () => controls.stop();
    }

    if (targetValue === "$100B+") {
      const controls = animate(0, 100, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayText(`$${Math.round(latest)}B+`),
      });
      return () => controls.stop();
    }

    if (targetValue === "$13T → $20T+") {
      const controls = animate(0, 1, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (progress) => {
          const v1 = Math.round(progress * 13);
          const v2 = Math.round(progress * 20);
          setDisplayText(`$${v1}T → $${v2}T+`);
        },
      });
      return () => controls.stop();
    }

    if (targetValue === "$1B+") {
      const controls = animate(0, 1, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayText(`$${Math.round(latest)}B+`),
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue]);

  return <span>{displayText}</span>;
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const stats = [
    {
      icon: Globe,
      value: "$2.8T+",
      labelLine1: "Global Entertainment &",
      labelLine2: "Media Industry",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Video,
      value: "$100B+",
      labelLine1: "Annual Film & Video",
      labelLine2: "Production Spend",
      floatDuration: 4.8,
      floatDelay: 0.6,
    },
    {
      icon: TrendingUp,
      value: "$13T → $20T+",
      labelLine1: "Alternative Assets Market",
      subLabel: "(this decade)",
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      icon: Users,
      value: "$1B+",
      labelLine1: "US Equity Crowdfunding",
      labelLine2: "Market",
      floatDuration: 5.1,
      floatDelay: 1.8,
    },
  ];

  // Market Partner Logo Photo Images (l1.jpeg to l6.jpeg)
  const logoImages = [
    { id: 1, src: "/l1.jpeg", alt: "Industry Partner 1" },
    { id: 2, src: "/l2.jpeg", alt: "Industry Partner 2" },
    { id: 3, src: "/l3.jpeg", alt: "Industry Partner 3" },
    { id: 4, src: "/l4.jpeg", alt: "Industry Partner 4" },
    { id: 5, src: "/l5.jpeg", alt: "Industry Partner 5" },
    { id: 6, src: "/l6.jpeg", alt: "Industry Partner 6" },
  ];

  // Quadrupled array for seamless infinite scrolling marquee
  const marqueeItems = [...logoImages, ...logoImages, ...logoImages, ...logoImages];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-8 sm:space-y-12">

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-3"
        >
          <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
            THE MARKET
          </h1>
          <h2 className="type-h2 font-semibold text-[#111111]">
            At the Intersection of a Massive Opportunity
          </h2>
        </motion.div>

        {/* 4 Feature Columns in Rounded Container Card */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#EAE5DC] gap-6 lg:gap-0">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
                      className="w-16 h-16 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-5 shadow-2xs shrink-0 group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:border-[#CD0007] transition-colors duration-300"
                    >
                      <Icon size={28} strokeWidth={1.4} />
                    </motion.div>

                    {/* Logo Red Animated Metric Counter Value */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="type-h3 md:type-h2 font-semibold text-[#CD0007] mb-2 group-hover/card:translate-y-[-2px] transition-transform"
                    >
                      <AnimatedMetricValue targetValue={item.value} isInView={isInView} />
                    </motion.div>

                    {/* Stat Description Label */}
                    <div className="type-small text-gray-700 max-w-[200px] font-normal leading-relaxed">
                      <p>{item.labelLine1}</p>
                      {item.labelLine2 && <p>{item.labelLine2}</p>}
                      {item.subLabel && (
                        <span className="block type-small italic text-gray-500 mt-0.5 font-normal">
                          {item.subLabel}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* ── CONTINUOUS SCROLLING COMPANY LOGO MARQUEE (LEFT TO RIGHT) UNDER STAT CARDS ── */}
      <div className="w-full overflow-hidden relative mt-8 py-2">
        {/* Left & Right Vignette Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#FAF7F1] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#FAF7F1] to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 32,
            ease: "linear",
          }}
          className="flex items-center gap-5 w-max"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`logo-${item.id}-${idx}`}
              className="w-[160px] sm:w-[200px] h-[80px] sm:h-[96px] rounded-2xl border border-[#EAE5DC] bg-[#FAF8F3] hover:border-[#CD0007] transition-all duration-300 shrink-0 shadow-2xs group flex items-center justify-center cursor-pointer overflow-hidden relative"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 160px, 200px"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
