"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white relative">
        {/* Hamburger menu */}
        <button
          className="text-white text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          &#9776;
        </button>

        {/* Centered Logo / Name */}
        <h1
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
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
          <button
            className="text-left hover:bg-gray-700 px-2 py-2 rounded"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </button>
          <button
            className="text-left hover:bg-gray-700 px-2 py-2 rounded"
            onClick={() => scrollToSection("features")}
          >
            Features
          </button>
          <button
            className="text-left hover:bg-gray-700 px-2 py-2 rounded"
            onClick={() => scrollToSection("testimonials")}
          >
            Testimonials
          </button>
          <button
            className="text-left hover:bg-gray-700 px-2 py-2 rounded"
            onClick={() => scrollToSection("how-it-works")}
          >
            How It Works
          </button>
          <button
            className="text-left hover:bg-gray-700 px-2 py-2 rounded"
            onClick={() => scrollToSection("footer")}
          >
            Footer
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center justify-center p-10 mt-10">
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
        </section>

        {/* Features Section */}
        <section id="features" className="flex flex-col items-center p-10">
          <h3 className="text-3xl font-bold mb-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 rounded shadow">AI explanations</div>
            <div className="p-4 bg-gray-100 rounded shadow">Organized study sessions</div>
            <div className="p-4 bg-gray-100 rounded shadow">Progress tracking</div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="flex flex-col items-center p-10 bg-gray-50">
          <h3 className="text-3xl font-bold mb-4">Testimonials</h3>
          <p className="max-w-xl text-center">“Study Co helped me ace my exams!” – Student A</p>
          <p className="max-w-xl text-center">“I finally understand complex topics thanks to Study Co.” – Student B</p>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="flex flex-col items-center p-10">
          <h3 className="text-3xl font-bold mb-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2 max-w-xl">
            <li>Sign up for an account</li>
            <li>Ask questions or upload study materials</li>
            <li>Get AI explanations and track your progress</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="text-center p-4 text-gray-500 bg-gray-100">
        &copy; 2025 Study Co. All rights reserved.
      </footer>
    </div>
  );
}

