# Skillophy — Project Overview

> **Full build status:** [PROJECT_STATUS.md](PROJECT_STATUS.md)

## Vision

Skillophy is an enterprise Learning Management System (LMS) frontend designed as a scalable SaaS product. This repository contains **frontend-only** architecture: UI, routing, state, and a service layer prepared for backend integration.

## User roles

| Role | Route prefix | Purpose |
|------|--------------|---------|
| Public | `/` | Marketing, course catalog, blog, pricing, careers |
| Guest | `/login` | Authentication flows |
| Student | `/student` | Learning, quizzes, assignments, certificates, chat |
| Teacher | `/teacher` | Course management, students, live classes, analytics |
| Admin | `/admin` | Users, courses, transactions, support, reports, settings |

## What has been built

### Public site
Full marketing site: courses catalog, blog, teachers, cart/checkout, careers, affiliate, help, legal pages, certificate verification.

### Student portal
Course learning flow with lesson player, live classes, quiz (play/result/answers), assignments with feedback, resources, certificates, chat, payments, notifications, wishlist, workshop.

### Teacher portal
Dashboard, course management, student list, analytics, live classes, schedule, resources, messages, payments, workshop, settings.

### Admin portal
27 implemented modules including user/learner management, course creation wizard (recorded + live), categories, promos, workshops, transactions, support tickets (with chat detail), reports, activity log, role permissions, templates, job openings, query forms, and account settings.

6 routes remain placeholders: analytics, blog, quiz, and legacy student/teacher/admin user lists.

## Design principles

1. **Thin routes** — `app/` pages compose features; logic lives in components and services.
2. **Service abstraction** — all data via `src/services/`; mock/real toggle via `NEXT_PUBLIC_USE_MOCK_API`.
3. **Admin triad pattern** — each admin domain: `types` + `mock` + `service` + `components/admin/*-management/`.
4. **Dual state model** — Zustand for client UI; TanStack Query for server/async data.
5. **Role-based dashboards** — shared `DashboardShell`, role nav from `config/navigation.config.ts`.
6. **Route constants** — all links use `constants/routes.ts`, never hardcoded paths.

## Non-goals (current phase)

- Backend API implementation (frontend service layer ready)
- Database / ORM
- Real payment processing
- WebSocket infrastructure (chat UI built with mock data)

## Environment

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_USE_MOCK_API` | `true` (default) = mocks; `false` = real API |
| `NEXT_PUBLIC_API_BASE_URL` | Backend base URL |

## Related docs

- [PROJECT_STATUS.md](PROJECT_STATUS.md) — complete feature list & folder map
- [API_INTEGRATION_PLAN.md](API_INTEGRATION_PLAN.md) — how to connect backend
- [DEVELOPMENT_LOG.md](DEVELOPMENT_LOG.md) — changelog
