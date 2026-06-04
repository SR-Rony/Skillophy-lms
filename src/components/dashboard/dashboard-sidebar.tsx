"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  PanelLeft,
  PanelLeftClose,
  Settings,
  Users,
  Video,
} from "lucide-react";
import type { NavItem } from "@/types";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUIStore } from "@/store";
import { cn } from "@/utils";

interface DashboardSidebarProps {
  items: NavItem[];
  roleLabel: string;
}

const navIcons = {
  analytics: BarChart3,
  book: BookOpen,
  card: CreditCard,
  dashboard: LayoutDashboard,
  graduation: GraduationCap,
  messages: MessageSquare,
  settings: Settings,
  users: Users,
  video: Video,
};

export function DashboardSidebar({ items, roleLabel }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] duration-200",
        sidebarCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!sidebarCollapsed && <Logo />}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="shrink-0">
          {sidebarCollapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>
      {!sidebarCollapsed && (
        <p className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {roleLabel}
        </p>
      )}
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="flex flex-col gap-1">
          {items.map((item) => {
            const Icon = item.iconName ? navIcons[item.iconName] : undefined;
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href + "/")) ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  sidebarCollapsed && "justify-center px-2"
                )}
                title={sidebarCollapsed ? item.title : undefined}
              >
                {Icon && <Icon className="h-4 w-4 shrink-0" />}
                {!sidebarCollapsed && <span>{item.title}</span>}
                {!sidebarCollapsed && item.badge != null && (
                  <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
}
