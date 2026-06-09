"use client";

import { PerksBenefitsSection } from "@/components/public/perks-benefits-section";
import { careerPerksBenefitsData } from "@/components/public/career/data/career-perks-benefits.data";

export function CareerPerksBenefitsSection() {
  return <PerksBenefitsSection {...careerPerksBenefitsData} />;
}
