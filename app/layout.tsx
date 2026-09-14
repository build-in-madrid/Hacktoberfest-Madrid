import type { Metadata } from "next";
import "darkroom-ui/style.css";
import "darkroom-ui/fonts.css";
import "./globals.css";

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
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
