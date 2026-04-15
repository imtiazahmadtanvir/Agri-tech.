## Agri-Tech Platform

Agri-Tech is a full-stack Next.js 15 application that connects farmers, buyers, and experts in a single platform. It provides a marketplace for agricultural products, community features, expert Q&A and AI assistance, plus dashboards and profile management tailored for different user roles.

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- UI: React 19, Tailwind CSS
- State/Data: @tanstack/react-query, React Context
- Auth: next-auth with Credentials, Google, and GitHub providers
- Database: MongoDB (custom dbConnect helper)
- Realtime / Chat: socket.io, socket.io-client
- Maps & Location: leaflet, react-leaflet
- Forms & Validation: react-hook-form
- Notifications & UX: react-hot-toast, react-spinners, lucide-react icons
- AI: @google/generative-ai (Gemini API integration)

## Main Features

- Home landing page with sections for services, statistics, testimonials, and blog.
- Authentication with email/password and social login (Google, GitHub).
- User roles (e.g., farmer) and enriched session data via next-auth.
- Marketplace for agricultural products (buying, listing, messaging/inbox).
- Dashboard with product management, analytics, and weather information.
- Community area with events, forums, and groups.
- Expert help section with AI assistant and Q&A forum.
- User profile pages and settings.
- Location-aware features using maps and current-location utilities.

## Project Structure

High-level folders (under `src/`):

- `app/` – App Router pages, layouts, API routes, and route groups:
	- `(auth)/login`, `(auth)/register` – auth flows
	- `(dashboard)/dashboard` – dashboard views
	- `(market)/marketplace` – marketplace (buying, listing, inbox, product)
	- `community/` – community pages, events, forum, groups
	- `expert-help/ai`, `expert-help/qa` – AI and Q&A features
	- `profile/` – profile layout and page
	- `services/`, `contact/`, `home page` – marketing-facing pages
	- `api/` – API routes (auth, listings, products, user details, Gemini, etc.)
- `components/` – Reusable UI and feature components:
	- `home-page/` – all homepage sections (hero, about, services, stats, etc.)
	- `market/marketplace/` – marketplace components
	- `auth/` – login UI
	- `chatbot/` – chatbot UI and floating chatbot
	- `community/`, `qa/` – community and forum components
	- `services-page/` – services/pricing sections
	- `ui/`, `shared/`, `spinner/`, etc. – shared UI building blocks
- `context/` – React context for global and marketplace state.
- `lib/` – core utilities such as `auth` (next-auth config), `dbConnect`, and helpers.
- `provider/` – providers such as `AuthProvider`.
- `utils/` – helper utilities (image upload, time/timestamp, weather data, etc.).
- `types/` – shared TypeScript types.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- A MongoDB instance (local or hosted)
- API keys for:
	- Google OAuth
	- GitHub OAuth
	- Gemini (Google Generative AI)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and configure at least:

- `MONGODB_URI` – MongoDB connection string
- `NEXTAUTH_URL` – Base URL of the app (e.g. http://localhost:3000)
- `NEXTAUTH_SECRET` – Secret for NextAuth
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` – Google OAuth credentials
- `GITHUB_ID`, `GITHUB_SECRET` – GitHub OAuth credentials
- Any Gemini / AI related keys used by `@google/generative-ai`

Consult the code under `src/lib`, `src/app/api`, and `src/app/expert-help` to verify any additional required env variables.

### Running the App

Development:

```bash
npm run dev
```

Build and start in production mode:

```bash
npm run build
npm start
```

Linting:

```bash
npm run lint
```

The app defaults to running at http://localhost:3000.

## Notes

- Authentication configuration lives in `src/lib/auth.ts`.
- Database connection logic is in `src/lib/dbConnect.ts`.
- Custom React Query provider is under `src/components/react-query/QueryProvider.tsx`.
- Global context and marketplace state are under `src/context/`.

As the project evolves, update this README with any new major features, routes, or environment requirements.
