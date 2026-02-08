import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Siddharth | Graphic Designer & Content Writer",
    template: "%s | Siddharth",
  },
  description:
    "Portfolio of Siddharth - A creative graphic designer and content writer crafting visual stories and compelling narratives that elevate brands.",
  keywords: [
    "graphic designer",
    "content writer",
    "portfolio",
    "branding",
    "visual design",
    "creative writing",
    "Siddharth",
  ],
  authors: [{ name: "Siddharth" }],
  openGraph: {
    title: "Siddharth | Graphic Designer & Content Writer",
    description:
      "Creative portfolio showcasing graphic design and content writing work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth | Graphic Designer & Content Writer",
    description:
      "Creative portfolio showcasing graphic design and content writing work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
