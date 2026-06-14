import type { LucideIcon } from "lucide-react";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

export interface ComingSoonSocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | "x";
  featured?: boolean;
}

export const comingSoonPageData = {
  title: "We are Coming Soon",
  subtitle: "Be the first to know when our new site is live",
  emailLabel: "Email",
  emailPlaceholder: "rakib@gmail.com",
  submitLabel: "Submit",
  launchDate: "2026-07-01T00:00:00+06:00",
  followUsLabel: "Follow us",
  countdownLabels: ["Days", "Hours", "Minutes", "Seconds"] as const,
  socialLinks: [
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      featured: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://whatsapp.com",
      icon: MessageCircle,
    },
    {
      id: "x",
      label: "X",
      href: "https://x.com",
      icon: "x" as const,
    },
  ] satisfies ComingSoonSocialLink[],
};
