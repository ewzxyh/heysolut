"use client";
import Link from "next/link";

import Image from "next/image";
import { CodeXmlIcon } from "lucide-react";
function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-gradient-to-b from-cyan-500/25 to-cyan-950/90 border-x border-b border-cyan-500/25">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="md:max-w-xs lg:basis-1/3 pr-4">
            <Link href="/" className="flex items-start">
              <Image
                src="/heysolut-logo.png"
                alt="HeySolut Logo"
                width={240}
                height={80}
                className="h-auto w-[120px] sm:w-[180px] md:w-[200px] object-cover transition-all duration-300"
                priority
              />
            </Link>

            <div className="mt-4">
              <Link href="https://wa.me/5562984268492" className="text-xs text-neutral-300 group px-3 py-1.5 bg-gradient-to-tr from-cyan-300/5 via-cyan-400/5 to-transparent border border-cyan-500/25 rounded-full w-fit flex items-center gap-2 hover:border-cyan-500/40 transition-colors">
                <CodeXmlIcon className="text-cyan-400 w-3.5 h-3.5" />
                <span className="w-px h-2.5 bg-cyan-500/20"></span>
                <span>Desenvolvido por <span className="text-cyan-400">Enzo Yoshida</span></span>
              </Link>
            </div>

            <p className="text-sm dark:text-gray-400 mt-4">
              © {new Date().getFullYear()} HeySolut. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:basis-2/3">
            <div>
              <h3 className="font-semibold mb-3 text-sm md:text-base">Serviços</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Automação de Atendimento com IA
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Criação de Conteúdo Inteligente
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Chatbots e Avatares Digitais
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Clonagem de Voz e Assistentes Virtuais
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Análise de Dados e Modelagem de IA
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Automação de E-mails e Marketing com IA
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm md:text-base">Suporte</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="https://wa.me/5562998717387/text=Suporte%20IA" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Suporte IA
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/5562998717387/text=D%C3%BAvidas%20sobre%20IA" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Dúvidas sobre IA
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/5562998717387/text=Consultoria%20especializada" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Consultoria Especializada
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/5562998717387/text=Suporte%20Vendas" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Suporte Vendas
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/5562998717387/text=Fale%20com%20um%20especialista" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Fale com um especialista
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm md:text-base">Sobre a empresa</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Sobre a HeySolut
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Cases de sucesso
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Termos de uso
                  </Link>
                </li>
                <li>
                  <Link href="#inicio" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Política de privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-8 md:mt-12 items-center justify-center overflow-hidden">
          <h1 className="text-center text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-950 select-none">
            HEYSOLUT
          </h1>
        </div>

      </div>
    </footer>
  );
}

export { Footer };
