export const About = () => {
  const stats = [{
    number: "6+",
    label: "Writers",
    description: "Diverse creative voices"
  }, {
    number: "∞",
    label: "Genres",
    description: "Multi-format expertise"
  }, {
    number: "360°",
    label: "Service",
    description: "End-to-end script solutions"
  }];
  return <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-text-primary">
            Disciplined <span className="text-samurai-red brush-stroke">Craft</span> Mastered
          </h2>
          <div className="samurai-divider mb-6 sm:mb-8 max-w-xs mx-auto" />
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8 px-4">Like samurai perfecting their craft, writing is a lot more about execution and process than it is about ideas. And people who know, know it.</p>
          <p className="text-text-muted max-w-2xl mx-auto">Prachand Scripts hosts over 6+ writers in it's ever expanding army of talented writers from diverse background giving you the best for India & Globally.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => <div key={index} className="paper-hover rounded-2xl p-6 sm:p-8 text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-samurai-red mb-3">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                {stat.label}
              </div>
              <div className="text-text-secondary text-sm sm:text-base">
                {stat.description}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};