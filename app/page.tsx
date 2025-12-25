"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Study Assistant</h1>
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 p-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Study Assistant</h2>
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
        &copy; 2025 Study Assistant. All rights reserved.
      </footer>
    </div>
  );
}
