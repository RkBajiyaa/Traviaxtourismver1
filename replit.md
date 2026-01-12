# Traviax Tourism Website

## Overview

Traviax Tourism is a premium travel and tourism website for a Bangalore-based travel agency. The platform showcases international and domestic tour packages, transport services, visa assistance, flight bookings, and 24/7 travel support. It's designed as a modern, visually-rich marketing website with a contact inquiry system for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature-specific sections as standalone components in `client/src/components/`
- Theme support (light/dark mode) via React Context

### Backend Architecture
- **Runtime**: Node.js with Express (development server only)
- **Language**: TypeScript with ESM modules

The server handles:
- Static file serving in production
- Vite dev server middleware in development

### Contact Form
- **Service**: Web3Forms (https://web3forms.com)
- **Method**: Direct frontend submission - no backend needed
- **Email**: Submissions sent to TRAVIAXTOURISMPVT@GMAIL.COM
- **Environment Variable**: `VITE_WEB3FORMS_KEY` (set in Replit secrets)

### Design System
- Typography: Plus Jakarta Sans (primary), Playfair Display (accent headers)
- Color palette: HSL-based CSS custom properties supporting light/dark modes
- Primary color: Teal/cyan (#0891b2 equivalent)
- Secondary color: Orange/amber for accents
- Consistent spacing using Tailwind's 4-based scale

## External Dependencies

### Third-Party Services
- **WhatsApp Integration**: Direct links to WhatsApp for customer contact (phone: +919916301348)
- **Web3Forms**: Contact form submission service (sends emails directly)
- **Google Fonts**: Plus Jakarta Sans and Playfair Display loaded via CDN

### Key NPM Packages
- **UI Components**: Full shadcn/ui component set via Radix UI primitives
- **Forms**: Native HTML forms with fetch to Web3Forms API
- **Icons**: `lucide-react`, `react-icons` (for social media icons)

### Development Tools
- **Bundling**: Vite (client), esbuild (server production build)
- **Type Checking**: TypeScript with strict mode
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner