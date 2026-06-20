import { cn } from "@/utils";

interface AccountSettingsTabPlaceholderProps {
  title: string;
  className?: string;
}

export function AccountSettingsTabPlaceholder({
  title,
  className,
}: AccountSettingsTabPlaceholderProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-[#ebe8e6] bg-white px-6 py-16 text-center",
        className
      )}
    >
      <p className="text-[16px] font-semibold text-[#1a1a1a]">{title}</p>
      <p className="mt-2 text-sm text-[#9ca3af]">This section will be available soon.</p>
    </div>
  );
}
