import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    format: string;
    logline: string;
    image: string;
    type: string;
    fullCaseStudy?: {
      client: string;
      duration: string;
      team: string;
      challenge: string;
      solution: string;
      results: string;
      testimonial?: {
        quote: string;
        author: string;
        role: string;
      };
    };
  } | null;
}

export const WorkModal = ({ isOpen, onClose, project }: WorkModalProps) => {
  if (!project) return null;

  const caseStudy = project.fullCaseStudy || {
    client: "Confidential Client",
    duration: "8 weeks",
    team: "2 Writers + Script Doctor",
    challenge: "Transform a complex concept into an engaging narrative that resonates with target audiences while maintaining authenticity.",
    solution: "Developed a multi-layered storytelling approach with strong character arcs, authentic dialogue, and compelling visual storytelling that drives the narrative forward.",
    results: "Successfully delivered a production-ready script that exceeded client expectations and moved into pre-production within 30 days.",
    testimonial: {
      quote: "The team delivered exactly what we envisioned and more. Their collaborative process made all the difference.",
      author: "Creative Director",
      role: "Production Company"
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-samurai-red text-white">
              {project.format}
            </Badge>
          </div>
          
          <DialogTitle className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
            {project.title}
          </DialogTitle>
          
          <DialogDescription className="text-lg text-text-secondary leading-relaxed">
            {project.logline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Project Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-text-secondary">
              <User className="w-4 h-4 text-samurai-red" />
              <span className="text-sm">{caseStudy.client}</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Clock className="w-4 h-4 text-samurai-red" />
              <span className="text-sm">{caseStudy.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Calendar className="w-4 h-4 text-samurai-red" />
              <span className="text-sm">{caseStudy.team}</span>
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Challenge</h3>
              <p className="text-text-secondary leading-relaxed">{caseStudy.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Solution</h3>
              <p className="text-text-secondary leading-relaxed">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Results</h3>
              <p className="text-text-secondary leading-relaxed">{caseStudy.results}</p>
            </div>

            {caseStudy.testimonial && (
              <div className="paper rounded-2xl p-6">
                <blockquote className="text-text-secondary italic mb-4 text-lg">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-text-primary">{caseStudy.testimonial.author}</div>
                  <div className="text-text-muted">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};