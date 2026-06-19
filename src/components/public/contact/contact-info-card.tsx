import { Heading } from "@/components/shared/heading";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/utils";

const iconToneStyles = {
  orange: {
    wrapper: "bg-[#fff4e8] text-[#ff9a2e]",
    icon: MapPin,
  },
  teal: {
    wrapper: "bg-[#e8f7f4] text-[#2bb8a7]",
    icon: Phone,
  },
  purple: {
    wrapper: "bg-[#f3eefb] text-[#8b6fd6]",
    icon: Mail,
  },
} as const;

interface ContactInfoLine {
  text: string;
  href?: string;
}

interface ContactInfoCardProps {
  title: string;
  lines: readonly ContactInfoLine[];
  iconTone: keyof typeof iconToneStyles;
  className?: string;
}

function ContactInfoLineItem({ line }: { line: ContactInfoLine }) {
  if (line.href) {
    return (
      <Link
        href={line.href}
        className="block text-[14px] leading-[1.7] text-[#6f6562] transition-colors hover:text-primary sm:text-[15px]"
      >
        {line.text}
      </Link>
    );
  }

  return (
    <p className="text-[14px] leading-[1.7] text-[#6f6562] sm:text-[15px]">{line.text}</p>
  );
}

export function ContactInfoCard({ title, lines, iconTone, className }: ContactInfoCardProps) {
  const { wrapper, icon: Icon } = iconToneStyles[iconTone];

  return (
    <article
      className={cn(
        "rounded-[18px] border border-[#eee1de] bg-white p-6 shadow-[0_18px_38px_rgba(80,37,31,0.06)] sm:p-7",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full",
          wrapper,
        )}
      >
        <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden />
      </div>

      <Heading as="h3" variant="course-card-sm">
        {title}
      </Heading>

      <div className="mt-3 space-y-1">
        {lines.map((line) => (
          <ContactInfoLineItem key={line.text} line={line} />
        ))}
      </div>
    </article>
  );
}
