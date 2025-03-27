import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
function CTA() {
  return (
    <div className="max-w-[92%] lg:max-w-[1000px] mx-auto bg-cyan-950 border border-cyan-500/35 backdrop-blur-sm">
      <div className="container mx-auto p-6 ">
        <div className="flex flex-col text-center bg-neutral-950/50 rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Comece agora</Badge>
          </div>
          <div className="flex flex-col gap-2 space-y-6">
            <h3 className="text-3xl font-bold md:text-5xl tracking-tighter max-w-xl font-regular">
              Escale sua empresa com Funcionários de IA
            </h3>
            <p className="text-lg bold leading-relaxed tracking-tight text-muted-foreground max-w-xl">
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
