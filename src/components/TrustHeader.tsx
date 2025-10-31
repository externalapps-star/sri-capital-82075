import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
              className="font-sans text-sm text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("schools")}
              className="font-sans text-sm text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Schools Adopted
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="font-sans text-sm text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-sm text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-0 top-full mt-0 bg-background border-t border-l border-b border-border shadow-lg animate-slide-in-right">
            <nav className="flex flex-col py-2 min-w-[200px]">
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-left font-sans text-sm text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                About Us
              </button>
              <button
                onClick={() => handleScrollToSection("schools")}
                className="text-left font-sans text-sm text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                Schools Adopted
              </button>
              <button
                onClick={() => handleScrollToSection("gallery")}
                className="text-left font-sans text-sm text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                Gallery
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-left font-sans text-sm text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default TrustHeader;
