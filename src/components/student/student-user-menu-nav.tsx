"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  isStudentMenuItemActive,
  studentUserMenuAccountItems,
  studentUserMenuExternalItems,
  studentUserMenuItems,
} from "@/config/student-user-menu.config";
import { cn } from "@/utils";

interface StudentUserMenuNavProps {
  onNavigate?: () => void;
  className?: string;
}

function MenuLink({
  href,
  label,
  icon: Icon,
  isActive,
  onNavigate,
  external,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  isActive: boolean;
  onNavigate?: () => void;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-[14px] font-medium transition-colors",
        isActive
          ? "bg-[#fff1f1] text-primary"
          : "text-[#1a1a1a] hover:bg-[#fafafa]",
        external && "justify-between"
      )}
    >
      <span className="flex min-w-0 items-center gap-3">
        <Icon
          className={cn("h-5 w-5 shrink-0", isActive ? "text-primary" : "text-[#1a1a1a]")}
          strokeWidth={1.75}
        />
        <span className="truncate">{label}</span>
      </span>
      {external && <ArrowUpRight className="h-4 w-4 shrink-0 text-[#9ca3af]" aria-hidden />}
    </Link>
  );
}

export function StudentUserMenuNav({ onNavigate, className }: StudentUserMenuNavProps) {
  const pathname = usePathname();

  return (
    <div className={cn("space-y-1", className)}>
      <nav className="space-y-0.5">
        {studentUserMenuItems.map((item) => (
          <MenuLink
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={isStudentMenuItemActive(pathname, item.href)}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="my-2 border-t border-[#f0f0f0]" />

      <nav className="space-y-0.5">
        {studentUserMenuAccountItems.map((item) => (
          <MenuLink
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={isStudentMenuItemActive(pathname, item.href)}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="my-2 border-t border-[#f0f0f0]" />

      <nav className="space-y-0.5">
        {studentUserMenuExternalItems.map((item) => (
          <MenuLink
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={isStudentMenuItemActive(pathname, item.href)}
            onNavigate={onNavigate}
            external
          />
        ))}
      </nav>
    </div>
  );
}
