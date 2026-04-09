import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganisationSchema } from "@/components/StructuredData";
import CursorEffect from "@/components/CursorEffect";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-condensed",
});

export const metadata: Metadata = {
  title: {
    default: "VelaOps — Your AI Ops Team, Fully Managed",
    template: "%s | VelaOps",
  },
  description:
    "VelaOps builds and operates custom AI agent networks for UK businesses. Marketing, outreach, content and reporting — fully managed from £299/month.",
  keywords: [
    "managed AI services",
    "AI agents",
    "AI operations",
    "UK business automation",
    "AI marketing",
  ],
  openGraph: {
    title: "VelaOps — Your AI Ops Team, Fully Managed",
    description: "Custom AI agent networks for UK businesses. Marketing, outreach, content and reporting — fully managed.",
    url: "https://velaops.ai",
    siteName: "VelaOps",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VelaOps — Your AI Ops Team, Fully Managed",
    description: "Custom AI agent networks for UK businesses. Fully managed from £299/month.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="flex min-h-screen flex-col" style={{ fontFamily: '"Barlow", sans-serif' }}>
        <OrganisationSchema />
        <CursorEffect />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
