import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && window.innerWidth > 768) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      return () => heroSection.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Cursor Follow Effect */}
      <div ref={cursorRef} className="cursor-glow hidden md:block" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
          <span className="text-text-primary">If the Sword</span>
          <br />
          <span className="text-samurai-red brush-stroke shadow-red">Became a Pen</span>
          <br />
          <span className="text-text-primary">We are Samurai of Today</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Disciplined storytelling forged by Prachand Entertainment's warrior scribes. We craft narratives with precision, honor, and cinematic vision—turning concepts into compelling stories across all mediums.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="samurai" 
            size="lg"
            onClick={scrollToContact}
            className="group"
          >
            Pitch a Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("https://www.prachandentertainment.com/", "_blank")}
            className="group"
          >
            Visit Mother Website
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
      
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-samurai-red rounded-full flex justify-center">
            <div className="w-1 h-3 bg-samurai-red rounded-full mt-2 animate-pulse" />
          </div>
        </div>
    </section>
  );
};