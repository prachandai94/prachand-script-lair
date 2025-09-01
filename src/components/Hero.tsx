import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroBg from "/lovable-uploads/c6da8614-ad6e-44e8-9d6a-04bcac1466ca.png";
export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundColor: "hsl(0, 75%, 45%)",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: window.innerWidth <= 768 ? "cover" : "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }}>
      
      {/* Subtle Overlay for text readability */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <img src="/lovable-uploads/536865e8-176d-4d94-8c25-2a112458ec03.png" alt="Scripts Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto mb-6 drop-shadow-2xl" />
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 tracking-tight leading-none text-center">
          <span className="text-text-primary">The Pen Is The New </span>
          <span className="text-samurai-red">Sword</span>
          <span className="text-text-primary">.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">"This is Sparta! No... This is Writing."</p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center px-4">
          <Button variant="samurai" onClick={scrollToContact} className="group w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg">
            Send us a Brief
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button variant="outline" onClick={() => window.open("https://www.prachandentertainment.com/", "_blank")} className="group w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg">
            Visit Mother Website
            <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
      
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
    </section>;
};