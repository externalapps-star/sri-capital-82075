import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
            <a
              href="/trust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans hover:text-accent transition-colors"
            >
              SRI TRUST
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button aria-label="Toggle menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-l">
              <nav className="flex flex-col gap-8 mt-12">
                <button
                  onClick={() => scrollToSection("focus")}
                  className="text-left text-lg font-sans hover:text-accent transition-colors py-2"
                >
                  Focus Areas
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-left text-lg font-sans hover:text-accent transition-colors py-2"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("fund")}
                  className="text-left text-lg font-sans hover:text-accent transition-colors py-2"
                >
                  The Fund
                </button>
                <a
                  href="/trust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-lg font-sans hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SRI TRUST
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
