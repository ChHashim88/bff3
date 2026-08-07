import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BFF — Big Film Fund | Everyday Investors. Real Ownership. Fair Profits.",
  description: "Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#B91C1C] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

