"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();
  useEffect(() => {
    // Temporarily redirect any direct request to /test to /login
    router.replace("/login");
  }, [router]);

  return null;
}