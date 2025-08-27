import React from 'react';
import { MessageCircleX, Clock, Users, BarChart3 } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: MessageCircleX,
      title: 'Comunicação Fragmentada',
      description: 'Múltiplos aplicativos e canais dispersos prejudicam a eficiência do atendimento'
    },
    {
      icon: Clock,
      title: 'Falta de Controle',
      description: 'Sem visibilidade sobre qualidade e velocidade do atendimento da equipe'
    },
    {
      icon: Users,
      title: 'Histórico Desorganizado',
      description: 'Informações do cliente espalhadas, dificultando o acompanhamento'
    },
    {
      icon: BarChart3,
      title: 'Confusão do Cliente',
      description: 'Vários números de contato para a mesma empresa geram desorientação'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-destructive">Problemas</span> no Atendimento ao Cliente
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Estas são as principais dificuldades que afetam a qualidade do seu atendimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <GTorCard key={index} variant="minimal" className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-destructive/10 border border-destructive/20 group-hover:bg-destructive/20 transition-smooth">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {problem.description}
              </p>
            </GTorCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground font-bold text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto glow-subtle">
            Se você se identificou com pelo menos um desses problemas, temos a solução perfeita para você.
          </p>
        </div>
      </div>
    </section>
  );
};