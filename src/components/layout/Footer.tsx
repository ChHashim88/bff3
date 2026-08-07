"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-gray-100">

          {/* Left Column: Brand & Socials */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center group shrink-0 transition-transform duration-300 hover:scale-105">
              <span className="text-3xl sm:text-4xl font-extrabold text-black tracking-tighter">
                BFF
              </span>
            </a>

            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Everyday investors. Real ownership. Fair profits.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2 text-gray-500">
              {/* X / Twitter */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:text-black transition-colors text-xs font-bold">
                X
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:text-black transition-colors text-xs font-bold">
                in
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:text-black transition-colors text-xs font-bold">
                ig
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-black hover:text-black transition-colors text-xs font-bold">
                yt
              </a>
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#why-bff" className="hover:text-black transition-colors">Why BFF</a></li>
              <li><a href="#the-problem" className="hover:text-black transition-colors">The Problem</a></li>
              <li><a href="#our-solution" className="hover:text-black transition-colors">Our Solution</a></li>
              <li><a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a></li>
              <li><a href="#investment" className="hover:text-black transition-colors">Investment</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Right Column: Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Stay updated on new projects and investment opportunities.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-black pt-2">
                <Check size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="relative max-w-sm pt-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 bg-gray-50 border border-gray-200 rounded-sm text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1/2 -translate-y-1/2 mt-[2px] bg-black hover:bg-neutral-800 text-white p-2 rounded-sm transition-colors cursor-pointer"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2024 Big Film Fund. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
