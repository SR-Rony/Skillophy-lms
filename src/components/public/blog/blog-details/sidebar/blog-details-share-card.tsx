import { Facebook, Link2, Linkedin, Printer, Share2 } from "lucide-react";
import { Heading } from "@/components/shared/heading";

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Copy link", icon: Link2, href: "#" },
  { label: "Share", icon: Share2, href: "#" },
  { label: "Print", icon: Printer, href: "#" },
];

const iconButtonClassName =
  "flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6] text-[#374151] transition-colors duration-200 hover:bg-[#FF5247] hover:text-white";

export function BlogDetailsShareCard() {
  return (
    <div className="rounded-[12px] border border-[#E5E7EB] bg-white px-5 py-4">
      <Heading as="h3" variant="card-title-xs" className="font-sans text-[16px] text-[#111827]">
        Share This Blog
      </Heading>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {socialLinks.map(({ label, icon: Icon, href }) => (
          <a key={label} href={href} aria-label={label} className={iconButtonClassName}>
            <Icon className="h-[18px] w-[18px]" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}
