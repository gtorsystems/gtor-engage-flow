import React from 'react';
import { MessageCircleX, Clock, Users, BarChart3 } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: MessageCircleX,
      title: 'Múltiplos Números Confusos',
      description: 'Clientes não sabem qual número usar e mensagens se perdem entre diferentes WhatsApps.'
    },
    {
      icon: Clock,
      title: 'Mensagens Não Respondidas',
      description: 'Perda de vendas e clientes insatisfeitos por demora ou esquecimento no atendimento.'
    },
    {
      icon: Users,
      title: 'Equipe Desorganizada',
      description: 'Falta de coordenação entre a equipe resulta em atendimento duplicado ou perdido.'
    },
    {
      icon: BarChart3,
      title: 'Falta de Controle',
      description: 'Impossibilidade de acompanhar métricas e desempenho do atendimento ao cliente.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua empresa se identifica com isso?
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Estes são os principais problemas que pequenos negócios enfrentam com o atendimento via WhatsApp
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
          <p className="text-brand-primary font-semibold text-lg">
            Se você se identificou com pelo menos um desses problemas, temos a solução perfeita para você.
          </p>
        </div>
      </div>
    </section>
  );
};