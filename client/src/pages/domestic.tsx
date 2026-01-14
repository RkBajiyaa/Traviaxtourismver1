import { domesticPackages } from "@/data/packages";
import { PackageCard } from "@/components/package-card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function DomesticTours() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-accent mb-4" data-testid="text-page-title">
              Domestic Tour Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the incredible diversity of India with our carefully curated domestic tour packages. From mountains to beaches, heritage to adventure.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {domesticPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
