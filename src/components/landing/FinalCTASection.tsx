import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GTorCard } from './GTorCard';
import { CheckCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessType: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !formData.businessType) {
      toast({
        title: "Preencha todos os campos",
        description: "Precisamos de suas informações para agendar a demonstração.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    toast({
      title: "Demonstração agendada!",
      description: "Entraremos em contato em até 24 horas.",
    });

    // Reset form
    setFormData({ name: '', whatsapp: '', businessType: '' });
  };

  const benefits = [
    'Demonstração gratuita personalizada',
    'Setup completo em até 48 horas',
    'Treinamento da equipe incluso',
    'Suporte técnico especializado',
    'Sem taxa de instalação'
  ];

  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-primary/5 pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transforme seu Atendimento <span className="text-brand-primary">Agora</span>
            </h2>
            <p className="text-foreground-muted text-lg">
              Pare de perder vendas por causa de um atendimento desorganizado. 
              <br className="hidden md:block" />
              Solicite uma demonstração gratuita e veja a diferença em 30 dias.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Benefits */}
            <GTorCard variant="gradient" className="order-2 lg:order-1">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Phone className="h-5 w-5 text-brand-primary" />
                O que você ganha:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    <span className="text-foreground-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </GTorCard>
            
            {/* Contact Form */}
            <GTorCard variant="gradient" className="order-1 lg:order-2 glow-primary">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Solicitar Demonstração Gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-background border-card-border focus:border-brand-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                    className="bg-background border-card-border focus:border-brand-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Negócio
                  </label>
                  <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                    <SelectTrigger className="bg-background border-card-border focus:border-brand-primary">
                      <SelectValue placeholder="Selecione seu segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinica-medica">Clínica Médica</SelectItem>
                      <SelectItem value="clinica-odontologica">Clínica Odontológica</SelectItem>
                      <SelectItem value="pet-shop">Pet Shop / Veterinário</SelectItem>
                      <SelectItem value="salao-beleza">Salão de Beleza</SelectItem>
                      <SelectItem value="comercio-local">Comércio Local</SelectItem>
                      <SelectItem value="escritorio">Escritório / Serviços</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" variant="cta" size="lg" className="w-full mt-6">
                  Solicitar Demonstração Gratuita
                </Button>
              </form>
              
              <p className="text-center text-foreground-subtle text-xs mt-4">
                Entraremos em contato em até 24 horas úteis
              </p>
            </GTorCard>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground-subtle text-sm">
              Dúvidas? Fale diretamente conosco: 
              <span className="text-brand-primary font-medium ml-1">(11) 99999-9999</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};