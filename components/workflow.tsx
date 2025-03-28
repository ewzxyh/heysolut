'use client'

import { useCallback, useRef, useLayoutEffect } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  Handle,
  Position,
  useReactFlow,
  ReactFlowProvider,
  NodeDragHandler,
  XYPosition,
  NodeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { PlayCircle, MessageSquare, Calendar, CheckCircle, RotateCcw, HelpCircle, CornerDownLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface WorkflowBuilderProps {
  className?: string;
}

// Constantes para espaçamento
const MIN_DISTANCE_X = 250; // Distância mínima horizontal (2 quadrados)
const MIN_DISTANCE_Y = 150; // Distância mínima vertical (2 quadrados)

// Hook personalizado para substituir o useEffect de redimensionamento
const useResizeHandler = (callback: () => void) => {
  const observerRef = useRef<ResizeObserver | null>(null);

  useLayoutEffect(() => {
    // Executar o callback uma vez para o ajuste inicial
    callback();

    // Inicializar o ResizeObserver para monitorar alterações de tamanho da janela
    observerRef.current = new ResizeObserver(() => {
      callback();
    });

    // Observar o elemento body para detectar mudanças no tamanho da janela
    observerRef.current.observe(document.body);

    // Limpeza
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback]);
};

const CustomNode = ({ data }: { data: { label: React.ReactNode, type: string } }) => {
  return (
    <div className="bg-cyan-700/50 border border-cyan-500/20 rounded-lg shadow-md p-2 w-auto h-auto">
      <Handle type="target" position={Position.Top} isConnectable={true} />
      {data.label}
      <Handle type="source" position={Position.Bottom} isConnectable={true} />
    </div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

const createNode = (id: string, type: string, position: { x: number, y: number }, data: Record<string, unknown>): Node => ({
  id,
  type: 'custom',
  position,
  data,
})

// Posições bem espaçadas para evitar sobreposição
const initialNodes: Node[] = [
  createNode('1', 'start', { x: 0, y: 0 }, {
    label: (
      <div className="flex items-center gap-2 justify-center bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <PlayCircle className="w-6 h-6 text-emerald-500" />
        <span className="font-medium text-white">Início</span>
      </div>
    ),
  }),
  createNode('2', 'welcome-message', { x: 0, y: 180 }, {
    label: (
      <Card className="bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <CardContent className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            <span className="font-medium">Boas-vindas</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Olá! Como posso ajudar você hoje?
          </p>
        </CardContent>
      </Card>
    ),
  }),
  createNode('3', 'scheduling', { x: 0, y: 360 }, {
    label: (
      <Card className="bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <CardContent className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-indigo-500" />
            <span className="font-medium">Agendamento</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Qual data e horário você prefere?
          </p>
        </CardContent>
      </Card>
    ),
  }),
  createNode('4', 'confirmation', { x: 0, y: 540 }, {
    label: (
      <Card className="bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <CardContent className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="font-medium">Confirmação</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Confirmar data e hora selecionadas?
          </p>
        </CardContent>
      </Card>
    ),
  }),
  createNode('5', 'loop-back', { x: 300, y: 360 }, {
    label: (
      <Card className="bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <CardContent className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <RotateCcw className="w-6 h-6 text-orange-500" />
            <span className="font-medium">Nova Seleção</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Selecionar outra data/hora
          </p>
        </CardContent>
      </Card>
    ),
  }),
  // Novo nó para dúvidas/FAQ
  createNode('6', 'questions', { x: -300, y: 360 }, {
    label: (
      <Card className="bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <CardContent className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-6 h-6 text-purple-500" />
            <span className="font-medium">Dúvidas</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Responder perguntas frequentes
          </p>
        </CardContent>
      </Card>
    ),
  }),
  // Nó para retornar ao agendamento
  createNode('7', 'return-to-scheduling', { x: -300, y: 540 }, {
    label: (
      <Card className="bg-neutral-900/80 border border-white-30 rounded-md shadow-md p-2 w-auto h-auto">
        <CardContent className="p-2">
          <div className="flex items-center gap-2 mb-2">
            <CornerDownLeft className="w-6 h-6 text-cyan-500" />
            <span className="font-medium">Retornar</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Continuar com agendamento
          </p>
        </CardContent>
      </Card>
    ),
  }),
]

const initialEdges: Edge[] = [
  // Fluxo principal
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2',
    style: { stroke: '#0ea5e9', strokeWidth: 2 }
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3',
    style: { stroke: '#0ea5e9', strokeWidth: 2 }
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4',
    style: { stroke: '#0ea5e9', strokeWidth: 2 }
  },
  // Loop de nova seleção
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    animated: true,
    style: { stroke: '#f97316', strokeWidth: 2 }
  },
  { 
    id: 'e5-3', 
    source: '5', 
    target: '3', 
    animated: true,
    style: { stroke: '#f97316', strokeWidth: 2 }
  },
  // Conexões de dúvidas
  { 
    id: 'e2-6', 
    source: '2', 
    target: '6', 
    animated: true, 
    style: { stroke: '#a855f7', strokeWidth: 2 }
  },
  { 
    id: 'e3-6', 
    source: '3', 
    target: '6', 
    animated: true, 
    style: { stroke: '#a855f7', strokeWidth: 2 }
  },
  // Conexões de retorno
  { 
    id: 'e6-7', 
    source: '6', 
    target: '7', 
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2 }
  },
  { 
    id: 'e7-3', 
    source: '7', 
    target: '3', 
    animated: true,
    style: { stroke: '#06b6d4', strokeWidth: 2 }
  },
]

