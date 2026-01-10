import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bus, Plane, MapPin, Key, Users } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const transportServices = [
  {
    icon: Car,
    title: "Car Rental",
    description: "AC / Non-AC cars for local and outstation trips with professional drivers.",
    features: ["Sedan", "SUV", "Luxury Cars"],
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    description: "Comfortable tempo travellers for group trips and family outings.",
    features: ["12-seater", "17-seater", "20-seater"],
  },
  {
    icon: Bus,
    title: "Bus & Coach",
    description: "Luxury buses and coaches for large groups and corporate events.",
    features: ["AC Coaches", "Sleeper Buses", "Volvo"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable airport pickup and drop services, available 24/7.",
    features: ["On-time", "Flight Tracking", "Meet & Greet"],
  },
  {
    icon: Key,
    title: "Self-Drive",
    description: "Self-drive car rentals for the independent traveler.",
    features: ["Hatchback", "Sedan", "SUV"],
  },
  {
    icon: Users,
    title: "Chauffeur Service",
    description: "Professional chauffeur-driven vehicles for a premium experience.",
    features: ["Trained Drivers", "Multilingual", "Professional"],
  },
];

export function TransportServices() {
  return (
    <section id="transport" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Transport Solutions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Seamless Transportation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From airport transfers to outstation trips, we provide reliable and
            comfortable transportation for all your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {transportServices.map((service) => (
            <Card
              key={service.title}
              className="p-6 hover-elevate border border-card-border"
              data-testid={`card-transport-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919916301348?text=Hi%2C%20I%20need%20transport%20services"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-transport-whatsapp"
          >
            <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white">
              <SiWhatsapp className="w-5 h-5" />
              Book Transport via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
