"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, ShoppingCart } from "lucide-react";
import { StudentNotificationDropdown } from "@/components/student/notifications";
import {
  getStudentNotificationDropdownGroupsForNavbar,
  getStudentNotificationDropdownUnreadCount,
} from "@/data/mock/student-notifications.mock";
import { ROUTES } from "@/constants";
import { StudentUserMenu } from "@/components/student/student-user-menu";
import { cn } from "@/utils";

function NavIconBadge({
  href,
  label,
  count,
  children,
}: {
  href: string;
  label: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={`${label}, ${count} items`}
      className="relative text-[#1a1a1a] transition-colors hover:text-primary"
    >
      {children}
      <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
        {count}
      </span>
    </Link>
  );
}

export function StudentNavbarActions() {
  const pathname = usePathname();
  const isMyCoursesActive =
    pathname === ROUTES.student.courses || pathname.startsWith(`${ROUTES.student.courses}/`);

  return (
    <>
      <NavIconBadge href={ROUTES.cart} label="Cart" count={2}>
        <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
      </NavIconBadge>

      <NavIconBadge href={ROUTES.student.chat} label="Messages" count={2}>
        <MessageSquare className="h-5 w-5" strokeWidth={1.75} />
      </NavIconBadge>

      <StudentNotificationDropdown
        notifications={getStudentNotificationDropdownGroupsForNavbar()}
        unreadCount={getStudentNotificationDropdownUnreadCount()}
      />

      <Link
        href={ROUTES.student.courses}
        className={cn(
          "text-sm font-medium transition-colors",
          isMyCoursesActive ? "text-primary" : "text-[#1a1a1a] hover:text-primary"
        )}
      >
        My Courses
      </Link>

      <StudentUserMenu />
    </>
  );
}
