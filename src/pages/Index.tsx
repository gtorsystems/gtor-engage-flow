import React, { useEffect } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { TargetAudienceSection } from '@/components/landing/TargetAudienceSection';
import { FinalCTASection } from '@/components/landing/FinalCTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    // Load Chatwoot SDK
    const BASE_URL = "https://chat-digitalocean.gtorsystems.cloud/";
    const script = document.createElement('script');
    script.src = BASE_URL + "/packs/js/sdk.js";
    script.async = true;
    
    script.onload = function() {
      if ((window as any).chatwootSDK) {
        (window as any).chatwootSDK.run({
          websiteToken: 'snEHTvWoUgcHZCN4x5NAaQK9',
          baseUrl: BASE_URL
        });
      }
    };
    
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(`script[src="${BASE_URL}/packs/js/sdk.js"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TargetAudienceSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
