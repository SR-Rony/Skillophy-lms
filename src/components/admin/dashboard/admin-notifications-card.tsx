import Image from "next/image";
import Link from "next/link";
import { Bell, MessageCircleQuestion, Radio } from "lucide-react";
import { TeacherDashboardEmptyState } from "@/components/teacher/dashboard/teacher-dashboard-empty-state";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import type {
  AdminDashboardEmptyState,
  AdminDashboardNotification,
  AdminDashboardNotificationType,
} from "@/types/admin-dashboard.types";
import { cn } from "@/utils";

const notificationEmptyImage = "/images/notification 1.png";

const notificationIconConfig: Record<
  AdminDashboardNotificationType,
  { icon: typeof Radio; ring: string; bg: string; color: string; showDot: boolean }
> = {
  live: {
    icon: Radio,
    ring: "ring-[#ffd4d4]",
    bg: "bg-[#fff0f0]",
    color: "text-primary",
    showDot: true,
  },
  course: {
    icon: Bell,
    ring: "ring-[#fde68a]",
    bg: "bg-[#fffbeb]",
    color: "text-[#f59e0b]",
    showDot: true,
  },
  user: {
    icon: Bell,
    ring: "ring-[#fde68a]",
    bg: "bg-[#fffbeb]",
    color: "text-[#f59e0b]",
    showDot: true,
  },
  discussion: {
    icon: MessageCircleQuestion,
    ring: "ring-[#bfdbfe]",
    bg: "bg-[#eff6ff]",
    color: "text-[#3c91ff]",
    showDot: false,
  },
};

function AdminNotificationIcon({ type }: { type: AdminDashboardNotificationType }) {
  const { icon: Icon, ring, bg, color, showDot } = notificationIconConfig[type];

  return (
    <div className="relative shrink-0">
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-inset",
          bg,
          ring
        )}
      >
        <Icon className={cn("h-[18px] w-[18px]", color)} strokeWidth={2} />
      </div>
      {showDot && (
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary" />
      )}
    </div>
  );
}

function AdminNotificationItem({ notification }: { notification: AdminDashboardNotification }) {
  return (
    <article className="flex gap-3 px-5 py-[18px] sm:px-6">
      <AdminNotificationIcon type={notification.type} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[13px] font-bold leading-snug text-[#111827] sm:text-[14px]">
            {notification.title}
          </h3>
          <span className="shrink-0 text-[11px] leading-none text-[#9ca3af] sm:text-[12px]">
            {notification.timeAgo}
          </span>
        </div>
        <p className="mt-1.5 text-[12px] leading-[1.55] text-[#9ca3af] sm:text-[13px]">
          {notification.description}
        </p>
      </div>
    </article>
  );
}

interface AdminNotificationsCardProps {
  notifications: AdminDashboardNotification[];
  emptyState: AdminDashboardEmptyState;
  viewAllHref: string;
}

export function AdminNotificationsCard({
  notifications,
  emptyState,
  viewAllHref,
}: AdminNotificationsCardProps) {
  const hasNotifications = notifications.length > 0;
  const visibleNotifications = notifications.slice(0, 4);

  return (
    <TeacherDashboardPanel
      title="Notifications"
      className="min-h-[420px]"
      action={
        <Link
          href={viewAllHref}
          className="text-[13px] font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          View All
        </Link>
      }
      contentClassName="flex min-h-0 flex-1 flex-col"
    >
      {hasNotifications ? (
        <div className="divide-y divide-[#f3f4f6]">
          {visibleNotifications.map((notification) => (
            <AdminNotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      ) : (
        <TeacherDashboardEmptyState
          icon={
            <Image
              src={notificationEmptyImage}
              alt=""
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
            />
          }
          message={emptyState.message}
          className="flex-1 py-10 sm:py-12"
        />
      )}
    </TeacherDashboardPanel>
  );
}
