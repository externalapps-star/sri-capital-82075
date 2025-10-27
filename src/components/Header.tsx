import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-2xl font-serif font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            SRI CAPITAL
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("focus")}
              className="text-sm font-sans hover:text-accent transition-colors"
            >
              Focus Areas
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-sans hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("fund")}
              className="text-sm font-sans hover:text-accent transition-colors"
            >
              The Fund
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("focus")}
              className="text-left text-sm font-sans hover:text-accent transition-colors"
            >
              Focus Areas
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-sm font-sans hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("fund")}
              className="text-left text-sm font-sans hover:text-accent transition-colors"
            >
              The Fund
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
