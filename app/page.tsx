"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      {/* Red gradient dripping effect - taller */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-red-900 to-transparent pointer-events-none z-0"></div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-black relative z-10">
        <button
          className="text-white text-2xl z-10"
          onClick={() => setSidebarOpen(true)}
        >
          &#9776;
        </button>
        <h1
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold cursor-pointer z-10"
          onClick={() => router.push("/")}
        >
          Study Co
        </h1>
        <div className="flex space-x-4 z-10">
          <button
            className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
          <button
            className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105"
            onClick={() => router.push("/signup")}
          >
            Create Account
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button className="text-2xl p-4" onClick={() => setSidebarOpen(false)}>
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
      <main className="flex flex-col items-center flex-1 p-10 mt-10 space-y-20 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Study Co</h2>
          <p className="text-lg text-center max-w-xl mb-6">
            Your AI-powered study helper. Learn faster, organize better, and
            get explanations in real-time. Click Login to get started. This app
            is still in progress and not released to the public yet — do not
            use.
          </p>
          <button
            onClick={() => router.push("/signup")}
            className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded text-white text-lg transform transition-transform duration-300 hover:scale-105"
          >
            Create Account
          </button>
        </section>

        {/* Features Section */}
        <section className="flex flex-col items-center text-center max-w-6xl w-full">
          <h3 className="text-4xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["AI Guidance", "Organized Study", "Progress Tracking", "Easy Interface"].map((feature) => (
              <div
                key={feature}
                className="relative p-4 border border-gray-700 rounded group"
              >
                {/* Gradient glow around box */}
                <div className="absolute -inset-1 rounded bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></div>
                <h4 className="font-bold mb-2">{feature}</h4>
                <p>
                  {feature === "AI Guidance" &&
                    "Get real-time AI explanations for difficult concepts."}
                  {feature === "Organized Study" &&
                    "Keep your study sessions structured and focused."}
                  {feature === "Progress Tracking" &&
                    "Track your learning and see improvements over time."}
                  {feature === "Easy Interface" &&
                    "Simple, clean, and distraction-free design."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="flex flex-col items-center text-center max-w-6xl w-full">
          <h3 className="text-4xl font-bold mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-2">1. Sign Up</h4>
              <p>Create an account and start your journey.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">2. Choose Topics</h4>
              <p>Select subjects you want to study.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">3. Get AI Help</h4>
              <p>Receive guidance and explanations from AI.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">4. Track Progress</h4>
              <p>Monitor your learning and stay on track.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col items-center text-center max-w-6xl w-full">
          <h3 className="text-4xl font-bold mb-8">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: `"Study Co helped me ace my exams! Highly recommend."`, author: "- Jane D." },
              { text: `"The AI explanations make learning so much easier."`, author: "- Alex K." }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="relative p-4 border border-gray-700 rounded group"
              >
                {/* Gradient glow around box */}
                <div className="absolute -inset-1 rounded bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></div>
                <p>{testimonial.text}</p>
                <p className="mt-2 font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Us Preview */}
        <section className="flex flex-col items-center text-center max-w-4xl w-full">
          <h3 className="text-4xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 mb-4">
            Study Co is dedicated to creating a distraction-free, effective
            study platform for students.
          </p>
          <button
            className="text-red-500 hover:underline"
            onClick={() => router.push("/about-us")}
          >
            Learn More
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
