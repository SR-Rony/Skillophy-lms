# Skillophy — Project Status & Full Overview

> **Start here** if you are new to the codebase. This document explains what Skillophy is, what has been built, where everything lives, and what remains.

---

## What is Skillophy?

**Skillophy** is an enterprise **Learning Management System (LMS)** frontend — a SaaS-style platform for:

- **Students** — learn, take quizzes, submit assignments, get certificates
- **Teachers** — create courses, manage students, run live classes
- **Admins** — manage users, courses, payments, support, reports, and platform settings
- **Public visitors** — browse courses, blog, pricing, careers, contact

This repo is **frontend-only** (Next.js). All data currently comes from **mock services** in `src/data/mock/`. The service layer is designed so you can connect a real backend later via environment variables.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Forms | React Hook Form + Zod |
| Client state | Zustand (auth, UI) |
| Server/async state | TanStack Query |
| Icons | Lucide React |
| Animation | Framer Motion |

---

## High-level architecture

```
Browser
  └── app/ (routes — thin pages only)
        └── components/ (UI — role-specific + shared)
              └── services/ (data access)
                    ├── mock (default) → data/mock/
                    └── api (when env flag off) → apiClient → backend
```

**Key rules:**
1. Pages in `app/` only fetch data and render components — no heavy logic.
2. All data goes through `services/` — never fetch directly in components.
3. Route paths use `constants/routes.ts` — never hardcode URLs.
4. Admin modules follow the **triad pattern**: `types` + `mock` + `service` + `components/admin/*-management/`.

---

## Implementation status by area

### Public marketing site — **Built**

| Route | Status | Location |
|-------|--------|----------|
| `/` | Home | `components/public/` |
| `/courses`, `/courses/[slug]`, `/courses/category/[id]` | Catalog + detail | `components/public/all-courses/`, `course-details/` |
| `/blog`, `/blog/[slug]` | Blog list + post | `components/public/blog/` |
| `/teachers`, `/teachers/[slug]` | Teacher directory | `components/public/teachers/` |
| `/about`, `/contact`, `/business` | Info pages | `components/public/about/`, etc. |
| `/cart`, `/checkout` | Commerce UI | `components/public/cart/`, `checkout/` |
| `/career`, `/position/[jobId]` | Careers | `components/public/career/`, `position/` |
| `/affiliate` | Affiliate program | `components/public/affiliate/` |
| `/podcast`, `/help`, `/terms`, `/privacy` | Content pages | `components/public/` |
| `/verify-certificate` | Certificate lookup | `components/public/verify-certificate/` |
| `/support` | Public support | `app/(public)/support/` |

Static marketing copy often lives in `components/public/{page}/data/` (not in `data/mock/`).

---

### Authentication — **Partial**

| Route | Status |
|-------|--------|
| `/login` | Built (RHF + Zod + mock auth) |
| `/register` | UI built |
| `/forgot-password`, `/reset-password`, `/verify-otp` | UI built |
| `middleware.ts` | Placeholder — no real session guard yet |

Demo logins (any password):

| Email | Role |
|-------|------|
| `student@skillophy.com` | Student → `/student` |
| `teacher@skillophy.com` | Teacher → `/teacher` |
| `admin@skillophy.com` | Admin → `/admin` |

---

### Student dashboard — **Built (rich)**

| Area | Routes | Components |
|------|--------|------------|
| Overview | `/student` | `student-dashboard-page-hero` |
| Courses | `/student/courses`, `/student/courses/[slug]/*` | `course-details/`, `course-video/` |
| Live class | `/student/live`, course live routes | `live-video/` |
| Quiz flow | `/student/courses/[slug]/quiz/*` | `live-quiz/` (play, result, answers, time-over) |
| Assignments | `/student/courses/[slug]/assignment/*` | `live-assignment/` |
| Resources | `/student/resources`, course resources | `my-resources/`, `live-resources/` |
| Certificates | `/student/certificates` | `my-certificate/` |
| Chat | `/student/chat` | `student-messages/` |
| Payments | `/student/payments` | `payment-history/` |
| Notifications | `/student/notifications` | `notifications/` |
| Settings / Profile | `/student/settings`, `/student/profile` | `account-settings/` |
| Wishlist, Workshop, Schedule | respective routes | built |

---

### Teacher dashboard — **Built**

