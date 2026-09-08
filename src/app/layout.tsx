import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Barcook Gallery | Bakery. Cafe. Gallery.",
  description:
    "Premium one-page company profile concept for Barcook Gallery in Petaling Jaya, Malaysia.",
  metadataBase: new URL("https://barcook-gallery.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Barcook Gallery",
    description:
      "Where freshly baked creations, crafted drinks and thoughtful spaces come together.",
    type: "website",
    locale: "en_MY",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
