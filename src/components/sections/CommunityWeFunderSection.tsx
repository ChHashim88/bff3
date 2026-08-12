"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  initialDelay?: number;
}

function CreativeTiltCard({ children, className = "", initialDelay = 0 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: initialDelay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function CommunityWeFunderSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* -------------------------------------------------------- */}
          {/* LEFT CARD: Join the BFF Community (Creative Dark Theme) */}
          {/* -------------------------------------------------------- */}
          <CreativeTiltCard
            initialDelay={0}
            className="lg:col-span-8 bg-[#0B0C0E] text-white rounded-sm border border-gray-900 p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[340px] group"
          >
            {/* Ambient Crimson Breathing Glow Aura Ring */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform" }}
              className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#B91C1C]/25 blur-3xl pointer-events-none z-0"
            />

            {/* Dark Card Subtle Background Visual */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none">
              <Image
                src="/bfc.PNG"
                alt="Camera Visual"
                fill
                className="object-cover object-right"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/75 to-transparent" />
            </div>

            {/* Content Header with Subtle Motion */}
            <div className="relative z-10 space-y-4 max-w-xl">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#B91C1C]"
              >
                JOIN THE BFF COMMUNITY
              </motion.p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Join our community.
                <br />
                Be part of the future of film.
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Stay up to date with updates, insights, tools, and access stories.
              </p>
            </div>

            {/* Interactive Form & Subtext */}
            <div className="relative z-10 pt-6 space-y-3">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/70 px-4 py-2.5 rounded-sm shadow-sm"
                >
                  <Check size={16} />
                  <span>Thank you for joining our community!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative max-w-md">
                  <div className="bg-white rounded-sm p-1.5 flex items-center shadow-md border border-gray-200 focus-within:ring-2 focus-within:ring-[#B91C1C] transition-all">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 text-xs sm:text-sm text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-sm transition-all flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer group/btn"
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </form>
              )}

              <p className="text-[10px] sm:text-xs text-gray-400 pl-2">
                We respect your privacy & confidentiality, guaranteed.
              </p>
            </div>
          </CreativeTiltCard>

          {/* -------------------------------------------------------- */}
          {/* RIGHT CARD: Partner with BFF / WeFunder (Light Theme)     */}
          {/* -------------------------------------------------------- */}
          <CreativeTiltCard
            initialDelay={0.15}
            className="lg:col-span-4 bg-white border border-gray-200 rounded-sm p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[340px] group"
          >
            {/* Card Header with Label & Animated WeFunder Logo */}
            <div className="relative z-10 space-y-1">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#B91C1C]"
              >
                PARTNER WITH BFF
              </motion.p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center flex-wrap gap-3 pt-1">
                <span>Continue to</span>
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  <Image
                    src="/wf.png"
                    alt="WeFunder"
                    width={420}
                    height={120}
                    className="h-16 sm:h-24 w-auto object-contain inline-block"
                  />
                </motion.div>
              </h3>
            </div>

            {/* Subtext & Action Button */}
            <div className="relative z-10 pt-4 pb-16 sm:pb-20 space-y-4 max-w-[280px]">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                See how we enable everyday investors to participate in film financing.
              </p>

              <motion.a
                href="https://wefunder.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-red-50/50 text-gray-900 hover:text-[#B91C1C] border border-gray-300 hover:border-[#B91C1C]/40 font-semibold px-4 py-2.5 rounded-sm text-xs shadow-xs transition-all group/btn cursor-pointer w-fit"
              >
                <span>View Campaign</span>
                <ArrowRight size={13} className="text-gray-600 group-hover/btn:text-[#B91C1C] group-hover/btn:translate-x-1 transition-all" />
              </motion.a>
            </div>

            {/* Continuous Floating Film Reel Illustration (wfb.png) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.8,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform" }}
              className="absolute -bottom-1 -right-1 sm:right-1 w-44 sm:w-56 lg:w-64 h-32 sm:h-40 pointer-events-none z-0"
            >
              <Image
                src="/wfb.png"
                alt="WeFunder Campaign Platform Preview & Film Reel"
                fill
                className="object-contain object-bottom object-right drop-shadow-sm"
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
              />
            </motion.div>
          </CreativeTiltCard>

        </div>
      </div>
    </section>
  );
}
