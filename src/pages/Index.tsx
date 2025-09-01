import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Writers } from "@/components/Writers";
import { Services } from "@/components/Services";
import { Blogs } from "@/components/Blogs";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
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
        <div className="py-8 sm:py-12 bg-background">
          <div className="container mx-auto px-4 flex justify-center">
            <img 
              src="/lovable-uploads/148b1060-591b-42d4-acb8-a6962b849256.png" 
              alt="Samurai silhouette" 
              className="h-24 sm:h-32 md:h-40 w-auto opacity-80 filter drop-shadow-lg"
            />
          </div>
        </div>
        
        <div className="reveal stagger-2">
          <Services />
        </div>
        <div className="reveal stagger-3">
          <Writers />
        </div>
        <div className="reveal stagger-4">
          <Blogs />
        </div>
        <div className="reveal stagger-1">
          <Process />
        </div>
        <div className="reveal stagger-2">
          <Contact />
        </div>
      </main>
      <PreFooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
