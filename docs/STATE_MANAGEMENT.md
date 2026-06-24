# State Management

> **Project context:** [PROJECT_STATUS.md](PROJECT_STATUS.md)

## Recommended split: Zustand + TanStack Query

| Concern | Tool | Examples |
|---------|------|----------|
| Server/async data | TanStack Query | courses, blog, future session |
| Client-only UI | Zustand | sidebar, header title override |
| Form state | React Hook Form | login, drawers, settings forms |
| URL state | `searchParams` | employee profile `?fromTab=` |
| Table UI state | `useState` in page | filters, pagination, selection |

**Avoid** storing server lists in Zustand — use TanStack Query when backend connects.

**Avoid** TanStack Query for `sidebarCollapsed` — wrong tool for ephemeral UI.

---

## Zustand stores

### `useAuthStore` (`store/auth.store.ts`)

| Field | Purpose |
|-------|---------|
| `user` | Current user snapshot |
| `isAuthenticated` | Auth flag |
| `setUser()` | Login success |
| `logout()` | Clear session |

Persisted to `localStorage` (`skillophy-auth`).

**Future:** hydrate from `authService.getSession()` via TanStack Query on app load.

### `useUIStore` (`store/ui.store.ts`)

| Field | Purpose |
|-------|---------|
| `sidebarCollapsed` | Desktop sidebar |
| `mobileSidebarOpen` | Mobile drawer |
| `headerTitleOverride` | Dynamic admin header (e.g. `Ticket ID:#12345`) |
| `setHeaderTitleOverride()` | Set/clear on detail page mount/unmount |

Ephemeral — not persisted.

**Used in:** `AdminLayoutShell`, support ticket detail page.

---

## TanStack Query

### Config

`config/query.config.ts` — `staleTime`, `retry`.

### Query keys

`constants/query-keys.ts`:

```ts
queryKeys.courses.all
queryKeys.courses.detail(slug)
```

### Hooks

```ts
// hooks/use-courses.ts
export function useCourses() {
  return useQuery({
    queryKey: queryKeys.courses.all,
    queryFn: () => courseService.getAll(),
  });
}
```

Admin list pages currently use **server components** (fetch in `page.tsx`, pass as props). When adding client refetch, wrap with Query mutations.

---

## Auth flow (current mock)

1. User submits `LoginForm`
2. `authService.login()` → mock user by email
3. `useAuthStore.setUser(user)`
4. Redirect via `roleHomeRoutes[user.role]`

---

## Admin page state patterns

### List pages (e.g. Support, Activity Log, Report)

```tsx
// Server: initial data from service in page.tsx
// Client: useState for filters, pagination, local mutations
const [tickets, setTickets] = useState(data.tickets);
```

After API connects: use `useMutation` + `queryClient.invalidateQueries`.

### Detail pages (e.g. Support ticket, Report)

```tsx
const [status, setStatus] = useState(ticket.status);
const [thread, setThread] = useState(ticket.thread);
// Mutations via adminSupportManagementService.resolveTicket() etc.
```

### Drawers / modals

Form state in drawer component; on submit call service method; parent updates list state.

---

## When backend connects

1. `useSession()` query → `authService.getSession()`
2. `AuthHydrator` client component syncs Query → Zustand
3. Login/logout as Query mutations with cache invalidation
4. Admin lists: replace `useState` seeds with `useQuery` + `useMutation`
5. Keep Zustand for UI only

## Devtools

React Query Devtools enabled in development via `QueryProvider`.
