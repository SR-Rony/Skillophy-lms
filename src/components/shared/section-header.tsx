import Link from "next/link";
import { Badge } from "@/components/shared/badge";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface SectionHeaderProps {
  title: string;
  badge?: string;
  action?: {
    label: string;
    href: string;
  };
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  title,
  badge,
  action,
  theme = "dark",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <div className="flex items-center gap-3">
        <Heading
          as="h2"
          variant={theme === "dark" ? "section-header-dark" : "section-header-light"}
        >
          {title}
        </Heading>
        {badge && <Badge variant="new">{badge}</Badge>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
