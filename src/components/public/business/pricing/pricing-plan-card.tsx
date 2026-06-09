import Link from "next/link";
import { Check, Lightbulb, Rocket, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PricingPlan, PricingPlanIcon } from "@/components/public/business/pricing/types";
import { cn } from "@/utils";

const planIcons: Record<
  PricingPlanIcon,
  { icon: typeof Lightbulb; className: string }
> = {
  lightbulb: { icon: Lightbulb, className: "text-[#f5b301]" },
  rocket: { icon: Rocket, className: "text-primary" },
  zap: { icon: Zap, className: "text-[#f59e0b]" },
};

interface PricingPlanCardProps {
  plan: PricingPlan;
}

export function PricingPlanCard({ plan }: PricingPlanCardProps) {
  const { icon: Icon, className: iconClassName } = planIcons[plan.icon];
  const isHighlighted = plan.highlighted;

  return (
    <article
      className={cn(
        "group/card relative flex h-full flex-col rounded-[20px] border bg-white p-6 shadow-[0_10px_30px_rgba(80,37,31,0.06)] transition-all duration-300 sm:p-7",
        "hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_40px_rgba(255,71,71,0.14)] hover:ring-1 hover:ring-primary/15",
        isHighlighted
          ? "border-primary shadow-[0_16px_40px_rgba(255,71,71,0.12)] hover:shadow-[0_20px_48px_rgba(255,71,71,0.2)]"
          : "border-[#ece6e3]"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold text-white shadow-[0_8px_18px] shadow-primary/24">
          <Sparkles className="h-3 w-3" aria-hidden />
          Most Popular
          <Sparkles className="h-3 w-3" aria-hidden />
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#faf9f8]">
          <Icon className={cn("h-5 w-5", iconClassName)} aria-hidden />
        </span>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-[11px] font-semibold",
            plan.userBadgeTone === "primary"
              ? "bg-primary/10 text-primary"
              : "bg-[#f3f3f2] text-[#6f6562]"
          )}
        >
          {plan.userBadge}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-[22px] font-black tracking-[-0.03em] text-[#1a1a1a]">{plan.title}</h3>
        <p className="mt-1 text-[13px] font-medium text-[#6f6562]">{plan.subtitle}</p>
      </div>

      <div className="mt-6 border-t border-[#ece6e3] pt-6">
        <p className="flex flex-wrap items-end gap-x-1">
          <span className="text-[34px] font-black leading-none tracking-[-0.03em] text-primary-dark sm:text-[38px]">
            {plan.priceLabel}
          </span>
          {plan.priceSuffix && (
            <span className="pb-1 text-[14px] font-medium text-[#6f6562]">{plan.priceSuffix}</span>
          )}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                feature.included
                  ? "bg-primary text-white"
                  : "border border-[#ece6e3] bg-[#faf9f8] text-[#c4bbb8]"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
            </span>
            <span
              className={cn(
                "text-[13px] leading-[1.5] sm:text-[14px]",
                feature.included ? "font-medium text-[#3c3332]" : "font-medium text-[#c4bbb8]"
              )}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={plan.ctaVariant === "primary" ? "publicCta" : "outline"}
        size="publicCta"
        className={cn(
          "mt-8 w-full rounded-[14px] transition-all duration-300",
          plan.ctaVariant === "primary" &&
            "group-hover/card:-translate-y-0.5 group-hover/card:shadow-[0_14px_28px] group-hover/card:shadow-primary/24 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_16px_32px] hover:shadow-primary/28 active:translate-y-0 active:bg-primary/95",
          plan.ctaVariant === "outline" &&
            "h-[52px] border-[#1a1a1a] bg-white text-[13px] font-black text-[#1a1a1a] shadow-none group-hover/card:border-primary group-hover/card:bg-primary group-hover/card:text-white group-hover/card:shadow-[0_14px_28px] group-hover/card:shadow-primary/24 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_14px_28px] hover:shadow-primary/24 active:bg-primary/95"
        )}
      >
        <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
      </Button>
    </article>
  );
}
