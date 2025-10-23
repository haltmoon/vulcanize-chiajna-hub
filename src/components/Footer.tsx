import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">SW</span>
              </div>
              <span className="font-bold text-xl">StarWheels</span>
            </div>
            <p className="text-primary-foreground/80">
              Vulcanizare Auto Chiajna - Servicii profesionale pentru siguranța ta pe drum
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Rapid</h3>
            <div className="space-y-3">
              <a
                href="tel:0745123456"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                0745 123 456
              </a>
              <a
                href="mailto:contact@starwheels.ro"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@starwheels.ro
              </a>
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Str. Principală nr. 45, Chiajna
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Program</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Luni–Vineri: 09:00–18:00</p>
              <p>Sâmbătă: 09:00–14:00</p>
              <p>Duminică: Închis</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>© 2024 StarWheels - Vulcanizare Auto Chiajna. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
