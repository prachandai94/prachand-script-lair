import { useState } from "react";

export const Writers = () => {
  const writers = [
    {
      name: "Arjun Sharma",
      role: "Lead Screenwriter",
      image: "/lovable-uploads/42ffc777-ea98-47ca-9c1b-70e2001b94d5.png"
    },
    {
      name: "Rohit Verma", 
      role: "Creative Director",
      image: "/lovable-uploads/9f5afc98-ee5a-4f1a-8399-3dc6e51d0cca.png"
    },
    {
      name: "Vikram Singh",
      role: "Script Doctor", 
      image: "/lovable-uploads/02bc8c98-1380-49bd-867f-a15df619a244.png"
    }
  ];

  return (
    <section id="writers" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Our <span className="text-samurai-red brush-stroke">Roster</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
        </div>

        {/* Writers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
              
              <p className="text-sm text-samurai-red font-medium">
                {writer.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};