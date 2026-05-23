import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/config";
import { cn } from "@/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-semibold", className)}>
      <GraduationCap className="h-7 w-7 text-primary" />
      {showText && <span className="text-lg tracking-tight">{siteConfig.name}</span>}
    </Link>
  );
}
