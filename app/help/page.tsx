"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Help() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-black relative">
        <button
          className="text-white text-2xl"
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
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-2xl p-4"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col p-4 space-y-4">
          <button
            className="text-left hover:bg-red-800 px-2 py-2 rounded"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="text-left hover:bg-red-800 px-2 py-2 rounded"
            onClick={() => router.push("/pricing")}
          >
            Pricing
          </button>
          <button
            className="text-left hover:bg-red-800 px-2 py-2 rounded"
            onClick={() => router.push("/about-us")}
          >
            About Us
          </button>
          <button
            className="text-left hover:bg-red-800 px-2 py-2 rounded"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
          <button
            className="text-left hover:bg-red-800 px-2 py-2 rounded"
            onClick={() => router.push("/help")}
          >
            Help
          </button>
          <button
            className="text-left hover:bg-red-800 px-2 py-2 rounded"
            onClick={() => router.push("/reviews")}
          >
            Reviews
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 p-10 mt-10 space-y-12 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Help Center</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Find answers to common questions, guides, and tutorials to get the most out of Study Co.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="p-6 border border-gray-700 rounded">
            <h3 className="text-2xl font-bold mb-2">Getting Started</h3>
            <p>Step-by-step guide on creating an account and navigating the platform.</p>
          </div>
          <div className="p-6 border border-gray-700 rounded">
            <h3 className="text-2xl font-bold mb-2">Using AI Tools</h3>
            <p>Learn how to get explanations, track progress, and use AI-powered study features.</p>
          </div>
          <div className="p-6 border border-gray-700 rounded">
            <h3 className="text-2xl font-bold mb-2">FAQ</h3>
            <p>Answers to common questions about Study Co features and functionality.</p>
          </div>
          <div className="p-6 border border-gray-700 rounded">
            <h3 className="text-2xl font-bold mb-2">Support</h3>
            <p>How to contact us if you need further assistance.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
