"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import WhyInvest from "@/components/sections/WhyInvest";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ThePlatform from "@/components/sections/ThePlatform";
import Opportunity from "@/components/sections/Opportunity";
import HowWeMakeMoney from "@/components/sections/HowWeMakeMoney";
import HowItWorks from "@/components/sections/HowItWorks";
import ProjectSelection from "@/components/sections/ProjectSelection";
import FoundersClubInvestment from "@/components/sections/FoundersClubInvestment";
import Stats from "@/components/sections/Stats";
import FAQContactSection from "@/components/sections/FAQContactSection";
import CommunityWeFunderSection from "@/components/sections/CommunityWeFunderSection";
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);
  const handleCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#CD0007] selection:text-white">
      {/* Floating Header Navigation */}
      <Navigation onOpenWaitlist={handleOpenWaitlist} activeSection="Home" />

      {/* Main Sections Stack */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenWaitlist={handleOpenWaitlist} />

        {/* 2. Why BFF Section */}
        <WhyInvest />

        {/* 3. The Problem Section */}
        <ProblemSolution />

        {/* 4. The Platform Section */}
        <ThePlatform />

        {/* 5. The Opportunity Section */}
        <Opportunity />

        {/* 6. The Business Model Section */}
        <HowWeMakeMoney />

        {/* 7. Built to Succeed Section */}
        <HowItWorks />

        {/* 8. Project Selection Section */}
        <ProjectSelection />

        {/* 9. Founders Club, Progress to Date, The Investment, Enables & Why Now Section */}
        <FoundersClubInvestment onOpenWaitlist={handleOpenWaitlist} />

        {/* 10. Market Opportunity Stats */}
        <Stats />

        {/* 11. FAQ & Contact Section */}
        <FAQContactSection />

        {/* 12. Community & WeFunder Callout Section */}
        <CommunityWeFunderSection />
      </main>

      {/* 13. Rich Editorial Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={handleCloseWaitlist}
      />
    </div>
  );
}
