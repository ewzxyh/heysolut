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
    { name: 'Sobre', url: '/sobre', icon: User },
    { name: 'Projetos', url: '/projetos', icon: Briefcase },
    { name: 'Contato', url: '/contato', icon: FileText }
  ]

  return <NavBar items={navItems} />
}

export default function Home() {
  return (
    <>
    <div className="">
      <NavBarDemo />
      <section id="inicio"></section>
      <HeroSection className="max-w-[92%] lg:max-w-[1000px] mx-auto bg-cyan-950"
        title="Conheça os Funcionários de IA"
        subtitle={{
          regular: "Automação que faz mais, ",
          gradient: "por menos",
        }}
        description="Automação, eficiência, economia e crescimento acelerado com Funcionários de IA.
Substitua processos manuais por inteligência estratégica e obtenha resultados reais."
        ctaText="Começar Agora"
        ctaHref="https://wa.me/5562998717387"

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
