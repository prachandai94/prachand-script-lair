import { useState } from "react";

export const Writers = () => {
  const writers = [
    {
      name: "Sarah Chen",
      role: "Lead Screenwriter",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=400&h=600&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez", 
      role: "TV Show Runner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Brand Storyteller", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face"
    },
    {
      name: "James Kim",
      role: "Script Doctor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face"
    },
    {
      name: "Elena Volkov", 
      role: "Creative Producer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Comedy Writer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
              
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {writer.name}
              </h3>
              
              <p className="text-xs text-samurai-red font-medium">
                {writer.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};