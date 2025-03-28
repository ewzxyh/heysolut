"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { FaRobot, FaWhatsapp } from "react-icons/fa6"
import WorkflowBuilder from "@/components/workflow"
import { RetroGrid } from "@/components/ui/retro-grid"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    darkLineColor?: string
    lightLineColor?: string
  }
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative border-x border-cyan-500/35", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-full bg-cyan-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <section className="relative w-full mx-auto z-1">
          <RetroGrid 
            angle={65} 
            cellSize={60} 
            opacity={0.5} 
            darkLineColor="rgba(6, 182, 212, 0.35)" 
            lightLineColor="rgba(6, 182, 212, 0.35)"
            className="dark" 
          />
          
          <div className="z-10 mx-auto border-t border-b border-cyan-500/35">

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
              <div className="lg:col-span-3 space-y-4 sm:space-y-1 md:space-y-2 lg:space-y-4">
                
                <Link href="/" className="flex items-start mb-8 sm:mb-8 md:mb-10 justify-start">
                  <Image
                    src="/heysolut-logo.png"
                    alt="HeySolut Logo"
                    width={280}
                    height={120}
                    className="h-auto w-[260px] sm:w-[280px] md:w-[280px] object-cover transition-all duration-300"
                    priority
                  />
                </Link>
                
                <h1 className="text-sm text-cyan-200 group font-geist px-4 py-1.5 md:px-5 md:py-2 bg-gradient-to-tr from-cyan-300/5 via-cyan-400/5 to-transparent border-[2px] border-cyan-500/35 rounded-3xl w-fit flex items-center gap-2">
                  <FaRobot className="text-cyan-400 w-4 h-4 md:w-5 md:h-5" />
                  <span className="w-px h-3 md:h-4 bg-cyan-500/30"></span>
                  {title}
                  <ChevronRight className="inline w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 duration-300" />
                </h1>

                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter font-geist bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                  {subtitle.regular}
                  <AuroraText
                    className="font-bold text-5xl lg:text-6xl xl:text-7xl"
                    colors={["#7928CA", "#ffffff", "#a855f7", "#0070F3", "#dc4480"]}
                  >
                    {subtitle.gradient}
                  </AuroraText>
                </h2>

                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                  {description}
                </p>

                <div className="">
                  <span className="relative inline-block overflow-hidden rounded-lg p-[1.5px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#0099cc_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                      <a
                        href={ctaHref}
                        className="text-sm md:text-md inline-flex rounded-lg text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-cyan-400/20 to-transparent text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/10 hover:via-cyan-400/30 hover:to-transparent transition-all sm:w-auto py-3 sm:py-4 px-6 sm:px-8 md:px-10"
                      >
                        <FaWhatsapp className="mr-2 h-4 w-4 md:h-5 md:w-5 text-white" />
                        {ctaText}
                      </a>
                    </div>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex items-center justify-center mt-6 lg:mt-0">
                <div className="relative w-full min-h-[400px] h-full border border-cyan-500/20 rounded-lg bg-gradient-to-b from-cyan-950/30 to-transparent backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0">
                    <WorkflowBuilder className="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="-z-10 absolute max-w-[98%] bottom-0 top-0 left-0 right-0 m-4 mx-auto bg-cyan-950/5 border-dashed border-2 border-cyan-500/90"/>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
