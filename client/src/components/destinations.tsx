import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

import parisImage from "@assets/stock_images/paris_eiffel_tower_b_39363f24.jpg";
import dubaiImage from "@assets/stock_images/dubai_skyline_modern_8ea53795.jpg";
import baliImage from "@assets/stock_images/bali_temple_tropical_98e9e653.jpg";
import maldivesImage from "@assets/stock_images/maldives_luxury_over_299d163d.jpg";
import keralaImage from "@assets/stock_images/kerala_backwaters_ho_265d6b3c.jpg";
import tajMahalImage from "@assets/stock_images/taj_mahal_agra_india_bd52bd85.jpg";
import goaImage from "@assets/stock_images/goa_beach_sunset_bea_4a51a62e.jpg";
import swissImage from "@assets/stock_images/swiss_alps_mountains_1085c71d.jpg";
import singaporeImage from "@assets/stock_images/singapore_marina_bay_6732adf5.jpg";

const destinations = [
  {
    name: "Paris, France",
    image: parisImage,
    type: "International",
    price: "Starting ₹85,000",
    featured: true,
  },
  {
    name: "Dubai, UAE",
    image: dubaiImage,
    type: "International",
    price: "Starting ₹45,000",
    featured: false,
  },
  {
    name: "Bali, Indonesia",
    image: baliImage,
    type: "International",
    price: "Starting ₹55,000",
    featured: false,
  },
  {
    name: "Maldives",
    image: maldivesImage,
    type: "International",
    price: "Starting ₹95,000",
    featured: true,
  },
  {
    name: "Kerala Backwaters",
    image: keralaImage,
    type: "Domestic",
    price: "Starting ₹25,000",
    featured: false,
  },
  {
    name: "Agra, Taj Mahal",
    image: tajMahalImage,
    type: "Domestic",
    price: "Starting ₹15,000",
    featured: false,
  },
  {
    name: "Goa Beaches",
    image: goaImage,
    type: "Domestic",
    price: "Starting ₹18,000",
    featured: true,
  },
  {
    name: "Swiss Alps",
    image: swissImage,
    type: "International",
    price: "Starting ₹1,50,000",
    featured: false,
  },
  {
    name: "Singapore",
    image: singaporeImage,
    type: "International",
    price: "Starting ₹65,000",
    featured: false,
  },
];

export function Destinations() {
  return (
    <section className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Popular Destinations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dream Destinations Await
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of the world's most breathtaking
            destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={destination.name}
              className={`group overflow-hidden border-0 hover-elevate cursor-pointer ${
                index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              data-testid={`card-destination-${destination.name.toLowerCase().replace(/[,\s]+/g, "-")}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge
                    variant={destination.type === "International" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {destination.type}
                  </Badge>
                  {destination.featured && (
                    <Badge className="bg-secondary text-secondary-foreground text-xs">
                      Popular
                    </Badge>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {destination.name}
                  </div>
                  <p className="text-white font-semibold text-lg">
                    {destination.price}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
