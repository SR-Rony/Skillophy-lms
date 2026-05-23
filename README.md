# Skillophy

Enterprise-grade LMS frontend built with Next.js App Router, TypeScript, and a feature-based architecture.

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **Framer Motion** — animations
- **React Hook Form** + **Zod** — forms
- **Zustand** — client UI/auth state
- **TanStack Query** — server/async state
- **next-themes** — dark/light mode
- **Lucide React** — icons

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo login:** any email/password (mock auth returns the first mock user). Use `student@skillophy.com`, `teacher@skillophy.com`, or `admin@skillophy.com` to test role redirects after wiring role-specific mock responses.

## Architecture

See [`docs/`](docs/) for full documentation:

- [PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)
- [FRONTEND_STRUCTURE.md](docs/FRONTEND_STRUCTURE.md)
- [COMPONENT_GUIDE.md](docs/COMPONENT_GUIDE.md)
- [DASHBOARD_ARCHITECTURE.md](docs/DASHBOARD_ARCHITECTURE.md)
- [STATE_MANAGEMENT.md](docs/STATE_MANAGEMENT.md)
- [API_INTEGRATION_PLAN.md](docs/API_INTEGRATION_PLAN.md)
- [DEVELOPMENT_LOG.md](docs/DEVELOPMENT_LOG.md)

## Project structure (summary)

```
src/
├── app/           # Routes (route groups: public, auth, dashboard)
├── features/      # Feature modules (courses, payments, chat, …)
├── components/    # Shared UI (ui, dashboard, forms, …)
├── services/      # API layer (mock → real backend)
├── store/         # Zustand stores
├── hooks/         # Shared React hooks
├── providers/     # Root providers
└── docs/          # Architecture documentation
```

## Scripts

| Command        | Description          |
|----------------|----------------------|
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run lint` | ESLint               |
| `npm run typecheck` | TypeScript check |
