import {
  CharitableMatchingIcon,
  EmergencyLoanIcon,
  FestiveBonusesIcon,
  HolisticCareIcon,
  LearningIncentivesIcon,
  ParentalBenefitsIcon,
} from "@/components/public/perks-benefits-icons";
import type { PerksBenefitsSectionProps } from "@/types/perks-benefits.types";

export const affiliateBenefitsData: PerksBenefitsSectionProps = {
  label: "Benefits",
  title: "Why Join Skillophy Affiliate?",
  description:
    "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
  items: [
    {
      id: "earn-at-home",
      title: "Earn at Home",
      description:
        "Free access to Skillophy courses and Skillophy Business, plus a yearly budget to spend on your professional developemnts.",
      icon: <LearningIncentivesIcon className="h-12 w-12" />,
    },
    {
      id: "interactive-dashboard",
      title: "Interactive Dashboard",
      description:
        "Mental health is vital. Look after yours with free access to the entire Headspace library. You can also access free coaching and therapy sessions.",
      icon: <HolisticCareIcon className="h-12 w-12" />,
    },
    {
      id: "interesting-contents",
      title: "Interesting Contents",
      description:
        "We reimburse eligible fertility, adoption, and surrogacy expenses up to a lifetime limit, along with access to Maven for reproductive health.",
      icon: <ParentalBenefitsIcon className="h-12 w-12" />,
    },
    {
      id: "training-sessions",
      title: "Training Sessions",
      description:
        "Support a cause that matters to you. We match your donations up to an annual limit for eligible non-profits and charities.",
      icon: <CharitableMatchingIcon className="h-12 w-12" />,
    },
    {
      id: "commission-structure",
      title: "Commission Structure",
      description:
        "Our emergency loan facilities come with flexible EMIs, providing a safety net when you need it most.",
      icon: <EmergencyLoanIcon className="h-12 w-12" />,
    },
    {
      id: "super-seller-campaign",
      title: "Super Seller Campaign",
      description:
        "Free access to Skillophy courses and Skillophy Business, plus a yearly budget to spend on your professional developemnts.",
      icon: <FestiveBonusesIcon className="h-12 w-12" />,
    },
  ],
};
