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
    <section id="portfolio" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Portfolio
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            We have invested in over 50 companies across our focus areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden bg-gradient-to-br ${category.color} border border-border hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.companies.map((company, companyIndex) => (
                    <div
                      key={companyIndex}
                      className="font-sans text-lg md:text-xl border-t border-foreground/10 pt-4 group-hover:border-foreground/20 transition-colors"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
