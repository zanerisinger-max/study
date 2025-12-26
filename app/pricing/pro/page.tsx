"use client";

import { useRouter } from "next/navigation";

export default function FreePlan() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-black relative">
        <h1
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Study Co
        </h1>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center space-y-6">
        <h2 className="text-5xl font-bold">Free Plan</h2>
        <p className="text-gray-300 max-w-2xl">
          Get started with the basics! Limited access to AI study tools. Perfect for casual learners.
        </p>
        <ul className="list-disc list-inside text-left max-w-xl">
          <li>Access to basic AI explanations</li>
          <li>Limited study sessions per week</li>
          <li>Track your progress minimally</li>
        </ul>
        <button
          onClick={() => router.push("/pricing")}
          className="mt-6 bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded"
        >
          Back to Pricing
        </button>
      </main>

      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
