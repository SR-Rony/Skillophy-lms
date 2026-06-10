import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

interface PublicCtaLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function PublicCtaLink({ href, children, className }: PublicCtaLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Button asChild variant="publicCta" size="publicCta" className={cn(className)}>
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </Button>
  );
}

export { PublicCtaLink };
