import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TrustHeader = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/trust")}
            className="font-serif text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            SRI TRUST
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="font-sans text-sm hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("schools")}
              className="font-sans text-sm hover:text-primary transition-colors"
            >
              Schools Adopted
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="font-sans text-sm hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-sm hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 hover:bg-accent rounded-md transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => handleNavClick("about")}
                  className="font-sans text-base hover:text-primary transition-colors text-left py-2"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavClick("schools")}
                  className="font-sans text-base hover:text-primary transition-colors text-left py-2"
                >
                  Schools Adopted
                </button>
                <button
                  onClick={() => handleNavClick("gallery")}
                  className="font-sans text-base hover:text-primary transition-colors text-left py-2"
                >
                  Gallery
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="font-sans text-base hover:text-primary transition-colors text-left py-2"
                >
                  Contact Us
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default TrustHeader;
