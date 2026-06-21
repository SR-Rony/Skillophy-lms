import Image from "next/image";
import Link from "next/link";
import { FileText, MessageCircleQuestion, Radio, X } from "lucide-react";
import type {
  StudentNotification,
  StudentNotificationGroup,
  StudentNotificationType,
} from "@/types/student-notifications.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

const notificationEmptyImage = "/images/notification 1.png";

const notificationIconConfig: Record<
  StudentNotificationType,
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
  cancelled: {
    icon: X,
    ring: "ring-[#e5e7eb]",
    bg: "bg-[#f3f4f6]",
    color: "text-[#6b7280]",
  },
};

export function StudentNotificationIcon({
  type,
  isUnread,
  className,
}: {
  type: StudentNotificationType;
  isUnread?: boolean;
  className?: string;
}) {
  const { icon: Icon, ring, bg, color } = notificationIconConfig[type];

  return (
    <div className={cn("relative shrink-0", className)}>
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

export function StudentNotificationItem({
  notification,
  compact = false,
}: {
  notification: StudentNotification;
  compact?: boolean;
}) {
  return (
    <article className={cn("flex gap-3.5", compact ? "px-4 py-4" : "px-5 py-[18px] sm:px-6")}>
      <StudentNotificationIcon type={notification.type} isUnread={notification.isUnread} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[13px] font-bold leading-snug text-[#1a1a1a] sm:text-[14px]">
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

export function StudentNotificationEmptyState({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-white text-center",
        compact ? "px-6 py-10" : "px-6 py-16 sm:py-20"
      )}
    >
      <Image
        src={notificationEmptyImage}
        alt=""
        width={compact ? 96 : 120}
        height={compact ? 96 : 120}
        className={cn("object-contain", compact ? "h-24 w-24" : "h-[120px] w-[120px]")}
      />

      <h3 className="mt-5 text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">No Notification!</h3>
      <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
        You have no notification at this time.
      </p>

      {!compact && (
        <Link
          href={ROUTES.courses}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-[14px] font-bold text-white transition-colors hover:bg-primary/90 sm:text-[15px]"
        >
          Explore Courses
        </Link>
      )}
    </div>
  );
}

export function StudentNotificationGroupList({
  groups,
  compact = false,
}: {
  groups: StudentNotificationGroup[];
  compact?: boolean;
}) {
  return (
    <div className="divide-y divide-[#f3f4f6]">
      {groups.map((group) => (
        <section key={group.label}>
          <p
            className={cn(
              "border-b border-[#f3f4f6] text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af]",
              compact ? "px-4 py-3" : "px-5 py-3.5 sm:px-6"
            )}
          >
            {group.label}
          </p>
          <div className="divide-y divide-[#f3f4f6]">
            {group.notifications.map((notification) => (
              <StudentNotificationItem
                key={notification.id}
                notification={notification}
                compact={compact}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function filterNotificationGroups(
  groups: StudentNotificationGroup[],
  tab: "all" | "unread"
): StudentNotificationGroup[] {
  if (tab === "all") {
    return groups;
  }

  return groups
    .map((group) => ({
      ...group,
      notifications: group.notifications.filter((notification) => notification.isUnread),
    }))
    .filter((group) => group.notifications.length > 0);
}
