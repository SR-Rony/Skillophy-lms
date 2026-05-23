import type { NavItem } from "@/types/navigation.types";
import {
  BarChart3,
  BookOpen,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  Video,
} from "lucide-react";

/** Public marketing site navigation */
export const publicNav: NavItem[] = [
  { title: "Courses", href: "/courses" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

/** Student dashboard sidebar */
export const studentNav: NavItem[] = [
  { title: "Overview", href: "/student", icon: LayoutDashboard },
  { title: "My Courses", href: "/student/courses", icon: BookOpen },
  { title: "Live Classes", href: "/student/live", icon: Video },
  { title: "Assignments", href: "/student/assignments", icon: GraduationCap },
  { title: "Certificates", href: "/student/certificates", icon: GraduationCap },
  { title: "Wishlist", href: "/student/wishlist", icon: BookOpen },
  { title: "Messages", href: "/student/chat", icon: MessageSquare },
  { title: "Payments", href: "/student/payments", icon: CreditCard },
  { title: "Settings", href: "/student/settings", icon: Settings },
];

/** Teacher dashboard sidebar */
export const teacherNav: NavItem[] = [
  { title: "Overview", href: "/teacher", icon: LayoutDashboard },
  { title: "Courses", href: "/teacher/courses", icon: BookOpen },
  { title: "Live Classes", href: "/teacher/live", icon: Video },
  { title: "Students", href: "/teacher/students", icon: Users },
  { title: "Analytics", href: "/teacher/analytics", icon: BarChart3 },
  { title: "Messages", href: "/teacher/chat", icon: MessageSquare },
  { title: "Settings", href: "/teacher/settings", icon: Settings },
];

/** Admin dashboard sidebar */
export const adminNav: NavItem[] = [
  { title: "Overview", href: "/admin", icon: LayoutDashboard },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Courses", href: "/admin/courses", icon: BookOpen },
  { title: "Payments", href: "/admin/payments", icon: CreditCard },
  { title: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { title: "Support", href: "/admin/support", icon: MessageSquare },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];
