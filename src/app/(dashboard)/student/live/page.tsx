import { redirect } from "next/navigation";
import { ROUTES } from "@/constants";

export const metadata = { title: "Live Classes" };

export default function StudentLivePage() {
  redirect(ROUTES.student.courseLive("hsc-25-online-batch", "live-l10"));
}
