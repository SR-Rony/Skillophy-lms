export type StudentWorkshopTabId = "upcoming" | "completed";

export interface StudentWorkshopEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface StudentWorkshopItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  schedule: string;
  startsInLabel?: string;
  joinUrl: string;
  buttonLabel: string;
}

export interface StudentWorkshopTab {
  id: StudentWorkshopTabId;
  label: string;
  workshops: StudentWorkshopItem[];
  emptyState: StudentWorkshopEmptyState;
}

export interface StudentWorkshopPageData {
  title: string;
  subtitle: string;
  defaultTabId: StudentWorkshopTabId;
  tabs: StudentWorkshopTab[];
}
