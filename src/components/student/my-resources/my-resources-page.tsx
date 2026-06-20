import type { StudentResourcesPageData } from "@/types/student-resources.types";
import { MyResourcesContent } from "./my-resources-content";

interface MyResourcesPageProps {
  data: StudentResourcesPageData;
}

export function MyResourcesPage({ data }: MyResourcesPageProps) {
  return <MyResourcesContent data={data} />;
}
