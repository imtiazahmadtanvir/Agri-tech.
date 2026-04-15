## 🌾 Agri-Tech Platform

The Agri-Tech Platform is a digital ecosystem designed to empower farmers by providing real-time agricultural data, expert consultation, market insights, modern farming resources, and community networking. It bridges the gap between traditional farming practices and modern technology to ensure sustainability, profitability, and resilience.

This repository contains the full-stack implementation of that platform using Next.js, MongoDB, and several external APIs (weather, AI, etc.).

---

## 1. Project Overview

The platform connects three main stakeholder groups:

- **Farmers** – manage fields, monitor crop and weather conditions, and sell produce.
- **Buyers** – discover and purchase agricultural products directly from farmers.
- **Experts & Community** – share knowledge, answer questions, and support farmers.

It offers dashboards, a marketplace, AI-powered tools, and a community layer in a single, integrated web application.

---

## 2. Core Objectives

- **Resource Access** – Deliver educational materials, guides, and access to farming tools.
- **Market Connectivity** – Enable farmers to track commodity prices, find buyers, and sell produce directly.
- **Expert Support** – Provide access to agronomists, consultants, and AI-powered assistance.
- **Sustainability** – Promote climate-smart, resource-optimized farming techniques.
- **Community Building** – Foster collaboration among farmers for shared knowledge and collective growth.

---

## 3. Platform Features

### 3.1 Home 🏡

- Landing page with platform overview and key access points to dashboard, resources, market, and expert help.

### 3.2 Farmer Dashboard 📊

- **Personalized greeting** with farm status.
- **Weather updates** based on farmer location, with multi-day forecast and alerts.
- **Crop status monitoring** (growth stages, health indicators, AI-assisted pest/disease insights).
- **Task manager** for daily/weekly to-do lists and reminders.
- **Market snapshot** with real-time commodity price trends.
- **Profit/Loss tracker** summarizing sales, expenses, and profit over time.
- Optional **community feed** showing latest discussions and posts from other farmers.

### 3.3 Resources 📚

- Guides, tutorials, videos, and PDFs on modern farming techniques.
- Marketplace-style view for seeds, fertilizers, machinery (with potential vendor ratings).
- Information on government schemes and subsidy programs.

### 3.4 Market 💰

- Full marketplace where farmers can list and sell produce directly to buyers.
- Advanced filters for buyers: price range, category, location, and search.
- Product detail pages with photos, descriptions, and listing dates.

### 3.5 Tools 🌾

- **Pest/Disease detector** – AI analysis of uploaded crop images combined with text prompts, powered by Google Gemini.
- Quick access to weather, soil, and advisory tools that use external APIs and the platform’s datasets.

### 3.6 Community 🗣️

- Farmer forum for discussions, success stories, and problem-solving.
- Local events calendar (workshops, fairs, and training sessions).
- Cooperative groups that allow farmers to organize bulk buying and selling.

### 3.7 Profile 👤

- Manage personal information, farm details, land size, and preferred crop categories.
- Control notification and privacy settings.

---

## 4. Architecture & Tech Stack

### 4.1 Frontend

- **Framework:** Next.js (App Router)
- **Language:** TypeScript with React
- **Styling:** Tailwind CSS
- **State/Data:** React Context and @tanstack/react-query
- **Maps & Location:** Leaflet and React Leaflet
- **Realtime / Chat:** socket.io and socket.io-client
- **Forms:** react-hook-form
- **Notifications & Feedback:** react-hot-toast, react-spinners, lucide-react icons

### 4.2 Backend

- **Runtime:** Next.js Route Handlers under `/api`.
- **Database:** MongoDB with a custom `dbConnect` helper and named collections (users, listings, products, agri-supply, etc.).
- **Authentication:** next-auth with Credentials provider plus Google and GitHub OAuth.
- **Weather Data:** OpenWeatherMap via `NEXT_PUBLIC_OPENWEATHER_API_KEY` (see `src/lib/weather.ts`).
- **AI Services:** Google Generative AI (Gemini 1.5 Flash) via `@google/generative-ai` for Q&A and image-based crop analysis.

### 4.3 Admin & Management (Conceptual / Roadmap)

- Content management for tutorials, marketplace listings, and resources.
- Expert approval workflows.
- User activity monitoring.
- Feedback collection and reporting.

---

## 5. Backend APIs (High-Level)

