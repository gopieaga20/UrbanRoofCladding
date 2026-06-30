# Urban Roofing and Cladding Solutions — Codebase Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Directory Structure](#directory-structure)
4. [Routing](#routing)
5. [Pages](#pages)
6. [Components](#components)
7. [Styling & Theming](#styling--theming)
8. [State Management](#state-management)
9. [External Integrations](#external-integrations)
10. [Backend & Admin (Supabase)](#backend--admin-supabase)
11. [Configuration Files](#configuration-files)
12. [Build & Dev Scripts](#build--dev-scripts)
13. [Responsive Design](#responsive-design)
14. [Performance](#performance)

---

## Project Overview

A modern, responsive corporate website for **Urban Roofing and Cladding Solutions**, an Indian company (founded 2024) specializing in roofing materials, cladding panels, and professional installation services.

**Business contacts:**
- Phone: +91 9384818299
- Email: urbanroofingandcladding@gmail.com
- Offices: Tindivanam (Registered), Chennai (Sales)

The public site is mostly static; lead generation is driven by WhatsApp, phone, and email links. The **Projects** portfolio is backed by a Supabase (Postgres) table, managed through a hidden password-gated admin route (`/editprojects`). See [External Integrations](#external-integrations).

**GitHub:** https://github.com/gopieaga20/UrbanRoofCladding.git
**Deployment:** Vercel ([`vercel.json`](vercel.json) — SPA rewrite to `index.html`)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Library | React | 18.3.1 |
| Language | TypeScript | 5.5.3 |
| Build Tool | Vite + SWC | 5.4.1 |
| Styling | Tailwind CSS | 3.4.11 |
| Components | shadcn/ui + Radix UI | — |
| Routing | React Router DOM | 6.26.2 |
| Forms | React Hook Form + Zod | 7.53.0 / 3.23.8 |
| Server State | TanStack React Query | 5.56.2 |
| Icons | Lucide React | 0.462.0 |
| Carousel | Embla Carousel | 8.3.0 |
| Toasts | Sonner | 1.5.0 |
| Charts | Recharts | 2.12.7 |
| Theming | next-themes | 0.3.0 |
| CSS Processing | PostCSS + Autoprefixer | 8.4.47 |
| Backend / DB | Supabase (`@supabase/supabase-js`) | 2.108.2 |

---

## Directory Structure

```
UrbanRoofCladding/
├── public/                   # Static assets (images, favicon)
├── src/
│   ├── pages/
│   │   ├── Index.tsx         # Homepage
│   │   ├── About.tsx         # Company story, vision, mission
│   │   ├── Solutions.tsx     # 7 service categories
│   │   ├── Products.tsx      # 8 product types with specifications
│   │   ├── Applications.tsx  # Industry use cases
│   │   ├── Projects.tsx      # Portfolio with lightbox gallery
│   │   ├── Contact.tsx       # Contact info, map, business hours
│   │   ├── EditProjects.tsx  # Hidden admin route (/editprojects) — Supabase CRUD for projects
│   │   └── NotFound.tsx      # 404 page
│   ├── components/
│   │   ├── Header.tsx        # Sticky nav, mobile menu, contact bar
│   │   ├── Footer.tsx        # Company info, social links, locations
│   │   └── ui/               # 40+ shadcn/ui component primitives
│   ├── hooks/
│   │   ├── use-mobile.tsx    # Mobile breakpoint detection hook
│   │   └── use-toast.ts      # Toast notification hook
│   ├── lib/
│   │   ├── utils.ts          # cn() classname merge utility
│   │   └── supabase.ts       # Supabase client (env-configured)
│   ├── types/
│   │   └── project.ts        # Project / ProjectInsert types (Supabase row shape)
│   ├── App.tsx               # Root component — providers + routing
│   ├── main.tsx              # ReactDOM.createRoot entry point
│   ├── index.css             # Global styles and CSS variables
│   └── vite-env.d.ts         # Vite type declarations
├── index.html                # HTML shell with meta/OG tags
├── package.json
├── vite.config.ts
├── vercel.json                # Vercel SPA rewrite config
├── supabase_setup.sql         # Idempotent schema + RLS policies + seed data for `projects` table
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
└── components.json           # shadcn/ui configuration
```

---

## Routing

Defined in [`src/App.tsx`](src/App.tsx). The app wraps everything in `BrowserRouter`, `QueryClientProvider`, and `TooltipProvider`.

```
/              → Index.tsx        Homepage
/about         → About.tsx        About the company
/solutions     → Solutions.tsx    Service offerings
/products      → Products.tsx     Product catalog
/applications  → Applications.tsx Industry use cases
/projects      → Projects.tsx     Portfolio gallery
/contact       → Contact.tsx      Contact page
*              → NotFound.tsx     404 fallback
/editprojects  → EditProjects.tsx Hidden admin route (no Header/Footer shell)
```

Layout: `Header` renders above all routes; `Footer` renders below all routes — **except** `/editprojects`, which `AppShell` ([`src/App.tsx`](src/App.tsx)) renders standalone without the public layout.

---

## Pages

### [`Index.tsx`](src/pages/Index.tsx) — Homepage
- Hero section with gradient background and dual CTA buttons (WhatsApp / Call Now)
- "Our Expertise" image gallery showcasing work
- "Why Choose Us" — 8 benefit cards with Lucide icons
- Bottom CTA strip linking to Solutions and Contact

### [`About.tsx`](src/pages/About.tsx)
- Company founding story (2024)
- Vision and Mission cards
- Commitment to excellence statement

### [`Solutions.tsx`](src/pages/Solutions.tsx)
Seven service offerings in alternating left/right layout:
1. Metal Roofing Systems
2. Profiled Metal Panels
3. Composite Wall Cladding
4. Clean Room Panels
5. Cold Room / Cold Storage
6. Metal Fabrication
7. Roofing Accessories

### [`Products.tsx`](src/pages/Products.tsx)
Eight product categories displayed in a responsive grid with hover effects:
- Each card includes product image (lazy-loaded), name, and specification details
- "Contact Us" button per product links to WhatsApp

### [`Applications.tsx`](src/pages/Applications.tsx)
Industry applications grouped into four sections:
- **Buildings:** Residential, Commercial, Prefab, Industrial
- **Cold Storage:** Warehouses, Transportation
- **Clean Rooms & Labs:** Medical, Research
- **Other:** Infrastructure, Institutions, Agriculture, Soundproofing

### [`Projects.tsx`](src/pages/Projects.tsx)
Portfolio page, data fetched live from Supabase (`projects` table) on mount:
- Image gallery per project
- Lightbox modal with keyboard navigation (← →, Escape) and image counter
- Status badges: `Completed` / `Ongoing`

### [`EditProjects.tsx`](src/pages/EditProjects.tsx) — Hidden Admin Route (`/editprojects`)
- Client-side password gate (`VITE_ADMIN_PASSWORD` env var, compared in-browser; session flag stored in `sessionStorage`) — **not real auth**, see Security note below
- Full CRUD panel for the `projects` table: add, inline-edit, delete, with multi-image-URL form fields and toast notifications
- Renders standalone, outside the public `Header`/`Footer` shell

### [`Contact.tsx`](src/pages/Contact.tsx)
- Phone numbers with click-to-call links
- WhatsApp link with pre-filled message
- Email with social media links (Facebook, Instagram)
- Business hours table
- Two office address cards (Tindivanam + Chennai)
- Embedded Google Maps iframe

---

## Components

### [`Header.tsx`](src/components/Header.tsx)
- **Top bar:** Phone, email, Get Quote (WhatsApp), Call Now buttons
- **Main nav:** Logo + nav links + responsive hamburger menu
- Sticky positioning; active route highlighting via `useLocation()`
- Mobile menu rendered conditionally via `useState`

### [`Footer.tsx`](src/components/Footer.tsx)
- 3-column grid: company info | contact details | office locations
- Social links: Facebook, Instagram
- Copyright line

### `ui/` — shadcn/ui Components
Over 40 pre-built accessible components including `Button`, `Card`, `Badge`, `Dialog`, `Sheet`, `Carousel`, `Tooltip`, `Toast`, `Form`, `Input`, `Select`, etc. All styled with Tailwind CSS variables.

---

## Styling & Theming

**Tailwind CSS** with a CSS-variable based theming system defined in [`src/index.css`](src/index.css).

**Brand colors:**
- Primary cyan: `#11a9df`
- Accent orange: `#ff6b35`
- Neutral white/gray backgrounds

**Dark mode:** Supported via `next-themes` class strategy (toggled by adding `.dark` to `<html>`).

**Tailwind config** ([`tailwind.config.ts`](tailwind.config.ts)):
- Content paths include `src/**/*.{ts,tsx}`
- Custom sidebar and accordion animation utilities
- Container centered with `2rem` padding

---

## State Management

No global state library (no Redux, Zustand, etc.).

| Scope | Tool |
|---|---|
| Local component state | `useState` |
| URL / navigation state | React Router `useLocation` |
| Server/async data | TanStack React Query (configured, not yet used — Projects data fetching uses `useEffect` + Supabase client directly, not React Query) |
| Forms | React Hook Form + Zod validation |
| Toasts | `sonner` + built-in `use-toast` hook |
| Remote data (Projects) | Supabase client ([`src/lib/supabase.ts`](src/lib/supabase.ts)) — `projects` table, no caching layer |

---

## External Integrations

| Service | Usage |
|---|---|
| WhatsApp API | Quote requests — `https://wa.me/919384818299?text=...` |
| Phone links | Click-to-call — `tel:+919384818299` |
| Email links | `mailto:urbanroofingandcladding@gmail.com` |
| Google Maps | Embedded iframe on Contact page |
| Facebook | https://www.facebook.com/profile.php?id=61578285023663 |
| Instagram | https://www.instagram.com/urbanroofing_2024/ |
| Lovable.dev | Platform host; image uploads via lovable-uploads CDN |
| Unsplash CDN | Fallback placeholder images |
| Supabase | Postgres backend for the `projects` table — read on `/projects`, CRUD via `/editprojects` |

---

## Backend & Admin (Supabase)

The site is mostly static, but **project portfolio data lives in Supabase** rather than being hardcoded.

- **Client:** [`src/lib/supabase.ts`](src/lib/supabase.ts) — reads `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` from env (logs an error and falls back to a placeholder client if unset).
- **Schema:** [`supabase_setup.sql`](supabase_setup.sql) — idempotent script creating the `projects` table (`id`, `name`, `type`, `description`, `status`, `images text[]`, `created_at`), enabling RLS, and seeding the 3 original portfolio projects.
- **Types:** [`src/types/project.ts`](src/types/project.ts) — `Project` (full row) and `ProjectInsert` (omits `id`/`created_at`).
- **Public read:** [`Projects.tsx`](src/pages/Projects.tsx) fetches all rows on mount and renders the existing gallery/lightbox UI.
- **Admin write:** [`EditProjects.tsx`](src/pages/EditProjects.tsx) at `/editprojects` — real Supabase Auth login (email + password via `supabase.auth.signInWithPassword`), session managed by the Supabase client (not `sessionStorage`), with a Sign Out button.
- **RLS:** `public.projects` has two policies (see [`supabase_setup.sql`](supabase_setup.sql)) — `"Public read access"` (anyone, `select`) and `"Authenticated write access"` (`auth.role() = 'authenticated'`, all operations). Only a signed-in Supabase Auth user can insert/update/delete; the anon key alone cannot.
- **Provisioning an admin:** create the user in Supabase Dashboard → Authentication → Users → Add user (email + password); no app code or env var needed for credentials.

### Project image uploads (Supabase Storage)

Images are no longer pasted as URLs — `/editprojects` uploads files directly from the admin's device into Supabase Storage.

- **Bucket:** `project-images` (public bucket, created by [`supabase_setup.sql`](supabase_setup.sql)).
- **Upload flow:** [`EditProjects.tsx`](src/pages/EditProjects.tsx)'s `uploadProjectImage()` validates the file (must be an image, ≤5MB), uploads it to the bucket under a random UUID filename, then resolves its public URL via `supabase.storage.from('project-images').getPublicUrl()`. That URL is what's stored in `projects.images`.
- **Storage RLS:** public `select` on the bucket (so the public Projects page can load images), but `insert`/`update`/`delete` require `auth.role() = 'authenticated'` — same admin-only gate as the table.
- **Known limitation:** deleting a project or removing an image from the form does not delete the underlying file from Storage — it just drops the URL from `projects.images`, leaving an orphaned object in the bucket. Acceptable for now given low volume; revisit with a cleanup job/trigger if storage usage grows.

---

## Configuration Files

### [`vite.config.ts`](vite.config.ts)
- Dev server port: **8080**
- React SWC plugin for fast builds
- Lovable component tagger in dev mode
- Path alias: `@/` → `./src/`

### [`tsconfig.json`](tsconfig.json) / [`tsconfig.app.json`](tsconfig.app.json)
- `@/*` path alias
- `noImplicitAny: false`, `strictNullChecks: false` (relaxed checking)
- Allows `.js` files; skips library type checking

### [`components.json`](components.json)
- shadcn/ui default style
- CSS variable theming enabled
- Aliases: `@/components`, `@/lib/utils`, `@/hooks`

### [`eslint.config.js`](eslint.config.js)
- ESLint 9 flat config
- TypeScript-aware rules
- React Hooks and React Refresh plugins
- Unused vars/params warnings suppressed

### [`vercel.json`](vercel.json)
- SPA rewrite: all paths → `/index.html` (required for client-side routing on Vercel)

### Environment variables (`.env`, not committed — see `.gitignore`)
| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public API key |

Admin access for `/editprojects` is a real Supabase Auth user (created in the Supabase dashboard), not an env var — see [Backend & Admin](#backend--admin-supabase).

---

## Build & Dev Scripts

```bash
npm run dev          # Start Vite dev server at http://localhost:8080
npm run build        # Production build (outputs to dist/)
npm run build:dev    # Development-mode build
npm run lint         # Run ESLint across src/
npm run preview      # Serve the production build locally
```

---

## Responsive Design

Mobile-first with Tailwind breakpoints:

| Prefix | Min-width |
|---|---|
| _(default)_ | 0px (mobile) |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1400px |

Mobile navigation switches to a hamburger menu below `md` (768px). Grid layouts collapse from multi-column to single-column on smaller screens. The `use-mobile` hook (640px threshold) is available for JS-side breakpoint detection.

---

## Performance

- **Lazy image loading:** All product/project images use `loading="lazy"`
- **Cache busting:** `?t=${Date.now()}` appended to dynamic image URLs
- **Vite SWC:** Fast TypeScript/JSX compilation without Babel overhead
- **Route-based code splitting:** React Router enables automatic per-route chunks
- **Tailwind CSS purge:** Unused styles removed at build time
- **Recharts + Embla:** Loaded only on pages that use them (future use)
