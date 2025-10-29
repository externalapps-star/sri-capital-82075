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
  url?: string;
};

const portfolioCategories = [
  {
    title: "Artificial Intelligence",
    companies: [
      { name: "Fakespot", logo: fakespotLogo, url: "https://www.fakespot.com/" },
      { name: "EZDubs", logo: ezdubsLogo, url: "https://www.ezdubs.ai/" },
      { name: "Edgetensor", logo: edgetensorLogo, url: "https://edgetensor.ai/" },
    ] as Company[],
  },
  {
    title: "Robotics",
    companies: [
      { name: "Softwear Automation", logo: softwearLogo, url: "https://www.softwearautomation.com/" },
      { name: "Xook", logo: xookLogo, url: "https://www.xook.ai/" },
      { name: "DreamVu", logo: dreamvuLogo, url: "https://www.dreamvu.com/" },
    ] as Company[],
  },
  {
    title: "Enterprise Software",
    companies: [
      { name: "Phenom People", logo: phenomLogo, url: "https://www.phenom.com/" },
      { name: "Beroe", logo: beroeLogo, url: "https://www.beroeinc.com/" },
      { name: "Yellowdig", logo: yellowdigLogo, url: "https://www.yellowdig.co/" },
    ] as Company[],
  },
  {
    title: "Digital Health",
    companies: [
      { name: "HealthifyMe", logo: healthifyLogo, url: "https://www.healthifyme.com/" },
      { name: "Cureskin", logo: cureskinLogo, url: "https://cureskin.com/" },
      { name: "Inito", logo: initoLogo, url: "https://www.inito.com/" },
    ] as Company[],
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
    <section ref={sectionRef} id="portfolio" className="py-16 px-6 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
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
              className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 p-8"
            >
              <h3 className="font-serif text-xl font-bold mb-6 text-muted-foreground">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {category.companies.map((company, companyIndex) => (
                  <a
                    key={companyIndex}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-6 rounded-lg bg-white hover:bg-white/95 transition-all duration-300 hover:scale-105 aspect-square ${
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
                  </a>
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
