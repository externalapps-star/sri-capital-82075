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
    <section id="focus" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Investment Focus
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            We partner with visionary founders building the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden bg-card hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={area.image}
                alt={area.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
              />
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                  {area.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed">
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
