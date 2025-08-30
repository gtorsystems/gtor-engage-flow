import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import gtorLogo from '/lovable-uploads/da751f81-8e81-4184-86f7-e9244410b561.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary border-t border-card-border py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo centralizado */}
          <div className="flex justify-center">
            <img 
              src={gtorLogo} 
              alt="GTor Systems - Automação Inteligente" 
              className="w-32 h-auto md:w-40 lg:w-48 glow-subtle" 
            />
          </div>
          
          {/* Informações de contato em duas colunas */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="https://wa.me/5567992054103"
              className="flex items-center gap-3 text-foreground hover:text-brand-primary transition-smooth group"
            >
              <MessageCircle className="h-5 w-5 text-brand-primary group-hover:glow-subtle transition-smooth" />
              <span className="font-medium text-2xl">(67) 99205-4103</span>
            </a>
            
            <a 
              href="mailto:contato@gtorsystems.cloud"
              className="flex items-center gap-3 text-foreground hover:text-brand-primary transition-smooth group"
            >
              <Mail className="h-5 w-5 text-brand-primary group-hover:glow-subtle transition-smooth" />
              <span className="font-medium text-2xl">contato@gtorsystems.cloud</span>
            </a>
          </div>
          
          {/* Copyright centralizado */}
          <div className="text-center pt-4 border-t border-card-border w-full">
            <p className="text-foreground-muted">
              © 2025 GTor Systems. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};