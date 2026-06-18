# Frontend Structure

## Directory map

```
src/
├── app/                    # Next.js App Router (routes only)
│   ├── (public)/           # Marketing site
│   ├── (auth)/             # Login, register, forgot password
│   ├── (dashboard)/        # Student, teacher, admin
│   ├── layout.tsx          # Root layout + providers
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── features/               # Feature modules (primary business logic)
│   ├── courses/
│   ├── lessons/
│   ├── quizzes/
│   ├── assignments/
│   ├── payments/
│   ├── chat/
│   └── …
│
├── components/             # Shared, reusable UI
│   ├── ui/                 # shadcn primitives
│   ├── shared/             # Logo, PageHeader, ThemeToggle
│   ├── layouts/            # Public header/footer
│   ├── forms/              # Form system (RHF + Zod)
│   ├── dashboard/          # Sidebar, shell, stat cards
│   ├── charts/             # Recharts wrappers (future)
│   ├── tables/             # Data tables (future)
│   ├── modals/             # Dialog patterns
│   ├── feedback/           # Loading, errors, toasts
│   ├── public/             # Marketing-specific
│   ├── student/            # Student-only composites
│   ├── teacher/
│   └── admin/
│
├── services/               # API client + domain services
├── store/                  # Zustand stores
├── hooks/                  # Shared hooks (often wrap Query)
├── providers/              # Theme, Query, future Auth
├── config/                 # Site, nav, dashboard, query defaults
├── constants/              # Routes, query keys
├── enums/
├── validations/            # Zod schemas
├── types/
├── data/mock/              # Mock data for development
├── utils/
├── animations/             # Framer Motion variants
├── permissions/            # Role-based access helpers
└── docs/                   # This documentation
```

## Route groups

Route groups `(public)`, `(auth)`, `(dashboard)` do **not** affect URLs. They organize layouts:

- `(public)/layout.tsx` — header + footer
- `(auth)/layout.tsx` — centered card
- `(dashboard)/student/layout.tsx` — `DashboardShell` + student nav

## Import aliases

`@/*` → `src/*` (configured in `tsconfig.json`).

## Adding a new feature

1. Create `src/features/<name>/` with `components/`, optional `hooks/`, `types/`.
2. Add service in `src/services/<name>.service.ts`.
3. Add query keys in `src/constants/query-keys.ts`.
4. Add route under appropriate `app/` segment.
5. Export public API from `features/<name>/index.ts`.

## Naming conventions

- **Files:** kebab-case (`course-card.tsx`)
- **Components:** PascalCase (`CourseCard`)
- **Hooks:** camelCase with `use` prefix (`useCourses`)
- **Services:** camelCase object (`courseService`)
