import { Inbox } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center",
        className
      )}
    >
      <Inbox className="mb-4 h-12 w-12 text-muted-foreground/50" />
      <Heading as="h3" variant="empty-state">{title}</Heading>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
