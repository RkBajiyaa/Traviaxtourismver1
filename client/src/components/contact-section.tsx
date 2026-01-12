import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, CheckCircle, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Inquiry from Traviax Tourism Website");
    formData.append("from_name", "Traviax Tourism Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Inquiry Submitted!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
        setServiceType("");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Plan Your Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out to us for customized travel packages, quotes, and any
            travel-related queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 border border-card-border" data-testid="card-contact-info">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Office Address
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-address">
                    Site no 6, First Floor
                    <br />
                    M T K Reddy Building
                    <br />
                    Outer Ring Road (Service Road)
                    <br />
                    Marathahalli, Bangalore 560037
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/919916301348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                    data-testid="link-contact-whatsapp"
                  >
                    +91 99163 01348
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+919916301348"
                    className="text-sm text-primary hover:underline"
                    data-testid="link-contact-phone"
                  >
                    +91 99163 01348
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Business Hours
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-hours">
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href="https://wa.me/919916301348?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="link-contact-whatsapp-btn"
              >
                <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white">
                  <SiWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </Card>

          <Card className="lg:col-span-2 p-6 border border-card-border" data-testid="card-contact-form">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send Us an Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="to_email" value="TRAVIAXTOURISMPVT@GMAIL.COM" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    required
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service_type">Service Type</Label>
                  <Select value={serviceType} onValueChange={setServiceType} name="service_type">
                    <SelectTrigger data-testid="select-service-type">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="International Tour">International Tour</SelectItem>
                      <SelectItem value="Domestic Tour">Domestic Tour</SelectItem>
                      <SelectItem value="Flight Booking">Flight Booking</SelectItem>
                      <SelectItem value="Visa Assistance">Visa Assistance</SelectItem>
                      <SelectItem value="Transport Services">Transport Services</SelectItem>
                      <SelectItem value="Corporate Travel">Corporate Travel</SelectItem>
                      <SelectItem value="Honeymoon Package">Honeymoon Package</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="service_type" value={serviceType} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your travel plans, preferred destinations, dates, and any special requirements..."
                  rows={4}
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto gap-2"
                disabled={isSubmitting}
                data-testid="button-submit-inquiry"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
