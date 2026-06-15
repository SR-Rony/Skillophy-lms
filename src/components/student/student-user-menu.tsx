"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAuthStore } from "@/store";
import { StudentUserMenuNav } from "./student-user-menu-nav";
import { cn } from "@/utils";

const demoUser = {
  name: "Nushrat Jahan",
  email: "nushrat5789@gmail.com",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
};

export function StudentUserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const authUser = useAuthStore((state) => state.user);

  const user = {
    name: authUser?.name ?? demoUser.name,
    email: authUser?.email ?? demoUser.email,
    avatar: authUser?.avatar ?? demoUser.avatar,
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-full transition-opacity hover:opacity-90"
      >
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          unoptimized
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
        />
        <ChevronDown
          className={cn("hidden h-4 w-4 text-[#6b7280] transition-transform lg:block", isOpen && "rotate-180")}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[320px] overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          <div className="border-b border-[#f0f0f0] px-4 py-4">
            <div className="flex items-center gap-3">
              <Image
                src={user.avatar}
                alt=""
                width={48}
                height={48}
                unoptimized
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[15px] font-bold text-[#1a1a1a]">{user.name}</p>
                <p className="truncate text-[13px] text-[#6b7280]">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="max-h-[min(70vh,520px)] overflow-y-auto p-2">
            <StudentUserMenuNav onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
