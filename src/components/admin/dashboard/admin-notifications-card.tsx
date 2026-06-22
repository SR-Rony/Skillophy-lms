import Image from "next/image";
import Link from "next/link";
import { Bell, MessageCircle, Radio } from "lucide-react";
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
  { icon: typeof Radio; ring: string; bg: string; color: string }
> = {
  live: {
    icon: Radio,
    ring: "ring-[#ffd4d4]",
    bg: "bg-[#fff0f0]",
    color: "text-primary",
  },
  course: {
    icon: Bell,
    ring: "ring-[#fde68a]",
    bg: "bg-[#fffbeb]",
    color: "text-[#f59e0b]",
  },
  user: {
    icon: Bell,
    ring: "ring-[#fde68a]",
    bg: "bg-[#fffbeb]",
    color: "text-[#f59e0b]",
  },
  discussion: {
    icon: MessageCircle,
    ring: "ring-[#bfdbfe]",
    bg: "bg-[#eff6ff]",
    color: "text-[#3c91ff]",
  },
};

function AdminNotificationIcon({ type }: { type: AdminDashboardNotificationType }) {
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

function AdminNotificationItem({ notification }: { notification: AdminDashboardNotification }) {
  return (
    <article className="flex gap-3.5 px-5 py-4 sm:px-6">
      <AdminNotificationIcon type={notification.type} />
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

  return (
    <TeacherDashboardPanel
      title="Notifications"
      className={cn("min-h-[360px]", hasNotifications && "max-h-[360px]")}
      action={
        <Link
          href={viewAllHref}
          className="text-[13px] font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          View All
        </Link>
      }
    >
      {hasNotifications ? (
        <div className="max-h-[300px] divide-y divide-[#f3f4f6] overflow-y-auto">
          {notifications.map((notification) => (
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
          className="py-10 sm:py-12"
        />
      )}
    </TeacherDashboardPanel>
  );
}
