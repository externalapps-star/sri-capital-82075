import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Portfolio from "@/components/Portfolio";
import Fund from "@/components/Fund";
import Footer from "@/components/Footer";
import FloatingEmailButton from "@/components/FloatingEmailButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://sricapital.com/" />
        <meta property="og:url" content="https://sricapital.com/" />
      </Helmet>
      <div className="min-h-screen font-sans">
        <Header />
        <main>
          <Hero />
          <FocusAreas />
          <Portfolio />
          <Fund />
        </main>
        <Footer />
        <FloatingEmailButton />
      </div>
    </>
  );
};

export default Index;
