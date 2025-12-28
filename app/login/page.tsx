"use client";

import { useState, useRef } from "react";
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

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const userFound = mockUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setError("");
      router.push("/test"); // placeholder page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center flex-1 mt-24">
      <div className="flex flex-col space-y-4 w-80">
        {/* Error message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Username Field */}
        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && username) {
              passwordRef.current?.focus();
            }
          }}
        />

        {/* Password Field */}
        {username && (
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && password) handleLogin();
              if (e.key === "Backspace" && password.length === 0)
                usernameRef.current?.focus();
            }}
          />
        )}

        {/* Login Button */}
        {password && (
          <button
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white"
          >
            Log In
          </button>
        )}

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
  );
}
