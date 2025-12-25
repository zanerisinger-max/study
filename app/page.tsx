"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white relative">
        {/* Hamburger menu */}
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
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

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 bg-gray-700 text-white w-48 p-4 space-y-2 shadow-md rounded">
            <button className="w-full text-left hover:bg-gray-600 px-2 py-1 rounded">Home</button>
            <button className="w-full text-left hover:bg-gray-600 px-2 py-1 rounded">Features</button>
            <button className="w-full text-left hover:bg-gray-600 px-2 py-1 rounded">About</button>
          </div>
        )}
      </header>

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

