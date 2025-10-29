import { useEffect, useRef, useState } from "react";
import fakespotLogo from "@/assets/logos/fakespot.png";
import edgetensorLogo from "@/assets/logos/edgetensor.png";
import ezdubsLogo from "@/assets/logos/ezdubs-new.png";
import softwearLogo from "@/assets/logos/softwear-automation.png";
import xookLogo from "@/assets/logos/xook.png";
import dreamvuLogo from "@/assets/logos/dreamvu.png";
import phenomLogo from "@/assets/logos/phenom.png";
import beroeLogo from "@/assets/logos/beroe.svg";
import yellowdigLogo from "@/assets/logos/yellowdig.png";
import healthifyLogo from "@/assets/logos/healthifyme.png";
import cureskinLogo from "@/assets/logos/cureskin.png";
import initoLogo from "@/assets/logos/inito.png";

type Company = {
  name: string;
  logo?: string;
};

const portfolioCategories = [
  {
    title: "Artificial Intelligence",
    companies: [
      { name: "Fakespot", logo: fakespotLogo },
      { name: "EZDubs", logo: ezdubsLogo },
      { name: "Edgetensor", logo: edgetensorLogo },
    ] as Company[],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Robotics",
    companies: [
      { name: "Softwear Automation", logo: softwearLogo },
      { name: "Xook", logo: xookLogo },
      { name: "DreamVu", logo: dreamvuLogo },
    ] as Company[],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Enterprise Software",
    companies: [
      { name: "Phenom People", logo: phenomLogo },
      { name: "Beroe", logo: beroeLogo },
      { name: "Yellowdig", logo: yellowdigLogo },
    ] as Company[],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Digital Health",
    companies: [
      { name: "HealthifyMe", logo: healthifyLogo },
      { name: "Cureskin", logo: cureskinLogo },
      { name: "Inito", logo: initoLogo },
    ] as Company[],
    color: "from-green-500/20 to-teal-500/20",
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 px-6 bg-card/50">
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
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,174,255,0.15)] p-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-serif text-2xl font-bold mb-8 relative z-10 text-muted-foreground">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {category.companies.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className={`flex items-center justify-center p-8 rounded-lg bg-white dark:bg-white hover:bg-white/95 dark:hover:bg-white/95 transition-all duration-300 hover:scale-105 aspect-square group/logo ${
                      isVisible ? 'animate-flip-in' : ''
                    }`}
                    style={{
                      animationDelay: `${(index * 300) + (companyIndex * 150)}ms`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {company.logo && (
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className={`object-contain transition-opacity duration-300 ${
                          company.name === 'EZDubs' 
                            ? 'max-w-[70%] max-h-[70%]'
                            : 'max-w-[150%] max-h-[150%]'
                        }`}
                        style={
                          company.name === 'Softwear Automation' || company.name === 'DreamVu'
                            ? { filter: 'brightness(0) saturate(100%)' }
                            : company.name === 'Edgetensor'
                            ? { filter: 'invert(1) brightness(0) saturate(100%)' }
                            : undefined
                        }
                      />
                    )}
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
