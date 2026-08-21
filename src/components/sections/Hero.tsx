"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "@/components/ui/TypewriterText";

interface HeroProps {
  onOpenWaitlist: () => void;
}

// CTA Buttons Container Variant (Triggers after Description typewriter completes)
const ctaContainerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 3.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

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

          {/* Monumental 3-Line H1 Editorial Headline (Character Typewriter + Blinking Cursor) */}
          <div className="space-y-1 w-full text-center sm:text-left">
            <TypewriterText
              as="h1"
              speed={28}
              delay={0.1}
              textClassName="type-h1 text-[#111111] text-center sm:text-left tracking-tight font-extrabold"
            >
              FILM INVESTING.<br />
              <span className="text-[#CD0007]">REIMAGINED</span><br />
              FOR INVESTORS.
            </TypewriterText>
          </div>

          {/* Subtitle Description Paragraph (Character Typewriter + Blinking Cursor) */}
          <TypewriterText
            as="p"
            speed={14}
            delay={1.25}
            textClassName="type-body text-gray-700 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-center sm:text-left"
          >
            Big Film Fund is building a scalable technology platform connecting investors, filmmakers, and audiences with greater structure, transparency, and scale.
          </TypewriterText>

          {/* Dual CTA Buttons (Fades in right after typewriter sequence completes) */}
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
