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
      staggerChildren: 0.03,
      delayChildren: 0.35,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 6,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative w-full min-h-[calc(85vh-80px)] flex flex-col justify-center py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#FAF7F1]">

      {/* Full Hero Section Background Image with Top Fade-Out Mask */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
        }}
      >
        <Image
          src="/herob.png"
          alt="Big Film Fund Hero Background"
          fill
          priority
          className="object-cover object-right sm:object-center"
          sizes="100vw"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full z-10 relative">
        <div className="max-w-3xl lg:max-w-4xl space-y-6">

          {/* Top Kicker Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="type-label font-medium uppercase text-[#CD0007]"
          >
            A New Way to Invest in the Future of Film
          </motion.p>

          {/* 3-Line SF Pro Display H1 Editorial Headline (Desktop 64px, Mobile 40px, Weight 600, Line height 1.05, Letter spacing -0.02em) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h1 className="type-h1 text-[#111111]">
              <motion.span
                variants={headlineContainerVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {/* Line 1 */}
                <span className="inline-block">
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

                {/* Line 2 (Logo Red "REIMAGINED") */}
                <span className="text-[#CD0007] inline-block">
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
                <span className="inline-block">
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

            {/* Logo Red Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-[45px] h-[2px] bg-[#CD0007] my-4 origin-left"
            />
          </motion.div>

          {/* Subtitle Description Paragraph */}
          <motion.p
            variants={descContainerVariants}
            initial="hidden"
            animate="visible"
            className="type-subtitle text-gray-700 max-w-2xl"
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

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="type-body font-medium text-[#111111]"
          >
            Invest in the platform shaping the next generation of entertainment finance.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
          >
            <motion.a
              href="#the-opportunity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-medium px-8 py-4 rounded-full transition-all duration-200 shadow-sm cursor-pointer group text-center"
            >
              <span>Explore the Opportunity</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={onOpenWaitlist}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#CD0007] hover:bg-[#FDF2F2] border border-[#CD0007] type-cta font-medium px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer group text-center"
            >
              <span>Join Waitlist</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
