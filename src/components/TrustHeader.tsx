import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const TrustHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/trust")}
          className="font-serif text-2xl font-bold hover:opacity-80 transition-opacity"
        >
          SRI TRUST
        </button>
        
        <ThemeToggle />
      </div>
    </header>
  );
};

export default TrustHeader;
