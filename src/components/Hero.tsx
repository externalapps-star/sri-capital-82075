const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="text-foreground">
            Early Stage{" "}
          </span>
          <span 
            className="bg-gradient-to-r from-[#B22234] via-white to-[#3C3B6E] bg-clip-text text-transparent animate-us-flag"
            style={{ backgroundSize: "200% 200%" }}
          >
            US
          </span>
          <span className="text-foreground">
            -
          </span>
          <span 
            className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent animate-india-flag"
            style={{ backgroundSize: "200% 200%" }}
          >
            India
          </span>
          <span className="text-foreground">
            {" "}Investors
          </span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We invest in transformative companies at the intersection of artificial intelligence, 
          robotics, and enterprise software, bridging innovation across the United States and India.
        </p>
      </div>
    </section>
  );
};

export default Hero;
