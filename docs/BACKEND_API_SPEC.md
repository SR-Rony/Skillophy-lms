# Skillophy — Backend API Specification (A → Z)

> **Purpose:** A complete blueprint for building the Skillophy backend so the existing frontend can plug in feature-by-feature with zero guesswork.
>
> **Read first:** [PROJECT_STATUS.md](PROJECT_STATUS.md) (what the frontend already has) and [API_INTEGRATION_PLAN.md](API_INTEGRATION_PLAN.md) (how the frontend calls APIs).

---

## Table of contents

1. [How the frontend connects](#1-how-the-frontend-connects)
2. [Recommended backend stack](#2-recommended-backend-stack)
3. [Clean backend folder structure](#3-clean-backend-folder-structure)
4. [Global conventions](#4-global-conventions)
5. [Database models (entities)](#5-database-models-entities)
6. [Auth API](#6-auth-api)
7. [Public API](#7-public-api)
8. [Student API](#8-student-api)
9. [Teacher API](#9-teacher-api)
10. [Admin API](#10-admin-api)
11. [Endpoint count summary](#11-endpoint-count-summary)
12. [Build order (phases)](#12-build-order-phases)

---

## 1. How the frontend connects

The frontend already has a **service layer** that switches between mock data and a real API.

```
Component → service (services/) → apiClient → BACKEND (this spec)
```

- Toggle: `NEXT_PUBLIC_USE_MOCK_API=false`
- Base URL: `NEXT_PUBLIC_API_BASE_URL` (e.g. `https://api.skillophy.com`)
- Admin path constants live in `src/constants/admin-api-routes.ts`
- Reference frontend service (already API-ready): `admin-support-management.service.ts`

**The backend only needs to match the endpoints + response shape below.** No frontend rewrite needed.

---

## 2. Recommended backend stack

Pick one — all map cleanly to this spec:

| Option | Stack |
|--------|-------|
| **Node (recommended)** | NestJS + PostgreSQL + Prisma + JWT |
| Node (lightweight) | Express + PostgreSQL + Prisma/Drizzle + JWT |
| Other | Laravel (PHP), Django REST (Python), Spring Boot (Java) |

This doc assumes **REST + JSON + JWT**. Suggested extras: Redis (cache/sessions), S3-compatible storage (uploads), Stripe (payments), WebSocket/Socket.IO (chat + live).

---

## 3. Clean backend folder structure

A **feature-module** structure that mirrors the frontend (NestJS example — adapt names for other frameworks):

```
backend/
├── src/
│   ├── main.ts                     # Bootstrap
│   ├── app.module.ts               # Root module
│   │
│   ├── common/                     # Cross-cutting
│   │   ├── guards/                 # JwtAuthGuard, RolesGuard
│   │   ├── decorators/             # @Roles(), @CurrentUser()
│   │   ├── interceptors/           # Response wrapper, logging
│   │   ├── filters/                # Global exception filter
│   │   ├── pipes/                  # Validation
│   │   ├── dto/                    # Shared DTOs (pagination, etc.)
│   │   └── utils/                  # Helpers
│   │
│   ├── config/                     # env, database, jwt, storage config
│   │
│   ├── database/
│   │   ├── prisma/                 # schema.prisma + migrations
│   │   └── seeds/                  # Seed data (mirror frontend mocks)
│   │
│   └── modules/                    # ★ One folder per feature
│       ├── auth/                   # login, register, session, oauth
│       ├── users/                  # profile, account settings
│       ├── courses/                # catalog + CRUD
│       ├── lessons/
│       ├── quizzes/
│       ├── assignments/
│       ├── certificates/
│       ├── resources/
│       ├── live-classes/
│       ├── workshops/
│       ├── categories/
│       ├── enrollments/
│       ├── cart/
│       ├── payments/               # transactions, checkout
│       ├── promos/
│       ├── messages/               # chat
│       ├── notifications/
│       ├── support/                # tickets
│       ├── reports/
│       ├── reviews/
│       ├── blog/
│       ├── job-openings/           # careers
│       ├── query-forms/            # business + contact
│       ├── activity-log/
│       ├── roles/                  # role + permissions (RBAC)
│       ├── templates/              # email/SMS templates
│       ├── analytics/              # dashboards
│       └── teachers/               # public teacher profiles
│
├── .env.example
├── package.json
└── README.md
```

### Anatomy of one module (standard)

```
modules/support/
├── support.module.ts          # Wiring
├── support.controller.ts      # Routes (GET/POST/PATCH/DELETE)
├── support.service.ts         # Business logic
├── support.repository.ts      # DB access (or Prisma in service)
├── dto/
│   ├── create-ticket.dto.ts   # POST body validation
│   ├── update-ticket.dto.ts   # PATCH body validation
│   └── query-ticket.dto.ts    # Query params (filter, sort, page)
└── entities/
    └── ticket.entity.ts       # Response shape
```

**Rule:** Each module = controller (routes) + service (logic) + dto (validation) + entity (shape). Nothing leaks between modules except through services.

---

## 4. Global conventions

### Base URL

```
https://api.skillophy.com/api/v1
```

### Standard response envelope

```jsonc
// Success
{
  "success": true,
  "data": { /* resource or list */ },
  "message": "OK"
}

// Paginated list
{
  "success": true,
  "data": [ /* items */ ],
  "meta": { "page": 1, "pageSize": 10, "total": 96, "totalPages": 10 }
}

// Error
{
  "success": false,
  "message": "Ticket not found",
  "code": "TICKET_NOT_FOUND",
  "errors": [ { "field": "subject", "message": "Required" } ]
}
```

> The frontend `apiClient` reads `response.data`. Keep the `data` key consistent.

### HTTP methods

| Method | Use |
|--------|-----|
| `GET` | Read (list or single) |
| `POST` | Create / actions (login, submit) |
| `PUT` | Full replace |
| `PATCH` | Partial update (status, fields) |
| `DELETE` | Remove |

### Auth

- `Authorization: Bearer <accessToken>` header on all protected routes
- JWT access token (short-lived) + refresh token (httpOnly cookie recommended)
- Role claim in token: `student | teacher | admin`

### Common query params (list endpoints)

```
?page=1&pageSize=10&search=term&sort=newest&status=open&priority=high
```

### Status codes

`200` OK · `201` Created · `204` No Content · `400` Validation · `401` Unauthorized · `403` Forbidden · `404` Not Found · `409` Conflict · `500` Server Error

---

## 5. Database models (entities)

Core tables (derive columns from `src/types/*.ts`):

| Entity | Key fields | Source type file |
|--------|-----------|------------------|
| `User` | id, name, email, mobile, role, avatar, status, createdAt | `user.types.ts` |
| `Profile` | userId, bio, phone, country, socials, jobExperience | `admin-*-profile.types.ts` |
| `Course` | id, slug, title, type(recorded/live), price, categoryId, teacherId, status | `course.types.ts`, `admin-course-*.types.ts` |
| `Category` | id, name, slug, icon, courseCount | `admin-category-management.types.ts` |
| `Lesson` | id, courseId, title, videoUrl, duration, order | `admin-course-creation.types.ts` |
| `Quiz` | id, courseId, title, questions[], duration | `student-live-quiz.types.ts` |
| `QuizAttempt` | id, quizId, studentId, answers, score, submittedAt | `student-live-quiz.types.ts` |
| `Assignment` | id, courseId, title, dueDate, instructions | `student-live-assignment.types.ts` |
| `Submission` | id, assignmentId, studentId, fileUrl, grade, feedback | `student-live-assignment.types.ts` |
| `Resource` | id, courseId, title, fileUrl, type | `student-resources.types.ts` |
| `Certificate` | id, courseId, studentId, code, issuedAt | `student-certificate.types.ts`, `verify-certificate.types.ts` |
| `LiveClass` | id, courseId, title, startsAt, joinUrl | `student-live-video.types.ts` |
| `Workshop` | id, title, schedule, price, status | `admin-workshop-*.types.ts` |
| `Enrollment` | id, courseId, studentId, progress, enrolledAt | `student-course.types.ts` |
| `CartItem` | id, userId, courseId | (cart UI) |
| `Transaction` | id, userId, courseId, amount, method, status, createdAt | `admin-transaction-management.types.ts` |
| `Promo` | id, code, discount, type, validTill, status | `admin-promo-management.types.ts` |
| `Message` | id, threadId, senderId, content, sentAt | `student-messages.types.ts` |
| `Notification` | id, userId, type, title, read, createdAt | `student-notifications.types.ts` |
| `SupportTicket` | id, ticketNumber, subject, priority, status, createdBy, thread[] | `admin-support-management.types.ts` |
| `Report` | id, lessonName, reporterId, tags, status, resolvedBy | `admin-report-management.types.ts` |
| `BlogPost` | id, slug, title, body, author, publishedAt | `blog.types.ts`, `blog-detail.types.ts` |
| `JobOpening` | id, title, department, type, location, status | `admin-job-opening-management.types.ts` |
| `QueryForm` | id, type(business/contact), name, email, message, status | `admin-query-form-management.types.ts` |
| `ActivityLog` | id, actorId, action, entityType, createdAt | `admin-activity-log.types.ts` |
| `Role` | id, name, permissions[] | `admin-role-management.types.ts` |
| `Template` | id, name, type, subject, body | `admin-template-management.types.ts` |

---

## 6. Auth API

`modules/auth/`

| Method | Endpoint | Description | Role |
|--------|----------|-------------|------|
| POST | `/auth/register` | Create account | Public |
| POST | `/auth/login` | Login (mobile/email + password) | Public |
| POST | `/auth/logout` | Invalidate session | Auth |
| GET | `/auth/session` | Current user from token | Auth |
| POST | `/auth/refresh` | New access token | Auth |
| POST | `/auth/oauth/:provider` | Google/Facebook login | Public |
| POST | `/auth/verify-otp` | Verify OTP | Public |
| POST | `/auth/forgot-password` | Send reset link/OTP | Public |
| POST | `/auth/reset-password` | Set new password | Public |

Frontend: `auth.service.ts`

---

## 7. Public API

No auth required. `modules/courses`, `blog`, `teachers`, `categories`, `query-forms`, `job-openings`.

### Courses (catalog)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/courses` | List/search courses (filter, sort, page) |
| GET | `/courses/:slug` | Course detail |
| GET | `/courses/category/:categoryId` | Courses by category |
| GET | `/categories` | All categories |

### Teachers (public)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/teachers` | Teacher directory |
| GET | `/teachers/:slug` | Public teacher profile |

### Blog / Podcast

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blog` | Blog list (paginated) |
| GET | `/blog/:slug` | Blog post detail |
| GET | `/podcast` | Podcast episodes |
| GET | `/podcast/:slug` | Episode detail |

### Careers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jobs` | Open positions |
| GET | `/jobs/:jobId` | Job detail |
| POST | `/jobs/:jobId/apply` | Submit application |

### Forms & misc

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/query-forms/contact` | Contact form submit |
| POST | `/query-forms/business` | Business inquiry submit |
| POST | `/newsletter` | Newsletter signup |
| GET | `/certificates/verify/:code` | Verify a certificate |
| GET | `/help` / `/help/:slug` | Help center articles |

Frontend: `course.service.ts`, `blog.service.ts`

---

## 8. Student API

All require `role=student`. Prefix `/student`.

### Dashboard & profile

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/dashboard` | Overview stats |
| GET | `/student/profile` | Profile |
| PATCH | `/student/profile` | Update profile |
| GET | `/student/settings` | Account settings |
| PATCH | `/student/settings` | Update settings |
| PATCH | `/student/settings/password` | Change password |
| DELETE | `/student/account` | Deactivate/delete account |

### My courses & learning

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/courses` | Enrolled courses |
| GET | `/student/courses/:slug` | Course detail (progress) |
| GET | `/student/courses/:slug/lessons/:lessonId` | Lesson content |
| PATCH | `/student/courses/:slug/lessons/:lessonId/progress` | Mark progress |
| GET | `/student/courses/:slug/live/:lessonId` | Live class info |
| GET | `/student/courses/:slug/resources` | Course resources |

### Quizzes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/courses/:slug/quizzes/:quizId` | Quiz session info |
| GET | `/student/courses/:slug/quizzes/:quizId/play` | Quiz questions |
| POST | `/student/courses/:slug/quizzes/:quizId/submit` | Submit answers |
| GET | `/student/courses/:slug/quizzes/:quizId/result` | Result |
| GET | `/student/courses/:slug/quizzes/:quizId/answers` | Answer review |

### Assignments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/assignments` | All assignments |
| GET | `/student/courses/:slug/assignments/:id` | Assignment detail |
| POST | `/student/courses/:slug/assignments/:id/submit` | Submit work |
| GET | `/student/courses/:slug/assignments/:id/feedback` | View feedback |

### Other student resources

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/certificates` | My certificates |
| GET | `/student/certificates/:id/download` | Download certificate |
| GET | `/student/resources` | My resources |
| GET | `/student/schedule` | Class schedule |
| GET | `/student/live` | Upcoming live classes |
| GET | `/student/workshop` | My workshops |

### Wishlist & cart & payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/wishlist` | Wishlist |
| POST | `/student/wishlist` | Add course |
| DELETE | `/student/wishlist/:courseId` | Remove |
| GET | `/cart` | Cart items |
| POST | `/cart` | Add to cart |
| DELETE | `/cart/:courseId` | Remove from cart |
| POST | `/checkout` | Create order / payment intent |
| POST | `/checkout/apply-promo` | Apply promo code |
| GET | `/student/payments` | Payment history |

### Messages & notifications

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/student/messages` | Conversation list |
| GET | `/student/messages/:threadId` | Thread messages |
| POST | `/student/messages/:threadId` | Send message |
| GET | `/student/notifications` | Notifications |
| PATCH | `/student/notifications/:id/read` | Mark read |
| PATCH | `/student/notifications/read-all` | Mark all read |

Frontend: `student-*.service.ts`

---

## 9. Teacher API

All require `role=teacher`. Prefix `/teacher`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/teacher/dashboard` | Overview stats |
| GET | `/teacher/courses` | My courses |
| GET | `/teacher/courses/:slug` | Course detail (tabs) |
| POST | `/teacher/courses` | Create course |
| PATCH | `/teacher/courses/:slug` | Update course |
| DELETE | `/teacher/courses/:slug` | Delete course |
| GET | `/teacher/courses/:slug/students` | Enrolled students |
| GET | `/teacher/courses/:slug/live/:lessonId` | Live class |
| GET | `/teacher/students` | All students |
| GET | `/teacher/analytics` | Analytics |
| GET | `/teacher/schedule` | Class schedule |
| POST | `/teacher/schedule` | Add schedule slot |
| GET | `/teacher/resources` | Course resources |
| POST | `/teacher/resources` | Upload resource |
| DELETE | `/teacher/resources/:id` | Delete resource |
| GET | `/teacher/messages` | Conversations |
| GET | `/teacher/messages/:threadId` | Thread |
| POST | `/teacher/messages/:threadId` | Send message |
| GET | `/teacher/payments` | Payment history |
| GET | `/teacher/workshop` | Workshops |
| GET | `/teacher/settings` | Settings |
| PATCH | `/teacher/settings` | Update settings |

Frontend: `teacher/*.service.ts`

---

## 10. Admin API

All require `role=admin`. Prefix `/admin`. **Reference module (already wired on frontend): Support.**

### Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/dashboard` | Stats, charts, header badges |

### User management (employees, learners, teachers, admins)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/employees` | Employee list |
| GET | `/admin/employees/:id` | Employee/teacher profile |
| POST | `/admin/employees` | Add employee |
| PATCH | `/admin/employees/:id` | Update employee |
| DELETE | `/admin/employees/:id` | Delete employee |
| GET | `/admin/learners` | Learner list |
| GET | `/admin/learners/:id` | Learner profile |
| PATCH | `/admin/learners/:id` | Update / suspend |
| DELETE | `/admin/learners/:id` | Delete learner |

### Course management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/courses` | All courses (recorded + live) |
| GET | `/admin/courses/:id` | Course detail |
| POST | `/admin/courses` | Create recorded course |
| POST | `/admin/courses/live` | Create live course |
| PATCH | `/admin/courses/:id` | Update / publish |
| DELETE | `/admin/courses/:id` | Delete course |
| POST | `/admin/courses/:id/lessons` | Add lesson |
| PATCH | `/admin/courses/:id/lessons/:lessonId` | Update lesson |
| DELETE | `/admin/courses/:id/lessons/:lessonId` | Delete lesson |
| POST | `/admin/courses/:id/quizzes` | Add quiz |
| POST | `/admin/courses/:id/assignments` | Add assignment |
| POST | `/admin/courses/:id/resources` | Add resource |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/categories` | List |
| POST | `/admin/categories` | Create |
| PATCH | `/admin/categories/:id` | Update |
| DELETE | `/admin/categories/:id` | Delete |

### Promos & discounts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/promos` | List |
| POST | `/admin/promos` | Create |
| PATCH | `/admin/promos/:id` | Update |
| DELETE | `/admin/promos/:id` | Delete |

### Workshops

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/workshops` | List |
| GET | `/admin/workshops/:id` | Detail |
| POST | `/admin/workshops` | Create |
| PATCH | `/admin/workshops/:id` | Update |
| DELETE | `/admin/workshops/:id` | Delete |

### Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/transactions` | List (filter, export) |
| GET | `/admin/transactions/:id` | Detail |
| GET | `/admin/transactions/export` | CSV export |

### Support (★ reference — fully wired on frontend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/support/tickets` | Ticket list |
| GET | `/admin/support/tickets/:id` | Ticket detail + thread |
| POST | `/admin/support/tickets` | Create ticket |
| PATCH | `/admin/support/tickets/:id/resolve` | Mark resolved |
| POST | `/admin/support/tickets/:id/messages` | Send reply |

### Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/reports` | Report list |
| GET | `/admin/reports/:id` | Report detail |
| PATCH | `/admin/reports/:id/resolve` | Resolve report |
| PATCH | `/admin/reports/resolve-bulk` | Bulk resolve |

### Job openings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/jobs` | List |
| POST | `/admin/jobs` | Create |
| PATCH | `/admin/jobs/:id` | Update |
| DELETE | `/admin/jobs/:id` | Delete |

### Query forms

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/query-forms` | List (business + contact) |
| GET | `/admin/query-forms/business/:id` | Business detail |
| GET | `/admin/query-forms/contact/:id` | Contact detail |
| PATCH | `/admin/query-forms/:id` | Update status |
| DELETE | `/admin/query-forms/:id` | Delete |

### Role management (RBAC)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/roles` | Role list |
| GET | `/admin/roles/:id/permissions` | Role permissions |
| POST | `/admin/roles` | Create role |
| PATCH | `/admin/roles/:id` | Update role |
| PUT | `/admin/roles/:id/permissions` | Set permissions |
| DELETE | `/admin/roles/:id` | Delete role |

### Templates

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/templates` | List |
| POST | `/admin/templates` | Create |
| PATCH | `/admin/templates/:id` | Update |
| DELETE | `/admin/templates/:id` | Delete |

### Activity log

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/activity-log` | Log entries (filter, date range) |

### Blog (admin CMS)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/blog` | All posts |
| POST | `/admin/blog` | Create post |
| PATCH | `/admin/blog/:id` | Update post |
| DELETE | `/admin/blog/:id` | Delete post |

### Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/analytics` | Platform analytics |
| GET | `/admin/analytics/revenue` | Revenue breakdown |
| GET | `/admin/analytics/enrollments` | Enrollment trends |

### Messages & settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/messages` | Conversations |
| GET | `/admin/messages/:threadId` | Thread |
| POST | `/admin/messages/:threadId` | Send |
| GET | `/admin/settings` | Account settings |
| PATCH | `/admin/settings` | Update settings |

Frontend: `admin/*.service.ts`, paths in `constants/admin-api-routes.ts`

---

## 11. Endpoint count summary

| Area | GET | POST | PATCH/PUT | DELETE | Total |
|------|----:|----:|----------:|-------:|------:|
| Auth | 1 | 7 | 0 | 0 | 8 |
| Public | 13 | 4 | 0 | 0 | 17 |
| Student | 22 | 9 | 8 | 3 | 42 |
| Teacher | 13 | 5 | 3 | 2 | 23 |
| Admin | 35 | 18 | 18 | 12 | 83 |
| **Total** | **84** | **43** | **29** | **17** | **≈173** |

> Counts are a planning estimate; exact totals shift as you split or merge endpoints. Build per phase, not all at once.

---

## 12. Build order (phases)

Build backend in this order — each phase unlocks frontend features without breaking others.

### Phase 0 — Foundation
- [ ] Project setup, env, database connection
- [ ] Prisma schema for `User`, `Role`, `Category`, `Course`
- [ ] Response envelope interceptor + global error filter
- [ ] JWT auth guard + roles guard
- [ ] Seed data (mirror `src/data/mock/`)

### Phase 1 — Auth
- [ ] `/auth/*` endpoints
- [ ] Frontend: set `NEXT_PUBLIC_USE_MOCK_API=false`, test login per role

### Phase 2 — Admin Support (reference)
- [ ] `/admin/support/*` (5 endpoints) — frontend already wired
- [ ] Verify create / resolve / message flows end-to-end

### Phase 3 — Public catalog
- [ ] `/courses`, `/categories`, `/teachers`, `/blog`

### Phase 4 — Admin core
- [ ] Employees, learners, courses, categories, promos, transactions
- [ ] Reports, activity log, roles, templates

### Phase 5 — Student learning
- [ ] Enrolled courses, lessons, progress
- [ ] Quizzes, assignments, certificates

### Phase 6 — Teacher
- [ ] Courses CRUD, students, resources, schedule

### Phase 7 — Commerce & comms
- [ ] Cart, checkout, payments (Stripe)
- [ ] Messages (WebSocket), notifications

### Phase 8 — Remaining admin
- [ ] Workshops, job openings, query forms, blog CMS, analytics

---

## How to wire one feature (recap)

1. Backend: build module (controller + service + dto + entity) per [section 3](#3-clean-backend-folder-structure)
2. Backend: match endpoint + response envelope from this spec
3. Frontend: add path to `constants/admin-api-routes.ts` (admin) or use inline path (student/teacher)
4. Frontend: fill the `api()` handler in the service (copy `admin-support-management.service.ts`)
5. Test with `NEXT_PUBLIC_USE_MOCK_API=false`
6. Remove the mock once verified

**Done.** Every feature follows the same loop — clean, predictable, A → Z.
