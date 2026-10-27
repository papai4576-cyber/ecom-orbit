import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Starfield } from "@/components/motion/starfield";
import { PointerGlow } from "@/components/motion/pointer-glow";
import { StickyCta } from "@/components/sticky-cta";

// Inter stands in for SF Pro wherever -apple-system isn't available (Android, Windows).
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecomorbit.in"),
  title: {
    default: "Ecom Orbit | Ecommerce Agency India for Online & Offline Brands",
    template: "%s",
  },
  description:
    "India's full-service ecommerce agency. Store setup, performance marketing, SEO, marketplace management & quick commerce — for online brands and offline retailers going digital.",
  keywords:
    "ecommerce agency india, shopify agency, woocommerce agency, amazon management, blinkit agency, quick commerce india, offline to online retail",
  openGraph: {
    title: "Ecom Orbit | Ecommerce Agency India for Online & Offline Brands",
    description:
      "India's full-service ecommerce agency. Store setup, performance marketing, SEO, marketplace management & quick commerce — for online brands and offline retailers going digital.",
    siteName: "Ecom Orbit",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Starfield />
        <PointerGlow />
        {children}
        <StickyCta />
      </body>
    </html>
  );
}
