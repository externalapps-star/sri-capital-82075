import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";
import eduIcon from "@/assets/edu-icon.png";
import healthIcon from "@/assets/health-icon.png";
import trustHero from "@/assets/trust-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import TrustHeader from "@/components/TrustHeader";
import TrustFooter from "@/components/TrustFooter";

const Trust = () => {
  return (
    <div className="min-h-screen font-sans">
      <TrustHeader />
      
      {/* Hero Section */}
      <section 
        className="relative pt-28 pb-16 px-4 bg-cover min-h-[50vh] flex items-center"
        style={{ backgroundImage: `url(${trustHero})`, backgroundPosition: '60% center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/40" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Giving our children a better life
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-medium">
            Every small step helps
          </p>
        </div>
      </section>

      {/* Education & Health Section */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-2xl md:text-3xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              SRI Trust aims to improve the lives of poor children by supporting their education and health needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={eduIcon} alt="Education" className="w-12 h-12" />
                </div>
                <CardTitle className="text-3xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-justify">
                  SRI Trust sponsors three government schools in and around Hyderabad serving a total of 1125 school children (575 boys and 550 girls). We fund teacher salaries, teacher training, books and stationary, as well as other needed improvements to the schools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <img src={healthIcon} alt="Health" className="w-12 h-12" />
                </div>
                <CardTitle className="text-3xl">Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-justify">
                  SRI Trust provides the children in these three government schools with extra nutrition every day. They also have access to a general health checkup from a qualified pediatrician two times a year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 text-slate-700 dark:text-slate-300">About Us</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-justify">
            <p>
              SRI Trust is the charitable arm of Ashwini and Sashi P. Reddi.
            </p>
            <p>
              Sashi Reddi is a successful technology entrepreneur, business leader, and an active angel investor. Sashi runs a seed stage venture fund, SRI Capital, that is typically the first institutional investor in various technology and media start-ups.
            </p>
            <p>
              Ashwini Reddi, a graduate of London School of Economics, is an active investor in food businesses. Previously, she launched a successful chain of Indian fusion restaurants called Big Dosa in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 text-slate-700 dark:text-slate-300">Schools Adopted</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Film Nagar School</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Govt. Primary School
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-foreground/70">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Ambedkar Nagar, Behind Padmalaya Studio, Road no. 78, Film Nagar, Hyderabad – 500036
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Madinaguda School</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Mandal Parishad Upper Primary School
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-foreground/70">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Madinaguda, Opp. Hanuman Temple, Miyapur Post, Sherilingam Pally Mandal, Hyderabad - 500050, RR District
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Pragathi Nagar School</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Mandal Parishad Primary School
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-foreground/70">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Pragathi Nagar, Bachupally Mandal, Hyderabad - 500090, Medchel District
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 text-slate-700 dark:text-slate-300">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 text-slate-700 dark:text-slate-300">Contact Us</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">SRI Charitable Trust</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-foreground/70 text-sm text-justify">
                    C/o Nalam & Associates, 8th Floor, Sanali Spazio, Plot No.19,
                    TSIIC Software Units Layout, Hitech City, Hyderabad 500081
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium mb-1">For Enquiries</p>
                  <a
                    href="mailto:charity@sricapital.com"
                    className="text-primary hover:underline text-sm"
                  >
                    charity@sricapital.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <TrustFooter />
    </div>
  );
};

export default Trust;
