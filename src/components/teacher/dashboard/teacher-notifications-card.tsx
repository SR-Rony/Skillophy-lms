import Link from "next/link";
import { FileText, MessageCircle, Radio } from "lucide-react";
import { TeacherDashboardEmptyState } from "@/components/teacher/dashboard/teacher-dashboard-empty-state";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import { TeacherEmptyIllustration } from "@/components/teacher/shared/teacher-empty-illustration";
import type {
  TeacherDashboardEmptyState as TeacherDashboardEmptyStateData,
  TeacherDashboardNotification,
  TeacherDashboardNotificationType,
} from "@/types/teacher-dashboard.types";
import { cn } from "@/utils";

const notificationIconConfig: Record<
  TeacherDashboardNotificationType,
  { icon: typeof Radio; ring: string; bg: string; color: string }
> = {
  live: {
    icon: Radio,
    ring: "ring-[#ffd4d4]",
    bg: "bg-[#fff0f0]",
    color: "text-primary",
  },
  assignment: {
    icon: FileText,
    ring: "ring-[#e9d5ff]",
    bg: "bg-[#faf5ff]",
    color: "text-[#a855f7]",
  },
  discussion: {
    icon: MessageCircle,
    ring: "ring-[#bfdbfe]",
    bg: "bg-[#eff6ff]",
    color: "text-[#3c91ff]",
  },
};

function TeacherNotificationIcon({ type }: { type: TeacherDashboardNotificationType }) {
  const { icon: Icon, ring, bg, color } = notificationIconConfig[type];

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ring-inset",
        bg,
        ring
      )}
    >
      <Icon className={cn("h-[18px] w-[18px]", color)} strokeWidth={2} />
    </div>
  );
}

function TeacherNotificationItem({ notification }: { notification: TeacherDashboardNotification }) {
  return (
    <article className="flex gap-3.5 px-5 py-4 sm:px-6">
      <TeacherNotificationIcon type={notification.type} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[13px] font-bold leading-snug text-[#111827] sm:text-[14px]">
            {notification.title}
          </h3>
          <span className="shrink-0 text-[11px] leading-none text-[#9ca3af] sm:text-[12px]">
            {notification.timeAgo}
          </span>
        </div>
        <p className="mt-1.5 text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
          {notification.description}
        </p>
      </div>
    </article>
  );
}

interface TeacherNotificationsCardProps {
  notifications: TeacherDashboardNotification[];
  emptyState: TeacherDashboardEmptyStateData;
  viewAllHref?: string;
  className?: string;
}

export function TeacherNotificationsCard({
  notifications,
  emptyState,
  viewAllHref = "#",
  className,
}: TeacherNotificationsCardProps) {
  const hasNotifications = notifications.length > 0;

  return (
    <TeacherDashboardPanel
      title="Notifications"
      className={cn(hasNotifications ? "min-h-0" : "min-h-[240px]", className)}
      action={
        hasNotifications ? (
          <Link
            href={viewAllHref}
            className="text-[13px] font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
          >
            View All
          </Link>
        ) : undefined
      }
    >
      {hasNotifications ? (
        <div className="divide-y divide-[#f3f4f6]">
          {notifications.map((notification) => (
            <TeacherNotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      ) : (
        <TeacherDashboardEmptyState
          icon={<TeacherEmptyIllustration size="sm" />}
          message={emptyState.message}
          className="py-8 sm:py-10"
        />
      )}
    </TeacherDashboardPanel>
  );
}
