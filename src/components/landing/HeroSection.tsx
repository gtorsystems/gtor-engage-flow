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
            className="w-80 h-auto md:w-[40rem] lg:w-[48rem] glow-subtle hover:glow-primary transition-smooth"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Revolucione o atendimento aos seus clientes<br />
          com soluções da <span className="text-brand-primary font-bold">GTor Systems</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          Já pensou em ter um atendimento 24h por dia no seu negócio ou em ter uma Central de Atendimento para múltiplos canais?
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full max-w-[400px] text-lg font-semibold px-8 py-4 glow-primary hover:glow-primary"
            onClick={() => window.open('https://wa.me/5567992054103?text=Olá! Gostaria de conhecer mais sobre as soluções da GTor Systems, poderia me ajudar?', '_blank')}
          >
            Clique aqui e descubra como!
          </Button>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};