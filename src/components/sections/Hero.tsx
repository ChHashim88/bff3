"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenWaitlist: () => void;
}

const LINE_1_WORDS = ["FILM", "INVESTING."];
const LINE_2_WORDS = ["REIMAGINED"];
const LINE_3_WORDS = ["FOR", "INVESTORS."];

const FULL_DESCRIPTION =
  "Big Film Fund is building a technology platform that connects investors, filmmakers, and audiences—bringing greater structure, transparency, and access to film investing.";
const DESC_WORDS = FULL_DESCRIPTION.split(" ");

// Super Smooth Framer Motion Stagger Variants
const headlineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const descContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.45,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-full min-h-[87vh] sm:min-h-[95vh] flex flex-col justify-start items-center pt-24 sm:pt-28 lg:pt-32 pb-12 overflow-hidden text-[#111111] select-none">

      {/* ── 1. HERO BACKGROUND IMAGE (MOBILE VIEW SUBTLE RIGHT EDGE FADE) ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#FAF7F1] sm:bg-transparent">
        <Image
          src="/backy.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-[100%_top] sm:object-top w-full h-full opacity-85 sm:opacity-100 [mask-image:linear-gradient(to_left,#000_75%,transparent_98%)] sm:[mask-image:none] transition-all duration-300"
        />

        {/* Mobile Right Side Subtle Soft Edge Fade Layer */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#FAF7F1] via-[#FAF7F1]/30 to-transparent sm:hidden" />

        {/* Hero Section Soft Bottom Fade Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-[#FAF7F1] via-[#FAF7F1]/60 to-transparent pointer-events-none z-1" />
      </div>

      {/* ── 2. HERO CONTENT (CENTERED ON MOBILE, LEFT-ALIGNED ON DESKTOP) ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full z-10 relative my-auto">
        <div className="max-w-3xl mx-auto sm:mx-0 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">

          {/* Top Kicker Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="type-label font-extrabold uppercase text-[#CD0007] text-center sm:text-left"
          >
            A New Way to Invest in the Future of Film
          </motion.p>

          {/* Monumental 3-Line H1 Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 w-full text-center sm:text-left"
          >
            <h1 className="type-h1 text-[#111111] text-center sm:text-left tracking-tight font-extrabold">
              <motion.span
                variants={headlineContainerVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-center sm:text-left"
              >
                {/* Line 1 */}
                <span className="inline-block text-center sm:text-left">
                  {LINE_1_WORDS.map((word, i) => (
                    <motion.span
                      key={`l1-${i}`}
                      variants={wordVariants}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <br />

                {/* Line 2 (Brand Red "REIMAGINED") */}
                <span className="text-[#CD0007] inline-block text-center sm:text-left">
                  {LINE_2_WORDS.map((word, i) => (
                    <motion.span
                      key={`l2-${i}`}
                      variants={wordVariants}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <br />

                {/* Line 3 */}
                <span className="inline-block text-center sm:text-left">
                  {LINE_3_WORDS.map((word, i) => (
                    <motion.span
                      key={`l3-${i}`}
                      variants={wordVariants}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle Description Paragraph 1 */}
          <motion.p
            variants={descContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden sm:block type-body text-gray-700 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-center sm:text-left"
          >
            {DESC_WORDS.map((word, index) => (
              <motion.span
                key={`desc-${index}`}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Subtitle Description Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="type-body font-medium text-[#111111] text-[15px] sm:text-[17px] leading-relaxed max-w-lg text-center sm:text-left"
          >
            Invest in the platform shaping the next generation of entertainment finance.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
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

            {/* Primary CTA 2: Join Waitlist (Solid Red on Mobile, Original Transparent Outline on Desktop) */}
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
