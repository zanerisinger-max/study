"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Mock users for testing
const mockUsers = [
  { username: "testuser", password: "password123" },
  { username: "student", password: "studyco" },
];

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Check if username/password matches mock database
    const userFound = mockUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setError("");
      router.push("/after-login"); // placeholder page
    } else {
      setError("Invalid username or password");
    }
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
          {/* Error message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Username Field */}
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Field (always visible) */}
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white"
          >
            Log In
          </button>

          {/* Create Account link */}
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
