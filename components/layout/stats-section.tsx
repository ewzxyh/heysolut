"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StatsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function StatsSection({ className, ...props }: StatsSectionProps) {
  const stats = [
    { value: "7", unit: "x", description: "mais eficiência" },
    { value: "60", unit: "%", description: "aumento de conversões" },
    { value: "+57", unit: "*", description: "clientes satisfeitos" },
    { value: "+12", unit: "mi", description: "faturados"}
  ]

  return (
    <div
      className={cn(
        "",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[92%] lg:max-w-[1000px] mx-auto relative border border-cyan-500/35 bg-cyan-950/10 backdrop-blur-sm">
        <div className="flex flex-wrap">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "w-1/2 md:w-1/4",
                "border-r border-cyan-500/35",
                "flex flex-col justify-center items-center py-8 px-4",
                index === 3 && "border-r-0",
                index < 2 && "border-b border-cyan-500/35 md:border-b-0",
                index === 1 && "border-r-0 md:border-r"
              )}
            >
              <div className="flex items-baseline">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{stat.value}</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">{stat.unit}</span>
              </div>
              <div className="mt-2 text-sm md:text-base text-cyan-100/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 