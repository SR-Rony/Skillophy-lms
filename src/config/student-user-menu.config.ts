import {
  Award,
  BookOpen,
  Briefcase,
  CalendarClock,
  CircleHelp,
  ClipboardPenLine,
  FileText,
  FlaskConical,
  LayoutGrid,
  MessageSquare,
  SquarePlay,
  User,
  UserSquare2,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { ROUTES } from "@/constants";

export interface StudentUserMenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const studentUserMenuItems: StudentUserMenuItem[] = [
  { label: "Dashboard", href: ROUTES.student.root, icon: LayoutGrid },
  { label: "My Courses", href: ROUTES.student.courses, icon: SquarePlay },
  { label: "Class Schedule", href: ROUTES.student.schedule, icon: CalendarClock },
  { label: "My Resources", href: ROUTES.student.resources, icon: FileText },
  { label: "Model Test", href: ROUTES.student.assignments, icon: ClipboardPenLine },
  { label: "Books", href: ROUTES.student.wishlist, icon: BookOpen },
  { label: "My Workshop", href: ROUTES.student.workshop, icon: FlaskConical },
  { label: "Messages", href: ROUTES.student.chat, icon: MessageSquare },
  { label: "Payment History", href: ROUTES.student.payments, icon: Wallet },
  { label: "My Certificate", href: ROUTES.student.certificates, icon: Award },
];

export const studentUserMenuAccountItems: StudentUserMenuItem[] = [
  { label: "Account Settings", href: ROUTES.student.settings, icon: UserSquare2 },
  { label: "Help Center", href: ROUTES.help, icon: CircleHelp },
];

export const studentUserMenuExternalItems: StudentUserMenuItem[] = [
  { label: "Skillophy Business", href: ROUTES.business, icon: Briefcase },
  { label: "Join as Teacher", href: ROUTES.teachers, icon: User },
];

export function isStudentDashboardRoute(pathname: string) {
  return pathname.startsWith("/student");
}

export function isStudentMenuItemActive(pathname: string, href: string) {
  if (href === ROUTES.student.root) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
