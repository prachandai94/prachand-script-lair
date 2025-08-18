import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Prachand Scripts transformed our rough concept into a compelling screenplay that secured funding within weeks. Their collaborative approach made all the difference.",
      author: "Sarah Martinez",
      role: "Executive Producer, Luna Pictures",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The team's ability to capture authentic dialogue and complex character dynamics elevated our series to award-winning status. Exceptional storytelling expertise.",
      author: "David Park",
      role: "Show Creator, Streaming Networks",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Working with Prachand Scripts was like having a writing room extension of our own team. They understood our brand voice immediately and delivered beyond expectations.",
      author: "Elena Rodriguez",
      role: "Creative Director, Global Brands",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Their script doctoring service saved our project. The structural improvements and character development notes were exactly what we needed to get the green light.",
      author: "Michael Chen",
      role: "Independent Filmmaker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Client <span className="text-neon-red">Stories</span>
          </h2>
          <div className="neon-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hear from the creators, producers, and brands who've trusted us 
            to bring their stories to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-hover rounded-2xl p-8 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-neon-red/30 mb-6" />
              
              <blockquote className="text-text-secondary leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-text-muted text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              {/* Glow Divider */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};