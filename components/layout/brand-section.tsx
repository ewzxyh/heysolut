"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BrandSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function BrandSection({ className, ...props }: BrandSectionProps) {
  const brands = [
    { name: "OpenAI", logo: "/brands/openai.svg" },
    { name: "N8N", logo: "/brands/n8n.svg" },
    { name: "Claude", logo: "/brands/claude.svg" },
    { name: "DeepSeek", logo: "/brands/deepseek.svg" },
    { name: "ElevenLabs", logo: "/brands/elevenlabs.svg" },
    { name: "ChatCase", logo: "/brands/chatcase.svg" },
  ]

  return (

    <div
      className={cn(
        "",
        className
      )}
      {...props}
    >

      <div className="w-full border border-cyan-500/35 backdrop-blur-sm max-w-[92%] lg:max-w-[1000px] mx-auto bg-cyan-700">

        <div className="flex flex-wrap">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={cn(
                "opacity-70 hover:opacity-100 transition-opacity duration-300",
                "flex justify-center items-center py-6 px-4",
                "w-1/2 sm:w-1/3 md:w-1/6",
                "border-r border-cyan-500/35",
                "hover:bg-cyan-500/40 transition-all duration-300",
                index === 5 && "border-r-0",
                index % 2 === 1 && "sm:border-r-0 md:border-r",
                index % 3 === 2 && "sm:border-r-0",
                index % 6 === 5 && "md:border-r-0",
                (index < 4) && "border-b md:border-b-0",
                (index >= 2 && index < 4) && "sm:border-b-0 md:border-b-0 md:border-r",
                (index >= 4) && "sm:border-b-0"
              )}
            >
              <div className="h-10 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-70 filter blur-[2px]"></div>
                <div className="relative text-white font-bold text-lg md:text-xl">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}