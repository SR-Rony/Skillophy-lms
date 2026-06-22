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
  { title: "Dashboard", href: ROUTES.admin.root, iconName: "dashboard" },
  {
    title: "User Management",
    iconName: "userCog",
    children: [
      { title: "Employee Management", href: ROUTES.admin.users },
      { title: "Learner Management", href: ROUTES.admin.learners },
    ],
  },
  { title: "Course Management", href: ROUTES.admin.courses, iconName: "clapperboard" },
  { title: "Categories", href: ROUTES.admin.categories, iconName: "categories" },
  { title: "Promo & Discounts", href: ROUTES.admin.promos, iconName: "promo" },
  { title: "Workshop", href: ROUTES.admin.workshop, iconName: "workshop" },
  { title: "Transaction", href: ROUTES.admin.transactions, iconName: "transaction" },
  { title: "Today's Quiz", href: ROUTES.admin.quiz, iconName: "quiz" },
  {
    title: "Others",
    iconName: "grid",
    children: [
      { title: "Analytics", href: ROUTES.admin.analytics },
      { title: "Blog", href: ROUTES.admin.blog },
    ],
  },
];

export const adminFooterNav: NavItem[] = [
  { title: "Account Settings", href: ROUTES.admin.settings, iconName: "account" },
  { title: "Support", href: ROUTES.admin.support, iconName: "support" },
];
