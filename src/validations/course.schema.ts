import { z } from "zod";
import { CourseLevel } from "@/enums";

export const courseFilterSchema = z.object({
  search: z.string().optional(),
  level: z.nativeEnum(CourseLevel).optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().optional(),
});

export type CourseFilterValues = z.infer<typeof courseFilterSchema>;
