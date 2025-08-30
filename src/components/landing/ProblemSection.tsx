import React from 'react';
import { MessageCircleX, Clock, Users, BarChart3 } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: MessageCircleX,
      title: 'Comunicação ineficiente',
      description: 'A dificuldade de entendimento do que o cliente quer faz ele ter uma péssima impressão do seu negócio.'
    },
    {
      icon: Clock,
      title: 'Demora para responder',
      description: 'Seus clientes ficam frustrados com a demora no atendimento no WhatsApp e acabam indo para a concorrência.'
    },
    {
      icon: Users,
      title: 'Vários números de contato',
      description: 'O cliente é do seu atendente e não da sua empresa, impedindo o seu gerenciamento adequado.'
    },
    {
      icon: BarChart3,
      title: 'Falta de controle',
      description: 'Quantas mensagens por dia sua empresa recebe? Quantas não são atendidas? Já pensou nisso?'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Seu atendimento ainda está no <span className="text-destructive">passado</span>?
          </h2>
          <p className="text-foreground-muted text-xl max-w-2xl mx-auto leading-relaxed">
            Estes são os problemas mais comuns nos atendimentos virtuais:
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
          <p className="text-foreground font-extrabold text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto glow-subtle">
            Se você se identificou com pelo menos um desses problemas, temos a <span className="text-brand-primary">solução perfeita</span> para você.
          </p>
        </div>
      </div>
    </section>
  );
};