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
  displayName: string;
  logo?: string;
  url: string;
};

const portfolioCategories = [
  {
    title: "Artificial Intelligence",
    companies: [
      { name: "Fakespot", displayName: "FAKESPOT (acquired by Mozilla)", logo: fakespotLogo, url: "https://www.mozilla.org/en-US/" },
      { name: "EZDubs", displayName: "EZDUBS", logo: ezdubsLogo, url: "https://ezdubs.ai/" },
      { name: "Edgetensor", displayName: "EDGETENSOR", logo: edgetensorLogo, url: "https://edgetensor.ai/" },
    ] as Company[],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Robotics",
    companies: [
      { name: "Softwear Automation", displayName: "SOFTWEAR AUTOMATION", logo: softwearLogo, url: "https://softwearautomation.com/" },
      { name: "Xook", displayName: "XOOK", logo: xookLogo, url: "https://xook.ai/" },
      { name: "DreamVu", displayName: "DREAMVU", logo: dreamvuLogo, url: "https://dreamvu.com/" },
    ] as Company[],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Enterprise Software",
    companies: [
      { name: "Phenom People", displayName: "PHENOM", logo: phenomLogo, url: "https://www.phenom.com/" },
      { name: "Beroe", displayName: "BEROE", logo: beroeLogo, url: "https://www.beroeinc.com/beroe-live-ai" },
      { name: "Yellowdig", displayName: "YELLOWDIG", logo: yellowdigLogo, url: "https://yellowdig.co/" },
    ] as Company[],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Digital Health",
    companies: [
      { name: "HealthifyMe", displayName: "HEALTHIFYME", logo: healthifyLogo, url: "https://www.healthifyme.com/in/" },
      { name: "Cureskin", displayName: "CURESKIN", logo: cureskinLogo, url: "https://cureskin.com/" },
      { name: "Inito", displayName: "INITO", logo: initoLogo, url: "https://www.inito.com/" },
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
    <section ref={sectionRef} id="portfolio" className="py-16 px-6 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="font-sans text-xl text-muted-foreground">
            We have invested in over 50 companies across our focus areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/60 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(0,174,255,0.4),0_25px_60px_rgba(0,0,0,0.35)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(0,174,255,0.5),0_25px_60px_rgba(0,0,0,0.6)] p-[21px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-serif text-2xl font-bold mb-6 relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {category.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className="flex flex-col items-center">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-[30px] rounded-lg bg-white dark:bg-white border border-gray-200 dark:border-transparent hover:bg-white/95 dark:hover:bg-white/95 transition-all duration-300 hover:scale-105 aspect-square group/logo cursor-pointer w-full ${
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
                    <p className="font-sans text-sm font-semibold text-foreground/80 mt-3 text-center">
                      {company.name === "Fakespot" ? (
                        <>
                          FAKESPOT<br />
                          (acquired by Mozilla)
                        </>
                      ) : (
                        company.displayName
                      )}
                    </p>
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
