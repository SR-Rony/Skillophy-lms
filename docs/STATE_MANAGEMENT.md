# State Management

## Recommended split: Zustand + TanStack Query

### Why this setup is best for Skillophy

| Concern              | Tool            | Reason |
|----------------------|-----------------|--------|
| Server/async data    | TanStack Query  | Caching, deduplication, background refetch, stale-while-revalidate — essential for courses, progress, notifications |
| Client-only UI state | Zustand         | Minimal boilerplate, no Provider nesting for UI flags, easy persist for auth snapshot |
| Form state           | React Hook Form | Local, performant, integrates with Zod |
| URL state            | Next.js searchParams | Filters, pagination — shareable URLs |

**Avoid** putting server data in Zustand. Duplicate sources of truth cause sync bugs when the backend arrives.

**Avoid** using TanStack Query for `sidebarCollapsed` — overkill and wrong mental model.

## Zustand stores

### `useAuthStore` (`store/auth.store.ts`)

- Current user snapshot
- `isAuthenticated` flag
- Persisted to `localStorage` (`skillophy-auth`)
- **Future:** hydrate from `/auth/session` on app load, clear on logout API

### `useUIStore` (`store/ui.store.ts`)

- Sidebar collapse / mobile drawer
- Ephemeral — not persisted

## TanStack Query

### Configuration

`config/query.config.ts` — default `staleTime`, `retry`, etc.

### Query keys

Centralized in `constants/query-keys.ts`:

```ts
queryKeys.courses.detail(id)
```

### Hooks pattern

```ts
// hooks/use-courses.ts
export function useCourses() {
  return useQuery({
    queryKey: queryKeys.courses.all,
    queryFn: () => courseService.getAll(),
  });
}
```

Feature-specific hooks can live in `features/<name>/hooks/` when not shared.

## Auth flow (current mock)

1. User submits `LoginForm`
2. `authService.login()` returns mock user
3. `useAuthStore.setUser(user)`
4. Redirect via `roleHomeRoutes[user.role]`

## When backend connects

1. Add `useSession()` query calling `authService.getSession()`
2. On app mount in a client `AuthHydrator`, sync Query → Zustand
3. Use Query mutations for login/logout with cache invalidation
4. Keep Zustand only for optimistic UI if needed

## Devtools

React Query Devtools enabled in development via `QueryProvider`.
