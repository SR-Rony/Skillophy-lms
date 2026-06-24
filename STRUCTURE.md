# Skillophy — Repository Structure

Quick reference. **Full overview:** [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md) · **Conventions:** [docs/FRONTEND_STRUCTURE.md](docs/FRONTEND_STRUCTURE.md)

```
Skillophy/
├── docs/                              # Architecture documentation
│   ├── PROJECT_STATUS.md              # ★ Full project overview (start here)
│   ├── PROJECT_OVERVIEW.md
│   ├── FRONTEND_STRUCTURE.md
│   ├── DASHBOARD_ARCHITECTURE.md
│   ├── COMPONENT_GUIDE.md
│   ├── STATE_MANAGEMENT.md
│   ├── API_INTEGRATION_PLAN.md
│   └── DEVELOPMENT_LOG.md
├── public/                            # Static assets
├── src/
│   ├── app/
│   │   ├── (public)/                  # Marketing: /, /courses, /blog, /cart…
│   │   ├── (auth)/                    # /login, /register, /forgot-password…
│   │   ├── (dashboard)/
│   │   │   ├── student/               # /student/* (25 pages)
│   │   │   ├── teacher/               # /teacher/* (14 pages)
│   │   │   └── admin/                 # /admin/* (33 pages)
│   │   ├── layout.tsx | loading.tsx | error.tsx | not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                        # shadcn primitives
│   │   ├── shared/                    # Logo, PageHeader, ModulePlaceholder
│   │   ├── layouts/                   # Public header/footer
│   │   ├── dashboard/                 # Shell, sidebar, header, StatCard
│   │   ├── forms/                     # RHF + Zod forms
│   │   ├── feedback/                  # Loading states
│   │   ├── public/                    # Marketing pages + colocated data/
│   │   ├── student/                   # Student composites (quiz, messages…)
│   │   ├── teacher/                   # Teacher composites
│   │   └── admin/                     # 21 admin *-management modules
│   ├── services/
│   │   ├── api-client.ts              # HTTP client
│   │   ├── admin/                     # 22 services + fetchAdminData helper
│   │   └── teacher/                   # Teacher services
│   ├── features/                      # Feature barrels (courses has components)
│   ├── store/                         # auth.store · ui.store
│   ├── hooks/                         # useCourses, useBlog, useMediaQuery
│   ├── providers/                     # AppProviders, QueryProvider
│   ├── config/                        # site, nav, env, query, dashboard
│   ├── constants/                     # ROUTES · queryKeys · ADMIN_API_ROUTES
│   ├── validations/                   # Zod schemas
│   ├── types/                         # Domain TypeScript types (~73 files)
│   ├── enums/                         # role, course, payment enums
│   ├── permissions/                   # Role route helpers
│   ├── data/mock/                     # Mock data + admin/teacher resolvers
│   ├── animations/                    # Framer Motion variants
│   ├── utils/
│   ├── middleware.ts                  # Auth guard (placeholder)
│   └── docs/                          # Index → /docs
├── .env.example
├── components.json                    # shadcn config
└── package.json
```

## Admin module locations (implemented)

| Module | Components | Service |
|--------|------------|---------|
| Dashboard | `admin/dashboard/` | `admin-dashboard.service.ts` |
| Employees | `employee-management/`, `employee-profile/` | `admin-employee-management.service.ts` |
| Learners | `learner-management/`, `learner-profile/` | `admin-learner-management.service.ts` |
| Courses | `course-management/`, `course-creation/` | `admin-course-*.service.ts` |
| Categories | `category-management/` | `admin-category-management.service.ts` |
| Promos | `promo-management/` | `admin-promo-management.service.ts` |
| Workshop | `workshop-management/`, `workshop-creation/` | `admin-workshop-*.service.ts` |
| Transactions | `transaction-management/` | `admin-transaction-management.service.ts` |
| Support | `support-management/` | `admin-support-management.service.ts` ★ API-ready |
| Report | `report-management/` | `admin-report-management.service.ts` |
| Activity Log | `activity-log-management/` | `admin-activity-log-management.service.ts` |
| Role Mgmt | `role-management/` | `admin-role-management.service.ts` |
| + 8 more | query-form, job-opening, templates, messages, settings… | see `services/admin/index.ts` |

★ Support = reference for API integration (`fetchAdminData` + `mutateAdminData` + `ADMIN_API_ROUTES`)

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Demo logins (mock)

| Email | Role |
|-------|------|
| `student@skillophy.com` | Student → `/student` |
| `teacher@skillophy.com` | Teacher → `/teacher` |
| `admin@skillophy.com` | Admin → `/admin` |

Any password works with mock auth.
