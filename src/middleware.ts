import { NextResponse } from "next/server";

/**
 * Auth middleware placeholder.
 * When backend auth is ready: validate session cookie/JWT and enforce role routes.
 * @see permissions/role.permissions.ts
 */
export function middleware() {
  // const { pathname } = request.nextUrl;
  // Protect /student, /teacher, /admin — redirect to /login if unauthenticated
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/student/:path*",
    "/teacher",
    "/teacher/:path*",
    "/admin/:path*",
  ],
};
