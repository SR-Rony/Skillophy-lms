import { ROUTES } from "@/constants";
import type { CtaBannerSectionProps } from "@/types/cta-banner.types";

export const affiliateCtaData: CtaBannerSectionProps = {
  title: "Ready to Get Started?",
  description:
    "Don't miss out on the opportunity to be part of the edutech revolution. Sign up as an affiliate partner today and start earning commissions while helping learners around the world unlock their full potential with Skillophy.",
  ctaLabel: "Join Us Today",
  ctaHref: ROUTES.auth.register,
};
