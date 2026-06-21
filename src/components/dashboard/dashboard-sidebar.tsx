"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  CreditCard,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  PanelLeft,
  PanelLeftClose,
  Presentation,
  Settings,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import type { NavItem } from "@/types";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUIStore } from "@/store";
import { cn } from "@/utils";

interface DashboardSidebarProps {
  items: NavItem[];
  footerItems?: NavItem[];
  roleLabel: string;
}

const navIcons = {
  analytics: BarChart3,
  book: BookOpen,
  calendar: CalendarDays,
  card: CreditCard,
  dashboard: LayoutDashboard,
  graduation: GraduationCap,
  messages: MessageSquare,
  resources: FolderOpen,
  settings: Settings,
  support: LifeBuoy,
  users: Users,
  video: Video,
  wallet: Wallet,
  workshop: Presentation,
};

function SidebarLink({
  item,
  pathname,
  sidebarCollapsed,
}: {
  item: NavItem;
  pathname: string;
  sidebarCollapsed: boolean;
}) {
  const Icon = item.iconName ? navIcons[item.iconName] : undefined;
  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href + "/")) ||
    (item.href !== "/" && pathname.startsWith(item.href));

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
        isActive
          ? "bg-[#fff0f0] text-primary"
          : "text-[#4a4a4a] hover:bg-[#fafafa] hover:text-[#1a1a1a]",
        sidebarCollapsed && "justify-center px-2"
      )}
      title={sidebarCollapsed ? item.title : undefined}
    >
      {Icon && (
        <Icon
          className={cn("h-[18px] w-[18px] shrink-0", isActive ? "text-primary" : "text-[#6b7280]")}
          strokeWidth={1.75}
        />
      )}
      {!sidebarCollapsed && <span>{item.title}</span>}
      {!sidebarCollapsed && item.badge != null && (
        <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

export function DashboardSidebar({ items, footerItems = [] }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden h-screen flex-col border-r border-[#e8e4e1] bg-white text-[#1a1a1a] transition-[width] duration-200 lg:flex",
        sidebarCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#f0f0f0] px-4">
        {!sidebarCollapsed && <Logo />}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="shrink-0">
          {sidebarCollapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="min-h-0 flex-1 px-3 py-4">
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <SidebarLink
              key={item.href}
              item={item}
              pathname={pathname}
              sidebarCollapsed={sidebarCollapsed}
            />
          ))}
        </nav>
      </ScrollArea>

      {footerItems.length > 0 && (
        <div className="shrink-0 border-t border-[#f0f0f0] px-3 py-4">
          <nav className="flex flex-col gap-1">
            {footerItems.map((item) => (
              <SidebarLink
                key={item.href}
                item={item}
                pathname={pathname}
                sidebarCollapsed={sidebarCollapsed}
              />
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
