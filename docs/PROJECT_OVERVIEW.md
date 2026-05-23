# Skillophy — Project Overview

## Vision

Skillophy is an enterprise Learning Management System (LMS) frontend designed as a scalable SaaS product. This repository contains **frontend-only** architecture: UI, routing, state, and a service layer prepared for future backend integration.

## User roles

| Role    | Route prefix | Purpose                                      |
|---------|--------------|----------------------------------------------|
| Public  | `/`          | Marketing, course catalog, blog, pricing     |
| Guest   | `/login`     | Authentication flows                         |
| Student | `/student`   | Learning, assignments, certificates, chat    |
| Teacher | `/teacher`   | Course creation, students, analytics, live   |
| Admin   | `/admin`     | Users, payments, platform analytics, support |

## Core modules (frontend)

Courses · Video lessons · Quizzes · Assignments · Certificates · Payments · Transactions · Chat · Notifications · Live class · Wishlist · Support · Blog · Analytics · Timeline · User management · Settings · Profile

## Design principles

1. **Feature-based modules** — business logic lives in `src/features/`, not scattered in pages.
2. **Thin routes** — `app/` pages compose features and layouts only.
3. **Service abstraction** — all data access goes through `src/services/` with mock/real swap via env.
4. **Dual state model** — Zustand for client UI; TanStack Query for server data.
5. **Role-based dashboards** — shared `DashboardShell`, role-specific nav from config.

## Non-goals (current phase)

- Backend API implementation
- Database / Prisma
- Real payment processing
- WebSocket infrastructure (UI shells only)

## Environment

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_USE_MOCK_API=false` when connecting a real API.
