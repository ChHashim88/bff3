"use client";

import { useState } from "react";
import Image from "next/image";
import { Coins, Handshake, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";
import MobileRadialCarousel from "@/components/ui/MobileRadialCarousel";
import TextBlurReveal from "@/components/ui/TextBlurReveal";

function BusinessModelFlipCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center text-center h-full"
    >
      {/* ── MOBILE VIEW CARD (Displays Icon, Title & Description together) ── */}
      <div className="md:hidden flex flex-col items-center text-center w-full p-4 bg-transparent my-1">
        <div className="w-14 h-14 rounded-full bg-[#FAF8F3] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-3 shadow-2xs">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <h3 className="type-h3 text-[#CD0007] font-bold tracking-tight mb-2">
          {item.title}
        </h3>
        <p className="type-small text-gray-700 leading-relaxed max-w-[260px]">
          {item.description}
        </p>
      </div>

      {/* ── DESKTOP 3D FLIP CARD (Icon + Title on Front, Description on Back) ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: item.floatDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: item.floatDelay,
        }}
        className="hidden md:block w-full h-full [perspective:1000px] group/card cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* 180° 3D Flip Card Inner Container */}
        <div
          className={`relative w-full h-full min-h-[190px] sm:min-h-[210px] rounded-2xl transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : "group-hover/card:[transform:rotateY(180deg)]"
            }`}
        >
          {/* FRONT SIDE (Icon & Title ONLY) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#FAF7F1] border border-[#EAE5DC] shadow-xs group-hover/card:border-[#CD0007]/40 transition-colors flex flex-col items-center justify-center p-6 text-center [backface-visibility:hidden]">
            {/* Live Beating Icon Badge */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.floatDelay,
              }}
              className="w-14 h-14 rounded-full bg-[#FAF8F3] flex items-center justify-center text-[#CD0007] mb-4 shadow-2xs group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:shadow-[0_0_15px_rgba(205,0,7,0.4)] transition-all duration-500"
            >
              <Icon size={26} strokeWidth={1.5} />
            </motion.div>

            {/* Title */}
            <h3 className="type-h3 text-[#CD0007] font-bold tracking-tight">
              {item.title}
            </h3>
          </div>

          {/* BACK SIDE (Detailed Description - Pre-rotated 180deg) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#FAF7F1] border border-[#EAE5DC] group-hover/card:border-[#CD0007]/40 shadow-md transition-colors flex flex-col items-center justify-center p-6 text-center overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {/* Ambient Shimmer Sweep Animation */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#CD0007]/5 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Detailed Description Text */}
            <p className="type-small text-gray-700 leading-relaxed max-w-[200px]">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HowWeMakeMoney() {
  const revenueCards = [
    {
      icon: Coins,
      title: "Platform Fees",
      description: "Revenue generated through the investment platform.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Handshake,
      title: "Project Participation",
      description: "Participation across financing and production.",
      floatDuration: 4.8,
      floatDelay: 0.6,
    },
    {
      icon: TrendingUp,
      title: "Performance-Based Upside",
      description: "Potential revenue tied to project performance.",
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      icon: Globe,
      title: "Distribution & Data",
      description: "Additional value created through distribution and platform capabilities.",
      floatDuration: 5.1,
      floatDelay: 1.8,
    },
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF8F3] border border-[#EAE5DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs space-y-8 relative"
        >
          {/* Two-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

            {/* LEFT SIDE: Heading, Description & Image Card (~50% width / lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              <div className="space-y-3 text-left">
                <TextBlurReveal
                  as="h1"
                  containerClassName="block"
                  textClassName="type-label font-extrabold uppercase text-[#CD0007]"
                >
                  THE BUSINESS MODEL
                </TextBlurReveal>

                {/* H2 Headline */}
                <h2 className="type-h2 text-[#111111]">
                  Multiple Revenue <span className="text-[#CD0007]">Streams</span>
                </h2>

                {/* Description */}
                <div className="space-y-2 text-gray-700">
                  <p className="type-body">
                    Big Film Fund isn’t built around the success of one film.
                  </p>
                  <p className="type-body font-medium text-[#111111]">
                    It’s designed as a platform business with multiple revenue streams across a growing pipeline of projects.
                  </p>
                </div>
              </div>

              {/* Image / Video Card on Left Side under content */}
              <div className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-2xl border border-[#EAE5DC] group-hover:border-[#CD0007]/35 overflow-hidden shadow-lg group-hover:shadow-[0_8px_22px_rgba(205,0,7,0.14)] aspect-[16/9] lg:aspect-[16/9.5] bg-[#111111] group cursor-pointer w-full sm:h-[360px] lg:h-[390px] transition-all duration-500"
                >
                  <Image
                    src="/ggh.jpeg"
                    alt="The Business Model - Built Beyond a Single Movie Preview"
                    fill
                    className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

                  {/* Text Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 space-y-1 text-left">
                    <span className="type-label font-extrabold text-[#CD0007] uppercase tracking-wider">
                      THE BUSINESS MODEL
                    </span>
                    <h3 className="type-h3 font-semibold text-white max-w-md">
                      BUILT BEYOND A SINGLE MOVIE
                    </h3>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* RIGHT SIDE: Mobile Radial Carousel (< 768px) */}
            <div className="block md:hidden pt-4 border-t border-[#EAE5DC] lg:border-t-0">
              <MobileRadialCarousel items={revenueCards} badgePrefix="STREAM" scale={1.12} />
            </div>

            {/* RIGHT SIDE: 4 Revenue Cards in 2x2 Grid with 180° 3D Flip Cards (Desktop / Tablet >= 768px) */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full lg:col-span-6">
              {revenueCards.map((card, idx) => (
                <BusinessModelFlipCard key={idx} item={card} index={idx} />
              ))}
            </div>

          </div>



        </motion.div>

      </div>
    </section>
  );
}
