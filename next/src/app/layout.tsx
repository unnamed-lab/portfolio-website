import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Footer, Nav } from "@/components/ui";
import "./globals.css";
import meta from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className + " h-full"}>
        <SpeedInsights />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
