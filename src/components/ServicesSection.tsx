import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Scale, Wind, Sparkles, Package } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Schimb Anvelope",
    description: "Schimbăm rapid și profesional anvelopele de vară, iarnă sau all-season. Echipamente moderne pentru toate tipurile de jante.",
  },
  {
    icon: Scale,
    title: "Echilibrare Roți",
    description: "Echilibrare de precizie pentru o condus confortabil și sigur. Eliminăm vibrațiile și uzura neuniformă a anvelopelor.",
  },
  {
    icon: Wind,
    title: "Încărcare Freon AC",
    description: "Completare și verificare sistem climatizare auto. Identificăm și reparăm scurgerile pentru o funcționare optimă.",
  },
  {
    icon: Sparkles,
    title: "Igienizare cu Ozon",
    description: "Dezinfectare completă a habitaclului cu ozon. Elimină mirosurile neplăcute și bacteriile pentru un aer curat.",
  },
  {
    icon: Package,
    title: "Hotel Anvelope",
    description: "Depozitare pentru anvelopele de sezon. Spațiu dedicat, condiții optime, echipat cu rafturi profesionale.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferim o gamă completă de servicii pentru întreținerea și siguranța vehiculului tău
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
