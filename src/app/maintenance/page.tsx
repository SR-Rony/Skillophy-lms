import type { Metadata } from "next";
import { PublicFooter } from "@/components/layouts/public-footer";
import { PublicHeader } from "@/components/layouts/public-header";
import { MaintenancePageContent } from "@/components/public/maintenance";

export const metadata: Metadata = {
  title: "Under Maintenance",
  description: "Skillophy is currently under maintenance. We will be back soon.",
};

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />
      <main className="flex flex-1 flex-col">
        <MaintenancePageContent />
      </main>
      <PublicFooter />
    </div>
  );
}
