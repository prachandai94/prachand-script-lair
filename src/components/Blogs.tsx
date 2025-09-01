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
      content: "Character development is the cornerstone of great storytelling. In modern screenwriting, we've moved beyond archetypal heroes and villains to create complex, flawed, and relatable characters that audiences can truly connect with. Today's viewers crave authenticity and depth, demanding protagonists who reflect the nuanced reality of human nature.\n\nEffective character development begins with understanding your character's core wound – the defining experience that shapes their worldview and drives their actions throughout the narrative. This wound becomes the foundation for their internal conflict, creating opportunities for growth and transformation. Writers must dig deeper than surface-level traits, exploring the contradictions and vulnerabilities that make characters feel real.\n\nThe key to compelling characters lies in their agency. Modern audiences reject passive protagonists who simply react to external forces. Instead, they want to see characters making difficult choices, each decision revealing another layer of their personality. These choices should stem from the character's established beliefs and desires, creating a consistent internal logic that guides their behavior.\n\nSubtext plays a crucial role in character development. What characters don't say often speaks louder than their dialogue. The gap between their public persona and private thoughts creates dramatic tension and allows audiences to read between the lines. This technique transforms simple conversations into character revelations.\n\nFinally, character arcs must feel earned through the events of the story. Transformation should be gradual and believable, with each scene contributing to the character's evolution. The best characters are those who change in ways that feel both surprising and inevitable.",
      author: "Alii Khan",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Adapting Literature for Screen: Challenges and Opportunities",
      excerpt: "A deep dive into the complex process of translating beloved books into compelling visual narratives.",
      content: "Adapting literature for screen is both an art and a science, requiring writers to understand the essence of the source material while recognizing the unique demands of visual storytelling. The challenge lies not in faithful recreation, but in finding the cinematic soul within the literary work.\n\nThe first hurdle is compression. Novels can span hundreds of pages, developing characters and themes over extended periods. Screenwriters must identify the core narrative threads and distill them into a focused story structure. This often means making difficult choices about which subplots to retain and which beloved scenes to sacrifice for pacing.\n\nPoint of view presents another significant challenge. Literature often relies on internal monologue and narrative voice to convey character thoughts and backstory. Film is an external medium, requiring writers to externalize internal conflicts through action, dialogue, and visual metaphor. The camera becomes the narrator, and every shot must serve the story.\n\nSuccessful adaptations find creative ways to honor the source material's spirit rather than its letter. This might mean updating the setting for contemporary relevance, combining multiple characters into one, or restructuring the plot for dramatic effect. The goal is capturing what makes readers love the original work – its emotional core, thematic resonance, and unique voice.\n\nCollaboration with the original author, when possible, can provide valuable insights into character motivations and thematic intentions. However, screenwriters must also trust their instincts about what works cinematically. Sometimes the most faithful adaptation requires significant departures from the source text.\n\nUltimately, the best literary adaptations feel both familiar and fresh, giving fans of the book something new to discover while attracting audiences unfamiliar with the original work.",
      author: "Divith Shetty",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "The Evolution of Digital Storytelling",
      excerpt: "How streaming platforms and digital media are reshaping narrative structure and audience engagement.",
      content: "Digital platforms have revolutionized storytelling, offering new opportunities for narrative innovation and audience interaction. From binge-worthy series to interactive content, the landscape of entertainment has fundamentally shifted, creating unprecedented possibilities for creative expression.\n\nThe streaming revolution has liberated creators from traditional broadcast constraints. No longer bound by network television's rigid time slots and commercial breaks, writers can craft stories that breathe at their own pace. Episodes can run exactly as long as needed – whether 25 minutes or 75 – allowing for more organic storytelling rhythms.\n\nThis freedom has birthed new narrative structures. Limited series provide novel-like depth without the commitment of ongoing seasons. Anthology formats allow writers to explore diverse themes and styles within a single brand. Meanwhile, the ability to drop entire seasons simultaneously has changed how writers approach pacing and cliffhangers.\n\nDigital platforms also enable unprecedented audience data analysis. Writers can see exactly where viewers pause, rewind, or abandon episodes, providing insights into what elements resonate most strongly. This feedback loop is creating more responsive and refined storytelling approaches.\n\nInteractive storytelling represents the frontier of digital narrative. Platforms like Netflix have experimented with choose-your-own-adventure formats, while social media integration allows real-time audience participation in story development. Writers must now consider multiple narrative branches and viewer agency.\n\nThe global reach of digital platforms has also diversified storytelling voices. Content creators from different cultures and backgrounds can now reach worldwide audiences, enriching the medium with fresh perspectives and narrative traditions. This democratization of distribution is fostering a more inclusive and varied entertainment landscape.",
      author: "Sanchit Chadha",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac1?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Brand Storytelling: Beyond Traditional Advertising",
      excerpt: "How narrative-driven campaigns create emotional connections and drive authentic brand engagement.",
      content: "Brand storytelling has evolved from simple product promotion to crafting meaningful narratives that resonate with consumers on an emotional level. In today's oversaturated media landscape, brands must become storytellers to cut through the noise and forge genuine connections with their audiences.\n\nThe most effective brand stories don't sell products; they sell emotions, values, and aspirations. They position the consumer as the hero of their own journey, with the brand serving as a helpful guide or catalyst for transformation. This shift from product-focused to human-focused narrative creates deeper engagement and loyalty.\n\nAuthenticity is paramount in brand storytelling. Modern consumers are sophisticated and can easily detect manufactured emotions or artificial narratives. Successful brand stories emerge from genuine company values and real customer experiences. They acknowledge challenges and imperfections while demonstrating how the brand makes a meaningful difference.\n\nMulti-platform storytelling allows brands to create rich, immersive narrative experiences. A campaign might begin with a teaser video on social media, develop through interactive web content, and culminate in a live event or user-generated content campaign. Each touchpoint adds layers to the overall story while respecting platform-specific audience behaviors.\n\nMeasuring the success of brand storytelling requires moving beyond traditional metrics. While reach and impressions remain important, engagement quality, brand sentiment, and long-term customer value provide better indicators of narrative effectiveness. Brands are learning to track emotional resonance and story recall alongside conversion rates.\n\nThe future of brand storytelling lies in personalization and co-creation. Advanced data analytics enable brands to tailor narratives to individual consumer journeys, while social platforms facilitate collaborative storytelling where customers become active participants in brand narratives.",
      author: "Alii Khan",
      date: "November 28, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Interactive Storytelling in the Digital Age",
      excerpt: "Exploring how technology enables new forms of narrative engagement and audience participation.",
      content: "Interactive storytelling represents the future of narrative engagement, where audiences become active participants in shaping the story rather than passive consumers. This evolution challenges traditional notions of authorship and creates unprecedented opportunities for immersive entertainment experiences.\n\nThe foundation of interactive storytelling lies in meaningful choice. Unlike simple branching narratives, sophisticated interactive stories offer decisions that genuinely impact character development, plot progression, and thematic exploration. Each choice should feel consequential, with outcomes that reflect the complexity of real-world decision-making.\n\nTechnology platforms enable increasingly sophisticated interactive experiences. Video games have pioneered many techniques now migrating to other media, from dialogue trees and consequence tracking to adaptive storytelling that responds to player behavior patterns. These mechanics are finding new applications in streaming content, marketing campaigns, and educational materials.\n\nWriting for interactive media requires fundamental shifts in narrative structure. Traditional three-act formats give way to modular storytelling, where scenes can be rearranged or omitted based on user choices. Writers must maintain narrative coherence across multiple possible paths while ensuring that each playthrough feels complete and satisfying.\n\nCharacter agency becomes more complex in interactive formats. Protagonists must be flexible enough to accommodate user choices while maintaining consistent personalities and motivations. This balance between player freedom and character integrity represents one of the medium's greatest creative challenges.\n\nThe social dimension of interactive storytelling is equally important. Many platforms now enable shared decision-making, where audiences collectively influence story direction. This communal aspect transforms individual entertainment into social experiences, fostering communities around narrative content.\n\nAs virtual reality and augmented reality technologies mature, interactive storytelling will become even more immersive, blurring the lines between audience and participant.",
      author: "Divith Shetty", 
      date: "November 20, 2024",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "The Psychology of Compelling Dialogue",
      excerpt: "Understanding how great dialogue reveals character, advances plot, and creates emotional resonance.",
      content: "Great dialogue is more than just words on a page; it's the heartbeat of character development and the engine of compelling storytelling. Understanding the psychology behind effective dialogue can transform ordinary conversations into powerful narrative tools that reveal character, advance plot, and create lasting emotional impact.\n\nAuthentic dialogue reflects how people actually speak, not how we think they should speak. This means embracing interruptions, incomplete thoughts, and the natural rhythms of conversation. Characters should have distinct speech patterns, vocabulary choices, and verbal tics that reflect their backgrounds, education levels, and emotional states.\n\nSubtext is dialogue's secret weapon. What characters don't say often carries more weight than their actual words. The tension between surface conversation and underlying meaning creates dramatic irony and allows audiences to feel intelligent by reading between the lines. Master screenwriters use this technique to pack multiple layers of meaning into seemingly simple exchanges.\n\nConflict drives compelling dialogue. Even mundane conversations become engaging when characters want different things or approach topics from opposing perspectives. This doesn't require shouting matches; subtle disagreements and misunderstandings can create equally powerful dramatic tension while revealing character motivations and relationships.\n\nRhythm and pacing in dialogue mirror musical composition. Short, sharp exchanges create urgency and tension, while longer speeches allow for emotional depth and character revelation. Silence is equally important – strategic pauses can emphasize key moments or allow emotions to resonate with audiences.\n\nDialogue must serve multiple masters: character development, plot advancement, and thematic exploration. The best exchanges accomplish all three simultaneously, moving the story forward while deepening our understanding of the characters and reinforcing the narrative's central themes. This efficiency is what separates professional-grade dialogue from amateur efforts.",
      author: "Sanchit Chadha",
      date: "November 15, 2024", 
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
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
    <section id="blogs" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Insights & <span className="text-samurai-red brush-stroke">Stories</span>
          </h2>
          <div className="samurai-divider mb-4 sm:mb-6 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="relative bg-gradient-to-br from-paper via-paper to-paper/95 border border-samurai-red/20 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-red-strong hover:border-samurai-red/40 hover:-translate-y-2 touch-manipulation focus-visible:ring-2 focus-visible:ring-samurai-red focus-visible:ring-offset-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openPost(post)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openPost(post);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${post.title}`}
            >
              {/* Red accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-samurai-red via-samurai-red-light to-samurai-red"></div>
              
              <div className="relative h-32 sm:h-40 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-500 hover-only:group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-samurai-red/80 via-samurai-red/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-samurai-red text-white text-xs font-medium rounded-full shadow-red border border-white/20">
                    {post.readTime}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 bg-gradient-to-b from-paper to-paper/98">
                <div className="flex items-center gap-3 mb-2 text-xs text-text-muted">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-samurai-red" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="w-1 h-1 bg-samurai-red/40 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-samurai-red" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-text-primary mb-2 group-hover:text-samurai-red transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gradient-to-r from-samurai-red/20 via-samurai-red/40 to-samurai-red/20">
                  <span className="text-xs text-samurai-red font-bold tracking-wide">
                    READ ARTICLE
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-px bg-gradient-to-r from-samurai-red to-samurai-red-light"></div>
                    <ArrowRight className="w-4 h-4 text-samurai-red transition-transform hover-only:group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-samurai-red/5 via-transparent to-samurai-red/5 rounded-xl"></div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          {/* Mobile-optimized modal */}
          <div className="h-full md:h-auto md:max-h-[90vh] md:my-4 md:mx-4 md:rounded-xl bg-paper border-0 md:border md:border-samurai-red/30 shadow-red-strong flex flex-col md:max-w-4xl md:mx-auto overflow-hidden">
            {/* Fixed Header with Close Button */}
            <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-sm border-b border-samurai-red/20 p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-samurai-red rounded-full"></div>
                <span className="text-samurai-red text-sm font-medium">ARTICLE</span>
              </div>
              <button
                onClick={closePost}
                className="flex-shrink-0 w-10 h-10 md:w-8 md:h-8 bg-samurai-red/10 hover:bg-samurai-red/20 active:bg-samurai-red/30 border border-samurai-red/30 text-samurai-red rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation focus-visible:ring-2 focus-visible:ring-samurai-red focus-visible:ring-offset-2"
                aria-label="Close article"
              >
                <span className="text-lg md:text-base font-bold">✕</span>
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 md:p-6 lg:p-8">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-4 md:mb-6 border-2 border-samurai-red/20"
                  loading="lazy"
                />
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 md:w-4 md:h-4 text-samurai-red flex-shrink-0" />
                    <span className="font-medium">{selectedPost.author}</span>
                  </div>
                  <div className="w-1 h-1 bg-samurai-red/40 rounded-full flex-shrink-0"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-samurai-red flex-shrink-0" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="w-1 h-1 bg-samurai-red/40 rounded-full flex-shrink-0 hidden sm:block"></div>
                  <span className="px-2 md:px-3 py-1 bg-samurai-red/10 text-samurai-red text-xs font-medium rounded-full">
                    {selectedPost.readTime}
                  </span>
                </div>
                
                <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-text-primary leading-tight mobile-line-height-tight">
                  {selectedPost.title}
                </h1>
                
                {/* Red accent line */}
                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-samurai-red to-samurai-red-light mb-4 md:mb-6 rounded-full"></div>
                
                <div className="space-y-4 md:space-y-5 text-text-secondary">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-sm sm:text-base lg:text-lg leading-relaxed md:leading-loose mobile-text-balance">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Mobile bottom spacing */}
                <div className="h-8 md:h-4 mt-8 md:mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};