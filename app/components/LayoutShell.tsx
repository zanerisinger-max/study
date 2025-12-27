"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const hideHeader =
    pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!hideHeader && <Header />}
      <div className={`${!hideHeader ? "pt-20" : ""}`}>
        {children}
      </div>
    </>
  );
}
