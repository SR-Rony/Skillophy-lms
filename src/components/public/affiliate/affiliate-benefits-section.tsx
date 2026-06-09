"use client";

import { PerksBenefitsSection } from "@/components/public/perks-benefits-section";
import { affiliateBenefitsData } from "@/components/public/affiliate/data/affiliate-benefits.data";

export function AffiliateBenefitsSection() {
  return <PerksBenefitsSection {...affiliateBenefitsData} className="bg-white" />;
}
