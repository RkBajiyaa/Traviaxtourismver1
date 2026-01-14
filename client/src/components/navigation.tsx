import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Plane } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "International", href: "/international" },
  { name: "Domestic", href: "/domestic" },
  { name: "Transport", href: "/transport" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight ${showTransparent ? "text-white" : "text-foreground"}`}>
                TRAVIAX
              </span>
              <span className={`text-xs -mt-1 ${showTransparent ? "text-white/80" : "text-muted-foreground"}`}>
                Tourism Pvt. Ltd.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : showTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
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
              className={`lg:hidden ${showTransparent ? "text-white hover:bg-white/10" : ""}`}
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
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
