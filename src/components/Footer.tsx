const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl font-semibold">
            SRI CAPITAL
          </div>
          
          <div className="text-center md:text-left">
            <p className="font-sans text-sm text-muted-foreground mb-2">
              Please send business plans to:
            </p>
            <a 
              href="mailto:funding@sricapital.com"
              className="font-sans text-sm hover:text-accent transition-colors"
            >
              funding@sricapital.com
            </a>
          </div>
          
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 SRI Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
