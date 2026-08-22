"use client";

import { useState } from "react";
import { Film, Building2, Video, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Text3DRotate from "@/components/ui/Text3DRotate";

function FlipCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.55, y: 35 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col items-center text-center px-4 sm:px-6 pt-6 md:pt-0 pb-6 md:pb-0 ${index !== 0 ? "md:pl-6" : ""
        }`}
    >
      {/* ── MOBILE VIEW CARD (Transparent Background with Icon, Title & Description) ── */}
      <div className="md:hidden flex flex-col items-center text-center w-full p-4 bg-transparent my-1">
        {/* Logo Red Icon Badge */}
        <div className="w-14 h-14 rounded-full bg-white border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] mb-3 shadow-2xs">
          <Icon size={26} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="type-h3 text-[#CD0007] font-bold tracking-tight mb-2">
          {item.title}
        </h3>

        {/* Description */}
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
        className="hidden md:block w-full [perspective:1000px] group/card cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* 180° 3D Flip Card Inner Container */}
        <div
          className={`relative w-full min-h-[220px] sm:min-h-[240px] rounded-2xl transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : "group-hover/card:[transform:rotateY(180deg)]"
            }`}
        >
          {/* FRONT SIDE (Icon & Title ONLY) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-white border border-[#EAE5DC] shadow-xs group-hover/card:border-[#CD0007]/40 transition-colors flex flex-col items-center justify-center p-6 text-center [backface-visibility:hidden]">
            {/* Live Beating Icon Badge */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.floatDelay,
              }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#CD0007] mb-4 shadow-2xs group-hover/card:bg-[#CD0007] group-hover/card:text-white group-hover/card:shadow-[0_0_15px_rgba(205,0,7,0.4)] transition-all duration-500"
            >
              <Icon size={26} strokeWidth={1.5} />
            </motion.div>

            {/* Title */}
            <h3 className="type-h3 text-[#CD0007] font-bold tracking-tight">
              {item.title}
            </h3>
          </div>

          {/* BACK SIDE (Detailed Description - Pre-rotated 180deg) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-white border border-[#EAE5DC] group-hover/card:border-[#CD0007]/40 shadow-md transition-colors flex flex-col items-center justify-center p-6 text-center overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
            <p className="type-small text-gray-700 leading-relaxed max-w-[220px]">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyInvest() {
  const features = [
    {
      icon: Film,
      title: "Curated Projects",
      description: "Sourced from a broad, differentiated pipeline and screened to produce a curated slate.",
      floatDuration: 4.2,
      floatDelay: 0,
    },
    {
      icon: Building2,
      title: "Structured Offerings",
      description: "Clear ownership model with simplified, transparent economics aligned to outcomes.",
      floatDuration: 4.8,
      floatDelay: 0.6,
    },
    {
      icon: Video,
      title: "Production & Distribution",
      description: "Developed and brought to market with a focus on audience reach and performance.",
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      icon: TrendingUp,
      title: "Ongoing Portfolio",
      description: "A steady pipeline of opportunities across a growing investor community.",
      floatDuration: 5.1,
      floatDelay: 1.8,
    },
  ];

  return (
    <section id="why-bff" className="py-10 sm:py-14 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Single Large Rounded Feature Container with Ambient Light Sweep */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#EAE5DC] rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden"
        >
          {/* Subtle Continuous Shimmer Light Sweep Effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-0"
          />

          {/* Card Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="space-y-2">
              <Text3DRotate
                as="h1"
                containerClassName="block"
                textClassName="type-label font-extrabold uppercase text-[#CD0007]"
              >
                WHY BIG FILM FUND
              </Text3DRotate>
            </div>
            <h2 className="type-h2 text-[#111111] leading-tight">
              A Smarter Way to Invest in Film
            </h2>
          </div>

          {/* 4 Feature Columns with Vertical Dividers (|) & 180° 3D Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EAE5DC] gap-6 md:gap-0 pt-2 relative z-10">
            {features.map((item, index) => (
              <FlipCard key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
