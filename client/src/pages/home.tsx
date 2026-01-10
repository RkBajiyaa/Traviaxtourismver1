import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { Destinations } from "@/components/destinations";
import { InternationalServices } from "@/components/international-services";
import { DomesticServices } from "@/components/domestic-services";
import { TransportServices } from "@/components/transport-services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <Destinations />
        <InternationalServices />
        <DomesticServices />
        <TransportServices />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
