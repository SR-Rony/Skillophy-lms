import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Analytics" };

export default function AdminAnalyticsPage() {
  return (
    <ModulePlaceholder
      title="Platform analytics"
      description="Growth, revenue, and engagement overview."
      feature="analytics"
    />
  );
}
