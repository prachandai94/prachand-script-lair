import { useState } from "react";

export const Writers = () => {
  const writers = [
    {
      name: "Alii Khan",
      role: "Lead Screenwriter",
      image: "/lovable-uploads/66b86315-5d96-495c-95b6-d163cffddad2.png"
    },
    {
      name: "Divith Shetty", 
      role: "Creative Director",
      image: "/lovable-uploads/2253b475-95b2-4ccf-b8a5-1c5085e30d70.png"
    },
    {
      name: "Sanchit Chadha",
      role: "Script Doctor", 
      image: "/lovable-uploads/5eed76e5-bab5-4176-b5e8-7427985c4077.png"
    },
    {
      name: "Sumedh Kankal",
      role: "Story Consultant", 
      image: "/lovable-uploads/b041bb5b-d738-44ff-a6cc-750be7b3e2a9.png"
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
          {/* Mobile 2x2 Grid Layout */}
          <div className="grid md:hidden grid-cols-2 gap-3 max-w-sm mx-auto">
            {writers.map((writer, index) => (
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
          
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
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