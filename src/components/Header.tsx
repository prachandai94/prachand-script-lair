import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "services", "writers", "blogs", "process", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };
  const navItems = [{
    id: "about",
    label: "About"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "writers",
    label: "Roster"
  }, {
    id: "blogs",
    label: "Blogs"
  }, {
    id: "process",
    label: "Process"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "paper backdrop-blur-lg border-b border-paper-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Prachand Scripts" className="h-8 sm:h-10 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-text-primary">Prachand Scripts</h1>
              <p className="text-xs text-text-secondary">Warrior Scribes</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-samurai-red bg-samurai-red/10"
                    : "text-text-secondary hover:text-samurai-red hover:bg-samurai-red/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Get Connected Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="samurai"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2"
            >
              Get Connected
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="samurai"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-xs"
            >
              Get Connected
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Visible Navigation */}
        <div className="lg:hidden mt-4 pt-4 border-t border-samurai-red/10">
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-samurai-red bg-samurai-red/10"
                    : "text-text-secondary hover:text-samurai-red hover:bg-samurai-red/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>;
};