"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
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
  X,
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

function resolveActiveNavHref(
  pathname: string,
  items: NavItem[],
  footerItems: NavItem[] = []
): string | null {
  const candidates = [...items, ...footerItems].sort((a, b) => b.href.length - a.href.length);

  for (const item of candidates) {
    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
      return item.href;
    }
  }

  return null;
}

function SidebarLink({
  item,
  activeHref,
  sidebarCollapsed,
  onNavigate,
}: {
  item: NavItem;
  activeHref: string | null;
  sidebarCollapsed: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.iconName ? navIcons[item.iconName] : undefined;
  const isActive = item.href === activeHref;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
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

function SidebarNav({
  items,
  footerItems,
  pathname,
  sidebarCollapsed,
  onNavigate,
}: {
  items: NavItem[];
  footerItems: NavItem[];
  pathname: string;
  sidebarCollapsed: boolean;
  onNavigate?: () => void;
}) {
  const activeHref = resolveActiveNavHref(pathname, items, footerItems);

  return (
    <>
      <ScrollArea className="min-h-0 flex-1 px-3 py-4">
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <SidebarLink
              key={item.href}
              item={item}
              activeHref={activeHref}
              sidebarCollapsed={sidebarCollapsed}
              onNavigate={onNavigate}
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
                activeHref={activeHref}
                sidebarCollapsed={sidebarCollapsed}
                onNavigate={onNavigate}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export function DashboardSidebar({ items, footerItems = [] }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar, mobileSidebarOpen, setMobileSidebarOpen } =
    useUIStore();

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname, setMobileSidebarOpen]);

  useEffect(() => {
    if (!mobileSidebarOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileSidebarOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileSidebarOpen, setMobileSidebarOpen]);

  const closeMobileSidebar = () => setMobileSidebarOpen(false);

  return (
    <>
      {/* Desktop sidebar */}
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

        <SidebarNav
          items={items}
          footerItems={footerItems}
          pathname={pathname}
          sidebarCollapsed={sidebarCollapsed}
        />
      </aside>

      {/* Mobile sidebar drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={closeMobileSidebar}
          />

          <aside className="relative flex h-full w-[min(100vw-3rem,280px)] flex-col border-r border-[#e8e4e1] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#f0f0f0] px-4">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileSidebar}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <SidebarNav
              items={items}
              footerItems={footerItems}
              pathname={pathname}
              sidebarCollapsed={false}
              onNavigate={closeMobileSidebar}
            />
          </aside>
        </div>
      )}
    </>
  );
}
