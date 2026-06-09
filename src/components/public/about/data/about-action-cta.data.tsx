import { Briefcase, FileText, PlaySquare } from "lucide-react";
import { ROUTES } from "@/constants";
import type { ActionCtaItem } from "@/types/action-cta.types";

export const aboutActionCtaData = {
  items: [
    {
      id: "blogs",
      title: "Read our latest blogs & news",
      href: ROUTES.blog,
      theme: "teal",
      icon: <FileText className="h-7 w-7 stroke-[1.6]" aria-hidden />,
    },
    {
      id: "get-started",
      title: "Learn how to get started on Skillophy",
      href: ROUTES.auth.register,
      theme: "purple",
      icon: <PlaySquare className="h-7 w-7 stroke-[1.6]" aria-hidden />,
    },
    {
      id: "careers",
      title: "Explore open positions & Join our team",
      href: ROUTES.career,
      theme: "blue",
      icon: <Briefcase className="h-7 w-7 stroke-[1.6]" aria-hidden />,
    },
  ] satisfies ActionCtaItem[],
};
