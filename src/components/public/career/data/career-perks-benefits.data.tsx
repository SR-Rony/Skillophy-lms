import {
  CharitableMatchingIcon,
  CompanyEventsIcon,
  EmergencyLoanIcon,
  FestiveBonusesIcon,
  HolisticCareIcon,
  InternetAllowanceIcon,
  LearningIncentivesIcon,
  ParentalBenefitsIcon,
  PerformanceBonusIcon,
} from "@/components/public/perks-benefits-icons";
import type { PerksBenefitsSectionProps } from "@/types/perks-benefits.types";

export const careerPerksBenefitsData: PerksBenefitsSectionProps = {
  title: "Perks & Benefits",
  description:
    "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
  items: [
    {
      id: "learning-incentives",
      title: "Learning Incentives",
      description:
        "Free access to Skillophy courses and Skillophy Business, plus a yearly budget to spend on your professional developemnts.",
      icon: <LearningIncentivesIcon className="h-12 w-12" />,
    },
    {
      id: "holistic-care",
      title: "Holistic Care",
      description:
        "Mental health is vital. Look after yours with free access to the entire Headspace library. You can also access free coaching and therapy sessions.",
      icon: <HolisticCareIcon className="h-12 w-12" />,
    },
    {
      id: "parental-benefits",
      title: "Parental Benefits",
      description:
        "We reimburse eligible fertility, adoption, and surrogacy expenses up to a lifetime limit, along with access to Maven for reproductive health.",
      icon: <ParentalBenefitsIcon className="h-12 w-12" />,
    },
    {
      id: "charitable-matching",
      title: "Charitable Matching",
      description:
        "Support a cause that matters to you. We match your donations up to an annual limit for eligible non-profits and charities.",
      icon: <CharitableMatchingIcon className="h-12 w-12" />,
    },
    {
      id: "emergency-loan",
      title: "Emergency Loan Facilities",
      description:
        "Our emergency loan facilities come with flexible EMIs, providing a safety net when you need it most.",
      icon: <EmergencyLoanIcon className="h-12 w-12" />,
    },
    {
      id: "festive-bonuses",
      title: "Two Festive Bonuses",
      description:
        "Celebrate twice a year with festive bonuses that recognize your contributions during Eid and year-end milestones.",
      icon: <FestiveBonusesIcon className="h-12 w-12" />,
    },
    {
      id: "performance-bonus",
      title: "Performance Bonus",
      description:
        "Twice a year, in the months of June and December, we will augment your salary with a performance bonus.",
      icon: <PerformanceBonusIcon className="h-12 w-12" />,
    },
    {
      id: "internet-allowance",
      title: "Internet Allowance",
      description:
        "Staying connected and updated is vital. We provide a generous allowance for devices and internet.",
      icon: <InternetAllowanceIcon className="h-12 w-12" />,
    },
    {
      id: "company-events",
      title: "Company Events",
      description:
        "Enjoy company celebrations, wellness events, and fun extra curricular activities like yoga, cooking classes, karaoke, and more.",
      icon: <CompanyEventsIcon className="h-12 w-12" />,
    },
  ],
};
