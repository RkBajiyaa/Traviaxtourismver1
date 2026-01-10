import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Search, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import heroImage from "@assets/stock_images/tropical_beach_parad_7eb49f4c.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Available 24/7 for Your Travel Needs
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Explore the World
          <br />
          <span className="text-secondary">With Traviax</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Your trusted partner for international and domestic travel. From flight
          bookings to visa assistance, we make your dream vacations a reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#contact" data-testid="link-hero-enquiry">
            <Button size="lg" className="text-base px-8 gap-2">
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://wa.me/919916301348"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-hero-whatsapp"
          >
            <Button
              size="lg"
              className="text-base px-8 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <SiWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-md p-4 sm:p-6 border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-md px-4 py-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/60">Destination</p>
                  <p className="text-sm text-white font-medium">Where to?</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-md px-4 py-3">
                <Calendar className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/60">Travel Date</p>
                  <p className="text-sm text-white font-medium">Pick dates</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-md px-4 py-3">
                <Users className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/60">Travelers</p>
                  <p className="text-sm text-white font-medium">Add guests</p>
                </div>
              </div>
              <a href="#contact" className="w-full" data-testid="link-hero-search">
                <Button className="w-full h-full gap-2 min-h-[52px]">
                  <Search className="w-4 h-4" />
                  Get Quote
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Happy Travelers" },
            { value: "50+", label: "Destinations" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
