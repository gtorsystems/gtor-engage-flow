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
            className="h-32 w-32 md:h-48 md:w-48 lg:h-56 lg:w-56 glow-subtle hover:glow-primary transition-smooth"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          <span className="text-brand-primary">Transforme</span> seu WhatsApp<br />
          em uma <span className="text-brand-primary">Máquina de Vendas</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-6 leading-relaxed font-medium">
          Unificamos todos os WhatsApps da sua empresa + Automação Inteligente 24/7
        </p>
        
        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-brand-secondary">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium">Mais Vendas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium">Zero Mensagens Perdidas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <span className="text-sm font-medium">Equipe Organizada</span>
          </div>
        </div>
        
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