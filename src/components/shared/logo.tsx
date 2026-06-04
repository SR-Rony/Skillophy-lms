import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config";
import { cn } from "@/utils";

export const LOGO_SRC = "/images/skillophy-logo.png";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function Logo({ className, imageClassName, priority = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={LOGO_SRC}
        alt={siteConfig.name}
        width={180}
        height={44}
        priority={priority}
        className={cn("h-8 w-auto object-contain sm:h-9", imageClassName)}
      />
    </Link>
  );
}
