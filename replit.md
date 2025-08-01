# Overview

This is a personal portfolio website for Sabrina Suzán Ahedo, built as an elegant digital resume showcasing her professional background in strategic finance, consulting, and entrepreneurship. The application is a modern single-page website with smooth animations, responsive design, and a clean professional aesthetic featuring sections for biography, experience, education, entrepreneurship, skills, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend uses React 18 with TypeScript in a single-page application (SPA) architecture. The application utilizes a component-based structure with:

- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a navy blue and beige color scheme
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture  
The backend uses a minimal Express.js server with TypeScript:

- **Framework**: Express.js with middleware for JSON parsing and request logging
- **Development Setup**: Vite integration for hot module replacement in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be extended for database integration
- **API Structure**: RESTful API prefix with `/api` routes (currently minimal as this is primarily a static portfolio)

## Component Structure
The application follows a modular component architecture:

- **Layout Components**: Navigation, Hero, Footer sections
- **Content Components**: Experience, Education, Entrepreneurship, Skills sections  
- **Interactive Components**: Chatbot widget, contact forms
- **UI Components**: Reusable Shadcn/ui components in `/components/ui/`

## Styling and Theming
- **Design System**: Custom CSS variables for consistent theming with light/dark mode support
- **Color Palette**: Navy blue primary colors with beige/cream accents and gold highlights
- **Typography**: Inter font family for clean, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Database Schema
Currently uses an in-memory storage system with a basic User schema:
- **Users Table**: Contains id, username, and password fields
- **ORM**: Drizzle ORM with PostgreSQL dialect configured for future database integration
- **Migrations**: Drizzle Kit for schema management and migrations

# External Dependencies

## UI and Styling
- **Shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: For component variant management

## Frontend State and Data
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing library
- **Date-fns**: Date manipulation utilities

## Backend and Database
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe ORM for database operations
- **Neon Database**: Serverless PostgreSQL database (configured but not actively used)
- **Connect-pg-simple**: PostgreSQL session store

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind

## Deployment and Hosting
- **Replit**: Primary hosting platform with specialized Replit plugins
- **Static Site Generation**: Built for static deployment with Express.js fallback