"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import WhyInvest from "@/components/sections/WhyInvest";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import FairnessBanner from "@/components/sections/FairnessBanner";
import Opportunity from "@/components/sections/Opportunity";
import FAQContactSection from "@/components/sections/FAQContactSection";
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);
  const handleCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen relative text-gray-900 flex flex-col font-sans selection:bg-[#cd0007] selection:text-white overflow-x-hidden">
      {/* Background Ambient Mesh Light Orbs for Refraction */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#cd0007]/12 blur-[130px]" />
        <div className="absolute top-[32%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute top-[62%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/8 blur-[130px]" />
        <div className="absolute top-[82%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-[#cd0007]/10 blur-[130px]" />
      </div>

      {/* Sticky Header Navigation */}
      <Navigation onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Sections Stack */}
      <main className="flex-grow space-y-0 pb-4 relative z-10">
        {/* Hero Section */}
        <Hero onOpenWaitlist={handleOpenWaitlist} />

        {/* Why Invest Section */}
        <WhyInvest />

        {/* Problem vs Solution Section */}
        <ProblemSolution />

        {/* Stats Strip */}
        <Stats onOpenWaitlist={handleOpenWaitlist} />

        {/* Built For Fairness Banner Section */}
        <FairnessBanner />

        {/* How It Works Section */}
        <HowItWorks />



        {/* Investment Opportunity Section */}
        <Opportunity onOpenWaitlist={handleOpenWaitlist} />

        {/* FAQ & Contact Section */}
        <FAQContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={handleCloseWaitlist}
      />
    </div>
  );
}
