import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          <button 
            onClick={() => handleNavigation("/")}
            className="text-2xl font-serif font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            SRI CAPITAL
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("focus")}
              className="text-sm font-sans text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Focus Areas
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-sans text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("fund")}
              className="text-sm font-sans text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              The Fund
            </button>
            <a
              href="/trust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans text-white relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              SRI TRUST
            </a>
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
                onClick={() => scrollToSection("focus")}
                className="text-left text-sm font-sans text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                Focus Areas
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-sm font-sans text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("fund")}
                className="text-left text-sm font-sans text-white hover:bg-white/10 transition-colors px-6 py-3"
              >
                The Fund
              </button>
              <a
                href="/trust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm font-sans text-white hover:bg-white/10 transition-colors px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                SRI TRUST
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
