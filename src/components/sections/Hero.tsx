"use client";

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

// Character Reveal Variants: subtle opacity & blur-to-clear transition
const charVariants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

// 1. Headline Container Variant (Sequential Character Stagger)
const headingContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.024,
      delayChildren: 0.1,
    },
  },
};

// 2. Description Container Variant (Triggers after Headline completes)
const descContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.012,
      delayChildren: 1.15,
    },
  },
};

// 3. CTA Buttons Container Variant (Triggers after Description completes)
const ctaContainerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 3.25,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function renderLetterSpans(text: string, prefix: string, customClass: string = "") {
  const words = text.split(" ");
  return words.map((word, wIdx) => (
    <span key={`${prefix}-w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
      {word.split("").map((char, cIdx) => (
        <motion.span
          key={`${prefix}-w-${wIdx}-c-${cIdx}`}
          variants={charVariants}
          className={`inline-block transform-gpu will-change-[opacity,filter] ${customClass}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  ));
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-[100vw] min-h-[72svh] sm:min-h-[78svh] lg:min-h-[82svh] flex flex-col justify-start items-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 overflow-hidden text-[#111111] select-none mx-auto [margin:0_auto]">

      {/* ── 1. HERO BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#FAF7F1] sm:bg-transparent">
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
        <div className="absolute inset-0 bg-gradient-to-l from-[#FAF7F1] via-[#FAF7F1]/30 to-transparent sm:hidden" />

        {/* Hero Section Soft Bottom Fade Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-[#FAF7F1] via-[#FAF7F1]/25 to-transparent pointer-events-none z-1" />
      </div>

      {/* ── 2. HERO CONTENT ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full z-10 relative my-auto">
        <div className="max-w-3xl mx-auto sm:mx-0 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">

          {/* Monumental 3-Line H1 Editorial Headline (Letter-by-Letter Reveal) */}
          <div className="space-y-1 w-full text-center sm:text-left">
            <motion.h1
              variants={headingContainerVariants}
              initial="hidden"
              animate="visible"
              className="type-h1 text-[#111111] text-center sm:text-left tracking-tight font-extrabold"
            >
              {/* Line 1 */}
              <span className="block text-center sm:text-left">
                {renderLetterSpans(LINE_1, "l1")}
              </span>

              {/* Line 2 (Brand Red "REIMAGINED") */}
              <span className="block text-[#CD0007] text-center sm:text-left">
                {renderLetterSpans(LINE_2, "l2")}
              </span>

              {/* Line 3 */}
              <span className="block text-center sm:text-left">
                {renderLetterSpans(LINE_3, "l3")}
              </span>
            </motion.h1>
          </div>

          {/* Subtitle Description Paragraph (Letter-by-Letter Reveal Sequence 2) */}
          <motion.p
            variants={descContainerVariants}
            initial="hidden"
            animate="visible"
            className="type-body text-gray-700 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-center sm:text-left"
          >
            {renderLetterSpans(FULL_DESCRIPTION, "desc")}
          </motion.p>

          {/* Dual CTA Buttons (Sequence 3: Fade & Slide In after text completion) */}
          <motion.div
            variants={ctaContainerVariants}
            initial="hidden"
            animate="visible"
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
