"use client";

import { EmployeeSpotlightCard } from "@/components/public/employee-spotlight-card";
import { SpotlightSliderSection } from "@/components/public/spotlight-slider-section";
import { affiliateBestAffiliatesData } from "@/components/public/affiliate/data/affiliate-best-affiliates.data";

export function AffiliateBestAffiliatesSection() {
  const { title, description, affiliates } = affiliateBestAffiliatesData;

  return (
    <SpotlightSliderSection
      title={title}
      description={description}
      items={affiliates}
      getItemKey={(affiliate) => affiliate.id}
      renderItem={(affiliate) => <EmployeeSpotlightCard employee={affiliate} />}
      ariaLabelPrefix="best affiliates"
      itemsPerPage={{ lg: 2, md: 2, sm: 1, default: 1 }}
      slideDotCount={2}
    />
  );
}
