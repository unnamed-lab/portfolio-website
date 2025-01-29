import type { Metadata } from "next";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import { Inter, Poppins } from "next/font/google";
import { Footer, Nav } from "@/components/ui";
import "./globals.css";
import meta from "@/lib/metadata";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
  metadataBase: new URL("https://unnamed-profile.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-UK": "/en-UK",
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} h-full`}>
        <SpeedInsights />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
