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
                        <MessageSquare className="h-8 w-8 text-white mx-auto mb-2" />
                        <span className="text-xs text-white">WhatsApp Vendedor A</span>
                      </div>
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform rotate-1 mt-4">
                        <MessageSquare className="h-8 w-8 text-white mx-auto mb-2" />
                        <span className="text-xs text-white">Instagram Direct</span>
                      </div>
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform rotate-3 -mt-2">
                        <MessageSquare className="h-8 w-8 text-white mx-auto mb-2" />
                        <span className="text-xs text-white">Chat do Site</span>
                      </div>
                      <div className="bg-foreground-subtle/10 p-4 rounded-lg border border-foreground-subtle/20 transform -rotate-1">
                        <MessageSquare className="h-8 w-8 text-white mx-auto mb-2" />
                        <span className="text-xs text-white">WhatsApp Vendedor B</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Transição com Seta Estilizada */}
                <div className="flex-shrink-0 flex flex-col lg:flex-row items-center">
                  <div className="flex items-center">
                    <svg 
                      className="w-16 h-16 text-brand-primary animate-pulse" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                </div>
                
                {/* DEPOIS - A Solução GTor */}
                <div className="flex-1 text-center">
                  <div className="text-foreground-subtle text-lg font-semibold mb-6 uppercase tracking-wide">DEPOIS</div>
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-8 rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 transform hover:scale-105 transition-all duration-300">
                    <img 
                      src={gtorLogo} 
                      alt="GTor Systems" 
                      className="h-16 w-16 mx-auto mb-4 drop-shadow-lg" 
                    />
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                      Central de Atendimento Inteligente
                    </h3>
                    <p className="text-sm text-white/90 drop-shadow-sm">
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