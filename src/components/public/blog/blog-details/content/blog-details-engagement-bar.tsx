"use client";

import { Eye, Heart, MessageCircle, Share2 } from "lucide-react";
import type { BlogEngagementStats } from "@/types/blog-detail.types";
import { cn } from "@/utils";

interface BlogDetailsEngagementBarProps {
  stats: BlogEngagementStats;
  className?: string;
}

function formatCount(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(value);
}

export function BlogDetailsEngagementBar({ stats, className }: BlogDetailsEngagementBarProps) {
  const items = [
    { icon: Heart, label: "Likes", value: stats.likes, active: true },
    { icon: MessageCircle, label: "Comments", value: stats.comments },
    { icon: Share2, label: "Shares", value: stats.shares },
    { icon: Eye, label: "Views", value: stats.views },
  ];

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:px-6",
        className
      )}
    >
      {items.map(({ icon: Icon, label, value, active }) => (
        <button
          key={label}
          type="button"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#374151] transition hover:text-primary"
          aria-label={`${label}: ${value}`}
        >
          <Icon
            className={cn("h-5 w-5", active ? "fill-primary text-primary" : "text-[#6b7280]")}
            aria-hidden
          />
          <span>{formatCount(value)}</span>
        </button>
      ))}
    </div>
  );
}
