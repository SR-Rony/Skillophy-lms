import type { BreadcrumbItem } from "@/types";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="space-y-1">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
            {breadcrumbs.map((item, i) => (
              <span key={item.label}>
                {i > 0 && " / "}
                {item.href ? (
                  <a href={item.href} className="hover:text-foreground">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </nav>
        )}
        <Heading as="h1" variant="page-header">{title}</Heading>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}
