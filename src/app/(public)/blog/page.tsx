import { PageHeader } from "@/components/shared/page-header";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Blog" description="Insights, tutorials, and product updates." />
      <p className="mt-8 text-muted-foreground">Blog module placeholder.</p>
    </div>
  );
}
