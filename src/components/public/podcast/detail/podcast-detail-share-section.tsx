import { Heading } from "@/components/shared/heading";
import type { LucideIcon } from "lucide-react";
import { Facebook, Link2, Linkedin, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.53 3H20.5l-7.19 8.21L21.5 21h-6.6l-5.16-6.73L4.1 21H1.12l7.68-8.78L2.5 3h6.77l4.67 6.17L17.53 3Zm-1.16 16.2h1.83L7.78 4.73H5.82l10.55 14.47Z" />
    </svg>
  );
}

interface PodcastShareLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | "x";
}

const shareLinks: PodcastShareLink[] = [
  { id: "facebook", label: "Share on Facebook", href: "https://facebook.com", icon: Facebook },
  { id: "linkedin", label: "Share on LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { id: "whatsapp", label: "Share on WhatsApp", href: "https://whatsapp.com", icon: MessageCircle },
  { id: "email", label: "Share via Email", href: "mailto:info@skillophy.com", icon: Mail },
  { id: "link", label: "Copy link", href: "#", icon: Link2 },
  { id: "x", label: "Share on X", href: "https://x.com", icon: "x" },
];

const shareIconClassName = cn(
  "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ece6e3] text-[#4f4747] transition duration-300",
  "hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_10px_24px] hover:shadow-primary/24",
  "active:translate-y-0 active:bg-primary active:text-white active:shadow-[0_8px_20px] active:shadow-primary/20",
);

function PodcastShareIcon({ link }: { link: PodcastShareLink }) {
  const Icon = link.icon !== "x" ? link.icon : null;

  return (
    <a
      href={link.href}
      target={link.id === "email" || link.id === "link" ? undefined : "_blank"}
      rel={link.id === "email" || link.id === "link" ? undefined : "noopener noreferrer"}
      aria-label={link.label}
      className={shareIconClassName}
    >
      {Icon ? <Icon className="h-[18px] w-[18px]" /> : <XIcon className="h-[18px] w-[18px]" />}
    </a>
  );
}

export function PodcastDetailShareSection() {
  return (
    <div className="border-t border-[#ece6e3] pt-8">
      <Heading as="h2" variant="podcast-share">Share Now</Heading>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {shareLinks.map((link) => (
          <PodcastShareIcon key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}
