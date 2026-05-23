# Skillophy — Repository structure

Quick reference. Full docs: [`docs/FRONTEND_STRUCTURE.md`](docs/FRONTEND_STRUCTURE.md).

```
Skillophy/
├── docs/                          # Architecture documentation
├── public/                        # Static assets
├── src/
│   ├── app/
│   │   ├── (public)/              # Marketing: /, /courses, /blog, …
│   │   ├── (auth)/                # /login, /register, /forgot-password
│   │   ├── (dashboard)/
│   │   │   ├── student/           # /student/*
│   │   │   ├── teacher/           # /teacher/*
│   │   │   └── admin/             # /admin/*
│   │   ├── layout.tsx
│   │   ├── loading.tsx | error.tsx | not-found.tsx
│   │   └── globals.css
│   ├── features/                  # Feature modules (courses, chat, …)
│   ├── components/
│   │   ├── ui/                    # shadcn primitives
│   │   ├── shared/                # Logo, PageHeader, ModulePlaceholder
│   │   ├── layouts/               # Public header/footer
│   │   ├── dashboard/             # Shell, sidebar, StatCard
│   │   ├── forms/                 # RHF + Zod forms
│   │   ├── feedback/              # Loading states
│   │   ├── public/                # Hero, CourseCard
│   │   ├── charts/ | tables/ | modals/   # Reserved
│   │   └── student/ | teacher/ | admin/  # Role composites
│   ├── services/                  # api-client + domain services (mock-ready)
│   ├── store/                     # Zustand: auth, UI
│   ├── hooks/                     # useCourses, useMediaQuery
│   ├── providers/                 # Theme + React Query
│   ├── config/                    # Site, nav, dashboard, query defaults
│   ├── constants/                 # ROUTES, queryKeys
│   ├── validations/               # Zod schemas
│   ├── types/ | enums/ | permissions/
│   ├── data/mock/                 # Mock API data
│   ├── animations/                # Framer Motion variants
│   ├── utils/
│   ├── middleware.ts              # Auth guard (placeholder)
│   └── docs/                      # Index → /docs
├── .env.example
├── components.json                # shadcn config
└── package.json
```

## Run

```bash
npm install
cp .env.example .env.local   # if needed
npm run dev
```

## Demo logins (mock)

| Email | Role |
|-------|------|
| `student@skillophy.com` | Student → `/student` |
| `teacher@skillophy.com` | Teacher → `/teacher` |
| `admin@skillophy.com` | Admin → `/admin` |

Any password works with mock auth.
