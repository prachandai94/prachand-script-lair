import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "writers", label: "Writers" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:scripts@prachandentertainment.com", label: "Email" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-background border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src="/lovable-uploads/82b47104-a93b-4811-bcb2-e74046f725af.png" alt="Scripts" className="h-8 w-auto" />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              The in-house writing team of Prachand Entertainment. 
              Crafting compelling narratives across all formats.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-text-muted hover:text-samurai-red transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>


          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-text-primary font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:scripts@prachandentertainment.com"
                className="text-text-secondary hover:text-samurai-red transition-colors block"
              >
                scripts@prachandentertainment.com
              </a>
              <p className="text-text-muted">
                Ready to collaborate? Pitch your project and let's create something extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Prachand Scripts. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            A division of{" "}
            <a 
              href="https://www.prachandentertainment.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-samurai-red hover:underline"
            >
              Prachand Entertainment
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};