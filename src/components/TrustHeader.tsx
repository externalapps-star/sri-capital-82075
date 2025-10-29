import { useNavigate } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const TrustHeader = () => {
  const navigate = useNavigate();

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
        </div>
      </div>
    </header>
  );
};

export default TrustHeader;
