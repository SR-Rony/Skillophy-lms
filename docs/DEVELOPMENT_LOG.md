# Development Log

> **Current full status:** [PROJECT_STATUS.md](PROJECT_STATUS.md)

---

## 2025-05-23 — Initial frontend architecture

- [x] Next.js 15 App Router scaffold
- [x] TypeScript, Tailwind CSS v4, ESLint, shadcn/ui base
- [x] Route groups: `(public)`, `(auth)`, `(dashboard)`
- [x] Student, teacher, admin dashboard shells
- [x] TanStack Query + Zustand stores
- [x] Service layer with mock toggle
- [x] Login form (RHF + Zod)
- [x] Architecture docs in `/docs`

---

## 2025-05 — Dashboard route scaffolds

- [x] All student, teacher, admin route pages
- [x] Public `/support` page
- [x] `ModulePlaceholder` for unbuilt features
- [x] Auth `middleware.ts` placeholder

---

## 2025-06 — Public marketing site

- [x] Home, courses catalog, course detail, category pages
- [x] Blog list + post detail
- [x] Teachers directory + profile
- [x] Cart, checkout, business inquiry
- [x] Career, job position pages
- [x] Affiliate program page
- [x] Podcast, help center, terms, privacy
- [x] Certificate verification
- [x] About, contact pages

---

## 2025-06 — Student portal (full learning flow)

- [x] Student dashboard overview
- [x] My courses + course detail
- [x] Lesson player (`course-video/`)
- [x] Live class pages (`live-video/`)
- [x] Quiz flow: play, result, answers, time-over (`live-quiz/`)
- [x] Assignment submit + feedback (`live-assignment/`)
- [x] Resources (`my-resources/`, `live-resources/`)
- [x] Certificates (`my-certificate/`)
- [x] Messages / chat (`student-messages/`)
- [x] Payment history
- [x] Notifications with pagination
- [x] Wishlist, workshop, schedule
- [x] Account settings + profile tabs

---

## 2025-06 — Teacher portal

- [x] Teacher dashboard
- [x] Course list + course detail (overview, students, assignments, resources, feedback)
- [x] Live class management
- [x] Class schedule, course resources
- [x] Messages (conversation list + chat thread)
- [x] Payment history, workshop, settings, support

---

## 2025-06 — Admin portal (major build)

### User management
- [x] Employee management (table, tabs, add/update/delete drawers)
- [x] Employee profile + teacher profile (recorded/live courses, payment, info tabs)
- [x] Learner management (table, filters)
- [x] Learner profile (recorded/live course progress, job experience, resume, account actions)

### Course platform
- [x] Course management (recorded + live tabs, status badges)
- [x] Course creation wizard — recorded (general info, curriculum, meta info)
- [x] Course creation wizard — live (class routine, curriculum)
- [x] Curriculum drawers: add lesson, quiz, assignment, resources
- [x] Meta info: FAQ, benefits, skill books, academic guides
- [x] Categories management (add/edit drawer)

### Commerce & operations
- [x] Promo & discounts (tabs, form drawer, delete modal)
- [x] Workshop management + creation form
- [x] Transaction management (teacher/student tables, filters, export UI)

### Communications & support
- [x] Admin messages (reuses teacher messages UI)
- [x] Job opening management (CRUD drawer)
- [x] Query form (business + contact tabs, detail pages)
- [x] Support ticket list (priority filter, sort, pagination, add ticket drawer)
- [x] Support ticket detail (chat thread, resolve, send message)
- [x] Report list (type filter, sort, mark resolved, checkboxes)
- [x] Report detail (resolve report, course/teacher/reporter info)

### Platform admin
- [x] Admin dashboard (stat cards, sales chart, enrollment, notifications)
- [x] Role management + permissions matrix page
- [x] Template management (email/SMS, icon upload)
- [x] Activity log (type filter, date range picker, Today/Yesterday groups, email links)
- [x] Account settings (profile info + more tabs)

### Not yet built (placeholders)
- [ ] `/admin/analytics`
- [ ] `/admin/blog`
- [ ] `/admin/quiz`
- [ ] Legacy `/admin/users/students|teachers|admins`

---

## 2026-06 — API layer refactor

- [x] Refactored `fetchAdminData` + added `mutateAdminData` in `create-admin-service.ts`
- [x] Added `ADMIN_API_ROUTES` in `constants/admin-api-routes.ts`
- [x] **Support module** — full API-ready pattern (5 methods: list, detail, create, resolve, sendMessage)
- [x] **Dashboard service** — API handler wired
- [x] Support components wired to service (not local-only state for mutations)
- [x] `useUIStore.headerTitleOverride` for dynamic admin header titles
- [x] Updated API integration documentation

---

## Roadmap (next)

### Sprint 1 — API & auth
- [ ] Wire remaining admin services with `api()` handlers (copy Support pattern)
- [ ] Auth token in `apiClient` headers
- [ ] `middleware.ts` role-based protection
- [ ] Session hydration on app load

### Sprint 2 — Admin completion
- [ ] Quiz admin module
- [ ] Analytics dashboard (charts)
- [ ] Blog CMS admin
- [ ] Course/workshop edit routes
- [ ] Remove legacy user list placeholders

### Sprint 3 — Backend integration
- [ ] Connect Support API endpoints (already wired on frontend)
- [ ] Employee/Learner CRUD APIs
- [ ] Course creation publish API

### Sprint 4 — Quality
- [ ] Admin `loading.tsx` / `error.tsx` boundaries
- [ ] Header notification dropdown
- [ ] E2E tests (Playwright)

---

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Notes

- Package name: `skillophy` (npm lowercase)
- Mock login: any password; email selects mock user role
- Default: `NEXT_PUBLIC_USE_MOCK_API=true` — no backend required for development
