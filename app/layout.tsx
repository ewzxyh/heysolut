import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hey Solut | Soluções Digitais Personalizadas",
  description: "Desenvolvemos soluções digitais personalizadas para atender às necessidades específicas do seu negócio, com foco em performance e experiência do usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-cyan-950 border-none`}
      >
        <HeroHighlight 
          containerClassName="fixed inset-0 w-full h-full z-0"
          className="w-full h-full"
        >
          <div className="hidden">Fundo interativo</div>
        </HeroHighlight>
        <div className="relative z-10 md:py-20 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
