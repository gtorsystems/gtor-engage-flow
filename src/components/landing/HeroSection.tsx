import React from 'react';
import { Button } from '@/components/ui/button';
import gtorLogo from '/lovable-uploads/da751f81-8e81-4184-86f7-e9244410b561.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      
      <div className="container relative z-10 text-center px-4">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src={gtorLogo} 
            alt="GTor Systems - Automação Inteligente para WhatsApp" 
            className="w-[500px] h-[500px] glow-subtle hover:glow-primary transition-smooth"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          <span className="text-brand-primary">Revolutione</span> o Atendimento ao Cliente<br />
          com <span className="text-brand-primary">IA e uma Central Unificada</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-6 leading-relaxed font-medium">
          Centralize todos os canais de atendimento (WhatsApp, Instagram, Chat) em uma única plataforma e automatize o fluxo de conversas com Inteligência Artificial 24/7.
        </p>
        
        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-brand-secondary">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium">Atendimento Unificado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium">IA 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium">Controle Total</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <Button 
            variant="hero" 
            size="xl" 
            className="min-w-[400px]"
            onClick={() => window.open('https://wa.me/5567992054103?text=Olá, gostaria de solicitar uma demonstração gratuita da plataforma GTor Systems', '_blank')}
          >
            Fale Conosco agora no WhatsApp e solicite uma demonstração gratuita
          </Button>
          <p className="text-foreground-muted text-lg max-w-md text-center">
            Envie uma mensagem para <span className="text-brand-primary font-semibold">(67) 99205-4103</span> para uma demonstração personalizada ou orçamento para o seu negócio.
          </p>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};