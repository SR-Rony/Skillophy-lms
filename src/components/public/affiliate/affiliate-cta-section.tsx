"use client";

import { CtaBannerSection } from "@/components/public/cta-banner-section";
import { affiliateCtaData } from "@/components/public/affiliate/data/affiliate-cta.data";

export function AffiliateCtaSection() {
  return <CtaBannerSection {...affiliateCtaData} />;
}
