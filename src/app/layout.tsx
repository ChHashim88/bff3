import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bigfilmfund.com"),
  title: "BFF — Big Film Fund | Everyday Investors. Real Ownership. Fair Profits.",
  description:
    "Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.",
  keywords: [
    "Big Film Fund",
    "BFF",
    "Film Financing",
    "Film Investment",
    "Crowdfunded Film",
    "WeFunder Film",
    "Film Economics",
    "Revenue Share Film",
  ],
  authors: [{ name: "Big Film Fund" }],
  creator: "Big Film Fund",
  publisher: "Big Film Fund",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bigfilmfund.com",
    siteName: "Big Film Fund",
    title: "BFF — Big Film Fund | Everyday Investors. Real Ownership. Fair Profits.",
    description:
      "Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Big Film Fund Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BFF — Big Film Fund | Everyday Investors. Real Ownership. Fair Profits.",
    description:
      "Big Film Fund opens the black box of film economics with fair transparency into gross revenue — so everyone sees exactly how the money flows.",
    images: ["/logo.png"],
  },
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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#B91C1C] selection:text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
