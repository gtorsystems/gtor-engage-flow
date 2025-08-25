import React from 'react';
import { MessageSquare, Bot, TrendingUp, Users2 } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: 'Atendimento Centralizado',
      description: 'Todos os WhatsApps da empresa unificados em uma única plataforma. Sua equipe responde tudo de um só lugar.'
    },
    {
      icon: Bot,
      title: 'Automação Inteligente',
      description: 'Chatbots fazem triagem, respondem dúvidas frequentes e qualificam leads antes de passar para humanos.'
    },
    {
      icon: TrendingUp,
      title: 'Mais Vendas',
      description: 'Resposta mais rápida, organização melhor e automação resultam em mais conversões e satisfação.'
    },
    {
      icon: Users2,
      title: 'Equipe Mais Produtiva',
      description: 'Colaboração entre a equipe com relatórios completos para gestores acompanharem o desempenho.'
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Revolução no seu <span className="text-brand-primary">Atendimento</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto mb-8">
            Nossa plataforma implementa uma <strong>caixa de entrada unificada</strong> que centraliza todos os canais de WhatsApp da sua empresa em um único número oficial.
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