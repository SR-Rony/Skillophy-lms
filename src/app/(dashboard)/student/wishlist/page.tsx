import { StudentWishlistPage } from "@/components/student/student-wishlist-page";
import { wishlistCourses } from "@/data/mock/my-courses.mock";

export const metadata = { title: "Wishlist" };

export default function StudentWishlistRoute() {
  return <StudentWishlistPage courses={wishlistCourses} />;
}
