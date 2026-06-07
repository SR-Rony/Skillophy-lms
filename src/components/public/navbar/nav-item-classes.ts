import { cn } from "@/utils";

export function navItemClassName(isActive = false, className?: string) {
  return cn(
    "font-medium text-gray-700 transition-colors hover:text-primary",
    isActive && "text-primary",
    className
  );
}

export function navItemClassNameMobile(isActive = false, className?: string) {
  return cn(
    "font-medium text-[#25201f] transition-colors hover:text-primary",
    isActive && "text-primary",
    className
  );
}

export function isCoursesRoute(pathname: string) {
  return pathname === "/courses" || pathname.startsWith("/courses/");
}

export function isBusinessRoute(pathname: string) {
  return pathname === "/business" || pathname.startsWith("/business/");
}

export function isRegisterRoute(pathname: string) {
  return pathname === "/register" || pathname.startsWith("/register/");
}

export function isCartRoute(pathname: string) {
  return pathname === "/cart" || pathname === "/checkout";
}
