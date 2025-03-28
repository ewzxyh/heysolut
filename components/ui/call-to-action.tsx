import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { Sparkles } from "lucide-react";

function CTA() {
  return (
    <div className="max-w-[92%] lg:max-w-[1000px] mx-auto bg-cyan-950 border border-cyan-500/35 backdrop-blur-sm">
      <div className="container mx-auto md:p-6 p-4">
        <div className="flex flex-col text-center bg-gradient-to-b from-cyan-700 to-sky-900 rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge className="md:-m-4 text-xs text-neutral-200 group px-3 py-1.5 bg-gradient-to-tr from-cyan-500/25 via-sky-900/55 to-transparent border border-cyan-500/25 rounded-full w-fit flex items-center gap-2 hover:border-cyan-500/40 hover:bg-cyan-500/25 transition-colors">
              <Sparkles className="text-cyan-400 w-3.5 h-3.5" />
              <span className="w-px h-2.5 bg-cyan-500/20"></span>
              Comece agora
            </Badge>
          </div>
          <div className="flex flex-col gap-2 space-y-6">
            <h3 className="text-3xl font-bold md:text-5xl tracking-tighter max-w-xl font-regular">
              Escale sua empresa com Funcionários de IA
            </h3>
            <p className="text-md bold leading-relaxed tracking-tight text-neutral-300 max-w-xl">
              A HeySolut oferece soluções inteligentes para otimizar processos,
              melhorar a experiência do cliente e acelerar o crescimento da sua empresa. 
              Descubra como a IA pode levar seu negócio para o próximo nível.
            </p>
          </div>
          <div className="flex  gap-4">
              <Button className="gap-4 bg-cyan-800 hover:bg-cyan-600" variant="outline">
              <SiWhatsapp className="w-4 h-4" /> Entre em contato
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { CTA };

