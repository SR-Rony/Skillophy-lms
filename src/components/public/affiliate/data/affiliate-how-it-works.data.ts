export interface AffiliateHowItWorksStep {
  id: string;
  step: string;
  title: string;
  description: string;
  backgroundColor: string;
  badgeColor: string;
  sparkleColor: string;
}

export const affiliateHowItWorksData = {
  title: "How it Works",
  description:
    "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity. Online courses using cutting-edge technology and instructional strategies.",
  steps: [
    {
      id: "sign-up",
      step: "01",
      title: "Sign Up",
      description:
        "Joining our affiliate program is quick and easy. Simply fill out the registration form.",
      backgroundColor: "#faf4ff",
      badgeColor: "#a855f7",
      sparkleColor: "#d8b4fe",
    },
    {
      id: "promote",
      step: "02",
      title: "Promote Skillophy",
      description:
        "Start promoting our platform using your unique affiliate links, banners, and promotional materials.",
      backgroundColor: "#f5f3ff",
      badgeColor: "#7c3aed",
      sparkleColor: "#c4b5fd",
    },
    {
      id: "earn",
      step: "03",
      title: "Earn Commissions",
      description:
        "Whenever someone clicks on your affiliate link and makes a purchase on our platform, you earn a commission.",
      backgroundColor: "#eff6ff",
      badgeColor: "#3b82f6",
      sparkleColor: "#93c5fd",
    },
  ] satisfies AffiliateHowItWorksStep[],
};
