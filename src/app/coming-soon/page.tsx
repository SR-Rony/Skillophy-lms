import type { Metadata } from "next";
import { ComingSoonPageContent } from "@/components/public/coming-soon";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Skillophy is launching soon. Subscribe to be the first to know when our new site is live.",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-white">
      <ComingSoonPageContent />
    </main>
  );
}
