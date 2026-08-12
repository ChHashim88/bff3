"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

const FULL_HEADLINE = "Everyday investors. Real ownership. Fair profits.";
const PARAGRAPH_TEXT =
  "Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.";

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Storytelling Progressive State Sequence
  const [headlineTypedCount, setHeadlineTypedCount] = useState(
    shouldReduceMotion ? FULL_HEADLINE.length : 0
  );
  const [isHeadlineComplete, setIsHeadlineComplete] = useState(
    !!shouldReduceMotion
  );
  const [isParagraphVisible, setIsParagraphVisible] = useState(
    !!shouldReduceMotion
  );
  const [isButtonsVisible, setIsButtonsVisible] = useState(
    !!shouldReduceMotion
  );

  // Step 2: Main Headline Character-by-Character Typing Effect (50-70ms per char)
  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeoutId: NodeJS.Timeout;

    if (headlineTypedCount < FULL_HEADLINE.length) {
      let delay = 58; // 58ms base per character
      const currentChar = FULL_HEADLINE[headlineTypedCount - 1];

      // Natural pause after periods '.' (investors., ownership., profits.)
      if (currentChar === ".") {
        delay = 520;
      }

      timeoutId = setTimeout(() => {
        setHeadlineTypedCount((prev) => prev + 1);
      }, delay);
    } else {
      setIsHeadlineComplete(true);
    }

    return () => clearTimeout(timeoutId);
  }, [headlineTypedCount, shouldReduceMotion]);

  // Step 3: Trigger Supporting Paragraph Reveal AFTER Headline Finishes
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (isHeadlineComplete) {
      const timer = setTimeout(() => {
        setIsParagraphVisible(true);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [isHeadlineComplete, shouldReduceMotion]);

  // Step 4: Trigger CTA Buttons Reveal AFTER Supporting Content Appears
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (isParagraphVisible) {
      const timer = setTimeout(() => {
        setIsButtonsVisible(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isParagraphVisible, shouldReduceMotion]);

  // Character Slicing Helpers for Line-by-Line Headline Display
  const line1Text = FULL_HEADLINE.slice(0, Math.min(headlineTypedCount, 19));
  const line2Text =
    headlineTypedCount > 19
      ? FULL_HEADLINE.slice(20, Math.min(headlineTypedCount, 35))
      : "";
  const line3Text =
    headlineTypedCount > 35
      ? FULL_HEADLINE.slice(36, Math.min(headlineTypedCount, 49))
      : "";

  const isLine1Active = headlineTypedCount <= 19;
  const isLine2Active = headlineTypedCount > 19 && headlineTypedCount <= 35;
  const isLine3Active = headlineTypedCount > 35 && !isHeadlineComplete;

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 xs:py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-gray-100 bg-white">
      {/* -------------------------------------------------------- */}
      {/* STEP 1: HERO ENTRANCE - Clean, Calm Background Visual    */}
      {/* -------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/herob.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-[82%_50%] sm:object-center transition-all duration-700"
          />

          {/* Left Side Smooth Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent pointer-events-none w-full sm:w-2/3" />
        </motion.div>

        {/* STEP 5: HERO VISUAL ATMOSPHERE - Crimson Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="block sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B91C1C]/15 blur-3xl pointer-events-none"
        />

        {/* Mobile Backdrop Mask for Contrast */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-white/80 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-10">
          <div className="space-y-5 sm:space-y-8">
            
            {/* -------------------------------------------------------- */}
            {/* STEP 2: MAIN HEADLINE - True Character Typing & Cursor   */}
            {/* -------------------------------------------------------- */}
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

            {/* -------------------------------------------------------- */}
            {/* STEP 3: SUPPORTING CONTENT - Progressive Blur & Fade     */}
            {/* -------------------------------------------------------- */}
            <motion.p
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={
                isParagraphVisible
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 8, filter: "blur(4px)" }
              }
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-2xl leading-relaxed pt-1 sm:pt-2 min-h-[3.2em] sm:min-h-[3.8em]"
            >
              {PARAGRAPH_TEXT}
            </motion.p>

            {/* -------------------------------------------------------- */}
            {/* STEP 4: CTA BUTTONS - Upward Reveal & Stagger            */}
            {/* -------------------------------------------------------- */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 pt-3 sm:pt-4 min-h-[60px]">
              {/* Primary CTA */}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isButtonsVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-base font-semibold px-7 sm:px-8 py-4 sm:py-3.5 rounded-sm transition-all duration-200 shadow-[0_10px_25px_rgba(185,28,28,0.22)] active:scale-[0.98] cursor-pointer group text-center"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA (Staggered 120ms after Primary) */}
              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isButtonsVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
