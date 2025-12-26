"use client";

import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Center Logo */}
      <header className="flex justify-center p-6">
        <h1
          className="text-3xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Study Co
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl text-lg text-gray-300">
          Study Co is an AI-powered study platform built to help students learn
          faster, understand concepts better, and stay organized.  
          <br /><br />
          Our goal is to create a clean, powerful, and distraction-free study
          experience that actually helps students succeed.
        </p>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
