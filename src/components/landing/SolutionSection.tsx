import React from 'react';
import { MessageSquare, Bot, TrendingUp, Users2 } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: '+30% Mais Vendas',
      description: 'Resposta imediata + automação = mais conversões garantidas'
    },
    {
      icon: Bot,
      title: 'Zero Mensagens Perdidas',
      description: 'Assistente virtual trabalha 24/7, sua equipe nunca mais vai esquecer um cliente'
    },
    {
      icon: TrendingUp,
      title: 'Tempo da Equipe 50% Otimizado',
      description: 'Automação resolve 70% das dúvidas, equipe foca apenas em fechar vendas'
    },
    {
      icon: Users2,
      title: 'Controle Total',
      description: 'Relatórios completos mostram exatamente quantas vendas você está fazendo'
    }
  ];

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-brand-primary">1 Número</span> + <span className="text-brand-primary">Automação</span> = <span className="text-brand-primary">Mais Vendas</span>
          </h2>
          <p className="text-foreground-muted text-xl max-w-3xl mx-auto mb-8 font-medium">
            Todos os WhatsApps da sua empresa unificados em 1 só número + Assistente Virtual 24/7
          </p>
          
          {/* Diagram - Simple representation */}
          <div className="max-w-4xl mx-auto mb-12">
            <GTorCard variant="gradient" className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center">
                  <div className="text-foreground-subtle text-sm mb-2">ANTES</div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-destructive/20 text-destructive px-3 py-1 rounded text-sm">WhatsApp 1</div>
                    <div className="bg-destructive/20 text-destructive px-3 py-1 rounded text-sm">WhatsApp 2</div>
                    <div className="bg-destructive/20 text-destructive px-3 py-1 rounded text-sm">WhatsApp 3</div>
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="w-16 h-0.5 md:w-0.5 md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-destructive to-brand-primary"></div>
                </div>
                
                <div className="text-center">
                  <div className="text-foreground-subtle text-sm mb-2">DEPOIS</div>
                  <div className="bg-brand-primary/20 text-brand-primary px-6 py-3 rounded-lg font-semibold glow-subtle">
                    GTor Platform<br/>
                    <span className="text-xs">Número Único + Automação</span>
                  </div>
                </div>
              </div>
            </GTorCard>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <GTorCard key={index} variant="gradient" className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-smooth glow-subtle">
                  <benefit.icon className="h-6 w-6 text-brand-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </GTorCard>
          ))}
        </div>
      </div>
    </section>
  );
};