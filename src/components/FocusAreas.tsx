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
    description: "Investing in the next generation of automation and intelligent systems that enhance human capabilities and productivity.",
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
    <section id="focus" className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Investment Focus
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with visionary founders building the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg h-[400px]"
            >
              <img
                src={area.image}
                alt={area.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
              <div className="relative h-full flex flex-col justify-center p-10">
                <h3 className="font-serif text-4xl font-bold mb-3">
                  {area.title}
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
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
