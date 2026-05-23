import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Wishlist" };

export default function StudentWishlistPage() {
  return (
    <ModulePlaceholder
      title="Wishlist"
      description="Courses you saved for later."
      feature="wishlist"
    />
  );
}
