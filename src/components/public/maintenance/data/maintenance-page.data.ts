import type { LucideIcon } from "lucide-react";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

export interface MaintenanceSocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | "x";
}

export const maintenancePageData = {
  title: "Oops! Site Under Maintenance",
  description:
    "We're currently working on creating something fantastic. We'll be here soon.",
  imageSrc: "/images/maintenance.png",
  imageAlt: "Workers maintaining site gears illustration",
  imageWidth: 360,
  imageHeight: 332,
  socialLinks: [
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
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
  ] satisfies MaintenanceSocialLink[],
};
