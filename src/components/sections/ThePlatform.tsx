"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, TrendingUp } from "lucide-react";
import VideoPlayerWithLoader from "@/components/ui/VideoPlayerWithLoader";

export default function ThePlatform() {
  const platformPillars = [
    {
      icon: Layers,
      title: "Pipeline",
      desc: "Built around multiple film projects rather than single-deal risk.",
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      desc: "Standardized terms & clear gross revenue participation.",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      desc: "A repeatable model engineered for long-term growth.",
    },
  ];

  return (
    <section id="our-solution" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
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
                  THE PLATFORM
                </h1>

                {/* Main Headline */}
                <h3 className="type-h3 md:type-h2 font-semibold text-[#111111] leading-tight">
                  A New Model for<br />
                  <span className="text-[#CD0007]">Film Investing.</span>
                </h3>

                {/* Main Description */}
                <p className="type-body leading-relaxed text-gray-700">
                  Big Film Fund is designed to make film investing more accessible, structured, and repeatable.
                </p>

                {/* Highlight Callout Box */}
                <div className="bg-[#FAF7F1] border-l-4 border-[#CD0007] rounded-r-xl p-4 sm:p-5 shadow-2xs">
                  <p className="type-body font-medium text-[#111111] leading-relaxed">
                    Instead of depending on one-off deals, the platform is built around a growing pipeline of projects.
                  </p>
                </div>

                {/* Repeatable Model Description */}
                <p className="type-body leading-relaxed text-gray-700">
                  A repeatable investment model engineered for transparency, deal clarity, and portfolio scalability over time.
                </p>
              </div>

              {/* 3 Creative Feature Pillar Cards to Fill Height Perfectly */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {platformPillars.map((pillar, idx) => {
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
                  Film finance reimagined as a structured, scalable asset class.
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: Cinematic Video Player Container (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-center h-full">
              <div className="relative rounded-2xl border border-[#EAE5DC] overflow-hidden shadow-xl bg-[#111111] group w-full">
                <VideoPlayerWithLoader
                  primarySrc="/bff_platform.mp4"
                  fallbackSrc="https://www.dropbox.com/scl/fi/bff_promo_2_the_platform_260711_v2.mp4?rlkey=d1069gkyon7op9goc3htz7340&raw=1"
                  poster="/ggh.jpeg"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
