import { MapPin, Mail } from "lucide-react";

const TrustFooter = () => {
  return (
    <footer className="border-t border-border py-10 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div>
            <div className="font-serif text-2xl font-bold mb-2">
              SRI TRUST
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              Giving our children a better life
            </p>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="font-sans text-sm font-semibold mb-3 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-2">
              <a 
                href="mailto:charity@sricapital.com"
                className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                charity@sricapital.com
              </a>
            </div>
          </div>
          
          {/* Address Section */}
          <div>
            <h3 className="font-sans text-sm font-semibold mb-3 uppercase tracking-wider">
              Address
            </h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-muted-foreground" />
              <p className="font-sans text-sm text-muted-foreground">
                C/o Nalam & Associates, 8th Floor, Sanali Spazio, Hitech City, Hyderabad 500081
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-border/50">
          <p className="font-sans text-sm text-muted-foreground text-center">
            © 2025 SRI Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TrustFooter;
