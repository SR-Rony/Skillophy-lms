# Frontend Structure

> **Full project map:** [PROJECT_STATUS.md](PROJECT_STATUS.md)

## Directory map

```
src/
├── app/                    # Next.js App Router (routes only — keep thin)
│   ├── (public)/           # 25 marketing pages
│   ├── (auth)/             # login, register, forgot-password, OTP
│   ├── (dashboard)/
│   │   ├── student/        # 25 pages
│   │   ├── teacher/        # 14 pages
│   │   └── admin/          # 33 pages
│   ├── layout.tsx | loading.tsx | error.tsx | not-found.tsx
│   └── globals.css
│
├── components/             # UI (primary location for feature UI)
│   ├── ui/                 # shadcn primitives — no business logic
│   ├── shared/             # Logo, PageHeader, ModulePlaceholder, EmptyState
│   ├── layouts/            # PublicHeader, PublicFooter
│   ├── forms/              # LoginForm, FormField, PasswordInput
│   ├── dashboard/          # DashboardShell, Sidebar, Header, StatCard
│   ├── feedback/           # PageLoading, LoadingSpinner
│   ├── public/             # Marketing composites + data/ subfolders
│   ├── student/            # Student-only (messages, quiz, certificates…)
│   ├── teacher/            # Teacher-only (messages, course-details…)
│   └── admin/              # 21 *-management modules
│
├── features/               # Feature barrels (courses has real components)
├── services/               # Data access layer
│   ├── api-client.ts
│   ├── admin/              # Admin services + create-admin-service.ts
│   ├── teacher/            # Teacher services
│   └── *.service.ts        # Shared/student services
├── store/                  # Zustand: auth.store, ui.store
├── hooks/                  # useCourses, useBlog, useMediaQuery
├── providers/              # AppProviders, QueryProvider
├── config/                 # env, site, navigation, query, dashboard
├── constants/              # ROUTES, queryKeys, ADMIN_API_ROUTES
├── enums/                  # role, course, payment
├── validations/            # Zod schemas
├── types/                  # ~73 domain type files
├── data/mock/              # Mock data + resolvers
├── permissions/            # canAccessRoute, roleRoutePrefixes
├── utils/                  # cn, sleep, format, string helpers
├── animations/             # Framer Motion variants
├── middleware.ts           # Auth guard (placeholder)
└── docs/                   # In-repo doc index
```

## Route groups

Route groups `(public)`, `(auth)`, `(dashboard)` do **not** affect URLs.

| Group | Layout | Example URLs |
|-------|--------|--------------|
| `(public)` | Header + footer | `/`, `/courses`, `/blog` |
| `(auth)` | Centered card | `/login`, `/register` |
| `(dashboard)/student` | `DashboardShell` | `/student/courses` |
| `(dashboard)/teacher` | `DashboardShell` | `/teacher/courses` |
| `(dashboard)/admin` | `AdminLayoutShell` | `/admin/support` |

## Admin module pattern (standard)

```
types/admin-{name}-management.types.ts
data/mock/admin-{name}-management.mock.ts
data/mock/admin-data.resolvers.ts           → resolveAdmin{Name}()
services/admin/admin-{name}-management.service.ts
components/admin/{name}-management/
  ├── index.ts
  ├── admin-{name}-management-page.tsx      # "use client" — state + handlers
  ├── admin-{name}-management-table.tsx
  ├── admin-{name}-management-toolbar.tsx
  ├── admin-{name}-management.utils.ts      # filter, sort, paginate
  └── admin-{name}-detail-page.tsx          # optional
app/(dashboard)/admin/{name}/page.tsx         # thin server component
```

**API-ready reference:** `support-management/` — uses `fetchAdminData` + `mutateAdminData`.

## Thin page pattern

```tsx
// app/(dashboard)/admin/support/page.tsx
import { AdminSupportManagementPage } from "@/components/admin/support-management";
import { adminSupportManagementService } from "@/services/admin";

export default async function Page() {
  const data = await adminSupportManagementService.getSupportTickets();
  return <AdminSupportManagementPage data={data} />;
}
```

## Naming conventions

| Kind | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `admin-support-management-page.tsx` |
| Components | PascalCase | `AdminSupportManagementPage` |
| Hooks | `use` prefix | `useCourses` |
| Services | camelCase object | `adminSupportManagementService` |
| Admin types | `admin-{domain}-management.types.ts` | `AdminSupportTicket` |
| Mock getters | `getAdmin{Name}()` | `getAdminSupportManagement()` |
| Resolvers | `resolveAdmin{Name}()` | `resolveAdminSupportManagement()` |

## Import alias

`@/*` → `src/*` (see `tsconfig.json`).

## Where to put new code

| Scenario | Location |
|----------|----------|
| New admin CRUD list | `components/admin/{name}-management/` + service triad |
| New student-only page | `components/student/` + `app/(dashboard)/student/` |
| New marketing page | `components/public/{page}/` + `app/(public)/` |
| Shared business logic | `features/{name}/` |
| New API path | `constants/admin-api-routes.ts` + service method |
| New route URL | `constants/routes.ts` + `config/navigation.config.ts` |

## Adding a new admin feature (checklist)

- [ ] `src/types/admin-{name}-management.types.ts`
- [ ] `src/data/mock/admin-{name}-management.mock.ts`
- [ ] Entry in `admin-data.resolvers.ts`
- [ ] `src/services/admin/admin-{name}-management.service.ts`
- [ ] Export in `services/admin/index.ts`
- [ ] `src/components/admin/{name}-management/`
- [ ] `src/app/(dashboard)/admin/{name}/page.tsx`
- [ ] `ROUTES.admin.*` in `constants/routes.ts`
- [ ] Nav item in `config/navigation.config.ts`
- [ ] Page title in `admin-layout-shell.tsx` if needed

Copy **Support module** as the API-ready template.
