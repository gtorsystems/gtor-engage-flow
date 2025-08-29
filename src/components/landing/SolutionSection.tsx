import React from 'react';
import { MessageSquare, Bot, TrendingUp, Users2 } from 'lucide-react';
import { GTorCard } from './GTorCard';
import gtorLogo from '/lovable-uploads/da751f81-8e81-4184-86f7-e9244410b561.png';

export const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Centralizado',
      description: 'Unificamos todos os números de vendedores e setores em um único número de contato'
    },
    {
      icon: Bot,
      title: 'Fluxo de Atendimento Inteligente',
      description: 'Transferimos conversas entre atendentes e direcionamos para o setor correto (vendas, suporte, etc.)'
    },
    {
      icon: TrendingUp,
      title: 'IA para Atendimento Natural',
      description: 'Usamos IA para conversar naturalmente com os clientes e transferir para um humano quando necessário'
    },
    {
      icon: Users2,
      title: 'Gestão e Auditoria',
      description: 'Oferecemos relatórios de tempo de resposta e qualidade do atendimento, garantindo controle total'
    }
  ];

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            <span className="text-brand-primary">A GTor Systems</span> tem a <span className="text-brand-primary">solução!</span>
          </h2>
          <p className="text-foreground-muted text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Automatize o atendimento do seu Whatsapp com <span className="font-semibold text-brand-primary">Inteligência Artificial</span> ou tenha sua própria Central de Atendimento unificando todos os seus canais de atendimento!
          </p>
          
          {/* Modern Infographic - Before and After */}
          <div className="max-w-6xl mx-auto mb-12">
            <GTorCard variant="gradient" className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* ANTES - A Desorganização */}
                <div className="flex-1 text-center">
                  <div className="text-foreground-subtle text-lg font-semibold mb-6 uppercase tracking-wide">ANTES</div>
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      {/* WhatsApp Icons - Desaligned */}
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform -rotate-2">
                        <MessageSquare className="h-8 w-8 text-foreground-subtle mx-auto mb-2" />
                        <span className="text-xs text-foreground-subtle">WhatsApp Vendedor A</span>
                      </div>
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform rotate-1 mt-4">
                        <MessageSquare className="h-8 w-8 text-foreground-subtle mx-auto mb-2" />
                        <span className="text-xs text-foreground-subtle">Instagram Direct</span>
                      </div>
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform rotate-3 -mt-2">
                        <MessageSquare className="h-8 w-8 text-foreground-subtle mx-auto mb-2" />
                        <span className="text-xs text-foreground-subtle">Chat do Site</span>
                      </div>
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform -rotate-1">
                        <MessageSquare className="h-8 w-8 text-foreground-subtle mx-auto mb-2" />
                        <span className="text-xs text-foreground-subtle">WhatsApp Vendedor B</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Transição Animada */}
                <div className="flex-shrink-0 flex flex-col lg:flex-row items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-foreground-subtle to-brand-primary rounded-full animate-pulse"></div>
                    <div className="w-16 h-1 lg:w-1 lg:h-16 bg-gradient-to-r lg:bg-gradient-to-b from-foreground-subtle to-brand-primary"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-foreground-subtle to-brand-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* DEPOIS - A Solução GTor */}
                <div className="flex-1 text-center">
                  <div className="text-foreground-subtle text-lg font-semibold mb-6 uppercase tracking-wide">DEPOIS</div>
                  <div className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 p-8 rounded-2xl border border-brand-primary/30 glow-primary">
                    <img 
                      src={gtorLogo} 
                      alt="GTor Systems" 
                      className="h-16 w-16 mx-auto mb-4 glow-subtle" 
                    />
                    <h3 className="text-xl font-bold text-brand-primary mb-2">
                      Central de Atendimento Inteligente
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      Todos os canais unificados com IA
                    </p>
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
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {benefit.description}
              </p>
            </GTorCard>
          ))}
        </div>
      </div>
    </section>
  );
};