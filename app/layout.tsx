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
  icons: {
    icon: [
      {
        url: "/heysolut-favicon.png",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/heysolut-favicon.png",
        type: "image/png",
      }
    ],
  },
  authors: [
    {
      name: "Hey Solut",
      url: "https://heysolut.com.br",
    },
  ],
  keywords: [
    "soluções digitais",
    "desenvolvimento web",
    "inteligência artificial",
    "automação",
    "eficiência",
    "Hey Solut"
  ],
  creator: "Hey Solut",
  publisher: "Hey Solut",
  openGraph: {
    title: "Hey Solut | Soluções Digitais Personalizadas",
    description: "Desenvolvemos soluções digitais personalizadas para atender às necessidades específicas do seu negócio, com foco em performance e experiência do usuário.",
    images: [
      {
        url: "/heysolut-favicon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Solut | Soluções Digitais Personalizadas",
    description: "Desenvolvemos soluções digitais personalizadas para atender às necessidades específicas do seu negócio, com foco em performance e experiência do usuário.",
    images: ["/heysolut-favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-cyan-950 border-none`}
      >
        <HeroHighlight 
          containerClassName="fixed inset-0 w-full h-full z-0 bg-gradient-to-b from-cyan-900 to-sky-950"
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
