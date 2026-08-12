"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface OpportunityProps {
  onOpenWaitlist: () => void;
}

const FULL_HEADLINE = "Be part of a fairer future for film.";

export default function Opportunity({ onOpenWaitlist }: OpportunityProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(headlineRef, { once: true, margin: "-40px" });
  const [typedCount, setTypedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Character-by-Character Typewriter Effect (Triggers when in viewport)
  useEffect(() => {
    if (!isInView || isFinished) return;

    let timeoutId: NodeJS.Timeout;

    if (typedCount < FULL_HEADLINE.length) {
      let delay = 58; // 58ms per character (within 50-70ms target)
      const currentChar = FULL_HEADLINE[typedCount - 1];

      if (currentChar === ".") {
        delay = 450; // Natural pause at final period
      }

      timeoutId = setTimeout(() => {
        setTypedCount((prev) => prev + 1);
      }, delay);
    } else {
      setIsFinished(true);
    }

    return () => clearTimeout(timeoutId);
  }, [isInView, typedCount, isFinished]);

  const displayedHeadline = FULL_HEADLINE.slice(0, typedCount);

  return (
    <section id="investment" className="relative w-full bg-white border-b border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-16 flex flex-col justify-center"
        >
          <div className="max-w-xl space-y-6">
            <p className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#B91C1C]">
              The Opportunity
            </p>

            {/* Single Headline with Viewport-Triggered Character Typewriter Animation */}
            <h2
              ref={headlineRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight min-h-[2.4em] sm:min-h-[2.2em]"
            >
              <span>{displayedHeadline}</span>
              {isInView && !isFinished && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
                  className="inline-block w-[2.5px] h-[0.78em] bg-[#B91C1C] ml-1.5 align-middle rounded-full"
                />
              )}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed pt-1">
              We&apos;re raising to launch the platform and scale a growing pipeline of projects. Join a community of investors who want real ownership and a fairer way to participate in great films.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                onClick={onOpenWaitlist}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-sm transition-all duration-200 shadow-sm cursor-pointer group"
              >
                <span>Join the Investment Waitlist</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="https://wefunder.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-sm transition-colors duration-200"
              >
                <span>View WeFunder Campaign</span>
                <ExternalLink size={15} className="text-gray-500" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Image Column (Full height edge-to-edge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] relative bg-gray-900 overflow-hidden group"
        >
          <Image
            src="/ggh.jpeg"
            alt="Cinematic Film Production Set with Director and Lighting"
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
