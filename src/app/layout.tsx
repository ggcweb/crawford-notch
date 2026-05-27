import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://crawfordnotchcamping.com'),
  title: {
    template: '%s | Crawford Notch Campground',
    default: 'Crawford Notch General Store & Campground',
  },
  description: "A family-owned and operated campground nestled in the heart of the White Mountains of New Hampshire. Scenic Crawford Notch is well known for its awe-inspiring views, majestic mountains, unspoiled wilderness, and miles of hiking trails.",
  keywords: ["camping", "campground", "White Mountains", "New Hampshire", "Crawford Notch", "Saco River", "cabins", "yurts", "hiking", "family camping"],
  authors: [{ name: "Crawford Notch General Store & Campground" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crawfordnotchcamping.com',
    siteName: 'Crawford Notch Campground',
    images: [
      {
        url: '/images/og-image.jpg', // We will need to ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: 'Crawford Notch Campground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crawford Notch General Store & Campground',
    description: 'Family camping in the heart of the White Mountains, NH.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${libreFranklin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