These are internal Next.js Route Handlers under `/api`. The frontend uses them to power dashboard, profile, market, and AI features:

- **Auth & Sessions** – `/api/auth/[...nextauth]`  
	Manages credential login, Google/GitHub OAuth, and session handling.

- **User Profile** – `/api/userDetails` (GET, PUT)  
	Fetches and updates user details (name, phone, village, district, land size, categories, etc.).

- **Profile Completeness** – `/api/isUserComplete` (GET)  
	Returns `{ isProfileComplete }` for a user based on their email.

- **Listings (Search & Create)** – `/api/listings` (GET, POST)  
	- GET: filter by price, categories, search text, location, sort options, pagination.  
	- POST: create new listings tied to the authenticated user.

- **My Listings** – `/api/myListing` (GET)  
	Returns only the current user’s listings with optional name search.

- **Products Catalog** – `/api/products` (GET, POST)  
	General product endpoints with category and sort options; POST assigns username/email and listed date.

- **Agri-Supply Market** – `/api/agri-supply` (GET, POST)  
	Stores and retrieves agricultural supply items.

- **AI Assistant (Gemini)** – `/api/gemini` (POST)  
	Accepts a `prompt` and optional `image` via `FormData`, calls Gemini 1.5 Flash, and returns advisory text.

---

## 6. Revenue Model (Conceptual)

- **Freemium Subscription** – Basic services free; advanced analytics and tools as premium.
- **Marketplace Commission** – Commission on sales concluded via the platform.
- **Advertisements** – Targeted agricultural product advertisements for relevant users.
- **Government/NGO Partnerships** – Grants or contracts to support outreach and training.

---

## 7. UI/UX Design Guide

- **Color Palette** – Earthy tones (green, brown, yellow) with high-contrast text.
- **Fonts** – Roboto or Open Sans, minimum 16px for accessibility.
- **Icons** – Simple, farming-related icons next to key menu items.
- **Navigation** – Clear menu structure, subtle hover effects, and a mobile-friendly hamburger menu.
- **Interactivity** – Smooth dropdowns on hover (desktop) or click (mobile) with light shadows for depth.

---

## 8. Dashboard Data Handling (Input & Storage)

- **Welcome Section**  
	- Data Input: Farmer’s name, farm summary.  
	- Storage: User profile collection in MongoDB.

- **Weather Updates**  
	- Data Input: Location from registration or current location; API calls to OpenWeatherMap.  
	- Storage: Cached weather data or on-demand fetch via weather utilities.

- **Crop Status**  
	- Data Input: Manual updates plus AI detection from image and prompt.  
	- Storage: Crop records linked to the farmer’s profile.

- **Task Manager**  
	- Data Input: Manual or auto-generated tasks.  
	- Storage: Task entries associated with user ID.

- **Market Snapshot**  
	- Data Input: External API data or aggregated reports from marketplace activity.  
	- Storage: Market price and trend collections.

- **Profit/Loss Tracker**  
	- Data Input: Manual entry of sales and expenses, or derived from marketplace transactions.  
	- Storage: Financial logs tied to user.

- **Quick Tools**  
	- Data Input: Form inputs, sensor readings, or image uploads.  
	- Storage: Tool-specific collections and logs.

---

## 9. Getting Started (Developer Setup)

### Prerequisites

- Node.js 18+ (recommended)
- A MongoDB instance (local or hosted)
- API keys for:
	- Google OAuth (client ID and secret)
	- GitHub OAuth (client ID and secret)
	- Google Generative AI (Gemini API key)
	- OpenWeatherMap (public weather API key)

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and configure at least:

- `MONGODB_URI` – MongoDB connection string.
- `NEXTAUTH_URL` – Base URL of the app (e.g. http://localhost:3000).
- `NEXTAUTH_SECRET` – Secret for NextAuth.
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` – Google OAuth credentials.
- `GITHUB_ID`, `GITHUB_SECRET` – GitHub OAuth credentials.
- `GOOGLE_API_KEY` – Gemini API key used by `/api/gemini`.
- `NEXT_PUBLIC_OPENWEATHER_API_KEY` – API key for OpenWeatherMap used in weather utilities.

Check `src/lib`, `src/app/api`, and configuration files if additional variables are introduced.

### Run in Development

```bash
npm run dev
```

### Build & Start in Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

The app will typically run at `http://localhost:3000` in development.




