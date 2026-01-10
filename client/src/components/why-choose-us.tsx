import { Shield, Clock, Award, Wallet, HeartHandshake, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance for all your travel queries and emergencies.",
    stat: "24/7",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed travel agency with comprehensive travel insurance options.",
    stat: "100%",
  },
  {
    icon: Award,
    title: "Expert Planning",
    description: "Experienced travel consultants crafting personalized itineraries for you.",
    stat: "10+",
    statLabel: "Years",
  },
  {
    icon: Wallet,
    title: "Best Prices",
    description: "Competitive pricing with exclusive deals and group discounts available.",
    stat: "Best",
    statLabel: "Value",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partner",
    description: "Hundreds of satisfied travelers trust us for their journey needs.",
    stat: "500+",
    statLabel: "Happy",
  },
  {
    icon: Headphones,
    title: "Personal Touch",
    description: "Dedicated travel manager assigned for your complete journey.",
    stat: "1:1",
    statLabel: "Support",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary dark:bg-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Travel with Confidence
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We're committed to making your travel experience seamless, safe, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-md p-6 border border-white/10"
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {feature.stat}
                    </span>
                    {feature.statLabel && (
                      <span className="text-sm text-primary-foreground/70">
                        {feature.statLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
