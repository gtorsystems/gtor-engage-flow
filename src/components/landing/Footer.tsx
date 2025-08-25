import React from 'react';
import gtorLogo from '/lovable-uploads/da751f81-8e81-4184-86f7-e9244410b561.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-card-border py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={gtorLogo} 
              alt="GTor Systems - Automação Inteligente" 
              className="h-12 w-12 glow-subtle" 
            />
            <div>
              <div className="font-semibold text-foreground">GTor Systems</div>
              <div className="text-xs text-foreground-subtle">Automação Inteligente para o seu Atendimento</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground-muted">
              © 2025 GTor Systems. Todos os direitos reservados.
            </p>
            <p className="text-xs text-foreground-subtle">
              Transformando o atendimento via WhatsApp para pequenos negócios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};