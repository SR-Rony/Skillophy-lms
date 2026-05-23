import Link from "next/link";
import { siteConfig } from "@/config";
import { Logo } from "@/components/shared/logo";

export function PublicFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto flex flex-col gap-8 px-4 py-12 md:flex-row md:justify-between">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
          <div>
            <h4 className="mb-3 font-semibold">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/support">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
