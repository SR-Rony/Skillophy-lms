import { UserRole } from "@/enums";
import { ROUTES } from "@/constants";

/**
 * Role-based route access map.
 * Used by middleware and dashboard guards when backend auth is connected.
 */
export const roleHomeRoutes: Record<UserRole, string> = {
  [UserRole.STUDENT]: ROUTES.student.root,
  [UserRole.TEACHER]: ROUTES.teacher.root,
  [UserRole.ADMIN]: ROUTES.admin.root,
};

export const roleRoutePrefixes: Record<UserRole, string[]> = {
  [UserRole.STUDENT]: ["/student"],
  [UserRole.TEACHER]: ["/teacher"],
  [UserRole.ADMIN]: ["/admin"],
};

export function canAccessRoute(role: UserRole, pathname: string): boolean {
  const prefixes = roleRoutePrefixes[role];
  return prefixes.some((prefix) => pathname.startsWith(prefix));
}
