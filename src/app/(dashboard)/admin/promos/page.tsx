import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Promo & Discounts" };

export default function AdminPromosPage() {
  return (
    <ModulePlaceholder
      title="Promo & Discounts"
      description="Create and manage promo codes and discount campaigns."
      feature="admin/promos"
    />
  );
}
