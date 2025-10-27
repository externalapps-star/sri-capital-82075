const Fund = () => {
  return (
    <section id="fund" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-12 text-center">
          The Fund
        </h2>
        
        <div className="space-y-8 mb-16">
          <p className="font-sans text-lg leading-relaxed text-muted-foreground">
            SRI Capital Fund I has been investing in early-stage technology companies across the US 
            and India since 2018. We provide not just capital, but strategic guidance and network access 
            to help founders scale their vision into reality. Fund I is currently not making new investments.
          </p>
        </div>

        <div className="border-t border-border pt-12">
          <h3 className="font-serif text-2xl font-semibold mb-8">Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl font-semibold mb-2">Sashi Reddi</h4>
              <p className="font-sans text-muted-foreground">Managing Partner</p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold mb-2">Doc Parghi</h4>
              <p className="font-sans text-muted-foreground">Managing Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fund;
