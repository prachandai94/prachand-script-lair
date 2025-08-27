import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";
import { WorkModal } from "@/components/WorkModal";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
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
            Featured <span className="text-samurai-red brush-stroke">Work</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of compelling narratives across film, television, 
            digital platforms, and brand storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="paper-hover rounded-2xl overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-samurai-red text-white text-xs font-medium rounded-full">
                    {project.format}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3 group-hover:text-samurai-red transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed line-clamp-3">
                  {project.logline}
                </p>
                
                <div className="mt-4 pt-4 border-t border-samurai-red/10">
                  <span className="text-xs text-samurai-red font-medium">
                    Click to read full case study →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <WorkModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};