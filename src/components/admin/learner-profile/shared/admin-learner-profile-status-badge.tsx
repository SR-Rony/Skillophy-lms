import { cn } from "@/utils";

export type AdminLearnerProfileStatus = "completed" | "ongoing" | "upcoming";

const statusStyles: Record<AdminLearnerProfileStatus, string> = {
  completed: "border border-[#86efac] bg-[#dcfce7] text-[#15803d]",
  ongoing: "border border-[#fdba74] bg-[#ffedd5] text-[#9a3412]",
  upcoming: "border border-[#93c5fd] bg-[#dbeafe] text-[#1d4ed8]",
};

const statusLabels: Record<AdminLearnerProfileStatus, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  upcoming: "Upcoming",
};

interface AdminLearnerProfileStatusBadgeProps {
  status: AdminLearnerProfileStatus;
}

export function AdminLearnerProfileStatusBadge({ status }: AdminLearnerProfileStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-semibold leading-none sm:text-[13px]",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
