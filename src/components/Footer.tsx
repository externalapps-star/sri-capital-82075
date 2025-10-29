const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand Section */}
          <div>
            <div className="font-serif text-2xl font-semibold mb-3">
              SRI CAPITAL
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              Early Stage US-India Investors
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold mb-3 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("focus")}
                className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Focus Areas
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("fund")}
                className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                The Fund
              </button>
            </nav>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="font-sans text-sm font-semibold mb-3 uppercase tracking-wider">
              Contact
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-2">
              Please send business plans to:
            </p>
            <a 
              href="mailto:funding@sricapital.com"
              className="font-sans text-sm hover:text-primary transition-colors inline-block"
            >
              funding@sricapital.com
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-4 border-t border-border/50">
          <p className="font-sans text-sm text-muted-foreground text-center">
            © 2025 SRI Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
