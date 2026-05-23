# Development Log

## 2025-05-23 — Initial frontend architecture

### Completed

- [x] Next.js 15 App Router project scaffold
- [x] TypeScript, Tailwind CSS v4, ESLint
- [x] shadcn/ui base components (Button, Input, Card, Avatar, etc.)
- [x] Feature-based folder structure under `src/`
- [x] Route groups: `(public)`, `(auth)`, `(dashboard)`
- [x] Student, teacher, admin dashboard shells
- [x] Providers: Theme (next-themes), TanStack Query
- [x] Zustand: auth + UI stores
- [x] Service layer with mock data toggle
- [x] Courses feature: catalog, detail, hooks
- [x] Login form with RHF + Zod
- [x] Framer Motion: hero + animation variants
- [x] Architecture documentation in `/docs`

### 2025-05-23 (continued)

- [x] All dashboard route scaffold pages (student, teacher, admin)
- [x] Public `/support` page
- [x] `ModulePlaceholder` component for consistent feature stubs
- [x] Auth `middleware.ts` placeholder (matcher for dashboard routes)
- [x] `.env.local` from example
- [x] TypeScript check passes (`npm run typecheck`)

### Next steps (roadmap)

#### Sprint 1 — Auth & guards
- [ ] Register form + validation
- [ ] `middleware.ts` role-based protection
- [ ] Session hydration on app load

#### Sprint 2 — Student experience
- [ ] Lesson player UI
- [ ] Assignment submit flow
- [ ] Progress tracking components
- [ ] Certificate preview/download UI

#### Sprint 3 — Teacher experience
- [ ] Course builder wizard
- [ ] Quiz editor
- [ ] Live class schedule UI

#### Sprint 4 — Admin & payments
- [ ] User table (TanStack Table)
- [ ] Analytics charts (Recharts)
- [ ] Checkout / payment method UI

#### Sprint 5 — Comms & polish
- [ ] Chat UI (conversation list + thread)
- [ ] Notification center
- [ ] Blog CMS-ready pages
- [ ] E2E tests (Playwright)

### Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

### Notes

- Package name is `skillophy` (npm lowercase requirement)
- Mock login accepts any password; email matching selects mock user when found
