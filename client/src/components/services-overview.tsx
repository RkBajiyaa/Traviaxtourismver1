import { Card } from "@/components/ui/card";
import { Plane, MapPin, Car, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "International Tours",
    description:
      "Customized international itineraries, flight bookings, visa assistance, and luxury packages worldwide.",
    href: "#international",
    color: "bg-primary/10 text-primary dark:bg-primary/20",
  },
  {
    icon: MapPin,
    title: "Domestic Tours",
    description:
      "Explore incredible India with our curated domestic packages covering all states and destinations.",
    href: "#domestic",
    color: "bg-secondary/10 text-secondary dark:bg-secondary/20",
  },
  {
    icon: Car,
    title: "Transport Services",
    description:
      "Car rentals, tempo travellers, luxury coaches, and airport transfers for seamless travel.",
    href: "#transport",
    color: "bg-accent/10 text-accent dark:bg-accent/20",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support, emergency travel assistance, and complete travel management.",
    href: "#contact",
    color: "bg-chart-4/10 text-chart-4 dark:bg-chart-4/20",
  },
];

export function ServicesOverview() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From planning to execution, we handle every aspect of your journey with
            expertise and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group p-6 hover-elevate cursor-pointer border border-card-border"
              onClick={() => scrollToSection(service.href)}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className={`w-14 h-14 rounded-md flex items-center justify-center mb-5 ${service.color}`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
