import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Contact";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo-fav.png",
    apple: "/images/logo-fav.png",
  },
  title: "André Vinícius Personal | Transforme seu corpo",
  description:
    "Personal trainer especializado em transformação corporal. Treinos personalizados, acompanhamento próximo e resultados reais.",
  keywords: [
    "personal trainer",
    "musculação",
    "emagrecimento",
    "treino personalizado",
    "André Vinícius",
  ],
  openGraph: {
    title: "André Vinícius Personal",
    description: "Transforme seu corpo com método e consistência.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} dark h-full scroll-smooth`}>
      <body className="min-h-full bg-background font-sans text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
