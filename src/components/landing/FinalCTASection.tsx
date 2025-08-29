import React from 'react';
import { Button } from '@/components/ui/button';
import { GTorCard } from './GTorCard';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            <span className="text-brand-primary">Revolucione</span> o seu Atendimento!
          </h2>
          <p className="text-foreground-muted text-xl max-w-3xl mx-auto leading-relaxed">
            Conheça nossos produtos e descubra o que melhor se encaixa em seu negócio, independente do seu <span className="font-semibold text-brand-primary">tamanho</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Benefits */}
          <GTorCard variant="gradient" className="p-8">
            <h3 className="text-2xl font-extrabold text-foreground mb-6">
              Oferecemos:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground-muted">
                  Central unificada de todos os canais de comunicação
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground-muted">
                  IA integrada para atendimento 24/7
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground-muted">
                  Relatórios completos de qualidade e tempo de resposta
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground-muted">
                  Fluxo inteligente de transferência entre setores
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground-muted">
                  Histórico completo e organizado de cada cliente
                </span>
              </div>
            </div>
          </GTorCard>

          {/* Contact CTA */}
          <GTorCard variant="gradient" className="p-8 text-center flex flex-col justify-center">
            <div className="mb-8">
              <MessageCircle className="h-16 w-16 text-brand-primary mx-auto mb-4 glow-subtle" />
              <h3 className="text-2xl font-extrabold text-foreground mb-4">
                Entre em contato agora
              </h3>
              <p className="text-foreground-muted mb-6">
                GTor Systems é a solução que precisa para sua empresa.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full text-lg font-semibold px-8 py-4 glow-primary hover:glow-primary"
                onClick={() => window.open('https://wa.me/5567992054103?text=Olá, gostaria de solicitar uma demonstração gratuita da plataforma GTor Systems', '_blank')}
              >
                Fale conosco!
              </Button>
            </div>
          </GTorCard>
        </div>
      </div>
    </section>
  );
};