import { useState } from "react";
import sashiReddiImage from "@/assets/sashi-reddi.png";
import docParghiImage from "@/assets/doc-parghi.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Fund = () => {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  const toggleBio = (person: string) => {
    setExpandedBio(expandedBio === person ? null : person);
  };

  const sashiBio = {
    short: "SRI Capital is the investment arm of Sashi P. Reddi. It is also the anchor investor in SRI Capital Fund I, LP. Sashi Reddi is a Venture Advisor at Westbridge Capital, a $8 billion private equity fund and is based in Philadelphia. For the last ten years, Sashi has been investing at the seed stage in enterprise software and deep tech startups in the US and in India.",
    full: `SRI Capital is the investment arm of Sashi P. Reddi. It is also the anchor investor in SRI Capital Fund I, LP. More information on the fund can be found at sricapital.fund.

Sashi Reddi is a Venture Advisor at Westbridge Capital, a $8 billion private equity fund and is based in Philadelphia. For the last ten years, Sashi has been investing at the seed stage in enterprise software and deep tech startups in the US and in India. He is the founder of SRI Capital, a seed stage venture capital fund that is typically the first institutional investor in these companies and plays an active role in helping these companies succeed in the US market.

Previously, Sashi was the founder and CEO of AppLabs, the world's largest independent software testing company with over 2,500 QA professionals in India, the US, and the UK. AppLabs was funded by Westbridge Capital (Sequoia Capital India). CSC (now DXC) acquired AppLabs in September 2011. Post the acquisition of AppLabs by CSC, Sashi served as the VP & GM, Big Data and Analytics at CSC, reporting directly to the CEO.

A serial entrepreneur, Sashi has started three other companies prior to AppLabs. These were EZPower Systems (web content management pioneer acquired by DocuCorp, and eventually a part of Oracle), iCoop (group purchasing dotcom), and FXLabs (leading Indian game developer acquired by Foundation 9 Entertainment).

Sashi received his BTech in Computer Science from IIT Delhi, an MS in Computer Science from NYU, and later a PhD from The Wharton School, University of Pennsylvania. He recently earned a professional certificate in Genetics and Genomics from Stanford University.

Sashi is the chairman of the IIT Delhi Endowment Management Foundation as well as a founder and board member of IIT Delhi Endowment Fund. He is the founding president of TiE Philadelphia. He also serves on the board of T-Hub, India's largest incubator for start-ups. Sashi runs a charitable organization, SRI Trust, that supports the educational and overall development needs of 1125 children in three schools in Hyderabad, India.`
  };

  const docBio = {
    short: "Doc Parghi is a sales focused technology executive and venture capitalist with experience running and scaling businesses globally. He is a dynamic and visionary leader who led his start-up through various transformations into what became the largest company of its kind before its sale to a Fortune 100 firm.",
    full: `Doc Parghi is a sales focused technology executive and venture capitalist with experience running and scaling businesses globally. He is a dynamic and visionary leader who led his start-up through various transformations into what became the largest company of its kind before its sale to a Fortune 100 firm. Currently, Doc is a Partner with SRI Capital an early stage VC, which provides funding, advice and liquidity solutions to start-ups, early stage concepts and growth companies. Previously, Doc was the Global GM of the Mobility and Social business unit at CSC, responsible for building the Mobility business for CSC. CSC (NYSE: CSC) is a $15 Billion IT services and consulting company.

Doc was on the founding team at AppLabs, the world's largest independent software testing company with over 2,500 QA professionals in US, UK and India. AppLabs was funded by Sequoia Capital. CSC acquired AppLabs, providing Sequoia with a sizeable return. Doc has been involved with other early stage companies prior to AppLabs including iCoop (group purchasing dotcom).

Doc received his BS and later his MBA from Drexel University.

Doc has serves on The Technology Investment Advisory Committee at Ben Franklin Technology Partners. Doc also serves as a Civilian Aide to Secretary (CASA) of the Army for Pennsylvania-East, appointed by the US Secretary of the Army. CASAs provide individual advice to the Secretary of the Army, the Chief of Staff, and commanders at all levels. In addition, Doc is a commissioned Kentucky Colonel. Finally, Doc also runs The Freedom Council of Valley Forge a non-partisan, educational, public affairs organization, chartered in 1989 to promote individual liberty and human dignity.`
  };

  return (
    <section id="fund" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          The Fund
        </h2>
        
        <div className="space-y-8 mb-20">
          <p className="font-sans text-xl leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
            SRI Capital Fund I has been investing in early-stage technology companies across the US 
            and India since 2018. We provide not just capital, but strategic guidance and network access 
            to help founders scale their vision into reality. Fund I is currently not making new investments.
          </p>
        </div>

        <div className="border-t border-border/50 pt-16">
          <h3 className="font-serif text-4xl font-bold mb-12 text-center">Team</h3>
          <div className="space-y-16">
            {/* Sashi Reddi */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="group">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500">
                  <img 
                    src={sashiReddiImage} 
                    alt="Sashi Reddi, Managing Partner at SRI Capital" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-serif text-2xl font-bold mt-6 mb-2 group-hover:text-primary transition-colors">Sashi Reddi</h4>
                <p className="font-sans text-lg text-muted-foreground">Managing Partner</p>
              </div>
              <Card className="md:col-span-2 bg-card/50 border-border/50">
                <CardContent className="p-8">
                  <p className="font-sans text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                    {expandedBio === "sashi" ? sashiBio.full : sashiBio.short}
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => toggleBio("sashi")}
                    className="mt-4 text-primary hover:text-primary/80"
                  >
                    {expandedBio === "sashi" ? "Read Less" : "Read More"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Doc Parghi */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="group md:order-last">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500">
                  <img 
                    src={docParghiImage} 
                    alt="Doc Parghi, Managing Partner at SRI Capital" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-serif text-2xl font-bold mt-6 mb-2 group-hover:text-primary transition-colors">Doc Parghi</h4>
                <p className="font-sans text-lg text-muted-foreground">Managing Partner</p>
              </div>
              <Card className="md:col-span-2 bg-card/50 border-border/50">
                <CardContent className="p-8">
                  <p className="font-sans text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                    {expandedBio === "doc" ? docBio.full : docBio.short}
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => toggleBio("doc")}
                    className="mt-4 text-primary hover:text-primary/80"
                  >
                    {expandedBio === "doc" ? "Read Less" : "Read More"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fund;
