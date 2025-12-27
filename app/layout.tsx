"use client"; //

import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body className="bg-black text-white relative min-h-screen flex flex-col">
        
        {/* GLOBAL TOP GRADIENT */}
        <div className="absolute top-0 left-0 w-full h-48 pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-b from-red-700 via-red-900 to-transparent opacity-70 animate-pulse-slow" />
        </div>

        {/* HEADER + SIDEBAR */}
        {!hideHeader && <Header />}

        {/* PAGE CONTENT */}
        <main className="relative z-10 flex-1 pt-20 min-h-screen">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-gray-800 text-gray-400 text-sm py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© 2025 Study Co™. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-red-500">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-red-500">
              Privacy Policy
            </Link>
          </div>
        </footer>

      </body>
    </html>
  );
}
