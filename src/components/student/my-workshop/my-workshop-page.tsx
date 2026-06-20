import type { StudentWorkshopPageData } from "@/types/student-workshop.types";
import { MyWorkshopContent } from "./my-workshop-content";

interface MyWorkshopPageProps {
  data: StudentWorkshopPageData;
}

export function MyWorkshopPage({ data }: MyWorkshopPageProps) {
  return <MyWorkshopContent data={data} />;
}
