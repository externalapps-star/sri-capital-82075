import sashiReddiImage from "@/assets/sashi-reddi.png";
import docParghiImage from "@/assets/doc-parghi.png";

const Fund = () => {
  return (
    <section id="fund" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
          The Fund
        </h2>
        
        <div className="mb-12">
          <p className="font-sans text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
            SRI Capital Fund I has been investing in early-stage technology companies across the US 
            and India since 2018. We provide not just capital, but strategic guidance and network access 
            to help founders scale their vision into reality. Fund I is currently not making new investments.
          </p>
        </div>

        <div className="border-t border-border/50 pt-12">
          <h3 className="font-serif text-3xl font-bold mb-10 text-center">Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Sashi Reddi */}
            <div className="text-center">
              <div className="overflow-hidden rounded-lg border border-border/50 mb-4">
                <img 
                  src={sashiReddiImage} 
                  alt="Sashi Reddi, Managing Partner at SRI Capital" 
                  className="w-full h-auto"
                />
              </div>
              <h4 className="font-serif text-xl font-bold mb-1">Sashi Reddi</h4>
              <p className="font-sans text-sm text-muted-foreground mb-3">Managing Partner</p>
              <a
                href="https://www.linkedin.com/in/sashireddi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>

            {/* Doc Parghi */}
            <div className="text-center">
              <div className="overflow-hidden rounded-lg border border-border/50 mb-4">
                <img 
                  src={docParghiImage} 
                  alt="Doc Parghi, Managing Partner at SRI Capital" 
                  className="w-full h-auto"
                />
              </div>
              <h4 className="font-serif text-xl font-bold mb-1">Doc Parghi</h4>
              <p className="font-sans text-sm text-muted-foreground mb-3">Managing Partner</p>
              <a
                href="https://www.linkedin.com/in/doc-parghi-86b7b01/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fund;
