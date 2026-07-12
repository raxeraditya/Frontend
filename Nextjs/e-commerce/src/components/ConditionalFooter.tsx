// components/ConditionalFooter.tsx
"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  // Array of routes where the footer should NOT be displayed
  const hiddenRoutes = ["/login", "/signup"];

  // If the current path matches any hidden route, render nothing
  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return <Footer />;
}
