import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import sabrinaProfessionalPhoto from "@assets/Sabrina CV Beige_1754022651062.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-beige-50 to-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-neutral-800 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-neutral-800">
              Sabrina Suzán Ahedo
            </h1>
            <h2 className="text-xl lg:text-2xl text-royal-blue mb-6 font-medium">
              Strategic Finance, Venturing, and Consulting
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-lg">
              Business & Finance student with international experience at UC Berkeley, Stanford, and Yale. 
              Passionate about strategy, venture capital, and data-driven growth with proven results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("experience")}
                className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white px-6 py-3 font-semibold"
              >
                View Experience
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-royal-blue shadow-2xl">
                <img 
                  src={sabrinaProfessionalPhoto} 
                  alt="Sabrina Suzán Ahedo - Professional Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-royal-blue rounded-full p-3 shadow-lg">
                <Star className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
