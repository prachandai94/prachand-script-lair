import { Lightbulb, FileText, Edit, Sparkles, CheckCircle } from "lucide-react";
export const Process = () => {
  const steps = [{
    icon: Lightbulb,
    title: "Discovery",
    description: "Deep dive into your vision, audience, and creative goals",
    details: "1-2 weeks • Initial briefing • Creative alignment"
  }, {
    icon: FileText,
    title: "Concept",
    description: "Collaborative ideation and story architecture development",
    details: "2-3 weeks • Concept refinement • Story structure"
  }, {
    icon: Edit,
    title: "Outline",
    description: "Detailed scene-by-scene breakdown and character development",
    details: "1-2 weeks • Beat sheets • Character arcs"
  }, {
    icon: Sparkles,
    title: "Drafts",
    description: "Collaborative writing with table reads and rapid iteration",
    details: "4-6 weeks • First draft • Table reads • Feedback integration"
  }, {
    icon: CheckCircle,
    title: "Polish",
    description: "Final refinements and production-ready formatting",
    details: "1-2 weeks • Final draft • Production notes • Delivery"
  }];
  return <section id="process" className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            From Spark to <span className="text-samurai-red">Script</span>
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Our collaborative process ensures ideas travel from initial spark 
            to production-ready screenplay without losing their soul.
          </p>
          <p className="text-text-muted max-w-xl mx-auto">
            Table reads, rapid drafts, and clear notes—so your vision becomes reality 
            with precision and creative integrity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-samurai-red via-samurai-red/50 to-samurai-red transform md:-translate-x-1/2 shadow-red" />
          
          {/* Connecting Lines */}
          <div className="absolute left-8 md:left-1/2 top-16 w-px h-16 bg-samurai-red transform md:-translate-x-1/2 opacity-30" />
          <div className="absolute left-8 md:left-1/2 top-32 w-px h-16 bg-samurai-red transform md:-translate-x-1/2 opacity-50" />
          <div className="absolute left-8 md:left-1/2 top-48 w-px h-16 bg-samurai-red transform md:-translate-x-1/2 opacity-70" />
          <div className="absolute left-8 md:left-1/2 top-64 w-px h-16 bg-samurai-red transform md:-translate-x-1/2 opacity-90" />
          
          <div className="space-y-16">
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            return <div key={step.title} className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:text-left text-center`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-samurai-red rounded-full transform md:-translate-x-1/2 shadow-red-strong z-10" />
                  
                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && <div className={`absolute ${isEven ? 'left-12 md:left-1/2 md:ml-2' : 'left-12 md:left-1/2 md:mr-2'} top-8 w-8 h-0.5 bg-samurai-red/60 transform ${isEven ? 'md:translate-x-2' : 'md:-translate-x-10'}`}>
                      <div className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 w-2 h-2 border-t border-r border-samurai-red/60 transform ${isEven ? 'rotate-45 -translate-y-1' : '-rotate-135 translate-y-1'}`} />
                    </div>}
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-16 pl-20 md:pl-0" : "md:pl-16 pl-20 md:pr-0"}`}>
                    <div className="glass-hover rounded-2xl p-8 group">
                      <div className="flex items-center mb-4 justify-center md:justify-start">
                        <div className="w-12 h-12 bg-samurai-red/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-samurai-red/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-samurai-red" />
                        </div>
                        <div className="text-2xl font-display font-bold text-samurai-red">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-text-primary mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      
                    </div>
                  </div>
                  
                  {/* Spacer for other side */}
                  <div className="hidden md:block w-5/12" />
                </div>;
          })}
          </div>
        </div>
        
        {/* Process Note */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-text-secondary italic">
              "Every project is unique, but our collaborative approach remains constant: 
              transparent communication, creative flexibility, and relentless focus on 
              bringing your story to life with maximum impact."
            </p>
          </div>
        </div>
      </div>
    </section>;
};