"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // For now, just log to console and later redirect
    console.log("Username:", username, "Password:", password);
    router.push("/after-login"); // we'll create this page next, for now can go to a placeholder
  };

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

      {/* Centered Login Form */}
      <main className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col space-y-4 w-80">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white"
          >
            Log In
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-white"
          >
            Create Account
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
