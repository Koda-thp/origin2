import type { Metadata } from "next";
import { Anton, Archivo, Caveat } from "next/font/google";
import { CookieBanner } from "@/components/ui/cookie-banner";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "optional",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "optional",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "optional",
});

export const metadata: Metadata = {
  title: "ORIGIN — Studio Lagree · Haute intensité",
  description:
    "ORIGIN est un studio de Lagree heated. 45 minutes, bas impact, haute intensité — pour sculpter un core d'acier dans une chaleur qui réveille.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${caveat.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-bordeaux">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
