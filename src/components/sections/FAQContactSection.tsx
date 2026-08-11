"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [communityEmail, setCommunityEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const teamMembers = [
    {
      name: "Brad Barrett",
      role: "Founder & CEO",
      bio: "Film investment, finance and production.",
      image: "/images/brad.png",
    },
    {
      name: "Stess Susscot",
      role: "COO",
      bio: "20+ years in operations and investor relations.",
      image: "/images/stess.png",
    },
    {
      name: "Matnat Megas",
      role: "Head of Investments",
      bio: "Ex-VC, 10+ years in private equity.",
      image: "/images/matnat.png",
    },
    {
      name: "Priya Koch",
      role: "Head of Tech",
      bio: "AI & Tech, 5+ years in data platform engineering.",
      image: "/images/priya.png",
    },
  ];

  const faqs = [
    {
      question: "What is the film fund?",
      answer:
        "Big Film Fund is an institutional-grade investment platform that enables everyday investors to gain real ownership in feature films with complete, audited gross revenue transparency.",
    },
    {
      question: "Is its investment transparent?",
      answer:
        "Yes, investments are backed by direct ownership structures in project-specific SPVs, ensuring first-dollar gross revenue payouts without hidden net profit deductions.",
    },
    {
      question: "How does the distribution process work?",
      answer:
        "Our AI platform evaluates script data, talent attachments, and distribution models to ensure clear monetization pathways before production begins.",
    },
    {
      question: "How do business make money?",
      answer:
        "Investors receive pro-rata payouts directly from gross revenues generated across theatrical, streaming, international licensing, and ancillary markets.",
    },
    {
      question: "How can I invest?",
      answer:
        "Both everyday retail and accredited investors can participate in curated film offerings with accessible minimum investment amounts.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply join our waitlist to receive early access notifications and investor documentation for upcoming film campaigns.",
    },
  ];

  const handleCommunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (communityEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setCommunityEmail("");
      }, 4000);
    }
  };

  return (
    <div className="space-y-20 py-16 sm:py-24">
      {/* 1. LEADERSHIP / TEAM SECTION */}
      <section id="leadership" className="py-10 sm:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-4 flex flex-col justify-between py-2">
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block">
                  LEADERSHIP | TEAM
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                  Experienced. Proven. Passionate about stories.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1 max-w-sm">
                  Our team brings decades of experience in film financing, tech, production, and venture capital — tested to make film funding transparent.
                </p>
              </div>

              <div className="pt-6">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <span>Meet the Team</span>
                </button>
              </div>
            </div>

            {/* Right 4 Team Cards Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all flex flex-col cursor-pointer group"
                >
                  {/* Photo Container */}
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Member Details */}
                  <div className="p-4 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-gray-700 mb-1.5">
                        {member.role}
                      </p>
                      <p className="text-[10px] text-gray-400 leading-tight">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTION */}
      <section id="faq" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Everything you need to know.
            </h2>
          </div>

          {/* 2-Column FAQ Pill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="glass-card glass-card-hover rounded-3xl p-5 border border-white/90 shadow-sm cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm sm:text-base font-semibold text-gray-900">
                      {item.question}
                    </span>
                    <span className="p-1.5 rounded-full bg-[#cd0007]/10 text-[#cd0007] shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 mt-3">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA CARDS (Dark Community Banner + Light Partner Card) */}
      <section id="contact" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Dark Glass Community Banner */}
            <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-4 max-w-md">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007] block">
                  JOIN THE BFF COMMUNITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  Join our community. Be part of the future of film.
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Stay updated through automated insights, tools, and access stories.
                </p>

                {/* Email Signup Input */}
                {isSubscribed ? (
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-2">
                    <CheckCircle2 size={18} />
                    <span>Welcome to the BFF community!</span>
                  </div>
                ) : (
                  <form onSubmit={handleCommunitySubmit} className="flex flex-col sm:flex-row gap-2 pt-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={communityEmail}
                      onChange={(e) => setCommunityEmail(e.target.value)}
                      className="px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#cd0007] flex-1"
                    />
                    <button
                      type="submit"
                      className="btn-red text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Sign Up</span>
                      <ArrowRight size={15} />
                    </button>
                  </form>
                )}

                <p className="text-[10px] text-slate-500 pt-1">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Light Glass WeFunder Partner Card */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-white/90 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#cd0007]">
                    PARTNER WITH BFF
                  </span>
                  <div className="relative h-16 sm:h-20 w-48 sm:w-64 flex items-center justify-end">
                    <Image
                      src="/wf.png"
                      alt="WeFunder logo"
                      width={560}
                      height={140}
                      className="h-16 sm:h-20 w-auto object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                  Continue to WeFunder
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1 ">
                  See our pitch deck, team updates, financial details & community investment terms directly on WeFunder.
                </p>
              </div>



              {/* Bottom Left Button */}
              <div className="pt-6 relative z-10 flex items-center">
                <a
                  href="https://wefunder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <span>View Campaign</span>
                  <ArrowRight size={15} className="text-gray-700" />
                </a>
              </div>

              {/* Bottom Right Large Laptop & Reel Graphic (wfb.png) */}
              <div className="absolute right-0 bottom-0 w-52 sm:w-64 h-40 sm:h-48 z-0 pointer-events-none flex items-end justify-end overflow-hidden">
                <Image
                  src="/wfb.png"
                  alt="WeFunder Laptop Illustration"
                  width={280}
                  height={200}
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
