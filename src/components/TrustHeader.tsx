import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TrustHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
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

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button aria-label="Toggle menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <nav className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => handleScrollToSection("about")}
                  className="text-left font-sans text-sm hover:text-primary transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleScrollToSection("schools")}
                  className="text-left font-sans text-sm hover:text-primary transition-colors"
                >
                  Schools Adopted
                </button>
                <button
                  onClick={() => handleScrollToSection("gallery")}
                  className="text-left font-sans text-sm hover:text-primary transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="text-left font-sans text-sm hover:text-primary transition-colors"
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
