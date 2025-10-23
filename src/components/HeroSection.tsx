import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Vulcanizare Auto{" "}
              <span className="text-primary">Chiajna</span>
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-semibold">
              Rapid, corect, profesionist.
            </p>
            <p className="text-lg text-muted-foreground">
              Servicii complete de vulcanizare, echilibrare, încărcare freon și
              igienizare cu ozon. Echipamente moderne și personal calificat pentru
              siguranța ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-lg"
                onClick={() => window.open("tel:0745123456")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Sună Acum
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-2"
                onClick={scrollToContact}
              >
                <MapPin className="h-5 w-5 mr-2" />
                Locație
              </Button>
            </div>
            <div className="pt-6 space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Program:</span>
                Luni–Sâmbătă, 09:00–18:00
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Adresă:</span>
                Str. Principală nr. 45, Chiajna, Ilfov
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Vulcanizare Auto Chiajna - Servicii profesionale"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-hover">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Ani Experiență</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
