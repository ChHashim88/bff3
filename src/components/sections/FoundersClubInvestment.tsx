"use client";

import { Crown, CheckCircle2, ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import VideoPlayerWithLoader from "@/components/ui/VideoPlayerWithLoader";

interface FoundersClubInvestmentProps {
  onOpenWaitlist: () => void;
}

export default function FoundersClubInvestment({ onOpenWaitlist }: FoundersClubInvestmentProps) {
  const whatBeenBuilt = [
    "Project pipeline",
    "Selection framework",
    "Platform foundation",
    "Financial model",
    "Industry relationships",
  ];

  const roundEnables = [
    "Expand the project pipeline",
    "Prepare initial film offerings",
    "Grow the investor community",
    "Launch the platform",
    "Introduce the first investment opportunities",
    "Activate the initial project pipeline",
    "Establish the foundation for long-term platform growth",
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden space-y-12 sm:space-y-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-12 sm:space-y-16">

        {/* ── 1. FOUNDERS CLUB CREATIVE VIDEO SECTION CARD (Matching Opportunity Card Dimensions) ── */}
        <motion.div
          id="founders-club"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs space-y-8 relative overflow-hidden"
        >
          {/* 2-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* LEFT SIDE: Content, Description & CTA (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 h-full">
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
                    FOUNDERS CLUB
                  </h1>
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] shadow-2xs">
                    <Crown size={24} />
                  </div>
                </div>

                <h2 className="type-h2 text-[#111111] leading-tight">
                  Don’t Just Invest in Film. <span className="text-[#CD0007] block sm:inline">Be Part of It.</span>
                </h2>

                <p className="type-body text-gray-700 font-normal leading-relaxed">
                  Big Film Fund brings investors closer to the journey—from development to release.
                </p>

                <p className="type-body text-[#111111] font-medium leading-relaxed pt-1">
                  Early supporters can join the Big Film Fund Founders Club and receive special privileges and offers.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="type-subtitle font-semibold text-[#CD0007]">
                  Invest early. Get closer to the experience.
                </p>
                <button
                  onClick={onOpenWaitlist}
                  className="inline-flex items-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-medium px-6 py-3.5 rounded-full transition-all shadow-md cursor-pointer shrink-0 group active:scale-95"
                >
                  <span>Join Founders Club</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: Cinematic Video Player (~50% width / lg:col-span-6 - Identical Height & Width as Opportunity Card) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <VideoPlayerWithLoader
                primarySrc="https://www.dropbox.com/scl/fi/f2s7m282e70x5248q9z3p/bff_promo_6_founders_club_260611_v2.mp4?rlkey=d1069gkyon7op9goc3htz7340&raw=1"
                fallbackSrc="/bff_problem.mp4"
                poster="/ggh.jpeg"
                aspectRatioClass="aspect-[16/9]"
                objectFitClass="object-cover object-center"
              />
            </div>

          </div>
        </motion.div>

        {/* ── 2. PROGRESS TO DATE (Full Width Block) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs space-y-6 relative overflow-hidden group hover:border-[#CD0007]/50 transition-all"
        >
          <div className="space-y-4">
            <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
              PROGRESS TO DATE
            </h1>

            <h2 className="type-h2 text-[#111111]">
              The Foundation Is Being Built
            </h2>

            <p className="type-body text-gray-700 font-normal leading-relaxed max-w-3xl">
              Big Film Fund is already in active development. The focus has been on building a repeatable and scalable system for sourcing, evaluating, and delivering film investment opportunities.
            </p>

            <div className="pt-4 border-t border-[#EAE5DC] space-y-3">
              <p className="type-label font-extrabold uppercase text-[#CD0007]">
                WHAT’S BEEN BUILT
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {whatBeenBuilt.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-800 bg-[#FAF7F1] border border-[#EAE5DC] rounded-xl p-3 shadow-2xs">
                    <CheckCircle2 size={16} className="text-[#CD0007] shrink-0" />
                    <span className="type-body font-medium text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. THE INVESTMENT & WHAT THIS ROUND ENABLES ── */}
        <motion.div
          id="the-investment"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Stack: THE INVESTMENT */}
            <div className="lg:col-span-6 space-y-3">
              <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
                THE INVESTMENT
              </h1>

              <h2 className="type-h2 text-[#111111]">
                Invest in the Platform. <span className="text-[#CD0007]">Not Just One Film.</span>
              </h2>

              <p className="type-body text-gray-700 font-normal leading-relaxed">
                This offering provides investors with the opportunity to purchase shares in Big Film Fund, Inc.—the company building the platform.
              </p>

              <p className="type-body text-gray-700 font-normal leading-relaxed">
                Your investment supports the development of a scalable business designed to finance and support multiple film projects over time.
              </p>

              <p className="type-small font-medium text-[#111111] border-l-2 border-[#CD0007] pl-3">
                Instead of depending on one movie, the platform is designed around a growing pipeline of projects and investors.
              </p>
            </div>

            {/* Right Stack: WHAT THIS ROUND ENABLES */}
            <div className="lg:col-span-6 space-y-3 lg:pl-4">
              <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
                WHAT THIS ROUND ENABLES
              </h1>

              <h2 className="type-h2 text-[#111111]">
                From Development to Market
              </h2>

              <p className="type-body font-medium text-gray-700">
                Capital raised will help Big Film Fund:
              </p>

              <div className="space-y-2.5 pt-1">
                {roundEnables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-[#CD0007] shrink-0 mt-1" />
                    <span className="type-body text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── 3. WHY NOW? & JOIN US AT THE BEGINNING CALLOUT BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#111111] text-white border border-[#EAE5DC] rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl space-y-8"
        >
          {/* Ambient Logo Red Glow Ring */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#CD0007]/25 blur-3xl pointer-events-none z-0" />

          <div className="relative z-10 space-y-3 max-w-3xl">
            <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
              WHY NOW?
            </h1>

            <h2 className="type-h2 text-white">
              The Foundation Is Ready. <span className="text-[#CD0007]">The Next Step Is Launch.</span>
            </h2>

            <p className="type-body text-gray-300 font-normal leading-relaxed">
              The core model, relationships, and platform design are in place. Now, Big Film Fund is moving from development to live operation—launching the platform, activating its initial pipeline, and introducing its first investment opportunities.
            </p>
          </div>

          <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="type-label font-extrabold uppercase text-[#CD0007]">
                JOIN US AT THE BEGINNING
              </p>
              <h3 className="type-h3 text-white">
                The Next Generation of Film Investing Starts Here.
              </h3>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, x: 3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-[#CD0007] hover:bg-[#A60005] text-white type-cta font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-xl cursor-pointer shrink-0"
            >
              <span>Explore the Opportunity</span>
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
