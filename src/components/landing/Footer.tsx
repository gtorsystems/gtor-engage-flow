import React from 'react';
import gtorLogo from '@/assets/gtor-logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-card-border py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={gtorLogo} alt="GTor Systems" className="h-8 w-8" />
            <div>
              <div className="font-semibold text-foreground">GTor Systems</div>
              <div className="text-xs text-foreground-subtle">Automação Inteligente para o seu Atendimento</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-foreground-muted">
              © 2024 GTor Systems. Todos os direitos reservados.
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