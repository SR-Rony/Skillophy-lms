import { createElement, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingVariant =
  | "hero"
  | "section"
  | "section-lg"
  | "section-left"
  | "trusted-clients"
  | "auth"
  | "page-title"
  | "page-title-compact"
  | "page-hero"
  | "page-hero-soft"
  | "page-hero-centered"
  | "page-hero-large"
  | "display"
  | "display-bold"
  | "display-dark"
  | "display-feature"
  | "section-md"
  | "section-md-dark"
  | "section-md-black"
  | "section-sm"
  | "section-sm-black"
  | "section-xs"
  | "legal-section"
  | "legal-subsection"
  | "course-detail-section"
  | "course-detail-section-lg"
  | "course-detail-card"
  | "course-detail-sidebar"
  | "course-detail-promo"
  | "course-detail-promo-sm"
  | "course-card"
  | "course-card-sm"
  | "card-title"
  | "card-title-sm"
  | "card-title-xs"
  | "card-display"
  | "card-display-sm"
  | "card-display-inverse"
  | "blog-section"
  | "help-section"
  | "help-label"
  | "dashboard-page"
  | "dashboard-page-sm"
  | "dashboard-page-compact"
  | "dashboard-section"
  | "dashboard-section-bold"
  | "dashboard-card"
  | "dashboard-panel"
  | "dashboard-success"
  | "dashboard-certificate"
  | "testimonial-quote"
  | "testimonial-name"
  | "empty-state"
  | "page-header"
  | "section-header-light"
  | "section-header-dark"
  | "nav-menu"
  | "nav-menu-mobile"
  | "nav-card"
  | "feature-panel"
  | "quiz"
  | "muted-label"
  | "podcast-title"
  | "podcast-sidebar"
  | "podcast-share"
  | "podcast-episode"
  | "podcast-similar"
  | "checkout-section"
  | "job-title"
  | "job-section"
  | "position-card"
  | "team-name"
  | "team-name-inverse"
  | "footer-column";

export const headingVariantClassNames: Record<HeadingVariant, string> = {
  hero: "text-[40px] font-extrabold leading-[1.2] tracking-[0.02em] text-[#24201f] sm:text-[52px] lg:text-[62px]",
  section: "text-[48px] font-bold leading-[1.1] tracking-normal text-[#24201f]",
  "section-lg":
    "text-[32px] font-bold leading-[1.1] tracking-normal text-[#24201f] sm:text-[40px] lg:text-[48px]",
  "section-left":
    "text-left text-[32px] font-bold leading-[1.1] tracking-normal text-[#24201f] sm:text-[36px] lg:text-[40px]",
  "trusted-clients":
    "font-sans text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f]",
  auth: "text-[28px] font-black leading-[1.15] tracking-[-0.03em] text-[#1a1a1a] sm:text-[32px]",
  "page-title":
    "text-[28px] font-bold leading-tight text-[#24201f] sm:text-[34px] lg:text-[40px]",
  "page-title-compact":
    "max-w-3xl text-[26px] font-bold leading-tight text-[#24201f] sm:text-[32px] lg:text-[36px]",
  "page-hero":
    "text-[32px] font-black tracking-[-0.03em] text-[#1a1a1a] sm:text-[40px] lg:text-[44px]",
  "page-hero-soft":
    "text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#24201f] sm:text-[40px] lg:text-[48px]",
  "page-hero-centered":
    "mx-auto max-w-[900px] text-[32px] font-bold leading-[1.12] tracking-normal text-[#1a1a1a] sm:text-[40px] lg:text-[48px]",
  "page-hero-large":
    "mt-6 text-[32px] font-black leading-[1.12] tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px] lg:text-[40px]",
  display:
    "text-[34px] font-black leading-[1.12] tracking-[-0.04em] text-[#1a1a1a] sm:text-[42px] lg:text-[48px]",
  "display-bold":
    "text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1a1a1a] sm:text-[42px] lg:text-[48px]",
  "display-dark":
    "text-[34px] font-black leading-[1.12] tracking-[-0.045em] text-[#24201f] sm:text-[40px] lg:text-[44px]",
  "display-feature":
    "text-[34px] font-black leading-tight tracking-[-0.04em] sm:text-[42px] lg:text-[46px]",
  "section-md":
    "text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f] sm:text-[36px] lg:text-[40px]",
  "section-md-dark":
    "text-[32px] font-bold leading-[1.2] tracking-normal text-[#1a1a1a] sm:text-[36px] lg:text-[40px]",
  "section-md-black":
    "max-w-[440px] text-[32px] font-black leading-[1.15] tracking-[-0.045em] text-[#292323] sm:text-[38px] lg:text-[38px]",
  "section-sm":
    "text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f] sm:text-[36px] lg:text-[40px]",
  "section-sm-black":
    "text-[22px] font-black tracking-[-0.03em] text-[#1a1a1a] sm:text-[24px]",
  "section-xs":
    "text-[22px] font-bold leading-[1.35] tracking-normal text-[#141414] sm:text-[24px] lg:text-[26px]",
  "legal-section":
    "text-[22px] font-bold leading-snug text-[#111827] sm:text-[24px]",
  "legal-subsection": "text-[16px] font-bold text-[#111827] sm:text-[17px]",
  "course-detail-section":
    "text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]",
  "course-detail-section-lg":
    "text-[24px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[28px]",
  "course-detail-card": "text-[20px] font-bold text-[#1a1a1a] sm:text-[22px]",
  "course-detail-sidebar":
    "text-[18px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[20px]",
  "course-detail-promo":
    "text-[18px] font-bold leading-[1.35] tracking-[-0.01em] text-[#1a1a1a] sm:text-[20px]",
  "course-detail-promo-sm":
    "text-[16px] font-bold leading-snug text-[#1a1a1a] sm:text-[18px]",
  "course-card":
    "text-[20px] font-bold leading-[1.35] tracking-[-0.01em] text-[#1a1a1a]",
  "course-card-sm":
    "text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#24201f] sm:text-[19px]",
  "card-title": "text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#111827]",
  "card-title-sm": "text-[18px] font-bold tracking-[-0.01em] text-[#24201f] sm:text-[20px]",
  "card-title-xs": "text-[15px] font-bold leading-[1.4] text-[#24201f] sm:text-[16px]",
  "card-display":
    "min-h-[48px] text-[19px] font-black leading-[1.18] tracking-[-0.02em] text-[#282221] sm:text-[21px]",
  "card-display-sm":
    "mt-3 min-h-[52px] text-[19px] font-black leading-[1.18] tracking-[-0.02em] text-[#282221] sm:text-[21px]",
  "card-display-inverse":
    "text-[21px] font-black leading-tight tracking-[-0.03em] text-white",
  "blog-section": "text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f]",
  "help-section": "text-[17px] font-bold leading-snug text-[#24201f] sm:text-[18px]",
  "help-label": "text-[15px] font-medium text-[#6f6562] sm:text-[16px]",
  "dashboard-page":
    "text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl lg:text-[32px]",
  "dashboard-page-sm":
    "text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-[28px] lg:text-[32px]",
  "dashboard-page-compact":
    "text-[22px] font-extrabold leading-tight tracking-tight text-[#1a1a1a] sm:text-[28px] lg:text-[32px]",
  "dashboard-section": "text-lg font-bold text-[#1a1a1a] sm:text-xl",
  "dashboard-section-bold":
    "text-lg font-extrabold leading-snug text-[#1a1a1a] sm:text-xl lg:text-[22px]",
  "dashboard-card":
    "mt-3 line-clamp-2 text-[17px] font-bold leading-snug tracking-tight text-[#1a1a1a]",
  "dashboard-panel": "text-base font-bold leading-snug text-[#1a1a1a] sm:text-[17px]",
  "dashboard-success": "mt-5 text-xl font-extrabold text-[#16a34a]",
  "dashboard-certificate": "text-xl font-extrabold text-[#1a1a1a] sm:text-2xl",
  "testimonial-quote": "text-[13px] font-black leading-none text-[#2d2625]",
  "testimonial-name":
    "text-[22px] font-bold leading-[1.35] tracking-normal text-[#141414] sm:text-[24px] lg:text-[26px]",
  "empty-state": "text-lg font-semibold",
  "page-header": "text-2xl font-bold tracking-tight md:text-3xl",
  "section-header-light": "text-xl font-bold tracking-tight text-[#1a1a1a] sm:text-2xl",
  "section-header-dark": "text-xl font-bold tracking-tight text-white sm:text-2xl",
  "nav-menu": "mb-4 text-[19px] font-black tracking-[-0.03em] text-[#25201f]",
  "nav-menu-mobile": "mb-4 text-[21px] font-black tracking-[-0.03em] text-[#25201f]",
  "nav-card":
    "line-clamp-2 text-[15px] font-black leading-snug tracking-[-0.02em] text-[#25201f]",
  "feature-panel":
    "text-[21px] font-black leading-tight tracking-[-0.03em] text-white",
  quiz: "text-[24px] font-black leading-[1.3] tracking-[-0.02em] text-white antialiased sm:text-[28px]",
  "muted-label": "text-[13px] font-bold leading-snug text-[#1a1a1a]",
  "podcast-title":
    "mt-3 text-[24px] font-bold leading-[1.25] tracking-[-0.02em] text-[#111827] sm:text-[28px]",
  "podcast-sidebar": "text-[20px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[22px]",
  "podcast-share": "text-[18px] font-bold text-[#1a1a1a]",
  "podcast-episode":
    "mt-3 line-clamp-2 text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#111827]",
  "podcast-similar":
    "mt-2 line-clamp-2 text-[15px] font-bold leading-[1.35] text-[#111827] transition group-hover:text-primary",
  "checkout-section":
    "text-[18px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[20px]",
  "job-title":
    "text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#24201f] sm:text-[34px]",
  "job-section": "text-[18px] font-bold tracking-[-0.01em] text-[#24201f] sm:text-[20px]",
  "position-card": "text-[15px] font-bold text-[#1a1a1a]",
  "team-name":
    "text-[20px] font-black leading-[1.16] tracking-[-0.02em] text-[#282221]",
  "team-name-inverse":
    "text-[20px] font-black leading-none tracking-[-0.02em] text-white",
  "footer-column": "text-[15px] font-bold text-[#24201f]",
};

/** @deprecated Use `getHeadingClassName("section")` or `<Heading variant="section" />` */
export const sectionHeadingClassName = headingVariantClassNames.section;

/** @deprecated Use `getHeadingClassName("hero")` or `<Heading variant="hero" />` */
export const heroHeadingClassName = headingVariantClassNames.hero;

/** @deprecated Use `getHeadingClassName("trusted-clients")` */
export const trustedClientsHeadingClassName = headingVariantClassNames["trusted-clients"];

/** @deprecated Use `getHeadingClassName("auth")` */
export const authHeadingClassName = headingVariantClassNames.auth;

/** @deprecated Use `getHeadingClassName("blog-section")` */
export const blogDetailsSectionHeadingClassName = headingVariantClassNames["blog-section"];

export function getHeadingClassName(variant: HeadingVariant, className?: string) {
  return cn(headingVariantClassNames[variant], className);
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: HeadingLevel;
  variant: HeadingVariant;
  children: ReactNode;
  className?: string;
}

export function Heading({ as, variant, children, className, ...props }: HeadingProps) {
  return createElement(
    as,
    {
      className: getHeadingClassName(variant, className),
      ...props,
    },
    children
  );
}
