import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoloSuccess AI — Portfolio",
  description:
    "SoloSuccess AI: a command center for solo founders powered by 8 specialized AI agents.",
  metadataBase: new URL("https://solobossai.fun"),
  openGraph: {
    title: "SoloSuccess AI — Portfolio",
    description:
      "SoloSuccess AI: a command center for solo founders powered by 8 specialized AI agents.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoloSuccess AI — Portfolio",
    description:
      "SoloSuccess AI: a command center for solo founders powered by 8 specialized AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="container-section mt-8">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