| Area | Routes | Components |
|------|--------|------------|
| Dashboard | `/teacher` | `teacher/dashboard/` |
| Courses | `/teacher/courses`, `[slug]`, live | `teacher/courses/`, `course-details/` |
| Students, Analytics | `/teacher/students`, `/teacher/analytics` | built |
| Live, Schedule, Resources | respective routes | `live-video/`, `class-schedule/`, `course-resources/` |
| Messages | `/teacher/chat` | `teacher/messages/` |
| Payments, Workshop, Settings, Support | respective routes | built |

---

### Admin dashboard — **Mostly built (27/33 routes)**

#### Fully implemented admin modules

| Module | List route | Detail / sub-routes | Service | Component folder |
|--------|------------|---------------------|---------|------------------|
| Dashboard | `/admin` | — | `adminDashboardService` | `admin/dashboard/` |
| Employee Mgmt | `/admin/users` | `/admin/users/[employeeId]` | `adminEmployeeManagementService` | `employee-management/`, `employee-profile/` |
| Learner Mgmt | `/admin/users/learners` | `/admin/users/learners/[learnerId]` | `adminLearnerManagementService` | `learner-management/`, `learner-profile/` |
| Teacher profile | — | via employee route | `adminTeacherProfileService` | `teacher-profile/` |
| Course Mgmt | `/admin/courses` | create: `/admin/courses/create`, `/create/live` | `adminCourseManagementService` | `course-management/` |
| Course Creation | create routes | multi-step wizard | `adminCourseCreationService` | `course-creation/` (largest module) |
| Categories | `/admin/categories` | — | `adminCategoryManagementService` | `category-management/` |
| Promos | `/admin/promos` | — | `adminPromoManagementService` | `promo-management/` |
| Workshop | `/admin/workshop` | `/admin/workshop/create` | `adminWorkshopManagementService` | `workshop-management/`, `workshop-creation/` |
| Transactions | `/admin/transactions` | — | `adminTransactionManagementService` | `transaction-management/` |
| Messages | `/admin/messages` | — | `adminMessagesService` | reuses `teacher/messages/` |
| Job Opening | `/admin/job-opening` | — | `adminJobOpeningManagementService` | `job-opening-management/` |
| Query Form | `/admin/query-form` | business + contact detail | `adminQueryFormManagementService` | `query-form-management/` |
| Role Mgmt | `/admin/role-management` | `/[roleId]/permissions` | `adminRoleManagementService` | `role-management/` |
| Templates | `/admin/templates` | — | `adminTemplateManagementService` | `template-management/` |
| Activity Log | `/admin/activity-log` | — | `adminActivityLogManagementService` | `activity-log-management/` |
| Report | `/admin/report` | `/admin/report/[reportId]` | `adminReportManagementService` | `report-management/` |
| Support | `/admin/support` | `/admin/support/[ticketId]` | `adminSupportManagementService` | `support-management/` |
| Account Settings | `/admin/settings` | — | `adminAccountSettingsService` | `account-settings/` |

#### Placeholder only (`ModulePlaceholder`)

| Route | Notes |
|-------|-------|
| `/admin/analytics` | Not in sidebar |
| `/admin/blog` | Not in sidebar |
| `/admin/quiz` | In sidebar, not built |
| `/admin/users/students` | Legacy — use Learner Management |
| `/admin/users/teachers` | Legacy — use Employee Management |
| `/admin/users/admins` | Legacy — use Employee Management |

---

## Admin module pattern (copy for new features)

Every admin CRUD feature follows this structure:

```
src/types/admin-{name}-management.types.ts
src/data/mock/admin-{name}-management.mock.ts
src/data/mock/admin-data.resolvers.ts          ← add resolveAdmin{Name}()
src/services/admin/admin-{name}-management.service.ts
src/components/admin/{name}-management/
  ├── index.ts
  ├── admin-{name}-management-page.tsx       ← client page (state, handlers)
  ├── admin-{name}-management-table.tsx
  ├── admin-{name}-management-toolbar.tsx
  ├── admin-{name}-management.utils.ts       ← filter, sort, paginate
  └── admin-{name}-detail-page.tsx           ← optional
src/app/(dashboard)/admin/{name}/page.tsx      ← thin server page
```

**Reference implementation (API-ready):** `support-management/` — includes read + write service methods.

---

## Service layer & API readiness

### Environment

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
NEXT_PUBLIC_USE_MOCK_API=true   # default — uses mocks
```

### Admin service pattern

```ts
// Read
fetchAdminData(() => mockResolver(), () => apiClient.get(...))

