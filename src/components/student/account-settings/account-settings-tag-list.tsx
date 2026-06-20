import { cn } from "@/utils";

interface AccountSettingsTagListProps {
  items: string[];
  className?: string;
}

export function AccountSettingsTagList({ items, className }: AccountSettingsTagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5 sm:gap-3", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex rounded-lg border border-[#ebe8e6] bg-white px-3.5 py-2 text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
