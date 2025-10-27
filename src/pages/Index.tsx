import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Portfolio from "@/components/Portfolio";
import Fund from "@/components/Fund";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <Portfolio />
        <Fund />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
