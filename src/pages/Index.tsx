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
