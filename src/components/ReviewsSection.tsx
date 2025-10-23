import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ion Popescu",
    rating: 5,
    text: "Servicii excelente! Schimbat anvelopele rapid și profesionist. Prețuri corecte și personal amabil. Recomand cu încredere!",
    date: "Martie 2024",
  },
  {
    name: "Maria Ionescu",
    rating: 5,
    text: "Cel mai bun service din zonă! Am făcut echilibrare și igienizare cu ozon. Mașina merge perfect și miroase fresh. Mulțumesc!",
    date: "Februarie 2024",
  },
  {
    name: "Andrei Dumitru",
    rating: 5,
    text: "Profesioniști adevărați! Mi-au rezolvat problema cu clima în 30 minute. Echipamente moderne și prețuri oneste. Reveniu sigur!",
    date: "Ianuarie 2024",
  },
  {
    name: "Elena Constantinescu",
    rating: 5,
    text: "Hotel anvelope gratuit și servicii de top! Personal foarte amabil și atent la detalii. Mulțumită pentru seriozitate!",
    date: "Decembrie 2023",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clienții Care Ne-au Ales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peste 1000+ clienți mulțumiți. Vezi ce spun aceștia despre serviciile noastre
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-primary">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Vezi toate recenziile pe Google
            <Star className="h-5 w-5 fill-secondary text-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
