import { Check, Train, Hotel, Mountain, Users, GraduationCap, Briefcase, Map, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import keralaImage from "@assets/stock_images/kerala_backwaters_ho_265d6b3c.jpg";
import tajMahalImage from "@assets/stock_images/taj_mahal_agra_india_bd52bd85.jpg";
import goaImage from "@assets/stock_images/goa_beach_sunset_bea_4a51a62e.jpg";

const services = [
  { icon: Map, text: "Domestic tour packages (All India)" },
  { icon: Train, text: "Flight, train & bus ticket booking" },
  { icon: Hotel, text: "Hotel, resort & homestay booking" },
  { icon: Mountain, text: "Hill station, beach, pilgrimage & heritage tours" },
  { icon: Users, text: "Honeymoon, family & group tours" },
  { icon: GraduationCap, text: "Educational & industrial tours" },
  { icon: Briefcase, text: "Corporate travel management" },
  { icon: MapPin, text: "Local sightseeing tours" },
  { icon: Users, text: "Tour guide services" },
  { icon: Shield, text: "Travel insurance (domestic)" },
];

export function DomesticServices() {
  return (
    <section id="domestic" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-secondary font-medium text-sm uppercase tracking-wider mb-3">
              Domestic Travel
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Discover Incredible India
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From the backwaters of Kerala to the peaks of Himalayas, from the
              deserts of Rajasthan to the beaches of Goa - experience the
              diverse beauty of India with our expertly crafted domestic tours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-md bg-card dark:bg-card/50"
                >
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground">{service.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" data-testid="link-domestic-enquiry">
              <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <MapPin className="w-4 h-4" />
                Explore India
              </Button>
            </a>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-8">
                <div className="relative aspect-[3/4] rounded-md overflow-hidden">
                  <img
                    src={keralaImage}
                    alt="Kerala backwaters"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                  <img
                    src={tajMahalImage}
                    alt="Taj Mahal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-md overflow-hidden">
                  <img
                    src={goaImage}
                    alt="Goa beaches"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-md shadow-lg hidden sm:block">
              <p className="text-3xl font-bold">29</p>
              <p className="text-sm opacity-90">States Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
