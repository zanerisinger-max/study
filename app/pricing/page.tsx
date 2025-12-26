"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const plans = [
    { name: "Free", description: "Basic AI study tools with limited access.", price: "$0/month" },
    { name: "Pro", description: "Full AI guidance and unlimited features.", price: "$9.99/month" },
    { name: "Premium", description: "Priority support and advanced tools.", price: "$19.99/month" },
  ];

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
            className="text-left hover:bg-gray-800 px-2 py-2 rounded"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="text-left hover:bg-gray-800 px-2 py-2 rounded"
            onClick={() => router.push("/features")}
          >
            Features
          </button>
          <button
            className="text-left hover:bg-gray-800 px-2 py-2 rounded"
            onClick={() => router.push("/pricing")}
          >
            Pricing
          </button>
          <button
            className="text-left hover:bg-gray-800 px-2 py-2 rounded"
            onClick={() => router.push("/about-us")}
          >
            About Us
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 p-10 mt-10 space-y-16">
        {/* Pricing Header */}
        <section className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Choose the plan that fits your learning style. Upgrade anytime to get more features.
          </p>
        </section>

        {/* Pricing Plans */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="p-6 border border-gray-700 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-red-500 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <p className="text-xl font-bold">{plan.price}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