function Flow() {
  const [nodes,, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { fitView } = useReactFlow();

  // Função memoizada para ajustar a visualização
  const handleResize = useCallback(() => {
    fitView({ 
      padding: 0.5, // Aumentado para dar mais espaço nas bordas
      includeHiddenNodes: true,
      minZoom: 0.5,
      maxZoom: 1.5
    });
  }, [fitView]);

  // Usar o hook personalizado em vez de useEffect
  useResizeHandler(handleResize);
  
  // Função que verifica se dois nós estão muito próximos
  const areNodesOverlapping = useCallback((node1Position: XYPosition, node2Position: XYPosition): boolean => {
    const dx = Math.abs(node1Position.x - node2Position.x);
    const dy = Math.abs(node1Position.y - node2Position.y);
    
    return dx < MIN_DISTANCE_X && dy < MIN_DISTANCE_Y;
  }, []);
  
  // Handler personalizado para o evento onNodeDrag para evitar sobreposição
  const onNodeDrag: NodeDragHandler = useCallback(
    (event, node) => {
      // Verificar se o nó atual está próximo de outro nó
      const otherNodes = nodes.filter((n) => n.id !== node.id);
      
      // Para cada nó, verificar se o nó sendo arrastado está muito próximo
      let hasOverlap = false;
      for (const otherNode of otherNodes) {
        if (areNodesOverlapping(node.position, otherNode.position)) {
          hasOverlap = true;
          break;
        }
      }
      
      // Se houver sobreposição, podemos ajustar a posição ou exibir uma indicação visual 
      if (hasOverlap) {
        // Opcionalmente, poderia mostrar um indicador visual ou ajustar a posição
        console.log('Sobreposição detectada!');
      }
    },
    [nodes, areNodesOverlapping]
  );
  
  // Personalizar o processamento das mudanças de nós para evitar sobreposição
  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => {
      // Processar cada mudança, ajustando conforme necessário
      let processedChanges = [...changes];
      
      // Para mudanças que envolvem posição, verificar sobreposição
      processedChanges = processedChanges.map((change) => {
        if (change.type === 'position' && change.position) {
          // Encontrar o nó que está sendo movido
          const changedNode = nodes.find((n) => n.id === change.id);
          if (!changedNode) return change;
          
          // Verificar se a nova posição causaria sobreposição
          const otherNodes = nodes.filter((n) => n.id !== change.id);
          
          for (const otherNode of otherNodes) {
            if (areNodesOverlapping(change.position, otherNode.position)) {
              // Calcular uma nova posição que não causa sobreposição
              const dx = change.position.x - otherNode.position.x;
              const dy = change.position.y - otherNode.position.y;
              
              // Determinar em qual direção mover o nó para evitar sobreposição
              if (Math.abs(dx) > Math.abs(dy)) {
                // Mover horizontalmente
                change.position.x = otherNode.position.x + (dx > 0 ? MIN_DISTANCE_X : -MIN_DISTANCE_X);
              } else {
                // Mover verticalmente
                change.position.y = otherNode.position.y + (dy > 0 ? MIN_DISTANCE_Y : -MIN_DISTANCE_Y);
              }
              break;
            }
          }
        }
        return change;
      });
      
      onNodesChange(processedChanges);
    },
    [nodes, onNodesChange, areNodesOverlapping]
  );

  const onConnect = useCallback((params: Connection) => setEdges((eds: Edge[]) => addEdge(params, eds)), [setEdges]);

  // Configuração para remover a marca d'água "React Flow"
  const proOptions = { hideAttribution: true };

  // Limites da área de movimentação para garantir que os nós não fiquem fora da área visível
  // Criando uma área segura que é maior que a área visível para evitar cortes
  const translateExtent: [[number, number], [number, number]] = [
    [-750, -500], // ponto superior esquerdo
    [1000, 1000]    // ponto inferior direito
  ];

  return (
    <div className="relative w-full h-full p-4 border border-cyan-500/20 rounded-lg bg-gradient-to-b from-cyan-950/70 to-black/20 backdrop-blur-sm overflow-hidden"> {/* Container com padding */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDrag={onNodeDrag}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.5}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
        proOptions={proOptions}
        className="react-flow-wrapper"
        snapToGrid={true}
        snapGrid={[MIN_DISTANCE_X / 4, MIN_DISTANCE_Y / 4]}
        translateExtent={translateExtent}
        nodesDraggable={true}
        elementsSelectable={true}
        preventScrolling={true}
        style={{ width: '100%', height: '100%' }}
      >
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

export default function WorkflowBuilder({ className }: WorkflowBuilderProps) {
  return (
    <div className={className}>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  )
}