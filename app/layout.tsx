import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--f-display" });
const body = Manrope({ subsets: ["latin"], variable: "--f-body" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--f-ar" });

const description = "Menu de Eyüp Sultan : grillades, kebabs, entrées, salades et plats turcs. قائمة مطعم أيوب سلطان.";

export const metadata: Metadata = {
  title: "Eyüp Sultan — Grilled Steak & Tender",
  description,
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  openGraph: { title: "Eyüp Sultan — Grilled Steak & Tender", description, type: "website", images: ["/images/logo.png"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0D0B0A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
