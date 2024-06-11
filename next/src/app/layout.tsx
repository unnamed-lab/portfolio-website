import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/ui";
import "./globals.css";
import meta from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " h-full"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
