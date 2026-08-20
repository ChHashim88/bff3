"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF8F3] border-t border-[#EAE5DC] text-[#111111] pt-16 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-12">

        {/* Top Footer Stack: Logo, Tagline & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#EAE5DC]">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <Image
                src="/logo.png"
                alt="Big Film Fund Logo"
                width={240}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="type-body text-gray-700 max-w-md">
              Big Film Fund is building a technology platform that connects investors, filmmakers, and audiences—bringing greater structure, transparency, and access to film investing.
            </p>
            <p className="type-small text-[#CD0007] font-medium">
              Invest in the platform shaping the next generation of entertainment finance.
            </p>
          </div>

          {/* Quick Links Grid (2 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="type-label font-extrabold uppercase text-[#CD0007]">
                NAVIGATION
              </p>
              <ul className="space-y-2 type-nav text-gray-700">
                <li><a href="#" className="hover:text-[#CD0007] transition-colors">Home</a></li>
                <li><a href="#why-bff" className="hover:text-[#CD0007] transition-colors">Why BFF</a></li>
                <li><a href="#the-problem" className="hover:text-[#CD0007] transition-colors">The Problem</a></li>
                <li><a href="#our-solution" className="hover:text-[#CD0007] transition-colors">Our Solution</a></li>
                <li><a href="#the-platform" className="hover:text-[#CD0007] transition-colors">The Platform</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="type-label font-extrabold uppercase text-[#CD0007]">
                PLATFORM
              </p>
              <ul className="space-y-2 type-nav text-gray-700">
                <li><a href="#the-opportunity" className="hover:text-[#CD0007] transition-colors">The Opportunity</a></li>
                <li><a href="#how-it-works" className="hover:text-[#CD0007] transition-colors">How It Works</a></li>
                <li><a href="#selection-execution" className="hover:text-[#CD0007] transition-colors">Selection & Execution</a></li>
                <li><a href="#the-investment" className="hover:text-[#CD0007] transition-colors">The Investment</a></li>
                <li><a href="#founders-club" className="hover:text-[#CD0007] transition-colors">Founders Club</a></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <p className="type-label font-extrabold uppercase text-[#CD0007]">
                CONNECT
              </p>
              <ul className="space-y-2 type-nav text-gray-700">
                <li><a href="#faq" className="hover:text-[#CD0007] transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-[#CD0007] transition-colors">Contact Us</a></li>
                <li><a href="https://wefunder.com" target="_blank" rel="noreferrer" className="hover:text-[#CD0007] transition-colors">WeFunder Campaign</a></li>
              </ul>
            </div>
          </div>

        </div>


        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EAE5DC]">
          <p className="type-small text-gray-600">
            © {new Date().getFullYear()} Big Film Fund, Inc. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a href="#" className="type-small text-gray-600 hover:text-[#CD0007] transition-colors">Privacy Policy</a>
            <a href="#" className="type-small text-gray-600 hover:text-[#CD0007] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#FAF7F1] border border-[#EAE5DC] flex items-center justify-center text-[#CD0007] hover:bg-[#CD0007] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
