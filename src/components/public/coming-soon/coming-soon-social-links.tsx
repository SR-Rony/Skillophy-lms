import Link from "next/link";
import {
  comingSoonPageData,
  type ComingSoonSocialLink,
} from "@/components/public/coming-soon/data/coming-soon.data";
import { cn } from "@/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.53 3H20.5l-7.19 8.21L21.5 21h-6.6l-5.16-6.73L4.1 21H1.12l7.68-8.78L2.5 3h6.77l4.67 6.17L17.53 3Zm-1.16 16.2h1.83L7.78 4.73H5.82l10.55 14.47Z" />
    </svg>
  );
}

function SocialIconLink({ link }: { link: ComingSoonSocialLink }) {
  const Icon = link.icon !== "x" ? link.icon : null;

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full transition duration-300",
        link.featured
          ? "bg-primary text-white shadow-[0_10px_24px] shadow-primary/24 hover:bg-primary/90"
          : "bg-[#ece6e3] text-[#4f4747] hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_10px_24px] hover:shadow-primary/24",
      )}
    >
      {Icon ? <Icon className="h-[18px] w-[18px]" /> : <XIcon className="h-[18px] w-[18px]" />}
    </Link>
  );
}

export function ComingSoonSocialLinks() {
  return (
    <div className="text-center lg:text-right">
      <p className="text-[12px] font-medium text-[#9a908c] sm:text-[13px]">
        {comingSoonPageData.followUsLabel}
      </p>
      <div className="mt-3 flex items-center justify-center gap-3 sm:gap-4 lg:justify-end">
        {comingSoonPageData.socialLinks.map((link) => (
          <SocialIconLink key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}
