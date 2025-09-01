import { useState } from "react";

export const Writers = () => {
  const writers = [
    {
      name: "Alii Khan",
      role: "Lead Screenwriter",
      image: "/lovable-uploads/42ffc777-ea98-47ca-9c1b-70e2001b94d5.png"
    },
    {
      name: "Divith Shetty", 
      role: "Creative Director",
      image: "/lovable-uploads/9f5afc98-ee5a-4f1a-8399-3dc6e51d0cca.png"
    },
    {
      name: "Sanchit Chadha",
      role: "Script Doctor", 
      image: "/lovable-uploads/02bc8c98-1380-49bd-867f-a15df619a244.png"
    }
  ];

  return (
    <section id="writers" className="py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            <span className="text-samurai-red brush-stroke">The Core Team</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
        </div>

        {/* Writers Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile Triangle Layout */}
          <div className="grid md:hidden gap-4">
            {/* Top row - Two writers */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {writers.slice(0, 2).map((writer, index) => (
                <div 
                  key={writer.name}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[3/4] mb-2 rounded-lg overflow-hidden">
                    <img 
                      src={writer.image} 
                      alt={writer.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-text-primary">
                    {writer.name}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* Bottom row - One writer centered */}
            <div className="flex justify-center">
              <div 
                className="text-center group w-32"
                style={{ animationDelay: `${2 * 0.1}s` }}
              >
                <div className="aspect-[3/4] mb-2 rounded-lg overflow-hidden">
                  <img 
                    src={writers[2].image} 
                    alt={writers[2].name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <h3 className="text-sm font-semibold text-text-primary">
                  {writers[2].name}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {writers.map((writer, index) => (
              <div 
                key={writer.name}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={writer.image} 
                    alt={writer.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {writer.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};