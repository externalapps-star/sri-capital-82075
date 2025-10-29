const TrustFooter = () => {
  return (
    <footer className="border-t border-border py-8 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand Section */}
          <div>
            <div className="font-serif text-2xl font-bold mb-1">
              SRI TRUST
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              Giving our children a better life
            </p>
          </div>
          
          {/* Copyright */}
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 SRI Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TrustFooter;
