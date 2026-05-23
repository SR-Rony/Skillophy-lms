import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ModulePlaceholder
        title="Help Center"
        description="FAQs, tickets, and contact support."
        feature="support"
      />
    </div>
  );
}
