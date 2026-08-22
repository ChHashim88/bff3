"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

const LINE_1 = "FILM INVESTING.";
const LINE_2 = "REIMAGINED";
const LINE_3 = "FOR INVESTORS.";

const FULL_DESCRIPTION =
  "Big Film Fund is building a scalable technology platform connecting investors, filmmakers, and audiences with greater structure, transparency, and scale.";

// Character counts
const L1_COUNT = LINE_1.length; // 15
const L2_COUNT = LINE_2.length; // 10
const L3_COUNT = LINE_3.length; // 14
const HEADING_TOTAL = L1_COUNT + L2_COUNT + L3_COUNT; // 39
const DESC_TOTAL = FULL_DESCRIPTION.length; // 153
const TOTAL_HERO_CHARS = HEADING_TOTAL + DESC_TOTAL; // 192

// Glowing Red Cursor Component
function CursorBar() {
  return (
    <span
      className="inline-block w-[3px] sm:w-[4px] h-[0.8em] align-baseline ml-[2px] rounded-full animate-cursor-blink shrink-0 bg-[#CD0007]"
      style={{ boxShadow: "0 0 8px #CD0007" }}
    />
  );
}

// Helper to render word-safe characters up to a given limit
function renderWordSafeChars(
  text: string,
  charLimit: number,
  prefix: string,
  customClass: string = ""
) {
  if (charLimit <= 0) return null;

  const words = text.split(" ");
  let charsRead = 0;

  return words.map((word, wIdx) => {
    const wordSpans: React.ReactNode[] = [];

    for (let cIdx = 0; cIdx < word.length; cIdx++) {
      if (charsRead < charLimit) {
        wordSpans.push(
          <span key={`${prefix}-w-${wIdx}-c-${cIdx}`} className="inline-block transform-gpu">
            {word[cIdx]}
          </span>
        );
        charsRead += 1;
      }
    }

    let typedSpace = false;
    if (wIdx < words.length - 1 && charsRead < charLimit) {
      charsRead += 1;
      typedSpace = true;
    }

    if (wordSpans.length === 0 && !typedSpace) return null;

    return (
      <span key={`${prefix}-w-${wIdx}`} className={`inline-block whitespace-nowrap mr-[0.25em] ${customClass}`}>
        {wordSpans}
      </span>
    );
  });
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [typedCount, setTypedCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // IntersectionObserver to start typewriter on scroll into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Single continuous character ticker
  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      let current = 0;
      intervalId = setInterval(() => {
        current += 1;
        setTypedCount(current);
        if (current >= TOTAL_HERO_CHARS) {
          clearInterval(intervalId);
        }
      }, 38); // Natural human typing speed (38ms/char)
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [hasStarted]);

  // Cursor position determination:
  // 1: Line 1 typing
  // 2: Line 2 typing
  // 3: Line 3 typing
  // 4: Description typing or completed (cursor stays at end of description)
  const isTypingL1 = typedCount > 0 && typedCount <= L1_COUNT;
  const isTypingL2 = typedCount > L1_COUNT && typedCount <= L1_COUNT + L2_COUNT;
  const isTypingL3 = typedCount > L1_COUNT + L2_COUNT && typedCount <= HEADING_TOTAL;
  const isDescPhase = typedCount > HEADING_TOTAL;
  const isComplete = typedCount >= TOTAL_HERO_CHARS;

  return (
    <section
      ref={containerRef}
      className="relative w-[100vw] min-h-[72svh] sm:min-h-[78svh] lg:min-h-[82svh] flex flex-col justify-start items-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 overflow-hidden text-[#111111] select-none mx-auto [margin:0_auto]"
    >
      {/* ── 1. HERO BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white sm:bg-transparent">
        <Image
          src="/backy.jpeg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[70%_top] sm:object-cover sm:object-center scale-125 sm:scale-100 w-full h-full opacity-40 sm:opacity-100 transition-all duration-300"
        />

        {/* Mobile Right Side Soft Edge Fade Layer */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/30 to-transparent sm:hidden" />

        {/* Hero Section Soft Bottom Fade Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-white via-white/25 to-transparent pointer-events-none z-1" />
      </div>

      {/* ── 2. HERO CONTENT ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full z-10 relative my-auto">
        <div className="max-w-3xl mx-auto sm:mx-0 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">

          {/* Monumental 3-Line H1 Editorial Headline (Single Continuous Stream) */}
          <div className="space-y-1 w-full text-center sm:text-left min-h-[110px] sm:min-h-[180px] lg:min-h-[220px]">
            <h1 className="type-h1 text-[#111111] text-center sm:text-left tracking-tight font-extrabold">
              {/* Line 1 */}
              <span className="block text-center sm:text-left">
                {renderWordSafeChars(LINE_1, typedCount, "l1")}
                {isTypingL1 && <CursorBar />}
              </span>

              {/* Line 2 (Brand Red "REIMAGINED") */}
              {typedCount > L1_COUNT && (
                <span className="block text-[#CD0007] text-center sm:text-left">
                  {renderWordSafeChars(LINE_2, typedCount - L1_COUNT, "l2")}
                  {isTypingL2 && <CursorBar />}
                </span>
              )}

              {/* Line 3 */}
              {typedCount > L1_COUNT + L2_COUNT && (
                <span className="block text-center sm:text-left">
                  {renderWordSafeChars(LINE_3, typedCount - (L1_COUNT + L2_COUNT), "l3")}
                  {isTypingL3 && <CursorBar />}
                </span>
              )}
            </h1>
          </div>

          {/* Subtitle Description Paragraph (Continuous Stream - Single Cursor moves here) */}
          <div className="w-full text-center sm:text-left min-h-[50px] sm:min-h-[60px]">
            {isDescPhase && (
              <p className="type-body text-gray-700 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-center sm:text-left">
                {renderWordSafeChars(FULL_DESCRIPTION, typedCount - HEADING_TOTAL, "desc")}
                <CursorBar />
              </p>
            )}
          </div>

          {/* Dual CTA Buttons (Smoothly fades in once description typing completes) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 pt-2 w-full sm:w-auto"
          >
            {/* Primary CTA 1: Explore the Opportunity */}
            <motion.a
              href="#the-opportunity"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-medium px-8 py-4 rounded-full transition-all duration-200 shadow-[0_4px_25px_rgba(205,0,7,0.35)] cursor-pointer group text-center"
            >
              <span>Explore the Opportunity</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Primary CTA 2: Join Waitlist */}
            <motion.button
              onClick={onOpenWaitlist}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-[#CD0007] sm:bg-transparent text-white sm:text-[#CD0007] hover:bg-[#A60005] sm:hover:bg-[#FDF2F2] border border-[#CD0007] text-[14px] sm:text-[15px] font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-200 shadow-md sm:shadow-sm cursor-pointer group w-auto sm:w-auto text-center"
            >
              <span>Join Waitlist</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
