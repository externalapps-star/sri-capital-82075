import sashiReddiImage from "@/assets/sashi-reddi.png";

const Fund = () => {
  return (
    <section id="fund" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          The Fund
        </h2>
        
        <div className="space-y-8 mb-20">
          <p className="font-sans text-xl leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
            SRI Capital Fund I has been investing in early-stage technology companies across the US 
            and India since 2018. We provide not just capital, but strategic guidance and network access 
            to help founders scale their vision into reality. Fund I is currently not making new investments.
          </p>
        </div>

        <div className="border-t border-border/50 pt-16">
          <h3 className="font-serif text-4xl font-bold mb-12 text-center">Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-6 border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500">
                <img 
                  src={sashiReddiImage} 
                  alt="Sashi Reddi" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Sashi Reddi</h4>
              <p className="font-sans text-lg text-muted-foreground">Managing Partner</p>
            </div>
            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-6 border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500 bg-card/50 aspect-[3/4] flex items-center justify-center">
                <p className="text-muted-foreground/50 font-sans text-lg">Photo coming soon</p>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Doc Parghi</h4>
              <p className="font-sans text-lg text-muted-foreground">Managing Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fund;
