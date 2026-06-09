import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ActionCtaItem, ActionCtaTheme } from "@/types/action-cta.types";
import { cn } from "@/utils";

const themeStyles: Record<
  ActionCtaTheme,
  {
    card: string;
    accent: string;
  }
> = {
  teal: {
    card: "border-l-[#2dd4bf] border-t-[#2dd4bf] bg-[#f0fdfa] hover:bg-[#14b8a6] hover:border-[#14b8a6]",
    accent: "text-[#0d9488]",
  },
  purple: {
    card: "border-l-[#c084fc] border-t-[#c084fc] bg-[#faf5ff] hover:bg-[#9333ea] hover:border-[#9333ea]",
    accent: "text-[#9333ea]",
  },
  blue: {
    card: "border-l-[#60a5fa] border-t-[#60a5fa] bg-[#eff6ff] hover:bg-[#3b82f6] hover:border-[#3b82f6]",
    accent: "text-[#2563eb]",
  },
};

interface ActionCtaCardProps {
  item: ActionCtaItem;
}

export function ActionCtaCard({ item }: ActionCtaCardProps) {
  const { card, accent } = themeStyles[item.theme];

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex min-h-[178px] flex-col justify-between rounded-[14px] border border-transparent border-l-2 border-t-2 p-6 transition-all duration-300 sm:min-h-[190px] sm:p-7",
        card,
      )}
    >
      <span className={cn("transition-colors duration-300 group-hover:text-white", accent)}>
        {item.icon}
      </span>

      <div className="mt-8 flex items-end justify-between gap-4">
        <p className="max-w-[210px] text-[18px] font-bold leading-[1.35] tracking-[-0.02em] text-[#24201f] transition-colors duration-300 group-hover:text-white sm:text-[19px]">
          {item.title}
        </p>
        <ArrowUpRight
          className={cn(
            "h-6 w-6 shrink-0 stroke-[2] transition-colors duration-300 group-hover:text-white",
            accent,
          )}
          aria-hidden
        />
      </div>
    </Link>
  );
}
