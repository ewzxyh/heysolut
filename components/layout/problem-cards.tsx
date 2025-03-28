"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { User2, BarChart3, Clock } from "lucide-react"

interface ProblemCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

function ProblemCard({ title, description, icon, className }: ProblemCardProps) {
  return (
    <div 
      className={cn(
        "bg-cyan-700 p-6 relative flex flex-col items-start w-full border border-cyan-500/35 backdrop-blur-sm",
        "hover:bg-cyan-500/10 hover:border-cyan-500/80 transition-all duration-300",
        className
      )}
    >
      <div className="size-12 flex items-center justify-center rounded-full bg-cyan-950/40 mb-4 text-cyan-400">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-300 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

interface ProblemCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function ProblemCards({ className, ...props }: ProblemCardsProps) {
  const problems = [
    {
      title: "Processos Manuais",
      description: "Empresas gastam tempo excessivo com tarefas repetitivas que poderiam ser automatizadas, reduzindo a produtividade e aumentando custos operacionais.",
      icon: <User2 className="size-6" />
    },
    {
      title: "Decisões Inconsistentes",
      description: "Sem dados organizados e análises inteligentes, gestores tomam decisões baseadas em intuição, levando a resultados imprevisíveis e oportunidades perdidas.",
      icon: <BarChart3 className="size-6" />
    },
    {
      title: "Escassez de Tempo",
      description: "Equipes sobrecarregadas com trabalho administrativo não conseguem focar em atividades estratégicas que realmente geram crescimento para o negócio.",
      icon: <Clock className="size-6" />
    }
  ]

  return (
    <div 
      className={cn(
        "relative z-0", 
        className
      )}
      {...props}
    >
      <div className="max-w-[92%] lg:max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index}
              title={problem.title}
              description={problem.description}
              icon={problem.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemCards 