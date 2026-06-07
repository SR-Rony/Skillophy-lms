export type PricingPlanIcon = "lightbulb" | "rocket" | "zap";

export type PricingPlanCtaVariant = "outline" | "primary";

export interface PricingPlanFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  icon: PricingPlanIcon;
  userBadge: string;
  userBadgeTone?: "default" | "primary";
  title: string;
  subtitle: string;
  priceLabel: string;
  priceSuffix?: string;
  features: PricingPlanFeature[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: PricingPlanCtaVariant;
  highlighted?: boolean;
  popular?: boolean;
}

export interface PricingSectionData {
  label: string;
  title: string;
  plans: PricingPlan[];
}
