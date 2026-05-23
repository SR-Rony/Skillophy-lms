import { PageHeader } from "./page-header";

interface ModulePlaceholderProps {
  title: string;
  description?: string;
  feature?: string;
}

/** Scaffold page for dashboard routes until feature UI is built */
export function ModulePlaceholder({
  title,
  description,
  feature,
}: ModulePlaceholderProps) {
  return (
    <div className="space-y-8">
      <PageHeader title={title} description={description} />
      <p className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
        {feature
          ? `Implement in features/${feature}/ — see docs/FRONTEND_STRUCTURE.md`
          : "Feature UI coming soon."}
      </p>
    </div>
  );
}
