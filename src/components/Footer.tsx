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
                href="tel:+40760612839"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +40 760 612 839
              </a>
              <a
                href="tel:+40750203286"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +40 750 203 286
              </a>
              <a
                href="mailto:starwheelsa@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                starwheelsa@gmail.com
              </a>
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Strada 1 Decembrie 1918 175b, Chiajna
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
