"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import WhyInvest from "@/components/sections/WhyInvest";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import Opportunity from "@/components/sections/Opportunity";
import FAQContactSection from "@/components/sections/FAQContactSection";
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);
  const handleCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Sticky Header Navigation */}
      <Navigation onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Sections Stack */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenWaitlist={handleOpenWaitlist} />

        {/* Why Invest Section */}
        <WhyInvest />

        {/* Problem vs Solution Section */}
        <ProblemSolution />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Stats Strip */}
        <Stats />

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
