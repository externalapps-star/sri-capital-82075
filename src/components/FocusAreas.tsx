import aiFocusImage from "@/assets/ai-focus.jpg";
import roboticsFocusImage from "@/assets/robotics-focus.jpg";
import enterpriseFocusImage from "@/assets/enterprise-focus.jpg";
import healthFocusImage from "@/assets/health-focus.jpg";

const focusAreas = [
  {
    title: "Artificial Intelligence",
    description: "We back companies leveraging AI to solve complex problems and create new market opportunities across industries.",
    image: aiFocusImage,
  },
  {
    title: "Robotics",
    description: "Supporting innovative robotics solutions that enhance automation, manufacturing, and human-robot collaboration.",
    image: roboticsFocusImage,
  },
  {
    title: "Enterprise Software",
    description: "Supporting innovative B2B software solutions that drive efficiency, scalability, and competitive advantage for businesses.",
    image: enterpriseFocusImage,
  },
  {
    title: "Digital Health",
    description: "AI is transforming healthcare and bringing care closer to the home. We invest in technologies that improve patient outcomes and access to care.",
    image: healthFocusImage,
  },
];

const FocusAreas = () => {
  return (
    <section id="focus" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Investment Focus
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with visionary founders building the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,174,255,0.15)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
