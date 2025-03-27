"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import DotPattern from "@/components/ui/dot-pattern-1"

interface AttentionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
}

export function AttentionTitle({ title, className, ...props }: AttentionTitleProps) {
  return (
    <div className={cn("w-full backdrop-blur-sm max-w-[92%] lg:max-w-[1000px] mx-auto bg-cyan-950/10 relative z-10", className)} {...props}>
      <div className="mx-auto relative flex justify-center">
        <div className="w-full relative z-10 inline-block">
          <div className="relative px-10 py-6 sm:px-14 sm:py-8">
            {/* Padrão de pontos de fundo */}
            <div className="absolute inset-0 overflow-hidden">
              <DotPattern 
                width={4} 
                height={4} 
                cx={2} 
                cy={2} 
                cr={0.7} 
                className="opacity-20 fill-cyan-400/50"
              />
            </div>
            
            {/* Retângulo com opacidade */}
            <div className="absolute inset-1 bg-cyan-950/10 backdrop-blur-[1px]"></div>
            
            {/* Cantos destacados */}
            <div className="absolute -left-1 -top-1 h-3 w-3 bg-cyan-500" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 bg-cyan-500" />
            <div className="absolute -right-1 -top-1 h-3 w-3 bg-cyan-500" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-cyan-500" />
            
            {/* Bordas */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-cyan-500/40" />
            <div className="absolute right-0 top-0 h-full w-[1px] bg-cyan-500/40" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/40" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500/40" />
            
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white relative z-10 tracking-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttentionTitle 