const portfolioCategories = [
  {
    title: "Artificial Intelligence",
    companies: ["Fakespot", "EZDubs", "Edgetensor"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Robotics",
    companies: ["Softwear Automation", "Xook", "DreamVu"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Enterprise Software",
    companies: ["Phenom People", "Beroe", "Yellowdig"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Digital Health",
    companies: ["HealthifyMe", "Cureskin", "Inito"],
    color: "from-green-500/20 to-teal-500/20",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="font-sans text-xl text-muted-foreground">
            We have invested in over 50 companies across our focus areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,174,255,0.15)] p-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-10 relative z-10 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-5 relative z-10">
                {category.companies.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="font-sans text-xl border-l-2 border-border/30 pl-6 py-2 group-hover:border-primary/50 transition-all duration-300 hover:translate-x-2"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
