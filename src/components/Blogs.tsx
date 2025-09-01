import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Character Development in Modern Screenwriting",
      excerpt: "Exploring how contemporary writers create compelling, multi-dimensional characters that resonate with today's audiences.",
      content: "Character development is the cornerstone of great storytelling. In modern screenwriting, we've moved beyond archetypal heroes and villains to create complex, flawed, and relatable characters...",
      author: "Maya Patel",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Adapting Literature for Screen: Challenges and Opportunities",
      excerpt: "A deep dive into the complex process of translating beloved books into compelling visual narratives.",
      content: "Adapting literature for screen is both an art and a science. It requires understanding the essence of the source material while recognizing the unique demands of visual storytelling...",
      author: "David Chen",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Evolution of Digital Storytelling",
      excerpt: "How streaming platforms and digital media are reshaping narrative structure and audience engagement.",
      content: "Digital platforms have revolutionized storytelling, offering new opportunities for narrative innovation and audience interaction. From binge-worthy series to interactive content...",
      author: "Sarah Kim",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Brand Storytelling: Beyond Traditional Advertising",
      excerpt: "How narrative-driven campaigns create emotional connections and drive authentic brand engagement.",
      content: "Brand storytelling has evolved from simple product promotion to crafting meaningful narratives that resonate with consumers on an emotional level...",
      author: "Alex Rodriguez",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      readTime: "4 min read"
    }
  ];

  const openPost = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blogs" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-text-primary">
            Insights & <span className="text-samurai-red brush-stroke">Stories</span>
          </h2>
          <div className="samurai-divider mb-6 sm:mb-8 max-w-xs mx-auto" />
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Behind-the-scenes insights, industry perspectives, and storytelling wisdom 
            from our team of narrative craftsmen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="paper-hover rounded-2xl overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openPost(post)}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-samurai-red text-white text-xs font-medium rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-text-muted">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3 group-hover:text-samurai-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-samurai-red/10">
                  <span className="text-xs text-samurai-red font-medium">
                    Read full article
                  </span>
                  <ArrowRight className="w-4 h-4 text-samurai-red transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePost}
        >
          <div 
            className="bg-background border border-glass-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closePost}
                className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-background transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-text-muted">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <span className="px-2 py-1 bg-samurai-red/10 text-samurai-red text-xs rounded-full">
                  {selectedPost.readTime}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                {selectedPost.title}
              </h1>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {selectedPost.content}
              </p>
              
              <Button onClick={closePost} variant="samurai" className="w-full sm:w-auto">
                Close Article
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};