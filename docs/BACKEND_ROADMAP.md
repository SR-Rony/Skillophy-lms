# Skillophy — Backend Development Roadmap (Step-by-Step)

> **এই ফাইলটাই তোমার মূল গাইড।** Backend বানানোর সময় বারবার frontend codebase খুঁজতে হবে না — সব phase, endpoint, test command, এবং শেষে frontend connect করার পদ্ধতি এখানেই আছে।
>
> **Backend project path:** `../Skillophy-backend` (frontend-এর পাশে sibling folder)  
> **Detailed API spec (reference):** [BACKEND_API_SPEC.md](BACKEND_API_SPEC.md)  
> **Last updated:** June 2026

---

## Table of contents

1. [কীভাবে এই roadmap ব্যবহার করবে](#1-কীভাবে-এই-roadmap-ব্যবহার-করবে)
2. [মূল কৌশল — backend আগে, frontend শেষে](#2-মূল-কৌশল--backend-আগে-frontend-শেষে)
3. [Project setup (একবার)](#3-project-setup-একবার)
4. [API rules (সব endpoint-এ মানতে হবে)](#4-api-rules-সব-endpoint-এ-মানতে-হবে)
5. [বর্তমান অগ্রগতি](#5-বর্তমান-অগ্রগতি)
6. [Phase-by-phase build plan](#6-phase-by-phase-build-plan)
7. [Module map — frontend file reference](#7-module-map--frontend-file-reference)
8. [প্রতি phase-এ test করার পদ্ধতি](#8-প্রতি-phase-এ-test-করার-পদ্ধতি)
9. [Backend সম্পূর্ণ হলে — একবারে frontend connect](#9-backend-সম্পূর্ণ-হলে--একবারে-frontend-connect)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. কীভাবে এই roadmap ব্যবহার করবে

```
প্রতিদিনের কাজ:
  1. নিচের Phase list থেকে যেটা incomplete → সেটা খোলো
  2. "Backend কাজ" checklist follow করো (Skillophy-backend/)
  3. "Test commands" দিয়ে verify করো (curl / Postman / Thunder Client)
  4. Checkbox ✅ mark করো
  5. পরের phase-এ যাও

Frontend:
  → শেষ পর্যন্ত NEXT_PUBLIC_USE_MOCK_API=true রাখো
  → সব phase শেষ হলে Section 9 follow করে একবারে connect করো
```

**একটি phase = একটি feature area** (যেমন Auth, Support, Courses)। একসাথে সব বানানোর দরকার নেই।

---

## 2. মূল কৌশল — backend আগে, frontend শেষে

| ধাপ | কী করবে | Frontend |
|-----|---------|----------|
| Build | `Skillophy-backend`-এ module বানাও | Mock চালু (`USE_MOCK_API=true`) |
| Test | curl/Postman দিয়ে response shape verify | স্পর্শ করবে না |
| Repeat | পরের phase | Mock চালু |
| Final | সব phase ✅ | একবারে `USE_MOCK_API=false` + service wiring |

**কেন?** Frontend-এ ৪৫+ service আছে। প্রতি ছোট backend change-এ frontend খুললে অর্ধেক page error দেখাবে (`AdminApiNotImplementedError`)। Backend পুরোটা test করে শেষে connect করলে smooth হবে।

### Response shape (frontend `apiClient` এটাই expect করে)

```json
// Success
{ "success": true, "data": { ... }, "message": "OK" }

// Paginated
{ "success": true, "data": [ ... ], "meta": { "page": 1, "pageSize": 10, "total": 96, "totalPages": 10 }, "message": "OK" }

// Error
{ "success": false, "message": "...", "code": "ERROR_CODE", "errors": [{ "field": "email", "message": "Required" }] }
```

### Base URL

| Layer | URL |
|-------|-----|
| Backend server | `http://localhost:4000` |
| API prefix | `/api` |
| Full example | `http://localhost:4000/api/auth/login` |
| Frontend env (শেষে) | `NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api` |

---

## 3. Project setup (একবার)

### Backend repo

```bash
cd "../Skillophy-backend"
cp .env.example .env
npm install
```

### Database (Podman/Docker)

```bash
# Podman socket (Parrot/Linux — একবার)
systemctl --user enable --now podman.socket

npm run db:up
npm run prisma:migrate
npm run prisma:seed
npm run start:dev
```

### Verify

```bash
curl http://localhost:4000/api/health
```

Expected: `"database": "connected"`, `"status": "ok"`

### Demo logins (seed data)

| Email | Role | Password |
|-------|------|----------|
| `admin@skillophy.com` | Admin | `password` |
| `student@skillophy.com` | Student | `password` |
| `teacher@skillophy.com` | Teacher | `password` |

### Backend folder anatomy (প্রতি নতুন feature)

```
Skillophy-backend/src/modules/{feature}/
├── {feature}.module.ts
├── {feature}.controller.ts    # routes
├── {feature}.service.ts       # business logic
├── dto/                       # request validation
└── entities/                  # response types (optional)
```

---

## 4. API rules (সব endpoint-এ মানতে হবে)

| Rule | Value |
|------|-------|
| Auth header | `Authorization: Bearer <accessToken>` |
| Roles | `STUDENT` · `TEACHER` · `ADMIN` (JWT claim) |
| Admin prefix | `/api/admin/...` |
| Student prefix | `/api/student/...` |
| Teacher prefix | `/api/teacher/...` |
| Public | No auth — `/api/courses`, `/api/blog`, etc. |
| List query params | `?page=1&pageSize=10&search=...&sort=newest&status=open` |

**Frontend type alignment:** প্রতিটি module-এর response shape → `src/types/{name}.types.ts` (Section 7 table)।

**Mock alignment:** Seed/test data → `src/data/mock/{name}.mock.ts` দেখো — shape মিলিয়ে বানাও।

---

## 5. বর্তমান অগ্রগতি

| Phase | Status | Notes |
|-------|--------|-------|
| **0 — Foundation** | ✅ Done | NestJS, Prisma, guards, interceptors, seed |
| **1 — Auth** | 🟡 Partial | login, register, session, logout — OAuth/OTP/reset বাকি |
| **2 — Admin Support** | ✅ Done | 5 endpoints — frontend-ready reference |
| **3 — Public catalog** | ⬜ Not started | |
| **4 — Admin core** | ⬜ Not started | |
| **5 — Student learning** | ⬜ Not started | |
| **6 — Teacher** | ⬜ Not started | |
| **7 — Commerce & comms** | ⬜ Not started | |
| **8 — Remaining admin** | ⬜ Not started | |

**মোট endpoint (planning):** ~173  
**Implemented:** ~14

---

## 6. Phase-by-phase build plan

প্রতিটি phase-এ তিনটা অংশ:
- **Backend কাজ** — `Skillophy-backend`-এ কী বানাবে
- **Prisma** — কোন table/model যোগ করবে
- **Test** — Section 8-এর commands

---

### Phase 0 — Foundation ✅

**Backend কাজ**
- [x] NestJS project at `Skillophy-backend/`
- [x] `PrismaService` + `DatabaseModule`
- [x] `ResponseInterceptor` + `HttpExceptionFilter`
- [x] `JwtAuthGuard` + `RolesGuard`
- [x] `GET /api/health`
- [x] Seed: admin, student, teacher users

**Prisma models**
- [x] `User`, `Profile`, `Role`, `Category`, `Course`
- [x] `SupportTicket`, `SupportMessage`

**Definition of done**
- [x] `npm run build` passes
- [x] Health returns `database: connected`

---

### Phase 1 — Auth 🟡

**Backend কাজ**
- [x] `POST /api/auth/register`
- [x] `POST /api/auth/login`
- [x] `GET /api/auth/session`
- [x] `POST /api/auth/logout`
- [ ] `POST /api/auth/refresh`
- [ ] `POST /api/auth/forgot-password`
- [ ] `POST /api/auth/reset-password`
- [ ] `POST /api/auth/verify-otp`
- [ ] `POST /api/auth/oauth/:provider` (Google/Facebook — optional, শেষে)

**Prisma**
- [ ] `PasswordResetToken` / `OtpCode` table (optional)

**Frontend reference (শেষে wire করবে)**
- Service: `src/services/auth.service.ts`
- Store: `src/store/auth.store.ts`
- Pages: `src/app/(auth)/login`, `register`, `forgot-password`, `reset-password`, `verify-otp`

**Test**
```bash
# Login
curl -s -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"admin@skillophy.com","password":"password"}'

# Session (TOKEN = accessToken from login)
curl -s http://localhost:4000/api/auth/session \
  -H "Authorization: Bearer TOKEN"
```

**Definition of done**
- [ ] সব ৩ role দিয়ে login কাজ করে
- [ ] Invalid credentials → `401` + `{ success: false }`
- [ ] Session returns user `{ id, email, name, role, avatar }`

---

### Phase 2 — Admin Support ✅

**Backend কাজ**
- [x] `GET /api/admin/support/tickets`
- [x] `GET /api/admin/support/tickets/:id`
- [x] `POST /api/admin/support/tickets`
- [x] `PATCH /api/admin/support/tickets/:id/resolve`
- [x] `POST /api/admin/support/tickets/:id/messages`

**Frontend reference**
- Types: `src/types/admin-support-management.types.ts`
- Mock: `src/data/mock/admin-support-management.mock.ts`
- Service: `src/services/admin/admin-support-management.service.ts` ← **API wiring reference**
- Routes: `src/constants/admin-api-routes.ts` → `support.*`
- UI: `src/components/admin/support-management/`

**Test**
```bash
TOKEN=$(curl -s -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"admin@skillophy.com","password":"password"}' \
  | jq -r '.data.tokens.accessToken')

curl -s http://localhost:4000/api/admin/support/tickets \
  -H "Authorization: Bearer $TOKEN"
```

**Definition of done**
- [x] List returns tickets with `ticketNumber`, `priority`, `status` (lowercase strings)
- [x] Create / resolve / message flows work
- [x] Non-admin → `403`

---

### Phase 3 — Public catalog

**Backend কাজ**
- [ ] `GET /api/courses` — list, filter, sort, paginate
- [ ] `GET /api/courses/:slug` — detail
- [ ] `GET /api/courses/category/:categoryId`
- [ ] `GET /api/categories`
- [ ] `GET /api/teachers` — directory
- [ ] `GET /api/teachers/:slug` — public profile
- [ ] `GET /api/blog` — list
- [ ] `GET /api/blog/:slug` — detail
- [ ] `GET /api/podcast` + `GET /api/podcast/:slug`
- [ ] `GET /api/jobs` + `GET /api/jobs/:jobId`
- [ ] `POST /api/jobs/:jobId/apply`
- [ ] `POST /api/query-forms/contact`
- [ ] `POST /api/query-forms/business`
- [ ] `POST /api/newsletter`
- [ ] `GET /api/certificates/verify/:code`
- [ ] `GET /api/help` + `GET /api/help/:slug`

**Prisma models to add**
- [ ] `BlogPost`, `PodcastEpisode`
- [ ] `JobOpening`, `JobApplication`
- [ ] `QueryForm` (type: business | contact)
- [ ] `NewsletterSubscriber`
- [ ] `Certificate` (verify)
- [ ] `HelpArticle`
- [ ] Extend `Course`, `Category`, `User` (teacher public fields)

**Frontend reference**
| Feature | Types | Mock | Service |
|---------|-------|------|---------|
| Courses | `course.types.ts` | `courses.mock.ts` | `course.service.ts` |
| Blog | `blog.types.ts`, `blog-detail.types.ts` | blog mocks in components | `blog.service.ts` |
| Teachers | teacher types in public components | public data | — |
| Careers | job types | career mocks | — |
| Certificate verify | `verify-certificate.types.ts` | — | — |

**Test**
```bash
curl -s http://localhost:4000/api/courses
curl -s http://localhost:4000/api/categories
curl -s http://localhost:4000/api/blog
```

**Definition of done**
- [ ] Public routes — no auth required
- [ ] Response shape matches `src/types/course.types.ts` etc.
- [ ] Pagination meta on list endpoints

---

### Phase 4 — Admin core

**Backend কাজ — Dashboard**
- [ ] `GET /api/admin/dashboard` — stats, charts, header badges

**User management**
- [ ] `GET/POST/PATCH/DELETE /api/admin/employees`
- [ ] `GET /api/admin/employees/:id`
- [ ] `GET/PATCH/DELETE /api/admin/learners`
- [ ] `GET /api/admin/learners/:id`

**Course management**
- [ ] `GET/POST/PATCH/DELETE /api/admin/courses`
- [ ] `POST /api/admin/courses/live`
- [ ] `POST/PATCH/DELETE /api/admin/courses/:id/lessons`
- [ ] `POST /api/admin/courses/:id/quizzes`
- [ ] `POST /api/admin/courses/:id/assignments`
- [ ] `POST /api/admin/courses/:id/resources`

**Categories**
- [ ] `GET/POST/PATCH/DELETE /api/admin/categories`

**Promos**
- [ ] `GET/POST/PATCH/DELETE /api/admin/promos`

**Transactions**
- [ ] `GET /api/admin/transactions`
- [ ] `GET /api/admin/transactions/:id`
- [ ] `GET /api/admin/transactions/export`

**Reports**
- [ ] `GET /api/admin/reports`
- [ ] `GET /api/admin/reports/:id`
- [ ] `PATCH /api/admin/reports/:id/resolve`
- [ ] `PATCH /api/admin/reports/resolve-bulk`

**Activity log**
- [ ] `GET /api/admin/activity-log`

**Roles (RBAC)**
- [ ] `GET/POST/PATCH/DELETE /api/admin/roles`
- [ ] `GET/PUT /api/admin/roles/:id/permissions`

**Templates**
- [ ] `GET/POST/PATCH/DELETE /api/admin/templates`

**Admin settings & messages**
- [ ] `GET/PATCH /api/admin/settings`
- [ ] `GET/POST /api/admin/messages/:threadId`

**Prisma models to add**
- [ ] `Lesson`, `Quiz`, `QuizQuestion`, `Assignment`, `Resource`
- [ ] `Promo`, `Transaction`, `Report`, `ActivityLog`, `Template`
- [ ] Extend `Role` permissions JSON

**Frontend reference** — Section 7 (Admin table)

**Definition of done**
- [ ] Admin-only guards on all `/api/admin/*`
- [ ] CRUD flows match mock data shapes
- [ ] Dashboard returns data for `adminDashboardService`

---

### Phase 5 — Student learning

**Backend কাজ**
- [ ] `GET /api/student/dashboard`
- [ ] `GET/PATCH /api/student/profile`
- [ ] `GET/PATCH /api/student/settings`
- [ ] `PATCH /api/student/settings/password`
- [ ] `DELETE /api/student/account`
- [ ] `GET /api/student/courses` — enrolled
- [ ] `GET /api/student/courses/:slug`
- [ ] `GET /api/student/courses/:slug/lessons/:lessonId`
- [ ] `PATCH /api/student/courses/:slug/lessons/:lessonId/progress`
- [ ] `GET /api/student/courses/:slug/live/:lessonId`
- [ ] `GET /api/student/courses/:slug/resources`
- [ ] Quiz: `GET play`, `POST submit`, `GET result`, `GET answers`
- [ ] Assignment: `GET`, `POST submit`, `GET feedback`
- [ ] `GET /api/student/certificates` + download
- [ ] `GET /api/student/resources`, `schedule`, `live`, `workshop`
- [ ] Wishlist: `GET/POST/DELETE /api/student/wishlist`

**Prisma models to add**
- [ ] `Enrollment`, `LessonProgress`
- [ ] `QuizAttempt`, `Submission`
- [ ] `Certificate`, `Wishlist`
- [ ] `LiveClass`, `WorkshopEnrollment`

**Frontend reference**
| Feature | Types | Service |
|---------|-------|---------|
| Quiz | `student-live-quiz.types.ts` | `student-live-quiz.service.ts` |
| Assignment | `student-live-assignment.types.ts` | (in course flow) |
| Certificate | `student-certificate.types.ts` | `student-certificate.service.ts` |
| Resources | `student-resources.types.ts` | `student-resources.service.ts` |
| Schedule | schedule types | `student-class-schedule.service.ts` |
| Settings | account types | `student-account-settings.service.ts` |
| Messages | `student-messages.types.ts` | `student-messages.service.ts` |

**Test**
```bash
# Student token
TOKEN=$(curl -s -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"student@skillophy.com","password":"password"}' \
  | jq -r '.data.tokens.accessToken')

curl -s http://localhost:4000/api/student/courses \
  -H "Authorization: Bearer $TOKEN"
```

**Definition of done**
- [ ] Student role guard on all `/api/student/*`
- [ ] Enrollment required for course content
- [ ] Progress persists in DB

---

### Phase 6 — Teacher portal

**Backend কাজ**
- [ ] `GET /api/teacher/dashboard`
- [ ] `GET/POST/PATCH/DELETE /api/teacher/courses`
- [ ] `GET /api/teacher/courses/:slug/students`
- [ ] `GET /api/teacher/courses/:slug/live/:lessonId`
- [ ] `GET /api/teacher/students`
- [ ] `GET /api/teacher/analytics`
- [ ] `GET/POST /api/teacher/schedule`
- [ ] `GET/POST/DELETE /api/teacher/resources`
- [ ] `GET/POST /api/teacher/messages/:threadId`
- [ ] `GET /api/teacher/payments`
- [ ] `GET /api/teacher/workshop`
- [ ] `GET/PATCH /api/teacher/settings`

**Frontend reference**
- Services: `src/services/teacher/*.service.ts`
- Pattern: `create-teacher-service.ts` (like admin)

**Definition of done**
- [ ] Teacher only sees own courses/students
- [ ] Teacher role guard on `/api/teacher/*`

---

### Phase 7 — Commerce & communications

**Backend কাজ**
- [ ] `GET/POST/DELETE /api/cart`
- [ ] `POST /api/checkout`
- [ ] `POST /api/checkout/apply-promo`
- [ ] `GET /api/student/payments`
- [ ] Stripe webhook (payment intent)
- [ ] `GET/PATCH /api/student/notifications`
- [ ] `GET/POST /api/student/messages/:threadId`
- [ ] WebSocket/Socket.IO for real-time chat (optional: start with polling)

**Prisma models to add**
- [ ] `CartItem`, `Order`, `Payment`
- [ ] `Notification`, `Message`, `MessageThread`

**External services**
- [ ] Stripe API keys in `.env`
- [ ] (Optional) Redis for sessions/cache
- [ ] (Optional) S3 for file uploads

**Definition of done**
- [ ] Checkout creates transaction record
- [ ] Promo code validation works
- [ ] Notifications mark-as-read works

---

### Phase 8 — Remaining admin

**Backend কাজ**
- [ ] Workshops: `GET/POST/PATCH/DELETE /api/admin/workshops`
- [ ] Job openings: `GET/POST/PATCH/DELETE /api/admin/jobs`
- [ ] Query forms: `GET/PATCH/DELETE /api/admin/query-forms`
- [ ] Blog CMS: `GET/POST/PATCH/DELETE /api/admin/blog`
- [ ] Analytics: `GET /api/admin/analytics`, `/revenue`, `/enrollments`

**Prisma**
- [ ] `Workshop` (full model)
- [ ] Extend existing `JobOpening`, `QueryForm`, `BlogPost`

**Definition of done**
- [ ] All admin sidebar modules have working API
- [ ] Placeholder pages (`/admin/analytics`, `/admin/blog`, `/admin/quiz`) — backend ready when UI built

---

## 7. Module map — frontend file reference

Backend response বানানোর সময় **শুধু এই table** দেখো — frontend code খুলতে হবে না।

### Admin modules (22 services)

| # | Module | Backend prefix | Types file | Mock file | Service file |
|---|--------|----------------|------------|-----------|--------------|
| 1 | Dashboard | `/admin/dashboard` | `admin-dashboard.types.ts` | resolver in `admin-data.resolvers.ts` | `admin-dashboard.service.ts` |
| 2 | Support ✅ | `/admin/support/tickets` | `admin-support-management.types.ts` | `admin-support-management.mock.ts` | `admin-support-management.service.ts` |
| 3 | Employees | `/admin/employees` | `admin-employee-management.types.ts` | `admin-employee-management.mock.ts` | `admin-employee-management.service.ts` |
| 4 | Employee profile | `/admin/employees/:id` | `admin-employee-profile.types.ts` | mock | `admin-employee-profile.service.ts` |
| 5 | Teacher profile | via employee | `admin-teacher-profile.types.ts` | mock | `admin-teacher-profile.service.ts` |
| 6 | Learners | `/admin/learners` | `admin-learner-management.types.ts` | mock | `admin-learner-management.service.ts` |
| 7 | Learner profile | `/admin/learners/:id` | `admin-learner-profile.types.ts` | mock | `admin-learner-profile.service.ts` |
| 8 | Courses | `/admin/courses` | `admin-course-management.types.ts` | mock | `admin-course-management.service.ts` |
| 9 | Course creation | `/admin/courses` POST | `admin-course-creation.types.ts` | mock | `admin-course-creation.service.ts` |
| 10 | Categories | `/admin/categories` | `admin-category-management.types.ts` | mock | `admin-category-management.service.ts` |
| 11 | Promos | `/admin/promos` | `admin-promo-management.types.ts` | mock | `admin-promo-management.service.ts` |
| 12 | Workshops | `/admin/workshops` | `admin-workshop-management.types.ts` | mock | `admin-workshop-management.service.ts` |
| 13 | Workshop create | `/admin/workshops` POST | `admin-workshop-creation.types.ts` | mock | `admin-workshop-creation.service.ts` |
| 14 | Transactions | `/admin/transactions` | `admin-transaction-management.types.ts` | mock | `admin-transaction-management.service.ts` |
| 15 | Reports | `/admin/reports` | `admin-report-management.types.ts` | mock | `admin-report-management.service.ts` |
| 16 | Activity log | `/admin/activity-log` | `admin-activity-log.types.ts` | mock | `admin-activity-log-management.service.ts` |
| 17 | Roles | `/admin/roles` | `admin-role-management.types.ts` | mock | `admin-role-management.service.ts` |
| 18 | Templates | `/admin/templates` | `admin-template-management.types.ts` | mock | `admin-template-management.service.ts` |
| 19 | Job openings | `/admin/jobs` | `admin-job-opening-management.types.ts` | mock | `admin-job-opening-management.service.ts` |
| 20 | Query forms | `/admin/query-forms` | `admin-query-form-management.types.ts` | mock | `admin-query-form-management.service.ts` |
| 21 | Messages | `/admin/messages` | (reuses teacher) | mock | `admin-messages.service.ts` |
| 22 | Account settings | `/admin/settings` | `admin-account-settings.types.ts` | mock | `admin-account-settings.service.ts` |

### Student services

| Module | Types | Service |
|--------|-------|---------|
| Auth | `user.types.ts` | `auth.service.ts` |
| Courses (public) | `course.types.ts` | `course.service.ts` |
| Quiz | `student-live-quiz.types.ts` | `student-live-quiz.service.ts` |
| Certificate | `student-certificate.types.ts` | `student-certificate.service.ts` |
| Resources | `student-resources.types.ts` | `student-resources.service.ts` |
| Schedule | — | `student-class-schedule.service.ts` |
| Workshop | — | `student-workshop.service.ts` |
| Messages | `student-messages.types.ts` | `student-messages.service.ts` |
| Payments | — | `student-payment-history.service.ts` |
| Notifications | `student-notifications.types.ts` | `notification.service.ts` |
| Settings | — | `student-account-settings.service.ts` |
| Checkout | — | `payment.service.ts` |

### Teacher services

| Module | Service |
|--------|---------|
| Dashboard | `teacher-dashboard.service.ts` |
| Courses | `teacher-courses.service.ts` |
| Course detail | `teacher-course-details.service.ts` |
| Live video | `teacher-live-video.service.ts` |
| Resources | `teacher-course-resources.service.ts` |
| Schedule | `teacher-class-schedule.service.ts` |
| Messages | `teacher-messages.service.ts` |
| Payments | `teacher-payment-history.service.ts` |
| Workshop | `teacher-workshop.service.ts` |
| Settings | `teacher-account-settings.service.ts` |

### Shared / public

| Module | Types | Service |
|--------|-------|---------|
| Blog | `blog.types.ts` | `blog.service.ts` |
| Courses catalog | `course.types.ts` | `course.service.ts` |

---

## 8. প্রতি phase-এ test করার পদ্ধতি

### Option A — curl (terminal)

প্রতিটি phase-এর নিচে example commands আছে। Admin test-এর জন্য:

```bash
# Helper: get admin token
export ADMIN_TOKEN=$(curl -s -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"admin@skillophy.com","password":"password"}' \
  | jq -r '.data.tokens.accessToken')

echo $ADMIN_TOKEN
```

### Option B — Postman / Thunder Client (recommended)

1. Collection বানাও: `Skillophy API`
2. Environment variables:
   - `baseUrl` = `http://localhost:4000/api`
   - `adminToken` = (login response থেকে)
   - `studentToken` = ...
   - `teacherToken` = ...
3. প্রতিটি phase শেষে collection-এ request যোগ করো
4. **পুরো backend শেষে** collection একবার run করো (Collection Runner)

### Option C — Automated e2e (optional)

`Skillophy-backend/test/` — প্রতি module-এ `*.e2e-spec.ts` যোগ করতে পারো।

### Test checklist (প্রতি endpoint)

- [ ] `success: true` এবং `data` key আছে
- [ ] Shape matches corresponding `src/types/*.types.ts`
- [ ] `401` without token (protected routes)
- [ ] `403` wrong role
- [ ] `404` invalid id
- [ ] `400` validation error with `errors[]`

---

## 9. Backend সম্পূর্ণ হলে — একবারে frontend connect

**যখন Section 6-এর সব phase ✅ — তখনই frontend স্পর্শ করো।**

### Step 1 — Environment

`Skillophy-lms/.env.local`:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
NEXT_PUBLIC_USE_MOCK_API=false
```

### Step 2 — apiClient-এ Bearer token

`src/services/api-client.ts`-এ auth header যোগ করো:

```ts
headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,  // from useAuthStore
  ...options.headers,
}
```

### Step 3 — Admin services wire করো

প্রতিটি admin service-এ `api()` handler যোগ করো — **template:**

`src/services/admin/admin-support-management.service.ts` (ইতিমধ্যে done)

Pattern:
```ts
return fetchAdminData(
  () => mockResolver(),
  () => apiClient.get(ADMIN_API_ROUTES.xxx).then((r) => r.data)
);
```

`src/constants/admin-api-routes.ts`-এ path constant যোগ করো।

### Step 4 — Student / teacher / auth services

`env.useMockApi` check-এ `apiClient` call যোগ করো — `course.service.ts` pattern দেখো।

### Step 5 — middleware.ts

Role-based route guard চালু করো (`src/middleware.ts` — এখন placeholder)।

### Step 6 — Full smoke test (frontend)

| Role | Test pages |
|------|------------|
| Public | `/`, `/courses`, `/blog` |
| Student | `/student`, `/student/courses`, quiz, assignments |
| Teacher | `/teacher`, `/teacher/courses` |
| Admin | `/admin`, `/admin/support`, `/admin/users`, `/admin/courses` |

### Step 7 — Mock remove (optional, ধীরে ধীরে)

প্রতি verified service-এর mock সরাও — একসাথে সব না।

---

## 10. Troubleshooting

### Podman: `Cannot connect to Docker daemon`

```bash
systemctl --user enable --now podman.socket
npm run db:up
```

### Prisma migrate fails

```bash
# DB running?
pg_isready -h localhost -p 5432

# Reset (dev only — deletes data!)
npx prisma migrate reset
npm run prisma:seed
```

### Backend starts but `database: disconnected`

- `.env`-এ `DATABASE_URL` check করো
- Container: `podman ps` → `skillophy-postgres` running?

### Frontend `AdminApiNotImplementedError`

- ওই module-এর backend এখনো বানানো হয়নি, অথবা
- Service-এ `api()` handler নেই
- **সমাধান:** `USE_MOCK_API=true` রাখো যতক্ষণ ওই module ready না

### CORS error

Backend `.env`: `CORS_ORIGIN=http://localhost:3000`

---

## Quick reference — endpoint counts by area

| Area | Approx. endpoints |
|------|-----------------|
| Auth | 8 |
| Public | 17 |
| Student | 42 |
| Teacher | 23 |
| Admin | 83 |
| **Total** | **~173** |

Full endpoint list: [BACKEND_API_SPEC.md](BACKEND_API_SPEC.md) §6–10

---

## Related docs (গভীর reference)

| Doc | কখন দেখবে |
|-----|-----------|
| **এই ফাইল** | প্রতিদিন — step-by-step কাজ |
| [BACKEND_API_SPEC.md](BACKEND_API_SPEC.md) | Endpoint details, request/response |
| [API_INTEGRATION_PLAN.md](API_INTEGRATION_PLAN.md) | Frontend wiring pattern (শেষে) |
| [PROJECT_STATUS.md](PROJECT_STATUS.md) | Frontend কী built আছে |
| `Skillophy-backend/README.md` | Backend commands & setup |

---

**পরবর্তী কাজ:** Phase 1 সম্পূর্ণ করো (refresh token + forgot password), তারপর Phase 3 (Public catalog) শুরু করো।
