"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username, "Password:", password);
    router.push("/after-login"); // placeholder after login
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
          {/* Username Field */}
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Field (only shows if username typed) */}
          {username && (
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          {/* Login Button (only shows if password typed) */}
          {password && (
            <button
              onClick={handleLogin}
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Log In
            </button>
          )}

          {/* Create Account link (small blue text) */}
          <div className="text-center">
            <span
              className="text-blue-500 text-sm cursor-pointer hover:underline"
              onClick={() => router.push("/signup")}
            >
              Create Account
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500">
        &copy; 2025 Study Co™
      </footer>
    </div>
  );
}
