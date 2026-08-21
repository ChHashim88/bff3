"use client";

import { motion } from "framer-motion";
import VideoPlayerWithLoader from "@/components/ui/VideoPlayerWithLoader";
import TextBlurReveal from "@/components/ui/TextBlurReveal";

export default function ThePlatform() {
  return (
    <section id="our-solution" className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">

        {/* 1. MAIN HEADLINE & MEDIA COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-2xl p-6 sm:p-10 shadow-xs relative"
        >
          {/* Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* LEFT SIDE: Heading, Description & Callout (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              <div className="space-y-3">
                <TextBlurReveal
                  as="h1"
                  containerClassName="block"
                  textClassName="type-label font-extrabold uppercase text-[#CD0007]"
                >
                  THE PLATFORM
                </TextBlurReveal>

                {/* Main Headline */}
                <TextBlurReveal
                  as="h2"
                  stagger={0.03}
                  containerClassName="block"
                  textClassName="type-h2 text-[#111111] leading-tight"
                >
                  A New Model for<br />
                  <span className="text-[#CD0007]">Film Investing.</span>
                </TextBlurReveal>

                {/* Paragraph Content Stack */}
                <div className="space-y-4 text-gray-700">
                  <p className="type-body leading-relaxed">
                    Big Film Fund is building a platform designed to bring structure, transparency, and
                    access to film investing.
                  </p>
                  <p className="type-body font-medium text-[#111111] border-l-2 border-[#CD0007] pl-3">
                    Instead of depending on one-off deals, the platform is built around a growing pipeline of projects.
                  </p>
                  <p className="type-body leading-relaxed">
                    A repeatable investment model engineered for transparency, deal clarity, and portfolio scalability over time.
                  </p>
                </div>
              </div>

              {/* Bottom Accent Callout (Hidden on mobile < 768px) */}
              <div className="hidden md:block pt-4 border-t border-[#EAE5DC]">
                <p className="type-subtitle font-medium text-[#CD0007]">
                  Film finance reimagined as a structured, scalable asset class.
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: Cinematic Video Player (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <VideoPlayerWithLoader
                primarySrc="/bff_video_2_opportunity.mp4"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
