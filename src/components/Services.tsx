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
    <section id="services" className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Our <span className="text-neon-red">Services</span>
          </h2>
          <div className="neon-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From spark to screenplay, we deliver production-ready scripts 
            across every format and platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="glass-hover rounded-2xl p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-neon-red/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-neon-red/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-neon-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neon-red mb-3">You get:</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm text-text-muted flex items-center">
                        <div className="w-1.5 h-1.5 bg-neon-red rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};