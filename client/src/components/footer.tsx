import { Plane, MapPin, Phone, Mail, Clock, Twitter } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const quickLinks = [
  { name: "International Tours", href: "#international" },
  { name: "Domestic Tours", href: "#domestic" },
  { name: "Transport Services", href: "#transport" },
  { name: "Contact Us", href: "#contact" },
];

const services = [
  "Flight Bookings",
  "Hotel Reservations",
  "Visa Assistance",
  "Travel Insurance",
  "Cruise Bookings",
  "Forex Services",
];

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground dark:bg-card text-background dark:text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 mb-6"
              data-testid="link-footer-logo"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">TRAVIAX</span>
                <span className="text-xs -mt-1 opacity-70">Tourism Pvt. Ltd.</span>
              </div>
            </a>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Your trusted partner for international and domestic travel.
              Creating memorable journeys since 2014.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-md bg-background/10 dark:bg-muted flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <span className="text-sm opacity-80">
                  Site no 6, First Floor, M T K Reddy Building
                  <br />
                  Outer Ring Road, Marathahalli
                  <br />
                  Bangalore 560037
                </span>
              </li>
              <li className="flex items-center gap-3">
                <SiWhatsapp className="w-4 h-4 shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/919916301348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  +91 99163 01348
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a
                  href="tel:+919916301348"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  +91 99163 01348
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 shrink-0 text-primary" />
                <span className="text-sm opacity-80">
                  Mon-Sat: 9AM-7PM | Sun: 10AM-4PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 dark:border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70 text-center sm:text-left">
              © {new Date().getFullYear()} Traviax Tourism Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm opacity-70">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
