import { Film, Tv, Monitor, Megaphone, FileEdit, Presentation } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Feature Film Screenwriting",
      description: "Full-length screenplay development from concept to final draft",
      deliverables: ["Logline & synopsis", "Treatment outline", "First draft screenplay", "Polish & revisions"]
    },
    {
      icon: Tv,
      title: "TV Bible & Episode Writing",
      description: "Series development and episodic content for streaming and broadcast",
      deliverables: ["Series bible", "Pilot script", "Episode breakdowns", "Character arcs"]
    },
    {
      icon: Monitor,
      title: "Digital/Shorts Scripting", 
      description: "Short-form content for digital platforms and social media",
      deliverables: ["Concept development", "Short scripts", "Social media content", "Web series episodes"]
    },
    {
      icon: Megaphone,
      title: "Ad Copy & Brand Storytelling",
      description: "Compelling narratives that drive brand engagement and conversions",
      deliverables: ["Brand narratives", "Campaign concepts", "Commercial scripts", "Content strategy"]
    },
    {
      icon: FileEdit,
      title: "Script Doctoring & Punch-ups",
      description: "Professional script analysis and improvement services",
      deliverables: ["Script analysis", "Structural notes", "Dialogue polish", "Character development"]
    },
    {
      icon: Presentation,
      title: "Pitch Decks & Treatments",
      description: "Professional presentation materials for project development",
      deliverables: ["Visual pitch decks", "Story treatments", "Mood boards", "Investor packages"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-text-primary">
            Our <span className="text-samurai-red brush-stroke">Services</span>
          </h2>
          <div className="samurai-divider mb-6 sm:mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From spark to screenplay, we deliver production-ready scripts 
            across every format and platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="paper-hover rounded-2xl p-6 sm:p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-samurai-red/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-samurai-red/20 transition-colors flex-shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-samurai-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};