import sashiReddiImage from "@/assets/sashi-reddi.png";
import docParghiImage from "@/assets/doc-parghi.png";
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
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          The Fund
        </h2>
        
        <div className="space-y-6 mb-12">
          <p className="font-sans text-xl leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
            SRI Capital Fund I has been investing in early-stage technology companies across the US 
            and India since 2018. We provide not just capital, but strategic guidance and network access 
            to help founders scale their vision into reality. Fund I is currently not making new investments.
          </p>
        </div>

        <div className="border-t border-border/50 pt-10">
          <h3 className="font-serif text-4xl font-bold mb-12 text-center">Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500 mb-6 max-w-xs mx-auto">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.title} at SRI Capital`}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="font-sans text-lg text-muted-foreground mb-4">
                  {member.title}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-sans text-sm">LinkedIn Profile</span>
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
