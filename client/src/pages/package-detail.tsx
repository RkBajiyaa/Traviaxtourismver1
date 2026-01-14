import { useParams, Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPackageById } from "@/data/packages";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PackageDetail() {
  const { id } = useParams<{ id: string }>();
  const pkg = getPackageById(id || "");

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
            <Link href="/">
              <Button data-testid="button-back-home">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the "${pkg.name}" package (${pkg.duration} - ${pkg.price}). Please share more details.`
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="relative h-[40vh] md:h-[50vh]">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <Link href={pkg.category === "domestic" ? "/domestic" : "/international"}>
                <Button variant="outline" size="sm" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {pkg.category === "domestic" ? "Domestic" : "International"} Tours
                </Button>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-accent mb-2" data-testid="text-package-title">
                {pkg.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {pkg.destination}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </span>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold">
                  {pkg.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">About This Package</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Tour Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.inclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                  
                  <a
                    href={`https://wa.me/919916301348?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full mb-3" size="lg" data-testid="button-book-whatsapp">
                      <Phone className="w-4 h-4 mr-2" />
                      Book via WhatsApp
                    </Button>
                  </a>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="w-full" data-testid="button-enquire">
                      Send Enquiry
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Price may vary based on travel dates and group size
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
