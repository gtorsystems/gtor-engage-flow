import React from 'react';
import { Stethoscope, Heart, ShoppingBag, Users } from 'lucide-react';
import { GTorCard } from './GTorCard';

export const TargetAudienceSection: React.FC = () => {
  const segments = [
    {
      icon: Stethoscope,
      title: 'Clínicas e Consultórios',
      description: 'Agendamentos e confirmações automatizados com histórico centralizado de cada paciente'
    },
    {
      icon: Heart,
      title: 'Pet Shops',
      description: 'Atendimento personalizado para cuidados com animais, com controle de qualidade das conversas'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Suporte a vendas online e atendimento pós-venda com IA integrada e relatórios completos'
    },
    {
      icon: Users,
      title: 'Serviços Gerais',
      description: 'Qualquer negócio que precisa de atendimento eficiente, organizado e com gestão de conversas'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            <span className="text-brand-primary">Funciona</span> para Qualquer Negócio
          </h2>
          <p className="text-foreground-muted text-xl max-w-3xl mx-auto leading-relaxed">
            Independente do seu segmento, nossa plataforma se adapta às suas necessidades, melhorando o <span className="font-semibold text-brand-primary">atendimento</span> e a <span className="font-semibold text-brand-primary">gestão de conversas</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">
                {segment.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
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