import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title={`About ${siteConfig.name}`} description={siteConfig.description} />
    </div>
  );
}
