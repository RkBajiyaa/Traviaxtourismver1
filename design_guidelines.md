# Traviax Tourism Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from premium travel platforms (Airbnb's card aesthetics, Booking.com's service clarity, Expedia's comprehensive layouts) while creating a distinctive identity that communicates trust and wanderlust.

**Core Principle**: Showcase travel aspirations through stunning imagery while maintaining professional credibility for B2B services.

---

## Typography System
- **Primary**: Google Fonts - "Plus Jakarta Sans" (modern, professional)
- **Accent**: "Playfair Display" (for elegant section headers)
- **Hierarchy**: 
  - Hero: text-5xl to text-7xl (bold, 700)
  - Section Headers: text-3xl to text-4xl (semibold, 600)
  - Subheadings: text-xl to text-2xl (medium, 500)
  - Body: text-base to text-lg (regular, 400)

---

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, mb-8, gap-6, py-20, etc.)

**Container Strategy**:
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto
- Text content: max-w-4xl

---

## Page Structure (8 Sections)

### 1. Hero Section (90vh)
- Full-width background image (exotic destination - Maldives beach or Switzerland mountains)
- Centered headline + subheadline + dual CTAs
- Floating search bar component (destination/dates/travelers)
- Subtle gradient overlay for text readability
- Buttons with backdrop-blur-md backgrounds

### 2. Services Overview Grid
- 4-column grid (lg:grid-cols-4 md:grid-cols-2)
- Icon cards: International Tours, Domestic Tours, Transport, Support Services
- Heroicons for consistency
- Each card: icon + title + brief description + "Learn More" link

### 3. Featured Destinations Carousel
- 3-column masonry grid showcase
- Large destination cards with hover-reveal details
- Destination name + starting price overlay
- Mix of international (Paris, Dubai, Bali) and domestic (Kerala, Rajasthan, Goa) imagery

### 4. International Services Detail
- 2-column split layout
- Left: Compelling destination imagery collage
- Right: Comprehensive service list with checkmark icons
- Includes visa assistance, flight booking, forex, cruise tours

### 5. Domestic Services Detail
- Reversed 2-column (image right)
- Features India map illustration/graphic
- All-India coverage messaging
- Service checklist with regional highlights

### 6. Why Choose Traviax
- 4-column stats/features grid
- Trust indicators: "24/7 Support", "Licensed & Insured", "Expert Planning", "Best Prices"
- Icon + number/stat + description format

### 7. Contact & Location
- 3-column layout:
  - Column 1: Office address with map pin icon
  - Column 2: Quick contact form (Name, Email, Phone, Message)
  - Column 3: WhatsApp CTA + office hours + social links
- Prominent WhatsApp button with verified badge indicator

### 8. Footer
- 4-column grid: Services, Quick Links, Contact Info, Newsletter
- Complete address, WhatsApp number displayed
- Social media icons (Font Awesome)
- Trust badges (travel associations, payment methods)
- Copyright & licensing info

---

## Component Library

**Navigation**: Fixed header, logo left, menu center (Home, International, Domestic, Transport, Contact), WhatsApp button right

**Cards**: Rounded-xl, shadow-lg, hover:shadow-2xl transitions, overflow-hidden for images

**Buttons**: 
- Primary: px-8 py-3, rounded-full, font-semibold
- Secondary: outlined variant
- WhatsApp: brand-specific with icon

**Forms**: Floating labels, rounded-lg inputs, focus:ring states

**Icons**: Heroicons throughout for consistency

---

## Images Required

1. **Hero**: Breathtaking tropical beach or mountain landscape (3840x2160)
2. **International Destinations**: Paris Eiffel Tower, Dubai skyline, Bali temple, Maldives resort (6 images, 1200x800 each)
3. **Domestic Destinations**: Kerala backwaters, Taj Mahal, Goa beach, Kashmir valley, Rajasthan fort, South India temple (6 images)
4. **Service Icons**: Use Heroicons for all (plane, hotel, passport, etc.)
5. **Team/Office**: Optional authentic office photo for trust

---

## Animations
**Minimal & Strategic**:
- Hero search bar: gentle fade-in on load
- Cards: subtle scale on hover (scale-105)
- Smooth scroll behavior
- NO scroll-triggered animations or parallax

---

## Accessibility
- Proper heading hierarchy (h1 → h6)
- Alt text for all destination images
- ARIA labels for icon-only buttons
- Focus visible states for keyboard navigation
- Color-independent information (don't rely on color alone)