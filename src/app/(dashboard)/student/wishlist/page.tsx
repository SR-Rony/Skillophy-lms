import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Wishlist" };

export default function StudentWishlistPage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Wishlist"
        description="Courses you saved for later."
        feature="wishlist"
      />
    </Container>
  );
}
