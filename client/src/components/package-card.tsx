import { Link } from "wouter";
import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { TourPackage } from "@/data/packages";

interface PackageCardProps {
  pkg: TourPackage;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Card className="overflow-visible group hover-elevate">
      <div className="relative overflow-hidden rounded-t-md">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
          {pkg.price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2" data-testid={`text-package-name-${pkg.id}`}>
          {pkg.name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {pkg.destination}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {pkg.duration}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {pkg.highlights.slice(0, 3).map((highlight, i) => (
            <span
              key={i}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
            >
              {highlight}
            </span>
          ))}
        </div>
        <Link href={`/package/${pkg.id}`}>
          <Button className="w-full" data-testid={`button-view-package-${pkg.id}`}>
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
