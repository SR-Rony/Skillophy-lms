"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Bell, Menu, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore, useUIStore } from "@/store";
import { getInitials } from "@/utils";

interface DashboardHeaderProps {
  title?: string;
  showBackButton?: boolean;
  backHref?: string;
  messageCount?: number;
  notificationCount?: number;
}

export function DashboardHeader({
  title,
  showBackButton = false,
  backHref,
  messageCount = 0,
  notificationCount = 0,
}: DashboardHeaderProps) {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const setMobileSidebarOpen = useUIStore((s) => s.setMobileSidebarOpen);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-[#f0f0f0] bg-white px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {showBackButton && (
        <Button
          variant="ghost"
          size="icon"
          className="hidden h-9 w-9 rounded-lg border border-[#ebe8e6] text-[#1a1a1a] hover:bg-[#fafafa] lg:inline-flex"
          onClick={() => (backHref ? router.push(backHref) : router.back())}
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}

      {title && (
        <h1 className="text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">{title}</h1>
      )}

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-[#1a1a1a] hover:text-primary"
          aria-label={`Messages${messageCount ? `, ${messageCount} unread` : ""}`}
        >
          <MessageSquare className="h-5 w-5" strokeWidth={1.75} />
          {messageCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
              {messageCount}
            </span>
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative text-[#1a1a1a] hover:text-primary"
          aria-label={`Notifications${notificationCount ? `, ${notificationCount} unread` : ""}`}
        >
          <Bell className="h-5 w-5" strokeWidth={1.75} />
          {notificationCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
              {notificationCount}
            </span>
          )}
        </Button>

        <Avatar className="h-9 w-9 border border-[#f0f0f0]">
          {user?.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
          <AvatarFallback className="bg-[#fff0f0] text-xs font-semibold text-primary">
            {user ? getInitials(user.name) : "?"}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
