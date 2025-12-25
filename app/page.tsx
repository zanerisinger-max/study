"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white relative">
        {/* Hamburger menu */}
        <button
          className="text-white text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          &#9776; {/* three bars */}
        </button>

        {/* Centered Logo / Name */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
          Study Co
        </h1>

        {/* Login Button */}
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Login
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close button */}
        <button
          className="text-2xl p-4"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>

        {/* Sidebar Menu */}
        <nav className="flex flex-col p-4 space-y-4">
          <button className="text-left hover:bg-gray-700 px-2 py-2 rounded" onClick={() => router.push("/")}>
            Home
          </button>
          <button className="text-left hover:bg-gray-700 px-2 py-2 rounded">
            Features
          </button>
          <button className="text-left hover:bg-gray-700 px-2 py-2 rounded">
            About
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 p-6 mt-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to Study Co</h2>
        <p className="text-lg text-center max-w-xl mb-6">
          Your AI-powered study helper. Learn faster, organize better, and get
          explanations in real-time. Click Login to get started.
        </p>
        <button
          onClick={() => router.push("/signup")}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white text-lg"
        >
          Create Account
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co. All rights reserved.
      </footer>
    </div>
  );
}
