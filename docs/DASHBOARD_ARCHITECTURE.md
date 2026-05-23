# Dashboard Architecture

## Overview

All authenticated dashboards (student, teacher, admin) share one shell pattern with role-specific navigation.

```
┌─────────────────────────────────────────────────────────┐
│ DashboardHeader (menu, notifications, theme, avatar)  │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ Main content (pages)                       │
│ (nav)    │                                              │
│          │  PageHeader + feature content                │
└──────────┴──────────────────────────────────────────────┘
```

## Components

| Component          | File                                      |
|--------------------|-------------------------------------------|
| `DashboardShell`   | `components/dashboard/dashboard-shell.tsx` |
| `DashboardSidebar` | `components/dashboard/dashboard-sidebar.tsx` |
| `DashboardHeader`  | `components/dashboard/dashboard-header.tsx` |
| `StatCard`         | `components/dashboard/stat-card.tsx`       |

## Navigation config

Nav items live in `config/navigation.config.ts`:

- `studentNav`
- `teacherNav`
- `adminNav`

Each item: `title`, `href`, optional `icon`, `badge`.

## Layout wiring

```tsx
// app/(dashboard)/student/layout.tsx
<DashboardShell navItems={studentNav} roleLabel="Student">
  {children}
</DashboardShell>
```

## UI state (Zustand)

`useUIStore` manages:

- `sidebarCollapsed` — desktop collapse
- `mobileSidebarOpen` — drawer on mobile (extend with Sheet component)

## Future enhancements

1. **Breadcrumbs** — derive from route + `PageHeader`
2. **Command palette** — global search (cmdk)
3. **Role guard middleware** — `middleware.ts` + `permissions/`
4. **Notification dropdown** — connect `notificationService` + Query

## Dashboard routes

### Student
`/student`, `/student/courses`, `/student/live`, `/student/assignments`, `/student/certificates`, `/student/wishlist`, `/student/chat`, `/student/payments`, `/student/settings`, `/student/profile`

### Teacher
`/teacher`, `/teacher/courses`, `/teacher/live`, `/teacher/students`, `/teacher/analytics`, `/teacher/chat`, `/teacher/settings`

### Admin
`/admin`, `/admin/users`, `/admin/courses`, `/admin/payments`, `/admin/analytics`, `/admin/support`, `/admin/settings`

Each route should have `loading.tsx` and optional `error.tsx` as features mature.
