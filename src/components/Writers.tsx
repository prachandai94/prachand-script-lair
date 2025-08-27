import { useState } from "react";

export const Writers = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const writers = [
    {
      name: "Sarah Chen",
      role: "Lead Screenwriter",
      bio: "Award-winning screenwriter with 8+ years in feature films and streaming content.",
      genres: ["Drama", "Thriller", "Sci-Fi"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "TV Show Runner",
      bio: "Veteran show runner with credits on Emmy-nominated series and viral digital content.",
      genres: ["Comedy", "Drama", "Digital"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Brand Storyteller",
      bio: "Creative director specializing in advertising narratives that drive cultural conversations.",
      genres: ["Advertising", "Brand", "Digital"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Kim",
      role: "Script Doctor",
      bio: "Professional script consultant with expertise in story structure and character development.",
      genres: ["Film", "TV", "Consulting"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Elena Volkov",
      role: "Creative Producer",
      bio: "Multilingual writer and producer with international film festival recognition.",
      genres: ["Film", "International", "Production"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Comedy Writer",
      bio: "Stand-up comedian turned screenwriter, specializing in authentic dialogue and humor.",
      genres: ["Comedy", "TV", "Digital"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const filters = ["all", "Film", "TV", "Digital", "Advertising", "Comedy", "Drama"];

  const filteredWriters = activeFilter === "all" 
    ? writers 
    : writers.filter(writer => writer.genres.includes(activeFilter));

  return (
    <section id="writers" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Our <span className="text-samurai-red brush-stroke">Roster</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            Meet the creative minds behind every script. Each writer brings unique expertise 
            and collaborative spirit to craft compelling narratives.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-samurai-red text-white shadow-elegant"
                    : "paper text-text-secondary hover:text-samurai-red hover:border-samurai-red"
                }`}
              >
                {filter === "all" ? "All Writers" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Writers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWriters.map((writer, index) => (
            <div 
              key={writer.name}
              className="paper-hover rounded-2xl p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={writer.image} 
                  alt={writer.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {writer.name}
              </h3>
              
              <p className="text-samurai-red font-medium mb-3">
                {writer.role}
              </p>
              
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {writer.bio}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {writer.genres.map((genre) => (
                  <span 
                    key={genre}
                    className="px-3 py-1 bg-background-secondary/50 border border-glass-border rounded-full text-xs text-text-muted"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};