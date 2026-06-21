import type { NavItem } from "@/types/navigation.types";
import { ROUTES } from "@/constants";

/** Public marketing site navigation */
export const publicNav: NavItem[] = [
  { title: "Courses", href: "/courses" },
  { title: "Business", href: "/business" },
  { title: "Teachers", href: "/teachers" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

/** Student dashboard sidebar */
export const studentNav: NavItem[] = [
  { title: "Overview", href: "/student", iconName: "dashboard" },
  { title: "My Courses", href: "/student/courses", iconName: "book" },
  { title: "Live Classes", href: "/student/live", iconName: "video" },
  { title: "Assignments", href: "/student/assignments", iconName: "graduation" },
  { title: "Certificates", href: "/student/certificates", iconName: "graduation" },
  { title: "Wishlist", href: "/student/wishlist", iconName: "book" },
  { title: "Messages", href: "/student/chat", iconName: "messages" },
  { title: "Payments", href: "/student/payments", iconName: "card" },
  { title: "Settings", href: "/student/settings", iconName: "settings" },
];

/** Teacher dashboard sidebar */
export const teacherNav: NavItem[] = [
  { title: "Dashboard", href: ROUTES.teacher.root, iconName: "dashboard" },
  { title: "My Courses", href: ROUTES.teacher.courses, iconName: "book" },
  { title: "Class Schedule", href: ROUTES.teacher.schedule, iconName: "calendar" },
  { title: "Course Resources", href: ROUTES.teacher.resources, iconName: "resources" },
  { title: "My Workshop", href: ROUTES.teacher.workshop, iconName: "workshop" },
  { title: "Messages", href: ROUTES.teacher.chat, iconName: "messages" },
  { title: "Payment History", href: ROUTES.teacher.payments, iconName: "card" },
];

export const teacherFooterNav: NavItem[] = [
  { title: "Account Settings", href: ROUTES.teacher.settings, iconName: "settings" },
  { title: "Support", href: ROUTES.teacher.support, iconName: "support" },
];

/** Admin dashboard sidebar */
export const adminNav: NavItem[] = [
  { title: "Overview", href: "/admin", iconName: "dashboard" },
  { title: "Users", href: "/admin/users", iconName: "users" },
  { title: "Courses", href: "/admin/courses", iconName: "book" },
  { title: "Payments", href: "/admin/payments", iconName: "card" },
  { title: "Analytics", href: "/admin/analytics", iconName: "analytics" },
  { title: "Support", href: "/admin/support", iconName: "messages" },
  { title: "Settings", href: "/admin/settings", iconName: "settings" },
];
