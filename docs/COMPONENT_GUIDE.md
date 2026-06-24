# Component Guide

> **Full module list:** [PROJECT_STATUS.md](PROJECT_STATUS.md)

## Layering

| Layer | Location | Responsibility |
|-------|----------|----------------|
| Primitives | `components/ui/` | shadcn/ui — Button, Input, Card, Dialog |
| Shared | `components/shared/` | Logo, PageHeader, EmptyState, ModulePlaceholder |
| Layouts | `components/layouts/` | PublicHeader, PublicFooter |
| Dashboard | `components/dashboard/` | DashboardShell, Sidebar, Header, StatCard |
| Forms | `components/forms/` | FormField, LoginForm, PasswordInput |
| Public | `components/public/` | Marketing page composites |
| Student | `components/student/` | Student-only UI |
| Teacher | `components/teacher/` | Teacher-only UI |
| Admin | `components/admin/` | Admin *-management modules |

**Rule:** Most feature UI lives in `components/{role}/`, not `features/`. The `features/` folder holds barrels; only `features/courses/` has real components.

---

## Admin `*-management` module structure

Standard pattern used across admin (Support, Report, Activity Log, Employee, etc.):

```
{name}-management/
├── index.ts                              # export page component
├── admin-{name}-management-page.tsx      # "use client" — state, handlers
├── admin-{name}-management-table.tsx       # data table
├── admin-{name}-management-toolbar.tsx     # search, filters, action buttons
├── admin-{name}-management-status-badge.tsx
├── admin-{name}-management.utils.ts        # filter, sort, paginate helpers
├── admin-{name}-detail-page.tsx            # optional detail view
└── admin-add-{name}-drawer.tsx             # optional create/edit drawer
```

### API-ready example: Support

| File | Role |
|------|------|
| `admin-support-management-page.tsx` | List + calls `adminSupportManagementService.createTicket()` |
| `admin-support-ticket-detail-page.tsx` | Chat + `resolveTicket()` + `sendTicketMessage()` |
| `admin-add-support-ticket-drawer.tsx` | Create form drawer |
| `admin-support-detail.utils.ts` | Href helpers, meta formatting |

### Large modules

| Module | Notes |
|--------|-------|
| `course-creation/` | 100+ files — wizard steps, curriculum drawers, meta info |
| `learner-profile/` | Tab subfolders: `profile-info/`, `live-courses/`, `recorded-courses/`, `more/` |
| `teacher-profile/` | Similar tab structure with course tables |

---

## Public page pattern

```
components/public/about/
├── about-page-content.tsx
├── about-page-hero.tsx
└── data/
    └── about.data.ts        # static marketing copy
```

Route stays thin:

```tsx
// app/(public)/about/page.tsx
export default function Page() {
  return <AboutPageContent />;
}
```

---

## shadcn/ui

```bash
npx shadcn@latest add dialog dropdown-menu tabs
```

Primitives in `components/ui/` — no business logic.

---

## Form system

1. Zod schema in `src/validations/`
2. `react-hook-form` + `zodResolver`
3. `FormField` for label + error display

Examples: `login-form.tsx`, support ticket drawer, employee add drawer.

---

## Drawers

Reusable drawer shell: `admin-course-creation-curriculum-drawer.tsx`

Used by: course curriculum, support ticket, category, promo, job opening, templates.

---

## Chat / messaging

| Role | Components |
|------|------------|
| Student | `student-messages/` — chat panel, thread, composer, bubble |
| Teacher | `teacher/messages/` — same pattern |
| Admin support detail | Reuses `StudentMessagesChatComposer` + custom thread |

---

## Responsive design

- Mobile-first Tailwind (`sm`, `md`, `lg`)
- Dashboard sidebar collapses; mobile drawer via `useUIStore`
- White card pattern: `rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]`

---

## Theming

- CSS variables in `app/globals.css`
- Brand primary: `--primary: #ff4747`
- Use semantic tokens: `bg-background`, `text-muted-foreground`

---

## Animation

```tsx
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations";
```

`MotionWrapper` for page fades. Variants in `src/animations/`.

---

## Accessibility

- Radix primitives (shadcn) for focus traps and ARIA
- `FormField` + `Label` on all inputs
- `aria-label` on icon-only buttons
