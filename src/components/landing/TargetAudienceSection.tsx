import React from 'react';
import { Heart, Scissors, Store, Briefcase, Stethoscope, PawPrint } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const TargetAudienceSection: React.FC = () => {
  const segments = [
    {
      icon: Stethoscope,
      title: 'Clínicas Médicas e Odontológicas',
      description: 'Organize agendamentos, confirmações e atendimento ao paciente de forma profissional.'
    },
    {
      icon: PawPrint,
      title: 'Pet Shops e Veterinários',
      description: 'Facilite o agendamento de consultas e mantenha os donos informados sobre seus pets.'
    },
    {
      icon: Scissors,
      title: 'Salões de Beleza',
      description: 'Gerencie horários, confirmações e promoções de forma automatizada e elegante.'
    },
    {
      icon: Store,
      title: 'Comércios Locais',
      description: 'Atenda clientes, processe pedidos e tire dúvidas sobre produtos de forma eficiente.'
    },
    {
      icon: Briefcase,
      title: 'Escritórios e Serviços',
      description: 'Qualifique leads, agende reuniões e mantenha um atendimento profissional.'
    },
    {
      icon: Heart,
      title: 'Outros Negócios',
      description: 'Nossa solução se adapta a qualquer tipo de negócio que use WhatsApp.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perfeito para o seu <span className="text-brand-primary">Negócio</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Nossa solução já ajuda centenas de pequenos e médios negócios a transformarem seu atendimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {segments.map((segment, index) => (
            <GTorCard key={index} variant="minimal" className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-smooth">
                  <segment.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {segment.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>
            </GTorCard>
          ))}
        </div>
        
        <div className="text-center">
          <GTorCard variant="gradient" className="max-w-2xl mx-auto p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Não importa o tamanho do seu negócio
            </h3>
            <p className="text-foreground-muted mb-4">
              Se você usa WhatsApp para atender clientes, nossa plataforma pode revolucionar seus resultados.
            </p>
            <p className="text-brand-primary font-semibold">
              ✅ De 1 a 50+ funcionários<br/>
              ✅ Qualquer segmento de mercado<br/>
              ✅ Setup rápido e treinamento incluso
            </p>
          </GTorCard>
        </div>
      </div>
    </section>
  );
};