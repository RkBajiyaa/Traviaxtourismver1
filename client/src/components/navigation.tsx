import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Phone, Plane } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "International", href: "#international" },
  { name: "Domestic", href: "#domestic" },
  { name: "Transport", href: "#transport" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                TRAVIAX
              </span>
              <span className={`text-xs -mt-1 ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Tourism Pvt. Ltd.
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <a
              href="https://wa.me/919916301348"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
              data-testid="link-whatsapp-header"
            >
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <SiWhatsapp className="w-4 h-4" />
                <span className="hidden md:inline">WhatsApp Us</span>
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-4 py-3 text-sm font-medium rounded-md text-foreground hover:bg-muted transition-colors"
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919916301348"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:hidden"
              data-testid="link-whatsapp-mobile"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 mt-2">
                <SiWhatsapp className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
