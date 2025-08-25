import React from 'react';
import { Button } from '@/components/ui/button';
import gtorLogo from '@/assets/gtor-logo.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      
      <div className="container relative z-10 text-center px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={gtorLogo} 
            alt="GTor Systems Logo" 
            className="h-16 w-16 opacity-90"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Chega de Confusão no WhatsApp.<br />
          <span className="text-brand-primary">Centralize seu Atendimento</span>{' '}
          e Venda Mais.
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto mb-8 leading-relaxed">
          Unificamos todos os seus números de atendimento em um só, com assistentes virtuais que trabalham 24/7 para você.
        </p>
        
        {/* Slogan */}
        <p className="text-brand-secondary font-medium mb-12 uppercase tracking-wider">
          Automação Inteligente para o seu Atendimento
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="min-w-[280px]">
            Fale com um Especialista
          </Button>
          <Button variant="hero-outline" size="xl" className="min-w-[280px]">
            Ver Demonstração
          </Button>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};