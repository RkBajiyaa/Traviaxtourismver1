import { Check, Plane, Hotel, FileText, CreditCard, Ship, Globe, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import swissImage from "@assets/stock_images/swiss_alps_mountains_1085c71d.jpg";
import maldivesImage from "@assets/stock_images/maldives_luxury_over_299d163d.jpg";
import parisImage from "@assets/stock_images/paris_eiffel_tower_b_39363f24.jpg";

const services = [
  { icon: Globe, text: "Customized international itineraries" },
  { icon: Plane, text: "Flight ticket booking (all airlines)" },
  { icon: Hotel, text: "International hotel & resort bookings" },
  { icon: FileText, text: "Visa assistance (all countries)" },
  { icon: FileText, text: "Passport assistance" },
  { icon: CreditCard, text: "Travel insurance (international)" },
  { icon: Ship, text: "Cruise tour bookings" },
  { icon: CreditCard, text: "Forex & foreign exchange assistance" },
  { icon: Plane, text: "Airport transfers (international)" },
  { icon: Globe, text: "Overseas sightseeing & guided tours" },
  { icon: Users, text: "Group tours & corporate international travel" },
  { icon: Heart, text: "Honeymoon & luxury international packages" },
  { icon: FileText, text: "Student & work visa travel assistance" },
];

export function InternationalServices() {
  return (
    <section id="international" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-md overflow-hidden">
                  <img
                    src={swissImage}
                    alt="Swiss Alps destination"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                  <img
                    src={parisImage}
                    alt="Paris destination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[3/4] rounded-md overflow-hidden">
                  <img
                    src={maldivesImage}
                    alt="Maldives destination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-md shadow-lg hidden sm:block">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm opacity-90">Countries Covered</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              International Travel
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Explore the World with Expert Guidance
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From visa processing to luxury accommodations, we handle every detail
              of your international journey. Our expertise spans continents,
              ensuring seamless travel experiences worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-md bg-muted/50 dark:bg-muted/30"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{service.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" data-testid="link-international-enquiry">
              <Button size="lg" className="gap-2">
                <Plane className="w-4 h-4" />
                Plan International Trip
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
