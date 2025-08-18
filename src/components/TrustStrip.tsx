export const TrustStrip = () => {
  const badges = [
    "Film",
    "Television", 
    "Digital",
    "Advertising",
    "Script Development",
    "Creative Consulting"
  ];

  return (
    <section className="py-16 border-y border-glass-border bg-background-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={badge} className="flex items-center">
              <span className="text-text-secondary font-medium tracking-wide uppercase text-sm">
                {badge}
              </span>
              {index < badges.length - 1 && (
                <div className="ml-8 md:ml-12 w-px h-6 bg-gradient-to-b from-transparent via-neon-red to-transparent opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};