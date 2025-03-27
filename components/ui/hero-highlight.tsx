"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useEffect } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Adiciona handler global para movimento do mouse quando usado no layout
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: '16px 16px',
  });

  return (
    <div
      className={cn(
        "relative h-[40rem] flex items-center dark:bg-cyan-950 justify-center w-full",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Padrão de fundo estático */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-70" 
        style={dotPattern('rgb(8, 145, 178)')} // cyan-600 para modo claro
      />
      <div 
        className="absolute inset-0 dark:opacity-70 opacity-0 pointer-events-none" 
        style={dotPattern('rgb(30, 80, 100)')} // cyan-700 para modo escuro
      />
      
      {/* Círculo que segue o mouse - sempre visível */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          ...dotPattern('rgb(8, 250, 250)'), // cyan-950 - cor que aparece ao passar o mouse
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-950 dark:from-cyan-500 dark:to-cyan-950`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};