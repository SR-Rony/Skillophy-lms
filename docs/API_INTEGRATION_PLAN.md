# API Integration Plan

> **What is API-ready today:** [PROJECT_STATUS.md](PROJECT_STATUS.md#service-layer--api-readiness)
> **Building the backend?** Full endpoint blueprint (A→Z): [BACKEND_API_SPEC.md](BACKEND_API_SPEC.md)

## Current state

- `NEXT_PUBLIC_USE_MOCK_API=true` (default) — all services use mocks
- `apiClient` in `services/api-client.ts` — HTTP client ready
- **Support module** — fully wired with mock + API handlers (reference implementation)
- **Dashboard service** — API handler wired for `GET /admin/dashboard`
- Other admin services — mock only; will throw `AdminApiNotImplementedError` when mock is off and no `api()` handler exists

## Environment

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
NEXT_PUBLIC_USE_MOCK_API=true
```

Set `NEXT_PUBLIC_USE_MOCK_API=false` when backend is ready.

---

## Admin service pattern

### `fetchAdminData` (read) / `mutateAdminData` (write)

```ts
// services/admin/create-admin-service.ts
export async function fetchAdminData<T>(mock: () => T, api?: () => Promise<T>): Promise<T>
export async function mutateAdminData<T>(mock: () => T, api?: () => Promise<T>): Promise<T>
```

| `useMockApi` | Behavior |
|--------------|----------|
| `true` | Mock resolver + 200ms delay |
| `false` + `api()` provided | Calls `apiClient` |
| `false` + no `api()` | Throws `AdminApiNotImplementedError` |

### Reference: Support module

```ts
// services/admin/admin-support-management.service.ts
async getSupportTickets() {
  return fetchAdminData(
    () => resolveAdminSupportManagement(),
    () => apiClient.get(ADMIN_API_ROUTES.support.tickets).then((r) => r.data)
  );
}

async createTicket(form) {
  return mutateAdminData(
    () => resolveAdminSupportCreateTicket(form),
    () => apiClient.post(ADMIN_API_ROUTES.support.tickets, form).then((r) => r.data)
  );
}
```

### API path constants

`src/constants/admin-api-routes.ts`:

```ts
ADMIN_API_ROUTES.dashboard                    // GET
ADMIN_API_ROUTES.support.tickets              // GET, POST
ADMIN_API_ROUTES.support.ticket(id)           // GET
ADMIN_API_ROUTES.support.resolve(id)          // PATCH
ADMIN_API_ROUTES.support.messages(id)       // POST
```

Add new domains here as you wire more modules.

---

## Root / student service pattern

```ts
// services/course.service.ts
async getAll(): Promise<Course[]> {
  if (env.useMockApi) {
    await sleep(400);
    return mockCourses;
  }
  return apiClient.get<Course[]>("/courses").then((r) => r.data);
}
```

Student services use inline `env.useMockApi` checks (no `fetchAdminData`).

---

## How to wire a new admin module

1. Add paths to `constants/admin-api-routes.ts`
2. Add mock mutation functions in `data/mock/admin-{name}-management.mock.ts` (if writes needed)
3. Add resolvers in `admin-data.resolvers.ts`
4. Update service with `fetchAdminData` / `mutateAdminData` + `api()` handlers
5. Update page components to call service methods (not local-only state)
6. Test with `NEXT_PUBLIC_USE_MOCK_API=false`

Copy `admin-support-management.service.ts` as template.

---

## Migration checklist

### Phase 1 — Environment
- [x] `ADMIN_API_ROUTES` constants
- [x] `fetchAdminData` / `mutateAdminData` refactor
- [ ] Set `NEXT_PUBLIC_API_BASE_URL` in production
- [ ] Set `NEXT_PUBLIC_USE_MOCK_API=false` when ready

### Phase 2 — Auth
- [ ] `POST /auth/login`, `POST /auth/logout`, `GET /auth/session`
- [ ] Bearer token or HTTP-only cookies in `apiClient`
- [ ] `middleware.ts` protected dashboard routes

### Phase 3 — Admin (priority order)
- [x] Support tickets (frontend ready — 5 endpoints)
- [ ] Dashboard badges (split from full dashboard fetch)
- [ ] Employee / learner CRUD
- [ ] Course management + creation publish
- [ ] Report, activity log, transactions
- [ ] Remaining 16 admin services

### Phase 4 — Core LMS (student/teacher)
- [ ] Courses + enrollment
- [ ] Lessons + progress
- [ ] Assignments + submissions
- [ ] Quizzes + attempts

### Phase 5 — Commerce & comms
- [ ] Payments / Stripe
- [ ] Notifications (polling / SSE)
- [ ] Chat (WebSocket)

---

## apiClient enhancements (when needed)

```ts
headers: { Authorization: `Bearer ${token}` }
// Unified error handling, request ID, upload helper
```

## Type safety

- Types in `src/types/admin-*.types.ts` — keep aligned with API responses
- Optional: Zod validation at service boundary

## Mock data location

| Domain | Mock file |
|--------|-----------|
| Admin support | `admin-support-management.mock.ts` |
| Admin employees | `admin-employee-management.mock.ts` |
| Users | `users.mock.ts` |
| Courses | `courses.mock.ts` |
| All admin | `admin-data.resolvers.ts` (hub) |

Remove mocks per service as each domain migrates — not all at once.
