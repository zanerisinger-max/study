"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-black relative">
        <button
          className="text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          &#9776;
        </button>

        <h1
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Study Co
        </h1>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          className="text-2xl p-4"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>

        <nav className="flex flex-col p-4 space-y-4">
          <button onClick={() => router.push("/")}>Home</button>
          <button onClick={() => router.push("/pricing")}>Pricing</button>
          <button onClick={() => router.push("/about-us")}>About Us</button>
          <button onClick={() => router.push("/contact")}>Contact</button>
          <button onClick={() => router.push("/help")}>Help</button>
          <button onClick={() => router.push("/reviews")}>Reviews</button>
        </nav>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-10">
        <h2 className="text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6">
          Privacy Policy
        </h2>

        <p className="text-gray-300 mb-4">
          Study Co respects your privacy. This application is currently under
          development and not publicly released.
        </p>

        <p className="text-gray-300 mb-4">
          We do not sell personal information. Any data collected is used solely
          to provide core functionality.
        </p>
      </main>

    </div>
  );
}
