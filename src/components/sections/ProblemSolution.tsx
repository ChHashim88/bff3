"use client";

import { motion } from "framer-motion";
import { TrendingUp, Lock, Globe, BarChart3, UserX, EyeOff, Coins, Building2 } from "lucide-react";
import VideoPlayerWithLoader from "@/components/ui/VideoPlayerWithLoader";

export default function ProblemSolution() {
  const problemPillars = [
    {
      icon: Lock,
      title: "Restricted",
      desc: "Traditional film finance kept locked behind closed studio doors.",
    },
    {
      icon: Coins,
      title: "Unshared Value",
      desc: "Billions generated at box office without retail participation.",
    },
    {
      icon: Building2,
      title: "Legacy Barriers",
      desc: "Outdated institutional structures blocking modern capital flow.",
    },
  ];

  return (
    <section id="the-problem" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">

        {/* 1. MAIN HEADLINE & MEDIA COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs relative"
        >
          {/* Two-Column Composition with Equal Height Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* LEFT SIDE: Heading, Content Stack & Feature Pillars (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 h-full py-1">

              <div className="space-y-4">
                <h1 className="type-label font-extrabold uppercase text-[#CD0007]">
                  THE PROBLEM
                </h1>

                {/* Main Headline */}
                <h3 className="type-h3 md:type-h2 font-semibold text-[#111111] leading-tight">
                  Millions Watch Movies.<br />
                  <span className="text-[#CD0007]">Almost None Can Invest in Them.</span>
                </h3>

                {/* Main Description */}
                <p className="type-body leading-relaxed text-gray-700">
                  Film has always been a powerful global industry—but film investing has largely
                  remained accessible only to studios, private investors, and industry insiders.
                </p>

                {/* Highlight Callout Box */}
                <div className="bg-[#FAF7F1] border-l-4 border-[#CD0007] rounded-r-xl p-4 sm:p-5 shadow-2xs">
                  <p className="type-body font-medium text-[#111111] leading-relaxed">
                    Audiences create value. Investors rarely share in it.
                  </p>
                </div>

                {/* Evolved Investing Description */}
                <p className="type-body leading-relaxed text-gray-700">
                  At the same time, investing has evolved. Platforms have opened access to opportunities once reserved for institutions.
                </p>
              </div>

              {/* 3 Creative Feature Pillar Cards to Fill Height Perfectly */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {problemPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#FAF7F1] border border-[#EAE5DC] rounded-xl p-3.5 flex flex-col justify-between space-y-2 group hover:border-[#CD0007] hover:bg-white transition-all duration-300 shadow-2xs cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-[#CD0007]">
                        <Icon size={18} strokeWidth={1.6} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#111111]">
                          {pillar.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Accent Callout Banner */}
              <div className="pt-4 border-t border-[#EAE5DC]">
                <p className="type-subtitle font-medium text-[#CD0007]">
                  Film is one of the last major categories ready for this transition.
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: Cinematic Video Player Container (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-center h-full">
              <div className="relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl bg-[#111111] group w-full">
                <VideoPlayerWithLoader
                  primarySrc="/bff_problem.mp4"
                  fallbackSrc="https://www.dropbox.com/scl/fo/fr0i9s0r31wvmmwctfvf3/AKfQfxRvbuMv3M5ojtwG-XU/bff_promo_1_introduction_alt_disco_song_v1.mp4?dl=1&rlkey=d1069gkyon7op9goc3htz7340"
                  poster="/ggh.jpeg"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. THE 2 BOTTOM PROBLEM COMPARISON CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Card 1: While the industry has grown */}
          <div className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden group hover:border-[#CD0007]/50 transition-all space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#CD0007] text-white flex items-center justify-center shrink-0 shadow-md">
                <TrendingUp size={20} />
              </div>
              <h3 className="type-h3 font-bold text-[#CD0007]">
                While the industry has grown:
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] text-[#CD0007] flex items-center justify-center shrink-0 mt-0.5">
                  <Globe size={16} />
                </div>
                <p className="type-body text-gray-700 pt-1">
                  Global demand for film and streaming content continues to expand
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] text-[#CD0007] flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart3 size={16} />
                </div>
                <p className="type-body text-gray-700 pt-1">
                  Billions of dollars are generated across box office, licensing, and streaming
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Access has not kept up */}
          <div className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden group hover:border-[#CD0007]/50 transition-all space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#CD0007] text-white flex items-center justify-center shrink-0 shadow-md">
                <Lock size={20} />
              </div>
              <h3 className="type-h3 font-bold text-[#CD0007]">
                Access has not kept up:
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] text-[#CD0007] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock size={16} />
                </div>
                <p className="type-body text-gray-700 pt-1">
                  Film investing remains opaque and difficult to access
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] text-[#CD0007] flex items-center justify-center shrink-0 mt-0.5">
                  <UserX size={16} />
                </div>
                <p className="type-body text-gray-700 pt-1">
                  Opportunities are typically limited to insiders
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] text-[#CD0007] flex items-center justify-center shrink-0 mt-0.5">
                  <EyeOff size={16} />
                </div>
                <p className="type-body text-gray-700 pt-1">
                  Transparency and structure are often inconsistent and misaligned
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
