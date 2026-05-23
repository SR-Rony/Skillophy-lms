import { PageHeader } from "@/components/shared/page-header";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Pricing"
        description="Flexible plans for individuals and teams."
      />
      {/* Feature: payments — pricing tiers UI */}
      <p className="mt-8 text-muted-foreground">Pricing module placeholder.</p>
    </div>
  );
}
