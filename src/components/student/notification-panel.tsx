import Link from "next/link";
import { Bell, FileText, MessageCircleQuestion, Radio } from "lucide-react";
import { DashboardEmptyState } from "@/components/shared/dashboard-empty-state";
import type {
  DashboardNotification,
  DashboardNotificationType,
} from "@/data/mock/student-dashboard.mock";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface NotificationPanelProps {
  notifications: DashboardNotification[];
  className?: string;
}

const notificationIconConfig: Record<
  DashboardNotificationType,
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
  quiz: {
    icon: MessageCircleQuestion,
    ring: "ring-[#bfdbfe]",
    bg: "bg-[#eff6ff]",
    color: "text-[#3c91ff]",
  },
};

function NotificationIcon({
  type,
  isUnread,
}: {
  type: DashboardNotificationType;
  isUnread?: boolean;
}) {
  const { icon: Icon, ring, bg, color } = notificationIconConfig[type];

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
      {isUnread && (
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary" />
      )}
    </div>
  );
}

function NotificationItem({ notification }: { notification: DashboardNotification }) {
  return (
    <article className="flex gap-3.5 px-5 py-[18px]">
      <NotificationIcon type={notification.type} isUnread={notification.isUnread} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[13px] font-bold leading-snug text-[#1a1a1a]">
            {notification.title}
          </h3>
          <span className="shrink-0 text-[11px] leading-none text-[#9ca3af]">
            {notification.timeAgo}
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-[#9ca3af]">{notification.description}</p>
      </div>
    </article>
  );
}

export function NotificationPanel({ notifications, className }: NotificationPanelProps) {
  const hasNotifications = notifications.length > 0;

  return (
    <aside
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-[#f3f4f6] px-5 py-[18px]">
        <h2 className="text-base font-bold text-[#1a1a1a]">Notifications</h2>
        {hasNotifications && (
          <Link
            href={ROUTES.student.root}
            className="text-[13px] font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
          >
            View All
          </Link>
        )}
      </div>

      {hasNotifications ? (
        <div className="flex-1 divide-y divide-[#f3f4f6]">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
          <DashboardEmptyState
            icon={
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e6]">
                <Bell className="h-8 w-8 fill-[#ffca18] text-[#ffca18]" strokeWidth={1.5} />
              </div>
            }
            title="You have no notification at this time."
          />
        </div>
      )}
    </aside>
  );
}
