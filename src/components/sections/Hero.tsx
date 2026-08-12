"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

const FULL_HEADLINE = "Everyday investors. Real ownership. Fair profits.";

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (typedCount < FULL_HEADLINE.length) {
      // Base typing speed: 58ms per character (50-70ms target)
      let delay = 58;

      const currentChar = FULL_HEADLINE[typedCount - 1];

      // Add a natural pause after periods '.' (investors., ownership., profits.)
      if (currentChar === ".") {
        delay = 550; // 550ms natural pause after period
      }

      timeoutId = setTimeout(() => {
        setTypedCount((prev) => prev + 1);
      }, delay);
    } else {
      // Completion state: Hold complete sentence for 2.8 seconds, then restart smoothly
      timeoutId = setTimeout(() => {
        setTypedCount(0);
      }, 2800);
    }

    return () => clearTimeout(timeoutId);
  }, [typedCount]);

  // Character Slicing Helpers for the 3 Line Structure
  const line1Text = FULL_HEADLINE.slice(0, Math.min(typedCount, 19));
  const line2Text =
    typedCount > 19
      ? FULL_HEADLINE.slice(20, Math.min(typedCount, 35))
      : "";
  const line3Text =
    typedCount > 35
      ? FULL_HEADLINE.slice(36, Math.min(typedCount, 49))
      : "";

  const isLine1Active = typedCount <= 19;
  const isLine2Active = typedCount > 19 && typedCount <= 35;
  const isLine3Active = typedCount > 35;

  const paragraphText =
    "Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.";
  const letters = Array.from(paragraphText);

  const paragraphContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 xs:py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-gray-100 bg-white">
      {/* Hero Background Image & Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full h-full"
        >
          <Image
            src="/herob.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-[82%_50%] sm:object-center transition-all duration-700 scale-105 sm:scale-100"
          />

          {/* Left Side Smooth Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent pointer-events-none w-full sm:w-2/3" />
        </motion.div>

        {/* Ambient Mobile Crimson Glow Aura Ring */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="block sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B91C1C]/15 blur-3xl pointer-events-none"
        />

        {/* Mobile Backdrop Mask for Crystal-Clear Text Contrast */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-white/80 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
            className="space-y-5 sm:space-y-8"
          >
            {/* Cinematic Headline with True Character-by-Character Typing & Thin Blinking Cursor */}
            <h1 className="text-[2.15rem] xs:text-4.5xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] sm:leading-[1.08] min-h-[3.6em] sm:min-h-[3.5em]">
              <span className="whitespace-nowrap inline-block">
                {line1Text}
                {isLine1Active && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                    className="inline-block w-[2.5px] h-[0.76em] bg-[#B91C1C] ml-1.5 align-middle rounded-full"
                  />
                )}
              </span>
              <br />
              <span className="whitespace-nowrap inline-block">
                {line2Text}
                {isLine2Active && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                    className="inline-block w-[2.5px] h-[0.76em] bg-[#B91C1C] ml-1.5 align-middle rounded-full"
                  />
                )}
              </span>
              <br />
              <span className="text-[#B91C1C] whitespace-nowrap inline-block">
                {line3Text}
                {isLine3Active && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                    className="inline-block w-[2.5px] h-[0.76em] bg-[#B91C1C] ml-1.5 align-middle rounded-full"
                  />
                )}
              </span>
            </h1>

            {/* Single Single Alphabet (Character-by-Character) Typewriter Animation */}
            <motion.p
              variants={paragraphContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-2xl leading-relaxed pt-1 sm:pt-2 whitespace-pre-wrap"
            >
              {letters.map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  className="inline"
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 pt-3 sm:pt-4"
            >
              <motion.button
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-base font-semibold px-7 sm:px-8 py-4 sm:py-3.5 rounded-sm transition-all duration-200 shadow-[0_10px_25px_rgba(185,28,28,0.22)] active:scale-[0.98] cursor-pointer group text-center"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#why-bff"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-gray-900 hover:text-[#B91C1C] px-6 sm:px-5 py-3.5 sm:py-3 transition-colors duration-200 group text-center bg-white/80 backdrop-blur-md sm:bg-transparent rounded-sm border border-gray-200/90 sm:border-0 shadow-xs sm:shadow-none"
              >
                <span>Learn More</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  className="inline-flex text-[#B91C1C]"
                >
                  <ArrowDown size={16} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
