# Component Guide

## Layering

| Layer        | Location              | Responsibility                          |
|--------------|-----------------------|-----------------------------------------|
| Primitives   | `components/ui/`      | shadcn/ui — Button, Input, Card         |
| Shared       | `components/shared/`  | Cross-app: Logo, PageHeader, EmptyState |
| Layouts      | `components/layouts/` | Page shells: PublicHeader, Footer       |
| Domain UI    | `components/public/`  | Marketing composites                    |
| Dashboard    | `components/dashboard/` | Sidebar, shell, StatCard              |
| Forms        | `components/forms/`   | FormField + feature forms               |
| Role-specific| `components/student/` | Only when not reusable elsewhere      |

**Rule:** If a component is used by one feature only, put it in `features/<feature>/components/`. Promote to `components/` when reused across features.

## shadcn/ui

Configured via `components.json`. Add components:

```bash
npx shadcn@latest add dialog dropdown-menu
```

Primitives stay in `components/ui/`. Do not add business logic there.

## Form system

1. Define Zod schema in `src/validations/`.
2. Use `react-hook-form` with `zodResolver`.
3. Wrap fields with `FormField` for label + error display.

Example: `components/forms/login-form.tsx`.

## Responsive design

- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`).
- Dashboard sidebar collapses on `lg+`; mobile menu via `useUIStore`.
- Config in `config/dashboard.config.ts`.

## Theming

- CSS variables in `app/globals.css`.
- `ThemeProvider` (next-themes) in `providers/`.
- Use semantic tokens: `bg-background`, `text-muted-foreground`, `bg-sidebar`.

## Animation

Import variants from `@/animations`:

```tsx
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations";
```

Use `MotionWrapper` for simple page fades. Prefer variants over inline animation objects.

## Accessibility

- Use Radix primitives from shadcn for focus traps and ARIA.
- Label all form fields via `FormField` + `Label`.
- Icon-only buttons need `aria-label`.
