import sashiReddiImage from "@/assets/sashi-reddi-new.png";
import docParghiImage from "@/assets/doc-parghi-new.png";
import { Linkedin } from "lucide-react";

const Fund = () => {
  const teamMembers = [
    {
      name: "Sashi Reddi",
      title: "Managing Partner",
      image: sashiReddiImage,
      linkedin: "https://www.linkedin.com/in/sashireddi/"
    },
    {
      name: "Doc Parghi",
      title: "Managing Partner",
      image: docParghiImage,
      linkedin: "https://www.linkedin.com/in/docparghi/"
    }
  ];

  return (
    <section id="fund" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center text-white">
          The Fund
        </h2>
        
        <div className="space-y-6 mb-12">
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto px-4 sm:px-0">
            SRI Capital Fund I has been investing in early-stage technology companies across the US 
            and India since 2018. We provide not just capital, but strategic guidance and network access 
            to help founders scale their vision into reality. Fund I is currently not making new investments.
          </p>
        </div>

        <div className="border-t border-border pt-10">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-white">Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="overflow-hidden rounded-2xl border-2 border-border hover:border-white transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4),0_25px_60px_rgba(0,0,0,0.35)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5),0_25px_60px_rgba(0,0,0,0.6)] mb-4 sm:mb-6 w-full max-w-[300px] h-[300px] sm:max-w-[350px] sm:h-[350px] md:max-w-[400px] md:h-[400px] mx-auto">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.title} at SRI Capital`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      member.name === "Sashi Reddi" 
                        ? "scale-110 group-hover:scale-[1.155]" 
                        : "group-hover:scale-105"
                    }`}
                    style={member.name === "Sashi Reddi" ? { objectPosition: 'calc(50% + 25px) calc(50% + 14px)' } : undefined}
                  />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {member.name}
                </h4>
                <p className="font-sans text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                  {member.title}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-sans text-sm translate-y-[3px]">LinkedIn Profile</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fund;
