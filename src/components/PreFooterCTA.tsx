import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const PreFooterCTA = () => {
  return (
    <section className="py-16 border-t border-glass-border bg-background-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Prachand Scripts" className="h-12 w-auto" />
          </div>

          {/* Center: Neon Divider */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-px md:w-full md:h-px h-16 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-neon-red to-transparent glow-red" />
          </div>

          {/* Right: Visit Mother Website Button */}
          <div className="flex-shrink-0">
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => window.open("https://www.prachandentertainment.com/", "_blank")}
              className="group px-12 py-4 text-lg"
            >
              Visit Mother Website
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};