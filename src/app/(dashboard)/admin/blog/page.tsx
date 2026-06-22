import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Blog" };

export default function AdminBlogPage() {
  return (
    <ModulePlaceholder
      title="Blog"
      description="Manage blog posts, categories, and publishing."
      feature="admin/blog"
    />
  );
}
