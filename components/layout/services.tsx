"use client";

import { FileText, Mic, Box, Database, Mail, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <div className="max-w-[92%] lg:max-w-[1000px] mx-auto relative border-x border-b border-cyan-500/35 bg-gradient-to-b from-cyan-700 to-sky-950">
      <div className="pt-16 pb-8 px-8 md:px-10 space-y-4">
        <h4 className="text-cyan-400 font-medium text-sm tracking-wider uppercase">O que fazemos</h4>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Acelere seu Crescimento com IA</h2>
        <p className="text-neutral-300 max-w-2xl text-sm md:text-md">
          Na HeySolut - Comunicação Inteligente, transformamos seu negócio com soluções de IA que automatizam, personalizam e escalam sua comunicação. Nossos assistentes virtuais trabalham 24/7 para maximizar seus resultados.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-2 lg:gap-6 p-8 md:p-10 pt-0 md:pt-2">
        <GridItem
          icon={<Box className="h-4 w-4" />}
          title="Geração de Leads Automatizada"
          description="Converta mais clientes com IA, automatizando seu funil de vendas e nutrindo sua audiência de forma inteligente."
          cta="Descubra Como"
          href="https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Geração%20de%20Leads%20Automatizada"
        />
        <GridItem
          icon={<FileText className="h-4 w-4" />}
          title="Criação de Conteúdo Estratégico"
          description="Produza textos, posts e roteiros otimizados por IA, garantindo engajamento e relevância para sua marca."
          cta="Descubra Como"
          href="https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Criação%20de%20Conteúdo%20Estratégico"
        />
        <GridItem
          icon={<Mic className="h-4 w-4" />}
          title="Avatares e Clonagem de Voz"
          description="Crie interações realistas com avatares digitais e vozes clonadas, personalizando seu atendimento e marketing."
          cta="Descubra Como"
          href="https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Avatares%20e%20Clonagem%20de%20Voz"
        />
        <GridItem
          icon={<Database className="h-4 w-4" />}
          title="Gestão Inteligente de Dados"
          description="Organize, analise e utilize suas informações estrategicamente com o poder da Inteligência Artificial."
          cta="Descubra Como"
          href="https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Gestão%20Inteligente%20de%20Dados"
        />
        <GridItem
          icon={<Sparkles className="h-4 w-4" />}
          title="Central de Conteúdo Automatizada"
          description="Tenha um hub de conteúdo automatizado para planejar, criar e distribuir materiais de forma estratégica."
          cta="Descubra Como"
          href="https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Central%20de%20Conteúdo%20Automatizada"
        />
        <GridItem
          icon={<Mail className="h-4 w-4" />}
          title="Automação de E-mails"
          description="Personalize comunicações e envie mensagens no momento certo, aumentando taxas de abertura e conversão."
          cta="Descubra Como"
          href="https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Automação%20de%20E-mails"
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  cta: string;
  href?: string;
}

const GridItem = ({ icon, title, description, cta, href }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none")}>
      <div className={cn("relative h-full rounded-[1.25rem] border-[0.75px] border-cyan-500/20 p-2 md:rounded-[1.5rem] md:p-3")}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className={cn("relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-neutral-950/50 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6")}>
          <div className={cn("relative flex flex-1 flex-col justify-between gap-3")}>
            <div className={cn("w-fit rounded-lg border-[0.75px] border-cyan-500/20 bg-cyan-950/10 p-2")}>
              {icon}
            </div>
            <div className={cn("space-y-3")}>
              <h3 className={cn("pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground")}>
                {title}
              </h3>
              <h2 className={cn("[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground")}>
                {description}
              </h2>
              <a 
                href={href || "https://wa.me/5562998717387?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20" + encodeURIComponent(title)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn("text-cyan-400 text-sm font-medium hover:underline cursor-pointer inline-block")}
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Services;
