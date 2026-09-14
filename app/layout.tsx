import type { Metadata } from "next";
import { Big_Shoulders, JetBrains_Mono } from "next/font/google";
import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";
import "./globals.css";

const displayFont = Big_Shoulders({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-carnival-display",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-carnival-mono",
  display: "swap",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hacktoberfest Hack Day Madrid 2026",
  description:
    "Un Hack Day presencial y gratuito dedicado al open source y a la inteligencia artificial abierta, en Madrid.",
  openGraph: {
    title: "Hacktoberfest Hack Day Madrid 2026",
    description:
      "Un Hack Day presencial y gratuito dedicado al open source y a la inteligencia artificial abierta, en Madrid.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`dark ${displayFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
