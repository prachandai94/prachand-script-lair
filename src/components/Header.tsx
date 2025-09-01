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
      const sections = ["hero", "about", "services", "writers", "work", "process", "contact"];
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
    id: "work",
    label: "Work"
  }, {
    id: "process",
    label: "Process"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "paper backdrop-blur-lg border-b border-paper-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        
      </div>
    </header>;
};