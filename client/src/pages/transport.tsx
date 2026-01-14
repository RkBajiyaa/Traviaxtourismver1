import { Car, Users, Clock, Shield, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const vehicles = [
  { name: "Sedan (Swift Dzire / Etios)", capacity: "4 Passengers", rate: "₹12/km", minKm: "250 km/day" },
  { name: "SUV (Innova Crysta)", capacity: "6 Passengers", rate: "₹16/km", minKm: "250 km/day" },
  { name: "Tempo Traveller", capacity: "12-17 Passengers", rate: "₹22/km", minKm: "300 km/day" },
  { name: "Mini Bus", capacity: "20-25 Passengers", rate: "On Request", minKm: "300 km/day" },
  { name: "Luxury Coach", capacity: "40-50 Passengers", rate: "On Request", minKm: "300 km/day" },
];

const features = [
  { icon: Car, title: "Well-Maintained Fleet", description: "All vehicles are regularly serviced and sanitized" },
  { icon: Users, title: "Professional Drivers", description: "Experienced, verified drivers with local knowledge" },
  { icon: Clock, title: "24/7 Availability", description: "Round-the-clock service for all your travel needs" },
  { icon: Shield, title: "Fully Insured", description: "Complete insurance coverage for peace of mind" },
];

export default function TransportServices() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your transport services. Please share more details about vehicle availability and rates."
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-accent mb-4" data-testid="text-page-title">
              Transport Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable and comfortable transportation for all your travel needs. From airport transfers to outstation trips, we've got you covered.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-center mb-8">Our Vehicle Options</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-md border overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-muted font-semibold text-sm">
                  <div>Vehicle Type</div>
                  <div>Capacity</div>
                  <div>Rate</div>
                  <div>Min. Km</div>
                </div>
                {vehicles.map((vehicle, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 p-4 border-t text-sm">
                    <div className="font-medium">{vehicle.name}</div>
                    <div className="text-muted-foreground">{vehicle.capacity}</div>
                    <div className="text-primary font-semibold">{vehicle.rate}</div>
                    <div className="text-muted-foreground">{vehicle.minKm}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                * Rates are indicative and may vary based on route, season, and availability. GST extra.
              </p>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold mb-4">Ready to Book?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/919916301348?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" data-testid="button-whatsapp-transport">
                    <Phone className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                  </Button>
                </a>
                <a href="tel:+919916301348">
                  <Button variant="outline" size="lg" data-testid="button-call-transport">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91 99163 01348
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Service Areas</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Airport Transfers</h3>
                <p className="text-sm text-muted-foreground">Bangalore Airport pickups & drops</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Local Rentals</h3>
                <p className="text-sm text-muted-foreground">City tours & corporate travel</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Outstation Trips</h3>
                <p className="text-sm text-muted-foreground">Mysore, Ooty, Coorg & more</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
