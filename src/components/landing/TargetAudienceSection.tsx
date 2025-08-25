import React from 'react';
import { Scissors, Store, Stethoscope, PawPrint } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const TargetAudienceSection: React.FC = () => {
  const segments = [
    {
      icon: Stethoscope,
      title: 'Clínicas',
      description: 'Agendamentos + Confirmações automatizadas'
    },
    {
      icon: PawPrint,
      title: 'Pet Shops',
      description: 'Consultas organizadas, donos informados'
    },
    {
      icon: Scissors,
      title: 'Salões',
      description: 'Horários + Promoções no automático'
    },
    {
      icon: Store,
      title: 'Comércios',
      description: 'Pedidos organizados, vendas aumentadas'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funciona para <span className="text-brand-primary">Qualquer Negócio</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Centenas de empresas já transformaram seus resultados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {segments.map((segment, index) => (
            <GTorCard key={index} variant="minimal" className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-smooth">
                  <segment.icon className="h-6 w-6 text-brand-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {segment.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {segment.description}
              </p>
            </GTorCard>
          ))}
        </div>
        
        <div className="text-center">
          <GTorCard variant="gradient" className="max-w-xl mx-auto p-6">
            <p className="text-brand-primary font-semibold text-lg">
              ✅ 1 a 50+ funcionários<br/>
              ✅ Setup em 48 horas<br/>
              ✅ Treinamento incluso
            </p>
          </GTorCard>
        </div>
      </div>
    </section>
  );
};