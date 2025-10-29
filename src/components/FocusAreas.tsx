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
    <section id="focus" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Investment Focus
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with visionary founders building the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[240px] border-2 border-border/40 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Background Image with Subtle Fade */}
              <div className="absolute inset-0">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Lighter overlay to show more of the image */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60 dark:from-background/65 dark:via-background/55 dark:to-background/70" />
              </div>
              
              {/* Text Overlay */}
              <div className="relative h-full flex flex-col justify-center items-center text-center p-6">
                <h3 className="font-serif text-[32px] font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                  {area.title}
                </h3>
                <p className="font-sans text-lg text-foreground/90 dark:text-foreground/85 leading-relaxed max-w-md">
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
