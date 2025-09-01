import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const PreFooterCTA = () => {
  return (
    <section className="py-12 sm:py-16 border-t border-paper-border bg-background-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0 order-1 md:order-1">
            <img src={logo} alt="Prachand Scripts" className="h-8 sm:h-10 md:h-12 w-auto" />
          </div>

          {/* Center: Samurai Divider */}
          <div className="flex-1 flex items-center justify-center order-3 md:order-2">
            <div className="w-full md:w-full h-px md:h-px bg-gradient-to-r from-transparent via-samurai-red to-transparent shadow-red" />
          </div>

          {/* Right: Visit Mother Website Button */}
          <div className="flex-shrink-0 order-2 md:order-3 w-full md:w-auto">
            <Button 
              variant="samurai" 
              size="lg"
              onClick={() => window.open("https://www.prachandentertainment.com/", "_blank")}
              className="group w-full md:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg"
            >
              Visit Mother Website
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};