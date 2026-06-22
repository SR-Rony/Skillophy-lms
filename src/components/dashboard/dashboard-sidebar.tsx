"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Clapperboard,
  CreditCard,
  FolderOpen,
  GraduationCap,
  Grip,
  Headphones,
  LayoutDashboard,
  LifeBuoy,
  MessageCircleQuestion,
  MessageSquare,
  PanelLeft,
  PanelLeftClose,
  Presentation,
  Settings,
  Shapes,
  SquareUser,
  Ticket,
  UserCog,
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
  account: SquareUser,
  analytics: BarChart3,
  book: BookOpen,
  calendar: CalendarDays,
  card: CreditCard,
  categories: Shapes,
  clapperboard: Clapperboard,
  dashboard: LayoutDashboard,
  graduation: GraduationCap,
  grid: Grip,
  messages: MessageSquare,
  promo: Ticket,
  quiz: MessageCircleQuestion,
  resources: FolderOpen,
  settings: Settings,
  support: Headphones,
  transaction: Wallet,
  userCog: UserCog,
  users: Users,
  video: Video,
  wallet: Wallet,
  workshop: Presentation,
};

function collectNavItems(items: NavItem[], footerItems: NavItem[] = []): NavItem[] {
  return [...items, ...footerItems].flatMap((item) => [
    ...(item.href ? [item] : []),
    ...(item.children ? collectNavItems(item.children) : []),
  ]);
}

function resolveActiveNavHref(
  pathname: string,
  items: NavItem[],
  footerItems: NavItem[] = []
): string | null {
  const candidates = collectNavItems(items, footerItems).sort((a, b) => {
    const aHref = a.href ?? "";
    const bHref = b.href ?? "";
    return bHref.length - aHref.length;
  });

  for (const item of candidates) {
    if (!item.href) continue;

    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
      return item.href;
    }
  }

  return null;
}

function isGroupActive(item: NavItem, activeHref: string | null, pathname: string) {
  if (!item.children?.length) return false;

  return item.children.some((child) => {
    if (!child.href) return false;
    return child.href === activeHref || pathname.startsWith(`${child.href}/`);
  });
}

const navLinkClassName = (isActive: boolean, sidebarCollapsed: boolean) =>
  cn(
    "flex items-center gap-3 border-l-[3px] px-3 py-2.5 text-[14px] font-medium transition-colors",
    isActive
      ? "border-l-primary bg-[#fff0f0] text-primary"
      : "border-l-transparent text-[#4a4a4a] hover:bg-[#fafafa] hover:text-[#1a1a1a]",
    sidebarCollapsed && "justify-center border-l-0 px-2"
  );

function SidebarLink({
  item,
  activeHref,
  sidebarCollapsed,
  onNavigate,
  nested = false,
}: {
  item: NavItem;
  activeHref: string | null;
  sidebarCollapsed: boolean;
  onNavigate?: () => void;
  nested?: boolean;
}) {
  const Icon = item.iconName ? navIcons[item.iconName] : undefined;
  const isActive = Boolean(item.href && item.href === activeHref);

  if (!item.href) {
    return null;
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        navLinkClassName(isActive, sidebarCollapsed && !nested),
        nested && !sidebarCollapsed && "ml-1 border-l-[3px] py-2 pl-5 text-[13px]",
        nested && isActive && !sidebarCollapsed && "border-l-primary bg-[#fff0f0] font-semibold text-primary"
      )}
      title={sidebarCollapsed && !nested ? item.title : undefined}
    >
      {Icon && !nested && (
        <Icon
          className={cn("h-[18px] w-[18px] shrink-0", isActive ? "text-primary" : "text-[#6b7280]")}
          strokeWidth={1.75}
        />
      )}
      {(!sidebarCollapsed || nested) && <span>{item.title}</span>}
      {!sidebarCollapsed && item.badge != null && (
        <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

function SidebarNavGroup({
  item,
  activeHref,
  pathname,
  sidebarCollapsed,
  onNavigate,
}: {
  item: NavItem;
  activeHref: string | null;
  pathname: string;
  sidebarCollapsed: boolean;
  onNavigate?: () => void;
}) {
  const groupActive = isGroupActive(item, activeHref, pathname);
  const [open, setOpen] = useState(groupActive);
  const Icon = item.iconName ? navIcons[item.iconName] : undefined;
  const firstChild = item.children?.find((child) => child.href);

  useEffect(() => {
    if (groupActive) {
      setOpen(true);
    }
  }, [groupActive]);

  if (sidebarCollapsed) {
    if (!firstChild?.href) return null;

    return (
      <SidebarLink
        item={{ ...item, href: firstChild.href }}
        activeHref={activeHref}
        sidebarCollapsed={sidebarCollapsed}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          navLinkClassName(groupActive, false),
          "w-full rounded-none text-left"
        )}
        aria-expanded={open}
      >
        {Icon && (
          <Icon
            className={cn(
              "h-[18px] w-[18px] shrink-0",
              groupActive ? "text-primary" : "text-[#6b7280]"
            )}
            strokeWidth={1.75}
          />
        )}
        <span>{item.title}</span>
        <ChevronDown
          className={cn(
            "ml-auto h-4 w-4 shrink-0 text-[#9ca3af] transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.75}
        />
      </button>

      {open && item.children && (
        <nav className="flex flex-col gap-0.5 pb-1">
          {item.children.map((child) => (
            <SidebarLink
              key={child.href ?? child.title}
              item={child}
              activeHref={activeHref}
              sidebarCollapsed={sidebarCollapsed}
              onNavigate={onNavigate}
              nested
            />
          ))}
        </nav>
      )}
    </div>
  );
}

function SidebarNavItem({
  item,
  activeHref,
  pathname,
  sidebarCollapsed,
  onNavigate,
}: {
  item: NavItem;
  activeHref: string | null;
  pathname: string;
  sidebarCollapsed: boolean;
  onNavigate?: () => void;
}) {
  if (item.children?.length) {
    return (
      <SidebarNavGroup
        item={item}
        activeHref={activeHref}
        pathname={pathname}
        sidebarCollapsed={sidebarCollapsed}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <SidebarLink
      item={item}
      activeHref={activeHref}
      sidebarCollapsed={sidebarCollapsed}
      onNavigate={onNavigate}
    />
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
            <SidebarNavItem
              key={item.href ?? item.title}
              item={item}
              activeHref={activeHref}
              pathname={pathname}
              sidebarCollapsed={sidebarCollapsed}
              onNavigate={onNavigate}
            />
          ))}
        </nav>
      </ScrollArea>

      {footerItems.length > 0 && (
        <div className="mt-auto shrink-0 border-t border-[#f0f0f0] px-3 py-4">
          <nav className="flex flex-col gap-1">
            {footerItems.map((item) => (
              <SidebarNavItem
                key={item.href ?? item.title}
                item={item}
                activeHref={activeHref}
                pathname={pathname}
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
