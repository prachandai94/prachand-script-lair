export const About = () => {
  const stats = [
    { number: "11+", label: "Writers", description: "Diverse creative voices" },
    { number: "∞", label: "Genres", description: "Multi-format expertise" },
    { number: "360°", label: "Service", description: "End-to-end script solutions" }
  ];

  return (
    <section id="about" className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Disciplined <span className="text-samurai-red brush-stroke">Craft</span> Mastered
          </h2>
          <div className="samurai-divider mb-8 max-w-xs mx-auto" />
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Like samurai perfecting their craft, our 11+ writers forge stories with precision and honor. 
            Each narrative is tempered through rigorous collaboration, creating compelling tales.
          </p>
          <p className="text-text-muted max-w-2xl mx-auto">
            With over a decade of collective experience across film, television, digital platforms, 
            and advertising, we collaborate to craft original narratives that resonate with today's 
            audience—delivering fresh concepts across all formats.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="paper-hover rounded-2xl p-8 text-center group">
              <div className="text-4xl md:text-5xl font-display font-bold text-samurai-red mb-3">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-text-primary mb-2">
                {stat.label}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};