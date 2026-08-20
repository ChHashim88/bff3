"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Film } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
    y: 8,
    filter: "blur(6px)",
  },
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
  // Cursor Parallax Hook for Ultra-Smooth 3D Perspective Shift
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);
  const glowX = useSpring(useTransform(mouseX, [-300, 300], [-30, 30]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-300, 300], [-30, 30]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-[100svh] flex flex-col justify-between items-center py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#FAF7F1] text-[#111111] select-none">

      {/* ── 1. CLEAN THEME BACKGROUND (#FAF7F1) ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#FAF7F1]">
        {/* Subtle Architectural Grid Field */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      {/* ── 2. HERO CONTENT & SIGNATURE VISUAL GRID ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full z-10 relative my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Editorial Headline, Descriptions & Dual CTAs (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">

            {/* Top Kicker Label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="type-label font-extrabold uppercase text-[#CD0007]"
            >
              A New Way to Invest in the Future of Film
            </motion.p>

            {/* Monumental 3-Line H1 Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 w-full"
            >
              <h1 className="type-h1 text-[#111111] text-center lg:text-left tracking-tight font-extrabold">
                <motion.span
                  variants={headlineContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-center lg:text-left"
                >
                  {/* Line 1 */}
                  <span className="inline-block text-center lg:text-left">
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
                  <span className="text-[#CD0007] inline-block text-center lg:text-left">
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
                  <span className="inline-block text-center lg:text-left">
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
              className="hidden sm:block type-body text-gray-700 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-center lg:text-left"
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
              className="type-body font-medium text-[#111111] text-[15px] sm:text-[17px] leading-relaxed max-w-lg text-center lg:text-left"
            >
              Invest in the platform shaping the next generation of entertainment finance.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto"
            >
              {/* Primary CTA 1: Explore the Opportunity */}
              <motion.a
                href="#the-opportunity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-medium px-8 py-4 rounded-full transition-all duration-200 shadow-md cursor-pointer group text-center"
              >
                <span>Explore the Opportunity</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Primary CTA 2: Join Waitlist */}
              <motion.button
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#CD0007] hover:bg-[#FDF2F2] border border-[#CD0007] type-cta font-medium px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer group w-full sm:w-auto text-center"
              >
                <span>Join Waitlist</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: SIGNATURE 3D CINEMATIC INVESTMENT UNIVERSE (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full relative perspective-[1200px]">
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[4/4.2] flex items-center justify-center"
            >

              {/* Panel 1: Solid Theme Cream Base Frame (Background Layer) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[85%] h-[75%] rounded-3xl bg-[#FAF8F3] border border-[#EAE5DC] shadow-lg flex flex-col justify-between p-6 transform -rotate-6 translate-z-[-40px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#CD0007]" />
                    <span className="text-[10px] font-bold tracking-widest text-[#111111]/60 uppercase">ASSET STREAM</span>
                  </div>
                  <Film size={18} className="text-[#CD0007]/40" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-3/4 rounded-full bg-[#EAE5DC]" />
                  <div className="h-1.5 w-1/2 rounded-full bg-[#EAE5DC]" />
                </div>
              </motion.div>

              {/* Panel 2: Floating Translucent Glass Film Frame (Midground Layer) */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute w-[90%] h-[78%] rounded-3xl bg-[#FAF7F1]/90 border border-[#EAE5DC] backdrop-blur-2xl shadow-xl flex flex-col justify-between p-6 sm:p-7 transform rotate-3 translate-z-[10px]"
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-extrabold tracking-wider text-[#CD0007] uppercase">
                    CAPITAL & CREATIVITY
                  </span>
                  <Shield size={18} className="text-[#CD0007]/60" />
                </div>

                <div className="relative z-10 my-auto py-3 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2.5">
                    <span className="text-xs text-gray-600">Structured Pipeline</span>
                    <span className="text-xs font-semibold text-[#111111]">Curated Selection</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2.5">
                    <span className="text-xs text-gray-600">Gross Revenue Share</span>
                    <span className="text-xs font-semibold text-[#CD0007]">Transparent Distribution</span>
                  </div>
                </div>

                <div className="flex items-center justify-between relative z-10 pt-1">
                  <span className="text-[11px] text-gray-600">BFF Platform Architecture</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]" />
                </div>
              </motion.div>

              {/* Panel 3: Foreground Glass Cinema Card with Image Preview */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-[82%] h-[68%] rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-2xl bg-black group cursor-pointer"
              >
                <Image
                  src="/ggh.jpeg"
                  alt="Big Film Fund Investment Platform Preview"
                  fill
                  priority
                  className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 300px, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Glowing Laser Energy Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CD0007] to-transparent shadow-[0_0_15px_#CD0007]" />

                <div className="relative z-10 h-full flex flex-col justify-end p-5 space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase text-white/90 tracking-wider">
                    {/* <Sparkles size={12} className="text-[#CD0007]" /> */}
                    <span>CINEMATIC INVESTMENT PORTAL</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    Structured Film Portfolios
                  </h4>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* ── 3. SUBTLE MINIMALIST SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-20 flex flex-col items-center gap-2 cursor-pointer pb-2 sm:pb-4 group"
        onClick={() => {
          const el = document.getElementById("why-bff");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#111111]/50 group-hover:text-[#CD0007] transition-colors uppercase">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-9 bg-[#EAE5DC] rounded-full overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#CD0007] to-transparent shadow-[0_0_8px_#CD0007]"
          />
        </div>
      </motion.div>

    </section>
  );
}
