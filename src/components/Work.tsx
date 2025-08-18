import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";

export const Work = () => {
  const projects = [
    {
      title: "Midnight Protocol",
      format: "Feature Film",
      logline: "A cybersecurity expert discovers her entire identity is a fabrication designed to protect a government conspiracy.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=600&h=400&fit=crop",
      type: "thriller"
    },
    {
      title: "The Collective",
      format: "TV Series",
      logline: "Five strangers with shared dreams must prevent an apocalyptic future they've been experiencing in their sleep.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
      type: "sci-fi"
    },
    {
      title: "Authentic Moments",
      format: "Brand Campaign",
      logline: "A lifestyle brand campaign exploring genuine human connections in the digital age.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      type: "advertising"
    },
    {
      title: "City Lights",
      format: "Digital Series",
      logline: "Young professionals navigate love, ambition, and identity in a rapidly changing urban landscape.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      type: "drama"
    },
    {
      title: "Reset",
      format: "Short Film",
      logline: "A time-loop story where a programmer must debug reality itself to save the person she loves.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=600&h=400&fit=crop",
      type: "sci-fi"
    },
    {
      title: "Heritage Stories",
      format: "Documentary",
      logline: "Exploring family legacies through intimate conversations across three generations.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      type: "documentary"
    }
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Featured <span className="text-neon-red">Work</span>
          </h2>
          <div className="neon-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of compelling narratives across film, television, 
            digital platforms, and brand storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-hover rounded-2xl overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-neon-red/90 text-white text-xs font-medium rounded-full">
                    {project.format}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.logline}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="paper" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View Excerpt
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Treatment
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};