// Write (create, update, delete)
mutateAdminData(() => mockMutation(), () => apiClient.post(...))
```

| Service | Mock | API handler wired | Mutations |
|---------|------|-------------------|-----------|
| `adminSupportManagementService` | ✅ | ✅ (5 endpoints) | ✅ create, resolve, sendMessage |
| `adminDashboardService` | ✅ | ✅ (1 endpoint) | ❌ |
| All other admin services (20) | ✅ | ❌ | ❌ (client local state only) |

API path constants: `src/constants/admin-api-routes.ts`

When `NEXT_PUBLIC_USE_MOCK_API=false`:
- **Support module** → calls real API
- **Other admin modules** → throw `AdminApiNotImplementedError` until you add `api()` handlers

See [API_INTEGRATION_PLAN.md](API_INTEGRATION_PLAN.md) for migration steps.

---

## Folder structure (where to find things)

```
Skillophy/
├── docs/                    ← Architecture docs (start: PROJECT_STATUS.md)
├── public/                  ← Static assets (images, favicon)
├── src/
│   ├── app/
│   │   ├── (public)/        ← Marketing routes
│   │   ├── (auth)/          ← Login, register, OTP
│   │   └── (dashboard)/
│   │       ├── student/     ← 25 pages
│   │       ├── teacher/     ← 14 pages
│   │       └── admin/       ← 33 pages
│   ├── components/
│   │   ├── ui/              ← shadcn primitives
│   │   ├── shared/          ← Logo, PageHeader, ModulePlaceholder
│   │   ├── dashboard/       ← DashboardShell, Sidebar, Header
│   │   ├── public/          ← Marketing page composites
│   │   ├── student/         ← Student UI (messages, quiz, certificates…)
│   │   ├── teacher/         ← Teacher UI
│   │   └── admin/           ← 21 admin module folders
│   ├── services/
│   │   ├── api-client.ts    ← HTTP client (ready)
│   │   ├── admin/           ← 22 admin services + create-admin-service.ts
│   │   └── teacher/         ← Teacher services
│   ├── data/mock/           ← All mock data + resolvers
│   ├── types/               ← TypeScript contracts (73 files)
│   ├── config/              ← site, nav, env, query defaults
│   ├── constants/           ← ROUTES, queryKeys, ADMIN_API_ROUTES
│   ├── store/               ← auth.store, ui.store
│   ├── hooks/               ← useCourses, useMediaQuery, useBlog
│   ├── validations/         ← Zod schemas
│   ├── permissions/         ← Role route helpers
│   └── middleware.ts          ← Auth guard (placeholder)
├── STRUCTURE.md               ← Quick folder reference
└── README.md                  ← Quick start
```

---

## State management summary

| Data | Tool | Example |
|------|------|---------|
| Server/async data | TanStack Query | `useCourses()` |
| Auth snapshot | Zustand `useAuthStore` | persisted to localStorage |
| UI flags | Zustand `useUIStore` | sidebar, `headerTitleOverride` |
| Form state | React Hook Form | login, drawers |
| Table filters/pagination | React `useState` in page components | support list, activity log |

---

## What is NOT done yet

- Real backend API connection (except Support + Dashboard paths defined)
- `middleware.ts` session / role guards
- Mutation services for most admin modules (saves are local React state)
- Course/workshop **edit** routes (only create exists)
- Analytics, Blog, Quiz admin modules
- E2E tests
- Header notification/message dropdowns (display badges only)

---

## Documentation index

| Document | Purpose |
|----------|---------|
| **[PROJECT_STATUS.md](PROJECT_STATUS.md)** | **This file — full project overview** |
| [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) | Vision & design principles |
| [FRONTEND_STRUCTURE.md](FRONTEND_STRUCTURE.md) | Folder conventions & naming |
| [DASHBOARD_ARCHITECTURE.md](DASHBOARD_ARCHITECTURE.md) | Shell, nav, all dashboard routes |
| [COMPONENT_GUIDE.md](COMPONENT_GUIDE.md) | UI layers & forms |
| [STATE_MANAGEMENT.md](STATE_MANAGEMENT.md) | Zustand + TanStack Query |
| [API_INTEGRATION_PLAN.md](API_INTEGRATION_PLAN.md) | Mock → API migration |
| [DEVELOPMENT_LOG.md](DEVELOPMENT_LOG.md) | Changelog & roadmap |

---

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm run build       # Production build
```
