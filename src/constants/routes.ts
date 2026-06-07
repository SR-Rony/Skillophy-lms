/**
 * Application route constants — use instead of hardcoded strings in links/redirects.
 */
export const ROUTES = {
  home: "/",
  courses: "/courses",
  cart: "/cart",
  checkout: "/checkout",
  courseCategory: (categoryId: string) => `/courses/category/${categoryId}`,
  pricing: "/pricing",
  blog: "/blog",
  about: "/about",
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
  },
  student: {
    root: "/student",
    courses: "/student/courses",
    live: "/student/live",
    assignments: "/student/assignments",
    certificates: "/student/certificates",
    wishlist: "/student/wishlist",
    chat: "/student/chat",
    payments: "/student/payments",
    settings: "/student/settings",
    profile: "/student/profile",
  },
  teacher: {
    root: "/teacher",
    courses: "/teacher/courses",
    live: "/teacher/live",
    students: "/teacher/students",
    analytics: "/teacher/analytics",
    chat: "/teacher/chat",
    settings: "/teacher/settings",
  },
  admin: {
    root: "/admin",
    users: "/admin/users",
    courses: "/admin/courses",
    payments: "/admin/payments",
    analytics: "/admin/analytics",
    support: "/admin/support",
    settings: "/admin/settings",
  },
} as const;
