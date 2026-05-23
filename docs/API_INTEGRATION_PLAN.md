# API Integration Plan

## Current state

- `NEXT_PUBLIC_USE_MOCK_API=true` (default)
- Services return data from `src/data/mock/` with simulated latency
- `apiClient` in `services/api-client.ts` is ready but unused

## Service layer pattern

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

## Migration checklist

### Phase 1 — Environment
- [ ] Set `NEXT_PUBLIC_API_BASE_URL`
- [ ] Set `NEXT_PUBLIC_USE_MOCK_API=false`

### Phase 2 — Auth
- [ ] Implement `POST /auth/login`, `POST /auth/logout`, `GET /auth/session`
- [ ] HTTP-only cookies or Bearer token in `apiClient` headers
- [ ] Next.js `middleware.ts` for protected dashboard routes

### Phase 3 — Core LMS
- [ ] Courses CRUD + enrollment
- [ ] Lessons + progress tracking
- [ ] Assignments + submissions
- [ ] Quizzes + attempts

### Phase 4 — Commerce & comms
- [ ] Payments / transactions (Stripe UI + webhooks on backend)
- [ ] Notifications (polling or SSE)
- [ ] Chat (WebSocket service)

### Phase 5 — Admin & analytics
- [ ] User management
- [ ] Analytics aggregates
- [ ] Support tickets

## apiClient enhancements (when needed)

```ts
// Attach auth token
headers: {
  Authorization: `Bearer ${token}`,
}

// Unified error handling
// Request ID / logging
// Upload helper for assignments
```

## Type safety

- Shared types in `src/types/`
- Validate API responses with Zod at service boundary (optional, recommended)

## Next.js API routes (optional BFF)

For hiding secrets or aggregating calls:

```
src/app/api/...   # Route handlers as BFF
```

Frontend services would call `/api/...` instead of external URL. Not required for v1 if backend is CORS-enabled.

## Mock data location

| Domain        | File                          |
|---------------|-------------------------------|
| Users         | `data/mock/users.mock.ts`     |
| Courses       | `data/mock/courses.mock.ts`   |
| Payments      | `data/mock/payments.mock.ts`  |
| Notifications | `data/mock/notifications.mock.ts` |

Remove mocks gradually per service, not all at once.
