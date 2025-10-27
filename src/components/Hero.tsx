const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
          Early Stage US-India Investors
        </h1>
        <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We invest in transformative companies at the intersection of artificial intelligence, 
          robotics, and enterprise software, bridging innovation across the United States and India.
        </p>
      </div>
    </section>
  );
};

export default Hero;
