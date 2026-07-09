import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InstagramPopup from "@/components/InstagramPopup";

// Self-hosted variable fonts (woff2 in ./fonts) so builds don't depend on
// fetching from Google Fonts at build time. The Fraunces "full" files carry
// the opsz, SOFT and ital axes; Libre Franklin carries wght and ital.
const fraunces = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/fraunces-latin-full-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/fraunces-latin-full-italic.woff2", weight: "100 900", style: "italic" },
  ],
});

const libreFranklin = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/libre-franklin-latin-wght-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/libre-franklin-latin-wght-italic.woff2", weight: "100 900", style: "italic" },
  ],
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
        url: '/image.jpg',
        width: 1830,
        height: 1396,
        alt: 'Autumn foliage along the Saco River at Crawford Notch, New Hampshire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crawford Notch General Store & Campground',
    description: 'Family camping in the heart of the White Mountains, NH.',
    images: ['/image.jpg'],
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
        <InstagramPopup />
      </body>
    </html>
  );
}
