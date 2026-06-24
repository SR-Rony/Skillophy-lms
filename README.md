# Skillophy

Enterprise-grade LMS frontend built with Next.js App Router, TypeScript, and a scalable service-layer architecture.

> **New to this project?** Read **[docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)** for a full overview of what is built, where everything lives, and API readiness.

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **Framer Motion** — animations
- **React Hook Form** + **Zod** — forms
- **Zustand** — client UI/auth state
- **TanStack Query** — server/async state
- **Lucide React** — icons

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo login** (any password):

| Email | Role |
|-------|------|
| `student@skillophy.com` | Student → `/student` |
| `teacher@skillophy.com` | Teacher → `/teacher` |
| `admin@skillophy.com` | Admin → `/admin` |

## What is built (summary)

| Area | Status |
|------|--------|
| Public marketing site | 25+ pages (courses, blog, cart, careers, affiliate…) |
| Auth flows | Login + register/forgot/OTP UI |
| Student dashboard | 25 pages (courses, quiz, assignment, chat, certificates…) |
| Teacher dashboard | 14 pages (courses, students, messages, live…) |
| Admin dashboard | 27 full modules + 6 placeholders (33 routes total) |
| API layer | Mock-first; **Support module** fully API-ready as reference |

Full details → [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)

## Documentation

| Document | Description |
|----------|-------------|
| **[PROJECT_STATUS.md](docs/PROJECT_STATUS.md)** | **Full project overview — start here** |
| [PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | Vision, roles, principles |
| [FRONTEND_STRUCTURE.md](docs/FRONTEND_STRUCTURE.md) | Folder structure & conventions |
| [DASHBOARD_ARCHITECTURE.md](docs/DASHBOARD_ARCHITECTURE.md) | Dashboard shell & all routes |
| [COMPONENT_GUIDE.md](docs/COMPONENT_GUIDE.md) | UI layering & admin modules |
| [STATE_MANAGEMENT.md](docs/STATE_MANAGEMENT.md) | Zustand + TanStack Query |
| [API_INTEGRATION_PLAN.md](docs/API_INTEGRATION_PLAN.md) | Mock → real backend migration |
| [DEVELOPMENT_LOG.md](docs/DEVELOPMENT_LOG.md) | Changelog & roadmap |
| [STRUCTURE.md](STRUCTURE.md) | Quick folder reference |

## Project structure

```
src/
├── app/           # Routes (public, auth, student, teacher, admin)
├── components/    # UI (ui, shared, dashboard, public, student, teacher, admin)
├── services/      # Data layer (mock-ready, apiClient)
├── data/mock/     # Mock data + resolvers
├── types/         # TypeScript contracts
├── config/        # Site, nav, env
├── constants/     # ROUTES, queryKeys, ADMIN_API_ROUTES
├── store/         # Zustand (auth, UI)
└── docs/          # In-repo doc index
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Environment

```env
NEXT_PUBLIC_USE_MOCK_API=true          # default — uses mock data
NEXT_PUBLIC_API_BASE_URL=...           # backend URL when ready
```

Set `NEXT_PUBLIC_USE_MOCK_API=false` to hit real APIs (Support module ready; other admin modules need `api()` handlers added per service).
