import React from 'react';
import { cn } from '@/lib/utils';

interface GTorCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'minimal';
}

export const GTorCard: React.FC<GTorCardProps> = ({ 
  children, 
  className, 
  variant = 'default' 
}) => {
  const variants = {
    default: 'bg-card border border-card-border',
    gradient: 'card-gradient border border-card-border glow-subtle',
    minimal: 'bg-background-secondary border border-card-border hover:border-brand-secondary transition-smooth'
  };

  return (
    <div className={cn(
      'rounded-xl p-6 transition-smooth hover:glow-subtle',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};