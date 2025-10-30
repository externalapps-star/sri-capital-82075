const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-card/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Early Stage{" "}
          </span>
          <span 
            className="bg-gradient-to-r from-[#8B1A2A] via-gray-400 to-[#2A2A52] dark:from-[#B22234] dark:via-white dark:to-[#3C3B6E] bg-clip-text text-transparent animate-us-flag"
            style={{ backgroundSize: "200% 200%" }}
          >
            US
          </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            -
          </span>
          <span 
            className="bg-gradient-to-r from-[#CC7A29] via-gray-400 to-[#0F6606] dark:from-[#FF9933] dark:via-white dark:to-[#138808] bg-clip-text text-transparent animate-india-flag"
            style={{ backgroundSize: "200% 200%" }}
          >
            India
          </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}Investors
          </span>
        </h1>
        <p className="font-sans text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          We invest in transformative companies at the intersection of artificial intelligence, 
          robotics, and enterprise software, bridging innovation across the United States and India.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const element = document.getElementById('focus');
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer group animate-float"
        aria-label="Scroll to Investment Focus"
      >
        <div className="w-7 h-11 border-2 border-primary/50 rounded-full flex items-start justify-center pt-2 group-hover:border-primary transition-colors">
          <div className="w-1 h-2 bg-primary/70 rounded-full" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
