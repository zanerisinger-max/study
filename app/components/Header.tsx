"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="flex justify-between items-center p-4 relative">
          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            &#9776;
          </button>

          <h1
            className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            Study Co
          </h1>

          <button
            onClick={() => router.push("/login")}
            className="bg-red-700 hover:bg-red-600 transition-transform hover:scale-105 px-4 py-2 rounded"
          >
            Login
          </button>
        </div>
      </header>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="text-2xl p-4"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>

        <nav className="flex flex-col p-4 space-y-4">
          {[
            ["Home", "/"],
            ["Pricing", "/pricing"],
            ["About Us", "/about-us"],
            ["Contact", "/contact"],
            ["Help", "/help"],
            ["Reviews", "/reviews"],
          ].map(([label, path]) => (
            <button
              key={path}
              className="text-left hover:bg-red-800 px-2 py-2 rounded"
              onClick={() => {
                router.push(path);
                setSidebarOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
