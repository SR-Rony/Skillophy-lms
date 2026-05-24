"use client";

import { Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore, useUIStore } from "@/store";
import { getInitials } from "@/utils";

interface DashboardHeaderProps {
  title?: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const user = useAuthStore((s) => s.user);
  const setMobileSidebarOpen = useUIStore((s) => s.setMobileSidebarOpen);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setMobileSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
      {title && <h2 className="text-lg font-semibold lg:hidden">{title}</h2>}
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <Avatar className="h-8 w-8">
          {user?.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
          <AvatarFallback>{user ? getInitials(user.name) : "?"}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
