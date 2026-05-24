import { Container } from "@/components/shared";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/config";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-12">
      <PageHeader title={`About ${siteConfig.name}`} description={siteConfig.description} />
    </Container>
  );
}
