# Dashboard Architecture

> **Full route list & module status:** [PROJECT_STATUS.md](PROJECT_STATUS.md)

## Overview

All authenticated dashboards (student, teacher, admin) share one shell pattern with role-specific navigation.

```
┌─────────────────────────────────────────────────────────┐
│ DashboardHeader (title, badges, avatar)               │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │ Main content (pages)                       │
│ (nav)    │                                              │
└──────────┴──────────────────────────────────────────────┘
```

## Core components

| Component | File |
|-----------|------|
| `DashboardShell` | `components/dashboard/dashboard-shell.tsx` |
| `DashboardSidebar` | `components/dashboard/dashboard-sidebar.tsx` |
| `DashboardHeader` | `components/dashboard/dashboard-header.tsx` |
| `StatCard` | `components/dashboard/stat-card.tsx` |
| `AdminLayoutShell` | `components/admin/admin-layout-shell.tsx` |

## Navigation config

`config/navigation.config.ts`:

- `studentNav` — student sidebar
- `teacherNav` + `teacherFooterNav` — teacher sidebar + footer links
- `adminNav` + `adminFooterNav` — admin sidebar + settings/support footer

Each item: `title`, `href`, optional `iconName`, `badge`.

## Admin layout specifics

`app/(dashboard)/admin/layout.tsx`:
- Fetches `headerBadges` from `adminDashboardService.getDashboard()`
- Wraps children in `AdminLayoutShell`

`AdminLayoutShell`:
- Dynamic page title via `getAdminPageTitle(pathname)`
- `useUIStore().headerTitleOverride` for detail pages (e.g. `Ticket ID:#12345`)
- Back button on employee/learner profile routes
- Passes message/notification badge counts to header

## UI state (Zustand `useUIStore`)

| Field | Purpose |
|-------|---------|
| `sidebarCollapsed` | Desktop sidebar collapse |
| `mobileSidebarOpen` | Mobile drawer |
| `headerTitleOverride` | Dynamic header title on detail pages |

## Student routes (25 pages)

| Route | Feature |
|-------|---------|
| `/student` | Dashboard overview |
| `/student/courses` | My courses |
| `/student/courses/[slug]` | Course detail |
| `/student/courses/[slug]/lesson` | Lesson player |
| `/student/courses/[slug]/live` | Live class |
| `/student/courses/[slug]/quiz/*` | Quiz flow (play, result, answers, time-over) |
| `/student/courses/[slug]/assignment/*` | Assignment + feedback |
| `/student/courses/[slug]/resources` | Course resources |
| `/student/live` | Live classes list |
| `/student/assignments` | All assignments |
| `/student/certificates` | Certificates |
| `/student/chat` | Messages |
| `/student/payments` | Payment history |
| `/student/notifications` | Notifications |
| `/student/wishlist` | Wishlist |
| `/student/workshop` | Workshops |
| `/student/schedule` | Class schedule |
| `/student/settings` | Account settings |
| `/student/profile` | Profile |
| `/student/resources` | My resources |

## Teacher routes (14 pages)

| Route | Feature |
|-------|---------|
| `/teacher` | Dashboard |
| `/teacher/courses`, `/teacher/courses/[slug]` | Course management |
| `/teacher/courses/[slug]/live` | Live class |
| `/teacher/students` | Student list |
| `/teacher/analytics` | Analytics |
| `/teacher/live` | Live classes |
| `/teacher/schedule` | Schedule |
| `/teacher/resources` | Resources |
| `/teacher/chat` | Messages |
| `/teacher/payments` | Payments |
| `/teacher/workshop` | Workshop |
| `/teacher/settings` | Settings |
| `/teacher/support` | Support |

## Admin routes (33 pages)

### Implemented (27)

| Route | Module |
|-------|--------|
| `/admin` | Dashboard (stats, charts) |
| `/admin/users` | Employee management |
| `/admin/users/[employeeId]` | Employee / teacher profile |
| `/admin/users/learners` | Learner management |
| `/admin/users/learners/[learnerId]` | Learner profile |
| `/admin/courses` | Course management (recorded + live tabs) |
| `/admin/courses/create` | Recorded course creation wizard |
| `/admin/courses/create/live` | Live course creation wizard |
| `/admin/categories` | Categories |
| `/admin/promos` | Promo & discounts |
| `/admin/workshop` | Workshop list |
| `/admin/workshop/create` | Workshop creation |
| `/admin/transactions` | Transactions |
| `/admin/messages` | Messages (reuses teacher UI) |
| `/admin/job-opening` | Job openings |
| `/admin/query-form` | Query form (business + contact tabs) |
| `/admin/query-form/business/[queryId]` | Business query detail |
| `/admin/query-form/contact/[queryId]` | Contact query detail |
| `/admin/role-management` | Role list |
| `/admin/role-management/[roleId]/permissions` | Permissions matrix |
| `/admin/templates` | Email/SMS templates |
| `/admin/activity-log` | Activity log |
| `/admin/report` | Report list |
| `/admin/report/[reportId]` | Report detail |
| `/admin/support` | Support ticket list |
| `/admin/support/[ticketId]` | Support ticket detail + chat |
| `/admin/settings` | Account settings |

### Placeholders (6)

| Route | Notes |
|-------|-------|
| `/admin/analytics` | `ModulePlaceholder` |
| `/admin/blog` | `ModulePlaceholder` |
| `/admin/quiz` | `ModulePlaceholder` — in sidebar |
| `/admin/users/students` | Legacy placeholder |
| `/admin/users/teachers` | Legacy placeholder |
| `/admin/users/admins` | Legacy placeholder |

## Future enhancements

1. `loading.tsx` / `error.tsx` per admin segment
2. Breadcrumbs in `PageHeader`
3. Functional header notification/message dropdowns
4. `middleware.ts` role-based route guards
5. Course/workshop edit routes
