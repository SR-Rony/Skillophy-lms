import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Categories" };

export default function AdminCategoriesPage() {
  return (
    <ModulePlaceholder
      title="Categories"
      description="Organize courses with categories and subcategories."
      feature="admin/categories"
    />
  );
}
