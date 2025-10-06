import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Writers } from "@/components/Writers";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ScriptDownload } from "@/components/ScriptDownload";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Handle smooth scrolling for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <main>
        <Hero />
        <div className="reveal stagger-1">
          <About />
        </div>
        
        {/* Samurai Divider */}
        <div className="pt-0 pb-0 sm:pt-0 sm:pb-1 bg-background">
          <div className="container mx-auto px-4 flex justify-center">
            <img 
              src="/lovable-uploads/193a570d-71c6-437f-be7a-7ea0740f8df0.png" 
              alt="Samurai silhouette" 
              className="h-20 sm:h-36 md:h-48 lg:h-60 w-auto filter brightness-0 drop-shadow-lg"
            />
          </div>
        </div>
        
        <div className="reveal stagger-2">
          <Services />
        </div>
        <div className="reveal stagger-3">
          <Writers />
        </div>
        <div className="reveal stagger-1">
          <Process />
        </div>
        <div className="reveal stagger-2">
          <ScriptDownload />
        </div>
        <div className="reveal stagger-2">
          <Contact />
        </div>
      </main>
      <PreFooterCTA />
    </div>
  );
};

export default Index;
