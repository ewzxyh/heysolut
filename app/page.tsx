"use client"

import { HeroSection } from "@/components/layout/hero-section-dark";
import { BrandSection } from "@/components/layout/brand-section";
import { StatsSection } from "@/components/layout/stats-section";
import { AttentionTitle } from "@/components/layout/attention-title";
import { ProblemCards } from "@/components/layout/problem-cards";
import { Home as HomeIcon, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Services } from "@/components/layout/services";
import { CTA } from "@/components/ui/call-to-action";
import { Footer } from "@/components/layout/footer";

function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Sobre', url: '/', icon: User },
    { name: 'Projetos', url: '/', icon: Briefcase },
    { name: 'Contato', url: 'https://wa.me/5562998717387/text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20funcionarios%20de%20IA', icon: FileText }
  ]

  return <NavBar items={navItems} />
}

export default function Home() {
  return (
    <>
    <div className="pb-20 md:py-0">
      <NavBarDemo />
      <section id="inicio"></section>
      <HeroSection className="max-w-[92%] lg:max-w-[1000px] mx-auto bg-gradient-to-b from-cyan-700 to-sky-950"
        title="Conheça os Funcionários de IA"
        subtitle={{
          regular: "Automação que faz mais, ",
          gradient: "por menos",
        }}
        description="Automação, eficiência, economia e crescimento acelerado com Funcionários de IA.
Substitua processos manuais por inteligência estratégica e obtenha resultados reais."
        ctaText="Começar Agora"
        ctaHref="https://wa.me/5562998717387/text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20funcionarios%20de%20IA"

      />
      
      <BrandSection />
      <AttentionTitle title="Automatize seu Negócio com IA"/>
      <ProblemCards />
      <Services />
      <StatsSection />
      <CTA />
      <Footer />
    </div>
    </>
  );
}
