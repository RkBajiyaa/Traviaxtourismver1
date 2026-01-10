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
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful JSON API with `/api/` prefix
- **Validation**: Zod schemas shared between client and server

The server handles:
- Static file serving in production
- Vite dev server middleware in development
- API endpoints for inquiry form submissions

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` (shared between client/server)
- **Migrations**: Drizzle Kit with `db:push` command

Current schema includes:
- `users` table (basic auth preparation)
- `inquiries` table (contact form submissions)

### Design System
- Typography: Plus Jakarta Sans (primary), Playfair Display (accent headers)
- Color palette: HSL-based CSS custom properties supporting light/dark modes
- Primary color: Teal/cyan (#0891b2 equivalent)
- Secondary color: Orange/amber for accents
- Consistent spacing using Tailwind's 4-based scale

## External Dependencies

### Third-Party Services
- **WhatsApp Integration**: Direct links to WhatsApp for customer contact (phone: +919916301348)
- **Google Fonts**: Plus Jakarta Sans and Playfair Display loaded via CDN

### Key NPM Packages
- **Database**: `drizzle-orm`, `pg` (PostgreSQL client), `drizzle-zod`
- **UI Components**: Full shadcn/ui component set via Radix UI primitives
- **Forms**: `react-hook-form`, `@hookform/resolvers`, `zod`
- **HTTP Client**: Native fetch with custom `apiRequest` wrapper
- **Icons**: `lucide-react`, `react-icons` (for social media icons)

### Development Tools
- **Bundling**: Vite (client), esbuild (server production build)
- **Type Checking**: TypeScript with strict mode
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner