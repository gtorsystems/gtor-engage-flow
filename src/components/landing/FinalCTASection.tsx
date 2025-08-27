import React from 'react';
import { Button } from '@/components/ui/button';
import { GTorCard } from './GTorCard';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-brand-primary">Transforme</span> seu Atendimento Agora
          </h2>
          <p className="text-foreground-muted text-xl max-w-3xl mx-auto">
            Experimente nossa plataforma e veja a diferença que um atendimento unificado pode fazer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Benefits */}
          <GTorCard variant="gradient" className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              O que você ganha:
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
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Solicite sua Demonstração
              </h3>
              <p className="text-foreground-muted mb-6">
                Veja na prática como nossa plataforma pode revolucionar seu atendimento
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full"
                onClick={() => window.open('https://wa.me/5567992054103?text=Olá, gostaria de solicitar uma demonstração gratuita da plataforma GTor Systems', '_blank')}
              >
                Fale Conosco agora no WhatsApp e solicite uma demonstração gratuita
              </Button>
              
              <div className="bg-background/20 rounded-lg p-4 border border-card-border">
                <p className="text-foreground-muted text-sm">
                  <span className="font-semibold text-brand-primary">WhatsApp:</span> (67) 99205-4103
                </p>
                <p className="text-foreground-subtle text-xs mt-1">
                  Demonstração personalizada ou orçamento para o seu negócio
                </p>
              </div>
            </div>
          </GTorCard>
        </div>
      </div>
    </section>
  );
};