import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Workshop" };

export default function AdminWorkshopPage() {
  return (
    <ModulePlaceholder
      title="Workshop"
      description="Manage workshops, schedules, and registrations."
      feature="admin/workshop"
    />
  );
}
