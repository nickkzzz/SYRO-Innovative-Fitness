import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ui/ClientLayout";
import Cursor from "@/components/ui/Cursor";
import Spotlight from "@/components/ui/Spotlight";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "SYRO Innovative Fitness",
  description:
    "Transform your body at SYRO Innovative Fitness. Premium gym, expert trainers, modern equipment, and a motivating fitness environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable}`}>
        <ClientLayout>
           <Spotlight />
           <Cursor />
          {children}
          <BackToTop />
          <WhatsAppButton />
        </ClientLayout>
      </body>
    </html>
  );
}